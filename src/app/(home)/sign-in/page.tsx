import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { lusitana } from "~/app/ui/fonts";

export default async function Home() {
  const session = await auth();

  if (session.userId) redirect("/dashboard");
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
          <SignInButton forceRedirectUrl={"/dashboard"} />
        </div>
      </div>
    </main>
  );
}
