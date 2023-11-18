import { auth } from "@clerk/nextjs";
import { API, getApiHeaders } from "@/utils/api";

type Limits = {
  type: string; //AccountType;
  bytes: {
    used: number;
    max: number;
  };
};

export const fetchAccountLimits = async (): Promise<Limits> => {
  const clerkToken = auth();

  const limitsResponse = await API.get("/account/limits", {
    headers: await getApiHeaders(clerkToken),
  });

  return limitsResponse.data;
};
