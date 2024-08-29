import { motion } from "framer-motion";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import HeaderText from "../components/HeaderText";
import React from "react";
import BenefitElement from "../components/BenefitElement";
import ActionButton from "../components/ActionButton";
import BenefitsPageGraphic from "../assets/BenefitsPageGraphic.png";

export type benefitModel = {
  Icon: React.ElementType;
  header: string;
  paragraph: string;
  linkText: string;
  linkAnhor: string;
};

const benefits: benefitModel[] = [
  {
    Icon: HomeModernIcon,
    header: "State for teh Art Facilities",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae eveniet sed ipsa dignissimos aperiam sequi, atque nulla quasi incidunt nesciunt?",
    linkText: "Learn More",
    linkAnhor: "",
  },
  {
    Icon: UserGroupIcon,
    header: "100's of Diverse Classes",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae eveniet sed ipsa dignissimos aperiam sequi, atque nulla quasi incidunt nesciunt?",
    linkText: "Learn More",
    linkAnhor: "",
  },
  {
    Icon: AcademicCapIcon,
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

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Benefits = ({ page, setSelectedPage }: Props) => {
  return (
    <section id={page} className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(page)}>
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HeaderText>More than just a gym.</HeaderText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit) => (
            <BenefitElement
              key={benefit.header}
              benefit={benefit}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HeaderText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HeaderText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                Felis orci diam odio.
              </p>
              <p className="mb-5">
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton page="Join Now" setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
