"use client";
import { FC, useState } from "react";
import CardContainer from "../CardContainer";
import Image from "next/image";
import avatar from "@/assets/Avatar.png";
import activeCircle from "@/assets/svg/icons/activeCircle.svg";
import circle from "@/assets/svg/icons/circle.svg";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import CommentCard from "../cards/CommentCard";

interface CommentsProps {}

const comments = [
  {
    id: 1,
    person: avatar,
    ttl: "Cédric de Saint Léger 1",
    subTtl: "CTO at impak Analytics",
    disc: "The team at SecureCrowd has helped us at impak identify some vulnerabilities on our website. Their work is very thorough and they have been going above and beyond expectations. Thank you  SecureCrowd !",
  },
  {
    id: 2,
    person: avatar,
    ttl: "Cédric de Saint Léger 2",
    subTtl: "CTO at impak Analytics",
    disc: "The team at SecureCrowd has helped us at impak identify some vulnerabilities on our website. Their work is very thorough and they have been going above and beyond expectations. Thank you  SecureCrowd !",
  },
  {
    id: 3,
    person: avatar,
    ttl: "Cédric de Saint Léger 3",
    subTtl: "CTO at impak Analytics",
    disc: "The team at SecureCrowd has helped us at impak identify some vulnerabilities on our website. Their work is very thorough and they have been going above and beyond expectations. Thank you  SecureCrowd !",
  },
  {
    id: 4,
    person: avatar,
    ttl: "Cédric de Saint Léger 4",
    subTtl: "CTO at impak Analytics",
    disc: "The team at SecureCrowd has helped us at impak identify some vulnerabilities on our website. Their work is very thorough and they have been going above and beyond expectations. Thank you  SecureCrowd !",
  },
];

const Comments: FC<CommentsProps> = () => {
  const [current, setcurrent] = useState(1);

  const handleNext = () => {
    if (current < comments.length) {
      setcurrent(current + 1);
    }
    if (current === comments.length) {
      setcurrent(1);
    }
  };
  const handleBack = () => {
    if (current > 1) {
      setcurrent(current - 1);
    }
    if (current === 1) {
      setcurrent(4);
    }
  };
  return (
    <CardContainer
      ttl="What Our Clients Say About Us"
      className="arrows relative"
    >
      <div className="p-4 bg-secondaryBlack rounded-lg">
        <div className="comments relative p-4 z-0 rounded-md">
          <div className="flex overflow-auto w-full">
            {comments?.map((e, i) => {
              return current === e.id ? (
                <CommentCard
                  className="w-max"
                  key={e.id}
                  avatar={e.person}
                  disc={e.disc}
                  ttl={e.ttl}
                  subTtl={e.subTtl}
                />
              ) : (
                ""
              );
            })}
          </div>
          <div className="py-2 mx-4 grid grid-cols-3 items-center justify-center gap-3">
            <div></div>
            <div className="flex justify-center gap-2">
              <Image
                className="active:scale-90 cursor-pointer"
                onClick={() => setcurrent(1)}
                src={current === 1 ? activeCircle : circle}
                alt=""
              />
              <Image
                className="active:scale-90 cursor-pointer"
                onClick={() => setcurrent(2)}
                src={current === 2 ? activeCircle : circle}
                alt=""
              />
              <Image
                className="active:scale-90 cursor-pointer"
                onClick={() => setcurrent(3)}
                src={current === 3 ? activeCircle : circle}
                alt=""
              />
              <Image
                className="active:scale-90 cursor-pointer"
                onClick={() => setcurrent(4)}
                src={current === 4 ? activeCircle : circle}
                alt=""
              />
            </div>
            <div className="flex justify-end gap-4">
              <ChevronLeftCircle
                className="active:scale-110 cursor-pointer"
                onClick={handleBack}
              />
              <ChevronRightCircle
                className="active:scale-110 cursor-pointer"
                onClick={handleNext}
              />
            </div>
          </div>
        </div>
      </div>
    </CardContainer>
  );
};

export default Comments;
