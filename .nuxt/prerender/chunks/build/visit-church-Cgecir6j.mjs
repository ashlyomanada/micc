import { u as useSeoMeta } from '../virtual/entry.mjs';
import { _ as _sfc_main$4 } from './Accordion-44u7Jnkk.mjs';
import { _ as _sfc_main$3 } from './Button-Cwxo7d33.mjs';
import { s as site, _ as _sfc_main$1 } from './site-BjEVYaKT.mjs';
import { _ as _sfc_main } from './PageHero-Dbu4Xw3Y.mjs';
import { S as SectionHeading_default } from './SectionHeading-DyMHv_DD.mjs';
import { _ as _sfc_main$2 } from './Card-_AY5nbBS.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'file:///Users/ccci/Project/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'file:///Users/ccci/Project/node_modules/vue/server-renderer/index.mjs';
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
import './components-DxzSx7d2.mjs';
import 'file:///Users/ccci/Project/node_modules/@iconify/utils/lib/css/icon.js';
import './nuxt-link-C7rfVfaB.mjs';
import 'file:///Users/ccci/Project/node_modules/ohash/dist/utils/index.mjs';

var visit_church_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "visit-church",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: `Visit Church | ${site.name}`,
      description: site.home.visitDescription,
      ogTitle: `Visit Church | ${site.name}`,
      ogDescription: site.home.visitDescription,
      ogImage: site.hero.image,
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageHero = _sfc_main;
      const _component_UContainer = _sfc_main$1;
      const _component_UCard = _sfc_main$2;
      const _component_UButton = _sfc_main$3;
      const _component_UAccordion = _sfc_main$4;
      const _component_SectionHeading = SectionHeading_default;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-24" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UPageHero, {
        title: unref(site).home.visitTitle,
        description: unref(site).home.visitDescription
      }, null, _parent));
      _push(ssrRenderComponent(_component_UContainer, { class: "pb-24" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid gap-10 lg:grid-cols-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UCard, { class: "rounded-3xl border-0 shadow-md" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="text-xs font-bold uppercase tracking-widest text-primary"${_scopeId2}>${ssrInterpolate(unref(site).contact.serviceTime)}</p><h2 class="mt-3 font-display text-2xl font-bold"${_scopeId2}>${ssrInterpolate(unref(site).contact.venue)}</h2><p class="mt-2 text-slate-600"${_scopeId2}>${ssrInterpolate(unref(site).contact.address)}</p>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    to: unref(site).contact.mapUrl,
                    target: "_blank",
                    label: unref(site).home.directionsLabel,
                    icon: "i-lucide-map-pin",
                    class: "mt-5"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="mt-8 border-t border-slate-200 pt-6"${_scopeId2}><h3 class="font-bold"${_scopeId2}>${ssrInterpolate(unref(site).home.expectTitle)}</h3>`);
                  _push3(ssrRenderComponent(_component_UAccordion, {
                    items: [...unref(site).expectations],
                    class: "mt-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else return [
                  createVNode("p", { class: "text-xs font-bold uppercase tracking-widest text-primary" }, toDisplayString(unref(site).contact.serviceTime), 1),
                  createVNode("h2", { class: "mt-3 font-display text-2xl font-bold" }, toDisplayString(unref(site).contact.venue), 1),
                  createVNode("p", { class: "mt-2 text-slate-600" }, toDisplayString(unref(site).contact.address), 1),
                  createVNode(_component_UButton, {
                    to: unref(site).contact.mapUrl,
                    target: "_blank",
                    label: unref(site).home.directionsLabel,
                    icon: "i-lucide-map-pin",
                    class: "mt-5"
                  }, null, 8, ["to", "label"]),
                  createVNode("div", { class: "mt-8 border-t border-slate-200 pt-6" }, [createVNode("h3", { class: "font-bold" }, toDisplayString(unref(site).home.expectTitle), 1), createVNode(_component_UAccordion, {
                    items: [...unref(site).expectations],
                    class: "mt-3"
                  }, null, 8, ["items"])])
                ];
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_SectionHeading, {
              eyebrow: unref(site).home.faqEyebrow,
              title: unref(site).home.faqTitle,
              description: unref(site).home.faqDescription
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UAccordion, { items: [...unref(site).expectations] }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else return [createVNode("div", { class: "grid gap-10 lg:grid-cols-2" }, [createVNode(_component_UCard, { class: "rounded-3xl border-0 shadow-md" }, {
            default: withCtx(() => [
              createVNode("p", { class: "text-xs font-bold uppercase tracking-widest text-primary" }, toDisplayString(unref(site).contact.serviceTime), 1),
              createVNode("h2", { class: "mt-3 font-display text-2xl font-bold" }, toDisplayString(unref(site).contact.venue), 1),
              createVNode("p", { class: "mt-2 text-slate-600" }, toDisplayString(unref(site).contact.address), 1),
              createVNode(_component_UButton, {
                to: unref(site).contact.mapUrl,
                target: "_blank",
                label: unref(site).home.directionsLabel,
                icon: "i-lucide-map-pin",
                class: "mt-5"
              }, null, 8, ["to", "label"]),
              createVNode("div", { class: "mt-8 border-t border-slate-200 pt-6" }, [createVNode("h3", { class: "font-bold" }, toDisplayString(unref(site).home.expectTitle), 1), createVNode(_component_UAccordion, {
                items: [...unref(site).expectations],
                class: "mt-3"
              }, null, 8, ["items"])])
            ]),
            _: 1
          }), createVNode("div", null, [createVNode(_component_SectionHeading, {
            eyebrow: unref(site).home.faqEyebrow,
            title: unref(site).home.faqTitle,
            description: unref(site).home.faqDescription
          }, null, 8, [
            "eyebrow",
            "title",
            "description"
          ]), createVNode(_component_UAccordion, { items: [...unref(site).expectations] }, null, 8, ["items"])])])];
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
var _sfc_setup = visit_church_vue_vue_type_script_setup_true_lang_default.setup;
visit_church_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/visit-church.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var visit_church_default = visit_church_vue_vue_type_script_setup_true_lang_default;

export { visit_church_default as default };
//# sourceMappingURL=visit-church-Cgecir6j.mjs.map
