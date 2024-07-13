import { headers } from "next/headers";

const { App, FileInstallationStore } = require("@slack/bolt");
require("dotenv").config();
// Initializes your app with credentials

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true, // enable to use socket mode
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  installationStore: new FileInstallationStore(),
  appToken: process.env.APP_TOKEN,
  token_rotation_enabled: true,
});

// app.message("hey", async ({ command, say }) => {
//   try {
//     console.log(command, ">>>>>");
//     say("this is working properly!");
//   } catch (error) {
//     console.log("err");
//     console.error(error);
//   }
// });
// app.command("/start", async ({ command, ack, say }) => {
//   await ack();
//   await say(`Hello <@${command.user_id}>`);
//   app.client.conversations
//     .create({ name: "test_channel", is_private: true })
//     .then((res) => {
//       app.client.conversations.invite({
//         channel: res.channel.id,
//         users: command.user_id,
//       });
//     });
// });

// link https://join.slack.com/t/anonymousworld/shared_invite/zt-2lw6m0w3q-r3r_54RctUktJAfvfAczng

export async function GET() {
  let channel_list = [];
  const fetch_data_for_channels = async () => {
    try {
      const channels = await app.client.conversations.list({
        types: "private_channel, public_channel",
      });
      console.log(channels);
      const channel_list = channels.channels.map((channel) => ({
        id: channel.id,
        name: channel.name,
      }));
      return channel_list;
    } catch (err) {
      return -1;
    }
  };
  const fetching_data = await fetch_data_for_channels();
  return new Response(JSON.stringify({ hello: fetching_data }), {
    status: 200,
  });
}
