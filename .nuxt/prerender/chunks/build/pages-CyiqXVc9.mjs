import { u as useSeoMeta, a as useComponentProps, b as useAppConfig, r as resolveAs, t as tv, P as Primitive, e as getSlotChildrenText, f as useLocale, c as useForwardProps } from '../virtual/entry.mjs';
import { n as _sfc_main$8 } from './Modal-B3gTgqQa.mjs';
import { _ as _sfc_main$4, a as _sfc_main$5, b as _sfc_main$1$1 } from './Button-Cwxo7d33.mjs';
import { s as site, _ as _sfc_main$3, u as usePrefix } from './site-BjEVYaKT.mjs';
import { S as SectionHeading_default } from './SectionHeading-DyMHv_DD.mjs';
import { _ as _sfc_main$6 } from './Card-_AY5nbBS.mjs';
import { _ as _sfc_main$7 } from './PageCard-bdsePQLp.mjs';
import { defineComponent, withCtx, unref, createVNode, toDisplayString, useSlots, computed, mergeProps, renderSlot, createTextVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, ref, isRef, watch, useSSRContext } from 'file:///Users/ccci/Project/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderSlot, ssrRenderClass, ssrRenderList, ssrRenderAttrs } from 'file:///Users/ccci/Project/node_modules/vue/server-renderer/index.mjs';
import { reactivePick } from 'file:///Users/ccci/Project/node_modules/@vueuse/core/dist/index.js';
import useEmblaCarousel from 'file:///Users/ccci/Project/node_modules/embla-carousel-vue/esm/embla-carousel-vue.esm.js';
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
import './useId-BZnJFoR8.mjs';
import './Presence-wbRA2BG8.mjs';
import 'file:///Users/ccci/Project/node_modules/aria-hidden/dist/es5/index.js';
import './nuxt-link-C7rfVfaB.mjs';
import 'file:///Users/ccci/Project/node_modules/ohash/dist/utils/index.mjs';

var HeroSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$3;
      const _component_UButton = _sfc_main$4;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "top",
        class: "relative flex min-h-[94svh] items-center overflow-hidden bg-slate-900 text-white"
      }, _attrs))}><img${ssrRenderAttr("src", unref(site).hero.image)}${ssrRenderAttr("alt", `Placeholder landscape representing ${unref(site).name}`)} width="1200" height="800" fetchpriority="high" class="absolute inset-0 h-full w-full object-cover"><div class="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/20"></div>`);
      _push(ssrRenderComponent(_component_UContainer, { class: "relative z-10 py-32" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-4xl"${_scopeId}><p class="mb-5 text-sm font-bold uppercase tracking-[.25em] text-brand-200"${_scopeId}>${ssrInterpolate(unref(site).tagline)}</p><h1 class="font-display text-5xl font-extrabold leading-[1.03] tracking-tight sm:text-7xl lg:text-8xl"${_scopeId}>${ssrInterpolate(unref(site).name)}</h1><p class="mt-7 font-display text-xl font-medium sm:text-2xl"${_scopeId}>${ssrInterpolate(unref(site).hero.subtitle)}</p>`);
            _push2(ssrRenderComponent(_component_UButton, {
              to: "/leadership",
              label: unref(site).hero.cta,
              "trailing-icon": "i-lucide-arrow-right",
              size: "lg",
              class: "mt-9"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else return [createVNode("div", { class: "max-w-4xl" }, [
            createVNode("p", { class: "mb-5 text-sm font-bold uppercase tracking-[.25em] text-brand-200" }, toDisplayString(unref(site).tagline), 1),
            createVNode("h1", { class: "font-display text-5xl font-extrabold leading-[1.03] tracking-tight sm:text-7xl lg:text-8xl" }, toDisplayString(unref(site).name), 1),
            createVNode("p", { class: "mt-7 font-display text-xl font-medium sm:text-2xl" }, toDisplayString(unref(site).hero.subtitle), 1),
            createVNode(_component_UButton, {
              to: "/leadership",
              label: unref(site).hero.cta,
              "trailing-icon": "i-lucide-arrow-right",
              size: "lg",
              class: "mt-9"
            }, null, 8, ["label"])
          ])];
        }),
        _: 1
      }, _parent));
      _push(`<div class="absolute bottom-8 right-8 hidden text-xs font-semibold uppercase tracking-[.25em] text-white/70 md:block">Gather \xB7 Grow \xB7 Go</div></section>`);
    };
  }
});
var _sfc_setup$11 = HeroSection_vue_vue_type_script_setup_true_lang_default.setup;
HeroSection_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
var HeroSection_default = Object.assign(HeroSection_vue_vue_type_script_setup_true_lang_default, { __name: "HeroSection" });
var LiteYouTube_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "LiteYouTube",
  __ssrInlineRender: true,
  props: {
    videoId: {},
    title: {}
  },
  setup(__props) {
    const props = __props;
    const loaded = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative aspect-video overflow-hidden rounded-2xl bg-slate-900" }, _attrs))}>`);
      if (unref(loaded)) _push(`<iframe class="absolute inset-0 h-full w-full"${ssrRenderAttr("src", `https://www.youtube-nocookie.com/embed/${props.videoId}?autoplay=1`)}${ssrRenderAttr("title", props.title)} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>`);
      else {
        _push(`<button class="group absolute inset-0 grid w-full place-items-center text-white"${ssrRenderAttr("aria-label", `Play ${__props.title}`)}><div class="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950"></div><div class="relative text-center"><span class="mx-auto grid size-16 place-items-center rounded-full bg-white text-primary shadow-xl transition group-hover:scale-110">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "i-lucide-play",
          class: "size-7"
        }, null, _parent));
        _push(`</span><span class="mt-4 block text-sm font-medium">${ssrInterpolate(__props.title)}</span></div></button>`);
      }
      _push(`</div>`);
    };
  }
});
var _sfc_setup$10 = LiteYouTube_vue_vue_type_script_setup_true_lang_default.setup;
LiteYouTube_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LiteYouTube.vue");
  return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
var LiteYouTube_default = Object.assign(LiteYouTube_vue_vue_type_script_setup_true_lang_default, { __name: "LiteYouTube" });
var SermonsSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "SermonsSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$3;
      const _component_SectionHeading = SectionHeading_default;
      const _component_UButton = _sfc_main$4;
      const _component_UCard = _sfc_main$6;
      const _component_LiteYouTube = LiteYouTube_default;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 sm:py-24" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid items-center gap-10 lg:grid-cols-[.85fr_1.15fr]"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_SectionHeading, {
              eyebrow: "Watch and listen",
              title: unref(site).sermons.title,
              description: unref(site).sermons.description
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              to: unref(site).sermons.url,
              target: "_blank",
              label: "More Sermons",
              "trailing-icon": "i-lucide-arrow-up-right",
              size: "lg"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_UCard, { class: "overflow-hidden rounded-3xl border-0 bg-white shadow-xl" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) _push3(ssrRenderComponent(_component_LiteYouTube, {
                  "video-id": unref(site).sermons.videoId,
                  title: unref(site).sermons.title
                }, null, _parent3, _scopeId2));
                else return [createVNode(_component_LiteYouTube, {
                  "video-id": unref(site).sermons.videoId,
                  title: unref(site).sermons.title
                }, null, 8, ["video-id", "title"])];
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else return [createVNode("div", { class: "grid items-center gap-10 lg:grid-cols-[.85fr_1.15fr]" }, [createVNode("div", null, [createVNode(_component_SectionHeading, {
            eyebrow: "Watch and listen",
            title: unref(site).sermons.title,
            description: unref(site).sermons.description
          }, null, 8, ["title", "description"]), createVNode(_component_UButton, {
            to: unref(site).sermons.url,
            target: "_blank",
            label: "More Sermons",
            "trailing-icon": "i-lucide-arrow-up-right",
            size: "lg"
          }, null, 8, ["to"])]), createVNode(_component_UCard, { class: "overflow-hidden rounded-3xl border-0 bg-white shadow-xl" }, {
            default: withCtx(() => [createVNode(_component_LiteYouTube, {
              "video-id": unref(site).sermons.videoId,
              title: unref(site).sermons.title
            }, null, 8, ["video-id", "title"])]),
            _: 1
          })])];
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
var _sfc_setup$9 = SermonsSection_vue_vue_type_script_setup_true_lang_default.setup;
SermonsSection_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SermonsSection.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var SermonsSection_default = Object.assign(SermonsSection_vue_vue_type_script_setup_true_lang_default, { __name: "SermonsSection" });
var virtual_nuxt__nuxt_2Fui_2Fpage_feature_default = {
  "slots": {
    "root": "relative rounded-sm",
    "wrapper": "",
    "leading": "inline-flex items-center justify-center",
    "leadingIcon": "size-5 shrink-0 text-primary",
    "title": "text-base text-pretty font-semibold text-highlighted",
    "description": "text-[15px] text-pretty text-muted"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "root": "flex items-start gap-2.5",
        "leading": "p-0.5"
      },
      "vertical": { "leading": "mb-2.5" }
    },
    "to": { "true": { "root": ["outline-primary/25 has-focus-visible:outline-3", "transition"] } },
    "title": { "true": { "description": "mt-1" } }
  }
};
var _sfc_main$2 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UPageFeature",
  __ssrInlineRender: true,
  props: {
    as: {
      type: null,
      required: false
    },
    icon: {
      type: null,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    orientation: {
      type: null,
      required: false,
      default: "horizontal"
    },
    to: {
      type: null,
      required: false
    },
    target: {
      type: [
        String,
        Object,
        null
      ],
      required: false
    },
    onClick: {
      type: Function,
      required: false
    },
    class: {
      type: null,
      required: false
    },
    ui: {
      type: Object,
      required: false
    }
  },
  setup(__props) {
    const _props = __props;
    const slots = useSlots();
    const props = useComponentProps("pageFeature", _props);
    const appConfig = useAppConfig();
    const prefix = usePrefix();
    const ui = computed(() => {
      var _a;
      return tv({
        extend: virtual_nuxt__nuxt_2Fui_2Fpage_feature_default,
        ...((_a = appConfig.ui) == null ? void 0 : _a.pageFeature) || {}
      })({
        orientation: props.orientation,
        title: !!props.title || !!slots.title,
        to: !!props.to || !!props.onClick
      });
    });
    const ariaLabel = computed(() => {
      return (slots.title && getSlotChildrenText(slots.title()) || props.title || "Feature link").trim();
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({ as: unref(props).as }, !unref(props).to ? _ctx.$attrs : {}, {
        "data-orientation": unref(props).orientation,
        "data-slot": (_a = _ctx.$attrs["data-slot"]) != null ? _a : "root",
        class: ui.value.root({ class: [(_b = unref(props).ui) == null ? void 0 : _b.root, unref(props).class] }),
        onClick: unref(props).onClick
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c, _d;
          if (_push2) {
            if (unref(props).icon || !!slots.leading) {
              _push2(`<div data-slot="leading" class="${ssrRenderClass(ui.value.leading({ class: (_a2 = unref(props).ui) == null ? void 0 : _a2.leading }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
                var _a3;
                if (unref(props).icon) _push2(ssrRenderComponent(_sfc_main$5, {
                  name: unref(props).icon,
                  "data-slot": "leadingIcon",
                  class: ui.value.leadingIcon({ class: (_a3 = unref(props).ui) == null ? void 0 : _a3.leadingIcon })
                }, null, _parent2, _scopeId));
                else _push2(`<!---->`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else _push2(`<!---->`);
            _push2(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: (_b2 = unref(props).ui) == null ? void 0 : _b2.wrapper }))}"${_scopeId}>`);
            if (unref(props).to) _push2(ssrRenderComponent(_sfc_main$1$1, mergeProps({ "aria-label": ariaLabel.value }, {
              "to": unref(props).to,
              "target": unref(props).target,
              ..._ctx.$attrs,
              "data-slot": void 0
            }, {
              class: unref(prefix)("focus:outline-none peer"),
              raw: ""
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) _push3(`<span class="${ssrRenderClass(unref(prefix)("absolute inset-0"))}" aria-hidden="true"${_scopeId2}></span>`);
                else return [createVNode("span", {
                  class: unref(prefix)("absolute inset-0"),
                  "aria-hidden": "true"
                }, null, 2)];
              }),
              _: 1
            }, _parent2, _scopeId));
            else _push2(`<!---->`);
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              var _a3, _b3;
              if (unref(props).title || !!slots.title) {
                _push2(`<div data-slot="title" class="${ssrRenderClass(ui.value.title({ class: (_a3 = unref(props).ui) == null ? void 0 : _a3.title }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                  _push2(`${ssrInterpolate(unref(props).title)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else _push2(`<!---->`);
              if (unref(props).description || !!slots.description) {
                _push2(`<div data-slot="description" class="${ssrRenderClass(ui.value.description({ class: (_b3 = unref(props).ui) == null ? void 0 : _b3.description }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                  _push2(`${ssrInterpolate(unref(props).description)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else _push2(`<!---->`);
            }, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else return [unref(props).icon || !!slots.leading ? (openBlock(), createBlock("div", {
            key: 0,
            "data-slot": "leading",
            class: ui.value.leading({ class: (_c = unref(props).ui) == null ? void 0 : _c.leading })
          }, [renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
            var _a3;
            return [unref(props).icon ? (openBlock(), createBlock(_sfc_main$5, {
              key: 0,
              name: unref(props).icon,
              "data-slot": "leadingIcon",
              class: ui.value.leadingIcon({ class: (_a3 = unref(props).ui) == null ? void 0 : _a3.leadingIcon })
            }, null, 8, ["name", "class"])) : createCommentVNode("", true)];
          })], 2)) : createCommentVNode("", true), createVNode("div", {
            "data-slot": "wrapper",
            class: ui.value.wrapper({ class: (_d = unref(props).ui) == null ? void 0 : _d.wrapper })
          }, [unref(props).to ? (openBlock(), createBlock(_sfc_main$1$1, mergeProps({
            key: 0,
            "aria-label": ariaLabel.value
          }, {
            "to": unref(props).to,
            "target": unref(props).target,
            ..._ctx.$attrs,
            "data-slot": void 0
          }, {
            class: unref(prefix)("focus:outline-none peer"),
            raw: ""
          }), {
            default: withCtx(() => [createVNode("span", {
              class: unref(prefix)("absolute inset-0"),
              "aria-hidden": "true"
            }, null, 2)]),
            _: 1
          }, 16, ["aria-label", "class"])) : createCommentVNode("", true), renderSlot(_ctx.$slots, "default", {}, () => {
            var _a3, _b3;
            return [unref(props).title || !!slots.title ? (openBlock(), createBlock("div", {
              key: 0,
              "data-slot": "title",
              class: ui.value.title({ class: (_a3 = unref(props).ui) == null ? void 0 : _a3.title })
            }, [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])], 2)) : createCommentVNode("", true), unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
              key: 1,
              "data-slot": "description",
              class: ui.value.description({ class: (_b3 = unref(props).ui) == null ? void 0 : _b3.description })
            }, [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])], 2)) : createCommentVNode("", true)];
          })], 2)];
        }),
        _: 3
      }, _parent));
    };
  }
});
var _sfc_setup$8 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/PageFeature.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var virtual_nuxt__nuxt_2Fui_2Fpage_section_default = {
  "slots": {
    "root": "relative isolate",
    "container": "flex flex-col lg:grid py-16 sm:py-24 lg:py-32 gap-8 sm:gap-16",
    "wrapper": "",
    "header": "",
    "leading": "flex items-center mb-6",
    "leadingIcon": "size-10 shrink-0 text-primary",
    "headline": "mb-3",
    "title": "text-3xl sm:text-4xl lg:text-5xl text-pretty tracking-tight font-bold text-highlighted",
    "description": "text-base sm:text-lg text-muted",
    "body": "mt-8",
    "features": "grid",
    "footer": "mt-8",
    "links": "flex flex-wrap gap-x-6 gap-y-3"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "container": "lg:grid-cols-2 lg:items-center",
        "description": "text-pretty",
        "features": "gap-4"
      },
      "vertical": {
        "container": "",
        "headline": "justify-center",
        "leading": "justify-center",
        "title": "text-center",
        "description": "text-center text-balance",
        "links": "justify-center",
        "features": "sm:grid-cols-2 lg:grid-cols-3 gap-8"
      }
    },
    "reverse": { "true": { "wrapper": "order-last" } },
    "headline": { "true": { "headline": "font-semibold text-primary flex items-center gap-1.5" } },
    "title": { "true": { "description": "mt-6" } },
    "description": { "true": "" },
    "body": { "true": "" }
  },
  "compoundVariants": [
    {
      "orientation": "vertical",
      "title": true,
      "class": { "body": "mt-16" }
    },
    {
      "orientation": "vertical",
      "description": true,
      "class": { "body": "mt-16" }
    },
    {
      "orientation": "vertical",
      "body": true,
      "class": { "footer": "mt-16" }
    }
  ]
};
var _sfc_main$1 = {
  __name: "UPageSection",
  __ssrInlineRender: true,
  props: {
    as: {
      type: null,
      required: false
    },
    headline: {
      type: String,
      required: false
    },
    icon: {
      type: null,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    links: {
      type: Array,
      required: false
    },
    features: {
      type: Array,
      required: false
    },
    orientation: {
      type: null,
      required: false,
      default: "vertical"
    },
    reverse: {
      type: Boolean,
      required: false
    },
    class: {
      type: null,
      required: false
    },
    ui: {
      type: Object,
      required: false
    }
  },
  setup(__props) {
    const _props = __props;
    const slots = useSlots();
    const props = useComponentProps("pageSection", _props);
    const appConfig = useAppConfig();
    const prefix = usePrefix();
    const as = computed(() => resolveAs(props.as, {
      root: "section",
      title: "h2"
    }));
    const ui = computed(() => {
      var _a, _b;
      return tv({
        extend: virtual_nuxt__nuxt_2Fui_2Fpage_section_default,
        ...((_a = appConfig.ui) == null ? void 0 : _a.pageSection) || {}
      })({
        orientation: props.orientation,
        reverse: props.reverse,
        title: !!props.title || !!slots.title,
        description: !!props.description || !!slots.description,
        body: !!slots.body || !!((_b = props.features) == null ? void 0 : _b.length) || !!slots.features
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: as.value.root,
        "data-orientation": unref(props).orientation,
        "data-slot": "root",
        class: ui.value.root({ class: [(_a = unref(props).ui) == null ? void 0 : _a.root, unref(props).class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "top", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(_sfc_main$3, {
              "data-slot": "container",
              class: ui.value.container({ class: (_a2 = unref(props).ui) == null ? void 0 : _a2.container })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a3, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
                if (_push3) {
                  if (!!slots.header || unref(props).icon || !!slots.leading || unref(props).headline || !!slots.headline || unref(props).title || !!slots.title || unref(props).description || !!slots.description || !!slots.body || ((_a3 = unref(props).features) == null ? void 0 : _a3.length) || !!slots.features || !!slots.footer || ((_b2 = unref(props).links) == null ? void 0 : _b2.length) || !!slots.links) {
                    _push3(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: (_c = unref(props).ui) == null ? void 0 : _c.wrapper }))}"${_scopeId2}>`);
                    if (!!slots.header || unref(props).icon || !!slots.leading || unref(props).headline || !!slots.headline || unref(props).title || !!slots.title || unref(props).description || !!slots.description) {
                      _push3(`<div data-slot="header" class="${ssrRenderClass(ui.value.header({ class: (_d = unref(props).ui) == null ? void 0 : _d.header }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "header", {}, () => {
                        var _a4, _b3, _c2, _d2;
                        if (unref(props).icon || !!slots.leading) {
                          _push3(`<div data-slot="leading" class="${ssrRenderClass(ui.value.leading({ class: (_a4 = unref(props).ui) == null ? void 0 : _a4.leading }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
                            var _a5;
                            if (unref(props).icon) _push3(ssrRenderComponent(_sfc_main$5, {
                              name: unref(props).icon,
                              "data-slot": "leadingIcon",
                              class: ui.value.leadingIcon({ class: (_a5 = unref(props).ui) == null ? void 0 : _a5.leadingIcon })
                            }, null, _parent3, _scopeId2));
                            else _push3(`<!---->`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</div>`);
                        } else _push3(`<!---->`);
                        if (unref(props).headline || !!slots.headline) {
                          _push3(`<div data-slot="headline" class="${ssrRenderClass(ui.value.headline({
                            class: (_b3 = unref(props).ui) == null ? void 0 : _b3.headline,
                            headline: !slots.headline
                          }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "headline", {}, () => {
                            _push3(`${ssrInterpolate(unref(props).headline)}`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</div>`);
                        } else _push3(`<!---->`);
                        if (unref(props).title || !!slots.title) _push3(ssrRenderComponent(unref(Primitive), {
                          as: as.value.title,
                          "data-slot": "title",
                          class: ui.value.title({ class: (_c2 = unref(props).ui) == null ? void 0 : _c2.title })
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                              _push4(`${ssrInterpolate(unref(props).title)}`);
                            }, _push4, _parent4, _scopeId3);
                            else return [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])];
                          }),
                          _: 3
                        }, _parent3, _scopeId2));
                        else _push3(`<!---->`);
                        if (unref(props).description || !!slots.description) {
                          _push3(`<div data-slot="description" class="${ssrRenderClass(ui.value.description({ class: (_d2 = unref(props).ui) == null ? void 0 : _d2.description }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                            _push3(`${ssrInterpolate(unref(props).description)}`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</div>`);
                        } else _push3(`<!---->`);
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</div>`);
                    } else _push3(`<!---->`);
                    if (!!slots.body || ((_e = unref(props).features) == null ? void 0 : _e.length) || !!slots.features) {
                      _push3(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: (_f = unref(props).ui) == null ? void 0 : _f.body }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "body", {}, () => {
                        var _a4, _b3;
                        if (((_a4 = unref(props).features) == null ? void 0 : _a4.length) || !!slots.features) {
                          _push3(`<ul data-slot="features" class="${ssrRenderClass(ui.value.features({ class: (_b3 = unref(props).ui) == null ? void 0 : _b3.features }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "features", {}, () => {
                            _push3(`<!--[-->`);
                            ssrRenderList(unref(props).features, (feature, index) => {
                              _push3(ssrRenderComponent(_sfc_main$2, mergeProps({
                                key: index,
                                as: "li"
                              }, { ref_for: true }, feature), null, _parent3, _scopeId2));
                            });
                            _push3(`<!--]-->`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</ul>`);
                        } else _push3(`<!---->`);
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</div>`);
                    } else _push3(`<!---->`);
                    if (!!slots.footer || ((_g = unref(props).links) == null ? void 0 : _g.length) || !!slots.links) {
                      _push3(`<div data-slot="footer" class="${ssrRenderClass(ui.value.footer({ class: (_h = unref(props).ui) == null ? void 0 : _h.footer }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "footer", {}, () => {
                        var _a4, _b3;
                        if (((_a4 = unref(props).links) == null ? void 0 : _a4.length) || !!slots.links) {
                          _push3(`<div data-slot="links" class="${ssrRenderClass(ui.value.links({ class: (_b3 = unref(props).ui) == null ? void 0 : _b3.links }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "links", {}, () => {
                            _push3(`<!--[-->`);
                            ssrRenderList(unref(props).links, (link, index) => {
                              _push3(ssrRenderComponent(_sfc_main$4, mergeProps({
                                key: index,
                                size: "lg"
                              }, { ref_for: true }, link), null, _parent3, _scopeId2));
                            });
                            _push3(`<!--]-->`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</div>`);
                        } else _push3(`<!---->`);
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</div>`);
                    } else _push3(`<!---->`);
                    _push3(`</div>`);
                  } else _push3(`<!---->`);
                  if (!!slots.default) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  else if (unref(props).orientation === "horizontal") _push3(`<div class="${ssrRenderClass(unref(prefix)("hidden lg:block"))}"${_scopeId2}></div>`);
                  else _push3(`<!---->`);
                } else return [!!slots.header || unref(props).icon || !!slots.leading || unref(props).headline || !!slots.headline || unref(props).title || !!slots.title || unref(props).description || !!slots.description || !!slots.body || ((_i = unref(props).features) == null ? void 0 : _i.length) || !!slots.features || !!slots.footer || ((_j = unref(props).links) == null ? void 0 : _j.length) || !!slots.links ? (openBlock(), createBlock("div", {
                  key: 0,
                  "data-slot": "wrapper",
                  class: ui.value.wrapper({ class: (_k = unref(props).ui) == null ? void 0 : _k.wrapper })
                }, [
                  !!slots.header || unref(props).icon || !!slots.leading || unref(props).headline || !!slots.headline || unref(props).title || !!slots.title || unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
                    key: 0,
                    "data-slot": "header",
                    class: ui.value.header({ class: (_l = unref(props).ui) == null ? void 0 : _l.header })
                  }, [renderSlot(_ctx.$slots, "header", {}, () => {
                    var _a4, _b3, _c2, _d2;
                    return [
                      unref(props).icon || !!slots.leading ? (openBlock(), createBlock("div", {
                        key: 0,
                        "data-slot": "leading",
                        class: ui.value.leading({ class: (_a4 = unref(props).ui) == null ? void 0 : _a4.leading })
                      }, [renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
                        var _a5;
                        return [unref(props).icon ? (openBlock(), createBlock(_sfc_main$5, {
                          key: 0,
                          name: unref(props).icon,
                          "data-slot": "leadingIcon",
                          class: ui.value.leadingIcon({ class: (_a5 = unref(props).ui) == null ? void 0 : _a5.leadingIcon })
                        }, null, 8, ["name", "class"])) : createCommentVNode("", true)];
                      })], 2)) : createCommentVNode("", true),
                      unref(props).headline || !!slots.headline ? (openBlock(), createBlock("div", {
                        key: 1,
                        "data-slot": "headline",
                        class: ui.value.headline({
                          class: (_b3 = unref(props).ui) == null ? void 0 : _b3.headline,
                          headline: !slots.headline
                        })
                      }, [renderSlot(_ctx.$slots, "headline", {}, () => [createTextVNode(toDisplayString(unref(props).headline), 1)])], 2)) : createCommentVNode("", true),
                      unref(props).title || !!slots.title ? (openBlock(), createBlock(unref(Primitive), {
                        key: 2,
                        as: as.value.title,
                        "data-slot": "title",
                        class: ui.value.title({ class: (_c2 = unref(props).ui) == null ? void 0 : _c2.title })
                      }, {
                        default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
                        _: 3
                      }, 8, ["as", "class"])) : createCommentVNode("", true),
                      unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
                        key: 3,
                        "data-slot": "description",
                        class: ui.value.description({ class: (_d2 = unref(props).ui) == null ? void 0 : _d2.description })
                      }, [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])], 2)) : createCommentVNode("", true)
                    ];
                  })], 2)) : createCommentVNode("", true),
                  !!slots.body || ((_m = unref(props).features) == null ? void 0 : _m.length) || !!slots.features ? (openBlock(), createBlock("div", {
                    key: 1,
                    "data-slot": "body",
                    class: ui.value.body({ class: (_n = unref(props).ui) == null ? void 0 : _n.body })
                  }, [renderSlot(_ctx.$slots, "body", {}, () => {
                    var _a4, _b3;
                    return [((_a4 = unref(props).features) == null ? void 0 : _a4.length) || !!slots.features ? (openBlock(), createBlock("ul", {
                      key: 0,
                      "data-slot": "features",
                      class: ui.value.features({ class: (_b3 = unref(props).ui) == null ? void 0 : _b3.features })
                    }, [renderSlot(_ctx.$slots, "features", {}, () => [(openBlock(true), createBlock(Fragment, null, renderList(unref(props).features, (feature, index) => {
                      return openBlock(), createBlock(_sfc_main$2, mergeProps({
                        key: index,
                        as: "li"
                      }, { ref_for: true }, feature), null, 16);
                    }), 128))])], 2)) : createCommentVNode("", true)];
                  })], 2)) : createCommentVNode("", true),
                  !!slots.footer || ((_o = unref(props).links) == null ? void 0 : _o.length) || !!slots.links ? (openBlock(), createBlock("div", {
                    key: 2,
                    "data-slot": "footer",
                    class: ui.value.footer({ class: (_p = unref(props).ui) == null ? void 0 : _p.footer })
                  }, [renderSlot(_ctx.$slots, "footer", {}, () => {
                    var _a4, _b3;
                    return [((_a4 = unref(props).links) == null ? void 0 : _a4.length) || !!slots.links ? (openBlock(), createBlock("div", {
                      key: 0,
                      "data-slot": "links",
                      class: ui.value.links({ class: (_b3 = unref(props).ui) == null ? void 0 : _b3.links })
                    }, [renderSlot(_ctx.$slots, "links", {}, () => [(openBlock(true), createBlock(Fragment, null, renderList(unref(props).links, (link, index) => {
                      return openBlock(), createBlock(_sfc_main$4, mergeProps({
                        key: index,
                        size: "lg"
                      }, { ref_for: true }, link), null, 16);
                    }), 128))])], 2)) : createCommentVNode("", true)];
                  })], 2)) : createCommentVNode("", true)
                ], 2)) : createCommentVNode("", true), !!slots.default ? renderSlot(_ctx.$slots, "default", {}, void 0, void 0, 1) : unref(props).orientation === "horizontal" ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: unref(prefix)("hidden lg:block")
                }, null, 2)) : createCommentVNode("", true)];
              }),
              _: 3
            }, _parent2, _scopeId));
            ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push2, _parent2, _scopeId);
          } else return [
            renderSlot(_ctx.$slots, "top"),
            createVNode(_sfc_main$3, {
              "data-slot": "container",
              class: ui.value.container({ class: (_b = unref(props).ui) == null ? void 0 : _b.container })
            }, {
              default: withCtx(() => {
                var _a3, _b2, _c, _d, _e, _f, _g, _h;
                return [!!slots.header || unref(props).icon || !!slots.leading || unref(props).headline || !!slots.headline || unref(props).title || !!slots.title || unref(props).description || !!slots.description || !!slots.body || ((_a3 = unref(props).features) == null ? void 0 : _a3.length) || !!slots.features || !!slots.footer || ((_b2 = unref(props).links) == null ? void 0 : _b2.length) || !!slots.links ? (openBlock(), createBlock("div", {
                  key: 0,
                  "data-slot": "wrapper",
                  class: ui.value.wrapper({ class: (_c = unref(props).ui) == null ? void 0 : _c.wrapper })
                }, [
                  !!slots.header || unref(props).icon || !!slots.leading || unref(props).headline || !!slots.headline || unref(props).title || !!slots.title || unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
                    key: 0,
                    "data-slot": "header",
                    class: ui.value.header({ class: (_d = unref(props).ui) == null ? void 0 : _d.header })
                  }, [renderSlot(_ctx.$slots, "header", {}, () => {
                    var _a4, _b3, _c2, _d2;
                    return [
                      unref(props).icon || !!slots.leading ? (openBlock(), createBlock("div", {
                        key: 0,
                        "data-slot": "leading",
                        class: ui.value.leading({ class: (_a4 = unref(props).ui) == null ? void 0 : _a4.leading })
                      }, [renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
                        var _a5;
                        return [unref(props).icon ? (openBlock(), createBlock(_sfc_main$5, {
                          key: 0,
                          name: unref(props).icon,
                          "data-slot": "leadingIcon",
                          class: ui.value.leadingIcon({ class: (_a5 = unref(props).ui) == null ? void 0 : _a5.leadingIcon })
                        }, null, 8, ["name", "class"])) : createCommentVNode("", true)];
                      })], 2)) : createCommentVNode("", true),
                      unref(props).headline || !!slots.headline ? (openBlock(), createBlock("div", {
                        key: 1,
                        "data-slot": "headline",
                        class: ui.value.headline({
                          class: (_b3 = unref(props).ui) == null ? void 0 : _b3.headline,
                          headline: !slots.headline
                        })
                      }, [renderSlot(_ctx.$slots, "headline", {}, () => [createTextVNode(toDisplayString(unref(props).headline), 1)])], 2)) : createCommentVNode("", true),
                      unref(props).title || !!slots.title ? (openBlock(), createBlock(unref(Primitive), {
                        key: 2,
                        as: as.value.title,
                        "data-slot": "title",
                        class: ui.value.title({ class: (_c2 = unref(props).ui) == null ? void 0 : _c2.title })
                      }, {
                        default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
                        _: 3
                      }, 8, ["as", "class"])) : createCommentVNode("", true),
                      unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
                        key: 3,
                        "data-slot": "description",
                        class: ui.value.description({ class: (_d2 = unref(props).ui) == null ? void 0 : _d2.description })
                      }, [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])], 2)) : createCommentVNode("", true)
                    ];
                  })], 2)) : createCommentVNode("", true),
                  !!slots.body || ((_e = unref(props).features) == null ? void 0 : _e.length) || !!slots.features ? (openBlock(), createBlock("div", {
                    key: 1,
                    "data-slot": "body",
                    class: ui.value.body({ class: (_f = unref(props).ui) == null ? void 0 : _f.body })
                  }, [renderSlot(_ctx.$slots, "body", {}, () => {
                    var _a4, _b3;
                    return [((_a4 = unref(props).features) == null ? void 0 : _a4.length) || !!slots.features ? (openBlock(), createBlock("ul", {
                      key: 0,
                      "data-slot": "features",
                      class: ui.value.features({ class: (_b3 = unref(props).ui) == null ? void 0 : _b3.features })
                    }, [renderSlot(_ctx.$slots, "features", {}, () => [(openBlock(true), createBlock(Fragment, null, renderList(unref(props).features, (feature, index) => {
                      return openBlock(), createBlock(_sfc_main$2, mergeProps({
                        key: index,
                        as: "li"
                      }, { ref_for: true }, feature), null, 16);
                    }), 128))])], 2)) : createCommentVNode("", true)];
                  })], 2)) : createCommentVNode("", true),
                  !!slots.footer || ((_g = unref(props).links) == null ? void 0 : _g.length) || !!slots.links ? (openBlock(), createBlock("div", {
                    key: 2,
                    "data-slot": "footer",
                    class: ui.value.footer({ class: (_h = unref(props).ui) == null ? void 0 : _h.footer })
                  }, [renderSlot(_ctx.$slots, "footer", {}, () => {
                    var _a4, _b3;
                    return [((_a4 = unref(props).links) == null ? void 0 : _a4.length) || !!slots.links ? (openBlock(), createBlock("div", {
                      key: 0,
                      "data-slot": "links",
                      class: ui.value.links({ class: (_b3 = unref(props).ui) == null ? void 0 : _b3.links })
                    }, [renderSlot(_ctx.$slots, "links", {}, () => [(openBlock(true), createBlock(Fragment, null, renderList(unref(props).links, (link, index) => {
                      return openBlock(), createBlock(_sfc_main$4, mergeProps({
                        key: index,
                        size: "lg"
                      }, { ref_for: true }, link), null, 16);
                    }), 128))])], 2)) : createCommentVNode("", true)];
                  })], 2)) : createCommentVNode("", true)
                ], 2)) : createCommentVNode("", true), !!slots.default ? renderSlot(_ctx.$slots, "default", {}, void 0, void 0, 1) : unref(props).orientation === "horizontal" ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: unref(prefix)("hidden lg:block")
                }, null, 2)) : createCommentVNode("", true)];
              }),
              _: 3
            }, 8, ["class"]),
            renderSlot(_ctx.$slots, "bottom")
          ];
        }),
        _: 3
      }, _parent));
    };
  }
};
var _sfc_setup$7 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/PageSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var FeatureCards_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "FeatureCards",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$3;
      const _component_SectionHeading = SectionHeading_default;
      const _component_UPageCard = _sfc_main$7;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-slate-50 py-16 sm:py-24" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SectionHeading, {
              eyebrow: unref(site).home.featuresEyebrow,
              title: unref(site).home.featuresTitle,
              description: unref(site).home.featuresDescription,
              centered: ""
            }, null, _parent2, _scopeId));
            _push2(`<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"${_scopeId}><!--[-->`);
            ssrRenderList(unref(site).home.features, (card) => {
              _push2(ssrRenderComponent(_component_UPageCard, {
                key: card.title,
                to: card.to,
                class: "group overflow-hidden rounded-2xl border-0 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) _push3(`<div class="relative -m-5 mb-4 h-48 overflow-hidden"${_scopeId2}><img${ssrRenderAttr("src", card.image)}${ssrRenderAttr("alt", `Placeholder image for ${card.title}`)} width="600" height="400" loading="lazy" class="h-full w-full object-cover transition duration-500 group-hover:scale-105"${_scopeId2}><div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent"${_scopeId2}></div><h3 class="absolute bottom-4 left-4 font-display text-xl font-bold text-white"${_scopeId2}>${ssrInterpolate(card.title)}</h3></div><p class="text-sm leading-6 text-slate-600"${_scopeId2}>${ssrInterpolate(card.text)}</p>`);
                  else return [createVNode("div", { class: "relative -m-5 mb-4 h-48 overflow-hidden" }, [
                    createVNode("img", {
                      src: card.image,
                      alt: `Placeholder image for ${card.title}`,
                      width: "600",
                      height: "400",
                      loading: "lazy",
                      class: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    }, null, 8, ["src", "alt"]),
                    createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" }),
                    createVNode("h3", { class: "absolute bottom-4 left-4 font-display text-xl font-bold text-white" }, toDisplayString(card.title), 1)
                  ]), createVNode("p", { class: "text-sm leading-6 text-slate-600" }, toDisplayString(card.text), 1)];
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else return [createVNode(_component_SectionHeading, {
            eyebrow: unref(site).home.featuresEyebrow,
            title: unref(site).home.featuresTitle,
            description: unref(site).home.featuresDescription,
            centered: ""
          }, null, 8, [
            "eyebrow",
            "title",
            "description"
          ]), createVNode("div", { class: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4" }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(site).home.features, (card) => {
            return openBlock(), createBlock(_component_UPageCard, {
              key: card.title,
              to: card.to,
              class: "group overflow-hidden rounded-2xl border-0 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            }, {
              default: withCtx(() => [createVNode("div", { class: "relative -m-5 mb-4 h-48 overflow-hidden" }, [
                createVNode("img", {
                  src: card.image,
                  alt: `Placeholder image for ${card.title}`,
                  width: "600",
                  height: "400",
                  loading: "lazy",
                  class: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
                }, null, 8, ["src", "alt"]),
                createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" }),
                createVNode("h3", { class: "absolute bottom-4 left-4 font-display text-xl font-bold text-white" }, toDisplayString(card.title), 1)
              ]), createVNode("p", { class: "text-sm leading-6 text-slate-600" }, toDisplayString(card.text), 1)]),
              _: 2
            }, 1032, ["to"]);
          }), 128))])];
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
var _sfc_setup$6 = FeatureCards_vue_vue_type_script_setup_true_lang_default.setup;
FeatureCards_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeatureCards.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var FeatureCards_default = Object.assign(FeatureCards_vue_vue_type_script_setup_true_lang_default, { __name: "FeatureCards" });
var virtual_nuxt__nuxt_2Fui_2Fcarousel_default = {
  "slots": {
    "root": "relative focus:outline-none",
    "viewport": "overflow-hidden",
    "container": "flex items-start",
    "item": "min-w-0 shrink-0 basis-full",
    "controls": "",
    "arrows": "",
    "prev": "absolute rounded-full",
    "next": "absolute rounded-full",
    "dots": "absolute inset-x-0 -bottom-7 flex flex-wrap items-center justify-center gap-3",
    "dot": ["cursor-pointer size-3 bg-accented rounded-full outline-inverted/25 focus-visible:outline-3", "transition"]
  },
  "variants": {
    "orientation": {
      "vertical": {
        "container": "flex-col -mt-4",
        "item": "pt-4",
        "prev": "top-4 sm:-top-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90",
        "next": "bottom-4 sm:-bottom-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90"
      },
      "horizontal": {
        "container": "flex-row -ms-4",
        "item": "ps-4",
        "prev": "start-4 sm:-start-12 top-1/2 -translate-y-1/2",
        "next": "end-4 sm:-end-12 top-1/2 -translate-y-1/2"
      }
    },
    "active": { "true": { "dot": "data-[state=active]:bg-inverted" } }
  }
};
var _sfc_main = {
  __name: "UCarousel",
  __ssrInlineRender: true,
  props: {
    as: {
      type: null,
      required: false
    },
    prev: {
      type: Object,
      required: false
    },
    prevIcon: {
      type: null,
      required: false
    },
    next: {
      type: Object,
      required: false
    },
    nextIcon: {
      type: null,
      required: false
    },
    arrows: {
      type: Boolean,
      required: false,
      default: false
    },
    dots: {
      type: Boolean,
      required: false,
      default: false
    },
    orientation: {
      type: null,
      required: false,
      default: "horizontal"
    },
    items: {
      type: Array,
      required: false
    },
    autoplay: {
      type: [Boolean, Object],
      required: false,
      default: false
    },
    autoScroll: {
      type: [Boolean, Object],
      required: false,
      default: false
    },
    autoHeight: {
      type: [Boolean, Object],
      required: false,
      default: false
    },
    classNames: {
      type: [Boolean, Object],
      required: false,
      default: false
    },
    fade: {
      type: [Boolean, Object],
      required: false,
      default: false
    },
    wheelGestures: {
      type: [Boolean, Object],
      required: false,
      default: false
    },
    class: {
      type: null,
      required: false
    },
    ui: {
      type: Object,
      required: false
    },
    align: {
      type: [String, Function],
      required: false,
      default: "center"
    },
    containScroll: {
      type: [Boolean, String],
      required: false,
      default: "trimSnaps"
    },
    slidesToScroll: {
      type: [String, Number],
      required: false,
      default: 1
    },
    dragFree: {
      type: Boolean,
      required: false,
      default: false
    },
    dragThreshold: {
      type: Number,
      required: false,
      default: 10
    },
    inViewThreshold: {
      type: null,
      required: false,
      default: 0
    },
    loop: {
      type: Boolean,
      required: false,
      default: false
    },
    skipSnaps: {
      type: Boolean,
      required: false,
      default: false
    },
    duration: {
      type: Number,
      required: false,
      default: 25
    },
    startIndex: {
      type: Number,
      required: false,
      default: 0
    },
    watchDrag: {
      type: [Boolean, Function],
      required: false,
      default: true
    },
    watchResize: {
      type: [Boolean, Function],
      required: false,
      default: true
    },
    watchSlides: {
      type: [Boolean, Function],
      required: false,
      default: true
    },
    watchFocus: {
      type: [Boolean, Function],
      required: false,
      default: true
    },
    active: {
      type: Boolean,
      required: false,
      default: true
    },
    breakpoints: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  emits: ["select"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = useComponentProps("carousel", __props);
    const { dir, t } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "active", "align", "breakpoints", "containScroll", "dragFree", "dragThreshold", "duration", "inViewThreshold", "loop", "skipSnaps", "slidesToScroll", "startIndex", "watchDrag", "watchResize", "watchSlides", "watchFocus"));
    const prevIcon = computed(() => props.prevIcon || (dir.value === "rtl" ? appConfig.ui.icons.arrowRight : appConfig.ui.icons.arrowLeft));
    const nextIcon = computed(() => props.nextIcon || (dir.value === "rtl" ? appConfig.ui.icons.arrowLeft : appConfig.ui.icons.arrowRight));
    const stopAutoplayOnInteraction = computed(() => {
      var _a, _b;
      if (typeof props.autoplay === "boolean") return true;
      return (_b = (_a = props.autoplay) == null ? void 0 : _a.stopOnInteraction) != null ? _b : true;
    });
    const stopAutoScrollOnInteraction = computed(() => {
      var _a, _b;
      if (typeof props.autoScroll === "boolean") return true;
      return (_b = (_a = props.autoScroll) == null ? void 0 : _a.stopOnInteraction) != null ? _b : true;
    });
    const ui = computed(() => {
      var _a;
      return tv({
        extend: virtual_nuxt__nuxt_2Fui_2Fcarousel_default,
        ...((_a = appConfig.ui) == null ? void 0 : _a.carousel) || {}
      })({ orientation: props.orientation });
    });
    const options = computed(() => ({
      ...props.fade ? {
        align: "center",
        containScroll: false
      } : {},
      ...rootProps.value,
      axis: props.orientation === "horizontal" ? "x" : "y",
      direction: dir.value === "rtl" ? "rtl" : "ltr"
    }));
    const plugins = ref([]);
    async function loadPlugins() {
      const emblaPlugins = [];
      if (props.autoplay) {
        const AutoplayPlugin = await import('file:///Users/ccci/Project/node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js').then((r) => r.default);
        emblaPlugins.push(AutoplayPlugin(typeof props.autoplay === "boolean" ? {} : props.autoplay));
      }
      if (props.autoScroll) {
        const AutoScrollPlugin = await import('file:///Users/ccci/Project/node_modules/embla-carousel-auto-scroll/esm/embla-carousel-auto-scroll.esm.js').then((r) => r.default);
        emblaPlugins.push(AutoScrollPlugin(typeof props.autoScroll === "boolean" ? {} : props.autoScroll));
      }
      if (props.autoHeight) {
        const AutoHeightPlugin = await import('file:///Users/ccci/Project/node_modules/embla-carousel-auto-height/esm/embla-carousel-auto-height.esm.js').then((r) => r.default);
        emblaPlugins.push(AutoHeightPlugin(typeof props.autoHeight === "boolean" ? {} : props.autoHeight));
      }
      if (props.classNames) {
        const ClassNamesPlugin = await import('file:///Users/ccci/Project/node_modules/embla-carousel-class-names/esm/embla-carousel-class-names.esm.js').then((r) => r.default);
        emblaPlugins.push(ClassNamesPlugin(typeof props.classNames === "boolean" ? {} : props.classNames));
      }
      if (props.fade) {
        const FadePlugin = await import('file:///Users/ccci/Project/node_modules/embla-carousel-fade/esm/embla-carousel-fade.esm.js').then((r) => r.default);
        emblaPlugins.push(FadePlugin(typeof props.fade === "boolean" ? {} : props.fade));
      }
      if (props.wheelGestures) {
        const { WheelGesturesPlugin } = await import('../_/embla-carousel-wheel-gestures.esm.mjs');
        emblaPlugins.push(WheelGesturesPlugin(typeof props.wheelGestures === "boolean" ? {} : props.wheelGestures));
      }
      plugins.value = emblaPlugins;
    }
    watch(() => [
      props.autoplay,
      props.autoScroll,
      props.autoHeight,
      props.classNames,
      props.fade,
      props.wheelGestures
    ], loadPlugins, { immediate: true });
    const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
    watch(options, () => {
      var _a;
      (_a = emblaApi.value) == null ? void 0 : _a.reInit(options.value, plugins.value);
    }, { flush: "post" });
    function stopOnInteraction() {
      var _a, _b, _c, _d;
      if (stopAutoplayOnInteraction.value) (_b = (_a = emblaApi.value) == null ? void 0 : _a.plugins().autoplay) == null ? void 0 : _b.stop();
      if (stopAutoScrollOnInteraction.value) (_d = (_c = emblaApi.value) == null ? void 0 : _c.plugins().autoScroll) == null ? void 0 : _d.stop();
    }
    function scrollPrev() {
      var _a;
      (_a = emblaApi.value) == null ? void 0 : _a.scrollPrev();
      stopOnInteraction();
    }
    function scrollNext() {
      var _a;
      (_a = emblaApi.value) == null ? void 0 : _a.scrollNext();
      stopOnInteraction();
    }
    function scrollTo(index) {
      var _a;
      (_a = emblaApi.value) == null ? void 0 : _a.scrollTo(index);
    }
    function onKeyDown(event) {
      let prevKey;
      let nextKey;
      if (props.orientation === "horizontal") {
        prevKey = dir.value === "ltr" ? "ArrowLeft" : "ArrowRight";
        nextKey = dir.value === "ltr" ? "ArrowRight" : "ArrowLeft";
      } else {
        prevKey = "ArrowUp";
        nextKey = "ArrowDown";
      }
      if (event.key === prevKey) {
        event.preventDefault();
        scrollPrev();
        return;
      }
      if (event.key === nextKey) {
        event.preventDefault();
        scrollNext();
      }
    }
    const canScrollNext = ref(false);
    const canScrollPrev = ref(false);
    const selectedIndex = ref(0);
    const scrollSnaps = ref([]);
    function isCarouselItem(item) {
      return typeof item === "object" && item !== null;
    }
    __expose({
      emblaRef,
      emblaApi
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: unref(props).as,
        role: "region",
        "aria-roledescription": unref(t)("carousel.roledescription"),
        "data-orientation": unref(props).orientation,
        tabindex: "0",
        "data-slot": "root",
        class: ui.value.root({ class: [(_a = unref(props).ui) == null ? void 0 : _a.root, unref(props).class] }),
        onKeydown: onKeyDown
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
          if (_push2) {
            _push2(`<div data-slot="viewport" class="${ssrRenderClass(ui.value.viewport({ class: (_a2 = unref(props).ui) == null ? void 0 : _a2.viewport }))}"${_scopeId}><div data-slot="container" class="${ssrRenderClass(ui.value.container({ class: (_b = unref(props).ui) == null ? void 0 : _b.container }))}"${_scopeId}><!--[-->`);
            ssrRenderList(unref(props).items, (item, index) => {
              var _a3, _b2;
              _push2(`<div${ssrRenderAttrs(mergeProps({ key: index }, { ref_for: true }, unref(props).dots ? { role: "tabpanel" } : {
                "role": "group",
                "aria-roledescription": unref(t)("carousel.slide")
              }, {
                "data-slot": "item",
                class: ui.value.item({ class: [
                  (_a3 = unref(props).ui) == null ? void 0 : _a3.item,
                  isCarouselItem(item) && ((_b2 = item.ui) == null ? void 0 : _b2.item),
                  isCarouselItem(item) && item.class
                ] })
              }))}${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {
                item,
                index
              }, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div>`);
            if (unref(props).arrows || unref(props).dots) {
              _push2(`<div data-slot="controls" class="${ssrRenderClass(ui.value.controls({ class: (_c = unref(props).ui) == null ? void 0 : _c.controls }))}"${_scopeId}>`);
              if (unref(props).arrows) {
                _push2(`<div data-slot="arrows" class="${ssrRenderClass(ui.value.arrows({ class: (_d = unref(props).ui) == null ? void 0 : _d.arrows }))}"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$4, mergeProps({
                  disabled: !canScrollPrev.value,
                  icon: prevIcon.value,
                  color: "neutral",
                  variant: "outline",
                  "aria-label": unref(t)("carousel.prev")
                }, typeof unref(props).prev === "object" ? unref(props).prev : void 0, {
                  "data-slot": "prev",
                  class: ui.value.prev({ class: (_e = unref(props).ui) == null ? void 0 : _e.prev }),
                  onClick: scrollPrev
                }), null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$4, mergeProps({
                  disabled: !canScrollNext.value,
                  icon: nextIcon.value,
                  color: "neutral",
                  variant: "outline",
                  "aria-label": unref(t)("carousel.next")
                }, typeof unref(props).next === "object" ? unref(props).next : void 0, {
                  "data-slot": "next",
                  class: ui.value.next({ class: (_f = unref(props).ui) == null ? void 0 : _f.next }),
                  onClick: scrollNext
                }), null, _parent2, _scopeId));
                _push2(`</div>`);
              } else _push2(`<!---->`);
              if (unref(props).dots) {
                _push2(`<div role="tablist"${ssrRenderAttr("aria-label", unref(t)("carousel.dots"))} data-slot="dots" class="${ssrRenderClass(ui.value.dots({ class: (_g = unref(props).ui) == null ? void 0 : _g.dots }))}"${_scopeId}><!--[-->`);
                ssrRenderList(scrollSnaps.value, (_2, index) => {
                  var _a3;
                  _push2(`<button type="button" role="tab"${ssrRenderAttr("aria-label", unref(t)("carousel.goto", { slide: index + 1 }))}${ssrRenderAttr("aria-selected", selectedIndex.value === index)} data-slot="dot" class="${ssrRenderClass(ui.value.dot({
                    class: (_a3 = unref(props).ui) == null ? void 0 : _a3.dot,
                    active: selectedIndex.value === index
                  }))}"${ssrRenderAttr("data-state", selectedIndex.value === index ? "active" : void 0)}${_scopeId}></button>`);
                });
                _push2(`<!--]--></div>`);
              } else _push2(`<!---->`);
              _push2(`</div>`);
            } else _push2(`<!---->`);
          } else return [createVNode("div", {
            ref_key: "emblaRef",
            ref: emblaRef,
            "data-slot": "viewport",
            class: ui.value.viewport({ class: (_h = unref(props).ui) == null ? void 0 : _h.viewport })
          }, [createVNode("div", {
            "data-slot": "container",
            class: ui.value.container({ class: (_i = unref(props).ui) == null ? void 0 : _i.container })
          }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(props).items, (item, index) => {
            var _a3, _b2;
            return openBlock(), createBlock("div", mergeProps({ key: index }, { ref_for: true }, unref(props).dots ? { role: "tabpanel" } : {
              "role": "group",
              "aria-roledescription": unref(t)("carousel.slide")
            }, {
              "data-slot": "item",
              class: ui.value.item({ class: [
                (_a3 = unref(props).ui) == null ? void 0 : _a3.item,
                isCarouselItem(item) && ((_b2 = item.ui) == null ? void 0 : _b2.item),
                isCarouselItem(item) && item.class
              ] })
            }), [renderSlot(_ctx.$slots, "default", {
              item,
              index
            })], 16);
          }), 128))], 2)], 2), unref(props).arrows || unref(props).dots ? (openBlock(), createBlock("div", {
            key: 0,
            "data-slot": "controls",
            class: ui.value.controls({ class: (_j = unref(props).ui) == null ? void 0 : _j.controls })
          }, [unref(props).arrows ? (openBlock(), createBlock("div", {
            key: 0,
            "data-slot": "arrows",
            class: ui.value.arrows({ class: (_k = unref(props).ui) == null ? void 0 : _k.arrows })
          }, [createVNode(_sfc_main$4, mergeProps({
            disabled: !canScrollPrev.value,
            icon: prevIcon.value,
            color: "neutral",
            variant: "outline",
            "aria-label": unref(t)("carousel.prev")
          }, typeof unref(props).prev === "object" ? unref(props).prev : void 0, {
            "data-slot": "prev",
            class: ui.value.prev({ class: (_l = unref(props).ui) == null ? void 0 : _l.prev }),
            onClick: scrollPrev
          }), null, 16, [
            "disabled",
            "icon",
            "aria-label",
            "class"
          ]), createVNode(_sfc_main$4, mergeProps({
            disabled: !canScrollNext.value,
            icon: nextIcon.value,
            color: "neutral",
            variant: "outline",
            "aria-label": unref(t)("carousel.next")
          }, typeof unref(props).next === "object" ? unref(props).next : void 0, {
            "data-slot": "next",
            class: ui.value.next({ class: (_m = unref(props).ui) == null ? void 0 : _m.next }),
            onClick: scrollNext
          }), null, 16, [
            "disabled",
            "icon",
            "aria-label",
            "class"
          ])], 2)) : createCommentVNode("", true), unref(props).dots ? (openBlock(), createBlock("div", {
            key: 1,
            role: "tablist",
            "aria-label": unref(t)("carousel.dots"),
            "data-slot": "dots",
            class: ui.value.dots({ class: (_n = unref(props).ui) == null ? void 0 : _n.dots })
          }, [(openBlock(true), createBlock(Fragment, null, renderList(scrollSnaps.value, (_2, index) => {
            var _a3;
            return openBlock(), createBlock("button", {
              key: index,
              type: "button",
              role: "tab",
              "aria-label": unref(t)("carousel.goto", { slide: index + 1 }),
              "aria-selected": selectedIndex.value === index,
              "data-slot": "dot",
              class: ui.value.dot({
                class: (_a3 = unref(props).ui) == null ? void 0 : _a3.dot,
                active: selectedIndex.value === index
              }),
              "data-state": selectedIndex.value === index ? "active" : void 0,
              onClick: ($event) => scrollTo(index)
            }, null, 10, [
              "aria-label",
              "aria-selected",
              "data-state",
              "onClick"
            ]);
          }), 128))], 10, ["aria-label"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)];
        }),
        _: 3
      }, _parent));
    };
  }
};
var _sfc_setup$5 = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Carousel.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var BaptismGallery_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "BaptismGallery",
  __ssrInlineRender: true,
  setup(__props) {
    const selected = ref(null);
    const open = computed({
      get: () => selected.value !== null,
      set: (value) => {
        if (!value) selected.value = null;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UContainer = _sfc_main$3;
      const _component_SectionHeading = SectionHeading_default;
      const _component_UCarousel = _sfc_main;
      const _component_UModal = _sfc_main$8;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 sm:py-24" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SectionHeading, {
              eyebrow: "Life together",
              title: "Our Baptisms",
              description: "We celebrate each person taking a step of faith and beginning a new chapter.",
              centered: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UCarousel, {
              items: [...unref(site).baptismPhotos],
              arrows: "",
              class: "md:hidden",
              ui: { item: "basis-[82%] ps-0" }
            }, {
              default: withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) _push3(`<button class="w-full overflow-hidden rounded-2xl"${ssrRenderAttr("aria-label", `View ${item.alt}`)}${_scopeId2}><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.alt)} width="640" height="460" loading="lazy" class="aspect-[4/3] w-full object-cover"${_scopeId2}></button>`);
                else return [createVNode("button", {
                  class: "w-full overflow-hidden rounded-2xl",
                  "aria-label": `View ${item.alt}`,
                  onClick: ($event) => selected.value = item
                }, [createVNode("img", {
                  src: item.image,
                  alt: item.alt,
                  width: "640",
                  height: "460",
                  loading: "lazy",
                  class: "aspect-[4/3] w-full object-cover"
                }, null, 8, ["src", "alt"])], 8, ["aria-label", "onClick"])];
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="hidden grid-cols-2 gap-4 md:grid lg:grid-cols-4"${_scopeId}><!--[-->`);
            ssrRenderList(unref(site).baptismPhotos, (photo) => {
              _push2(`<button class="group overflow-hidden rounded-2xl"${ssrRenderAttr("aria-label", `View ${photo.alt}`)}${_scopeId}><img${ssrRenderAttr("src", photo.image)}${ssrRenderAttr("alt", photo.alt)} width="640" height="460" loading="lazy" class="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"${_scopeId}></button>`);
            });
            _push2(`<!--]--></div>`);
          } else return [
            createVNode(_component_SectionHeading, {
              eyebrow: "Life together",
              title: "Our Baptisms",
              description: "We celebrate each person taking a step of faith and beginning a new chapter.",
              centered: ""
            }),
            createVNode(_component_UCarousel, {
              items: [...unref(site).baptismPhotos],
              arrows: "",
              class: "md:hidden",
              ui: { item: "basis-[82%] ps-0" }
            }, {
              default: withCtx(({ item }) => [createVNode("button", {
                class: "w-full overflow-hidden rounded-2xl",
                "aria-label": `View ${item.alt}`,
                onClick: ($event) => selected.value = item
              }, [createVNode("img", {
                src: item.image,
                alt: item.alt,
                width: "640",
                height: "460",
                loading: "lazy",
                class: "aspect-[4/3] w-full object-cover"
              }, null, 8, ["src", "alt"])], 8, ["aria-label", "onClick"])]),
              _: 1
            }, 8, ["items"]),
            createVNode("div", { class: "hidden grid-cols-2 gap-4 md:grid lg:grid-cols-4" }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(site).baptismPhotos, (photo) => {
              return openBlock(), createBlock("button", {
                key: photo.image,
                class: "group overflow-hidden rounded-2xl",
                "aria-label": `View ${photo.alt}`,
                onClick: ($event) => selected.value = photo
              }, [createVNode("img", {
                src: photo.image,
                alt: photo.alt,
                width: "640",
                height: "460",
                loading: "lazy",
                class: "aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
              }, null, 8, ["src", "alt"])], 8, ["aria-label", "onClick"]);
            }), 128))])
          ];
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        open: unref(open),
        "onUpdate:open": ($event) => isRef(open) ? open.value = $event : null,
        title: (_a = unref(selected)) == null ? void 0 : _a.alt
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(selected)) _push2(`<img${ssrRenderAttr("src", unref(selected).image)}${ssrRenderAttr("alt", unref(selected).alt)} width="1200" height="800" class="max-h-[70vh] w-full rounded-xl object-contain"${_scopeId}>`);
            else _push2(`<!---->`);
          } else return [unref(selected) ? (openBlock(), createBlock("img", {
            key: 0,
            src: unref(selected).image,
            alt: unref(selected).alt,
            width: "1200",
            height: "800",
            class: "max-h-[70vh] w-full rounded-xl object-contain"
          }, null, 8, ["src", "alt"])) : createCommentVNode("", true)];
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
var _sfc_setup$4 = BaptismGallery_vue_vue_type_script_setup_true_lang_default.setup;
BaptismGallery_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BaptismGallery.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var BaptismGallery_default = Object.assign(BaptismGallery_vue_vue_type_script_setup_true_lang_default, { __name: "BaptismGallery" });
var BooksSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "BooksSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$3;
      const _component_SectionHeading = SectionHeading_default;
      const _component_UCard = _sfc_main$6;
      const _component_UButton = _sfc_main$4;
      const _component_UIcon = _sfc_main$5;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-brand-50 py-16 sm:py-24" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SectionHeading, {
              eyebrow: "Reading material",
              title: "Keep learning, one page at a time",
              description: "Explore a resource designed to help you grow in understanding and faith.",
              centered: ""
            }, null, _parent2, _scopeId));
            _push2(`<div class="grid items-center gap-8 lg:grid-cols-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UCard, { class: "overflow-hidden rounded-3xl border-0 shadow-lg" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid items-center gap-6 sm:grid-cols-[.75fr_1fr]"${_scopeId2}><img${ssrRenderAttr("src", unref(site).book.image)}${ssrRenderAttr("alt", `Placeholder cover for ${unref(site).book.title}`)} width="480" height="640" loading="lazy" class="mx-auto aspect-[3/4] w-44 rounded-xl object-cover shadow-lg sm:w-full"${_scopeId2}><div${_scopeId2}><p class="mb-2 text-xs font-bold uppercase tracking-widest text-primary"${_scopeId2}>Featured book</p><h3 class="font-display text-2xl font-bold"${_scopeId2}>${ssrInterpolate(unref(site).book.title)}</h3><p class="mt-4 leading-7 text-slate-600"${_scopeId2}>${ssrInterpolate(unref(site).book.description)}</p>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    to: unref(site).book.url,
                    target: "_blank",
                    label: "Purchase",
                    "trailing-icon": "i-lucide-arrow-up-right",
                    class: "mt-6"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else return [createVNode("div", { class: "grid items-center gap-6 sm:grid-cols-[.75fr_1fr]" }, [createVNode("img", {
                  src: unref(site).book.image,
                  alt: `Placeholder cover for ${unref(site).book.title}`,
                  width: "480",
                  height: "640",
                  loading: "lazy",
                  class: "mx-auto aspect-[3/4] w-44 rounded-xl object-cover shadow-lg sm:w-full"
                }, null, 8, ["src", "alt"]), createVNode("div", null, [
                  createVNode("p", { class: "mb-2 text-xs font-bold uppercase tracking-widest text-primary" }, "Featured book"),
                  createVNode("h3", { class: "font-display text-2xl font-bold" }, toDisplayString(unref(site).book.title), 1),
                  createVNode("p", { class: "mt-4 leading-7 text-slate-600" }, toDisplayString(unref(site).book.description), 1),
                  createVNode(_component_UButton, {
                    to: unref(site).book.url,
                    target: "_blank",
                    label: "Purchase",
                    "trailing-icon": "i-lucide-arrow-up-right",
                    class: "mt-6"
                  }, null, 8, ["to"])
                ])])];
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UCard, { class: "rounded-3xl border-0 bg-white p-4 shadow-lg" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UIcon, {
                    name: "i-lucide-quote",
                    class: "size-9 text-primary"
                  }, null, _parent3, _scopeId2));
                  _push3(`<blockquote class="mt-4 font-display text-xl font-semibold leading-8 text-slate-800"${_scopeId2}>${ssrInterpolate(unref(site).book.quote)}</blockquote><p class="mt-5 text-sm font-bold text-slate-500"${_scopeId2}>\u2014 ${ssrInterpolate(unref(site).book.attribution)}</p>`);
                } else return [
                  createVNode(_component_UIcon, {
                    name: "i-lucide-quote",
                    class: "size-9 text-primary"
                  }),
                  createVNode("blockquote", { class: "mt-4 font-display text-xl font-semibold leading-8 text-slate-800" }, toDisplayString(unref(site).book.quote), 1),
                  createVNode("p", { class: "mt-5 text-sm font-bold text-slate-500" }, "\u2014 " + toDisplayString(unref(site).book.attribution), 1)
                ];
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else return [createVNode(_component_SectionHeading, {
            eyebrow: "Reading material",
            title: "Keep learning, one page at a time",
            description: "Explore a resource designed to help you grow in understanding and faith.",
            centered: ""
          }), createVNode("div", { class: "grid items-center gap-8 lg:grid-cols-2" }, [createVNode(_component_UCard, { class: "overflow-hidden rounded-3xl border-0 shadow-lg" }, {
            default: withCtx(() => [createVNode("div", { class: "grid items-center gap-6 sm:grid-cols-[.75fr_1fr]" }, [createVNode("img", {
              src: unref(site).book.image,
              alt: `Placeholder cover for ${unref(site).book.title}`,
              width: "480",
              height: "640",
              loading: "lazy",
              class: "mx-auto aspect-[3/4] w-44 rounded-xl object-cover shadow-lg sm:w-full"
            }, null, 8, ["src", "alt"]), createVNode("div", null, [
              createVNode("p", { class: "mb-2 text-xs font-bold uppercase tracking-widest text-primary" }, "Featured book"),
              createVNode("h3", { class: "font-display text-2xl font-bold" }, toDisplayString(unref(site).book.title), 1),
              createVNode("p", { class: "mt-4 leading-7 text-slate-600" }, toDisplayString(unref(site).book.description), 1),
              createVNode(_component_UButton, {
                to: unref(site).book.url,
                target: "_blank",
                label: "Purchase",
                "trailing-icon": "i-lucide-arrow-up-right",
                class: "mt-6"
              }, null, 8, ["to"])
            ])])]),
            _: 1
          }), createVNode(_component_UCard, { class: "rounded-3xl border-0 bg-white p-4 shadow-lg" }, {
            default: withCtx(() => [
              createVNode(_component_UIcon, {
                name: "i-lucide-quote",
                class: "size-9 text-primary"
              }),
              createVNode("blockquote", { class: "mt-4 font-display text-xl font-semibold leading-8 text-slate-800" }, toDisplayString(unref(site).book.quote), 1),
              createVNode("p", { class: "mt-5 text-sm font-bold text-slate-500" }, "\u2014 " + toDisplayString(unref(site).book.attribution), 1)
            ]),
            _: 1
          })])];
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
var _sfc_setup$3 = BooksSection_vue_vue_type_script_setup_true_lang_default.setup;
BooksSection_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BooksSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var BooksSection_default = Object.assign(BooksSection_vue_vue_type_script_setup_true_lang_default, { __name: "BooksSection" });
var LeadershipSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "LeadershipSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$3;
      const _component_SectionHeading = SectionHeading_default;
      const _component_UButton = _sfc_main$4;
      const _component_UCard = _sfc_main$6;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 sm:py-24" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid gap-12 lg:grid-cols-[.85fr_1.15fr]"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_SectionHeading, {
              eyebrow: "Church leadership",
              title: "People who serve with care",
              description: "Meet a few of the people helping our community grow in faith."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              to: "/leadership",
              label: "Meet our leadership",
              "trailing-icon": "i-lucide-arrow-right",
              variant: "outline"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="grid gap-5 sm:grid-cols-2"${_scopeId}><!--[-->`);
            ssrRenderList(unref(site).leaders, (leader) => {
              _push2(ssrRenderComponent(_component_UCard, {
                key: leader.name,
                class: "overflow-hidden rounded-3xl border-0 shadow-md"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", leader.image)}${ssrRenderAttr("alt", `Placeholder portrait of ${leader.name}`)} width="600" height="500" loading="lazy" class="mb-5 aspect-[4/3] w-full rounded-2xl object-cover"${_scopeId2}><p class="text-xs font-bold uppercase tracking-widest text-primary"${_scopeId2}>${ssrInterpolate(leader.role)}</p><h3 class="mt-2 font-display text-2xl font-bold"${_scopeId2}>${ssrInterpolate(leader.name)}</h3><p class="mt-3 text-sm leading-6 text-slate-600"${_scopeId2}>${ssrInterpolate(leader.bio)}</p>`);
                    _push3(ssrRenderComponent(_component_UButton, {
                      to: leader.email,
                      label: "Get in touch",
                      icon: "i-lucide-mail",
                      variant: "link",
                      class: "mt-2 px-0"
                    }, null, _parent3, _scopeId2));
                  } else return [
                    createVNode("img", {
                      src: leader.image,
                      alt: `Placeholder portrait of ${leader.name}`,
                      width: "600",
                      height: "500",
                      loading: "lazy",
                      class: "mb-5 aspect-[4/3] w-full rounded-2xl object-cover"
                    }, null, 8, ["src", "alt"]),
                    createVNode("p", { class: "text-xs font-bold uppercase tracking-widest text-primary" }, toDisplayString(leader.role), 1),
                    createVNode("h3", { class: "mt-2 font-display text-2xl font-bold" }, toDisplayString(leader.name), 1),
                    createVNode("p", { class: "mt-3 text-sm leading-6 text-slate-600" }, toDisplayString(leader.bio), 1),
                    createVNode(_component_UButton, {
                      to: leader.email,
                      label: "Get in touch",
                      icon: "i-lucide-mail",
                      variant: "link",
                      class: "mt-2 px-0"
                    }, null, 8, ["to"])
                  ];
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div><div class="mt-14 rounded-3xl bg-slate-950 p-8 text-white sm:p-12"${_scopeId}><p class="max-w-4xl font-display text-2xl font-semibold leading-relaxed sm:text-3xl"${_scopeId}>${ssrInterpolate(unref(site).contact.mission)} <span class="text-brand-300"${_scopeId}>(Matthew 28:19\u201320 \xB7 Colossians 3:16)</span></p></div>`);
          } else return [createVNode("div", { class: "grid gap-12 lg:grid-cols-[.85fr_1.15fr]" }, [createVNode("div", null, [createVNode(_component_SectionHeading, {
            eyebrow: "Church leadership",
            title: "People who serve with care",
            description: "Meet a few of the people helping our community grow in faith."
          }), createVNode(_component_UButton, {
            to: "/leadership",
            label: "Meet our leadership",
            "trailing-icon": "i-lucide-arrow-right",
            variant: "outline"
          })]), createVNode("div", { class: "grid gap-5 sm:grid-cols-2" }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(site).leaders, (leader) => {
            return openBlock(), createBlock(_component_UCard, {
              key: leader.name,
              class: "overflow-hidden rounded-3xl border-0 shadow-md"
            }, {
              default: withCtx(() => [
                createVNode("img", {
                  src: leader.image,
                  alt: `Placeholder portrait of ${leader.name}`,
                  width: "600",
                  height: "500",
                  loading: "lazy",
                  class: "mb-5 aspect-[4/3] w-full rounded-2xl object-cover"
                }, null, 8, ["src", "alt"]),
                createVNode("p", { class: "text-xs font-bold uppercase tracking-widest text-primary" }, toDisplayString(leader.role), 1),
                createVNode("h3", { class: "mt-2 font-display text-2xl font-bold" }, toDisplayString(leader.name), 1),
                createVNode("p", { class: "mt-3 text-sm leading-6 text-slate-600" }, toDisplayString(leader.bio), 1),
                createVNode(_component_UButton, {
                  to: leader.email,
                  label: "Get in touch",
                  icon: "i-lucide-mail",
                  variant: "link",
                  class: "mt-2 px-0"
                }, null, 8, ["to"])
              ]),
              _: 2
            }, 1024);
          }), 128))])]), createVNode("div", { class: "mt-14 rounded-3xl bg-slate-950 p-8 text-white sm:p-12" }, [createVNode("p", { class: "max-w-4xl font-display text-2xl font-semibold leading-relaxed sm:text-3xl" }, [createTextVNode(toDisplayString(unref(site).contact.mission) + " ", 1), createVNode("span", { class: "text-brand-300" }, "(Matthew 28:19\u201320 \xB7 Colossians 3:16)")])])];
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
var _sfc_setup$2 = LeadershipSection_vue_vue_type_script_setup_true_lang_default.setup;
LeadershipSection_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LeadershipSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var LeadershipSection_default = Object.assign(LeadershipSection_vue_vue_type_script_setup_true_lang_default, { __name: "LeadershipSection" });
var ContactBlock_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "ContactBlock",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$3;
      const _component_SectionHeading = SectionHeading_default;
      const _component_UButton = _sfc_main$4;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-slate-50 py-16 sm:py-24" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid gap-10 rounded-3xl bg-white p-7 shadow-sm sm:p-10 lg:grid-cols-[.8fr_1.2fr]"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_SectionHeading, {
              eyebrow: "Come say hello",
              title: "We would love to meet you"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              to: unref(site).contact.mapUrl,
              target: "_blank",
              label: "Get directions",
              "trailing-icon": "i-lucide-map-pin"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="grid gap-6 sm:grid-cols-2"${_scopeId}><div${_scopeId}><h3 class="font-bold"${_scopeId}>Visit us</h3><p class="mt-2 text-slate-600"${_scopeId}>${ssrInterpolate(unref(site).contact.venue)}<br${_scopeId}>${ssrInterpolate(unref(site).contact.address)}</p><p class="mt-3 font-medium text-primary"${_scopeId}>${ssrInterpolate(unref(site).contact.serviceTime)}</p></div><div${_scopeId}><h3 class="font-bold"${_scopeId}>Get in touch</h3><a${ssrRenderAttr("href", `tel:${unref(site).contact.phone}`)} class="mt-2 block text-slate-600 hover:text-primary"${_scopeId}>${ssrInterpolate(unref(site).contact.phone)}</a><a${ssrRenderAttr("href", `mailto:${unref(site).contact.email}`)} class="mt-1 block break-all text-slate-600 hover:text-primary"${_scopeId}>${ssrInterpolate(unref(site).contact.email)}</a></div></div></div>`);
          } else return [createVNode("div", { class: "grid gap-10 rounded-3xl bg-white p-7 shadow-sm sm:p-10 lg:grid-cols-[.8fr_1.2fr]" }, [createVNode("div", null, [createVNode(_component_SectionHeading, {
            eyebrow: "Come say hello",
            title: "We would love to meet you"
          }), createVNode(_component_UButton, {
            to: unref(site).contact.mapUrl,
            target: "_blank",
            label: "Get directions",
            "trailing-icon": "i-lucide-map-pin"
          }, null, 8, ["to"])]), createVNode("div", { class: "grid gap-6 sm:grid-cols-2" }, [createVNode("div", null, [
            createVNode("h3", { class: "font-bold" }, "Visit us"),
            createVNode("p", { class: "mt-2 text-slate-600" }, [
              createTextVNode(toDisplayString(unref(site).contact.venue), 1),
              createVNode("br"),
              createTextVNode(toDisplayString(unref(site).contact.address), 1)
            ]),
            createVNode("p", { class: "mt-3 font-medium text-primary" }, toDisplayString(unref(site).contact.serviceTime), 1)
          ]), createVNode("div", null, [
            createVNode("h3", { class: "font-bold" }, "Get in touch"),
            createVNode("a", {
              href: `tel:${unref(site).contact.phone}`,
              class: "mt-2 block text-slate-600 hover:text-primary"
            }, toDisplayString(unref(site).contact.phone), 9, ["href"]),
            createVNode("a", {
              href: `mailto:${unref(site).contact.email}`,
              class: "mt-1 block break-all text-slate-600 hover:text-primary"
            }, toDisplayString(unref(site).contact.email), 9, ["href"])
          ])])])];
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
var _sfc_setup$1 = ContactBlock_vue_vue_type_script_setup_true_lang_default.setup;
ContactBlock_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactBlock.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var ContactBlock_default = Object.assign(ContactBlock_vue_vue_type_script_setup_true_lang_default, { __name: "ContactBlock" });
var index_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: `${site.name} | ${site.tagline}`,
      description: site.contact.mission,
      ogTitle: `${site.name} | ${site.tagline}`,
      ogDescription: site.contact.mission,
      ogImage: site.hero.image,
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeroSection = HeroSection_default;
      const _component_SermonsSection = SermonsSection_default;
      const _component_UContainer = _sfc_main$3;
      const _component_UButton = _sfc_main$4;
      const _component_UPageSection = _sfc_main$1;
      const _component_SectionHeading = SectionHeading_default;
      const _component_FeatureCards = FeatureCards_default;
      const _component_BaptismGallery = BaptismGallery_default;
      const _component_BooksSection = BooksSection_default;
      const _component_LeadershipSection = LeadershipSection_default;
      const _component_ContactBlock = ContactBlock_default;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
      _push(ssrRenderComponent(_component_SermonsSection, null, null, _parent));
      _push(`<section class="bg-brand-700 py-16 text-white sm:py-20">`);
      _push(ssrRenderComponent(_component_UContainer, { class: "grid items-center gap-8 lg:grid-cols-[1fr_auto]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-3xl"${_scopeId}><p class="mb-3 text-xs font-bold uppercase tracking-[.2em] text-brand-100"${_scopeId}>${ssrInterpolate(unref(site).home.bible.eyebrow)}</p><h2 class="font-display text-3xl font-bold sm:text-4xl"${_scopeId}>${ssrInterpolate(unref(site).home.bible.title)}</h2><p class="mt-4 text-lg leading-8 text-white/80"${_scopeId}>${ssrInterpolate(unref(site).home.bible.description)}</p></div>`);
            _push2(ssrRenderComponent(_component_UButton, {
              to: "/leadership",
              label: unref(site).home.bible.cta,
              "trailing-icon": "i-lucide-arrow-right",
              color: "neutral",
              variant: "outline",
              size: "lg",
              class: "border-white text-white hover:bg-white hover:text-brand-800"
            }, null, _parent2, _scopeId));
          } else return [createVNode("div", { class: "max-w-3xl" }, [
            createVNode("p", { class: "mb-3 text-xs font-bold uppercase tracking-[.2em] text-brand-100" }, toDisplayString(unref(site).home.bible.eyebrow), 1),
            createVNode("h2", { class: "font-display text-3xl font-bold sm:text-4xl" }, toDisplayString(unref(site).home.bible.title), 1),
            createVNode("p", { class: "mt-4 text-lg leading-8 text-white/80" }, toDisplayString(unref(site).home.bible.description), 1)
          ]), createVNode(_component_UButton, {
            to: "/leadership",
            label: unref(site).home.bible.cta,
            "trailing-icon": "i-lucide-arrow-right",
            color: "neutral",
            variant: "outline",
            size: "lg",
            class: "border-white text-white hover:bg-white hover:text-brand-800"
          }, null, 8, ["label"])];
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(_component_UPageSection, { class: "py-16 sm:py-24" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) _push2(ssrRenderComponent(_component_UContainer, null, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="grid items-center gap-10 lg:grid-cols-2"${_scopeId2}><img${ssrRenderAttr("src", unref(site).series.image)}${ssrRenderAttr("alt", `Placeholder artwork for ${unref(site).series.title}`)} width="1200" height="800" loading="lazy" class="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"${_scopeId2}><div${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_SectionHeading, {
                  eyebrow: unref(site).home.seriesEyebrow,
                  title: unref(site).series.title,
                  description: unref(site).series.description
                }, null, _parent3, _scopeId2));
                _push3(ssrRenderComponent(_component_UButton, {
                  to: unref(site).sermons.url,
                  target: "_blank",
                  label: unref(site).home.seriesCta,
                  "trailing-icon": "i-lucide-arrow-up-right"
                }, null, _parent3, _scopeId2));
                _push3(`</div></div>`);
              } else return [createVNode("div", { class: "grid items-center gap-10 lg:grid-cols-2" }, [createVNode("img", {
                src: unref(site).series.image,
                alt: `Placeholder artwork for ${unref(site).series.title}`,
                width: "1200",
                height: "800",
                loading: "lazy",
                class: "aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
              }, null, 8, ["src", "alt"]), createVNode("div", null, [createVNode(_component_SectionHeading, {
                eyebrow: unref(site).home.seriesEyebrow,
                title: unref(site).series.title,
                description: unref(site).series.description
              }, null, 8, [
                "eyebrow",
                "title",
                "description"
              ]), createVNode(_component_UButton, {
                to: unref(site).sermons.url,
                target: "_blank",
                label: unref(site).home.seriesCta,
                "trailing-icon": "i-lucide-arrow-up-right"
              }, null, 8, ["to", "label"])])])];
            }),
            _: 1
          }, _parent2, _scopeId));
          else return [createVNode(_component_UContainer, null, {
            default: withCtx(() => [createVNode("div", { class: "grid items-center gap-10 lg:grid-cols-2" }, [createVNode("img", {
              src: unref(site).series.image,
              alt: `Placeholder artwork for ${unref(site).series.title}`,
              width: "1200",
              height: "800",
              loading: "lazy",
              class: "aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
            }, null, 8, ["src", "alt"]), createVNode("div", null, [createVNode(_component_SectionHeading, {
              eyebrow: unref(site).home.seriesEyebrow,
              title: unref(site).series.title,
              description: unref(site).series.description
            }, null, 8, [
              "eyebrow",
              "title",
              "description"
            ]), createVNode(_component_UButton, {
              to: unref(site).sermons.url,
              target: "_blank",
              label: unref(site).home.seriesCta,
              "trailing-icon": "i-lucide-arrow-up-right"
            }, null, 8, ["to", "label"])])])]),
            _: 1
          })];
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FeatureCards, null, null, _parent));
      _push(ssrRenderComponent(_component_BaptismGallery, null, null, _parent));
      _push(ssrRenderComponent(_component_BooksSection, null, null, _parent));
      _push(ssrRenderComponent(_component_LeadershipSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ContactBlock, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var pages_default = index_vue_vue_type_script_setup_true_lang_default;

export { pages_default as default };
//# sourceMappingURL=pages-CyiqXVc9.mjs.map
