import { FC } from "react";
import CardContainer from "../CardContainer";
import Image from "next/image";
import avatar from "@/assets/Avatar.png";
import activeCircle from "@/assets/svg/icons/activeCircle.svg";
import circle from "@/assets/svg/icons/circle.svg";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";

interface CommentsProps {}

const Comments: FC<CommentsProps> = () => {
  return (
    <CardContainer ttl="What Our Clients Say About Us" className="arrows">
      <div className="p-4 bg-secondaryBlack rounded-lg">
        <div className="comments relative p-4 z-0 rounded-md">
          <div className="flex gap-4 items-center">
            <Image src={avatar} alt="" />
            <div>
              <h2 className="text-white sm:text-3xl text-xl mb-2">
                Cédric de Saint Léger
              </h2>
              <p className="sm:text-base text-sm">CTO at impak Analytics</p>
            </div>
          </div>
          <p className="qoute relative font-semibold sm:mx-16 mx-6 text-center my-10">
            The team at SecureCrowd has helped us at impak identify some
            vulnerabilities on our website. Their work is very thorough and they
            have been going above and beyond expectations. Thank
            you SecureCrowd !
          </p>
          <div className="py-2 mx-4 grid grid-cols-3 items-center justify-center gap-3">
            <div></div>
            <div className="flex justify-center gap-2">
              <Image src={activeCircle} alt="" />
              <Image src={circle} alt="" />
              <Image src={circle} alt="" />
              <Image src={circle} alt="" />
            </div>
            <div className="flex justify-end gap-4">
              <ChevronLeftCircle />

              <ChevronRightCircle />
            </div>
          </div>
        </div>
      </div>
    </CardContainer>
  );
};

export default Comments;
