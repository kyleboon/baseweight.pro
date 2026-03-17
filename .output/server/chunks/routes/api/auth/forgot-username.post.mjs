import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { d as defineEventHandler, r as readBody, s as setResponseStatus, g as getDb } from '../../../nitro/nitro.mjs';
import { createRequire } from 'module';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'mongodb';
import 'config';
import 'node:url';

const _require = createRequire(globalThis._importMeta_.url);
const FormData = _require("form-data");
const config = _require("config");
let mg;
if (config.get("mailgunAPIKey")) {
  const Mailgun = _require("mailgun.js");
  mg = new Mailgun(FormData).client({ username: "api", key: config.get("mailgunAPIKey") });
}
const forgotUsername_post = defineEventHandler(async (event) => {
  var _a;
  const body = await readBody(event);
  const email = String((_a = body.email) != null ? _a : "").toLowerCase().trim();
  if (!email || email.length < 1) {
    setResponseStatus(event, 400);
    return { errors: [{ message: "Please enter a valid email." }] };
  }
  const users = await getDb().collection("users").find({ email }).toArray();
  if (!users.length) {
    setResponseStatus(event, 400);
    return { message: "An error occurred" };
  }
  const { username } = users[0];
  const message = `Hello ${username},
 Apparently you forgot your username. Here it is: 

 Username: ${username}

 If you continue to have problems, please reply to this email with details.

 Thanks!`;
  if (mg) {
    const response = await mg.messages.create(config.get("mailgunDomain"), {
      from: "LighterPack <info@mg.lighterpack.com>",
      to: email,
      "h:Reply-To": "LighterPack <info@lighterpack.com>",
      subject: "Your LighterPack username",
      text: message
    });
    console.log({ message: "Message sent", response: response.message });
  } else {
    console.log({ message: "Mailgun not configured, skipping email", email, username });
  }
  return { email };
});

export { forgotUsername_post as default };
//# sourceMappingURL=forgot-username.post.mjs.map
