import { computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ Object.assign({ name: "Errors" }, {
  __name: "Errors",
  __ssrInlineRender: true,
  props: {
    errors: {
      type: [Array, Object, String],
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const sanitizedErrors = computed(() => {
      let errors = props.errors;
      if (!errors) {
        return [];
      }
      if (typeof errors === "string") {
        return [{ message: errors }];
      }
      if (typeof errors === "object" && !(errors instanceof Array) && errors.message) {
        return [errors];
      }
      if (typeof errors === "object" && errors.errors && errors.errors instanceof Array) {
        errors = errors.errors;
      }
      if (typeof errors === "object" && errors instanceof Array) {
        if (errors.length === 0) {
          return errors;
        }
        const massagedErrors = errors.map((error) => {
          if (typeof error === "string") {
            return { message: error };
          }
          if (typeof error === "object" && error.message) {
            return error;
          }
          return false;
        }).filter((error) => !!error.message);
        if (massagedErrors.length) {
          return massagedErrors;
        }
      }
      return [{ message: "An unknown error occurred." }];
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (sanitizedErrors.value && sanitizedErrors.value.length) {
        _push(`<ul${ssrRenderAttrs(mergeProps({ class: "lpError" }, _attrs))}><!--[-->`);
        ssrRenderList(sanitizedErrors.value, (error) => {
          _push(`<li>${ssrInterpolate(error.message)}</li>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/errors.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=errors-AFvz1_a0.mjs.map
