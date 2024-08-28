import AnchorLink from "react-anchor-link-smooth-scroll";
import { toLowerCasePageName } from "../helpers/helpers";

type Props = {
  page: string;
  selectedPage: string;
  setSelectedPage: (value: string) => void;
};

function Link({ page, selectedPage, setSelectedPage }: Readonly<Props>) {
  const lowerCasePage = toLowerCasePageName(page);
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
      }}
    >
      {page}
    </AnchorLink>
  );
}

export default Link;
