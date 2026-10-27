import { a as useComponentProps, f as useLocale, b as useAppConfig, c as useForwardProps, v as usePortal, t as tv, p as VisuallyHidden_default } from '../virtual/entry.mjs';
import { r as pointerDownOutside, p as DialogRoot_default, i as DialogTrigger_default, o as DialogPortal_default, s as DialogOverlay_default, l as DialogContent_default, a as DialogTitle_default, c as DialogDescription_default, f as DialogClose_default } from './Modal-B3gTgqQa.mjs';
import { F as FieldGroupReset, _ as _sfc_main$1 } from './Button-Cwxo7d33.mjs';
import { useSlots, toRef, computed, unref, mergeProps, withCtx, renderSlot, toHandlers, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createVNode, useSSRContext } from 'file:///Users/ccci/Project/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderClass } from 'file:///Users/ccci/Project/node_modules/vue/server-renderer/index.mjs';
import { reactivePick } from 'file:///Users/ccci/Project/node_modules/@vueuse/core/dist/index.js';
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

var virtual_nuxt__nuxt_2Fui_2Fslideover_default = {
  "slots": {
    "overlay": "fixed inset-0 bg-elevated/75",
    "content": "fixed bg-default divide-y divide-default sm:ring ring-default sm:shadow-lg flex flex-col focus:outline-none",
    "header": "flex items-center gap-1.5 p-4 sm:px-6 min-h-(--ui-header-height)",
    "wrapper": "",
    "body": "flex-1 overflow-y-auto p-4 sm:p-6",
    "footer": "flex items-center gap-1.5 p-4 sm:px-6",
    "title": "text-highlighted font-semibold",
    "description": "mt-1 text-muted text-sm",
    "close": "absolute top-4 end-4"
  },
  "variants": {
    "side": {
      "top": { "content": "" },
      "right": { "content": "sm:max-w-md" },
      "bottom": { "content": "" },
      "left": { "content": "sm:max-w-md" }
    },
    "inset": { "true": { "content": "rounded-lg" } },
    "transition": { "true": { "overlay": "data-[state=open]:animate-[fade-in_200ms_var(--ease-out)] data-[state=closed]:animate-[fade-out_200ms_var(--ease-out)]" } }
  },
  "compoundVariants": [
    {
      "side": "top",
      "inset": true,
      "class": { "content": "max-h-[calc(100%-2rem)] inset-x-4 top-4" }
    },
    {
      "side": "top",
      "inset": false,
      "class": { "content": "max-h-full inset-x-0 top-0" }
    },
    {
      "side": "right",
      "inset": true,
      "class": { "content": "w-[calc(100%-2rem)] inset-y-4 right-4" }
    },
    {
      "side": "right",
      "inset": false,
      "class": { "content": "w-full inset-y-0 right-0" }
    },
    {
      "side": "bottom",
      "inset": true,
      "class": { "content": "max-h-[calc(100%-2rem)] inset-x-4 bottom-4" }
    },
    {
      "side": "bottom",
      "inset": false,
      "class": { "content": "max-h-full inset-x-0 bottom-0" }
    },
    {
      "side": "left",
      "inset": true,
      "class": { "content": "w-[calc(100%-2rem)] inset-y-4 left-4" }
    },
    {
      "side": "left",
      "inset": false,
      "class": { "content": "w-full inset-y-0 left-0" }
    },
    {
      "transition": true,
      "side": "top",
      "class": { "content": "data-[state=open]:animate-[slide-in-from-top_200ms_var(--ease-out)] data-[state=closed]:animate-[slide-out-to-top_200ms_var(--ease-out)]" }
    },
    {
      "transition": true,
      "side": "right",
      "class": { "content": "data-[state=open]:animate-[slide-in-from-right_200ms_var(--ease-out)] data-[state=closed]:animate-[slide-out-to-right_200ms_var(--ease-out)]" }
    },
    {
      "transition": true,
      "side": "bottom",
      "class": { "content": "data-[state=open]:animate-[slide-in-from-bottom_200ms_var(--ease-out)] data-[state=closed]:animate-[slide-out-to-bottom_200ms_var(--ease-out)]" }
    },
    {
      "transition": true,
      "side": "left",
      "class": { "content": "data-[state=open]:animate-[slide-in-from-left_200ms_var(--ease-out)] data-[state=closed]:animate-[slide-out-to-left_200ms_var(--ease-out)]" }
    }
  ]
};
var _sfc_main = {
  __name: "USlideover",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    content: {
      type: Object,
      required: false
    },
    overlay: {
      type: Boolean,
      required: false,
      default: true
    },
    transition: {
      type: Boolean,
      required: false,
      default: true
    },
    side: {
      type: null,
      required: false,
      default: "right"
    },
    inset: {
      type: Boolean,
      required: false
    },
    portal: {
      type: [Boolean, String],
      required: false,
      skipCheck: true,
      default: true
    },
    close: {
      type: [Boolean, Object],
      required: false,
      default: true
    },
    closeIcon: {
      type: null,
      required: false
    },
    dismissible: {
      type: Boolean,
      required: false,
      default: true
    },
    class: {
      type: null,
      required: false
    },
    ui: {
      type: Object,
      required: false
    },
    open: {
      type: Boolean,
      required: false
    },
    defaultOpen: {
      type: Boolean,
      required: false
    },
    modal: {
      type: Boolean,
      required: false,
      default: true
    },
    unmountOnHide: {
      type: Boolean,
      required: false
    }
  },
  emits: [
    "leave",
    "after:leave",
    "enter",
    "after:enter",
    "close:prevent",
    "update:open"
  ],
  setup(__props, { emit: __emit }) {
    const _props = __props;
    const emits = __emit;
    const slots = useSlots();
    const props = useComponentProps("slideover", _props);
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "open", "defaultOpen", "modal", "unmountOnHide"), emits);
    const portalProps = usePortal(toRef(() => props.portal));
    const contentProps = toRef(() => props.content);
    const contentEvents = computed(() => {
      if (!props.dismissible) return ["interactOutside", "escapeKeyDown"].reduce((acc, curr) => {
        acc[curr] = (e) => {
          e.preventDefault();
          emits("close:prevent");
        };
        return acc;
      }, {});
      return { pointerDownOutside };
    });
    const ui = computed(() => {
      var _a;
      return tv({
        extend: virtual_nuxt__nuxt_2Fui_2Fslideover_default,
        ...((_a = appConfig.ui) == null ? void 0 : _a.slideover) || {}
      })({
        transition: props.transition,
        side: props.side,
        inset: props.inset
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogRoot_default), mergeProps(unref(rootProps), _attrs), {
        default: withCtx(({ open, close }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default) _push2(ssrRenderComponent(unref(DialogTrigger_default), {
              "as-child": "",
              class: unref(props).class
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push3, _parent3, _scopeId2);
                else return [renderSlot(_ctx.$slots, "default", { open })];
              }),
              _: 2
            }, _parent2, _scopeId));
            else _push2(`<!---->`);
            _push2(ssrRenderComponent(unref(DialogPortal_default), mergeProps(unref(portalProps), { "force-mount": unref(portalProps).disabled && unref(props).unmountOnHide === false || void 0 }), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) _push3(ssrRenderComponent(unref(FieldGroupReset), null, {
                  default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                    var _a, _b, _c, _d;
                    if (_push4) {
                      if (unref(props).overlay) _push4(ssrRenderComponent(unref(DialogOverlay_default), {
                        "data-slot": "overlay",
                        class: ui.value.overlay({ class: (_a = unref(props).ui) == null ? void 0 : _a.overlay })
                      }, null, _parent4, _scopeId3));
                      else _push4(`<!---->`);
                      _push4(ssrRenderComponent(unref(DialogContent_default), mergeProps({
                        "data-side": unref(props).side,
                        "data-slot": "content",
                        class: ui.value.content({ class: [!slots.default && unref(props).class, (_b = unref(props).ui) == null ? void 0 : _b.content] })
                      }, contentProps.value, {
                        onEnter: ($event) => emits("enter"),
                        onAfterEnter: ($event) => emits("after:enter"),
                        onLeave: ($event) => emits("leave"),
                        onAfterLeave: ($event) => emits("after:leave")
                      }, toHandlers(contentEvents.value)), {
                        default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            if (!unref(props).title && !slots.title || !unref(props).description && !slots.description || !!slots.content) _push5(ssrRenderComponent(unref(VisuallyHidden_default), null, {
                              default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  if (!unref(props).title && !slots.title) _push6(ssrRenderComponent(unref(DialogTitle_default), null, null, _parent6, _scopeId5));
                                  else if (!!slots.content) _push6(ssrRenderComponent(unref(DialogTitle_default), null, {
                                    default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                      if (_push7) ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                        _push7(`${ssrInterpolate(unref(props).title)}`);
                                      }, _push7, _parent7, _scopeId6);
                                      else return [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])];
                                    }),
                                    _: 2
                                  }, _parent6, _scopeId5));
                                  else _push6(`<!---->`);
                                  if (!unref(props).description && !slots.description) _push6(ssrRenderComponent(unref(DialogDescription_default), null, null, _parent6, _scopeId5));
                                  else if (!!slots.content) _push6(ssrRenderComponent(unref(DialogDescription_default), null, {
                                    default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                      if (_push7) ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                        _push7(`${ssrInterpolate(unref(props).description)}`);
                                      }, _push7, _parent7, _scopeId6);
                                      else return [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])];
                                    }),
                                    _: 2
                                  }, _parent6, _scopeId5));
                                  else _push6(`<!---->`);
                                } else return [!unref(props).title && !slots.title ? (openBlock(), createBlock(unref(DialogTitle_default), { key: 0 })) : !!slots.content ? (openBlock(), createBlock(unref(DialogTitle_default), { key: 1 }, {
                                  default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
                                  _: 3
                                })) : createCommentVNode("", true), !unref(props).description && !slots.description ? (openBlock(), createBlock(unref(DialogDescription_default), { key: 2 })) : !!slots.content ? (openBlock(), createBlock(unref(DialogDescription_default), { key: 3 }, {
                                  default: withCtx(() => [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])]),
                                  _: 3
                                })) : createCommentVNode("", true)];
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                            else _push5(`<!---->`);
                            ssrRenderSlot(_ctx.$slots, "content", { close }, () => {
                              var _a2, _b2, _c2;
                              if (!!slots.header || unref(props).title || !!slots.title || unref(props).description || !!slots.description || unref(props).close || !!slots.close) {
                                _push5(`<div data-slot="header" class="${ssrRenderClass(ui.value.header({ class: (_a2 = unref(props).ui) == null ? void 0 : _a2.header }))}"${_scopeId4}>`);
                                ssrRenderSlot(_ctx.$slots, "header", { close }, () => {
                                  var _a3, _b3, _c3;
                                  if (unref(props).title || !!slots.title || unref(props).description || !!slots.description) {
                                    _push5(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: (_a3 = unref(props).ui) == null ? void 0 : _a3.wrapper }))}"${_scopeId4}>`);
                                    if (unref(props).title || !!slots.title) _push5(ssrRenderComponent(unref(DialogTitle_default), {
                                      "data-slot": "title",
                                      class: ui.value.title({ class: (_b3 = unref(props).ui) == null ? void 0 : _b3.title })
                                    }, {
                                      default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                        if (_push6) ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                          _push6(`${ssrInterpolate(unref(props).title)}`);
                                        }, _push6, _parent6, _scopeId5);
                                        else return [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])];
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                    else _push5(`<!---->`);
                                    if (unref(props).description || !!slots.description) _push5(ssrRenderComponent(unref(DialogDescription_default), {
                                      "data-slot": "description",
                                      class: ui.value.description({ class: (_c3 = unref(props).ui) == null ? void 0 : _c3.description })
                                    }, {
                                      default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                        if (_push6) ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                          _push6(`${ssrInterpolate(unref(props).description)}`);
                                        }, _push6, _parent6, _scopeId5);
                                        else return [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])];
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                    else _push5(`<!---->`);
                                    _push5(`</div>`);
                                  } else _push5(`<!---->`);
                                  ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push5, _parent5, _scopeId4);
                                  if (unref(props).close || !!slots.close) _push5(ssrRenderComponent(unref(DialogClose_default), { "as-child": "" }, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) ssrRenderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                        var _a4;
                                        if (unref(props).close) _push6(ssrRenderComponent(_sfc_main$1, mergeProps({
                                          icon: unref(props).closeIcon || unref(appConfig).ui.icons.close,
                                          color: "neutral",
                                          variant: "ghost",
                                          "aria-label": unref(t)("slideover.close")
                                        }, typeof unref(props).close === "object" ? unref(props).close : {}, {
                                          "data-slot": "close",
                                          class: ui.value.close({ class: (_a4 = unref(props).ui) == null ? void 0 : _a4.close })
                                        }), null, _parent6, _scopeId5));
                                        else _push6(`<!---->`);
                                      }, _push6, _parent6, _scopeId5);
                                      else return [renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                        var _a4;
                                        return [unref(props).close ? (openBlock(), createBlock(_sfc_main$1, mergeProps({
                                          key: 0,
                                          icon: unref(props).closeIcon || unref(appConfig).ui.icons.close,
                                          color: "neutral",
                                          variant: "ghost",
                                          "aria-label": unref(t)("slideover.close")
                                        }, typeof unref(props).close === "object" ? unref(props).close : {}, {
                                          "data-slot": "close",
                                          class: ui.value.close({ class: (_a4 = unref(props).ui) == null ? void 0 : _a4.close })
                                        }), null, 16, [
                                          "icon",
                                          "aria-label",
                                          "class"
                                        ])) : createCommentVNode("", true)];
                                      })];
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  else _push5(`<!---->`);
                                }, _push5, _parent5, _scopeId4);
                                _push5(`</div>`);
                              } else _push5(`<!---->`);
                              _push5(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: (_b2 = unref(props).ui) == null ? void 0 : _b2.body }))}"${_scopeId4}>`);
                              ssrRenderSlot(_ctx.$slots, "body", { close }, null, _push5, _parent5, _scopeId4);
                              _push5(`</div>`);
                              if (!!slots.footer) {
                                _push5(`<div data-slot="footer" class="${ssrRenderClass(ui.value.footer({ class: (_c2 = unref(props).ui) == null ? void 0 : _c2.footer }))}"${_scopeId4}>`);
                                ssrRenderSlot(_ctx.$slots, "footer", { close }, null, _push5, _parent5, _scopeId4);
                                _push5(`</div>`);
                              } else _push5(`<!---->`);
                            }, _push5, _parent5, _scopeId4);
                          } else return [!unref(props).title && !slots.title || !unref(props).description && !slots.description || !!slots.content ? (openBlock(), createBlock(unref(VisuallyHidden_default), { key: 0 }, {
                            default: withCtx(() => [!unref(props).title && !slots.title ? (openBlock(), createBlock(unref(DialogTitle_default), { key: 0 })) : !!slots.content ? (openBlock(), createBlock(unref(DialogTitle_default), { key: 1 }, {
                              default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
                              _: 3
                            })) : createCommentVNode("", true), !unref(props).description && !slots.description ? (openBlock(), createBlock(unref(DialogDescription_default), { key: 2 })) : !!slots.content ? (openBlock(), createBlock(unref(DialogDescription_default), { key: 3 }, {
                              default: withCtx(() => [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])]),
                              _: 3
                            })) : createCommentVNode("", true)]),
                            _: 3
                          })) : createCommentVNode("", true), renderSlot(_ctx.$slots, "content", { close }, () => {
                            var _a2, _b2, _c2;
                            return [
                              !!slots.header || unref(props).title || !!slots.title || unref(props).description || !!slots.description || unref(props).close || !!slots.close ? (openBlock(), createBlock("div", {
                                key: 0,
                                "data-slot": "header",
                                class: ui.value.header({ class: (_a2 = unref(props).ui) == null ? void 0 : _a2.header })
                              }, [renderSlot(_ctx.$slots, "header", { close }, () => {
                                var _a3, _b3, _c3;
                                return [
                                  unref(props).title || !!slots.title || unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    "data-slot": "wrapper",
                                    class: ui.value.wrapper({ class: (_a3 = unref(props).ui) == null ? void 0 : _a3.wrapper })
                                  }, [unref(props).title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle_default), {
                                    key: 0,
                                    "data-slot": "title",
                                    class: ui.value.title({ class: (_b3 = unref(props).ui) == null ? void 0 : _b3.title })
                                  }, {
                                    default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
                                    _: 3
                                  }, 8, ["class"])) : createCommentVNode("", true), unref(props).description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription_default), {
                                    key: 1,
                                    "data-slot": "description",
                                    class: ui.value.description({ class: (_c3 = unref(props).ui) == null ? void 0 : _c3.description })
                                  }, {
                                    default: withCtx(() => [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])]),
                                    _: 3
                                  }, 8, ["class"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
                                  renderSlot(_ctx.$slots, "actions"),
                                  unref(props).close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose_default), {
                                    key: 1,
                                    "as-child": ""
                                  }, {
                                    default: withCtx(() => [renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                      var _a4;
                                      return [unref(props).close ? (openBlock(), createBlock(_sfc_main$1, mergeProps({
                                        key: 0,
                                        icon: unref(props).closeIcon || unref(appConfig).ui.icons.close,
                                        color: "neutral",
                                        variant: "ghost",
                                        "aria-label": unref(t)("slideover.close")
                                      }, typeof unref(props).close === "object" ? unref(props).close : {}, {
                                        "data-slot": "close",
                                        class: ui.value.close({ class: (_a4 = unref(props).ui) == null ? void 0 : _a4.close })
                                      }), null, 16, [
                                        "icon",
                                        "aria-label",
                                        "class"
                                      ])) : createCommentVNode("", true)];
                                    })]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true)
                                ];
                              })], 2)) : createCommentVNode("", true),
                              createVNode("div", {
                                "data-slot": "body",
                                class: ui.value.body({ class: (_b2 = unref(props).ui) == null ? void 0 : _b2.body })
                              }, [renderSlot(_ctx.$slots, "body", { close })], 2),
                              !!slots.footer ? (openBlock(), createBlock("div", {
                                key: 1,
                                "data-slot": "footer",
                                class: ui.value.footer({ class: (_c2 = unref(props).ui) == null ? void 0 : _c2.footer })
                              }, [renderSlot(_ctx.$slots, "footer", { close })], 2)) : createCommentVNode("", true)
                            ];
                          })];
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    } else return [unref(props).overlay ? (openBlock(), createBlock(unref(DialogOverlay_default), {
                      key: 0,
                      "data-slot": "overlay",
                      class: ui.value.overlay({ class: (_c = unref(props).ui) == null ? void 0 : _c.overlay })
                    }, null, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(DialogContent_default), mergeProps({
                      "data-side": unref(props).side,
                      "data-slot": "content",
                      class: ui.value.content({ class: [!slots.default && unref(props).class, (_d = unref(props).ui) == null ? void 0 : _d.content] })
                    }, contentProps.value, {
                      onEnter: ($event) => emits("enter"),
                      onAfterEnter: ($event) => emits("after:enter"),
                      onLeave: ($event) => emits("leave"),
                      onAfterLeave: ($event) => emits("after:leave")
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => [!unref(props).title && !slots.title || !unref(props).description && !slots.description || !!slots.content ? (openBlock(), createBlock(unref(VisuallyHidden_default), { key: 0 }, {
                        default: withCtx(() => [!unref(props).title && !slots.title ? (openBlock(), createBlock(unref(DialogTitle_default), { key: 0 })) : !!slots.content ? (openBlock(), createBlock(unref(DialogTitle_default), { key: 1 }, {
                          default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
                          _: 3
                        })) : createCommentVNode("", true), !unref(props).description && !slots.description ? (openBlock(), createBlock(unref(DialogDescription_default), { key: 2 })) : !!slots.content ? (openBlock(), createBlock(unref(DialogDescription_default), { key: 3 }, {
                          default: withCtx(() => [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])]),
                          _: 3
                        })) : createCommentVNode("", true)]),
                        _: 3
                      })) : createCommentVNode("", true), renderSlot(_ctx.$slots, "content", { close }, () => {
                        var _a2, _b2, _c2;
                        return [
                          !!slots.header || unref(props).title || !!slots.title || unref(props).description || !!slots.description || unref(props).close || !!slots.close ? (openBlock(), createBlock("div", {
                            key: 0,
                            "data-slot": "header",
                            class: ui.value.header({ class: (_a2 = unref(props).ui) == null ? void 0 : _a2.header })
                          }, [renderSlot(_ctx.$slots, "header", { close }, () => {
                            var _a3, _b3, _c3;
                            return [
                              unref(props).title || !!slots.title || unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
                                key: 0,
                                "data-slot": "wrapper",
                                class: ui.value.wrapper({ class: (_a3 = unref(props).ui) == null ? void 0 : _a3.wrapper })
                              }, [unref(props).title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle_default), {
                                key: 0,
                                "data-slot": "title",
                                class: ui.value.title({ class: (_b3 = unref(props).ui) == null ? void 0 : _b3.title })
                              }, {
                                default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
                                _: 3
                              }, 8, ["class"])) : createCommentVNode("", true), unref(props).description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription_default), {
                                key: 1,
                                "data-slot": "description",
                                class: ui.value.description({ class: (_c3 = unref(props).ui) == null ? void 0 : _c3.description })
                              }, {
                                default: withCtx(() => [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])]),
                                _: 3
                              }, 8, ["class"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
                              renderSlot(_ctx.$slots, "actions"),
                              unref(props).close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose_default), {
                                key: 1,
                                "as-child": ""
                              }, {
                                default: withCtx(() => [renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                  var _a4;
                                  return [unref(props).close ? (openBlock(), createBlock(_sfc_main$1, mergeProps({
                                    key: 0,
                                    icon: unref(props).closeIcon || unref(appConfig).ui.icons.close,
                                    color: "neutral",
                                    variant: "ghost",
                                    "aria-label": unref(t)("slideover.close")
                                  }, typeof unref(props).close === "object" ? unref(props).close : {}, {
                                    "data-slot": "close",
                                    class: ui.value.close({ class: (_a4 = unref(props).ui) == null ? void 0 : _a4.close })
                                  }), null, 16, [
                                    "icon",
                                    "aria-label",
                                    "class"
                                  ])) : createCommentVNode("", true)];
                                })]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true)
                            ];
                          })], 2)) : createCommentVNode("", true),
                          createVNode("div", {
                            "data-slot": "body",
                            class: ui.value.body({ class: (_b2 = unref(props).ui) == null ? void 0 : _b2.body })
                          }, [renderSlot(_ctx.$slots, "body", { close })], 2),
                          !!slots.footer ? (openBlock(), createBlock("div", {
                            key: 1,
                            "data-slot": "footer",
                            class: ui.value.footer({ class: (_c2 = unref(props).ui) == null ? void 0 : _c2.footer })
                          }, [renderSlot(_ctx.$slots, "footer", { close })], 2)) : createCommentVNode("", true)
                        ];
                      })]),
                      _: 2
                    }, 1040, [
                      "data-side",
                      "class",
                      "onEnter",
                      "onAfterEnter",
                      "onLeave",
                      "onAfterLeave"
                    ])];
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                else return [createVNode(unref(FieldGroupReset), null, {
                  default: withCtx(() => {
                    var _a, _b;
                    return [unref(props).overlay ? (openBlock(), createBlock(unref(DialogOverlay_default), {
                      key: 0,
                      "data-slot": "overlay",
                      class: ui.value.overlay({ class: (_a = unref(props).ui) == null ? void 0 : _a.overlay })
                    }, null, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(DialogContent_default), mergeProps({
                      "data-side": unref(props).side,
                      "data-slot": "content",
                      class: ui.value.content({ class: [!slots.default && unref(props).class, (_b = unref(props).ui) == null ? void 0 : _b.content] })
                    }, contentProps.value, {
                      onEnter: ($event) => emits("enter"),
                      onAfterEnter: ($event) => emits("after:enter"),
                      onLeave: ($event) => emits("leave"),
                      onAfterLeave: ($event) => emits("after:leave")
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => [!unref(props).title && !slots.title || !unref(props).description && !slots.description || !!slots.content ? (openBlock(), createBlock(unref(VisuallyHidden_default), { key: 0 }, {
                        default: withCtx(() => [!unref(props).title && !slots.title ? (openBlock(), createBlock(unref(DialogTitle_default), { key: 0 })) : !!slots.content ? (openBlock(), createBlock(unref(DialogTitle_default), { key: 1 }, {
                          default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
                          _: 3
                        })) : createCommentVNode("", true), !unref(props).description && !slots.description ? (openBlock(), createBlock(unref(DialogDescription_default), { key: 2 })) : !!slots.content ? (openBlock(), createBlock(unref(DialogDescription_default), { key: 3 }, {
                          default: withCtx(() => [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])]),
                          _: 3
                        })) : createCommentVNode("", true)]),
                        _: 3
                      })) : createCommentVNode("", true), renderSlot(_ctx.$slots, "content", { close }, () => {
                        var _a2, _b2, _c;
                        return [
                          !!slots.header || unref(props).title || !!slots.title || unref(props).description || !!slots.description || unref(props).close || !!slots.close ? (openBlock(), createBlock("div", {
                            key: 0,
                            "data-slot": "header",
                            class: ui.value.header({ class: (_a2 = unref(props).ui) == null ? void 0 : _a2.header })
                          }, [renderSlot(_ctx.$slots, "header", { close }, () => {
                            var _a3, _b3, _c2;
                            return [
                              unref(props).title || !!slots.title || unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
                                key: 0,
                                "data-slot": "wrapper",
                                class: ui.value.wrapper({ class: (_a3 = unref(props).ui) == null ? void 0 : _a3.wrapper })
                              }, [unref(props).title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle_default), {
                                key: 0,
                                "data-slot": "title",
                                class: ui.value.title({ class: (_b3 = unref(props).ui) == null ? void 0 : _b3.title })
                              }, {
                                default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
                                _: 3
                              }, 8, ["class"])) : createCommentVNode("", true), unref(props).description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription_default), {
                                key: 1,
                                "data-slot": "description",
                                class: ui.value.description({ class: (_c2 = unref(props).ui) == null ? void 0 : _c2.description })
                              }, {
                                default: withCtx(() => [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])]),
                                _: 3
                              }, 8, ["class"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
                              renderSlot(_ctx.$slots, "actions"),
                              unref(props).close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose_default), {
                                key: 1,
                                "as-child": ""
                              }, {
                                default: withCtx(() => [renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                  var _a4;
                                  return [unref(props).close ? (openBlock(), createBlock(_sfc_main$1, mergeProps({
                                    key: 0,
                                    icon: unref(props).closeIcon || unref(appConfig).ui.icons.close,
                                    color: "neutral",
                                    variant: "ghost",
                                    "aria-label": unref(t)("slideover.close")
                                  }, typeof unref(props).close === "object" ? unref(props).close : {}, {
                                    "data-slot": "close",
                                    class: ui.value.close({ class: (_a4 = unref(props).ui) == null ? void 0 : _a4.close })
                                  }), null, 16, [
                                    "icon",
                                    "aria-label",
                                    "class"
                                  ])) : createCommentVNode("", true)];
                                })]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true)
                            ];
                          })], 2)) : createCommentVNode("", true),
                          createVNode("div", {
                            "data-slot": "body",
                            class: ui.value.body({ class: (_b2 = unref(props).ui) == null ? void 0 : _b2.body })
                          }, [renderSlot(_ctx.$slots, "body", { close })], 2),
                          !!slots.footer ? (openBlock(), createBlock("div", {
                            key: 1,
                            "data-slot": "footer",
                            class: ui.value.footer({ class: (_c = unref(props).ui) == null ? void 0 : _c.footer })
                          }, [renderSlot(_ctx.$slots, "footer", { close })], 2)) : createCommentVNode("", true)
                        ];
                      })]),
                      _: 2
                    }, 1040, [
                      "data-side",
                      "class",
                      "onEnter",
                      "onAfterEnter",
                      "onLeave",
                      "onAfterLeave"
                    ])];
                  }),
                  _: 2
                }, 1024)];
              }),
              _: 2
            }, _parent2, _scopeId));
          } else return [!!slots.default ? (openBlock(), createBlock(unref(DialogTrigger_default), {
            key: 0,
            "as-child": "",
            class: unref(props).class
          }, {
            default: withCtx(() => [renderSlot(_ctx.$slots, "default", { open })]),
            _: 2
          }, 1032, ["class"])) : createCommentVNode("", true), createVNode(unref(DialogPortal_default), mergeProps(unref(portalProps), { "force-mount": unref(portalProps).disabled && unref(props).unmountOnHide === false || void 0 }), {
            default: withCtx(() => [createVNode(unref(FieldGroupReset), null, {
              default: withCtx(() => {
                var _a, _b;
                return [unref(props).overlay ? (openBlock(), createBlock(unref(DialogOverlay_default), {
                  key: 0,
                  "data-slot": "overlay",
                  class: ui.value.overlay({ class: (_a = unref(props).ui) == null ? void 0 : _a.overlay })
                }, null, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(DialogContent_default), mergeProps({
                  "data-side": unref(props).side,
                  "data-slot": "content",
                  class: ui.value.content({ class: [!slots.default && unref(props).class, (_b = unref(props).ui) == null ? void 0 : _b.content] })
                }, contentProps.value, {
                  onEnter: ($event) => emits("enter"),
                  onAfterEnter: ($event) => emits("after:enter"),
                  onLeave: ($event) => emits("leave"),
                  onAfterLeave: ($event) => emits("after:leave")
                }, toHandlers(contentEvents.value)), {
                  default: withCtx(() => [!unref(props).title && !slots.title || !unref(props).description && !slots.description || !!slots.content ? (openBlock(), createBlock(unref(VisuallyHidden_default), { key: 0 }, {
                    default: withCtx(() => [!unref(props).title && !slots.title ? (openBlock(), createBlock(unref(DialogTitle_default), { key: 0 })) : !!slots.content ? (openBlock(), createBlock(unref(DialogTitle_default), { key: 1 }, {
                      default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
                      _: 3
                    })) : createCommentVNode("", true), !unref(props).description && !slots.description ? (openBlock(), createBlock(unref(DialogDescription_default), { key: 2 })) : !!slots.content ? (openBlock(), createBlock(unref(DialogDescription_default), { key: 3 }, {
                      default: withCtx(() => [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])]),
                      _: 3
                    })) : createCommentVNode("", true)]),
                    _: 3
                  })) : createCommentVNode("", true), renderSlot(_ctx.$slots, "content", { close }, () => {
                    var _a2, _b2, _c;
                    return [
                      !!slots.header || unref(props).title || !!slots.title || unref(props).description || !!slots.description || unref(props).close || !!slots.close ? (openBlock(), createBlock("div", {
                        key: 0,
                        "data-slot": "header",
                        class: ui.value.header({ class: (_a2 = unref(props).ui) == null ? void 0 : _a2.header })
                      }, [renderSlot(_ctx.$slots, "header", { close }, () => {
                        var _a3, _b3, _c2;
                        return [
                          unref(props).title || !!slots.title || unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
                            key: 0,
                            "data-slot": "wrapper",
                            class: ui.value.wrapper({ class: (_a3 = unref(props).ui) == null ? void 0 : _a3.wrapper })
                          }, [unref(props).title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle_default), {
                            key: 0,
                            "data-slot": "title",
                            class: ui.value.title({ class: (_b3 = unref(props).ui) == null ? void 0 : _b3.title })
                          }, {
                            default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
                            _: 3
                          }, 8, ["class"])) : createCommentVNode("", true), unref(props).description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription_default), {
                            key: 1,
                            "data-slot": "description",
                            class: ui.value.description({ class: (_c2 = unref(props).ui) == null ? void 0 : _c2.description })
                          }, {
                            default: withCtx(() => [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])]),
                            _: 3
                          }, 8, ["class"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
                          renderSlot(_ctx.$slots, "actions"),
                          unref(props).close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose_default), {
                            key: 1,
                            "as-child": ""
                          }, {
                            default: withCtx(() => [renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                              var _a4;
                              return [unref(props).close ? (openBlock(), createBlock(_sfc_main$1, mergeProps({
                                key: 0,
                                icon: unref(props).closeIcon || unref(appConfig).ui.icons.close,
                                color: "neutral",
                                variant: "ghost",
                                "aria-label": unref(t)("slideover.close")
                              }, typeof unref(props).close === "object" ? unref(props).close : {}, {
                                "data-slot": "close",
                                class: ui.value.close({ class: (_a4 = unref(props).ui) == null ? void 0 : _a4.close })
                              }), null, 16, [
                                "icon",
                                "aria-label",
                                "class"
                              ])) : createCommentVNode("", true)];
                            })]),
                            _: 2
                          }, 1024)) : createCommentVNode("", true)
                        ];
                      })], 2)) : createCommentVNode("", true),
                      createVNode("div", {
                        "data-slot": "body",
                        class: ui.value.body({ class: (_b2 = unref(props).ui) == null ? void 0 : _b2.body })
                      }, [renderSlot(_ctx.$slots, "body", { close })], 2),
                      !!slots.footer ? (openBlock(), createBlock("div", {
                        key: 1,
                        "data-slot": "footer",
                        class: ui.value.footer({ class: (_c = unref(props).ui) == null ? void 0 : _c.footer })
                      }, [renderSlot(_ctx.$slots, "footer", { close })], 2)) : createCommentVNode("", true)
                    ];
                  })]),
                  _: 2
                }, 1040, [
                  "data-side",
                  "class",
                  "onEnter",
                  "onAfterEnter",
                  "onLeave",
                  "onAfterLeave"
                ])];
              }),
              _: 2
            }, 1024)]),
            _: 2
          }, 1040, ["force-mount"])];
        }),
        _: 3
      }, _parent));
    };
  }
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Slideover.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Slideover-B0Jc8ALV.mjs.map
