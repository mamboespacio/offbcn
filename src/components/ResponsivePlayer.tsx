import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

interface ResponsivePlayerProps {
  url: string;
}

export function ResponsivePlayer({ url }: ResponsivePlayerProps) {
  return (
    <ReactPlayer
      className="react-player"
      url={url}
      playing
      loop
      muted
    />
  )
}