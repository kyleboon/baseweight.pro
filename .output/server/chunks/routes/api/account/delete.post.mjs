import { d as defineEventHandler, s as setResponseStatus, r as readBody, g as getDb } from '../../../nitro/nitro.mjs';
import { v as verifyPassword } from '../../../_/auth.mjs';
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

const delete_post = defineEventHandler(async (event) => {
  var _a;
  const user = event.context.user;
  if (!user) {
    setResponseStatus(event, 401);
    return { message: "Please log in." };
  }
  const body = await readBody(event);
  console.log({ message: "Starting account delete", username: user.username });
  let verified;
  try {
    verified = await verifyPassword(user.username, String((_a = body.password) != null ? _a : ""));
  } catch {
    setResponseStatus(event, 400);
    return { errors: [{ field: "currentPassword", message: "Your current password is incorrect." }] };
  }
  if (body.username !== verified.username) {
    setResponseStatus(event, 400);
    return { errors: [{ message: "An error occurred, please try logging out and in again." }] };
  }
  await getDb().collection("users").deleteOne({ _id: verified._id });
  console.log({ message: "Completed account delete", username: user.username });
  return { message: "success" };
});

export { delete_post as default };
//# sourceMappingURL=delete.post.mjs.map
