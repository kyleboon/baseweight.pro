import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { d as defineEventHandler, s as setResponseStatus } from '../../nitro/nitro.mjs';
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
const formidable = _require("formidable");
const axios = _require("axios");
const FormData = _require("form-data");
const fs = _require("fs");
const config = _require("config");
const imageUpload_post = defineEventHandler(async (event) => {
  const form = new formidable.IncomingForm();
  const { files } = await new Promise((resolve, reject) => {
    form.parse(event.node.req, (err, _fields, parsedFiles) => {
      if (err) reject(err);
      else resolve({ files: parsedFiles });
    });
  });
  if (!(files == null ? void 0 : files.image)) {
    setResponseStatus(event, 500);
    return { message: "An error occurred" };
  }
  const filePath = files.image[0].filepath;
  const formData = new FormData();
  formData.append("image", fs.createReadStream(filePath));
  formData.append("type", "file");
  const { data, status } = await axios.post("https://api.imgur.com/3/image", formData, {
    headers: {
      Authorization: `Client-ID ${config.get("imgurClientID")}`,
      ...formData.getHeaders()
    }
  });
  if (status !== 200 || data.error) {
    setResponseStatus(event, 500);
    return { message: "An error occurred." };
  }
  return data;
});

export { imageUpload_post as default };
//# sourceMappingURL=image-upload.post.mjs.map
