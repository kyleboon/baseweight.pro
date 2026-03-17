import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderSlot, ssrRenderClass } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ Object.assign({ name: "Modal" }, {
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    id: {
      type: String,
      default: null
    },
    shown: {
      type: Boolean,
      required: true
    },
    blackout: {
      type: Boolean,
      default: false
    },
    transparentOverlay: {
      type: Boolean,
      default: false
    }
  },
  emits: ["hide"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "lpModalContainer" }, _attrs))}>`);
      if (__props.shown) {
        _push(`<div${ssrRenderAttr("id", __props.id)} class="lpModal">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.shown) {
        _push(`<div class="${ssrRenderClass({ lpModalOverlay: true, lpBlackout: __props.blackout, lpTransparent: __props.transparentOverlay })}"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=modal-CYptURXi.mjs.map
