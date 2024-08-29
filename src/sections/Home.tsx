import ActionButton from "../components/ActionButton";
import useMediaQuery from "../hooks/useMediaQuery";
import HomePageText from "../assets/HomePageText.png";
import HomePageGraphic from "../assets/HomePageGraphic.png";
import SponsorRedBull from "../assets/SponsorRedBull.png";
import SponsorForbes from "../assets/SponsorForbes.png";
import SponsorFortune from "../assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { toLowerCasePageName } from "../helpers/helpers";

type Props = {
  page: string;
  setSelectedPage: (value: string) => void;
};

const Home = ({ page, setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id={toLowerCasePageName(page)}
      className="gap-16 py-10 sm:h-full md:pb-0"
    >
      <motion.div
        className="mx-auto w-5/6 items-center justify-center bg-gray-20 md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(page)}
      >
        <div className="z-10 mt-32 md:basis-3/5">
          <motion.div
            className="md:-mt-20"
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
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt={page} />
              </div>
            </div>

            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of. Get Your Dream
              Body Now.
            </p>
          </motion.div>

          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
          >
            <ActionButton page="Join Now" setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(page)}
              href={`#${page}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="Home Page Graphic" />
        </div>
      </motion.div>

      {isAboveMediumScreen && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img src={SponsorForbes} alt="Forbes" />
              <img src={SponsorFortune} alt="Fortune" />
              <img src={SponsorRedBull} alt="Red Bull" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
