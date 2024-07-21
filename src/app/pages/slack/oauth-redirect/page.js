"use client";
import { useParams } from "next/navigation";

export default function Slack(props) {
  console.log(props.searchParams.code);
  return <div className="flex flex-col">test</div>;
}
