export const toLowerCasePageName = (page: string) =>
  page.toLocaleLowerCase().replace(/ /g, "-");
