import { useEffect, useState } from "react";
import Navbar from "./views/navbar/Navbar";
import { menuItemsModel } from "./shared/types";

const menuItems: menuItemsModel[] = [
  {
    page: "Home",
  },
  {
    page: "Benefits",
  },
  {
    page: "Our Classes",
  },
  {
    page: "Conatct Us",
  },
];

function App() {
  const title = "Evogym";
  const [selectedPage, setSelectedPage] = useState<string>(
    menuItems[0].page.toLocaleLowerCase(),
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(menuItems[0].page.toLocaleLowerCase());
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isTopOfPage, setIsTopOfPage]);

  return (
    <div className="app bg-gray-20">
      <Navbar
        title={title}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        menuItems={menuItems}
        isTopOfPage={isTopOfPage}
      />
    </div>
  );
}

export default App;
