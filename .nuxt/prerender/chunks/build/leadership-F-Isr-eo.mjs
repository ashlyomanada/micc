import { u as useSeoMeta } from '../virtual/entry.mjs';
import { _ as _sfc_main$3 } from './Button-Cwxo7d33.mjs';
import { s as site, _ as _sfc_main$1 } from './site-BjEVYaKT.mjs';
import { _ as _sfc_main } from './PageHero-Dbu4Xw3Y.mjs';
import { _ as _sfc_main$2 } from './Card-_AY5nbBS.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'file:///Users/ccci/Project/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'file:///Users/ccci/Project/node_modules/vue/server-renderer/index.mjs';
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

var leadership_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "leadership",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: `Leadership | ${site.name}`,
      description: site.home.leadershipDescription,
      ogTitle: `Leadership | ${site.name}`,
      ogDescription: site.home.leadershipDescription,
      ogImage: site.hero.image,
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageHero = _sfc_main;
      const _component_UContainer = _sfc_main$1;
      const _component_UCard = _sfc_main$2;
      const _component_UButton = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-24" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UPageHero, {
        title: unref(site).home.leadershipTitle,
        description: unref(site).home.leadershipDescription
      }, null, _parent));
      _push(ssrRenderComponent(_component_UContainer, { class: "grid gap-6 pb-20 md:grid-cols-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(site).leaders, (leader) => {
              _push2(ssrRenderComponent(_component_UCard, {
                key: leader.name,
                class: "overflow-hidden rounded-3xl border-0 shadow-md sm:p-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="grid items-center gap-6 sm:grid-cols-[.85fr_1.15fr]"${_scopeId2}><img${ssrRenderAttr("src", leader.image)}${ssrRenderAttr("alt", `Placeholder portrait of ${leader.name}`)} width="600" height="600" loading="lazy" class="aspect-square w-full rounded-2xl object-cover"${_scopeId2}><div${_scopeId2}><p class="text-xs font-bold uppercase tracking-widest text-primary"${_scopeId2}>${ssrInterpolate(leader.role)}</p><h2 class="mt-2 font-display text-2xl font-bold"${_scopeId2}>${ssrInterpolate(leader.name)}</h2><p class="mt-3 text-sm leading-6 text-slate-600"${_scopeId2}>${ssrInterpolate(leader.bio)}</p>`);
                    _push3(ssrRenderComponent(_component_UButton, {
                      to: leader.email,
                      label: "Contact",
                      icon: "i-lucide-mail",
                      variant: "outline",
                      class: "mt-5"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else return [createVNode("div", { class: "grid items-center gap-6 sm:grid-cols-[.85fr_1.15fr]" }, [createVNode("img", {
                    src: leader.image,
                    alt: `Placeholder portrait of ${leader.name}`,
                    width: "600",
                    height: "600",
                    loading: "lazy",
                    class: "aspect-square w-full rounded-2xl object-cover"
                  }, null, 8, ["src", "alt"]), createVNode("div", null, [
                    createVNode("p", { class: "text-xs font-bold uppercase tracking-widest text-primary" }, toDisplayString(leader.role), 1),
                    createVNode("h2", { class: "mt-2 font-display text-2xl font-bold" }, toDisplayString(leader.name), 1),
                    createVNode("p", { class: "mt-3 text-sm leading-6 text-slate-600" }, toDisplayString(leader.bio), 1),
                    createVNode(_component_UButton, {
                      to: leader.email,
                      label: "Contact",
                      icon: "i-lucide-mail",
                      variant: "outline",
                      class: "mt-5"
                    }, null, 8, ["to"])
                  ])])];
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else return [(openBlock(true), createBlock(Fragment, null, renderList(unref(site).leaders, (leader) => {
            return openBlock(), createBlock(_component_UCard, {
              key: leader.name,
              class: "overflow-hidden rounded-3xl border-0 shadow-md sm:p-2"
            }, {
              default: withCtx(() => [createVNode("div", { class: "grid items-center gap-6 sm:grid-cols-[.85fr_1.15fr]" }, [createVNode("img", {
                src: leader.image,
                alt: `Placeholder portrait of ${leader.name}`,
                width: "600",
                height: "600",
                loading: "lazy",
                class: "aspect-square w-full rounded-2xl object-cover"
              }, null, 8, ["src", "alt"]), createVNode("div", null, [
                createVNode("p", { class: "text-xs font-bold uppercase tracking-widest text-primary" }, toDisplayString(leader.role), 1),
                createVNode("h2", { class: "mt-2 font-display text-2xl font-bold" }, toDisplayString(leader.name), 1),
                createVNode("p", { class: "mt-3 text-sm leading-6 text-slate-600" }, toDisplayString(leader.bio), 1),
                createVNode(_component_UButton, {
                  to: leader.email,
                  label: "Contact",
                  icon: "i-lucide-mail",
                  variant: "outline",
                  class: "mt-5"
                }, null, 8, ["to"])
              ])])]),
              _: 2
            }, 1024);
          }), 128))];
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
var _sfc_setup = leadership_vue_vue_type_script_setup_true_lang_default.setup;
leadership_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/leadership.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var leadership_default = leadership_vue_vue_type_script_setup_true_lang_default;

export { leadership_default as default };
//# sourceMappingURL=leadership-F-Isr-eo.mjs.map
