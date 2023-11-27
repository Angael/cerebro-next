import React, { Suspense } from "react";
import ProgressBar from "@/styled/progress-bar/ProgressBar";
import UsedSpace from "@/lib/used-space/UsedSpace";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div className="flex col gap-2">
      <div className="flex gap-2">
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
      </div>

      <nav className="flex gap-2">
        <Link href={"/upload/files"}>Upload files</Link>
        <Link href={"/upload/from-link"}>Import from link</Link>
      </nav>

      {children}
    </div>
  );
};

export default layout;
