import { useForm } from "react-hook-form";
import { toLowerCasePageName } from "../helpers/helpers";
import { motion } from "framer-motion";
import HeaderText from "../components/HeaderText";

import ContactUsPageGraphic from "../assets/ContactUsPageGraphic.png";
import { useEffect } from "react";

type Props = { page: string; setSelectedPage: (value: string) => void };

const ContacUs = ({ page, setSelectedPage }: Props) => {
  const inputStyles =
    "w-full rounded-xl bg-primary-500 px-5 py-3 placeholder-white mb-5";
  const {
    register,
    trigger,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onsubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();

    if (!isValid) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    reset();
  }, [reset, isSubmitSuccessful]);

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
              action="https://formsubmit.co/703bf246fbcb29e9d5aae54dee8a5f93"
              target="_blank"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...(register("name"),
                {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 characters"}
                </p>
              )}
              <input
                className={inputStyles}
                type="email"
                placeholder="EMAIL"
                {...(register("email"),
                {
                  required: true,
                  pattern:
                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.toString(),
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" && "This field is required"}
                  {errors.email.type === "pattern" &&
                    "Max length is 100 characters"}
                </p>
              )}
              <textarea
                className={inputStyles}
                rows={4}
                cols={50}
                placeholder="MESSAGE"
                {...(register("message"),
                {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required"}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 characters"}
                </p>
              )}
              <button
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                type="submit"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            className="relative mt-16 basis-2/5 md:mt-0"
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                className="w-full"
                src={ContactUsPageGraphic}
                alt="Contact us"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContacUs;
