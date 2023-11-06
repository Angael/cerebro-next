import React, { Suspense } from "react";
import ClientComponent from "@/app/home/ClientComponent";
import ServerComponent from "@/app/home/ServerComponent";

type Props = {};

const HomePage = (props: Props) => {
  console.log("<page>");
  return (
    <div className="test-card">
      <p>I am home page</p>
      <div>
        <ClientComponent>
          <Suspense fallback="Loading data...">
            <ServerComponent />
          </Suspense>
        </ClientComponent>
      </div>
    </div>
  );
};

export default HomePage;
