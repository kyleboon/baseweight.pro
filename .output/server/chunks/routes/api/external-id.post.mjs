import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { d as defineEventHandler, s as setResponseStatus, g as getDb, u as upsertUser } from '../../nitro/nitro.mjs';
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
function generateId(alphabet, size) {
  const bytes = crypto.randomBytes(size * 2);
  return Array.from(bytes).map((b) => alphabet[b % alphabet.length]).join("").slice(0, size);
}
const externalId_post = defineEventHandler(async (event) => {
  const user = event.context.user;
  if (!user) {
    setResponseStatus(event, 401);
    return { message: "Please log in." };
  }
  let id;
  while (true) {
    id = generateId("1234567890abcdefghijklmnopqrstuvwxyz", 6);
    const existing = await getDb().collection("users").find({ "library.lists.externalId": id }).toArray();
    if (!existing.length) break;
  }
  if (!user.externalIds) user.externalIds = [id];
  else user.externalIds.push(id);
  await upsertUser(user);
  console.log({ message: "Id saved", id, username: user.username });
  return { externalId: id };
});

export { externalId_post as default };
//# sourceMappingURL=external-id.post.mjs.map
