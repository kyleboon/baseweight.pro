import { d as defineEventHandler, b as getCookie, g as getDb, c as deleteCookie } from '../../../nitro/nitro.mjs';
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

const signout_post = defineEventHandler(async (event) => {
  const token = getCookie(event, "lp");
  if (token) {
    try {
      await getDb().collection("users").updateOne({ token }, { $unset: { token: "" } });
    } catch {
    }
  }
  deleteCookie(event, "lp", { path: "/", httpOnly: true, sameSite: "lax" });
  return { ok: true };
});

export { signout_post as default };
//# sourceMappingURL=signout.post.mjs.map
