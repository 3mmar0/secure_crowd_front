import Image from "next/image";
import { FC } from "react";
import Logo from "@/assets/logo_svg.svg";
import { russo } from "@/utils/fonts";
import { cn } from "@/utils/utils";

interface HorizontalLogoProps {
  imgCls?: string;
}

const HorizontalLogo: FC<HorizontalLogoProps> = ({ imgCls }) => {
  return (
    <div className="flex min-w-max items-center gap-1">
      <Image
        src={Logo}
        className={cn(imgCls, "w-14 h-14")}
        width={75}
        height={75}
        alt=""
        draggable={false}
      />
      <span className={cn(russo.className, "block")}>SecuredCrowed</span>
    </div>
  );
};

export default HorizontalLogo;
