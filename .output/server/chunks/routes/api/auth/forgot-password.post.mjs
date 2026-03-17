import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { d as defineEventHandler, r as readBody, s as setResponseStatus, g as getDb, u as upsertUser } from '../../../nitro/nitro.mjs';
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
const bcrypt = _require("bcryptjs");
const crypto = _require("crypto");
const FormData = _require("form-data");
const config = _require("config");
let mg;
if (config.get("mailgunAPIKey")) {
  const Mailgun = _require("mailgun.js");
  mg = new Mailgun(FormData).client({ username: "api", key: config.get("mailgunAPIKey") });
}
const forgotPassword_post = defineEventHandler(async (event) => {
  var _a;
  const body = await readBody(event);
  const username = String((_a = body.username) != null ? _a : "").toLowerCase().trim();
  if (!username || username.length < 1 || username.length > 32) {
    setResponseStatus(event, 400);
    return { errors: [{ message: "Please enter a username." }] };
  }
  const users = await getDb().collection("users").find({ username }).toArray();
  if (!users.length) {
    setResponseStatus(event, 500);
    return { message: "An error occurred." };
  }
  const user = users[0];
  const newPassword = crypto.randomBytes(12).toString("hex");
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(newPassword, salt);
  const message = `Hello ${username},
 Apparently you forgot your password. Here's your new one: 

 Username: ${username}
 Password: ${newPassword}

 If you continue to have problems, please reply to this email with details.

 Thanks!`;
  if (mg) {
    const response = await mg.messages.create(config.get("mailgunDomain"), {
      from: "LighterPack <info@mg.lighterpack.com>",
      to: user.email,
      "h:Reply-To": "LighterPack <info@lighterpack.com>",
      subject: "Your new LighterPack password",
      text: message
    });
    console.log({ message: "Message sent", response: response.message });
  } else {
    console.log({ message: "Mailgun not configured, skipping email", username });
  }
  await upsertUser(user);
  console.log({ message: "password changed for user", username });
  return { username };
});

export { forgotPassword_post as default };
//# sourceMappingURL=forgot-password.post.mjs.map
