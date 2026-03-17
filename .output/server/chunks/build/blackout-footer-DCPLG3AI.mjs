import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ Object.assign({ name: "BlackoutFooter" }, {
  __name: "BlackoutFooter",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "lpWelcomeFooter" }, _attrs))}><div class="lpSiteBy"> Site by <a class="lpHref" href="https://www.galenmaly.com/" target="_blank" rel="noopener noreferrer">Galen Maly</a> and <a class="lpHref" href="https://github.com/galenmaly/lighterpack/graphs/contributors" target="_blank" rel="noopener noreferrer">friends</a>. </div><div class="lpContact"><a class="lpHref" href="https://github.com/galenmaly/lighterpack" target="_blank" rel="noopener noreferrer">Copyleft</a> LighterPack 2019 - <a class="lpHref" href="mailto:info@lighterpack.com">Contact</a></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blackout-footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=blackout-footer-DCPLG3AI.mjs.map
