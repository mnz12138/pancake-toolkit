import React from "react";
import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import Text from "../Text/Text";
import { LinkProps } from "./types";

// const StyledLink = styled(Text)<LinkProps>`
//   display: flex;
//   align-items: center;
//   width: fit-content;
//   &:hover {
//     text-decoration: underline;
//   }
// `;
const StyledLink = styled(ReactLink)`
  display: flex;
  align-items: center;
  width: fit-content;
  &:hover {
    text-decoration: underline;
  }
`;

const Link: React.FC<LinkProps> = ({ external, href, ...props }) => {
  const internalProps = external ? getExternalLinkProps() : {};
  return <StyledLink as="a" to={href ? href : ''} bold {...internalProps} {...props} />;
};

Link.defaultProps = {
  color: "primary",
};

export default Link;
