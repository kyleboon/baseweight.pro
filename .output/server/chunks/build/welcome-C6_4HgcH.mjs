import { _ as _sfc_main$1 } from './register-form-Bn_ZplUx.mjs';
import { _ as _sfc_main$2 } from './signin-form-CdNoNQR3.mjs';
import { _ as _sfc_main$3 } from './global-alerts-Bo8j0Yf8.mjs';
import { _ as _sfc_main$4 } from './blackout-footer-DCPLG3AI.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { useRouter } from 'vue-router';
import { u as useLighterpackStore } from './store-BCqR5AiP.mjs';
import './errors-AFvz1_a0.mjs';
import 'vue-bundle-renderer/runtime';
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
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'pinia';
import '../_/weight.mjs';
import '../_/dataTypes.mjs';
import './utils-j_mMODQ8.mjs';
import './server.mjs';
import '@vue/shared';

const _imports_0 = publicAssetsURL("/images/screenshot.jpg");
const _sfc_main = /* @__PURE__ */ Object.assign({ name: "Welcome" }, {
  __name: "welcome",
  __ssrInlineRender: true,
  setup(__props) {
    useLighterpackStore();
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_registerForm = _sfc_main$1;
      const _component_SigninForm = _sfc_main$2;
      const _component_globalAlerts = _sfc_main$3;
      const _component_blackoutFooter = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "lpWelcomeContainer" }, _attrs))}><div id="lpLaunchBanner"><div class="lpContainer"><strong>Welcome to the new version of LighterPack!</strong> We hope you like it, and if you have any questions please <a href="mailto:info@lighterpack.com" class="lpHref">get in touch</a>. </div></div><div id="lpWelcome" class="lpContainer"><h1><strong>LighterPack</strong> helps you track the gear you bring on adventures.</h1><div class="lpWelcomeContent"><div class="lpWelcomeRegisterContainer"><div class="lpWelcomeRegister"><h3 class="lpWelcomeContainerHeader">Register an account</h3>`);
      _push(ssrRenderComponent(_component_registerForm, null, null, _parent));
      _push(`</div><div class="lpValuePropContainer"><ul id="lpValueProp"><li id="valueEnter"><h3><strong>1.</strong>Enter your packing lists</h3></li><li id="valueVisualize"><h3><strong>2.</strong>Visualize your pack weights</h3></li><li id="valueShare"><h3><strong>3.</strong>Share your lists with others</h3></li></ul><img id="lpWelcomeScreenshot"${ssrRenderAttr("src", _imports_0)} alt="A screenshot of the LighterPack interface"></div></div><div class="lpWelcomeSigninContainer"><h3 class="lpWelcomeContainerHeader">Sign in</h3>`);
      _push(ssrRenderComponent(_component_SigninForm, null, null, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_globalAlerts, null, null, _parent));
      _push(ssrRenderComponent(_component_blackoutFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=welcome-C6_4HgcH.mjs.map
