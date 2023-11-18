import React from "react";
import { ImageItem } from "@vanih/cerebro-contracts";

type Props = {
  item: ImageItem;
};

const ImageItem = ({ item }: Props) => {
  const placeholder = item.thumbnail;

  const { width, height } = item.image;
  const style = {
    "--width": `${width}px`,
    "--height": `${height}px`,
  } as React.CSSProperties;

  return (
    <div>
      <img
        // className={css.itemImage}
        style={style}
        src={item.image.src}
        alt="Viewed uploaded media item"
      />
    </div>
  );
};

export default ImageItem;
