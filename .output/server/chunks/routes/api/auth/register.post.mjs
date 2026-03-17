import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { d as defineEventHandler, r as readBody, s as setResponseStatus, g as getDb, u as upsertUser, a as setCookie } from '../../../nitro/nitro.mjs';
import { createRequire } from 'module';
import { d as dataTypes } from '../../../_/dataTypes.mjs';
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
import '../../../_/weight.mjs';

const _require = createRequire(globalThis._importMeta_.url);
const bcrypt = _require("bcryptjs");
const crypto = _require("crypto");
const { Library } = dataTypes;
const register_post = defineEventHandler(async (event) => {
  var _a, _b, _c;
  const body = await readBody(event);
  const username = String((_a = body.username) != null ? _a : "").toLowerCase().trim();
  const password = String((_b = body.password) != null ? _b : "");
  let email = String((_c = body.email) != null ? _c : "").trim();
  const errors = [];
  if (!username) errors.push({ field: "username", message: "Please enter a username." });
  if (username && (username.length < 3 || username.length > 32))
    errors.push({ field: "username", message: "Please enter a username between 3 and 32 characters." });
  if (!email) errors.push({ field: "email", message: "Please enter an email." });
  if (!password) errors.push({ field: "password", message: "Please enter a password." });
  if (password && (password.length < 5 || password.length > 60))
    errors.push({ field: "password", message: "Please enter a password between 5 and 60 characters." });
  if (errors.length) {
    setResponseStatus(event, 400);
    return { errors };
  }
  console.log({ message: "Attempting to register", username });
  const users = getDb().collection("users");
  const existingByUsername = await users.find({ username }).toArray();
  if (existingByUsername.length) {
    setResponseStatus(event, 400);
    return { errors: [{ field: "username", message: "That username already exists, please pick a different username." }] };
  }
  const existingByEmail = await users.find({ email }).toArray();
  if (existingByEmail.length) {
    setResponseStatus(event, 400);
    return { errors: [{ field: "email", message: "A user with that email already exists." }] };
  }
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);
  const token = crypto.randomBytes(48).toString("hex");
  let library;
  if (body.library) {
    try {
      library = JSON.parse(body.library);
    } catch {
      setResponseStatus(event, 400);
      return { errors: [{ message: "Unable to parse your library. Contact support." }] };
    }
  } else {
    library = new Library().save();
  }
  const newUser = { username, password: hash, email, token, library, syncToken: 0 };
  console.log({ message: "Saving new user", username });
  await upsertUser(newUser);
  setCookie(event, "lp", token, {
    path: "/",
    maxAge: 365 * 24 * 60 * 1e3,
    httpOnly: true,
    sameSite: "lax"
  });
  return { username, library: JSON.stringify(newUser.library), syncToken: 0 };
});

export { register_post as default };
//# sourceMappingURL=register.post.mjs.map
