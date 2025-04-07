import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { inter, lusitana } from "~/app/ui/fonts";
import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <div
        className={`${lusitana.className} mt-5 flex flex-col items-center md:mt-30`}
      >
        <div className="relative gap-6 rounded-3xl border-[15px] border-transparent bg-blue-500">
          <p className="text-center text-4xl text-white md:text-6xl">TodoApp</p>
          <p className="mt-4 text-white text-xl md:text-4xl ">
            The best way to manage your day
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="m-8 md:m-12">
            {/* Put pictures of the dashboard here */}
          </div>
          <Link
            href={"/sign-in"}
            className={`${inter.className} m-4 flex items-center gap-5 rounded-lg bg-blue-500 px-6 py-3 font-medium text-sm text-white transition-colors hover:bg-blue-400 md:text-base`}
            aria-label="Navigate to dashboard"
          >
            <span>Get started</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
      </div>
    </main>
  );
}
