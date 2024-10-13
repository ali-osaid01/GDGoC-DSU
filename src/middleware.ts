import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const privatePaths = [
    "/admin/dashboard",
    "/admin/dashboard/categories",
    "/admin/dashboard/menus",
  ];

  const isPrivatePath = privatePaths.includes(path);

  const token = request.cookies.get("session")?.value;
  
  if (isPrivatePath && !token) {
    return NextResponse.redirect(new URL("/admin", request.nextUrl));
  }

  if (request.nextUrl.pathname.startsWith("/api/password")) {
    if (request.method === "POST") {
      const token = cookies().get("otpToken")?.value;
      if (token) {
        return NextResponse.next();
      } else {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
    }
  }
  if (request.nextUrl.pathname.startsWith("/api/highlight")) {
    if (request.method === "POST") {
      const token = cookies().get("session")?.value;
      if (token) {
        return NextResponse.next();
      } else {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
    }
  }
  if (request.nextUrl.pathname.startsWith("/api/partner")) {
    if (request.method === "POST") {
      const token = cookies().get("session")?.value;
      if (token) {
        return NextResponse.next();
      } else {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
    }
  }


}
