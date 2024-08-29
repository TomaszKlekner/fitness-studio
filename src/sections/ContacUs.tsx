import { toLowerCasePageName } from "../helpers/helpers";
import { motion } from "framer-motion";

type Props = { page: string; setSelectedPage: (value: string) => void };

const ContacUs = ({ page, setSelectedPage }: Props) => {
  return (
    <section id={toLowerCasePageName(page)}>
      <motion.div onViewportEnter={() => setSelectedPage(page)}>
        ContacUs
      </motion.div>
    </section>
  );
};

export default ContacUs;
