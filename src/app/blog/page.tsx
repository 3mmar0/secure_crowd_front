import Blog from "@/components/blog/Blog";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = () => {
  return (
    <div className="page">
      <Blog />
    </div>
  );
};

export default page;
