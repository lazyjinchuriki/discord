import { InitialModal } from "@/components/modals/initial-modal";
import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { redirect } from "next/navigation";

const SetupPage = async () => {
  const profile = await initialProfile();

  //find the first server related to this profile id
  if (profile) {
    const server = await db.server.findFirst({
      include: {
        members: {
          where: {
            profileId: profile.id,
          },
        },
      },
    });
    console.log(profile, server, "profile, server");

    if (server) {
      return redirect(`/servers/${server.id}`);
    }
  }

  return <InitialModal />;
};

export default SetupPage;
