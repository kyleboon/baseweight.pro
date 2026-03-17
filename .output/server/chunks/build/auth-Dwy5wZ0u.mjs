import { u as useLighterpackStore } from './store-BCqR5AiP.mjs';
import { f as defineNuxtRouteMiddleware, n as navigateTo } from './server.mjs';
import 'pinia';
import '../_/weight.mjs';
import '../_/dataTypes.mjs';
import './utils-j_mMODQ8.mjs';
import 'vue';
import '../nitro/nitro.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';
import '@vue/shared';

const auth = defineNuxtRouteMiddleware(() => {
  const store = useLighterpackStore();
  if (!store.loggedIn) return navigateTo("/signin");
});

export { auth as default };
//# sourceMappingURL=auth-Dwy5wZ0u.mjs.map
