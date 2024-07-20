import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { InitialModal } from "@/components/modals/initial-modal";

const SetupPage = async () => {
	const profile = await initialProfile();
	console.log(profile, "profile");
	const server = await db?.server?.findFirst({
		where: {
			profileId: profile?.id,
		},
	});
	console.log(server, "server");
	if (server) {
		return redirect(`/servers/${server.id}`);
	}

	return <InitialModal />;
};

export default SetupPage;
