import { FC } from "react";
import CardContainer from "../CardContainer";
import Image from "next/image";
import TestingCard from "../cards/TestingCard";
import preTesting from "@/assets/testing_2.png";

interface PreTestingProps {}

const PreTesting: FC<PreTestingProps> = () => {
  return (
    <CardContainer
      className="mb-10 w-full relative arrows"
      ttl="Penerration Testing Overview"
    >
      <div className="w-full">
        <div className="grid xl:grid-cols-3 gap-10 mt-32">
          <div className="max-w-[calc(100vw-4%)] flex xl:flex-col span lg:flex-row flex-col justify-center items-center gap-20">
            <TestingCard
              ttl="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet"
              num="01"
              dashed
              subTtl="TEST"
            />
            <TestingCard
              ttl="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet"
              num="02"
              dashed
              subTtl="PER-TEST"
            />
          </div>
          <Image
            className="max-w-[352px] xl:mb-0 mb-10 mx-auto"
            src={preTesting}
            alt=""
          />
          <div className="flex xl:flex-col span lg:flex-row flex-col justify-center items-center gap-20">
            <TestingCard
              ttl="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet"
              num="03"
              dashed
              subTtl="PREPORTING"
            />
            <TestingCard
              ttl="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet"
              num="04"
              dashed
              subTtl="REVIEW"
            />
          </div>
        </div>
      </div>
    </CardContainer>
  );
};

export default PreTesting;
