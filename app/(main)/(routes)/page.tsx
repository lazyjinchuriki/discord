import { UserButton } from "@clerk/nextjs";

const HomePage = () => {
  return (
    <>
      <p>this is a protected route</p>
      <UserButton afterSignOutUrl="/" />
    </>
  );
};

export default HomePage;
