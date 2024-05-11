import discordBg from "@/assets/discordBg.png";
import Image from "next/image";
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Image
        src={discordBg}
        layout="fill"
        objectFit="cover"
        alt="Discord background"
      />
      {children}
    </div>
  );
};

export default AuthLayout;
