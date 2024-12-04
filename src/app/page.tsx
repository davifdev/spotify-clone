import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";

import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          <nav className="space-y-5 mt-10">
            <a
              href=""
              className="flex items-center gap-2 text-sm font-semibold text-zinc-200"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-2 text-sm font-semibold text-zinc-200"
            >
              <Search />
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-2 text-sm font-semibold text-zinc-200"
            >
              <Library />
              Your Library
            </a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3 ">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Só pedrada
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Linkin Park
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Oficina G3
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Rock/Blues/Pop
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Anime Openings
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Lofi Concentration
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Sertanejo
            </a>
          </nav>
        </aside>

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
            <a  href="#" className="bg-white/5 p-2 rounded-md hover:bg-white/10 flex flex-col gap-2"  >
            <Image
                className="w-full"
                width={104}
                height={104}
                src="/hybrid-theory.jpg"
                alt="Capa do Album Hybrid Theory"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">Chester, Mike, Dave, Rob, Brad</span>
            </a>
            <a href="#" className="bg-white/5 p-2 rounded-md hover:bg-white/10 flex flex-col gap-2"  >
            <Image
                className="w-full"
                width={104}
                height={104}
                src="/hybrid-theory.jpg"
                alt="Capa do Album Hybrid Theory"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">Chester, Mike, Dave, Rob, Brad</span>
            </a>
            <a href="#" className="bg-white/5 p-2 rounded-md hover:bg-white/10 flex flex-col gap-2"  >
            <Image
                className="w-full"
                width={104}
                height={104}
                src="/hybrid-theory.jpg"
                alt="Capa do Album Hybrid Theory"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">Chester, Mike, Dave, Rob, Brad</span>
            </a>
            <a href="#" className="bg-white/5 p-2 rounded-md hover:bg-white/10 flex flex-col gap-2"  >
            <Image
                className="w-full"
                width={104}
                height={104}
                src="/hybrid-theory.jpg"
                alt="Capa do Album Hybrid Theory"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">Chester, Mike, Dave, Rob, Brad</span>
            </a>
            <a href="#" className="bg-white/5 p-2 rounded-md hover:bg-white/10 flex flex-col gap-2"  >
            <Image
                className="w-full"
                width={104}
                height={104}
                src="/hybrid-theory.jpg"
                alt="Capa do Album Hybrid Theory"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">Chester, Mike, Dave, Rob, Brad</span>
            </a>
          </div>

        </main>
      </div>

      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  );
}
