import { useForm } from "react-hook-form";
import { toLowerCasePageName } from "../helpers/helpers";
import { motion } from "framer-motion";
import HeaderText from "../components/HeaderText";

import ContactUsPageGraphic from "../assets/ContactUsPageGraphic.png";

type Props = { page: string; setSelectedPage: (value: string) => void };

const ContacUs = ({ page, setSelectedPage }: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onsubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();

    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section
      id={toLowerCasePageName(page)}
      className="mx-auto w-5/6 pb-32 pt-24"
    >
      <motion.div onViewportEnter={() => setSelectedPage(page)}>
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
        >
          <HeaderText>
            <span className="text-primary-500">Join Now</span> To Get In Shape
          </HeaderText>
          <p className="my-5">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.div>

        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
          >
            <form
              onSubmit={onsubmit}
              method="POST"
              action="https://formsubmit.co/tomasz.klekner@gmail.com"
            ></form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContacUs;
