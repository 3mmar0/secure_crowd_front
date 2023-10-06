import { FC } from "react";
import CardContainer from "../CardContainer";
import WhyCard from "../cards/WhyCard";
import first from "@/assets/svg/icons/09.png";
import sec from "@/assets/svg/icons/4.svg";
import third from "@/assets/svg/icons/10.svg";
import fourth from "@/assets/svg/icons/11.svg";
import five from "@/assets/svg/icons/7.svg";
import six from "@/assets/svg/icons/8.svg";

interface WhyProps {}

const Why: FC<WhyProps> = () => {
  return (
    <CardContainer ttl="Why Choose Secure Crowd?">
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
        <WhyCard
          logo={first}
          ttl="Proven Expertise"
          disc="At Secure Crowd, we have a seasoned team of certified penetration testers with a deep understanding of the latest vulnerabilities, exploitation techniques, and countermeasures. Our experience spans across multiple sectors and industries"
        />
        <WhyCard
          logo={sec}
          ttl="Comprehensive Testing"
          disc="Our penetration testing methodology encompasses a wide range of attack vectors – from network to application-level threats, ensuring all potential vulnerabilities are identified."
        />
        <WhyCard
          logo={third}
          ttl="State-of-the Art Tools"
          disc="We utilize the latest tools and technologies in the cybersecurity landscape. This, combined with our bespoke in-house tools, allows us to provide unrivaled testing quality."
        />
        <WhyCard
          logo={fourth}
          ttl="Clear Reporting"
          disc="Post-assessment, you receive a detailed report, which not only highlights vulnerabilities but also provides actionable recommendations to bolster your security posture."
        />
        <WhyCard
          logo={five}
          ttl="Continuous Learning"
          disc="Cyber threats are evolving; so are we. Secure Crowd invests heavily in continuous training and research, ensuring we’re always ahead of the curve."
        />
        <WhyCard
          logo={six}
          ttl="24/7 Support"
          disc=" Our dedicated support team is available around the clock, providing guidance and answering any queries you might have before, during, or after the testing process."
        />
      </div>
    </CardContainer>
  );
};

export default Why;
