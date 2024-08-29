import { motion } from "framer-motion";
import { benefitModel } from "../sections/Benefits";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  benefit: benefitModel;
  setSelectedPage: (value: string) => void;
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const BenefitElement = ({ benefit, setSelectedPage }: Props) => {
  const { Icon, header, paragraph, linkAnhor, linkText } = benefit;
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {<Icon className="h-6 w-6" />}
        </div>
      </div>
      <h4 className="font-bold">{header}</h4>
      <p className="my-3">{paragraph}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        href={linkAnhor}
        onClick={() => setSelectedPage(linkAnhor)}
      >
        {linkText}
      </AnchorLink>
    </motion.div>
  );
};

export default BenefitElement;
