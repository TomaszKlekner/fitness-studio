import React from "react";
import { benefitModel } from "../sections/Benefits";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  benefit: benefitModel;
};

const BenefitElement = ({ benefit }: Props) => {
  return (
    <div>
      <h2>{benefit.header}</h2>
      <p>{benefit.paragraph}</p>
      <AnchorLink href={benefit.linkAnhor}>{benefit.linkText}</AnchorLink>
    </div>
  );
};

export default BenefitElement;
