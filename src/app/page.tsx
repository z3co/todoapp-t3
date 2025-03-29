import Link from "next/link";
import { lusitana, inter } from "~/app/ui/fonts";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main>
      <div
        className={`${lusitana.className} flex flex-col items-center mt-5 md:mt-30`}
      >
        <div className="relative bg-blue-500 border-[15px] border-blue border-transparent rounded-3xl gap-6">
          <p className="text-center text-4xl md:text-6xl text-gray-200">
            TodoApp
          </p>
          <p className="text-xl md:text-4xl text-gray-300 mt-4 ">
            The best way to manage your day
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="m-30 md:m-50">
            {/* Put pictures of the dashboard here */}
          </div>
          <Link
            href="/dashboard"
            className={`${inter.className} flex items-center gap-5 m-4 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base`}
          >
            <span>Get started</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
      </div>
    </main>
  );
}
