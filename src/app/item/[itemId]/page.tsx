import React from "react";
import { API, getApiHeaders } from "@/utils/api";
import { auth } from "@clerk/nextjs";
import { FrontItem } from "@vanih/cerebro-contracts";

type Props = {
  params: {
    itemId: string;
  };
};

const ItemPage = async ({ params }: Props) => {
  const clerkToken = auth();

  console.log(1);
  const { data } = await API.get(`/items/item/${params.itemId}`, {
    headers: await getApiHeaders(clerkToken),
  });
  console.log(2, data);

  const { type } = data as FrontItem;

  return (
    <div style={{ height: 400 }}>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {type === "IMAGE" && <div>IMAGE</div>}
      {type === "VIDEO" && <div>VIDEO</div>}
    </div>
  );
};

export default ItemPage;
