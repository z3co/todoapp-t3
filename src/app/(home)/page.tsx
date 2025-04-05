import { auth } from "@clerk/nextjs/server";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { redirect } from "next/navigation";
import { inter, lusitana } from "~/app/ui/fonts";
import { Button } from "~/components/ui/button";

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
          <form action={async () => {
            "use server";

            const session = await auth();
            if (!session.userId) {
              return redirect("/sign-in")
            }

            return redirect("/dashboard")
          }}>
          <Button
            type="submit"
            size="lg"
            className={`${inter.className} m-4 flex items-center gap-5 rounded-lg bg-blue-500 px-6 py-3 font-medium text-sm text-white transition-colors hover:bg-blue-400 md:text-base`}
            aria-label="Navigate to dashboard"
          >
            <span>Get started</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
