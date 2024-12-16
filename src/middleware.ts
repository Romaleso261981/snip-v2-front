import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextResponse, NextRequest } from "next/server";

export default createMiddleware(routing);

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const url = new URL(req.url);
  const locale = url.pathname.split("/")[1];
  res.headers.set("locale", locale);
  return res;
}

console.log("middleware.ts");

export const config = {
  matcher: ["/", "/(uk|en)/:path*"]
};
