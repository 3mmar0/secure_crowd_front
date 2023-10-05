import { FC } from "react";
import Air from "@/assets/airbnb.png";
import Amazon from "@/assets/Amazon.png";
import OYO from "@/assets/OYO.png";
import Ola from "@/assets/Ola.png";
import Walmart from "@/assets/Walmart_logo_PNG1.png";
import ggl from "@/assets/google.png";
import Fedex from "@/assets/FedEx_logo_PNG6.png";
import microsoft from "@/assets/microsoft.png";
import ClientCard from "./ClientCard";
import CardContainer from "../CardContainer";

interface ClientsProps {}

const Clients: FC<ClientsProps> = () => {
  return (
    <CardContainer
      className="relative arrows before:top-[-80px] mb-10"
      ttl="Our clients"
    >
      <div className="grid place-content-center w-full md:grid-cols-card-md grid-cols-card-sm gap-4">
        <ClientCard logo={Air} />
        <ClientCard logo={Amazon} />
        <ClientCard logo={Fedex} />
        <ClientCard logo={ggl} />
        <ClientCard logo={microsoft} />
        <ClientCard logo={Ola} />
        <ClientCard logo={Walmart} />
        <ClientCard logo={OYO} />
      </div>
    </CardContainer>
  );
};

export default Clients;
