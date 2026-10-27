import { u as useSeoMeta } from '../virtual/entry.mjs';
import { _ as _sfc_main$4 } from './Button-Cwxo7d33.mjs';
import { s as site, _ as _sfc_main$1 } from './site-BjEVYaKT.mjs';
import { _ as _sfc_main$3 } from './Badge-DnzpF3wC.mjs';
import { _ as _sfc_main } from './PageHero-Dbu4Xw3Y.mjs';
import { _ as _sfc_main$2 } from './Card-_AY5nbBS.mjs';
import { _ as _sfc_main$5 } from './PageCard-bdsePQLp.mjs';
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'file:///Users/ccci/Project/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file:///Users/ccci/Project/node_modules/vue/server-renderer/index.mjs';
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
import './components-DxzSx7d2.mjs';
import 'file:///Users/ccci/Project/node_modules/@iconify/utils/lib/css/icon.js';
import './nuxt-link-C7rfVfaB.mjs';
import 'file:///Users/ccci/Project/node_modules/ohash/dist/utils/index.mjs';

var locations_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "locations",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: `Locations | ${site.name}`,
      description: site.home.locationsDescription,
      ogTitle: `Locations | ${site.name}`,
      ogDescription: site.home.locationsDescription,
      ogImage: site.hero.image,
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageHero = _sfc_main;
      const _component_UContainer = _sfc_main$1;
      const _component_UCard = _sfc_main$2;
      const _component_UBadge = _sfc_main$3;
      const _component_UButton = _sfc_main$4;
      const _component_UPageCard = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-24" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UPageHero, {
        title: unref(site).home.locationsTitle,
        description: unref(site).home.locationsDescription
      }, null, _parent));
      _push(ssrRenderComponent(_component_UContainer, { class: "space-y-8 pb-20" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(site).regions, (region) => {
              _push2(ssrRenderComponent(_component_UCard, {
                id: region.id,
                key: region.id,
                class: "scroll-mt-28 overflow-hidden rounded-3xl border-0 shadow-md"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="grid gap-7 md:grid-cols-[.8fr_1.2fr] md:items-center"${_scopeId2}><div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UBadge, {
                      color: "primary",
                      variant: "subtle"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) _push4(`${ssrInterpolate(region.name)}`);
                        else return [createTextVNode(toDisplayString(region.name), 1)];
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<h2 class="mt-3 font-display text-3xl font-bold"${_scopeId2}>${ssrInterpolate(region.name)} ${ssrInterpolate(unref(site).home.gatheringsTitle)}</h2><p class="mt-3 text-slate-600"${_scopeId2}>${ssrInterpolate(region.address)}</p><p class="mt-2 font-semibold"${_scopeId2}>${ssrInterpolate(region.time)}</p>`);
                    _push3(ssrRenderComponent(_component_UButton, {
                      to: unref(site).contact.mapUrl,
                      target: "_blank",
                      label: unref(site).home.directionsLabel,
                      icon: "i-lucide-map-pin",
                      variant: "outline",
                      class: "mt-5"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="grid gap-3 sm:grid-cols-3"${_scopeId2}><!--[-->`);
                    ssrRenderList(region.groups, (group) => {
                      _push3(ssrRenderComponent(_component_UPageCard, {
                        key: group,
                        title: group,
                        class: "rounded-2xl bg-slate-50"
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div></div>`);
                  } else return [createVNode("div", { class: "grid gap-7 md:grid-cols-[.8fr_1.2fr] md:items-center" }, [createVNode("div", null, [
                    createVNode(_component_UBadge, {
                      color: "primary",
                      variant: "subtle"
                    }, {
                      default: withCtx(() => [createTextVNode(toDisplayString(region.name), 1)]),
                      _: 2
                    }, 1024),
                    createVNode("h2", { class: "mt-3 font-display text-3xl font-bold" }, toDisplayString(region.name) + " " + toDisplayString(unref(site).home.gatheringsTitle), 1),
                    createVNode("p", { class: "mt-3 text-slate-600" }, toDisplayString(region.address), 1),
                    createVNode("p", { class: "mt-2 font-semibold" }, toDisplayString(region.time), 1),
                    createVNode(_component_UButton, {
                      to: unref(site).contact.mapUrl,
                      target: "_blank",
                      label: unref(site).home.directionsLabel,
                      icon: "i-lucide-map-pin",
                      variant: "outline",
                      class: "mt-5"
                    }, null, 8, ["to", "label"])
                  ]), createVNode("div", { class: "grid gap-3 sm:grid-cols-3" }, [(openBlock(true), createBlock(Fragment, null, renderList(region.groups, (group) => {
                    return openBlock(), createBlock(_component_UPageCard, {
                      key: group,
                      title: group,
                      class: "rounded-2xl bg-slate-50"
                    }, null, 8, ["title"]);
                  }), 128))])])];
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else return [(openBlock(true), createBlock(Fragment, null, renderList(unref(site).regions, (region) => {
            return openBlock(), createBlock(_component_UCard, {
              id: region.id,
              key: region.id,
              class: "scroll-mt-28 overflow-hidden rounded-3xl border-0 shadow-md"
            }, {
              default: withCtx(() => [createVNode("div", { class: "grid gap-7 md:grid-cols-[.8fr_1.2fr] md:items-center" }, [createVNode("div", null, [
                createVNode(_component_UBadge, {
                  color: "primary",
                  variant: "subtle"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(region.name), 1)]),
                  _: 2
                }, 1024),
                createVNode("h2", { class: "mt-3 font-display text-3xl font-bold" }, toDisplayString(region.name) + " " + toDisplayString(unref(site).home.gatheringsTitle), 1),
                createVNode("p", { class: "mt-3 text-slate-600" }, toDisplayString(region.address), 1),
                createVNode("p", { class: "mt-2 font-semibold" }, toDisplayString(region.time), 1),
                createVNode(_component_UButton, {
                  to: unref(site).contact.mapUrl,
                  target: "_blank",
                  label: unref(site).home.directionsLabel,
                  icon: "i-lucide-map-pin",
                  variant: "outline",
                  class: "mt-5"
                }, null, 8, ["to", "label"])
              ]), createVNode("div", { class: "grid gap-3 sm:grid-cols-3" }, [(openBlock(true), createBlock(Fragment, null, renderList(region.groups, (group) => {
                return openBlock(), createBlock(_component_UPageCard, {
                  key: group,
                  title: group,
                  class: "rounded-2xl bg-slate-50"
                }, null, 8, ["title"]);
              }), 128))])])]),
              _: 2
            }, 1032, ["id"]);
          }), 128))];
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
var _sfc_setup = locations_vue_vue_type_script_setup_true_lang_default.setup;
locations_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/locations.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var locations_default = locations_vue_vue_type_script_setup_true_lang_default;

export { locations_default as default };
//# sourceMappingURL=locations-ia2cxjgU.mjs.map
