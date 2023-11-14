import React, { Suspense } from "react";
import Layout from "@/lib/layout/Layout";
import { API } from "@/utils/api";
import { auth } from "@clerk/nextjs";

type Props = {};

const BrowsePage = async (props: Props) => {
  const clerkToken = auth();
  console.log("clerkToken", clerkToken);
  console.log("Token: ", await clerkToken.getToken());

  // TODO: simplify making requests to the API
  const items = await API.get("/items", {
    params: { limit: 10, page: 0 },
    headers: {
      Authorization: "Bearer " + (await clerkToken.getToken()),
    },
  });

  return (
    <Layout>
      <h1>Browse</h1>
      <pre>{JSON.stringify(items.data, null, 2)}</pre>
    </Layout>
  );
};

export default BrowsePage;
