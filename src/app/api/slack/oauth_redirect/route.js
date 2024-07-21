import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  console.log(res, "res");
  console.log(req, "req");
  // console.log(JSON.parse(req), " json req");
  console.log(headers);
  return NextResponse.json(
    { res: res },
    { req: req },
    {
      status: 200,
    }
  );
}
