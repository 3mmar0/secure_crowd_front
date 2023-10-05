import { FC } from "react";
import CardContainer from "../CardContainer";
import Image from "next/image";
import testing from "@/assets/testing.png";
import TestingCard from "./TestingCard";

interface TestingProps {}

const Testing: FC<TestingProps> = () => {
  return (
    <CardContainer
      className="mb-10"
      ttl="Penerration Testing Overview"
      disc='"Creation is your job, and security is ours."'
    >
      <div>
        <Image src={testing} alt="" />
        <div className="testing flex justify-center flex-wrap gap-y-10">
          <TestingCard
            ttl="Creation is your job, and security is ours"
            num="01"
          />
          <span className="my-auto h-[2px] w-[30px] border border-main border-dashed"></span>

          <TestingCard
            ttl="rules of engagement, and test objectives."
            num="02"
          />
          <span className="my-auto h-[2px] w-[30px] border border-main border-dashed"></span>

          <TestingCard
            ttl="Actively exploit vulnerabilities in the system"
            num="03"
          />
          <span className="my-auto h-[2px] w-[30px] border border-main border-dashed"></span>

          <TestingCard
            ttl="Detail vulnerabilities found, potential and remediation recommendations"
            num="04"
          />
          <span className="my-auto h-[2px] w-[30px] border border-main border-dashed"></span>
          <TestingCard
            ttl="Address and fix identified vulnerabilities"
            num="05"
          />
          <span className="my-auto h-[2px] w-[30px] border border-main border-dashed"></span>

          <TestingCard
            ttl="Verify that vulnerabilities are effectively patched and no new issues are introduced"
            num="06"
          />
        </div>
      </div>
    </CardContainer>
  );
};

export default Testing;
