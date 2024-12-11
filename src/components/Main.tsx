import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

const Main = () => {
  return (
    <main className="flex-1 p-6">
      <div className="flex items-center gap-3">
        <button className="rounded-full bg-black/40 p-1">
          <ChevronLeft />
        </button>
        <button className="rounded-full bg-black/40 p-1">
          <ChevronRight />
        </button>
      </div>

      <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <a
          href="#"
          className="bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors"
        >
          <Image
            width={86}
            height={86}
            src="/hybrid-theory.jpg"
            alt="Capa do Album Hybrid Theory"
          />
          <strong>Hybrid Theory</strong>
          <button className="w-12 h-12 flex items-center justify-center  p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play fill="bg-black" />
          </button>
        </a>

        <a
          href="#"
          className="bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors"
        >
          <Image
            width={86}
            height={86}
            src="/minutes-to-midnight.jpg"
            alt="Capa do Album Minutes to Midnight"
          />
          <strong>Minutes to Midnight</strong>
          <button className="w-12 h-12 flex items-center justify-center  p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play fill="bg-black" />
          </button>
        </a>

        <a
          href="#"
          className="bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors"
        >
          <Image
            width={86}
            height={86}
            src="/hybrid-theory.jpg"
            alt="Capa do Album Hybrid Theory"
          />
          <strong>Hybrid Theory</strong>
          <button className="w-12 h-12 flex items-center justify-center  p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play fill="bg-black" />
          </button>
        </a>

        <a
          href="#"
          className="bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors"
        >
          <Image
            width={86}
            height={86}
            src="/minutes-to-midnight.jpg"
            alt="Capa do Album Minutes to Midnight"
          />
          <strong>Minutes to Midnight</strong>
          <button className="w-12 h-12 flex items-center justify-center  p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play fill="bg-black" />
          </button>
        </a>

        <a
          href="#"
          className="bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors"
        >
          <Image
            width={86}
            height={86}
            src="/hybrid-theory.jpg"
            alt="Capa do Album Hybrid Theory"
          />
          <strong>Hybrid Theory</strong>
          <button className="w-12 h-12 flex items-center justify-center  p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play fill="bg-black" />
          </button>
        </a>

        <a
          href="#"
          className="bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors"
        >
          <Image
            width={86}
            height={86}
            src="/minutes-to-midnight.jpg"
            alt="Capa do Album Minutes to Midnight"
          />
          <strong>Minutes to Midnight</strong>
          <button className="w-12 h-12 flex items-center justify-center  p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play fill="bg-black" />
          </button>
        </a>
      </div>

      <h2 className="font-semibold text-2xl mt-10">Made for Davi Fernandes</h2>

      <div className="grid grid-cols-10 gap-4 mt-4">
        <a
          href="#"
          className="bg-white/5 p-2 rounded-md hover:bg-white/10 flex flex-col gap-2"
        >
          <Image
            className="w-full"
            width={104}
            height={104}
            src="/hybrid-theory.jpg"
            alt="Capa do Album Hybrid Theory"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">
            Chester, Mike, Dave, Rob, Brad
          </span>
        </a>
        <a
          href="#"
          className="bg-white/5 p-2 rounded-md hover:bg-white/10 flex flex-col gap-2"
        >
          <Image
            className="w-full"
            width={104}
            height={104}
            src="/hybrid-theory.jpg"
            alt="Capa do Album Hybrid Theory"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">
            Chester, Mike, Dave, Rob, Brad
          </span>
        </a>
        <a
          href="#"
          className="bg-white/5 p-2 rounded-md hover:bg-white/10 flex flex-col gap-2"
        >
          <Image
            className="w-full"
            width={104}
            height={104}
            src="/hybrid-theory.jpg"
            alt="Capa do Album Hybrid Theory"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">
            Chester, Mike, Dave, Rob, Brad
          </span>
        </a>
        <a
          href="#"
          className="bg-white/5 p-2 rounded-md hover:bg-white/10 flex flex-col gap-2"
        >
          <Image
            className="w-full"
            width={104}
            height={104}
            src="/hybrid-theory.jpg"
            alt="Capa do Album Hybrid Theory"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">
            Chester, Mike, Dave, Rob, Brad
          </span>
        </a>
        <a
          href="#"
          className="bg-white/5 p-2 rounded-md hover:bg-white/10 flex flex-col gap-2"
        >
          <Image
            className="w-full"
            width={104}
            height={104}
            src="/hybrid-theory.jpg"
            alt="Capa do Album Hybrid Theory"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">
            Chester, Mike, Dave, Rob, Brad
          </span>
        </a>
      </div>
    </main>
  );
};

export default Main;
