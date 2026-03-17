import { d as defineEventHandler, s as setResponseStatus, r as readBody, g as getDb, u as upsertUser } from '../../../nitro/nitro.mjs';
import { i as isModerator } from '../../../_/auth.mjs';
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
import 'module';

const clearSession_post = defineEventHandler(async (event) => {
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
  console.log({ message: "MODERATION Clear session start", username });
  const users = await getDb().collection("users").find({ username }).toArray();
  if (!users.length) {
    setResponseStatus(event, 500);
    return { message: "An error occurred." };
  }
  const target = users[0];
  target.token = "";
  await upsertUser(target);
  console.log({ message: "MODERATION Clear session succeeded", username });
  return { message: "success" };
});

export { clearSession_post as default };
//# sourceMappingURL=clear-session.post.mjs.map
