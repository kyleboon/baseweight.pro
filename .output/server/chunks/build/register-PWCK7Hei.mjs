import { _ as _sfc_main$1 } from './modal-CYptURXi.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-CztNPehg.mjs';
import { _ as _sfc_main$2 } from './register-form-Bn_ZplUx.mjs';
import { _ as _sfc_main$3 } from './blackout-footer-DCPLG3AI.mjs';
import { _ as _sfc_main$4 } from './global-alerts-Bo8j0Yf8.mjs';
import { computed, mergeProps, withCtx, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useLighterpackStore } from './store-BCqR5AiP.mjs';
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
import 'vue-router';
import '@vue/shared';
import './errors-AFvz1_a0.mjs';
import '../_/weight.mjs';
import '../_/dataTypes.mjs';
import './utils-j_mMODQ8.mjs';

const _sfc_main = /* @__PURE__ */ Object.assign({ name: "Register" }, {
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useLighterpackStore();
    const isLocalSaving = computed(() => store.saveType === "local");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_modal = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_registerForm = _sfc_main$2;
      const _component_blackoutFooter = _sfc_main$3;
      const _component_globalAlerts = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "registerContainer" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_modal, {
        id: "register",
        shown: true,
        blackout: true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="lpModalHeader"${_scopeId}><h2${_scopeId}>Register an account</h2>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/signin",
              class: "lpHref"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Already registered? `);
                } else {
                  return [
                    createTextVNode(" Already registered? ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (isLocalSaving.value) {
              _push2(`<p class="lpWarning"${_scopeId}><strong${_scopeId}>Note:</strong> Your existing data on your computer <strong${_scopeId}>will</strong> be saved to your new account. </p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_registerForm, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "lpModalHeader" }, [
                createVNode("h2", null, "Register an account"),
                createVNode(_component_NuxtLink, {
                  to: "/signin",
                  class: "lpHref"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Already registered? ")
                  ]),
                  _: 1
                })
              ]),
              isLocalSaving.value ? (openBlock(), createBlock("p", {
                key: 0,
                class: "lpWarning"
              }, [
                createVNode("strong", null, "Note:"),
                createTextVNode(" Your existing data on your computer "),
                createVNode("strong", null, "will"),
                createTextVNode(" be saved to your new account. ")
              ])) : createCommentVNode("", true),
              createVNode(_component_registerForm)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=register-PWCK7Hei.mjs.map
