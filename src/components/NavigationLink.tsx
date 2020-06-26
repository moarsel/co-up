import { Anchor, AnchorProps } from "grommet";
import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

export const NavigationLink: React.FC<AnchorLinkProps> = ({
  ref,
  children,
  to,
  exact,
  ...props
}) => {
  return (
    <NavLink
      to={to}
      exact={exact}
      style={{ textDecoration: "none" }}
      activeStyle={{
        textDecoration: "underline double #9060EB",
        textUnderlineOffset: "4px",
      }}
    >
      <Anchor as="span" {...props}>
        {children}
      </Anchor>
    </NavLink>
  );
};

export type AnchorLinkProps = NavLinkProps &
  AnchorProps &
  Omit<JSX.IntrinsicElements["a"], "color">;
