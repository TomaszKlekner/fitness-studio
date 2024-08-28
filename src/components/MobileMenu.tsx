import { XMarkIcon } from "@heroicons/react/24/solid";
import { menuItemsModel } from "../shared/types";
import Link from "./Link";

interface Props {
  menuItems: menuItemsModel[];
  selectedPage: string;
  setSelectedPage: (value: string) => void;
  setIsMenuToggled: (open: boolean) => void;
}

function MobileMenu({
  menuItems,
  selectedPage,
  setSelectedPage,
  setIsMenuToggled,
}: Readonly<Props>) {
  return (
    <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
      <div className="flex justify-end p-12">
        <button onClick={() => setIsMenuToggled(false)}>
          <XMarkIcon className="h-6 w-6 text-gray-400" />
        </button>
      </div>

      <div className="ml-[33%] flex flex-col gap-10 text-2xl">
        {menuItems.map(({ page }) => (
          <Link
            key={page}
            page={page}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        ))}
      </div>
    </div>
  );
}

export default MobileMenu;
