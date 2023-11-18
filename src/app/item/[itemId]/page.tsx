import React from "react";
import { API, getApiHeaders } from "@/utils/api";
import { auth } from "@clerk/nextjs";
import { FrontItem } from "@vanih/cerebro-contracts";
import ImageItem from "@/app/item/[itemId]/ImageItem";

type Props = {
  params: {
    itemId: string;
  };
};

const ItemPage = async ({ params }: Props) => {
  const clerkToken = auth();

  const { data } = await API.get(`/items/item/${params.itemId}`, {
    headers: await getApiHeaders(clerkToken),
  });

  const { type } = data as FrontItem;

  return (
    <>
      {type === "IMAGE" && <ImageItem item={data} />}
      {type === "VIDEO" && <div>VIDEO</div>}
    </>
  );
};

export default ItemPage;
