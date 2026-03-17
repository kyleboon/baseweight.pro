import { unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useLighterpackStore } from './store-BCqR5AiP.mjs';

const _sfc_main$1 = /* @__PURE__ */ Object.assign({ name: "Spinner" }, {
  __name: "Spinner",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "lpSpinner" }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/spinner.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ Object.assign({ name: "GlobalAlerts" }, {
  __name: "GlobalAlerts",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useLighterpackStore();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(store).globalAlerts && unref(store).globalAlerts.length) {
        _push(`<ul${ssrRenderAttrs(mergeProps({ class: "lpGlobalAlerts" }, _attrs))}><!--[-->`);
        ssrRenderList(unref(store).globalAlerts, (alert) => {
          _push(`<li class="lpGlobalAlert">${ssrInterpolate(alert.message)}</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global-alerts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, _sfc_main$1 as a };
//# sourceMappingURL=global-alerts-Bo8j0Yf8.mjs.map
