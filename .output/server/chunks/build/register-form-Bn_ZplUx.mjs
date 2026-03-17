import { ref, computed, resolveDirective, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrGetDynamicModelProps, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { u as useLighterpackStore } from './store-BCqR5AiP.mjs';
import { _ as _sfc_main$1 } from './errors-AFvz1_a0.mjs';
import { a as _sfc_main$1$1 } from './global-alerts-Bo8j0Yf8.mjs';

const _sfc_main = /* @__PURE__ */ Object.assign({ name: "RegisterForm" }, {
  __name: "RegisterForm",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useLighterpackStore();
    useRouter();
    const username = ref("");
    const email = ref("");
    const password = ref("");
    const passwordConfirm = ref("");
    const saving = ref(false);
    const errors_ = ref([]);
    computed(() => store.saveType === "local");
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_focus_on_create = resolveDirective("focus-on-create");
      let _temp0;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "lpRegister lpFields" }, _attrs))}><div class="lpFields"><input${ssrRenderAttrs((_temp0 = mergeProps({
        value: username.value,
        type: "text",
        placeholder: "Username",
        name: "username"
      }, ssrGetDirectiveProps(_ctx, _directive_focus_on_create)), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, username.value))))}><input${ssrRenderAttr("value", email.value)} type="email" placeholder="Email" name="email"><input${ssrRenderAttr("value", password.value)} type="password" placeholder="Password" name="password"><input${ssrRenderAttr("value", passwordConfirm.value)} type="password" placeholder="Confirm password" name="passwordConfirm"></div>`);
      _push(ssrRenderComponent(_sfc_main$1, { errors: errors_.value }, null, _parent));
      _push(`<div class="lpButtons"><button class="lpButton"> Register `);
      if (saving.value) {
        _push(ssrRenderComponent(_sfc_main$1$1, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</button><a class="lpHref lpGetStarted">Skip registration</a></div></form>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/register-form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=register-form-Bn_ZplUx.mjs.map
