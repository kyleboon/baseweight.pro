import { d as defineEventHandler, s as setResponseStatus, e as getQuery, g as getDb } from '../../../nitro/nitro.mjs';
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

const search_get = defineEventHandler(async (event) => {
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
  const q = String((_a = getQuery(event).q) != null ? _a : "").toLowerCase().trim();
  const escaped = q.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  const users = getDb().collection("users");
  const [nameResult, emailResult] = await Promise.all([
    users.find({ username: { $regex: `${escaped}.*`, $options: "si" } }).toArray(),
    users.find({ email: { $regex: `${escaped}.*`, $options: "si" } }).toArray()
  ]);
  const results = [...nameResult, ...emailResult].map((u) => ({
    username: u.username,
    library: u.library,
    email: u.email
  }));
  return { results };
});

export { search_get as default };
//# sourceMappingURL=search.get.mjs.map
