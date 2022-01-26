import React from "react";
import classes from "./Image.module.css";

type Props = {
  src: string;
  className?: string;
};

const Image = (props: Props) => {
  const { src, className } = props;

  const rootClassName = [classes.root, className].join(" ");

  return <img src={src} alt={src} className={rootClassName} />;
};

export default Image;
