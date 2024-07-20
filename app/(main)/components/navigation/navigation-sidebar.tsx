import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

import { ScrollArea } from "@/components/ui/scroll-area";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

import { NavigationAction } from "./navigation-action";
import { NavigationItem } from "./navigation-item";

export const NavigationSidebar = async () => {
	const profile = await currentProfile();
	console.log(profile, "profile123");
	if (!profile) {
		return redirect("/");
	}
	console.log(profile, "profile");
	const servers = await db.server.findMany({
		where: {
			members: {
				some: {
					profileId: {
						equals: profile.id,
					},
				},
			},
		},
	});

	// const servers = await db.server.findMany();
	console.log(servers, "servers");

	return (
		<div className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] bg-[#E3E5E8] py-3">
			<NavigationAction />
			<Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto" />
			<ScrollArea className="flex-1 w-full">
				{servers.map((server) => (
					<div key={server.id} className="mb-4">
						<NavigationItem
							id={server.id}
							name={server.name}
							imageUrl={server.imageUrl}
						/>
					</div>
				))}
			</ScrollArea>
			<div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
				<ModeToggle />
				<UserButton
					afterSignOutUrl="/"
					appearance={{
						elements: {
							avatarBox: "h-[40px] w-[40px]",
						},
					}}
				/>
			</div>
		</div>
	);
};
