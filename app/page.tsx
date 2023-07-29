import Image from "next/image";
import { Meteors } from "@/components/magicui/meteors";
import { syne } from "@/utils/font";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen p-24 gap-y-20">
      <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
        <p
          className={`${syne.className} font-bold fixed top-0 left-0 flex justify-center w-full pt-8 pb-6 border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30`}
        >
          Book2Audio
        </p>
      </div>
      <div className="relative flex items-center justify-center w-full h-full p-20 overflow-hidden border border-gray-800 rounded-lg bg-background">
        <Meteors />
        <div className="flex mt-4 text-sm leading-6 text-gray-600">
          <label
            htmlFor="file-upload"
            className="relative text-3xl font-semibold rounded-md cursor-pointer text-gray-50"
          >
            <span>Upload a PDF file</span>
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              className="sr-only"
            />
          </label>
          {/* <p className="pl-1">or drag and drop</p> */}
        </div>
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </div>
    </main>
  );
}
