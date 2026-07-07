import { NextResponse } from "next/server";

// Static export requires this route to be statically generated.
// GitHub Pages serves only static files, so this is a fixed JSON response.
export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json({ status: "ok", service: "guilherme-rafael-portfolio" });
}
