import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ Object.assign({ name: "Admin" }, {
  __name: "moderation",
  __ssrInlineRender: true,
  setup(__props) {
    const searchQuery = ref("");
    const searchResults = ref(null);
    const userToInspect = ref(null);
    const editableLibrary = ref(null);
    const newPassword = ref(null);
    const resultsLoaded = computed(() => !!searchResults.value);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "lp-moderation" }, _attrs))}><h1>Admin panel</h1><form><input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="Search for a user..."><button>Search</button></form>`);
      if (resultsLoaded.value) {
        _push(`<ul class="lp-moderation-search-results"><!--[-->`);
        ssrRenderList(searchResults.value, (result) => {
          _push(`<li>${ssrInterpolate(result.username)}</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      if (userToInspect.value) {
        _push(`<div class="lp-moderation-user-to-inspect"><h2>${ssrInterpolate(userToInspect.value.username)}</h2><section><button>Clear session</button><button>Reset password</button>`);
        if (newPassword.value) {
          _push(`<!--[--><strong>New Password:</strong> ${ssrInterpolate(newPassword.value)}<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</section><section><textarea id="lp-moderation-user-library-json">${ssrInterpolate(editableLibrary.value)}</textarea></section></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/moderation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=moderation-BhC5BH21.mjs.map
