import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import VideoUploader from "@/components/VideoUploader";
import { useAuth } from "@/hooks/use-auth-context";
import { Play, Video, Clock, Heart, Share2 } from "lucide-react";
import ProtectedRoute from "@/components/ProtectedRoute";

interface VideoCardProps {
  title: string;
  author: string;
  duration: string;
  thumbnailUrl: string;
  videoUrl: string;
  likes: number;
  views: number;
}

function VideoCard({ 
  title, 
  author, 
  duration, 
  thumbnailUrl, 
  videoUrl,
  likes,
  views
}: VideoCardProps) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useState<HTMLVideoElement | null>(null);

  const handlePlayClick = () => {
    if (videoRef[0]) {
      if (playing) {
        videoRef[0].pause();
      } else {
        videoRef[0].play();
      }
      setPlaying(!playing);
    }
  };

  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video bg-gray-900">
        {playing ? (
          <video 
            ref={(el) => { videoRef[1](el); }}
            src={videoUrl} 
            className="w-full h-full object-contain" 
            controls 
            autoPlay
            onEnded={() => setPlaying(false)}
          />
        ) : (
          <>
            <img 
              src={thumbnailUrl} 
              alt={title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <button 
                onClick={handlePlayClick}
                className="bg-primary/80 text-white rounded-full p-3 hover:bg-primary transition-colors"
              >
                <Play className="h-8 w-8" />
              </button>
            </div>
            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
              {duration}
            </div>
          </>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-['Bangers'] text-lg">{title}</h3>
        <p className="text-sm text-gray-500 font-['Comic_Neue']">{author}</p>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Heart className="h-4 w-4 mr-1" />
              <span>{likes}</span>
            </div>
            <div className="flex items-center">
              <Video className="h-4 w-4 mr-1" />
              <span>{views}</span>
            </div>
          </div>
          <button className="text-primary hover:text-primary/80">
            <Share2 className="h-5 w-5" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function VideosPage() {
  const { user } = useAuth();
  const [uploadedVideos, setUploadedVideos] = useState<string[]>([]);
  
  // Exemplos de vídeos (simulados)
  const sampleVideos = [
    {
      title: "Como economizar nas compras",
      author: "Super Lista Dicas",
      duration: "2:45",
      thumbnailUrl: "https://placekitten.com/600/340",
      videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
      likes: 24,
      views: 128
    },
    {
      title: "Técnicas de negociação com fornecedores",
      author: "Renata Comercial",
      duration: "1:50",
      thumbnailUrl: "https://placekitten.com/601/340",
      videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
      likes: 18,
      views: 67
    },
    {
      title: "Restaurante em destaque: Casa Toscana",
      author: "Parceiros Premium",
      duration: "0:58",
      thumbnailUrl: "https://placekitten.com/602/340",
      videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
      likes: 42,
      views: 215
    }
  ];
  
  const handleVideoUploadSuccess = (videoUrl: string) => {
    setUploadedVideos(prev => [...prev, videoUrl]);
  };
  
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-['Bangers'] text-gray-800">Vídeos</h1>
            <p className="text-gray-500 font-['Comic_Neue']">
              Compartilhe e assista a vídeos curtos com dicas e promoções!
            </p>
          </div>
          
          <Tabs defaultValue="browse" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="browse" className="font-['Comic_Neue']">Explorar</TabsTrigger>
              <TabsTrigger value="upload" className="font-['Comic_Neue']">Fazer Upload</TabsTrigger>
              {uploadedVideos.length > 0 && (
                <TabsTrigger value="my-videos" className="font-['Comic_Neue']">
                  Meus Vídeos ({uploadedVideos.length})
                </TabsTrigger>
              )}
            </TabsList>
            
            <TabsContent value="browse">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sampleVideos.map((video, index) => (
                  <VideoCard key={index} {...video} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="upload">
              <Card>
                <CardHeader>
                  <CardTitle>Faça upload de um vídeo curto</CardTitle>
                  <CardDescription>
                    Compartilhe dicas, promoções ou destaques do seu estabelecimento
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <VideoUploader 
                    onUploadSuccess={handleVideoUploadSuccess}
                    maxDuration={60}
                    maxSize={20}
                  />
                </CardContent>
              </Card>
            </TabsContent>
            
            {uploadedVideos.length > 0 && (
              <TabsContent value="my-videos">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {uploadedVideos.map((videoUrl, index) => (
                    <VideoCard
                      key={index}
                      title={`Meu vídeo #${index + 1}`}
                      author={user?.nome || "Usuário"}
                      duration="--:--"
                      thumbnailUrl="https://placekitten.com/610/340"
                      videoUrl={videoUrl}
                      likes={0}
                      views={0}
                    />
                  ))}
                </div>
              </TabsContent>
            )}
          </Tabs>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}