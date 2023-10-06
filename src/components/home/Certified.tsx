import { FC } from "react";
import CardContainer from "../CardContainer";
import Image from "next/image";
import cert from "@/assets/certified.png";

interface CertifiedProps {}

const Certified: FC<CertifiedProps> = () => {
  return (
    <CardContainer ttl="Certified Professionals">
      <div className="flex md:flex-row flex-col justify-center gap-4">
        <div>
          <p className="text-lg">
            Our highly skilled and experienced team comprises of individuals who
            possess globally recognized certifications.
          </p>
          <button className="text-white hover:opacity-80 active:scale-90 mt-20 sm:whitespace-nowrap py-2 px-6 bg-gradient-to-b from-[#325FE3] to-[#367FD3] rounded-md w-fit">
            View more...
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <Image src={cert} alt="" />
          <Image src={cert} alt="" />
          <Image src={cert} alt="" />
          <Image src={cert} alt="" />
          <Image src={cert} alt="" />
          <Image src={cert} alt="" />
          <Image src={cert} alt="" />
          <Image src={cert} alt="" />
        </div>
      </div>
    </CardContainer>
  );
};

export default Certified;
