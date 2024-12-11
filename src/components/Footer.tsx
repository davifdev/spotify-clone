import {
  Laptop2,
  LayoutList,
  Maximize2,
  Mic2,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-700 p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          width={50}
          height={50}
          src="/hybrid-theory.jpg"
          alt="Capa do Album Hybrid Theory"
        />
        <div className="flex flex-col">
          <strong className="font-semibold text-xs">Papercut</strong>
          <span className="text-xs text-zinc-400">Linkin Park</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <Shuffle size={18} className="text-zinc-200" />
          <SkipBack size={18} className="text-zinc-200 fill-white" />

          <button className="w-8 h-8 flex items-center justify-center  p-2 rounded-full bg-white text-black">
            <Play fill="text-black" />
          </button>

          <SkipForward size={18} className="text-zinc-200  fill-white" />
          <Repeat size={18} className="text-zinc-200" />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:54</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="h-1 rounded-full w-40 bg-zinc-200"></div>
          </div>
          <span className="text-xs text-zinc-400">3:04</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Mic2 size={18} />
        <LayoutList size={18} />
        <Laptop2 size={18} />
        <div className="flex items-center">
          <Volume size={18} />
          <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className="h-1 rounded-full w-10 bg-zinc-200"></div>
          </div>
        </div>
        <Maximize2 size={18} />
      </div>
    </footer>
  );
};

export default Footer;
