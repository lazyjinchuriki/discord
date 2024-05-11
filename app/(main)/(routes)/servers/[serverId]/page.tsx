import { redirect } from "next/navigation";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

interface ServerIdPageProps {
  params: {
    serverId: string;
  };
}

const ServerIdPage = async ({ params }: ServerIdPageProps) => {
  const profile = await currentProfile();

  if (!profile) {
    return auth().redirectToSignIn();
  }
  return <p>Channels are in progress</p>;
  // const server = await db.server.findUnique({
  //   include: {
  //     channels: {
  //       where: {
  //         name: "general",
  //       },
  //       orderBy: {
  //         createdAt: "asc",
  //       },
  //     },
  //     members: {
  //       where: {
  //         profileId: profile.id,
  //       },
  //     },
  //   },
  //   where: {
  //     id: params.serverId,
  //   },
  // });

  // const initialChannel = server?.channels[0];

  // if (initialChannel?.name !== "general") {
  //   return null;
  // }

  // return redirect(`/servers/${params.serverId}/channels/${initialChannel?.id}`);
};

export default ServerIdPage;
