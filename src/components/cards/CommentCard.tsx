import { cn } from "@/utils/utils";
import Image, { StaticImageData } from "next/image";
import { FC, HTMLAttributes } from "react";

interface CommentCardProps extends HTMLAttributes<HTMLDivElement> {
  avatar: StaticImageData;
  ttl: string;
  subTtl: string;
  disc: string;
}

const CommentCard: FC<CommentCardProps> = ({
  children,
  avatar,
  ttl,
  subTtl,
  disc,
  className,
}) => {
  return (
    <div className={cn(className, "fade")}>
      <div className="flex gap-4 items-center">
        <Image src={avatar} alt="" />
        <div>
          <h2 className="text-white sm:text-3xl text-xl mb-2">{ttl}</h2>
          <p className="sm:text-base text-sm">{subTtl}</p>
        </div>
      </div>
      <p className="qoute relative font-semibold sm:mx-16 mx-6 text-center my-10">
        {disc}
      </p>
    </div>
  );
};

export default CommentCard;
