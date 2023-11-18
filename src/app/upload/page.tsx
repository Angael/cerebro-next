import React, { Suspense } from "react";
import UsedSpace from "@/lib/used-space/UsedSpace";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <h1 className="h2" style={{ flexShrink: 0 }}>
        Upload
      </h1>
      <Suspense>
        <UsedSpace />
      </Suspense>
    </div>
  );
};

export default page;
