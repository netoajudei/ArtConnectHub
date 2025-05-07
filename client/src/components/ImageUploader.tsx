import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { EXTERNAL_API_URL } from "@/lib/queryClient";
import { useAuth } from "@/hooks/use-auth-context";

interface ImageUploaderProps {
  onUploadSuccess?: (imageUrl: string) => void;
  endpoint?: string; // Endpoint específico para upload
  label?: string;
  buttonText?: string;
}

export default function ImageUploader({
  onUploadSuccess,
  endpoint = "/upload/image",
  label = "Enviar imagem",
  buttonText = "Selecionar arquivo"
}: ImageUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const { token } = useAuth();

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      // Verificar tamanho (5MB máximo)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "Arquivo muito grande",
          description: "O tamanho máximo permitido é 5MB.",
          variant: "destructive",
        });
        return;
      }
      
      // Verificar tipo de arquivo (apenas imagens)
      if (!file.type.startsWith("image/")) {
        toast({
          title: "Tipo de arquivo inválido",
          description: "Apenas imagens são permitidas.",
          variant: "destructive",
        });
        return;
      }
      
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile || !token) return;
    
    setIsUploading(true);
    
    try {
      // Criar FormData para enviar o arquivo
      const formData = new FormData();
      formData.append("file", selectedFile);
      
      // Enviar para o backend
      const response = await fetch(`${EXTERNAL_API_URL}${endpoint}`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`
        },
        body: formData
      });
      
      if (!response.ok) {
        throw new Error("Falha ao fazer upload da imagem");
      }
      
      const data = await response.json();
      
      // Exibir mensagem de sucesso
      toast({
        title: "Upload concluído",
        description: "Imagem enviada com sucesso!",
        variant: "default",
      });
      
      // Notificar o componente pai sobre o sucesso
      if (onUploadSuccess && data.imageUrl) {
        onUploadSuccess(data.imageUrl);
      }
      
      // Limpar seleção
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      toast({
        title: "Erro no upload",
        description: error instanceof Error ? error.message : "Ocorreu um erro ao enviar a imagem.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex flex-col space-y-2">
        <label className="font-['Comic_Neue'] font-bold">{label}</label>
        
        <div className="flex flex-col space-y-4">
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleFileSelect}
          />
          
          <Button 
            type="button" 
            variant="outline"
            onClick={() => fileInputRef.current?.click()}
          >
            {buttonText}
          </Button>
          
          {selectedFile && (
            <div className="flex flex-col space-y-2">
              <div className="text-sm font-['Comic_Neue']">
                Arquivo selecionado: {selectedFile.name}
              </div>
              
              <div className="relative w-full h-40 bg-gray-100 rounded-md overflow-hidden">
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Preview"
                  className="w-full h-full object-contain"
                />
              </div>
              
              <Button 
                type="button"
                onClick={handleUpload}
                disabled={isUploading}
              >
                {isUploading ? (
                  <>
                    <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                    Enviando...
                  </>
                ) : "Enviar imagem"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}