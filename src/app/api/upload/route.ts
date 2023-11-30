import { API, getApiHeaders } from "@/utils/api";
import { auth } from "@clerk/nextjs";

export async function GET(request: Request) {
  return Response.json({ message: "Hello world!" });
}

export async function POST(request: Request) {
  const clerkToken = auth();
  const formData = await request.formData();

  try {
    await API.post("/items/upload/file", formData, {
      headers: {
        ...(await getApiHeaders(clerkToken)),
        "Content-Type": undefined as any,
      },
    });

    return Response.json({ message: "Files read, hopefully" });
  } catch (e) {
    console.log("error", e);

    return new Response(null, { status: 500 });
  }
}
