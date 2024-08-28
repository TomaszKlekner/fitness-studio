import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../../assets/Logo.png";
import Link from "../../components/Link";
import { menuItemsModel } from "../../shared/types";
import useMediaQuery from "../../hoots/useMediaQuery";
import ActionButton from "../../components/ActionButton";

type Props = {
  title: string;
  menuItems: menuItemsModel[];
  selectedPage: string;
  setSelectedPage: (value: string) => void;
};

const Navbar = ({ title, menuItems, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px");
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  return (
    <nav className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
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
    </nav>
  );
};

export default Navbar;
