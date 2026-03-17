import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { d as defineEventHandler, r as readBody, s as setResponseStatus, u as upsertUser, a as setCookie } from '../../../nitro/nitro.mjs';
import { v as verifyPassword } from '../../../_/auth.mjs';
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
const crypto = _require("crypto");
const signin_post = defineEventHandler(async (event) => {
  var _a, _b;
  const body = await readBody(event);
  let user = event.context.user;
  if (!user) {
    if (!body.username || !body.password) {
      setResponseStatus(event, 401);
      return { message: "Please log in." };
    }
    try {
      user = await verifyPassword(
        String(body.username).toLowerCase().trim(),
        String(body.password)
      );
    } catch (err) {
      setResponseStatus(event, (_a = err.code) != null ? _a : 401);
      return { message: (_b = err.message) != null ? _b : "Please log in." };
    }
    const token = crypto.randomBytes(48).toString("hex");
    user.token = token;
    upsertUser(user).catch(console.error);
    setCookie(event, "lp", token, {
      path: "/",
      maxAge: 365 * 24 * 60 * 1e3,
      httpOnly: true,
      sameSite: "lax"
    });
  }
  console.log({ message: "signed in", username: user.username });
  if (!user.syncToken) {
    user.syncToken = 0;
    upsertUser(user).catch(console.error);
  }
  return { username: user.username, library: JSON.stringify(user.library), syncToken: user.syncToken };
});

export { signin_post as default };
//# sourceMappingURL=signin.post.mjs.map
