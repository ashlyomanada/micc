import { a as useComponentProps, b as useAppConfig, t as tv, P as Primitive } from '../virtual/entry.mjs';
import { u as useFieldGroup, f as useComponentIcons, a as _sfc_main$5, c as _sfc_main$3 } from './Button-Cwxo7d33.mjs';
import { useSlots, computed, unref, mergeProps, withCtx, renderSlot, openBlock, createBlock, createCommentVNode, toDisplayString, useSSRContext } from 'file:///Users/ccci/Project/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrInterpolate } from 'file:///Users/ccci/Project/node_modules/vue/server-renderer/index.mjs';

var virtual_nuxt__nuxt_2Fui_2Fbadge_default = {
  "slots": {
    "base": "font-medium inline-flex items-center",
    "label": "truncate",
    "leadingIcon": "shrink-0",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailingIcon": "shrink-0"
  },
  "variants": {
    "fieldGroup": {
      "horizontal": "not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]",
      "vertical": "not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]"
    },
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "variant": {
      "solid": "",
      "outline": "",
      "soft": "",
      "subtle": ""
    },
    "size": {
      "xs": {
        "base": "text-[8px]/3 px-1 py-0.5 gap-1 rounded-sm",
        "leadingIcon": "size-3",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-3"
      },
      "sm": {
        "base": "text-[10px]/3 px-1.5 py-1 gap-1 rounded-sm",
        "leadingIcon": "size-3",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-3"
      },
      "md": {
        "base": "text-xs px-2 py-1 gap-1 rounded-md",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "lg": {
        "base": "text-sm px-2 py-1 gap-1.5 rounded-md",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "xl": {
        "base": "text-base px-2.5 py-1 gap-1.5 rounded-md",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-6"
      }
    },
    "square": { "true": "" }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "variant": "solid",
      "class": "bg-primary text-inverted"
    },
    {
      "color": "secondary",
      "variant": "solid",
      "class": "bg-secondary text-inverted"
    },
    {
      "color": "success",
      "variant": "solid",
      "class": "bg-success text-inverted"
    },
    {
      "color": "info",
      "variant": "solid",
      "class": "bg-info text-inverted"
    },
    {
      "color": "warning",
      "variant": "solid",
      "class": "bg-warning text-inverted"
    },
    {
      "color": "error",
      "variant": "solid",
      "class": "bg-error text-inverted"
    },
    {
      "color": "primary",
      "variant": "outline",
      "class": "text-primary ring ring-inset ring-primary/50"
    },
    {
      "color": "secondary",
      "variant": "outline",
      "class": "text-secondary ring ring-inset ring-secondary/50"
    },
    {
      "color": "success",
      "variant": "outline",
      "class": "text-success ring ring-inset ring-success/50"
    },
    {
      "color": "info",
      "variant": "outline",
      "class": "text-info ring ring-inset ring-info/50"
    },
    {
      "color": "warning",
      "variant": "outline",
      "class": "text-warning ring ring-inset ring-warning/50"
    },
    {
      "color": "error",
      "variant": "outline",
      "class": "text-error ring ring-inset ring-error/50"
    },
    {
      "color": "primary",
      "variant": "soft",
      "class": "bg-primary/10 text-primary"
    },
    {
      "color": "secondary",
      "variant": "soft",
      "class": "bg-secondary/10 text-secondary"
    },
    {
      "color": "success",
      "variant": "soft",
      "class": "bg-success/10 text-success"
    },
    {
      "color": "info",
      "variant": "soft",
      "class": "bg-info/10 text-info"
    },
    {
      "color": "warning",
      "variant": "soft",
      "class": "bg-warning/10 text-warning"
    },
    {
      "color": "error",
      "variant": "soft",
      "class": "bg-error/10 text-error"
    },
    {
      "color": "primary",
      "variant": "subtle",
      "class": "bg-primary/10 text-primary ring ring-inset ring-primary/25"
    },
    {
      "color": "secondary",
      "variant": "subtle",
      "class": "bg-secondary/10 text-secondary ring ring-inset ring-secondary/25"
    },
    {
      "color": "success",
      "variant": "subtle",
      "class": "bg-success/10 text-success ring ring-inset ring-success/25"
    },
    {
      "color": "info",
      "variant": "subtle",
      "class": "bg-info/10 text-info ring ring-inset ring-info/25"
    },
    {
      "color": "warning",
      "variant": "subtle",
      "class": "bg-warning/10 text-warning ring ring-inset ring-warning/25"
    },
    {
      "color": "error",
      "variant": "subtle",
      "class": "bg-error/10 text-error ring ring-inset ring-error/25"
    },
    {
      "color": "neutral",
      "variant": "solid",
      "class": "text-inverted bg-inverted"
    },
    {
      "color": "neutral",
      "variant": "outline",
      "class": "ring ring-inset ring-accented text-default bg-default"
    },
    {
      "color": "neutral",
      "variant": "soft",
      "class": "text-default bg-elevated"
    },
    {
      "color": "neutral",
      "variant": "subtle",
      "class": "ring ring-inset ring-accented text-default bg-elevated"
    },
    {
      "size": "xs",
      "square": true,
      "class": "p-0.5"
    },
    {
      "size": "sm",
      "square": true,
      "class": "p-1"
    },
    {
      "size": "md",
      "square": true,
      "class": "p-1"
    },
    {
      "size": "lg",
      "square": true,
      "class": "p-1"
    },
    {
      "size": "xl",
      "square": true,
      "class": "p-1"
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "variant": "solid",
    "size": "md"
  }
};
var _sfc_main = {
  __name: "UBadge",
  __ssrInlineRender: true,
  props: {
    as: {
      type: null,
      required: false,
      default: "span"
    },
    label: {
      type: [String, Number],
      required: false
    },
    color: {
      type: null,
      required: false
    },
    variant: {
      type: null,
      required: false
    },
    size: {
      type: null,
      required: false
    },
    square: {
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
    },
    icon: {
      type: null,
      required: false
    },
    avatar: {
      type: Object,
      required: false
    },
    leading: {
      type: Boolean,
      required: false
    },
    leadingIcon: {
      type: null,
      required: false
    },
    trailing: {
      type: Boolean,
      required: false
    },
    trailingIcon: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    const _props = __props;
    const slots = useSlots();
    const props = useComponentProps("badge", _props);
    const appConfig = useAppConfig();
    const { orientation, size: fieldGroupSize } = useFieldGroup(_props);
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props);
    const ui = computed(() => {
      var _a, _b;
      return tv({
        extend: virtual_nuxt__nuxt_2Fui_2Fbadge_default,
        ...((_a = appConfig.ui) == null ? void 0 : _a.badge) || {}
      })({
        color: props.color,
        variant: props.variant,
        size: (_b = fieldGroupSize.value) != null ? _b : props.size,
        square: props.square || !slots.default && !props.label,
        fieldGroup: orientation.value
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: unref(props).as,
        "data-slot": "base",
        class: ui.value.base({ class: [(_a = unref(props).ui) == null ? void 0 : _a.base, unref(props).class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
              var _a2, _b, _c;
              if (unref(isLeading) && unref(leadingIconName)) _push2(ssrRenderComponent(_sfc_main$5, {
                name: unref(leadingIconName),
                "data-slot": "leadingIcon",
                class: ui.value.leadingIcon({ class: (_a2 = unref(props).ui) == null ? void 0 : _a2.leadingIcon })
              }, null, _parent2, _scopeId));
              else if (!!unref(props).avatar) _push2(ssrRenderComponent(_sfc_main$3, mergeProps({ size: ((_b = unref(props).ui) == null ? void 0 : _b.leadingAvatarSize) || ui.value.leadingAvatarSize() }, unref(props).avatar, {
                "data-slot": "leadingAvatar",
                class: ui.value.leadingAvatar({ class: (_c = unref(props).ui) == null ? void 0 : _c.leadingAvatar })
              }), null, _parent2, _scopeId));
              else _push2(`<!---->`);
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "default", { ui: ui.value }, () => {
              var _a2;
              if (unref(props).label !== void 0 && unref(props).label !== null) _push2(`<span data-slot="label" class="${ssrRenderClass(ui.value.label({ class: (_a2 = unref(props).ui) == null ? void 0 : _a2.label }))}"${_scopeId}>${ssrInterpolate(unref(props).label)}</span>`);
              else _push2(`<!---->`);
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "trailing", { ui: ui.value }, () => {
              var _a2;
              if (unref(isTrailing) && unref(trailingIconName)) _push2(ssrRenderComponent(_sfc_main$5, {
                name: unref(trailingIconName),
                "data-slot": "trailingIcon",
                class: ui.value.trailingIcon({ class: (_a2 = unref(props).ui) == null ? void 0 : _a2.trailingIcon })
              }, null, _parent2, _scopeId));
              else _push2(`<!---->`);
            }, _push2, _parent2, _scopeId);
          } else return [
            renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
              var _a2, _b, _c;
              return [unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$5, {
                key: 0,
                name: unref(leadingIconName),
                "data-slot": "leadingIcon",
                class: ui.value.leadingIcon({ class: (_a2 = unref(props).ui) == null ? void 0 : _a2.leadingIcon })
              }, null, 8, ["name", "class"])) : !!unref(props).avatar ? (openBlock(), createBlock(_sfc_main$3, mergeProps({
                key: 1,
                size: ((_b = unref(props).ui) == null ? void 0 : _b.leadingAvatarSize) || ui.value.leadingAvatarSize()
              }, unref(props).avatar, {
                "data-slot": "leadingAvatar",
                class: ui.value.leadingAvatar({ class: (_c = unref(props).ui) == null ? void 0 : _c.leadingAvatar })
              }), null, 16, ["size", "class"])) : createCommentVNode("", true)];
            }),
            renderSlot(_ctx.$slots, "default", { ui: ui.value }, () => {
              var _a2;
              return [unref(props).label !== void 0 && unref(props).label !== null ? (openBlock(), createBlock("span", {
                key: 0,
                "data-slot": "label",
                class: ui.value.label({ class: (_a2 = unref(props).ui) == null ? void 0 : _a2.label })
              }, toDisplayString(unref(props).label), 3)) : createCommentVNode("", true)];
            }),
            renderSlot(_ctx.$slots, "trailing", { ui: ui.value }, () => {
              var _a2;
              return [unref(isTrailing) && unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$5, {
                key: 0,
                name: unref(trailingIconName),
                "data-slot": "trailingIcon",
                class: ui.value.trailingIcon({ class: (_a2 = unref(props).ui) == null ? void 0 : _a2.trailingIcon })
              }, null, 8, ["name", "class"])) : createCommentVNode("", true)];
            })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Badge.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Badge-DnzpF3wC.mjs.map
