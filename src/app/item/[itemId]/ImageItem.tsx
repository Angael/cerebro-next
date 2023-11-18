import React from "react";
import { ImageItem } from "@vanih/cerebro-contracts";
import css from "./Item.module.scss";

type Props = {
  item: ImageItem;
};

const ImageItem = ({ item }: Props) => {
  const placeholder = item.thumbnail;

  const style = {
    backgroundImage: `url(${placeholder})`,
  } as React.CSSProperties;

  return (
    <div className={"flex center   " + css.container}>
      <img
        style={style}
        src={item.image.src}
        alt="Viewed uploaded media item"
      />
    </div>
  );
};

export default ImageItem;
