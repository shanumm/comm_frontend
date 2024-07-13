import { headers } from "next/headers";

const { App, FileInstallationStore } = require("@slack/bolt");
require("dotenv").config();
// Initializes your app with credentials

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true, // enable to use socket mode,
  appToken: process.env.APP_TOKEN,
  token_rotation_enabled: true,
  installationStore: new FileInstallationStore(),
});

export async function GET() {
  try {
    const users = await app.client.users.list();
    console.log(users);
  } catch (e) {
    console.error(e);
  }
  return new Response(JSON.stringify({ hello: "testing" }), {
    status: 200,
  });
}
