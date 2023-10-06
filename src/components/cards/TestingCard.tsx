import { cn } from "@/utils/utils";
import { FC, HTMLAttributes } from "react";

interface TestingCardProps extends HTMLAttributes<HTMLDivElement> {
  ttl: string;
  subTtl?: string;
  num: string;
  dashed?: boolean;
}

const TestingCard: FC<TestingCardProps> = ({ ttl, subTtl, num, dashed }) => {
  return (
    <div
      className={cn(
        dashed ? "border-dashed" : "",
        "relative border border-main w-[365px] max-w-[100%] text-center font-semibold bg-secondaryBlack text-white rounded-lg px-2 py-8 flex items-center justify-center"
      )}
    >
      {ttl}
      <span
        className={cn(
          dashed ? "border-dashed" : "",
          "absolute top-[-25%] left-3 bg-main font-bold w-[37px] h-[37px] flex items-center justify-center rounded-full border border-white"
        )}
      >
        {num}
      </span>
      <h2 className="absolute text-center top-[-40%] left-[50%] translate-x-[-50%] uppercase text-2xl">
        {subTtl}
      </h2>
    </div>
  );
};

export default TestingCard;
