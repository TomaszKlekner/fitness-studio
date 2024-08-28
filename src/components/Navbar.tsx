import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Logo from "../assets/Logo.png";
import useMediaQuery from "../hooks/useMediaQuery";
import ActionButton from "./ActionButton";
import Link from "./Link";
import MobileMenu from "./MobileMenu";
import { menuItemsModel } from "../App";

type Props = {
  title: string;
  menuItems: menuItemsModel[];
  selectedPage: string;
  isTopOfPage: boolean;
  setSelectedPage: (value: string) => void;
};

const Navbar = ({
  title,
  menuItems,
  selectedPage,
  isTopOfPage,
  setSelectedPage,
}: Props) => {
  const flexBetween = "flex items-center justify-between";
  const navbarBackgound = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  return (
    <>
      <nav
        className={`${navbarBackgound} ${flexBetween} fixed top-0 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt={title} />

            {isAboveMediumScreen ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  {menuItems.map((menuItem) => (
                    <Link
                      key={menuItem.page}
                      page={menuItem.page}
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  ))}
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton
                    page="Become A Member"
                    setSelectedPage={setSelectedPage}
                  />
                </div>
              </div>
            ) : (
              <button
                className="z-40 rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>

        {!isAboveMediumScreen && isMenuToggled && (
          <MobileMenu
            setIsMenuToggled={setIsMenuToggled}
            menuItems={menuItems}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;
