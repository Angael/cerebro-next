import React from "react";

type Props = {
  params: {
    itemId: string;
  };
};

const ItemPage = ({ params }: Props) => {
  return <div>{params.itemId}</div>;
};

export default ItemPage;
