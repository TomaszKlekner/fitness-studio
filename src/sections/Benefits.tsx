import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import HeaderText from "../components/HeaderText";
import React from "react";
import BenefitElement from "../components/BenefitElement";

export type benefitModel = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  header: string;
  paragraph: string;
  linkText: string;
  linkAnhor: string;
};

const benefits: benefitModel[] = [
  {
    icon: HomeModernIcon,
    header: "State for teh Art Facilities",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae eveniet sed ipsa dignissimos aperiam sequi, atque nulla quasi incidunt nesciunt?",
    linkText: "Learn More",
    linkAnhor: "",
  },
  {
    icon: UserGroupIcon,
    header: "100's of Diverse Classes",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae eveniet sed ipsa dignissimos aperiam sequi, atque nulla quasi incidunt nesciunt?",
    linkText: "Learn More",
    linkAnhor: "",
  },
  {
    icon: AcademicCapIcon,
    header: "Expert and Pro Trainer",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae eveniet sed ipsa dignissimos aperiam sequi, atque nulla quasi incidunt nesciunt?",
    linkText: "Learn More",
    linkAnhor: "",
  },
];

type Props = {
  page: string;
  setSelectedPage: (value: string) => void;
};

const Benefits = ({ page, setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <section id={page} className="ms-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(page)}>
        <div className="sm:w-3/5 md:my-5">
          <HeaderText>More than just a gym.</HeaderText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </div>

        <div className="mt-5 items-center justify-between gap-8 md:flex">
          {benefits.map((benefit) => (
            <BenefitElement benefit={benefit} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
