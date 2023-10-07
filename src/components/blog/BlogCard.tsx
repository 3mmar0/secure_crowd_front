import { FC } from "react";
import VerticalLogo from "../layouts/VerticalLogo";
import HorizontalLogo from "../layouts/HorizontalLogo";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {}

const BlogCard: FC<BlogCardProps> = () => {
  return (
    <div className="bg-secondaryBlack w-full  h-[553px] rounded-md p-3">
      <div className="flex items-center justify-center rounded-lg w-full h-[269px] bg-primaryBlack">
        <VerticalLogo />
      </div>
      <h3 className="text-2 my-4 text-xl font-semibold">
        Zero Click Account Takeover - Password Overwrite Zero Click Account
        Takeover - Password Overwrite
      </h3>
      <p className="text-3 text-text text-sm">
        Ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
        nibh euismod tincidunt ut laoreet dolore magna nibh euismod tincidunt ut
        laoreet dolore magna
      </p>
      <div className="flex items-center gap-3 mt-5">
        <HorizontalLogo />
        <span className="w-px h-5 bg-text"></span>
        <p className="text-sm text-text">july 24 2023</p>
      </div>
      <div className=" mt-2">
        <Link
          className="flex items-center gap-2 font-semibold ml-auto w-fit"
          href={""}
        >
          <span>See Now</span>
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
