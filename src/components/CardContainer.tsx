import { cn } from "@/utils/utils";
import { FC, HTMLAttributes } from "react";

interface CardContainerProps extends HTMLAttributes<HTMLDivElement> {
  ttl: string;
  disc?: string;
}

const CardContainer: FC<CardContainerProps> = ({
  children,
  className,
  ttl,
  disc,
}) => {
  return (
    <div className={cn(className, "w-full py-5")}>
      <div className="lg:mx-[7%] mx-[4%]">
        <div className="mb-10">
          <h2 className="font-semibold  text-center text-4xl">{ttl}</h2>
          {disc ? (
            <p className="text-center text-lg text-text mt-4">{disc}</p>
          ) : (
            ""
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default CardContainer;
