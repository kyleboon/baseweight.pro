import { _ as _sfc_main$1 } from './modal-CYptURXi.mjs';
import { _ as _sfc_main$2 } from './errors-AFvz1_a0.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-CztNPehg.mjs';
import { _ as _sfc_main$3 } from './blackout-footer-DCPLG3AI.mjs';
import { ref, mergeProps, withCtx, createTextVNode, createVNode, withModifiers, withDirectives, vModelText, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { f as fetchJson } from './utils-j_mMODQ8.mjs';
import { a as useRouter } from './server.mjs';
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
import '../_/weight.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'pinia';
import 'vue-router';
import '@vue/shared';

const _sfc_main = /* @__PURE__ */ Object.assign({ name: "ForgotPassword" }, {
  __name: "forgot-password",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const forgotPasswordUsername = ref("");
    const forgotPasswordErrors = ref([]);
    const forgotUsernameEmail = ref("");
    const forgotUsernameErrors = ref([]);
    function resetPassword() {
      forgotPasswordErrors.value = [];
      return fetchJson("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin",
        body: JSON.stringify({ username: forgotPasswordUsername.value })
      }).then((_response) => {
        router.push("/signin/reset-password");
      }).catch((response) => {
        let localErrors = [{ message: "An error occurred, please try again later." }];
        if (response.json && response.json.errors) {
          localErrors = response.json.errors;
        }
        forgotPasswordErrors.value = localErrors;
      });
    }
    function forgotUsername() {
      forgotUsernameErrors.value = [];
      return fetchJson("/api/auth/forgot-username", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin",
        body: JSON.stringify({ email: forgotUsernameEmail.value })
      }).then((_response) => {
        router.push("/signin/forgot-username");
      }).catch((response) => {
        let localErrors = [{ message: "An error occurred, please try again later." }];
        if (response.json && response.json.errors) {
          localErrors = response.json.errors;
        }
        forgotUsernameErrors.value = localErrors;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_modal = _sfc_main$1;
      const _component_errors = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_blackoutFooter = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "forgotPasswordContainer" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_modal, {
        id: "forgotPassword",
        shown: true,
        blackout: true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="columns"${_scopeId}><div class="lpHalf"${_scopeId}><h3${_scopeId}>Forgot Your Password?</h3><p${_scopeId}>Please enter your username.</p><form class="forgotPassword"${_scopeId}><div class="lpFields"${_scopeId}><input${ssrRenderAttr("value", forgotPasswordUsername.value)} type="text" placeholder="Username" name="username" class="username"${_scopeId}><input type="submit" value="Submit" class="lpButton"${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_errors, { errors: forgotPasswordErrors.value }, null, _parent2, _scopeId));
            _push2(`</form></div><div class="lpHalf"${_scopeId}><h3${_scopeId}>Forgot Your Username?</h3><p${_scopeId}>Please enter your email address.</p><form class="forgotUsername"${_scopeId}><div class="lpFields"${_scopeId}><input${ssrRenderAttr("value", forgotUsernameEmail.value)} type="text" placeholder="Email Address" name="email" class="email"${_scopeId}><input type="submit" value="Submit" class="lpButton"${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_errors, { errors: forgotUsernameErrors.value }, null, _parent2, _scopeId));
            _push2(`</form></div>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/signin",
              class: "lpHref"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` ← Return to sign in `);
                } else {
                  return [
                    createTextVNode(" ← Return to sign in ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "columns" }, [
                createVNode("div", { class: "lpHalf" }, [
                  createVNode("h3", null, "Forgot Your Password?"),
                  createVNode("p", null, "Please enter your username."),
                  createVNode("form", {
                    class: "forgotPassword",
                    onSubmit: withModifiers(resetPassword, ["prevent"])
                  }, [
                    createVNode("div", { class: "lpFields" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => forgotPasswordUsername.value = $event,
                        type: "text",
                        placeholder: "Username",
                        name: "username",
                        class: "username"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, forgotPasswordUsername.value]
                      ]),
                      createVNode("input", {
                        type: "submit",
                        value: "Submit",
                        class: "lpButton"
                      })
                    ]),
                    createVNode(_component_errors, { errors: forgotPasswordErrors.value }, null, 8, ["errors"])
                  ], 32)
                ]),
                createVNode("div", { class: "lpHalf" }, [
                  createVNode("h3", null, "Forgot Your Username?"),
                  createVNode("p", null, "Please enter your email address."),
                  createVNode("form", {
                    class: "forgotUsername",
                    onSubmit: withModifiers(forgotUsername, ["prevent"])
                  }, [
                    createVNode("div", { class: "lpFields" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => forgotUsernameEmail.value = $event,
                        type: "text",
                        placeholder: "Email Address",
                        name: "email",
                        class: "email"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, forgotUsernameEmail.value]
                      ]),
                      createVNode("input", {
                        type: "submit",
                        value: "Submit",
                        class: "lpButton"
                      })
                    ]),
                    createVNode(_component_errors, { errors: forgotUsernameErrors.value }, null, 8, ["errors"])
                  ], 32)
                ]),
                createVNode(_component_NuxtLink, {
                  to: "/signin",
                  class: "lpHref"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" ← Return to sign in ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_blackoutFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/forgot-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=forgot-password-CC13OZkk.mjs.map
