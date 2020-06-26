import { Anchor, AnchorProps } from "grommet";
import React from "react";
import { Link, LinkProps } from "react-router-dom";

export const AnchorLink: React.FC<AnchorLinkProps> = ({
  ref,
  children,
  to,
  style,
  ...props
}) => {
  return (
    <Link to={to} style={{ ...{ textDecoration: "none" }, ...style }}>
      <Anchor as="span" {...props}>
        {children}
      </Anchor>
    </Link>
  );
};

export type AnchorLinkProps = LinkProps &
  AnchorProps &
  Omit<JSX.IntrinsicElements["a"], "color" | "primary">;
