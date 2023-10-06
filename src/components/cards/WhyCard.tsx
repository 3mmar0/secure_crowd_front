import Image, { StaticImageData } from "next/image";
import { FC, HTMLAttributes } from "react";

interface WhyCardProps extends HTMLAttributes<HTMLDivElement> {
  logo: StaticImageData;
  ttl: string;
  disc: string;
}

const WhyCard: FC<WhyCardProps> = ({ logo, ttl, disc }) => {
  return (
    <div className="text-center">
      <Image
        width={70}
        height={70}
        src={logo}
        className="mx-auto w-[70px] h-[70px]"
        alt=""
        draggable={false}
      />
      <h2 className="font-semibold text-xl text-white my-4">{ttl}</h2>
      <p>{disc}</p>
    </div>
  );
};

export default WhyCard;
