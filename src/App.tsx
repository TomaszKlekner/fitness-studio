import { useState } from "react";
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

  return (
    <div className="app bg-gray-20">
      <Navbar
        title={title}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        menuItems={menuItems}
      />
    </div>
  );
}

export default App;
