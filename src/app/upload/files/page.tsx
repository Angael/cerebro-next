import React from "react";
import UploadFiles from "@/app/upload/files/UploadFiles";
import { BASE_API_URL } from "@/utils/env";

type Props = {};

const page = (props: Props) => {
  return <UploadFiles apiUrl={BASE_API_URL} />;
};

export default page;
