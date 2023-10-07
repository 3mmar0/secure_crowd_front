import Image from "next/image";
import { FC } from "react";
import Logo from "@/assets/logo_svg.svg";
import { gugi, russo } from "@/utils/fonts";
import { cn } from "@/utils/utils";

interface VerticalLogoProps {}

const VerticalLogo: FC<VerticalLogoProps> = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={Logo}
        className="w-[122px]"
        width={122}
        // height={122}
        alt=""
        draggable={false}
      />
      <span className={cn(gugi.className, "block w-full -mt-3 mr-6 text-end")}>
        Crowd
      </span>
      <span className={cn(gugi.className, "block mr-2 -mt-3 text-3xl")}>
        Secure
      </span>
    </div>
  );
};

export default VerticalLogo;
