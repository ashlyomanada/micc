import { a as useComponentProps, b as useAppConfig, c as useForwardProps, t as tv, g as get, d as useForwardExpose, P as Primitive } from '../virtual/entry.mjs';
import { A as AccordionRoot_default, a as AccordionItem_default, b as AccordionTrigger_default, c as AccordionContent_default, i as injectAccordionRootContext, d as injectAccordionItemContext } from './AccordionTrigger-DAWEZoi3.mjs';
import { a as _sfc_main$5 } from './Button-Cwxo7d33.mjs';
import { useSlots, computed, unref, mergeProps, withCtx, renderSlot, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString, createVNode, Fragment, renderList, defineComponent, useSSRContext } from 'file:///Users/ccci/Project/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrRenderClass, ssrInterpolate } from 'file:///Users/ccci/Project/node_modules/vue/server-renderer/index.mjs';
import { reactivePick } from 'file:///Users/ccci/Project/node_modules/@vueuse/core/dist/index.js';

var AccordionHeader_default = /* @__PURE__ */ defineComponent({
  __name: "AccordionHeader",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "h3"
    }
  },
  setup(__props) {
    const props = __props;
    const rootContext = injectAccordionRootContext();
    const itemContext = injectAccordionItemContext();
    useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        as: props.as,
        "as-child": props.asChild,
        "data-orientation": unref(rootContext).orientation,
        "data-state": unref(itemContext).dataState.value,
        "data-disabled": unref(itemContext).dataDisabled.value
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "data-orientation",
        "data-state",
        "data-disabled"
      ]);
    };
  }
});
var virtual_nuxt__nuxt_2Fui_2Faccordion_default = {
  "slots": {
    "root": "w-full",
    "item": "border-b border-default last:border-b-0",
    "header": "flex",
    "trigger": "group flex-1 flex items-center gap-1.5 font-medium text-sm py-3.5 outline-primary/25 focus-visible:outline-3 min-w-0 rounded-md",
    "content": "data-[state=open]:animate-[accordion-down_200ms_var(--ease-out)] data-[state=closed]:animate-[accordion-up_200ms_var(--ease-out)] data-[state=closed]:overflow-hidden focus:outline-none",
    "body": "text-sm pb-3.5",
    "leadingIcon": "shrink-0 size-5",
    "trailingIcon": "shrink-0 size-5 ms-auto group-data-[state=open]:rotate-180 transition-transform duration-200 ease-out motion-reduce:transition-none",
    "label": "text-start break-words"
  },
  "variants": { "disabled": { "true": { "trigger": "cursor-not-allowed opacity-75" } } }
};
var _sfc_main = {
  __name: "UAccordion",
  __ssrInlineRender: true,
  props: {
    as: {
      type: null,
      required: false
    },
    items: {
      type: Array,
      required: false
    },
    trailingIcon: {
      type: null,
      required: false
    },
    valueKey: {
      type: null,
      required: false,
      default: "value"
    },
    labelKey: {
      type: null,
      required: false,
      default: "label"
    },
    class: {
      type: null,
      required: false
    },
    ui: {
      type: Object,
      required: false
    },
    collapsible: {
      type: Boolean,
      required: false,
      default: true
    },
    defaultValue: {
      type: null,
      required: false
    },
    modelValue: {
      type: null,
      required: false
    },
    type: {
      type: String,
      required: false,
      default: "single"
    },
    disabled: {
      type: Boolean,
      required: false
    },
    unmountOnHide: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const _props = __props;
    const emits = __emit;
    const slots = useSlots();
    const props = useComponentProps("accordion", _props);
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "as", "collapsible", "defaultValue", "disabled", "modelValue", "unmountOnHide"), emits);
    const ui = computed(() => {
      var _a;
      return tv({
        extend: virtual_nuxt__nuxt_2Fui_2Faccordion_default,
        ...((_a = appConfig.ui) == null ? void 0 : _a.accordion) || {}
      })({ disabled: props.disabled });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(AccordionRoot_default), mergeProps(unref(rootProps), {
        type: unref(props).type,
        "data-slot": "root",
        class: ui.value.root({ class: [(_a = unref(props).ui) == null ? void 0 : _a.root, unref(props).class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(props).items, (item, index) => {
              var _a2, _b, _c, _d;
              _push2(ssrRenderComponent(unref(AccordionItem_default), {
                key: (_a2 = unref(get)(item, unref(props).valueKey)) != null ? _a2 : index,
                value: (_b = unref(get)(item, unref(props).valueKey)) != null ? _b : String(index),
                disabled: item.disabled,
                "data-slot": "item",
                class: ui.value.item({ class: [
                  (_c = unref(props).ui) == null ? void 0 : _c.item,
                  (_d = item.ui) == null ? void 0 : _d.item,
                  item.class
                ] })
              }, {
                default: withCtx(({ open }, _push3, _parent3, _scopeId2) => {
                  var _a3, _b2, _c2, _d2, _e, _f, _g, _h;
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(AccordionHeader_default), {
                      as: "div",
                      "data-slot": "header",
                      class: ui.value.header({ class: [(_a3 = unref(props).ui) == null ? void 0 : _a3.header, (_b2 = item.ui) == null ? void 0 : _b2.header] })
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        var _a4, _b3, _c3, _d3;
                        if (_push4) _push4(ssrRenderComponent(unref(AccordionTrigger_default), {
                          "data-slot": "trigger",
                          class: ui.value.trigger({
                            class: [(_a4 = unref(props).ui) == null ? void 0 : _a4.trigger, (_b3 = item.ui) == null ? void 0 : _b3.trigger],
                            disabled: item.disabled
                          })
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            var _a5, _b4, _c4, _d4;
                            if (_push5) {
                              ssrRenderSlot(_ctx.$slots, "leading", {
                                item,
                                index,
                                open,
                                ui: ui.value
                              }, () => {
                                var _a6, _b5;
                                if (item.icon) _push5(ssrRenderComponent(_sfc_main$5, {
                                  name: item.icon,
                                  "data-slot": "leadingIcon",
                                  class: ui.value.leadingIcon({ class: [(_a6 = unref(props).ui) == null ? void 0 : _a6.leadingIcon, (_b5 = item == null ? void 0 : item.ui) == null ? void 0 : _b5.leadingIcon] })
                                }, null, _parent5, _scopeId4));
                                else _push5(`<!---->`);
                              }, _push5, _parent5, _scopeId4);
                              if (unref(get)(item, unref(props).labelKey) || !!slots.default) {
                                _push5(`<span data-slot="label" class="${ssrRenderClass(ui.value.label({ class: [(_a5 = unref(props).ui) == null ? void 0 : _a5.label, (_b4 = item.ui) == null ? void 0 : _b4.label] }))}"${_scopeId4}>`);
                                ssrRenderSlot(_ctx.$slots, "default", {
                                  item,
                                  index,
                                  open
                                }, () => {
                                  _push5(`${ssrInterpolate(unref(get)(item, unref(props).labelKey))}`);
                                }, _push5, _parent5, _scopeId4);
                                _push5(`</span>`);
                              } else _push5(`<!---->`);
                              ssrRenderSlot(_ctx.$slots, "trailing", {
                                item,
                                index,
                                open,
                                ui: ui.value
                              }, () => {
                                var _a6, _b5;
                                _push5(ssrRenderComponent(_sfc_main$5, {
                                  name: item.trailingIcon || unref(props).trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                  "data-slot": "trailingIcon",
                                  class: ui.value.trailingIcon({ class: [(_a6 = unref(props).ui) == null ? void 0 : _a6.trailingIcon, (_b5 = item.ui) == null ? void 0 : _b5.trailingIcon] })
                                }, null, _parent5, _scopeId4));
                              }, _push5, _parent5, _scopeId4);
                            } else return [
                              renderSlot(_ctx.$slots, "leading", {
                                item,
                                index,
                                open,
                                ui: ui.value
                              }, () => {
                                var _a6, _b5;
                                return [item.icon ? (openBlock(), createBlock(_sfc_main$5, {
                                  key: 0,
                                  name: item.icon,
                                  "data-slot": "leadingIcon",
                                  class: ui.value.leadingIcon({ class: [(_a6 = unref(props).ui) == null ? void 0 : _a6.leadingIcon, (_b5 = item == null ? void 0 : item.ui) == null ? void 0 : _b5.leadingIcon] })
                                }, null, 8, ["name", "class"])) : createCommentVNode("", true)];
                              }),
                              unref(get)(item, unref(props).labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                                key: 0,
                                "data-slot": "label",
                                class: ui.value.label({ class: [(_c4 = unref(props).ui) == null ? void 0 : _c4.label, (_d4 = item.ui) == null ? void 0 : _d4.label] })
                              }, [renderSlot(_ctx.$slots, "default", {
                                item,
                                index,
                                open
                              }, () => [createTextVNode(toDisplayString(unref(get)(item, unref(props).labelKey)), 1)])], 2)) : createCommentVNode("", true),
                              renderSlot(_ctx.$slots, "trailing", {
                                item,
                                index,
                                open,
                                ui: ui.value
                              }, () => {
                                var _a6, _b5;
                                return [createVNode(_sfc_main$5, {
                                  name: item.trailingIcon || unref(props).trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                  "data-slot": "trailingIcon",
                                  class: ui.value.trailingIcon({ class: [(_a6 = unref(props).ui) == null ? void 0 : _a6.trailingIcon, (_b5 = item.ui) == null ? void 0 : _b5.trailingIcon] })
                                }, null, 8, ["name", "class"])];
                              })
                            ];
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        else return [createVNode(unref(AccordionTrigger_default), {
                          "data-slot": "trigger",
                          class: ui.value.trigger({
                            class: [(_c3 = unref(props).ui) == null ? void 0 : _c3.trigger, (_d3 = item.ui) == null ? void 0 : _d3.trigger],
                            disabled: item.disabled
                          })
                        }, {
                          default: withCtx(() => {
                            var _a5, _b4;
                            return [
                              renderSlot(_ctx.$slots, "leading", {
                                item,
                                index,
                                open,
                                ui: ui.value
                              }, () => {
                                var _a6, _b5;
                                return [item.icon ? (openBlock(), createBlock(_sfc_main$5, {
                                  key: 0,
                                  name: item.icon,
                                  "data-slot": "leadingIcon",
                                  class: ui.value.leadingIcon({ class: [(_a6 = unref(props).ui) == null ? void 0 : _a6.leadingIcon, (_b5 = item == null ? void 0 : item.ui) == null ? void 0 : _b5.leadingIcon] })
                                }, null, 8, ["name", "class"])) : createCommentVNode("", true)];
                              }),
                              unref(get)(item, unref(props).labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                                key: 0,
                                "data-slot": "label",
                                class: ui.value.label({ class: [(_a5 = unref(props).ui) == null ? void 0 : _a5.label, (_b4 = item.ui) == null ? void 0 : _b4.label] })
                              }, [renderSlot(_ctx.$slots, "default", {
                                item,
                                index,
                                open
                              }, () => [createTextVNode(toDisplayString(unref(get)(item, unref(props).labelKey)), 1)])], 2)) : createCommentVNode("", true),
                              renderSlot(_ctx.$slots, "trailing", {
                                item,
                                index,
                                open,
                                ui: ui.value
                              }, () => {
                                var _a6, _b5;
                                return [createVNode(_sfc_main$5, {
                                  name: item.trailingIcon || unref(props).trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                  "data-slot": "trailingIcon",
                                  class: ui.value.trailingIcon({ class: [(_a6 = unref(props).ui) == null ? void 0 : _a6.trailingIcon, (_b5 = item.ui) == null ? void 0 : _b5.trailingIcon] })
                                }, null, 8, ["name", "class"])];
                              })
                            ];
                          }),
                          _: 2
                        }, 1032, ["class"])];
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    if (item.content || !!slots.content || item.slot && !!slots[item.slot] || !!slots.body || item.slot && !!slots[`${item.slot}-body`]) _push3(ssrRenderComponent(unref(AccordionContent_default), {
                      "data-slot": "content",
                      class: ui.value.content({ class: [(_c2 = unref(props).ui) == null ? void 0 : _c2.content, (_d2 = item.ui) == null ? void 0 : _d2.content] })
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) ssrRenderSlot(_ctx.$slots, item.slot || "content", {
                          item,
                          index,
                          open,
                          ui: ui.value
                        }, () => {
                          var _a4, _b3;
                          _push4(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: [(_a4 = unref(props).ui) == null ? void 0 : _a4.body, (_b3 = item.ui) == null ? void 0 : _b3.body] }))}"${_scopeId3}>`);
                          ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                            item,
                            index,
                            open,
                            ui: ui.value
                          }, () => {
                            _push4(`${ssrInterpolate(item.content)}`);
                          }, _push4, _parent4, _scopeId3);
                          _push4(`</div>`);
                        }, _push4, _parent4, _scopeId3);
                        else return [renderSlot(_ctx.$slots, item.slot || "content", {
                          item,
                          index,
                          open,
                          ui: ui.value
                        }, () => {
                          var _a4, _b3;
                          return [createVNode("div", {
                            "data-slot": "body",
                            class: ui.value.body({ class: [(_a4 = unref(props).ui) == null ? void 0 : _a4.body, (_b3 = item.ui) == null ? void 0 : _b3.body] })
                          }, [renderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                            item,
                            index,
                            open,
                            ui: ui.value
                          }, () => [createTextVNode(toDisplayString(item.content), 1)])], 2)];
                        })];
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    else _push3(`<!---->`);
                  } else return [createVNode(unref(AccordionHeader_default), {
                    as: "div",
                    "data-slot": "header",
                    class: ui.value.header({ class: [(_e = unref(props).ui) == null ? void 0 : _e.header, (_f = item.ui) == null ? void 0 : _f.header] })
                  }, {
                    default: withCtx(() => {
                      var _a4, _b3;
                      return [createVNode(unref(AccordionTrigger_default), {
                        "data-slot": "trigger",
                        class: ui.value.trigger({
                          class: [(_a4 = unref(props).ui) == null ? void 0 : _a4.trigger, (_b3 = item.ui) == null ? void 0 : _b3.trigger],
                          disabled: item.disabled
                        })
                      }, {
                        default: withCtx(() => {
                          var _a5, _b4;
                          return [
                            renderSlot(_ctx.$slots, "leading", {
                              item,
                              index,
                              open,
                              ui: ui.value
                            }, () => {
                              var _a6, _b5;
                              return [item.icon ? (openBlock(), createBlock(_sfc_main$5, {
                                key: 0,
                                name: item.icon,
                                "data-slot": "leadingIcon",
                                class: ui.value.leadingIcon({ class: [(_a6 = unref(props).ui) == null ? void 0 : _a6.leadingIcon, (_b5 = item == null ? void 0 : item.ui) == null ? void 0 : _b5.leadingIcon] })
                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)];
                            }),
                            unref(get)(item, unref(props).labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                              key: 0,
                              "data-slot": "label",
                              class: ui.value.label({ class: [(_a5 = unref(props).ui) == null ? void 0 : _a5.label, (_b4 = item.ui) == null ? void 0 : _b4.label] })
                            }, [renderSlot(_ctx.$slots, "default", {
                              item,
                              index,
                              open
                            }, () => [createTextVNode(toDisplayString(unref(get)(item, unref(props).labelKey)), 1)])], 2)) : createCommentVNode("", true),
                            renderSlot(_ctx.$slots, "trailing", {
                              item,
                              index,
                              open,
                              ui: ui.value
                            }, () => {
                              var _a6, _b5;
                              return [createVNode(_sfc_main$5, {
                                name: item.trailingIcon || unref(props).trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                "data-slot": "trailingIcon",
                                class: ui.value.trailingIcon({ class: [(_a6 = unref(props).ui) == null ? void 0 : _a6.trailingIcon, (_b5 = item.ui) == null ? void 0 : _b5.trailingIcon] })
                              }, null, 8, ["name", "class"])];
                            })
                          ];
                        }),
                        _: 2
                      }, 1032, ["class"])];
                    }),
                    _: 2
                  }, 1032, ["class"]), item.content || !!slots.content || item.slot && !!slots[item.slot] || !!slots.body || item.slot && !!slots[`${item.slot}-body`] ? (openBlock(), createBlock(unref(AccordionContent_default), {
                    key: 0,
                    "data-slot": "content",
                    class: ui.value.content({ class: [(_g = unref(props).ui) == null ? void 0 : _g.content, (_h = item.ui) == null ? void 0 : _h.content] })
                  }, {
                    default: withCtx(() => [renderSlot(_ctx.$slots, item.slot || "content", {
                      item,
                      index,
                      open,
                      ui: ui.value
                    }, () => {
                      var _a4, _b3;
                      return [createVNode("div", {
                        "data-slot": "body",
                        class: ui.value.body({ class: [(_a4 = unref(props).ui) == null ? void 0 : _a4.body, (_b3 = item.ui) == null ? void 0 : _b3.body] })
                      }, [renderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                        item,
                        index,
                        open,
                        ui: ui.value
                      }, () => [createTextVNode(toDisplayString(item.content), 1)])], 2)];
                    })]),
                    _: 2
                  }, 1032, ["class"])) : createCommentVNode("", true)];
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else return [(openBlock(true), createBlock(Fragment, null, renderList(unref(props).items, (item, index) => {
            var _a2, _b, _c, _d;
            return openBlock(), createBlock(unref(AccordionItem_default), {
              key: (_a2 = unref(get)(item, unref(props).valueKey)) != null ? _a2 : index,
              value: (_b = unref(get)(item, unref(props).valueKey)) != null ? _b : String(index),
              disabled: item.disabled,
              "data-slot": "item",
              class: ui.value.item({ class: [
                (_c = unref(props).ui) == null ? void 0 : _c.item,
                (_d = item.ui) == null ? void 0 : _d.item,
                item.class
              ] })
            }, {
              default: withCtx(({ open }) => {
                var _a3, _b2, _c2, _d2;
                return [createVNode(unref(AccordionHeader_default), {
                  as: "div",
                  "data-slot": "header",
                  class: ui.value.header({ class: [(_a3 = unref(props).ui) == null ? void 0 : _a3.header, (_b2 = item.ui) == null ? void 0 : _b2.header] })
                }, {
                  default: withCtx(() => {
                    var _a4, _b3;
                    return [createVNode(unref(AccordionTrigger_default), {
                      "data-slot": "trigger",
                      class: ui.value.trigger({
                        class: [(_a4 = unref(props).ui) == null ? void 0 : _a4.trigger, (_b3 = item.ui) == null ? void 0 : _b3.trigger],
                        disabled: item.disabled
                      })
                    }, {
                      default: withCtx(() => {
                        var _a5, _b4;
                        return [
                          renderSlot(_ctx.$slots, "leading", {
                            item,
                            index,
                            open,
                            ui: ui.value
                          }, () => {
                            var _a6, _b5;
                            return [item.icon ? (openBlock(), createBlock(_sfc_main$5, {
                              key: 0,
                              name: item.icon,
                              "data-slot": "leadingIcon",
                              class: ui.value.leadingIcon({ class: [(_a6 = unref(props).ui) == null ? void 0 : _a6.leadingIcon, (_b5 = item == null ? void 0 : item.ui) == null ? void 0 : _b5.leadingIcon] })
                            }, null, 8, ["name", "class"])) : createCommentVNode("", true)];
                          }),
                          unref(get)(item, unref(props).labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                            key: 0,
                            "data-slot": "label",
                            class: ui.value.label({ class: [(_a5 = unref(props).ui) == null ? void 0 : _a5.label, (_b4 = item.ui) == null ? void 0 : _b4.label] })
                          }, [renderSlot(_ctx.$slots, "default", {
                            item,
                            index,
                            open
                          }, () => [createTextVNode(toDisplayString(unref(get)(item, unref(props).labelKey)), 1)])], 2)) : createCommentVNode("", true),
                          renderSlot(_ctx.$slots, "trailing", {
                            item,
                            index,
                            open,
                            ui: ui.value
                          }, () => {
                            var _a6, _b5;
                            return [createVNode(_sfc_main$5, {
                              name: item.trailingIcon || unref(props).trailingIcon || unref(appConfig).ui.icons.chevronDown,
                              "data-slot": "trailingIcon",
                              class: ui.value.trailingIcon({ class: [(_a6 = unref(props).ui) == null ? void 0 : _a6.trailingIcon, (_b5 = item.ui) == null ? void 0 : _b5.trailingIcon] })
                            }, null, 8, ["name", "class"])];
                          })
                        ];
                      }),
                      _: 2
                    }, 1032, ["class"])];
                  }),
                  _: 2
                }, 1032, ["class"]), item.content || !!slots.content || item.slot && !!slots[item.slot] || !!slots.body || item.slot && !!slots[`${item.slot}-body`] ? (openBlock(), createBlock(unref(AccordionContent_default), {
                  key: 0,
                  "data-slot": "content",
                  class: ui.value.content({ class: [(_c2 = unref(props).ui) == null ? void 0 : _c2.content, (_d2 = item.ui) == null ? void 0 : _d2.content] })
                }, {
                  default: withCtx(() => [renderSlot(_ctx.$slots, item.slot || "content", {
                    item,
                    index,
                    open,
                    ui: ui.value
                  }, () => {
                    var _a4, _b3;
                    return [createVNode("div", {
                      "data-slot": "body",
                      class: ui.value.body({ class: [(_a4 = unref(props).ui) == null ? void 0 : _a4.body, (_b3 = item.ui) == null ? void 0 : _b3.body] })
                    }, [renderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                      item,
                      index,
                      open,
                      ui: ui.value
                    }, () => [createTextVNode(toDisplayString(item.content), 1)])], 2)];
                  })]),
                  _: 2
                }, 1032, ["class"])) : createCommentVNode("", true)];
              }),
              _: 2
            }, 1032, [
              "value",
              "disabled",
              "class"
            ]);
          }), 128))];
        }),
        _: 3
      }, _parent));
    };
  }
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Accordion.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Accordion-44u7Jnkk.mjs.map
