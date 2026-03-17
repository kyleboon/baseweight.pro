import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { createRequire } from 'module';
import { g as getDb } from '../nitro/nitro.mjs';

const _require = createRequire(globalThis._importMeta_.url);
const bcrypt = _require("bcryptjs");
const config = _require("config");
async function verifyPassword(username, password) {
  let users;
  try {
    users = await getDb().collection("users").find({ username }).toArray();
  } catch {
    throw { code: 500, message: "An error occurred, please try again later." };
  }
  if (!(users == null ? void 0 : users.length)) {
    throw { code: 404, message: "Invalid username and/or password." };
  }
  const user = users[0];
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    throw { code: 404, message: "Invalid username and/or password." };
  }
  return user;
}
function isModerator(username) {
  const moderatorList = config.get("moderators") || [];
  return moderatorList.includes(username);
}

export { isModerator as i, verifyPassword as v };
//# sourceMappingURL=auth.mjs.map
