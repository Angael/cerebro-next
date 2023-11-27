import React, { Suspense } from "react";
import UsedSpace from "@/lib/used-space/UsedSpace";
import ProgressBar from "@/styled/progress-bar/ProgressBar";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex col gap-2">
      <h1 className="h2" style={{ flexShrink: 0 }}>
        Upload files
      </h1>
      <Suspense
        fallback={
          <ProgressBar
            id="used-space"
            label={"Loading used space..."}
            value={0}
            max={100}
          />
        }
      >
        <UsedSpace />
      </Suspense>
      test
    </div>
  );
};

export default page;
