import { FC } from "react";
import CardContainer from "../CardContainer";
import HorizontalLogo from "../layouts/HorizontalLogo";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import VerticalLogo from "../layouts/VerticalLogo";
import BlogCard from "./BlogCard";

interface BlogProps {}

const Blog: FC<BlogProps> = () => {
  return (
    <CardContainer
      ttl="Our Blog"
      disc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore"
    >
      <div className="grid grid-cols-blog gap-3 mb-10">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </CardContainer>
  );
};

export default Blog;
