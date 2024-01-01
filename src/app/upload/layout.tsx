import React, { Suspense } from "react";
import ProgressBar from "@/styled/progress-bar/ProgressBar";
import UsedSpace from "@/lib/used-space/UsedSpace";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div className="flex col gap-2">
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

      {children}
    </div>
  );
};

export default layout;
