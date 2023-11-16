import React from "react";
import Layout from "@/lib/layout/Layout";
import { API } from "@/utils/api";
import { auth } from "@clerk/nextjs";
import Pagination from "@/lib/pagination/Pagination";

type Props = {
  searchParams: { page?: string };
};

const BrowsePage = async ({ searchParams: { page } }: Props) => {
  const clerkToken = auth();
  console.log("clerkToken", clerkToken);
  console.log("Token: ", await clerkToken.getToken());

  // TODO: simplify making requests to the API
  const pageNr = parseInt(page ?? "1");
  const {
    data: { items, count },
  } = await API.get("/items", {
    params: { limit: 10, page: pageNr - 1 },
    headers: {
      Authorization: "Bearer " + (await clerkToken.getToken()),
    },
  });

  const pageCount = Math.ceil(count / 10);

  return (
    <Layout>
      <h1>Browse</h1>
      {/*<pre>*/}
      {/*  {JSON.stringify(*/}
      {/*    {*/}
      {/*      pageNr,*/}
      {/*      pageCount,*/}
      {/*      items,*/}
      {/*    },*/}
      {/*    null,*/}
      {/*    2,*/}
      {/*  )}*/}
      {/*</pre>*/}
      {/*<pre>{JSON.stringify(items.data, null, 2)}</pre>*/}
      <Pagination page={pageNr} pageCount={pageCount} />
      {/*{itemsQuery.data && <ItemGrid items={itemsQuery.data.items} />}*/}
      {/*{itemsQuery.isError && itemsQuery.data?.items.length === 0 && (*/}
      {/*  <IconWithText text="Failed to load items" />*/}
      {/*)}*/}
      {/*{itemsQuery.isFetching && itemsQuery.data?.items.length === 0 && (*/}
      {/*  <CircleLoader />*/}
      {/*)}*/}
      <Pagination page={pageNr} pageCount={pageCount} />
    </Layout>
  );
};

export default BrowsePage;
