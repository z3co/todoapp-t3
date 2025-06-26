import { SignInButton } from "@clerk/nextjs";
import { lusitana } from "~/app/ui/fonts";
import { Button } from "~/components/ui/button";
import { inter } from "~/app/ui/fonts";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

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
					<Button
						asChild
						className={`${inter.className} m-4 flex items-center gap-5 rounded-lg bg-blue-500 px-6 py-3 font-medium text-sm text-white transition-colors hover:bg-blue-400 md:text-base`}
					>
						<SignInButton forceRedirectUrl={"/dashboard"} />
					</Button>
				</div>
			</div>
		</main>
	);
}
