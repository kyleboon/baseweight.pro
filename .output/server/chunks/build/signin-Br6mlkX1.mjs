import { _ as _sfc_main$1 } from './modal-CYptURXi.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-CztNPehg.mjs';
import { _ as _sfc_main$2 } from './signin-form-CdNoNQR3.mjs';
import { _ as _sfc_main$3 } from './blackout-footer-DCPLG3AI.mjs';
import { _ as _sfc_main$4 } from './global-alerts-Bo8j0Yf8.mjs';
import { computed, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
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
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'pinia';
import '@vue/shared';
import './store-BCqR5AiP.mjs';
import '../_/weight.mjs';
import '../_/dataTypes.mjs';
import './utils-j_mMODQ8.mjs';
import './errors-AFvz1_a0.mjs';

const _sfc_main = /* @__PURE__ */ Object.assign({ name: "Signin" }, {
  __name: "signin",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const message = computed(() => {
      if (route.path.indexOf("/reset-password") > -1 || route.path.indexOf("/forgot-username") > -1) {
        return "An email has been sent to the address associated with your account. Note: emails to yahoo.com addresses are currently being blocked. Please reach out to info@lighterpack.com for assistance if you do not receive your email.";
      }
      return "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_modal = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_SigninForm = _sfc_main$2;
      const _component_blackoutFooter = _sfc_main$3;
      const _component_globalAlerts = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "signinContainer" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_modal, {
        id: "signin",
        shown: true,
        blackout: true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="lpModalHeader"${_scopeId}><h2${_scopeId}>Sign in</h2>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/register",
              class: "lpHref"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Need to register? `);
                } else {
                  return [
                    createTextVNode(" Need to register? ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_SigninForm, { message: message.value }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "lpModalHeader" }, [
                createVNode("h2", null, "Sign in"),
                createVNode(_component_NuxtLink, {
                  to: "/register",
                  class: "lpHref"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Need to register? ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_SigninForm, { message: message.value }, null, 8, ["message"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_blackoutFooter, null, null, _parent));
      _push(ssrRenderComponent(_component_globalAlerts, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/signin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=signin-Br6mlkX1.mjs.map
