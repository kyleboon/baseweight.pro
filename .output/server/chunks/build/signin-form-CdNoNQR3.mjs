import { ref, resolveComponent, resolveDirective, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrGetDirectiveProps, ssrGetDynamicModelProps, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { u as useLighterpackStore } from './store-BCqR5AiP.mjs';
import { _ as _sfc_main$1 } from './errors-AFvz1_a0.mjs';
import { a as _sfc_main$1$1 } from './global-alerts-Bo8j0Yf8.mjs';

const _sfc_main = /* @__PURE__ */ Object.assign({ name: "SigninForm" }, {
  __name: "SigninForm",
  __ssrInlineRender: true,
  props: {
    message: { type: String, default: null }
  },
  setup(__props) {
    useLighterpackStore();
    useRouter();
    const fetching = ref(false);
    const errors_ = ref([]);
    const username = ref("");
    const password = ref("");
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _directive_focus_on_create = resolveDirective("focus-on-create");
      let _temp0;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "signin" }, _attrs))}>`);
      if (__props.message) {
        _push(`<p class="lpSuccess">${ssrInterpolate(__props.message)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="lpFields"><input${ssrRenderAttrs((_temp0 = mergeProps({
        value: username.value,
        type: "text",
        placeholder: "Username",
        name: "username",
        class: "username"
      }, ssrGetDirectiveProps(_ctx, _directive_focus_on_create)), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, username.value))))}><input${ssrRenderAttr("value", password.value)} type="password" placeholder="Password" name="password" class="password"></div>`);
      _push(ssrRenderComponent(_sfc_main$1, { errors: errors_.value }, null, _parent));
      _push(`<div class="lpButtons"><button class="lpButton"> Sign in `);
      if (fetching.value) {
        _push(ssrRenderComponent(_sfc_main$1$1, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</button>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/forgot-password",
        class: "lpHref signin-forgot-password"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Forgot username/password? `);
          } else {
            return [
              createTextVNode(" Forgot username/password? ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/signin-form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=signin-form-CdNoNQR3.mjs.map
