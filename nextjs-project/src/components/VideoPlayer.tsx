"use client";
import { useEffect, useRef, useState } from "react";

type PreloadType = "none" | "metadata" | "auto";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  preload?: PreloadType;
  captionsSrc?: string;
  controlsList?: string; // e.g., "nodownload"
  ariaLabel?: string;
}

export default function VideoPlayer({
  src,
  poster,
  preload = "metadata",
  captionsSrc,
  controlsList,
  ariaLabel = "Vídeo tutorial",
}: VideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [videoError, setVideoError] = useState<string | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "100px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const handleFullscreen = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else {
      // Safari iOS não suporta requestFullscreen no <video>
      try {
        // @ts-ignore
        el.webkitEnterFullscreen?.();
      } catch {}
    }
  };

  const onPlay = () => {
    console.log("[Video] play", { src });
  };
  const onPause = () => {
    console.log("[Video] pause", { src });
  };
  const onEnded = () => {
    console.log("[Video] ended", { src });
  };
  const onError = () => {
    const msg = "Falha ao carregar o vídeo.";
    console.error("[Video] error", { src });
    setVideoError(msg);
  };

  return (
    <div ref={containerRef} className="w-full">
      <div className="w-full aspect-video bg-black">
        {isVisible && !videoError ? (
          <video
            ref={videoRef}
            className="w-full h-full"
            src={src}
            controls
            playsInline
            preload={preload}
            // React types não incluem controlsList; usar as any para compatibilidade
            {...(controlsList ? ({ controlsList } as any) : {})}
            poster={poster}
            aria-label={ariaLabel}
            title={ariaLabel}
            onPlay={onPlay}
            onPause={onPause}
            onEnded={onEnded}
            onError={onError}
          >
            {captionsSrc && (
              <track
                kind="subtitles"
                src={captionsSrc}
                srcLang="pt"
                label="Português"
                default
              />
            )}
          </video>
        ) : (
          <img
            src={poster || "/attached_assets/como-funciona-capa.png"}
            alt="Prévia do vídeo"
            className="w-full h-full object-contain"
          />
        )}
      </div>
      <div className="flex gap-3 mt-2">
        <button
          type="button"
          className="comic-border bg-white px-3 py-1 text-sm hover:bg-gray-100"
          onClick={handleFullscreen}
        >
          Assistir em tela cheia
        </button>
        {videoError && (
          <span className="comic-border bg-white px-3 py-1 text-sm text-red-700">
            {videoError} {" "}
            <a
              className="underline"
              href={src}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir em nova aba
            </a>
          </span>
        )}
      </div>
    </div>
  );
}