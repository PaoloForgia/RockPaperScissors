import React from "react";
import loadingSvg from "../../img/loading.svg";
import Image from "../Image/Image";
import classes from "./Loading.module.css";

const Loading = () => {
  return <Image src={loadingSvg} className={classes.root} />;
};

export default Loading;
