import React from "react";
import { auth, currentUser } from "@clerk/nextjs";

type Props = {};

const aLongRunningFunction = () =>
  new Promise<string>((res) =>
    setTimeout(() => {
      res("some data loaded from db " + Math.round(Math.random() * 1000));
    }, 500),
  );

const ServerComponent = async (props: Props) => {
  console.log("<ServerComponent>");
  const userAuth = auth();
  const user = await currentUser();

  // const data = await aLongRunningFunction();
  return (
    <div className="test-card">
      <p>Server component!!!</p>
      <pre>Data returned</pre>
      {/*<pre>*/}
      {/*  <code>{JSON.stringify(userAuth, null, 2)}</code>*/}
      {/*</pre>{" "}*/}
      {/*<pre>*/}
      {/*  <code>{JSON.stringify(user, null, 2)}</code>*/}
      {/*</pre>*/}
    </div>
  );
};

export default ServerComponent;
