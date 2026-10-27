import { u as useSeoMeta } from '../virtual/entry.mjs';
import { _ as _sfc_main$2 } from './Accordion-44u7Jnkk.mjs';
import { s as site, _ as _sfc_main$1 } from './site-BjEVYaKT.mjs';
import { _ as _sfc_main } from './PageHero-Dbu4Xw3Y.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'file:///Users/ccci/Project/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/ccci/Project/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/ccci/Project/node_modules/nostics/dist/index.mjs';
import 'file:///Users/ccci/Project/node_modules/nostics/dist/formatters/ansi.mjs';
import 'file:///Users/ccci/Project/node_modules/unctx/dist/index.mjs';
import 'file:///Users/ccci/Project/node_modules/hookable/dist/index.mjs';
import 'file:///Users/ccci/Project/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/ccci/Project/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/ccci/Project/node_modules/ufo/dist/index.mjs';
import 'file:///Users/ccci/Project/node_modules/defu/dist/defu.mjs';
import 'file:///Users/ccci/Project/node_modules/vue-router/vue-router.node.mjs';
import 'file:///Users/ccci/Project/node_modules/h3/dist/index.mjs';
import 'file:///Users/ccci/Project/node_modules/klona/dist/index.mjs';
import 'file:///Users/ccci/Project/node_modules/tailwind-variants/dist/index.js';
import 'file:///Users/ccci/Project/node_modules/@vueuse/core/dist/index.js';
import 'file:///Users/ccci/Project/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/ccci/Project/node_modules/unhead/dist/server.mjs';
import 'file:///Users/ccci/Project/node_modules/unhead/dist/legacy.mjs';
import 'file:///Users/ccci/Project/node_modules/destr/dist/index.mjs';
import 'file:///Users/ccci/Project/node_modules/nitropack/node_modules/hookable/dist/index.mjs';
import 'file:///Users/ccci/Project/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/ccci/Project/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/ccci/Project/node_modules/unstorage/drivers/fs.mjs';
import 'node:path';
import 'node:crypto';
import 'node:fs/promises';
import 'file:///Users/ccci/Project/node_modules/flru/dist/flru.js';
import 'file:///Users/ccci/Project/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/ccci/Project/node_modules/ohash/dist/index.mjs';
import 'file:///Users/ccci/Project/node_modules/scule/dist/index.mjs';
import 'file:///Users/ccci/Project/node_modules/nitropack/node_modules/unctx/dist/index.mjs';
import 'file:///Users/ccci/Project/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/ccci/Project/node_modules/pathe/dist/index.mjs';
import 'node:async_hooks';
import 'file:///Users/ccci/Project/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/ccci/Project/node_modules/devalue/src/index.js';
import 'file:///Users/ccci/Project/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///Users/ccci/Project/node_modules/tailwindcss/dist/colors.mjs';
import 'file:///Users/ccci/Project/node_modules/@vueuse/shared/dist/index.js';
import './AccordionTrigger-DAWEZoi3.mjs';
import './nullish-Dvpx-avd.mjs';
import './useId-BZnJFoR8.mjs';
import './Presence-wbRA2BG8.mjs';
import './Button-Cwxo7d33.mjs';
import './components-DxzSx7d2.mjs';
import 'file:///Users/ccci/Project/node_modules/@iconify/utils/lib/css/icon.js';
import './nuxt-link-C7rfVfaB.mjs';
import 'file:///Users/ccci/Project/node_modules/ohash/dist/utils/index.mjs';

var beliefs_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "beliefs",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: `Beliefs | ${site.name}`,
      description: site.home.beliefsDescription,
      ogTitle: `Beliefs | ${site.name}`,
      ogDescription: site.home.beliefsDescription,
      ogImage: site.hero.image,
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageHero = _sfc_main;
      const _component_UContainer = _sfc_main$1;
      const _component_UAccordion = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-24" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UPageHero, {
        title: unref(site).home.beliefsTitle,
        description: unref(site).home.beliefsDescription
      }, null, _parent));
      _push(ssrRenderComponent(_component_UContainer, { class: "max-w-4xl pb-24" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) _push2(ssrRenderComponent(_component_UAccordion, {
            items: [...unref(site).beliefs],
            ui: { item: "border-b border-slate-200" }
          }, null, _parent2, _scopeId));
          else return [createVNode(_component_UAccordion, {
            items: [...unref(site).beliefs],
            ui: { item: "border-b border-slate-200" }
          }, null, 8, ["items"])];
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
var _sfc_setup = beliefs_vue_vue_type_script_setup_true_lang_default.setup;
beliefs_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/beliefs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var beliefs_default = beliefs_vue_vue_type_script_setup_true_lang_default;

export { beliefs_default as default };
//# sourceMappingURL=beliefs-CCAXOmAO.mjs.map
