import React, { PropsWithChildren, ReactNode } from "react";
import Image from "../Image/Image";
import classes from "./Button.module.css";

type Props = {
  img?: string;
  onClick?: () => void;
  className?: string;
} & PropsWithChildren<ReactNode>;

const Button = (props: Props) => {
  const { img, children, onClick, className } = props;

  const rootClassName = [classes.root, className].join(" ");

  return (
    <button className={rootClassName} onClick={onClick}>
      {img ? <Image src={img} /> : undefined}
      {children}
    </button>
  );
};

export default Button;
