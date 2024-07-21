import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  if (res) console.log(res, "res");
  if (req) console.log(req, "req");
  // console.log(JSON.parse(req), " json req");
  console.log(headers);
  return NextResponse.json(
    { res: res ? res : "no res" },
    { req: req ? req : "no req" },
    {
      status: 200,
    }
  );
}
