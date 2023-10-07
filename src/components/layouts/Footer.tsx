import { FC } from "react";
import facebook from "@/assets/svg/icons/facebook.svg";
import whatsapp from "@/assets/svg/icons/whatsapp.svg";
import Image from "next/image";
import Button from "../ui/Button";
import { cn } from "@/utils/utils";
import { russo } from "@/utils/fonts";
import Logo from "@/assets/logo_svg.svg";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <div className="bg-secondaryBlack py-5">
      <div className="lg:mx-[7%] mx-[4%]">
        <div className="footer relative z-0 rounded-md overflow-hidden py-7 sm:px-20 px-6">
          <div className="grid lg:grid-cols-2 gap-5">
            <div>
              <div className="flex min-w-max items-center gap-1">
                <Image
                  src={Logo}
                  className="md:w-[75px] md:h-[75px] w-14 h-14"
                  width={75}
                  height={75}
                  alt=""
                  draggable={false}
                />
                <span className={cn(russo.className, "block")}>
                  SecuredCrowed
                </span>
              </div>
              <p className="text-sm py-4 text-text">
                Get Prepared, And Hack Your Application Before Real Hackers Do!
              </p>
              <div className="rounded-full py-2 px-4 flex gap-2 items-center border border-border">
                <input
                  className="w-full rounded-md bg-transparent outline-none"
                  type="text"
                  placeholder="Your email"
                />
                <Button txt="get statred" className="px-4 whitespace-nowrap" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <ul className="flex flex-col gap-3 list-none">
                <li className="text-white font-semibold mb-2">About</li>
                <li className="text-sm hover__link cursor-pointer text-text">
                  About Us
                </li>
                <li className="text-sm hover__link cursor-pointer text-text">
                  Blog
                </li>
                <li className="text-sm hover__link cursor-pointer text-text">
                  Careers
                </li>
                <li className="text-sm hover__link cursor-pointer text-text">
                  Jobs
                </li>
                <li className="text-sm hover__link cursor-pointer text-text">
                  In Press
                </li>
              </ul>
              <ul className="flex flex-col gap-3 list-none">
                <li className="text-white font-semibold mb-2">Support</li>
                <li className="text-sm hover__link cursor-pointer text-text">
                  Contact Us
                </li>
                <li className="text-sm hover__link cursor-pointer text-text">
                  Online Chat
                </li>
                <li className="text-sm hover__link cursor-pointer text-text">
                  Whatsapp
                </li>
                <li className="text-sm hover__link cursor-pointer text-text">
                  Telegram
                </li>
                <li className="text-sm hover__link cursor-pointer text-text">
                  Ticketing
                </li>
              </ul>
              <ul className="flex flex-col gap-3 list-none">
                <li className="text-white font-semibold mb-2">FAQ</li>
                <li className="text-sm hover__link cursor-pointer text-text">
                  Account
                </li>
                <li className="text-sm hover__link cursor-pointer text-text">
                  Manege Deliveries
                </li>
                <li className="text-sm hover__link cursor-pointer text-text">
                  Orders
                </li>
                <li className="text-sm hover__link cursor-pointer text-text">
                  Payments
                </li>
                <li className="text-sm hover__link cursor-pointer text-text">
                  Returns
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 items-center mt-5">
            <div className="flex gap-2 col-span-1">
              <Image
                priority
                className="bg-secondaryBlack rounded-full sm:w-12 w-9 sm:p-3 p-[6px] object-contain"
                src={facebook}
                alt=""
              />
              <Image
                priority
                className="bg-secondaryBlack rounded-full sm:w-12 w-9 sm:p-3 p-[6px] object-contain"
                src={whatsapp}
                alt=""
              />
            </div>
            <p className="sm:text-base text-sm whitespace-nowrap col-span-2">
              © 2000-2021, All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
