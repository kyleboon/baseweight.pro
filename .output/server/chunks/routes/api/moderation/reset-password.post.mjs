import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { d as defineEventHandler, s as setResponseStatus, r as readBody, g as getDb, u as upsertUser } from '../../../nitro/nitro.mjs';
import { i as isModerator } from '../../../_/auth.mjs';
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
const resetPassword_post = defineEventHandler(async (event) => {
  var _a;
  const user = event.context.user;
  if (!user) {
    setResponseStatus(event, 401);
    return { message: "Please log in." };
  }
  if (!isModerator(user.username)) {
    setResponseStatus(event, 403);
    return { message: "Denied." };
  }
  const body = await readBody(event);
  const username = String((_a = body.username) != null ? _a : "").toLowerCase().trim();
  console.log({ message: "MODERATION Reset password start", username });
  const users = await getDb().collection("users").find({ username }).toArray();
  if (!users.length) {
    setResponseStatus(event, 500);
    return { message: "An error occurred." };
  }
  const target = users[0];
  const newPassword = crypto.randomBytes(12).toString("hex");
  const salt = await bcrypt.genSalt(10);
  target.password = await bcrypt.hash(newPassword, salt);
  await upsertUser(target);
  console.log({ message: "MODERATION password changed", username });
  return { newPassword };
});

export { resetPassword_post as default };
//# sourceMappingURL=reset-password.post.mjs.map
