"use client";
import { fetch_slack_channels, fetch_users } from "@/utils/utils.js";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [channelName, setChannelName] = useState(null);

  const get_data = async () => {
    try {
      const fetch_slack_channels_data = await fetch_slack_channels();
      if (fetch_slack_channels_data && fetch_slack_channels_data.status == 200)
        setChannelName(fetch_slack_channels_data.data);
      console.log(fetch_slack_channels_data);
    } catch (err) {
      console.log(err);
    }
  };

  const get_users = async () => {
    const fetch_users_list = await fetch_users();
    console.log(fetch_users_list);
  };

  useEffect(() => {
    console.log(channelName);
  }, [channelName]);

  return (
    <div className="flex flex-col">
      <p1>this is the main page</p1>
      <button onClick={get_data}>get channels</button>
      <button onClick={get_users}>get users</button>
      {channelName &&
        channelName.hello != -1 &&
        channelName.hello.map((channel) => (
          <div key={channel.id}>{channel.id}</div>
        ))}
    </div>
  );
}
