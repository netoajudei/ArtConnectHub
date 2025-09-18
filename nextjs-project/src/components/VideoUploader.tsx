import { useState, useRef } from "react";
import { Upload, X, Play, Pause, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { externalApiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface VideoUploaderProps {
  onUploadSuccess?: (videoUrl: string) => void;
  endpoint?: string;
  label?: string;
  buttonText?: string;
  maxSize?: number; // em MB
  maxDuration?: number; // em segundos
  allowedTypes?: string[];
}

export default function VideoUploader({
  onUploadSuccess,
  endpoint = "/media/upload",
  label = "Upload de Vídeo",
  buttonText = "Selecionar Vídeo",
  maxSize = 10, // 10MB padrão
  maxDuration = 30, // 30 segundos padrão
  allowedTypes = ["video/mp4", "video/quicktime", "video/webm"]
}: VideoUploaderProps) {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const { toast } = useToast();
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Verificar tipo do arquivo
      if (!allowedTypes.includes(file.type)) {
        toast({
          title: "Tipo de arquivo não suportado",
          description: `Formatos aceitos: ${allowedTypes.join(", ")}`,
          variant: "destructive"
        });
        return;
      }
      
      // Verificar tamanho do arquivo
      if (file.size > maxSize * 1024 * 1024) {
        toast({
          title: "Arquivo muito grande",
          description: `O tamanho máximo é de ${maxSize}MB`,
          variant: "destructive"
        });
        return;
      }
      
      // Criar URL para preview
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
      setVideoFile(file);
      
      // Verificar duração do vídeo quando metadados forem carregados
      const video = document.createElement('video');
      video.preload = 'metadata';
      video.onloadedmetadata = () => {
        URL.revokeObjectURL(video.src);
        if (video.duration > maxDuration) {
          setVideoFile(null);
          setPreview(null);
          toast({
            title: "Vídeo muito longo",
            description: `A duração máxima é de ${maxDuration} segundos`,
            variant: "destructive"
          });
        } else {
          setDuration(video.duration);
        }
      };
      video.src = previewUrl;
    }
  };

  const handleUpload = async () => {
    if (!videoFile) return;
    
    setUploading(true);
    setProgress(0);
    
    try {
      const formData = new FormData();
      formData.append('video', videoFile);
      
      // Simular progresso
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + Math.random() * 10;
          return newProgress > 90 ? 90 : newProgress;
        });
      }, 500);
      
      // Enviar para o servidor
      const response = await externalApiRequest(
        "POST", 
        endpoint, 
        formData as unknown,
        true // isFormData
      );
      
      clearInterval(progressInterval);
      setProgress(100);
      
      const data = await response.json();
      
      if (data.success) {
        toast({
          title: "Upload concluído",
          description: "Seu vídeo foi enviado com sucesso!",
          variant: "default"
        });
        
        // Chamar callback com URL do vídeo
        if (onUploadSuccess && data.videoUrl) {
          onUploadSuccess(data.videoUrl);
        }
      } else {
        throw new Error(data.message || "Erro ao fazer upload do vídeo");
      }
    } catch (error) {
      toast({
        title: "Erro no upload",
        description: error instanceof Error ? error.message : "Erro desconhecido",
        variant: "destructive"
      });
    } finally {
      setUploading(false);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    
    setIsPlaying(!isPlaying);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  const clearSelection = () => {
    setVideoFile(null);
    setPreview(null);
    setDuration(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formatDuration = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  return (
    <div className="w-full space-y-4">
      <label className="block text-sm font-medium text-gray-700 mb-1 font-['Comic_Neue']">
        {label}
      </label>
      
      {!preview ? (
        <>
          <div 
            className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-1 text-sm text-gray-600 font-['Comic_Neue']">
              Clique para selecionar um vídeo
            </p>
            <p className="mt-1 text-xs text-gray-500 font-['Comic_Neue']">
              (Máx: {maxSize}MB, {maxDuration} segundos)
            </p>
            <input
              ref={fileInputRef}
              type="file"
              accept={allowedTypes.join(",")}
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>
          <Button 
            onClick={() => fileInputRef.current?.click()}
            variant="secondary"
            className="w-full font-['Comic_Neue']"
          >
            <Upload className="mr-2 h-4 w-4" />
            {buttonText}
          </Button>
        </>
      ) : (
        <div className="space-y-4">
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
            <video
              ref={videoRef}
              src={preview}
              className="w-full h-full object-contain"
              onEnded={handleVideoEnd}
            />
            
            <div className="absolute inset-0 flex items-center justify-center">
              {!isPlaying && (
                <button
                  onClick={togglePlay}
                  className="bg-primary/80 text-white rounded-full p-3 hover:bg-primary transition-colors"
                >
                  <Play className="h-6 w-6" />
                </button>
              )}
            </div>
            
            <div className="absolute top-2 right-2 flex space-x-2">
              <button
                onClick={clearSelection}
                className="bg-gray-800/80 text-white rounded-full p-1.5 hover:bg-gray-700 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between bg-gray-800/60 rounded-md px-3 py-1 text-white text-xs font-['Comic_Neue']">
              <button onClick={togglePlay}>
                {isPlaying ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
              </button>
              <span>{formatDuration(duration)}</span>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <Button
              onClick={clearSelection}
              variant="outline"
              className="flex-1 font-['Comic_Neue']"
              disabled={uploading}
            >
              <X className="mr-2 h-4 w-4" />
              Remover
            </Button>
            
            <Button
              onClick={handleUpload}
              className="flex-1 font-['Comic_Neue']"
              disabled={uploading}
            >
              {uploading ? (
                <>
                  <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                  Enviando...
                </>
              ) : (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Enviar Vídeo
                </>
              )}
            </Button>
          </div>
          
          {uploading && (
            <div className="space-y-1">
              <Progress value={progress} className="h-2" />
              <p className="text-xs text-gray-500 text-right font-['Comic_Neue']">
                {Math.round(progress)}%
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}