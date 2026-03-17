import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { d as defineEventHandler, s as setResponseStatus, r as readBody, u as upsertUser } from '../../nitro/nitro.mjs';
import { v as verifyPassword } from '../../_/auth.mjs';
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
const index_post = defineEventHandler(async (event) => {
  var _a;
  const user = event.context.user;
  if (!user) {
    setResponseStatus(event, 401);
    return { message: "Please log in." };
  }
  const body = await readBody(event);
  console.log({ message: "Starting account changes", username: user.username });
  let verified;
  try {
    verified = await verifyPassword(user.username, String((_a = body.currentPassword) != null ? _a : ""));
  } catch {
    setResponseStatus(event, 400);
    return { errors: [{ field: "currentPassword", message: "Your current password is incorrect." }] };
  }
  if (body.newPassword) {
    const newPassword = String(body.newPassword);
    if (newPassword.length < 5 || newPassword.length > 60) {
      setResponseStatus(event, 400);
      return { errors: [{ field: "newPassword", message: "Please enter a password between 5 and 60 characters." }] };
    }
    const salt = await bcrypt.genSalt(10);
    verified.password = await bcrypt.hash(newPassword, salt);
    if (body.newEmail) verified.email = String(body.newEmail);
    await upsertUser(verified);
    return { message: "success" };
  }
  if (body.newEmail) {
    verified.email = String(body.newEmail);
    await upsertUser(verified);
    return { message: "success" };
  }
  setResponseStatus(event, 400);
  return { errors: [{ message: "No changes requested." }] };
});

export { index_post as default };
//# sourceMappingURL=index.post.mjs.map
