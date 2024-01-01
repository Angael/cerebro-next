import { BackendApi, getApiHeaders } from "@/utils/backend-api";
import { auth } from "@clerk/nextjs";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const link = searchParams.get("link");

  const clerkToken = auth();

  const response = await BackendApi.get("/items/upload/file-from-link", {
    params: { link },
    headers: await getApiHeaders(clerkToken),
  });

  return Response.json(response.data);
}

export async function POST(request: NextRequest) {
  const clerkToken = auth();
  const body = await request.json();

  const response = await BackendApi.post("/items/upload/file-from-link", body, {
    headers: await getApiHeaders(clerkToken),
  });

  return Response.json(response.body);
}
