import AnchorLink from "react-anchor-link-smooth-scroll";
import { toLowerCasePageName } from "../helpers/helpers";

type Props = {
  page: string;
  setSelectedPage: (value: string) => void;
};

const ActionButton = ({ page, setSelectedPage }: Props) => {
  const lowerCasePage = toLowerCasePageName(page);
  return (
    <AnchorLink
      className="hover:bg-primary-600 rounded-md bg-secondary-500 px-10 py-2 font-semibold hover:text-white"
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default ActionButton;
