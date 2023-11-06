"use client";

import React from "react";
import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const ClientComponent = ({ children }: Props) => {
  console.log("<ClientComponent>");
  const [count, setCount] = React.useState(0);

  const router = useRouter();

  const revalidate = () => {
    router.refresh();
  };

  return (
    <div className="test-card">
      <p>i am run on client</p>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <h4>Children</h4>
      <div>{children}</div>
      <button onClick={revalidate}>Revalidate</button>
    </div>
  );
};

export default ClientComponent;
