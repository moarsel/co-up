import { Button, ButtonProps } from "grommet";
import React from "react";
import { Link, LinkProps } from "react-router-dom";

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  ref,
  children,
  to,
  ...props
}) => {
  return (
    <Link to={to}>
      <Button as="span" primary={true} {...props}>
        {children}
      </Button>
    </Link>
  );
};

export type ButtonLinkProps = LinkProps &
  ButtonProps &
  Omit<JSX.IntrinsicElements["button"], "color">;
