"use client";
import Image from "next/image";
import { FC } from "react";
import Logo from "@/assets/logo_svg.svg";
import { Russo_One } from "next/font/google";
import { cn } from "@/utils/utils";
import Link from "next/link";
import { IsMatch } from "@/utils/hooks";
import Button from "../ui/Button";
import HorizontalLogo from "./HorizontalLogo";

const russo = Russo_One({ weight: ["400"], subsets: ["latin"] });

interface HeaderProps {}

const data = [
  { ttl: "home", link: "/" },
  { ttl: "product", link: "/product" },
  { ttl: "customers", link: "/customers" },
  { ttl: "blog", link: "/blog" },
  { ttl: "company", link: "/company" },
];

const Header: FC<HeaderProps> = () => {
  return (
    <div className="lg:h-[116px] md:h-[95px] h-[70px] my-4 lg:mx-[7%] lg:text-base text-sm font-medium mx-[4%]  flex items-center justify-between gap-6 border-y border-border transition-all duration-700">
      <HorizontalLogo imgCls="md:w-[75px] md:h-[75px] " />
      <div className="flex flex-1 items-center justify-end gap-6 h-full w-full divide-x">
        <ul className="h-full items-center hidden md:flex flex-1 gap-3 justify-around list-none">
          {data.map((e, i) => (
            <li
              className={cn(
                IsMatch(e.link) ? "active__link" : "",
                "capitalize hover__link"
              )}
              key={i}
            >
              <Link href={e.link}>{e.ttl}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center h-full border-border lg:pl-16 pl-6">
          <Button txt="Get Started" />
        </div>
      </div>
    </div>
  );
};

export default Header;
