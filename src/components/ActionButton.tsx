import AnchorLink from "react-anchor-link-smooth-scroll";
import { toLowerCasePageName } from "../helpers/helpers";
import { ReactNode } from "react";

type Props = {
  page: string;
  children: ReactNode;
  setSelectedPage: (value: string) => void;
};

const ActionButton = ({ page, children, setSelectedPage }: Props) => {
  const lowerCasePage = toLowerCasePageName(page);
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
