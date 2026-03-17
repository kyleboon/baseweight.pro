import { d as defineEventHandler, f as getRouterParam, h as createError, g as getDb } from '../../../nitro/nitro.mjs';
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

const { Library } = dataTypes;
const _id__get = defineEventHandler(async (event) => {
  var _a;
  const id = getRouterParam(event, "id");
  if (!id) {
    throw createError({ statusCode: 400, message: "No list specified" });
  }
  const db = getDb();
  let users;
  try {
    users = await db.collection("users").find({ "library.lists.externalId": id }).toArray();
  } catch {
    throw createError({ statusCode: 500, message: "An error occurred" });
  }
  if (!users.length || !((_a = users[0]) == null ? void 0 : _a.library)) {
    throw createError({ statusCode: 404, message: "List not found" });
  }
  const library = new Library();
  library.load(users[0].library);
  let list = null;
  for (const l of library.lists) {
    if (l.externalId && l.externalId == id) {
      library.defaultListId = l.id;
      list = l;
      break;
    }
  }
  if (!list) {
    throw createError({ statusCode: 404, message: "List not found" });
  }
  return {
    // Return the raw library JSON — the page reconstructs the Library
    // object on both server and client using shared/dataTypes.js.
    library: users[0].library,
    externalId: id
  };
});

export { _id__get as default };
//# sourceMappingURL=_id_.get.mjs.map
