import { currentUser, auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export const initialProfile = async () => {
  try {
    const user = await currentUser();
    if (!user) {
      auth().redirectToSignIn();
      throw new Error("Unauthorized");
    }

    let profile = await db.profile.findUnique({
      where: {
        userId: user.id,
      },
    });
    if (profile) {
      return profile;
    }

    const newProfile = await db.profile.create({
      data: {
        userId: user.id,
        name: `${user.firstName} ${user.lastName}`,
        imageUrl: user.imageUrl ?? "",
        email: user.emailAddresses[0]?.emailAddress ?? "",
      },
    });
    return newProfile;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
