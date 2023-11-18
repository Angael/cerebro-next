import React, { Suspense } from "react";
import UsedSpace from "@/lib/used-space/UsedSpace";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <div className="flex gap-1">
        <h1 className="h1">Import files</h1>
        <Suspense>
          <UsedSpace />
        </Suspense>
      </div>
    </div>
  );
};

export default page;
