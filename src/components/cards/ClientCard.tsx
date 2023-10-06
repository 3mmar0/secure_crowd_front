import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface ClientCardProps {
  logo: StaticImageData;
}

const ClientCard: FC<ClientCardProps> = ({ logo }) => {
  return (
    <div className="py-4 px-5 w-full h-[75px] bg-slate-100 rounded-lg">
      <Image
        priority
        src={logo}
        className="object-contain w-full h-full"
        alt=""
      />
    </div>
  );
};

export default ClientCard;
