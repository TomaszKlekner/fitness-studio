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
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default ActionButton;
