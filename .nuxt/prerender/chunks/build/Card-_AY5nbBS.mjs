import { a as useComponentProps, b as useAppConfig, t as tv, P as Primitive } from '../virtual/entry.mjs';
import { useSlots, computed, unref, mergeProps, withCtx, openBlock, createBlock, renderSlot, createTextVNode, toDisplayString, createCommentVNode, useSSRContext } from 'file:///Users/ccci/Project/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate } from 'file:///Users/ccci/Project/node_modules/vue/server-renderer/index.mjs';

var virtual_nuxt__nuxt_2Fui_2Fcard_default = {
  "slots": {
    "root": "rounded-lg overflow-hidden",
    "header": "p-4 sm:px-6",
    "title": "text-highlighted font-semibold",
    "description": "mt-1 text-muted text-sm",
    "body": "p-4 sm:p-6",
    "footer": "p-4 sm:px-6"
  },
  "variants": { "variant": {
    "solid": {
      "root": "bg-inverted text-inverted",
      "title": "text-inverted",
      "description": "text-dimmed"
    },
    "outline": { "root": "bg-default ring ring-default divide-y divide-default" },
    "soft": { "root": "bg-elevated/50 divide-y divide-default" },
    "subtle": { "root": "bg-elevated/50 ring ring-default divide-y divide-default" }
  } },
  "defaultVariants": { "variant": "outline" }
};
var _sfc_main = {
  __name: "UCard",
  __ssrInlineRender: true,
  props: {
    as: {
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
    variant: {
      type: null,
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
    const props = useComponentProps("card", _props);
    const appConfig = useAppConfig();
    const ui = computed(() => {
      var _a;
      return tv({
        extend: virtual_nuxt__nuxt_2Fui_2Fcard_default,
        ...((_a = appConfig.ui) == null ? void 0 : _a.card) || {}
      })({ variant: props.variant });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: unref(props).as,
        "data-slot": "root",
        class: ui.value.root({ class: [(_a = unref(props).ui) == null ? void 0 : _a.root, unref(props).class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f;
          if (_push2) {
            if (!!slots.header || unref(props).title || !!slots.title || unref(props).description || !!slots.description) {
              _push2(`<div data-slot="header" class="${ssrRenderClass(ui.value.header({ class: (_a2 = unref(props).ui) == null ? void 0 : _a2.header }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "header", {}, () => {
                var _a3, _b2;
                if (unref(props).title || !!slots.title) {
                  _push2(`<div data-slot="title" class="${ssrRenderClass(ui.value.title({ class: (_a3 = unref(props).ui) == null ? void 0 : _a3.title }))}"${_scopeId}>`);
                  ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                    _push2(`${ssrInterpolate(unref(props).title)}`);
                  }, _push2, _parent2, _scopeId);
                  _push2(`</div>`);
                } else _push2(`<!---->`);
                if (unref(props).description || !!slots.description) {
                  _push2(`<div data-slot="description" class="${ssrRenderClass(ui.value.description({ class: (_b2 = unref(props).ui) == null ? void 0 : _b2.description }))}"${_scopeId}>`);
                  ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                    _push2(`${ssrInterpolate(unref(props).description)}`);
                  }, _push2, _parent2, _scopeId);
                  _push2(`</div>`);
                } else _push2(`<!---->`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else _push2(`<!---->`);
            if (!!slots.default) {
              _push2(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: (_b = unref(props).ui) == null ? void 0 : _b.body }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else _push2(`<!---->`);
            if (!!slots.footer) {
              _push2(`<div data-slot="footer" class="${ssrRenderClass(ui.value.footer({ class: (_c = unref(props).ui) == null ? void 0 : _c.footer }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else _push2(`<!---->`);
          } else return [
            !!slots.header || unref(props).title || !!slots.title || unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
              key: 0,
              "data-slot": "header",
              class: ui.value.header({ class: (_d = unref(props).ui) == null ? void 0 : _d.header })
            }, [renderSlot(_ctx.$slots, "header", {}, () => {
              var _a3, _b2;
              return [unref(props).title || !!slots.title ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "title",
                class: ui.value.title({ class: (_a3 = unref(props).ui) == null ? void 0 : _a3.title })
              }, [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])], 2)) : createCommentVNode("", true), unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
                key: 1,
                "data-slot": "description",
                class: ui.value.description({ class: (_b2 = unref(props).ui) == null ? void 0 : _b2.description })
              }, [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])], 2)) : createCommentVNode("", true)];
            })], 2)) : createCommentVNode("", true),
            !!slots.default ? (openBlock(), createBlock("div", {
              key: 1,
              "data-slot": "body",
              class: ui.value.body({ class: (_e = unref(props).ui) == null ? void 0 : _e.body })
            }, [renderSlot(_ctx.$slots, "default")], 2)) : createCommentVNode("", true),
            !!slots.footer ? (openBlock(), createBlock("div", {
              key: 2,
              "data-slot": "footer",
              class: ui.value.footer({ class: (_f = unref(props).ui) == null ? void 0 : _f.footer })
            }, [renderSlot(_ctx.$slots, "footer")], 2)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Card-_AY5nbBS.mjs.map
