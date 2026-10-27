import { a as useComponentProps, b as useAppConfig, r as resolveAs, t as tv, P as Primitive } from '../virtual/entry.mjs';
import { _ as _sfc_main$2 } from './Button-Cwxo7d33.mjs';
import { u as usePrefix, _ as _sfc_main$1 } from './site-BjEVYaKT.mjs';
import { useSlots, computed, unref, mergeProps, withCtx, renderSlot, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, createVNode, useSSRContext } from 'file:///Users/ccci/Project/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'file:///Users/ccci/Project/node_modules/vue/server-renderer/index.mjs';

var virtual_nuxt__nuxt_2Fui_2Fpage_hero_default = {
  "slots": {
    "root": "relative isolate",
    "container": "flex flex-col lg:grid py-24 sm:py-32 lg:py-40 gap-16 sm:gap-y-24",
    "wrapper": "",
    "header": "",
    "headline": "mb-4",
    "title": "text-5xl sm:text-7xl text-pretty tracking-tight font-bold text-highlighted",
    "description": "text-lg sm:text-xl/8 text-muted",
    "body": "mt-10",
    "footer": "mt-10",
    "links": "flex flex-wrap gap-x-6 gap-y-3"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "container": "lg:grid-cols-2 lg:items-center",
        "description": "text-pretty"
      },
      "vertical": {
        "container": "",
        "headline": "justify-center",
        "wrapper": "text-center",
        "description": "text-balance",
        "links": "justify-center"
      }
    },
    "reverse": { "true": { "wrapper": "order-last" } },
    "headline": { "true": { "headline": "font-semibold text-primary flex items-center gap-1.5" } },
    "title": { "true": { "description": "mt-6" } }
  }
};
var _sfc_main = {
  __name: "UPageHero",
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
    const props = useComponentProps("pageHero", _props);
    const appConfig = useAppConfig();
    const prefix = usePrefix();
    const as = computed(() => resolveAs(props.as, {
      root: "div",
      title: "h1"
    }));
    const ui = computed(() => {
      var _a;
      return tv({
        extend: virtual_nuxt__nuxt_2Fui_2Fpage_hero_default,
        ...((_a = appConfig.ui) == null ? void 0 : _a.pageHero) || {}
      })({
        orientation: props.orientation,
        reverse: props.reverse,
        title: !!props.title || !!slots.title
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
            _push2(ssrRenderComponent(_sfc_main$1, {
              "data-slot": "container",
              class: ui.value.container({ class: (_a2 = unref(props).ui) == null ? void 0 : _a2.container })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a3, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
                if (_push3) {
                  if (!!slots.header || unref(props).headline || !!slots.headline || unref(props).title || !!slots.title || unref(props).description || !!slots.description || !!slots.body || !!slots.footer || ((_a3 = unref(props).links) == null ? void 0 : _a3.length) || !!slots.links) {
                    _push3(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: (_b2 = unref(props).ui) == null ? void 0 : _b2.wrapper }))}"${_scopeId2}>`);
                    if (!!slots.header || unref(props).headline || !!slots.headline || unref(props).title || !!slots.title || unref(props).description || !!slots.description) {
                      _push3(`<div data-slot="header" class="${ssrRenderClass(ui.value.header({ class: (_c = unref(props).ui) == null ? void 0 : _c.header }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "header", {}, () => {
                        var _a4, _b3, _c2;
                        if (unref(props).headline || !!slots.headline) {
                          _push3(`<div data-slot="headline" class="${ssrRenderClass(ui.value.headline({
                            class: (_a4 = unref(props).ui) == null ? void 0 : _a4.headline,
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
                          class: ui.value.title({ class: (_b3 = unref(props).ui) == null ? void 0 : _b3.title })
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
                          _push3(`<div data-slot="description" class="${ssrRenderClass(ui.value.description({ class: (_c2 = unref(props).ui) == null ? void 0 : _c2.description }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                            _push3(`${ssrInterpolate(unref(props).description)}`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</div>`);
                        } else _push3(`<!---->`);
                      }, _push3, _parent3, _scopeId2);
                      _push3(`</div>`);
                    } else _push3(`<!---->`);
                    if (!!slots.body) {
                      _push3(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: (_d = unref(props).ui) == null ? void 0 : _d.body }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "body", {}, null, _push3, _parent3, _scopeId2);
                      _push3(`</div>`);
                    } else _push3(`<!---->`);
                    if (!!slots.footer || ((_e = unref(props).links) == null ? void 0 : _e.length) || !!slots.links) {
                      _push3(`<div data-slot="footer" class="${ssrRenderClass(ui.value.footer({ class: (_f = unref(props).ui) == null ? void 0 : _f.footer }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "footer", {}, () => {
                        var _a4, _b3;
                        if (((_a4 = unref(props).links) == null ? void 0 : _a4.length) || !!slots.links) {
                          _push3(`<div data-slot="links" class="${ssrRenderClass(ui.value.links({ class: (_b3 = unref(props).ui) == null ? void 0 : _b3.links }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "links", {}, () => {
                            _push3(`<!--[-->`);
                            ssrRenderList(unref(props).links, (link, index) => {
                              _push3(ssrRenderComponent(_sfc_main$2, mergeProps({
                                key: index,
                                size: "xl"
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
                } else return [!!slots.header || unref(props).headline || !!slots.headline || unref(props).title || !!slots.title || unref(props).description || !!slots.description || !!slots.body || !!slots.footer || ((_g = unref(props).links) == null ? void 0 : _g.length) || !!slots.links ? (openBlock(), createBlock("div", {
                  key: 0,
                  "data-slot": "wrapper",
                  class: ui.value.wrapper({ class: (_h = unref(props).ui) == null ? void 0 : _h.wrapper })
                }, [
                  !!slots.header || unref(props).headline || !!slots.headline || unref(props).title || !!slots.title || unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
                    key: 0,
                    "data-slot": "header",
                    class: ui.value.header({ class: (_i = unref(props).ui) == null ? void 0 : _i.header })
                  }, [renderSlot(_ctx.$slots, "header", {}, () => {
                    var _a4, _b3, _c2;
                    return [
                      unref(props).headline || !!slots.headline ? (openBlock(), createBlock("div", {
                        key: 0,
                        "data-slot": "headline",
                        class: ui.value.headline({
                          class: (_a4 = unref(props).ui) == null ? void 0 : _a4.headline,
                          headline: !slots.headline
                        })
                      }, [renderSlot(_ctx.$slots, "headline", {}, () => [createTextVNode(toDisplayString(unref(props).headline), 1)])], 2)) : createCommentVNode("", true),
                      unref(props).title || !!slots.title ? (openBlock(), createBlock(unref(Primitive), {
                        key: 1,
                        as: as.value.title,
                        "data-slot": "title",
                        class: ui.value.title({ class: (_b3 = unref(props).ui) == null ? void 0 : _b3.title })
                      }, {
                        default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
                        _: 3
                      }, 8, ["as", "class"])) : createCommentVNode("", true),
                      unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
                        key: 2,
                        "data-slot": "description",
                        class: ui.value.description({ class: (_c2 = unref(props).ui) == null ? void 0 : _c2.description })
                      }, [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])], 2)) : createCommentVNode("", true)
                    ];
                  })], 2)) : createCommentVNode("", true),
                  !!slots.body ? (openBlock(), createBlock("div", {
                    key: 1,
                    "data-slot": "body",
                    class: ui.value.body({ class: (_j = unref(props).ui) == null ? void 0 : _j.body })
                  }, [renderSlot(_ctx.$slots, "body")], 2)) : createCommentVNode("", true),
                  !!slots.footer || ((_k = unref(props).links) == null ? void 0 : _k.length) || !!slots.links ? (openBlock(), createBlock("div", {
                    key: 2,
                    "data-slot": "footer",
                    class: ui.value.footer({ class: (_l = unref(props).ui) == null ? void 0 : _l.footer })
                  }, [renderSlot(_ctx.$slots, "footer", {}, () => {
                    var _a4, _b3;
                    return [((_a4 = unref(props).links) == null ? void 0 : _a4.length) || !!slots.links ? (openBlock(), createBlock("div", {
                      key: 0,
                      "data-slot": "links",
                      class: ui.value.links({ class: (_b3 = unref(props).ui) == null ? void 0 : _b3.links })
                    }, [renderSlot(_ctx.$slots, "links", {}, () => [(openBlock(true), createBlock(Fragment, null, renderList(unref(props).links, (link, index) => {
                      return openBlock(), createBlock(_sfc_main$2, mergeProps({
                        key: index,
                        size: "xl"
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
            createVNode(_sfc_main$1, {
              "data-slot": "container",
              class: ui.value.container({ class: (_b = unref(props).ui) == null ? void 0 : _b.container })
            }, {
              default: withCtx(() => {
                var _a3, _b2, _c, _d, _e, _f;
                return [!!slots.header || unref(props).headline || !!slots.headline || unref(props).title || !!slots.title || unref(props).description || !!slots.description || !!slots.body || !!slots.footer || ((_a3 = unref(props).links) == null ? void 0 : _a3.length) || !!slots.links ? (openBlock(), createBlock("div", {
                  key: 0,
                  "data-slot": "wrapper",
                  class: ui.value.wrapper({ class: (_b2 = unref(props).ui) == null ? void 0 : _b2.wrapper })
                }, [
                  !!slots.header || unref(props).headline || !!slots.headline || unref(props).title || !!slots.title || unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
                    key: 0,
                    "data-slot": "header",
                    class: ui.value.header({ class: (_c = unref(props).ui) == null ? void 0 : _c.header })
                  }, [renderSlot(_ctx.$slots, "header", {}, () => {
                    var _a4, _b3, _c2;
                    return [
                      unref(props).headline || !!slots.headline ? (openBlock(), createBlock("div", {
                        key: 0,
                        "data-slot": "headline",
                        class: ui.value.headline({
                          class: (_a4 = unref(props).ui) == null ? void 0 : _a4.headline,
                          headline: !slots.headline
                        })
                      }, [renderSlot(_ctx.$slots, "headline", {}, () => [createTextVNode(toDisplayString(unref(props).headline), 1)])], 2)) : createCommentVNode("", true),
                      unref(props).title || !!slots.title ? (openBlock(), createBlock(unref(Primitive), {
                        key: 1,
                        as: as.value.title,
                        "data-slot": "title",
                        class: ui.value.title({ class: (_b3 = unref(props).ui) == null ? void 0 : _b3.title })
                      }, {
                        default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
                        _: 3
                      }, 8, ["as", "class"])) : createCommentVNode("", true),
                      unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
                        key: 2,
                        "data-slot": "description",
                        class: ui.value.description({ class: (_c2 = unref(props).ui) == null ? void 0 : _c2.description })
                      }, [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])], 2)) : createCommentVNode("", true)
                    ];
                  })], 2)) : createCommentVNode("", true),
                  !!slots.body ? (openBlock(), createBlock("div", {
                    key: 1,
                    "data-slot": "body",
                    class: ui.value.body({ class: (_d = unref(props).ui) == null ? void 0 : _d.body })
                  }, [renderSlot(_ctx.$slots, "body")], 2)) : createCommentVNode("", true),
                  !!slots.footer || ((_e = unref(props).links) == null ? void 0 : _e.length) || !!slots.links ? (openBlock(), createBlock("div", {
                    key: 2,
                    "data-slot": "footer",
                    class: ui.value.footer({ class: (_f = unref(props).ui) == null ? void 0 : _f.footer })
                  }, [renderSlot(_ctx.$slots, "footer", {}, () => {
                    var _a4, _b3;
                    return [((_a4 = unref(props).links) == null ? void 0 : _a4.length) || !!slots.links ? (openBlock(), createBlock("div", {
                      key: 0,
                      "data-slot": "links",
                      class: ui.value.links({ class: (_b3 = unref(props).ui) == null ? void 0 : _b3.links })
                    }, [renderSlot(_ctx.$slots, "links", {}, () => [(openBlock(true), createBlock(Fragment, null, renderList(unref(props).links, (link, index) => {
                      return openBlock(), createBlock(_sfc_main$2, mergeProps({
                        key: index,
                        size: "xl"
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
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/PageHero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=PageHero-Dbu4Xw3Y.mjs.map
