import { _ as _plugin_vue_export_helper_default, q as useRoute$1, a as useComponentProps, f as useLocale, b as useAppConfig, e as getSlotChildrenText, t as tv, P as Primitive, c as useForwardProps, s as isArrayOfArray, g as get, d as useForwardExpose, h as useCollection, p as VisuallyHidden_default, v as usePortal, w as injectTooltipProviderContext, n as createContext, o as getActiveElement, T as Teleport_default, x as useHead, y as useForwardProps$1, z as useEmitAsProps } from '../virtual/entry.mjs';
import { n as _sfc_main$8, r as pointerDownOutside, d as DismissableLayer_default, h as useBodyScrollLock, m as useHideOthers, u as FocusScope_default } from './Modal-B3gTgqQa.mjs';
import { b as AccordionTrigger_default, a as AccordionItem_default, c as AccordionContent_default, A as AccordionRoot_default, u as useDirection, e as useArrowNavigation } from './AccordionTrigger-DAWEZoi3.mjs';
import { u as useId$1 } from './useId-BZnJFoR8.mjs';
import { P as Presence_default } from './Presence-wbRA2BG8.mjs';
import { _ as _sfc_main$6, b as _sfc_main$1$1, c as _sfc_main$3$1, d as _sfc_main$4$1, a as _sfc_main$5$1, p as pickLinkProps, e as _sfc_main$2$1, F as FieldGroupReset } from './Button-Cwxo7d33.mjs';
import { N as NuxtLink } from './nuxt-link-C7rfVfaB.mjs';
import { s as site, _ as _sfc_main$7, u as usePrefix } from './site-BjEVYaKT.mjs';
import { _ as _sfc_main$9 } from './Badge-DnzpF3wC.mjs';
import { defineComponent, ref, computed, watch, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, isRef, useSlots, useModel, toRef, renderSlot, mergeModels, resolveDynamicComponent, defineAsyncComponent, toValue, withKeys, createElementBlock, toHandlers, Teleport, toRefs, watchEffect, nextTick, normalizeProps, guardReactiveProps, getCurrentInstance, shallowRef, normalizeStyle, withModifiers, watchPostEffect, withMemo, mergeDefaults, useSSRContext } from 'file:///Users/ccci/Project/node_modules/vue/index.mjs';
import { defu } from 'file:///Users/ccci/Project/node_modules/defu/dist/defu.mjs';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass, ssrRenderVNode } from 'file:///Users/ccci/Project/node_modules/vue/server-renderer/index.mjs';
import { createReusableTemplate, reactivePick, refAutoReset, useVModel, useDebounceFn, useEventListener, useResizeObserver, unrefElement, useMounted, useTimeoutFn, createSharedComposable } from 'file:///Users/ccci/Project/node_modules/@vueuse/core/dist/index.js';
import { reactiveOmit, isClient, syncRef, refAutoReset as refAutoReset$1, tryOnScopeDispose, createEventHook } from 'file:///Users/ccci/Project/node_modules/@vueuse/shared/dist/index.js';
import { offset, flip, shift, limitShift, size, arrow, hide, useFloating, autoUpdate } from 'file:///Users/ccci/Project/node_modules/@floating-ui/vue/dist/floating-ui.vue.mjs';
import 'file:///Users/ccci/Project/node_modules/nostics/dist/index.mjs';
import 'file:///Users/ccci/Project/node_modules/nostics/dist/formatters/ansi.mjs';
import 'file:///Users/ccci/Project/node_modules/unctx/dist/index.mjs';
import 'file:///Users/ccci/Project/node_modules/hookable/dist/index.mjs';
import 'file:///Users/ccci/Project/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/ccci/Project/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/ccci/Project/node_modules/ufo/dist/index.mjs';
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
import './components-DxzSx7d2.mjs';
import 'file:///Users/ccci/Project/node_modules/@iconify/utils/lib/css/icon.js';
import 'file:///Users/ccci/Project/node_modules/aria-hidden/dist/es5/index.js';
import './nullish-Dvpx-avd.mjs';
import 'file:///Users/ccci/Project/node_modules/ohash/dist/utils/index.mjs';

var count = 0;
function useFocusGuards() {
  watchEffect((cleanupFn) => {
    var _a, _b;
    if (!isClient) return;
    const edgeGuards = (void 0).querySelectorAll("[data-reka-focus-guard]");
    (void 0).body.insertAdjacentElement("afterbegin", (_a = edgeGuards[0]) != null ? _a : createFocusGuard());
    (void 0).body.insertAdjacentElement("beforeend", (_b = edgeGuards[1]) != null ? _b : createFocusGuard());
    count++;
    cleanupFn(() => {
      if (count === 1) (void 0).querySelectorAll("[data-reka-focus-guard]").forEach((node) => node.remove());
      count--;
    });
  });
}
function createFocusGuard() {
  const element = (void 0).createElement("span");
  element.setAttribute("data-reka-focus-guard", "");
  element.tabIndex = 0;
  element.style.outline = "none";
  element.style.opacity = "0";
  element.style.position = "fixed";
  element.style.pointerEvents = "none";
  return element;
}
function useForwardPropsEmits(props, emit) {
  const parsedProps = useForwardProps$1(props);
  const emitsAsProps = emit ? useEmitAsProps(emit) : {};
  return computed(() => ({
    ...parsedProps.value,
    ...emitsAsProps
  }));
}
function useGraceArea(triggerElement, containerElement) {
  const isPointerInTransit = refAutoReset$1(false, 300);
  tryOnScopeDispose(() => {
    isPointerInTransit.value = false;
  });
  const pointerGraceArea = ref(null);
  const pointerExit = createEventHook();
  function handleRemoveGraceArea() {
    pointerGraceArea.value = null;
    isPointerInTransit.value = false;
  }
  function handleCreateGraceArea(event, hoverTarget) {
    if (!hoverTarget) return;
    const currentTarget = event.currentTarget;
    const exitPoint = {
      x: event.clientX,
      y: event.clientY
    };
    const paddedExitPoints = getPaddedExitPoints(exitPoint, getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect()), 1);
    const hoverTargetPoints = getPointsFromRect(hoverTarget.getBoundingClientRect());
    const graceArea = getHull([...paddedExitPoints, ...hoverTargetPoints]);
    pointerGraceArea.value = graceArea;
    isPointerInTransit.value = true;
  }
  watchEffect((cleanupFn) => {
    if (triggerElement.value && containerElement.value) {
      const trigger = triggerElement.value;
      const container = containerElement.value;
      const handleTriggerLeave = (event) => handleCreateGraceArea(event, container);
      const handleContentLeave = (event) => handleCreateGraceArea(event, trigger);
      trigger.addEventListener("pointerleave", handleTriggerLeave);
      container.addEventListener("pointerleave", handleContentLeave);
      cleanupFn(() => {
        trigger.removeEventListener("pointerleave", handleTriggerLeave);
        container.removeEventListener("pointerleave", handleContentLeave);
      });
    }
  });
  watchEffect((cleanupFn) => {
    var _a;
    if (pointerGraceArea.value) {
      const handleTrackPointerGrace = (event) => {
        var _a2, _b;
        if (!pointerGraceArea.value || !(event.target instanceof Element)) return;
        const target = event.target;
        const pointerPosition = {
          x: event.clientX,
          y: event.clientY
        };
        const hasEnteredTarget = ((_a2 = triggerElement.value) == null ? void 0 : _a2.contains(target)) || ((_b = containerElement.value) == null ? void 0 : _b.contains(target));
        const isPointerOutsideGraceArea = !isPointInPolygon(pointerPosition, pointerGraceArea.value);
        const isAnotherGraceAreaTrigger = !!target.closest("[data-grace-area-trigger]");
        if (hasEnteredTarget) handleRemoveGraceArea();
        else if (isPointerOutsideGraceArea || isAnotherGraceAreaTrigger) {
          handleRemoveGraceArea();
          pointerExit.trigger();
        }
      };
      const ownerDocument = (_a = triggerElement.value) == null ? void 0 : _a.ownerDocument;
      ownerDocument == null ? void 0 : ownerDocument.addEventListener("pointermove", handleTrackPointerGrace);
      cleanupFn(() => ownerDocument == null ? void 0 : ownerDocument.removeEventListener("pointermove", handleTrackPointerGrace));
    }
  });
  return {
    isPointerInTransit,
    onPointerExit: pointerExit.on
  };
}
function getExitSideFromRect(point, rect) {
  const top = Math.abs(rect.top - point.y);
  const bottom = Math.abs(rect.bottom - point.y);
  const right = Math.abs(rect.right - point.x);
  const left = Math.abs(rect.left - point.x);
  switch (Math.min(top, bottom, right, left)) {
    case left:
      return "left";
    case right:
      return "right";
    case top:
      return "top";
    case bottom:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function getPaddedExitPoints(exitPoint, exitSide, padding = 5) {
  const paddedExitPoints = [];
  switch (exitSide) {
    case "top":
      paddedExitPoints.push({
        x: exitPoint.x - padding,
        y: exitPoint.y + padding
      }, {
        x: exitPoint.x + padding,
        y: exitPoint.y + padding
      });
      break;
    case "bottom":
      paddedExitPoints.push({
        x: exitPoint.x - padding,
        y: exitPoint.y - padding
      }, {
        x: exitPoint.x + padding,
        y: exitPoint.y - padding
      });
      break;
    case "left":
      paddedExitPoints.push({
        x: exitPoint.x + padding,
        y: exitPoint.y - padding
      }, {
        x: exitPoint.x + padding,
        y: exitPoint.y + padding
      });
      break;
    case "right":
      paddedExitPoints.push({
        x: exitPoint.x - padding,
        y: exitPoint.y - padding
      }, {
        x: exitPoint.x - padding,
        y: exitPoint.y + padding
      });
  }
  return paddedExitPoints;
}
function getPointsFromRect(rect) {
  const { top, right, bottom, left } = rect;
  return [
    {
      x: left,
      y: top
    },
    {
      x: right,
      y: top
    },
    {
      x: right,
      y: bottom
    },
    {
      x: left,
      y: bottom
    }
  ];
}
function isPointInPolygon(point, polygon) {
  const { x, y } = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].x;
    const yi = polygon[i].y;
    const xj = polygon[j].x;
    const yj = polygon[j].y;
    if (yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}
function getHull(points) {
  const newPoints = points.slice();
  newPoints.sort((a, b) => {
    if (a.x < b.x) return -1;
    else if (a.x > b.x) return 1;
    else if (a.y < b.y) return -1;
    else if (a.y > b.y) return 1;
    else return 0;
  });
  return getHullPresorted(newPoints);
}
function getHullPresorted(points) {
  if (points.length <= 1) return points.slice();
  const upperHull = [];
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    while (upperHull.length >= 2) {
      const q = upperHull.at(-1);
      const r = upperHull[upperHull.length - 2];
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) upperHull.pop();
      else break;
    }
    upperHull.push(p);
  }
  upperHull.pop();
  const lowerHull = [];
  for (let i = points.length - 1; i >= 0; i--) {
    const p = points[i];
    while (lowerHull.length >= 2) {
      const q = lowerHull.at(-1);
      const r = lowerHull[lowerHull.length - 2];
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) lowerHull.pop();
      else break;
    }
    lowerHull.push(p);
  }
  lowerHull.pop();
  if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y) return upperHull;
  else return upperHull.concat(lowerHull);
}
function useSize(element) {
  const size2 = ref();
  return {
    width: computed(() => {
      var _a, _b;
      return (_b = (_a = size2.value) == null ? void 0 : _a.width) != null ? _b : 0;
    }),
    height: computed(() => {
      var _a, _b;
      return (_b = (_a = size2.value) == null ? void 0 : _a.height) != null ? _b : 0;
    })
  };
}
var [injectPopperRootContext, providePopperRootContext] = /* @__PURE__ */ createContext("PopperRoot");
var PopperRoot_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "PopperRoot",
  setup(__props) {
    const anchor = ref();
    providePopperRootContext({
      anchor,
      onAnchorChange: (element) => anchor.value = element
    });
    return (_ctx, _cache) => {
      return renderSlot(_ctx.$slots, "default");
    };
  }
});
var PopperAnchor_default = /* @__PURE__ */ defineComponent({
  __name: "PopperAnchor",
  props: {
    reference: {
      type: null,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const { forwardRef, currentElement } = useForwardExpose();
    const rootContext = injectPopperRootContext();
    watchPostEffect(() => {
      var _a;
      rootContext.onAnchorChange((_a = props.reference) != null ? _a : currentElement.value);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        ref: unref(forwardRef),
        as: __props.as,
        "as-child": __props.asChild
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, ["as", "as-child"]);
    };
  }
});
var _hoisted_1$2 = {
  key: 0,
  d: "M0 0L6 6L12 0"
};
var _hoisted_2 = {
  key: 1,
  d: "M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0"
};
var Arrow_default = /* @__PURE__ */ defineComponent({
  __name: "Arrow",
  props: {
    width: {
      type: Number,
      required: false,
      default: 10
    },
    height: {
      type: Number,
      required: false,
      default: 5
    },
    rounded: {
      type: Boolean,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "svg"
    }
  },
  setup(__props) {
    const props = __props;
    useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
        width: __props.width,
        height: __props.height,
        viewBox: __props.asChild ? void 0 : "0 0 12 6",
        preserveAspectRatio: __props.asChild ? void 0 : "none"
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [!__props.rounded ? (openBlock(), createElementBlock("path", _hoisted_1$2)) : (openBlock(), createElementBlock("path", _hoisted_2))])]),
        _: 3
      }, 16, [
        "width",
        "height",
        "viewBox",
        "preserveAspectRatio"
      ]);
    };
  }
});
function isNotNull(value) {
  return value !== null;
}
function transformOrigin(options) {
  return {
    name: "transformOrigin",
    options,
    fn(data) {
      var _a, _b, _c, _d, _e;
      const { placement, rects, middlewareData } = data;
      const isArrowHidden = ((_a = middlewareData.arrow) == null ? void 0 : _a.centerOffset) !== 0;
      const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
      const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
      const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
      const noArrowAlignX = {
        start: options.dir === "rtl" ? "100%" : "0%",
        center: "50%",
        end: options.dir === "rtl" ? "0%" : "100%"
      }[placedAlign];
      const noArrowAlignY = {
        start: "0%",
        center: "50%",
        end: "100%"
      }[placedAlign];
      const arrowXCenter = ((_c = (_b = middlewareData.arrow) == null ? void 0 : _b.x) != null ? _c : 0) + arrowWidth / 2;
      const arrowYCenter = ((_e = (_d = middlewareData.arrow) == null ? void 0 : _d.y) != null ? _e : 0) + arrowHeight / 2;
      let x = "";
      let y = "";
      if (placedSide === "bottom") {
        x = isArrowHidden ? noArrowAlignX : `${arrowXCenter}px`;
        y = `${-arrowHeight}px`;
      } else if (placedSide === "top") {
        x = isArrowHidden ? noArrowAlignX : `${arrowXCenter}px`;
        y = `${rects.floating.height + arrowHeight}px`;
      } else if (placedSide === "right") {
        x = `${-arrowHeight}px`;
        y = isArrowHidden ? noArrowAlignY : `${arrowYCenter}px`;
      } else if (placedSide === "left") {
        x = `${rects.floating.width + arrowHeight}px`;
        y = isArrowHidden ? noArrowAlignY : `${arrowYCenter}px`;
      }
      return { data: {
        x,
        y
      } };
    }
  };
}
function getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [side, align];
}
var _hoisted_1$1 = ["dir"];
var PopperContentPropsDefaultValue = {
  side: "bottom",
  sideOffset: 0,
  sideFlip: true,
  align: "center",
  alignOffset: 0,
  alignFlip: true,
  arrowPadding: 0,
  hideShiftedArrow: true,
  avoidCollisions: true,
  collisionBoundary: () => [],
  collisionPadding: 0,
  sticky: "partial",
  hideWhenDetached: false,
  positionStrategy: "fixed",
  updatePositionStrategy: "optimized",
  prioritizePosition: false
};
var [injectPopperContentContext, providePopperContentContext] = /* @__PURE__ */ createContext("PopperContent");
var PopperContent_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "PopperContent",
  props: /* @__PURE__ */ mergeDefaults({
    memoDependencies: {
      type: Array,
      required: false
    },
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    hideShiftedArrow: {
      type: Boolean,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
      required: false
    },
    dir: {
      type: String,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  }, { ...PopperContentPropsDefaultValue }),
  emits: ["placed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const rootContext = injectPopperRootContext();
    const { forwardRef, currentElement: contentElement } = useForwardExpose();
    const dir = useDirection(computed(() => props.dir));
    const floatingRef = ref();
    const arrow$1 = ref();
    const { width: arrowWidth, height: arrowHeight } = useSize();
    const desiredPlacement = computed(() => props.side + (props.align !== "center" ? `-${props.align}` : ""));
    const collisionPadding = computed(() => {
      return typeof props.collisionPadding === "number" ? props.collisionPadding : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...props.collisionPadding
      };
    });
    const boundary = computed(() => {
      return Array.isArray(props.collisionBoundary) ? props.collisionBoundary : [props.collisionBoundary];
    });
    const detectOverflowOptions = computed(() => {
      return {
        padding: collisionPadding.value,
        boundary: boundary.value.filter(isNotNull),
        altBoundary: boundary.value.length > 0
      };
    });
    const flipOptions = computed(() => {
      return {
        mainAxis: props.sideFlip,
        crossAxis: props.alignFlip
      };
    });
    const computedMiddleware = computed(() => {
      return [
        offset({
          mainAxis: props.sideOffset + arrowHeight.value,
          alignmentAxis: props.alignOffset
        }),
        props.prioritizePosition && props.avoidCollisions && flip({
          ...detectOverflowOptions.value,
          ...flipOptions.value
        }),
        props.avoidCollisions && shift({
          mainAxis: true,
          crossAxis: !!props.prioritizePosition,
          limiter: props.sticky === "partial" ? limitShift() : void 0,
          ...detectOverflowOptions.value
        }),
        !props.prioritizePosition && props.avoidCollisions && flip({
          ...detectOverflowOptions.value,
          ...flipOptions.value
        }),
        size({
          ...detectOverflowOptions.value,
          apply: ({ elements, rects, availableWidth, availableHeight }) => {
            const { width: anchorWidth, height: anchorHeight } = rects.reference;
            const contentStyle = elements.floating.style;
            contentStyle.setProperty("--reka-popper-available-width", `${availableWidth}px`);
            contentStyle.setProperty("--reka-popper-available-height", `${availableHeight}px`);
            contentStyle.setProperty("--reka-popper-anchor-width", `${anchorWidth}px`);
            contentStyle.setProperty("--reka-popper-anchor-height", `${anchorHeight}px`);
          }
        }),
        arrow$1.value && arrow({
          element: arrow$1.value,
          padding: props.arrowPadding
        }),
        transformOrigin({
          arrowWidth: arrowWidth.value,
          arrowHeight: arrowHeight.value,
          dir: dir.value
        }),
        props.hideWhenDetached && hide({
          strategy: "referenceHidden",
          ...detectOverflowOptions.value
        })
      ];
    });
    const reference = computed(() => {
      var _a;
      return (_a = props.reference) != null ? _a : rootContext.anchor.value;
    });
    const { floatingStyles, placement, isPositioned, middlewareData, update } = useFloating(reference, floatingRef, {
      strategy: props.positionStrategy,
      placement: desiredPlacement,
      whileElementsMounted: (...args) => {
        return autoUpdate(...args, {
          layoutShift: !props.disableUpdateOnLayoutShift,
          animationFrame: props.updatePositionStrategy === "always"
        });
      },
      middleware: computedMiddleware
    });
    const placedSide = computed(() => getSideAndAlignFromPlacement(placement.value)[0]);
    const placedAlign = computed(() => getSideAndAlignFromPlacement(placement.value)[1]);
    watchPostEffect(() => {
      if (isPositioned.value) emits("placed");
    });
    const shouldHideArrow = computed(() => {
      var _a;
      const cannotCenterArrow = ((_a = middlewareData.value.arrow) == null ? void 0 : _a.centerOffset) !== 0;
      return props.hideShiftedArrow && cannotCenterArrow;
    });
    const contentZIndex = ref("");
    watchEffect(() => {
      if (contentElement.value) contentZIndex.value = (void 0).getComputedStyle(contentElement.value).zIndex;
    });
    providePopperContentContext({
      placedSide,
      onArrowChange: (element) => arrow$1.value = element,
      arrowX: computed(() => {
        var _a, _b;
        return (_b = (_a = middlewareData.value.arrow) == null ? void 0 : _a.x) != null ? _b : 0;
      }),
      arrowY: computed(() => {
        var _a, _b;
        return (_b = (_a = middlewareData.value.arrow) == null ? void 0 : _a.y) != null ? _b : 0;
      }),
      shouldHideArrow
    });
    return (_ctx, _cache) => {
      var _a, _b, _c;
      return openBlock(), createElementBlock("div", {
        ref_key: "floatingRef",
        ref: floatingRef,
        "data-reka-popper-content-wrapper": "",
        dir: unref(dir),
        style: normalizeStyle({
          ...unref(floatingStyles),
          transform: unref(isPositioned) ? unref(floatingStyles).transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: contentZIndex.value,
          ["--reka-popper-transform-origin"]: [(_a = unref(middlewareData).transformOrigin) == null ? void 0 : _a.x, (_b = unref(middlewareData).transformOrigin) == null ? void 0 : _b.y].join(" "),
          ...((_c = unref(middlewareData).hide) == null ? void 0 : _c.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [props.memoDependencies ? withMemo([
        props.asChild,
        props.as,
        placedSide.value,
        placedAlign.value,
        unref(isPositioned),
        ...Object.values(_ctx.$attrs),
        ...props.memoDependencies
      ], () => (openBlock(), createBlock(unref(Primitive), mergeProps({
        key: 0,
        ref: unref(forwardRef)
      }, _ctx.$attrs, {
        "as-child": props.asChild,
        as: props.as,
        "data-side": placedSide.value,
        "data-align": placedAlign.value,
        style: { animation: !unref(isPositioned) ? "none" : void 0 }
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, [
        "as-child",
        "as",
        "data-side",
        "data-align",
        "style"
      ])), _cache, 0) : (openBlock(), createBlock(unref(Primitive), mergeProps({
        key: 1,
        ref: unref(forwardRef)
      }, _ctx.$attrs, {
        "as-child": props.asChild,
        as: props.as,
        "data-side": placedSide.value,
        "data-align": placedAlign.value,
        dir: unref(dir),
        style: { animation: !unref(isPositioned) ? "none" : void 0 }
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, [
        "as-child",
        "as",
        "data-side",
        "data-align",
        "dir",
        "style"
      ]))], 12, _hoisted_1$1);
    };
  }
});
var OPPOSITE_SIDE = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var PopperArrow_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "PopperArrow",
  props: {
    width: {
      type: Number,
      required: false
    },
    height: {
      type: Number,
      required: false
    },
    rounded: {
      type: Boolean,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "svg"
    }
  },
  setup(__props) {
    const { forwardRef } = useForwardExpose();
    const contentContext = injectPopperContentContext();
    const baseSide = computed(() => OPPOSITE_SIDE[contentContext.placedSide.value]);
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      return openBlock(), createElementBlock("span", {
        ref: (el) => {
          unref(contentContext).onArrowChange(el != null ? el : void 0);
        },
        style: normalizeStyle({
          position: "absolute",
          left: ((_a = unref(contentContext).arrowX) == null ? void 0 : _a.value) ? `${(_b = unref(contentContext).arrowX) == null ? void 0 : _b.value}px` : void 0,
          top: ((_c = unref(contentContext).arrowY) == null ? void 0 : _c.value) ? `${(_d = unref(contentContext).arrowY) == null ? void 0 : _d.value}px` : void 0,
          [baseSide.value]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[unref(contentContext).placedSide.value],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: `rotate(180deg)`,
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[unref(contentContext).placedSide.value],
          visibility: unref(contentContext).shouldHideArrow.value ? "hidden" : void 0
        })
      }, [createVNode(Arrow_default, mergeProps(_ctx.$attrs, {
        ref: unref(forwardRef),
        style: { display: "block" },
        as: __props.as,
        "as-child": __props.asChild,
        rounded: __props.rounded,
        width: __props.width,
        height: __props.height
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, [
        "as",
        "as-child",
        "rounded",
        "width",
        "height"
      ])], 4);
    };
  }
});
var [injectPopoverRootContext, providePopoverRootContext] = /* @__PURE__ */ createContext("PopoverRoot");
var PopoverRoot_default = /* @__PURE__ */ defineComponent({
  __name: "PopoverRoot",
  props: {
    defaultOpen: {
      type: Boolean,
      required: false,
      default: false
    },
    open: {
      type: Boolean,
      required: false,
      default: void 0
    },
    modal: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { modal } = toRefs(props);
    const open = useVModel(props, "open", emit, {
      defaultValue: props.defaultOpen,
      passive: props.open === void 0
    });
    providePopoverRootContext({
      contentId: "",
      triggerId: "",
      modal,
      open,
      onOpenChange: (value) => {
        open.value = value;
      },
      onOpenToggle: () => {
        open.value = !open.value;
      },
      triggerElement: ref(),
      hasCustomAnchor: ref(false)
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(PopperRoot_default), null, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
          open: unref(open),
          close: () => open.value = false
        })]),
        _: 3
      });
    };
  }
});
var PopoverAnchor_default = /* @__PURE__ */ defineComponent({
  __name: "PopoverAnchor",
  props: {
    reference: {
      type: null,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    useForwardExpose();
    injectPopoverRootContext();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(PopperAnchor_default), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var PopoverArrow_default = /* @__PURE__ */ defineComponent({
  __name: "PopoverArrow",
  props: {
    width: {
      type: Number,
      required: false,
      default: 10
    },
    height: {
      type: Number,
      required: false,
      default: 5
    },
    rounded: {
      type: Boolean,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "svg"
    }
  },
  setup(__props) {
    const props = __props;
    useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(PopperArrow_default), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var PopoverContentImpl_default = /* @__PURE__ */ defineComponent({
  __name: "PopoverContentImpl",
  props: {
    trapFocus: {
      type: Boolean,
      required: false
    },
    memoDependencies: {
      type: Array,
      required: false
    },
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    hideShiftedArrow: {
      type: Boolean,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
      required: false
    },
    dir: {
      type: String,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: false
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardProps$1(reactiveOmit(props, "trapFocus", "disableOutsidePointerEvents"));
    const { forwardRef } = useForwardExpose();
    const rootContext = injectPopoverRootContext();
    useFocusGuards();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(FocusScope_default), {
        "as-child": "",
        loop: "",
        trapped: __props.trapFocus,
        onMountAutoFocus: _cache[5] || (_cache[5] = ($event) => emits("openAutoFocus", $event)),
        onUnmountAutoFocus: _cache[6] || (_cache[6] = ($event) => emits("closeAutoFocus", $event))
      }, {
        default: withCtx(() => [createVNode(unref(DismissableLayer_default), {
          "as-child": "",
          "disable-outside-pointer-events": __props.disableOutsidePointerEvents,
          onPointerDownOutside: _cache[0] || (_cache[0] = ($event) => emits("pointerDownOutside", $event)),
          onInteractOutside: _cache[1] || (_cache[1] = ($event) => emits("interactOutside", $event)),
          onEscapeKeyDown: _cache[2] || (_cache[2] = ($event) => emits("escapeKeyDown", $event)),
          onFocusOutside: _cache[3] || (_cache[3] = ($event) => emits("focusOutside", $event)),
          onDismiss: _cache[4] || (_cache[4] = ($event) => unref(rootContext).onOpenChange(false))
        }, {
          default: withCtx(() => [createVNode(unref(PopperContent_default), mergeProps(unref(forwarded), {
            id: unref(rootContext).contentId,
            ref: unref(forwardRef),
            "data-state": unref(rootContext).open.value ? "open" : "closed",
            "aria-labelledby": unref(rootContext).triggerId,
            style: {
              "--reka-popover-content-transform-origin": "var(--reka-popper-transform-origin)",
              "--reka-popover-content-available-width": "var(--reka-popper-available-width)",
              "--reka-popover-content-available-height": "var(--reka-popper-available-height)",
              "--reka-popover-trigger-width": "var(--reka-popper-anchor-width)",
              "--reka-popover-trigger-height": "var(--reka-popper-anchor-height)"
            },
            role: "dialog"
          }), {
            default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
            _: 3
          }, 16, [
            "id",
            "data-state",
            "aria-labelledby"
          ])]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])]),
        _: 3
      }, 8, ["trapped"]);
    };
  }
});
var PopoverContentModal_default = /* @__PURE__ */ defineComponent({
  __name: "PopoverContentModal",
  props: {
    memoDependencies: {
      type: Array,
      required: false
    },
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    hideShiftedArrow: {
      type: Boolean,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
      required: false
    },
    dir: {
      type: String,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: false
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const rootContext = injectPopoverRootContext();
    const isRightClickOutsideRef = ref(false);
    useBodyScrollLock(true);
    const forwarded = useForwardPropsEmits(props, emits);
    const { forwardRef, currentElement } = useForwardExpose();
    useHideOthers(currentElement);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(PopoverContentImpl_default, mergeProps(unref(forwarded), {
        ref: unref(forwardRef),
        "trap-focus": unref(rootContext).open.value,
        "disable-outside-pointer-events": "",
        onCloseAutoFocus: _cache[0] || (_cache[0] = withModifiers((event) => {
          var _a;
          emits("closeAutoFocus", event);
          if (!isRightClickOutsideRef.value) (_a = unref(rootContext).triggerElement.value) == null ? void 0 : _a.focus();
        }, ["prevent"])),
        onPointerDownOutside: _cache[1] || (_cache[1] = (event) => {
          emits("pointerDownOutside", event);
          const originalEvent = event.detail.originalEvent;
          const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
          const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          isRightClickOutsideRef.value = isRightClick;
        }),
        onFocusOutside: _cache[2] || (_cache[2] = withModifiers(() => {
        }, ["prevent"]))
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, ["trap-focus"]);
    };
  }
});
var PopoverContentNonModal_default = /* @__PURE__ */ defineComponent({
  __name: "PopoverContentNonModal",
  props: {
    memoDependencies: {
      type: Array,
      required: false
    },
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    hideShiftedArrow: {
      type: Boolean,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
      required: false
    },
    dir: {
      type: String,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: false
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const rootContext = injectPopoverRootContext();
    const hasInteractedOutsideRef = ref(false);
    const hasPointerDownOutsideRef = ref(false);
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(PopoverContentImpl_default, mergeProps(unref(forwarded), {
        "trap-focus": false,
        "disable-outside-pointer-events": false,
        onCloseAutoFocus: _cache[0] || (_cache[0] = (event) => {
          var _a;
          emits("closeAutoFocus", event);
          if (!event.defaultPrevented) {
            if (!hasInteractedOutsideRef.value) (_a = unref(rootContext).triggerElement.value) == null ? void 0 : _a.focus();
            event.preventDefault();
          }
          hasInteractedOutsideRef.value = false;
          hasPointerDownOutsideRef.value = false;
        }),
        onInteractOutside: _cache[1] || (_cache[1] = async (event) => {
          var _a;
          emits("interactOutside", event);
          if (!event.defaultPrevented) {
            hasInteractedOutsideRef.value = true;
            if (event.detail.originalEvent.type === "pointerdown") hasPointerDownOutsideRef.value = true;
          }
          const target = event.target;
          if ((_a = unref(rootContext).triggerElement.value) == null ? void 0 : _a.contains(target)) event.preventDefault();
          if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.value) event.preventDefault();
        })
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var PopoverContent_default = /* @__PURE__ */ defineComponent({
  __name: "PopoverContent",
  props: {
    forceMount: {
      type: Boolean,
      required: false
    },
    memoDependencies: {
      type: Array,
      required: false
    },
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    hideShiftedArrow: {
      type: Boolean,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
      required: false
    },
    dir: {
      type: String,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: false
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const rootContext = injectPopoverRootContext();
    const forwarded = useForwardPropsEmits(props, emits);
    const { forwardRef } = useForwardExpose();
    rootContext.contentId || (rootContext.contentId = useId$1(void 0, "reka-popover-content"));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Presence_default), { present: __props.forceMount || unref(rootContext).open.value }, {
        default: withCtx(() => [unref(rootContext).modal.value ? (openBlock(), createBlock(PopoverContentModal_default, mergeProps({ key: 0 }, unref(forwarded), { ref: unref(forwardRef) }), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16)) : (openBlock(), createBlock(PopoverContentNonModal_default, mergeProps({ key: 1 }, unref(forwarded), { ref: unref(forwardRef) }), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16))]),
        _: 3
      }, 8, ["present"]);
    };
  }
});
var PopoverPortal_default = /* @__PURE__ */ defineComponent({
  __name: "PopoverPortal",
  props: {
    to: {
      type: null,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    defer: {
      type: Boolean,
      required: false
    },
    forceMount: {
      type: Boolean,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Teleport_default), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var PopoverTrigger_default = /* @__PURE__ */ defineComponent({
  __name: "PopoverTrigger",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "button"
    }
  },
  setup(__props) {
    const props = __props;
    const rootContext = injectPopoverRootContext();
    const { forwardRef} = useForwardExpose();
    rootContext.triggerId || (rootContext.triggerId = useId$1(void 0, "reka-popover-trigger"));
    rootContext.contentId || (rootContext.contentId = useId$1(void 0, "reka-popover-content"));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(unref(rootContext).hasCustomAnchor.value ? unref(Primitive) : unref(PopperAnchor_default)), { "as-child": "" }, {
        default: withCtx(() => [createVNode(unref(Primitive), {
          id: unref(rootContext).triggerId,
          ref: unref(forwardRef),
          type: __props.as === "button" ? "button" : void 0,
          "aria-haspopup": "dialog",
          "aria-expanded": unref(rootContext).open.value,
          "aria-controls": unref(rootContext).open.value ? unref(rootContext).contentId : void 0,
          "data-state": unref(rootContext).open.value ? "open" : "closed",
          as: __props.as,
          "as-child": props.asChild,
          onClick: unref(rootContext).onOpenToggle
        }, {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 8, [
          "id",
          "type",
          "aria-expanded",
          "aria-controls",
          "data-state",
          "as",
          "as-child",
          "onClick"
        ])]),
        _: 3
      });
    };
  }
});
var HoverCardArrow_default = /* @__PURE__ */ defineComponent({
  __name: "HoverCardArrow",
  props: {
    width: {
      type: Number,
      required: false,
      default: 10
    },
    height: {
      type: Number,
      required: false,
      default: 5
    },
    rounded: {
      type: Boolean,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "svg"
    }
  },
  setup(__props) {
    const props = __props;
    useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(PopperArrow_default), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var [injectHoverCardRootContext, provideHoverCardRootContext] = /* @__PURE__ */ createContext("HoverCardRoot");
var HoverCardRoot_default = /* @__PURE__ */ defineComponent({
  __name: "HoverCardRoot",
  props: {
    defaultOpen: {
      type: Boolean,
      required: false,
      default: false
    },
    open: {
      type: Boolean,
      required: false,
      default: void 0
    },
    openDelay: {
      type: Number,
      required: false,
      default: 700
    },
    closeDelay: {
      type: Number,
      required: false,
      default: 300
    },
    enableTouch: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { openDelay, closeDelay, enableTouch } = toRefs(props);
    useForwardExpose();
    const open = useVModel(props, "open", emit, {
      defaultValue: props.defaultOpen,
      passive: props.open === void 0
    });
    const openTimerRef = ref(0);
    const closeTimerRef = ref(0);
    const hasSelectionRef = ref(false);
    const isPointerDownOnContentRef = ref(false);
    const isPointerInTransitRef = ref(false);
    const triggerElement = ref();
    function handleOpen() {
      clearTimeout(closeTimerRef.value);
      openTimerRef.value = (void 0).setTimeout(() => open.value = true, openDelay.value);
    }
    function handleClose() {
      clearTimeout(openTimerRef.value);
      if (!hasSelectionRef.value && !isPointerDownOnContentRef.value) closeTimerRef.value = (void 0).setTimeout(() => open.value = false, closeDelay.value);
    }
    function handleDismiss() {
      clearTimeout(openTimerRef.value);
      open.value = false;
    }
    provideHoverCardRootContext({
      open,
      onOpenChange(value) {
        open.value = value;
      },
      onOpen: handleOpen,
      onClose: handleClose,
      onDismiss: handleDismiss,
      hasSelectionRef,
      isPointerDownOnContentRef,
      isPointerInTransitRef,
      triggerElement,
      enableTouch
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(PopperRoot_default), null, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", { open: unref(open) })]),
        _: 3
      });
    };
  }
});
function excludeTouch(eventHandler2) {
  return (event) => event.pointerType === "touch" ? void 0 : eventHandler2();
}
var HoverCardContentImpl_default = /* @__PURE__ */ defineComponent({
  __name: "HoverCardContentImpl",
  props: {
    memoDependencies: {
      type: Array,
      required: false
    },
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    hideShiftedArrow: {
      type: Boolean,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
      required: false
    },
    dir: {
      type: String,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardProps$1(props);
    const { forwardRef, currentElement: contentElement } = useForwardExpose();
    const rootContext = injectHoverCardRootContext();
    const { isPointerInTransit, onPointerExit } = useGraceArea(rootContext.triggerElement, contentElement);
    syncRef(rootContext.isPointerInTransitRef, isPointerInTransit, { direction: "rtl" });
    onPointerExit(() => {
      rootContext.onClose();
    });
    const containSelection = ref(false);
    let originalBodyUserSelect;
    watchEffect((cleanupFn) => {
      if (containSelection.value) {
        const body = (void 0).body;
        originalBodyUserSelect = body.style.userSelect || body.style.webkitUserSelect;
        body.style.userSelect = "none";
        body.style.webkitUserSelect = "none";
        cleanupFn(() => {
          body.style.userSelect = originalBodyUserSelect;
          body.style.webkitUserSelect = originalBodyUserSelect;
        });
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(DismissableLayer_default), {
        "as-child": "",
        "disable-outside-pointer-events": false,
        onEscapeKeyDown: _cache[1] || (_cache[1] = ($event) => emits("escapeKeyDown", $event)),
        onPointerDownOutside: _cache[2] || (_cache[2] = ($event) => emits("pointerDownOutside", $event)),
        onFocusOutside: _cache[3] || (_cache[3] = withModifiers(($event) => emits("focusOutside", $event), ["prevent"])),
        onDismiss: unref(rootContext).onDismiss
      }, {
        default: withCtx(() => [createVNode(unref(PopperContent_default), mergeProps({
          ...unref(forwarded),
          ..._ctx.$attrs
        }, {
          ref: unref(forwardRef),
          "data-state": unref(rootContext).open.value ? "open" : "closed",
          style: {
            "userSelect": containSelection.value ? "text" : void 0,
            "WebkitUserSelect": containSelection.value ? "text" : void 0,
            "--reka-hover-card-content-transform-origin": "var(--reka-popper-transform-origin)",
            "--reka-hover-card-content-available-width": "var(--reka-popper-available-width)",
            "--reka-hover-card-content-available-height": "var(--reka-popper-available-height)",
            "--reka-hover-card-trigger-width": "var(--reka-popper-anchor-width)",
            "--reka-hover-card-trigger-height": "var(--reka-popper-anchor-height)"
          },
          onPointerdown: _cache[0] || (_cache[0] = (event) => {
            if (event.currentTarget.contains(event.target)) containSelection.value = true;
            unref(rootContext).hasSelectionRef.value = false;
            unref(rootContext).isPointerDownOnContentRef.value = true;
          })
        }), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16, ["data-state", "style"])]),
        _: 3
      }, 8, ["onDismiss"]);
    };
  }
});
var HoverCardContent_default = /* @__PURE__ */ defineComponent({
  __name: "HoverCardContent",
  props: {
    forceMount: {
      type: Boolean,
      required: false
    },
    memoDependencies: {
      type: Array,
      required: false
    },
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    hideShiftedArrow: {
      type: Boolean,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
      required: false
    },
    dir: {
      type: String,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside"
  ],
  setup(__props, { emit: __emit }) {
    const forwarded = useForwardPropsEmits(__props, __emit);
    const { forwardRef } = useForwardExpose();
    const rootContext = injectHoverCardRootContext();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Presence_default), { present: __props.forceMount || unref(rootContext).open.value }, {
        default: withCtx(() => [createVNode(HoverCardContentImpl_default, mergeProps(unref(forwarded), {
          ref: unref(forwardRef),
          onPointerenter: _cache[0] || (_cache[0] = ($event) => unref(excludeTouch)(unref(rootContext).onOpen)($event))
        }), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16)]),
        _: 3
      }, 8, ["present"]);
    };
  }
});
var HoverCardPortal_default = /* @__PURE__ */ defineComponent({
  __name: "HoverCardPortal",
  props: {
    to: {
      type: null,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    defer: {
      type: Boolean,
      required: false
    },
    forceMount: {
      type: Boolean,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Teleport_default), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var HoverCardTrigger_default = /* @__PURE__ */ defineComponent({
  __name: "HoverCardTrigger",
  props: {
    reference: {
      type: null,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "a"
    }
  },
  setup(__props) {
    const { forwardRef, currentElement } = useForwardExpose();
    const rootContext = injectHoverCardRootContext();
    rootContext.triggerElement = currentElement;
    function handleLeave() {
      setTimeout(() => {
        if (!rootContext.isPointerInTransitRef.value && !rootContext.open.value) rootContext.onClose();
      }, 0);
    }
    function handleTouch(event) {
      if (!rootContext.enableTouch.value || event.pointerType !== "touch") return;
      if (rootContext.open.value) rootContext.onDismiss();
      else rootContext.onOpenChange(true);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(PopperAnchor_default), {
        "as-child": "",
        reference: __props.reference
      }, {
        default: withCtx(() => [createVNode(unref(Primitive), {
          ref: unref(forwardRef),
          "as-child": __props.asChild,
          as: __props.as,
          "data-state": unref(rootContext).open.value ? "open" : "closed",
          "data-grace-area-trigger": "",
          onPointerenter: _cache[0] || (_cache[0] = ($event) => unref(excludeTouch)(unref(rootContext).onOpen)($event)),
          onPointerleave: _cache[1] || (_cache[1] = ($event) => unref(excludeTouch)(handleLeave)($event)),
          onPointerup: handleTouch,
          onFocus: _cache[2] || (_cache[2] = ($event) => unref(rootContext).onOpen()),
          onBlur: _cache[3] || (_cache[3] = ($event) => unref(rootContext).onClose())
        }, {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 8, [
          "as-child",
          "as",
          "data-state"
        ])]),
        _: 3
      }, 8, ["reference"]);
    };
  }
});
function getOpenState(open) {
  return open ? "open" : "closed";
}
function makeTriggerId(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
function makeContentId(baseId, value) {
  return `${baseId}-content-${value}`;
}
var LINK_SELECT = "navigationMenu.linkSelect";
var EVENT_ROOT_CONTENT_DISMISS = "navigationMenu.rootContentDismiss";
function getTabbableCandidates(container) {
  const nodes = [];
  const walker = (void 0).createTreeWalker(container, NodeFilter.SHOW_ELEMENT, { acceptNode: (node) => {
    const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
    if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
    return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}
function focusFirst(candidates) {
  const previouslyFocusedElement = getActiveElement();
  return candidates.some((candidate) => {
    if (candidate === previouslyFocusedElement) return true;
    candidate.focus();
    return getActiveElement() !== previouslyFocusedElement;
  });
}
function removeFromTabOrder(candidates) {
  candidates.forEach((candidate) => {
    candidate.dataset.tabindex = candidate.getAttribute("tabindex") || "";
    candidate.setAttribute("tabindex", "-1");
  });
  return () => {
    candidates.forEach((candidate) => {
      const prevTabIndex = candidate.dataset.tabindex;
      candidate.setAttribute("tabindex", prevTabIndex);
    });
  };
}
function whenMouse(handler) {
  return (event) => event.pointerType === "mouse" ? handler(event) : void 0;
}
var [injectNavigationMenuContext, provideNavigationMenuContext] = /* @__PURE__ */ createContext(["NavigationMenuRoot", "NavigationMenuSub"], "NavigationMenuContext");
var NavigationMenuRoot_default = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuRoot",
  props: {
    modelValue: {
      type: String,
      required: false,
      default: void 0
    },
    defaultValue: {
      type: String,
      required: false
    },
    dir: {
      type: String,
      required: false
    },
    orientation: {
      type: String,
      required: false,
      default: "horizontal"
    },
    delayDuration: {
      type: Number,
      required: false,
      default: 200
    },
    skipDelayDuration: {
      type: Number,
      required: false,
      default: 300
    },
    disableClickTrigger: {
      type: Boolean,
      required: false,
      default: false
    },
    disableHoverTrigger: {
      type: Boolean,
      required: false,
      default: false
    },
    disablePointerLeaveClose: {
      type: Boolean,
      required: false
    },
    unmountOnHide: {
      type: Boolean,
      required: false,
      default: true
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "nav"
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    var _a;
    const props = __props;
    const modelValue = useVModel(props, "modelValue", __emit, {
      defaultValue: (_a = props.defaultValue) != null ? _a : "",
      passive: props.modelValue === void 0
    });
    const previousValue = ref("");
    const { forwardRef, currentElement: rootNavigationMenu } = useForwardExpose();
    const indicatorTrack = ref();
    const viewport = ref();
    const activeTrigger = ref();
    const { getItems, CollectionSlot } = useCollection({
      key: "NavigationMenu",
      isProvider: true
    });
    const { delayDuration, skipDelayDuration, dir: propDir, disableClickTrigger, disableHoverTrigger, unmountOnHide } = toRefs(props);
    const dir = useDirection(propDir);
    const isDelaySkipped = refAutoReset(false, skipDelayDuration);
    const skipNextClose = ref(false);
    const computedDelay = computed(() => {
      if (modelValue.value !== "" || isDelaySkipped.value) return 150;
      else return delayDuration.value;
    });
    const debouncedFn = useDebounceFn((val) => {
      if (typeof val === "string") {
        if (val === "" && skipNextClose.value) {
          skipNextClose.value = false;
          return;
        }
        previousValue.value = modelValue.value;
        modelValue.value = val;
        if (val === "") isDelaySkipped.value = true;
      }
    }, computedDelay);
    watchEffect(() => {
      if (!modelValue.value) return;
      const items = getItems().map((i) => i.ref);
      activeTrigger.value = items.find((item) => item.id.includes(modelValue.value));
    });
    useEventListener(rootNavigationMenu, EVENT_ROOT_CONTENT_DISMISS, onItemDismiss);
    provideNavigationMenuContext({
      isRootMenu: true,
      modelValue,
      previousValue,
      baseId: useId$1(void 0, "reka-navigation-menu"),
      disableClickTrigger,
      disableHoverTrigger,
      dir,
      unmountOnHide,
      orientation: props.orientation,
      rootNavigationMenu,
      indicatorTrack,
      activeTrigger,
      onIndicatorTrackChange: (val) => {
        indicatorTrack.value = val;
      },
      viewport,
      onViewportChange: (val) => {
        viewport.value = val;
      },
      onTriggerEnter: (val) => {
        if (modelValue.value !== "") {
          skipNextClose.value = true;
          previousValue.value = modelValue.value;
          modelValue.value = val;
        } else debouncedFn(val);
      },
      onTriggerLeave: () => {
        skipNextClose.value = false;
        debouncedFn("");
      },
      onContentEnter: () => {
        debouncedFn();
      },
      onContentLeave: () => {
        if (!props.disablePointerLeaveClose) {
          skipNextClose.value = false;
          debouncedFn("");
        }
      },
      onItemSelect: (val) => {
        previousValue.value = modelValue.value;
        modelValue.value = val;
      },
      onItemDismiss
    });
    function onItemDismiss() {
      previousValue.value = modelValue.value;
      modelValue.value = "";
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(CollectionSlot), null, {
        default: withCtx(() => [createVNode(unref(Primitive), {
          ref: unref(forwardRef),
          as: __props.as,
          "as-child": __props.asChild,
          "data-orientation": __props.orientation,
          dir: unref(dir),
          "data-reka-navigation-menu": ""
        }, {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default", { modelValue: unref(modelValue) })]),
          _: 3
        }, 8, [
          "as",
          "as-child",
          "data-orientation",
          "dir"
        ])]),
        _: 3
      });
    };
  }
});
var [injectNavigationMenuItemContext, provideNavigationMenuItemContext] = /* @__PURE__ */ createContext("NavigationMenuItem");
var NavigationMenuItem_default = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuItem",
  props: {
    value: {
      type: String,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "li"
    }
  },
  setup(__props) {
    const props = __props;
    useForwardExpose();
    const { getItems } = useCollection({ key: "NavigationMenu" });
    const context = injectNavigationMenuContext();
    const value = useId$1(props.value);
    const triggerRef$1 = ref();
    const focusProxyRef = ref();
    const contentId = makeContentId(context.baseId, value);
    let restoreContentTabOrderRef = () => ({});
    const wasEscapeCloseRef = ref(false);
    async function handleContentEntry(side = "start") {
      const el = (void 0).getElementById(contentId);
      if (el) {
        restoreContentTabOrderRef();
        const candidates = getTabbableCandidates(el);
        if (candidates.length) focusFirst(side === "start" ? candidates : candidates.reverse());
      }
    }
    function handleContentExit() {
      const el = (void 0).getElementById(contentId);
      if (el) {
        const candidates = getTabbableCandidates(el);
        if (candidates.length) restoreContentTabOrderRef = removeFromTabOrder(candidates);
      }
    }
    provideNavigationMenuItemContext({
      value,
      contentId,
      triggerRef: triggerRef$1,
      focusProxyRef,
      wasEscapeCloseRef,
      onEntryKeyDown: handleContentEntry,
      onFocusProxyEnter: handleContentEntry,
      onContentFocusOutside: handleContentExit,
      onRootContentClose: handleContentExit
    });
    function handleClose() {
      var _a;
      context.onItemDismiss();
      (_a = triggerRef$1.value) == null ? void 0 : _a.focus();
    }
    function handleKeydown(ev) {
      const currentFocus = getActiveElement();
      if (ev.keyCode === 32 || ev.key === "Enter") if (context.modelValue.value === value) {
        handleClose();
        ev.preventDefault();
        return;
      } else {
        ev.target.click();
        ev.preventDefault();
        return;
      }
      const itemsArray = getItems().filter((i) => {
        var _a;
        return (_a = i.ref.parentElement) == null ? void 0 : _a.hasAttribute("data-menu-item");
      }).map((i) => i.ref);
      if (!itemsArray.includes(currentFocus)) return;
      const newSelectedElement = useArrowNavigation(ev, currentFocus, void 0, {
        itemsArray,
        loop: false
      });
      if (newSelectedElement) newSelectedElement == null ? void 0 : newSelectedElement.focus();
      ev.preventDefault();
      ev.stopPropagation();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        "as-child": __props.asChild,
        as: __props.as,
        "data-menu-item": "",
        onKeydown: withKeys(handleKeydown, [
          "up",
          "down",
          "left",
          "right",
          "home",
          "end",
          "space"
        ])
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, ["as-child", "as"]);
    };
  }
});
var NavigationMenuContentImpl_default = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuContentImpl",
  props: {
    disableOutsidePointerEvents: {
      type: Boolean,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { getItems } = useCollection({ key: "NavigationMenu" });
    const { forwardRef, currentElement } = useForwardExpose();
    const menuContext = injectNavigationMenuContext();
    const itemContext = injectNavigationMenuItemContext();
    const triggerId = makeTriggerId(menuContext.baseId, itemContext.value);
    const contentId = makeContentId(menuContext.baseId, itemContext.value);
    const prevMotionAttributeRef = ref(null);
    const motionAttribute = computed(() => {
      const values = getItems().map((i) => i.ref.id.split("trigger-")[1]);
      if (menuContext.dir.value === "rtl") values.reverse();
      const index = values.indexOf(menuContext.modelValue.value);
      const prevIndex = values.indexOf(menuContext.previousValue.value);
      const isSelected = itemContext.value === menuContext.modelValue.value;
      const wasSelected = prevIndex === values.indexOf(itemContext.value);
      if (!isSelected && !wasSelected) return prevMotionAttributeRef.value;
      const attribute = (() => {
        if (index !== prevIndex) {
          if (isSelected && prevIndex !== -1) return index > prevIndex ? "from-end" : "from-start";
          if (wasSelected && index !== -1) return index > prevIndex ? "to-start" : "to-end";
        }
        return null;
      })();
      prevMotionAttributeRef.value = attribute;
      return attribute;
    });
    function handleFocusOutside(ev) {
      var _a, _b;
      emits("focusOutside", ev);
      emits("interactOutside", ev);
      if (ev.detail.originalEvent.target.hasAttribute("data-navigation-menu-trigger")) ev.preventDefault();
      if (!ev.defaultPrevented) {
        itemContext.onContentFocusOutside();
        const target$1 = ev.target;
        if ((_b = (_a = menuContext.rootNavigationMenu) == null ? void 0 : _a.value) == null ? void 0 : _b.contains(target$1)) ev.preventDefault();
      }
    }
    function handlePointerDownOutside(ev) {
      var _a;
      emits("pointerDownOutside", ev);
      if (!ev.defaultPrevented) {
        const target = ev.target;
        const isTrigger = getItems().some((i) => i.ref.contains(target));
        const isRootViewport = menuContext.isRootMenu && ((_a = menuContext.viewport.value) == null ? void 0 : _a.contains(target));
        if (isTrigger || isRootViewport || !menuContext.isRootMenu) ev.preventDefault();
      }
    }
    watchEffect((cleanupFn) => {
      const content = currentElement.value;
      if (menuContext.isRootMenu && content) {
        const handleClose = () => {
          var _a;
          menuContext.onItemDismiss();
          itemContext.onRootContentClose();
          if (content.contains(getActiveElement())) (_a = itemContext.triggerRef.value) == null ? void 0 : _a.focus();
        };
        content.addEventListener(EVENT_ROOT_CONTENT_DISMISS, handleClose);
        cleanupFn(() => content.removeEventListener(EVENT_ROOT_CONTENT_DISMISS, handleClose));
      }
    });
    function handleEscapeKeyDown(ev) {
      var _a, _b;
      emits("escapeKeyDown", ev);
      if (!ev.defaultPrevented) {
        menuContext.onItemDismiss();
        (_b = (_a = itemContext.triggerRef) == null ? void 0 : _a.value) == null ? void 0 : _b.focus();
        itemContext.wasEscapeCloseRef.value = true;
      }
    }
    function handleKeydown(ev) {
      var _a, _b;
      if (ev.target.closest("[data-reka-navigation-menu]") !== menuContext.rootNavigationMenu.value) return;
      const isMetaKey = ev.altKey || ev.ctrlKey || ev.metaKey;
      const isTabKey = ev.key === "Tab" && !isMetaKey;
      const candidates = getTabbableCandidates(ev.currentTarget);
      if (isTabKey) {
        const focusedElement = getActiveElement();
        const index = candidates.findIndex((candidate) => candidate === focusedElement);
        if (focusFirst(ev.shiftKey ? candidates.slice(0, index).reverse() : candidates.slice(index + 1, candidates.length))) ev.preventDefault();
        else {
          (_a = itemContext.focusProxyRef.value) == null ? void 0 : _a.focus();
          return;
        }
      }
      (_b = useArrowNavigation(ev, getActiveElement(), void 0, {
        itemsArray: candidates,
        loop: false,
        enableIgnoredElement: true
      })) == null ? void 0 : _b.focus();
    }
    function handleDismiss() {
      var _a;
      if (menuContext.modelValue.value !== itemContext.value) return;
      const rootContentDismissEvent = new Event(EVENT_ROOT_CONTENT_DISMISS, {
        bubbles: true,
        cancelable: true
      });
      (_a = currentElement.value) == null ? void 0 : _a.dispatchEvent(rootContentDismissEvent);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(DismissableLayer_default), mergeProps({
        id: unref(contentId),
        ref: unref(forwardRef),
        "aria-labelledby": unref(triggerId),
        "data-motion": motionAttribute.value,
        "data-state": unref(getOpenState)(unref(menuContext).modelValue.value === unref(itemContext).value),
        "data-orientation": unref(menuContext).orientation
      }, props, {
        onKeydown: handleKeydown,
        onEscapeKeyDown: handleEscapeKeyDown,
        onPointerDownOutside: handlePointerDownOutside,
        onFocusOutside: handleFocusOutside,
        onDismiss: handleDismiss
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, [
        "id",
        "aria-labelledby",
        "data-motion",
        "data-state",
        "data-orientation"
      ]);
    };
  }
});
var NavigationMenuContent_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuContent",
  props: {
    forceMount: {
      type: Boolean,
      required: false
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(reactiveOmit(props, "forceMount"), emits);
    const { forwardRef } = useForwardExpose();
    const menuContext = injectNavigationMenuContext();
    const itemContext = injectNavigationMenuItemContext();
    const open = computed(() => itemContext.value === menuContext.modelValue.value);
    const isLastActiveValue = computed(() => {
      if (menuContext.viewport.value) {
        if (!menuContext.modelValue.value && menuContext.previousValue.value) return menuContext.previousValue.value === itemContext.value;
      }
      return false;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, {
        to: unref(isClient) && unref(menuContext).viewport.value ? unref(menuContext).viewport.value : "body",
        disabled: unref(isClient) && unref(menuContext).viewport.value ? !unref(menuContext).viewport.value : true
      }, [createVNode(unref(Presence_default), {
        present: __props.forceMount || open.value || isLastActiveValue.value,
        "force-mount": !unref(menuContext).unmountOnHide.value
      }, {
        default: withCtx(({ present }) => [createVNode(NavigationMenuContentImpl_default, mergeProps({
          ref: unref(forwardRef),
          "data-state": unref(getOpenState)(open.value),
          style: { pointerEvents: !open.value && unref(menuContext).isRootMenu ? "none" : void 0 }
        }, {
          ..._ctx.$attrs,
          ...unref(forwarded)
        }, {
          hidden: !present,
          onPointerenter: _cache[0] || (_cache[0] = ($event) => unref(menuContext).onContentEnter(unref(itemContext).value)),
          onPointerleave: _cache[1] || (_cache[1] = ($event) => unref(whenMouse)(() => unref(menuContext).onContentLeave())($event)),
          onPointerDownOutside: _cache[2] || (_cache[2] = ($event) => emits("pointerDownOutside", $event)),
          onFocusOutside: _cache[3] || (_cache[3] = ($event) => emits("focusOutside", $event)),
          onInteractOutside: _cache[4] || (_cache[4] = ($event) => emits("interactOutside", $event))
        }), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16, [
          "data-state",
          "style",
          "hidden"
        ])]),
        _: 3
      }, 8, ["present", "force-mount"])], 8, ["to", "disabled"]);
    };
  }
});
var NavigationMenuIndicator_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: {
      type: Boolean,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const { forwardRef } = useForwardExpose();
    const menuContext = injectNavigationMenuContext();
    const indicatorStyle = ref();
    const isHorizontal = computed(() => menuContext.orientation === "horizontal");
    const isVisible = computed(() => !!menuContext.modelValue.value);
    const { activeTrigger } = menuContext;
    function handlePositionChange() {
      if (!activeTrigger.value) return;
      indicatorStyle.value = {
        size: isHorizontal.value ? activeTrigger.value.offsetWidth : activeTrigger.value.offsetHeight,
        position: isHorizontal.value ? activeTrigger.value.offsetLeft : activeTrigger.value.offsetTop
      };
    }
    watchEffect(() => {
      if (!menuContext.modelValue.value) return;
      handlePositionChange();
    });
    useResizeObserver(activeTrigger, handlePositionChange);
    useResizeObserver(menuContext.indicatorTrack, handlePositionChange);
    return (_ctx, _cache) => {
      return unref(menuContext).indicatorTrack.value ? (openBlock(), createBlock(Teleport, {
        key: 0,
        to: unref(menuContext).indicatorTrack.value
      }, [createVNode(unref(Presence_default), { present: __props.forceMount || isVisible.value }, {
        default: withCtx(() => [createVNode(unref(Primitive), mergeProps({
          ref: unref(forwardRef),
          "aria-hidden": "true",
          "data-state": isVisible.value ? "visible" : "hidden",
          "data-orientation": unref(menuContext).orientation,
          "as-child": props.asChild,
          as: __props.as,
          style: { ...indicatorStyle.value ? {
            "--reka-navigation-menu-indicator-size": `${indicatorStyle.value.size}px`,
            "--reka-navigation-menu-indicator-position": `${indicatorStyle.value.position}px`
          } : {} }
        }, _ctx.$attrs), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16, [
          "data-state",
          "data-orientation",
          "as-child",
          "as",
          "style"
        ])]),
        _: 3
      }, 8, ["present"])], 8, ["to"])) : createCommentVNode("v-if", true);
    };
  }
});
var NavigationMenuLink_default = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuLink",
  props: {
    active: {
      type: Boolean,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "a"
    }
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { CollectionItem } = useCollection({ key: "NavigationMenu" });
    useForwardExpose();
    async function handleClick(ev) {
      var _a;
      const linkSelectEvent = new CustomEvent(LINK_SELECT, {
        bubbles: true,
        cancelable: true,
        detail: { originalEvent: ev }
      });
      emits("select", linkSelectEvent);
      if (!linkSelectEvent.defaultPrevented && !ev.metaKey) {
        const rootContentDismissEvent = new CustomEvent(EVENT_ROOT_CONTENT_DISMISS, {
          bubbles: true,
          cancelable: true
        });
        (_a = ev.target) == null ? void 0 : _a.dispatchEvent(rootContentDismissEvent);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(CollectionItem), null, {
        default: withCtx(() => [createVNode(unref(Primitive), {
          as: __props.as,
          "data-active": __props.active ? "" : void 0,
          "aria-current": __props.active ? "page" : void 0,
          "as-child": props.asChild,
          onClick: handleClick
        }, {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 8, [
          "as",
          "data-active",
          "aria-current",
          "as-child"
        ])]),
        _: 3
      });
    };
  }
});
var NavigationMenuList_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuList",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "ul"
    }
  },
  setup(__props) {
    const props = __props;
    const menuContext = injectNavigationMenuContext();
    const { forwardRef} = useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        ref: unref(forwardRef),
        style: { "position": "relative" }
      }, {
        default: withCtx(() => [createVNode(unref(Primitive), mergeProps(_ctx.$attrs, {
          "as-child": props.asChild,
          as: __props.as,
          "data-orientation": unref(menuContext).orientation
        }), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16, [
          "as-child",
          "as",
          "data-orientation"
        ])]),
        _: 3
      }, 512);
    };
  }
});
var _hoisted_1 = ["aria-owns"];
var NavigationMenuTrigger_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuTrigger",
  props: {
    disabled: {
      type: Boolean,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "button"
    }
  },
  setup(__props) {
    const props = __props;
    const menuContext = injectNavigationMenuContext();
    const itemContext = injectNavigationMenuItemContext();
    const { CollectionItem } = useCollection({ key: "NavigationMenu" });
    const { forwardRef, currentElement: triggerElement } = useForwardExpose();
    const triggerId = ref("");
    const contentId = ref("");
    const hasPointerMoveOpenedRef = refAutoReset(false, 300);
    const wasClickCloseRef = ref(false);
    const open = computed(() => itemContext.value === menuContext.modelValue.value);
    function handlePointerEnter() {
      if (menuContext.disableHoverTrigger.value) return;
      wasClickCloseRef.value = false;
      itemContext.wasEscapeCloseRef.value = false;
    }
    function handlePointerMove(ev) {
      if (ev.defaultPrevented || menuContext.disableHoverTrigger.value) return;
      if (ev.pointerType === "mouse") {
        if (props.disabled || wasClickCloseRef.value || itemContext.wasEscapeCloseRef.value || hasPointerMoveOpenedRef.value) return;
        menuContext.onTriggerEnter(itemContext.value);
        hasPointerMoveOpenedRef.value = true;
      }
    }
    function handlePointerLeave(ev) {
      if (menuContext.disableHoverTrigger.value) return;
      if (ev.pointerType === "mouse") {
        if (props.disabled) return;
        menuContext.onTriggerLeave();
        hasPointerMoveOpenedRef.value = false;
      }
    }
    function handleClick(event) {
      if (event.defaultPrevented) return;
      if ((!("pointerType" in event) || event.pointerType === "mouse") && menuContext.disableClickTrigger.value) return;
      if (hasPointerMoveOpenedRef.value) return;
      if (open.value) menuContext.onItemSelect("");
      else menuContext.onItemSelect(itemContext.value);
      wasClickCloseRef.value = open.value;
    }
    function handleKeydown(ev) {
      if (ev.defaultPrevented) return;
      const entryKey = {
        horizontal: "ArrowDown",
        vertical: menuContext.dir.value === "rtl" ? "ArrowLeft" : "ArrowRight"
      }[menuContext.orientation];
      if (open.value && ev.key === entryKey) {
        itemContext.onEntryKeyDown();
        ev.preventDefault();
        ev.stopPropagation();
      }
    }
    function setFocusProxyRef(node) {
      if (!node) return void 0;
      itemContext.focusProxyRef.value = unrefElement(node);
    }
    function handleVisuallyHiddenFocus(ev) {
      const content = (void 0).getElementById(itemContext.contentId);
      const prevFocusedElement = ev.relatedTarget;
      const wasTriggerFocused = prevFocusedElement === triggerElement.value;
      const wasFocusFromContent = content == null ? void 0 : content.contains(prevFocusedElement);
      if (wasTriggerFocused || !wasFocusFromContent) itemContext.onFocusProxyEnter(wasTriggerFocused ? "start" : "end");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(CollectionItem), null, {
        default: withCtx(() => [createVNode(unref(Primitive), mergeProps({
          id: triggerId.value,
          ref: unref(forwardRef),
          disabled: __props.disabled,
          "data-disabled": __props.disabled ? "" : void 0,
          "data-state": unref(getOpenState)(open.value),
          "data-navigation-menu-trigger": "",
          "aria-expanded": open.value,
          "aria-controls": contentId.value,
          "as-child": props.asChild,
          as: __props.as
        }, _ctx.$attrs, {
          onPointerenter: handlePointerEnter,
          onPointermove: handlePointerMove,
          onPointerleave: handlePointerLeave,
          onClick: handleClick,
          onKeydown: handleKeydown
        }), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16, [
          "id",
          "disabled",
          "data-disabled",
          "data-state",
          "aria-expanded",
          "aria-controls",
          "as-child",
          "as"
        ])]),
        _: 3
      }), open.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(VisuallyHidden_default), {
        ref: setFocusProxyRef,
        tabindex: 0,
        onFocus: handleVisuallyHiddenFocus
      }, null, 512), unref(menuContext).viewport ? (openBlock(), createElementBlock("span", {
        key: 0,
        "aria-owns": contentId.value
      }, null, 8, _hoisted_1)) : createCommentVNode("v-if", true)], 64)) : createCommentVNode("v-if", true)], 64);
    };
  }
});
var NavigationMenuViewport_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuViewport",
  props: {
    forceMount: {
      type: Boolean,
      required: false
    },
    align: {
      type: String,
      required: false,
      default: "center"
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    var _a;
    const props = __props;
    const { forwardRef, currentElement } = useForwardExpose();
    const menuContext = injectNavigationMenuContext();
    const { activeTrigger, rootNavigationMenu, modelValue } = menuContext;
    const size2 = ref();
    const position = ref();
    const open = computed(() => !!menuContext.modelValue.value);
    watch(currentElement, () => {
      menuContext.onViewportChange(currentElement.value);
    });
    const content = ref();
    watch([modelValue, open], () => {
      nextTick(() => {
        if (!currentElement.value) return;
        requestAnimationFrame(() => {
          var _a2;
          const el = (_a2 = currentElement.value) == null ? void 0 : _a2.querySelector("[data-state=open]");
          content.value = el;
        });
      });
    }, { immediate: true });
    function updatePosition() {
      if (content.value && activeTrigger.value && rootNavigationMenu.value) {
        const bodyWidth = (void 0).documentElement.offsetWidth;
        const bodyHeight = (void 0).documentElement.offsetHeight;
        const rootRect = rootNavigationMenu.value.getBoundingClientRect();
        const rect = activeTrigger.value.getBoundingClientRect();
        const { offsetWidth, offsetHeight } = content.value;
        const startPositionLeft = rect.left - rootRect.left;
        const startPositionTop = rect.top - rootRect.top;
        let posLeft = null;
        let posTop = null;
        switch (props.align) {
          case "start":
            posLeft = startPositionLeft;
            posTop = startPositionTop;
            break;
          case "end":
            posLeft = startPositionLeft - offsetWidth + rect.width;
            posTop = startPositionTop - offsetHeight + rect.height;
            break;
          default:
            posLeft = startPositionLeft - offsetWidth / 2 + rect.width / 2;
            posTop = startPositionTop - offsetHeight / 2 + rect.height / 2;
        }
        const screenOffset = 10;
        if (posLeft + rootRect.left < screenOffset) posLeft = screenOffset - rootRect.left;
        const rightOffset = posLeft + rootRect.left + offsetWidth;
        if (rightOffset > bodyWidth - screenOffset) {
          posLeft -= rightOffset - bodyWidth + screenOffset;
          if (posLeft < screenOffset - rootRect.left) posLeft = screenOffset - rootRect.left;
        }
        if (posTop + rootRect.top < screenOffset) posTop = screenOffset - rootRect.top;
        const bottomOffset = posTop + rootRect.top + offsetHeight;
        if (bottomOffset > bodyHeight - screenOffset) {
          posTop -= bottomOffset - bodyHeight + screenOffset;
          if (posTop < screenOffset - rootRect.top) posTop = screenOffset - rootRect.top;
        }
        posLeft = Math.round(posLeft);
        posTop = Math.round(posTop);
        position.value = {
          left: posLeft,
          top: posTop
        };
      }
    }
    useResizeObserver(content, () => {
      if (content.value) {
        size2.value = {
          width: content.value.offsetWidth,
          height: content.value.offsetHeight
        };
        updatePosition();
      }
    });
    useResizeObserver([(_a = globalThis.document) == null ? void 0 : _a.body, rootNavigationMenu], () => {
      updatePosition();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Presence_default), {
        present: __props.forceMount || open.value,
        "force-mount": !unref(menuContext).unmountOnHide.value,
        onAfterLeave: _cache[2] || (_cache[2] = () => {
          size2.value = void 0;
          position.value = void 0;
        })
      }, {
        default: withCtx(({ present }) => {
          var _a2, _b, _c, _d;
          return [createVNode(unref(Primitive), mergeProps(_ctx.$attrs, {
            ref: unref(forwardRef),
            as: __props.as,
            "as-child": __props.asChild,
            "data-state": unref(getOpenState)(open.value),
            "data-orientation": unref(menuContext).orientation,
            style: {
              pointerEvents: !open.value && unref(menuContext).isRootMenu ? "none" : void 0,
              ["--reka-navigation-menu-viewport-width"]: size2.value ? `${(_a2 = size2.value) == null ? void 0 : _a2.width}px` : void 0,
              ["--reka-navigation-menu-viewport-height"]: size2.value ? `${(_b = size2.value) == null ? void 0 : _b.height}px` : void 0,
              ["--reka-navigation-menu-viewport-left"]: position.value ? `${(_c = position.value) == null ? void 0 : _c.left}px` : void 0,
              ["--reka-navigation-menu-viewport-top"]: position.value ? `${(_d = position.value) == null ? void 0 : _d.top}px` : void 0
            },
            hidden: !present,
            onPointerenter: _cache[0] || (_cache[0] = ($event) => unref(menuContext).onContentEnter(unref(menuContext).modelValue.value)),
            onPointerleave: _cache[1] || (_cache[1] = ($event) => unref(whenMouse)(() => unref(menuContext).onContentLeave())($event))
          }), {
            default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
            _: 3
          }, 16, [
            "as",
            "as-child",
            "data-state",
            "data-orientation",
            "style",
            "hidden"
          ])];
        }),
        _: 3
      }, 8, ["present", "force-mount"]);
    };
  }
});
var TooltipArrow_default = /* @__PURE__ */ defineComponent({
  __name: "TooltipArrow",
  props: {
    width: {
      type: Number,
      required: false,
      default: 10
    },
    height: {
      type: Number,
      required: false,
      default: 5
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "svg"
    }
  },
  setup(__props) {
    const props = __props;
    useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(PopperArrow_default), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var TOOLTIP_OPEN = "tooltip.open";
var [injectTooltipRootContext, provideTooltipRootContext] = /* @__PURE__ */ createContext("TooltipRoot");
var TooltipRoot_default = /* @__PURE__ */ defineComponent({
  __name: "TooltipRoot",
  props: {
    defaultOpen: {
      type: Boolean,
      required: false,
      default: false
    },
    open: {
      type: Boolean,
      required: false,
      default: void 0
    },
    delayDuration: {
      type: Number,
      required: false,
      default: void 0
    },
    disableHoverableContent: {
      type: Boolean,
      required: false,
      default: void 0
    },
    disableClosingTrigger: {
      type: Boolean,
      required: false,
      default: void 0
    },
    disabled: {
      type: Boolean,
      required: false,
      default: void 0
    },
    ignoreNonKeyboardFocus: {
      type: Boolean,
      required: false,
      default: void 0
    }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    useForwardExpose();
    const providerContext = injectTooltipProviderContext();
    const disableHoverableContent = computed(() => {
      var _a;
      return (_a = props.disableHoverableContent) != null ? _a : providerContext.disableHoverableContent.value;
    });
    const disableClosingTrigger = computed(() => {
      var _a;
      return (_a = props.disableClosingTrigger) != null ? _a : providerContext.disableClosingTrigger.value;
    });
    const disableTooltip = computed(() => {
      var _a;
      return (_a = props.disabled) != null ? _a : providerContext.disabled.value;
    });
    const delayDuration = computed(() => {
      var _a;
      return (_a = props.delayDuration) != null ? _a : providerContext.delayDuration.value;
    });
    const ignoreNonKeyboardFocus = computed(() => {
      var _a;
      return (_a = props.ignoreNonKeyboardFocus) != null ? _a : providerContext.ignoreNonKeyboardFocus.value;
    });
    const open = useVModel(props, "open", emit, {
      defaultValue: props.defaultOpen,
      passive: props.open === void 0
    });
    watch(open, (isOpen) => {
      if (!providerContext.onClose) return;
      if (isOpen) {
        providerContext.onOpen();
        (void 0).dispatchEvent(new CustomEvent(TOOLTIP_OPEN));
      } else providerContext.onClose();
    });
    const wasOpenDelayedRef = ref(false);
    const trigger = ref();
    const stateAttribute = computed(() => {
      if (!open.value) return "closed";
      return wasOpenDelayedRef.value ? "delayed-open" : "instant-open";
    });
    const { start: startTimer, stop: clearTimer } = useTimeoutFn(() => {
      wasOpenDelayedRef.value = true;
      open.value = true;
    }, delayDuration, { immediate: false });
    function handleOpen() {
      clearTimer();
      wasOpenDelayedRef.value = false;
      open.value = true;
    }
    function handleClose() {
      clearTimer();
      open.value = false;
    }
    function handleDelayedOpen() {
      startTimer();
    }
    provideTooltipRootContext({
      contentId: "",
      open,
      stateAttribute,
      trigger,
      onTriggerChange(el) {
        trigger.value = el;
      },
      onTriggerEnter() {
        if (providerContext.isOpenDelayed.value) handleDelayedOpen();
        else handleOpen();
      },
      onTriggerLeave() {
        if (disableHoverableContent.value) handleClose();
        else clearTimer();
      },
      onOpen: handleOpen,
      onClose: handleClose,
      disableHoverableContent,
      disableClosingTrigger,
      disabled: disableTooltip,
      ignoreNonKeyboardFocus
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(PopperRoot_default), null, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", { open: unref(open) })]),
        _: 3
      });
    };
  }
});
var TooltipContentImpl_default = /* @__PURE__ */ defineComponent({
  __name: "TooltipContentImpl",
  props: {
    ariaLabel: {
      type: String,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false,
      default: void 0
    },
    as: {
      type: null,
      required: false
    },
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false,
      default: void 0
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false,
      default: void 0
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const rootContext = injectTooltipRootContext();
    const providerContext = injectTooltipProviderContext();
    const { forwardRef, currentElement } = useForwardExpose();
    const ariaLabel = computed(() => {
      var _a;
      return props.ariaLabel || ((_a = currentElement.value) == null ? void 0 : _a.textContent);
    });
    const popperContentProps = computed(() => {
      var _a;
      const { ariaLabel: _, ...restProps } = props;
      return defu(restProps, (_a = providerContext.content.value) != null ? _a : {}, {
        side: "top",
        sideOffset: 0,
        align: "center",
        avoidCollisions: true,
        collisionBoundary: [],
        collisionPadding: 0,
        arrowPadding: 0,
        sticky: "partial",
        hideWhenDetached: false
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(DismissableLayer_default), {
        "as-child": "",
        "disable-outside-pointer-events": false,
        onEscapeKeyDown: _cache[0] || (_cache[0] = ($event) => emits("escapeKeyDown", $event)),
        onPointerDownOutside: _cache[1] || (_cache[1] = (event) => {
          var _a;
          if (unref(rootContext).disableClosingTrigger.value && ((_a = unref(rootContext).trigger.value) == null ? void 0 : _a.contains(event.target))) event.preventDefault();
          emits("pointerDownOutside", event);
        }),
        onFocusOutside: _cache[2] || (_cache[2] = withModifiers(() => {
        }, ["prevent"])),
        onDismiss: _cache[3] || (_cache[3] = ($event) => unref(rootContext).onClose())
      }, {
        default: withCtx(() => [createVNode(unref(PopperContent_default), mergeProps({
          ref: unref(forwardRef),
          "data-state": unref(rootContext).stateAttribute.value
        }, {
          ..._ctx.$attrs,
          ...popperContentProps.value
        }, { style: {
          "--reka-tooltip-content-transform-origin": "var(--reka-popper-transform-origin)",
          "--reka-tooltip-content-available-width": "var(--reka-popper-available-width)",
          "--reka-tooltip-content-available-height": "var(--reka-popper-available-height)",
          "--reka-tooltip-trigger-width": "var(--reka-popper-anchor-width)",
          "--reka-tooltip-trigger-height": "var(--reka-popper-anchor-height)"
        } }), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default"), createVNode(unref(VisuallyHidden_default), {
            id: unref(rootContext).contentId,
            role: "tooltip"
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(ariaLabel.value), 1)]),
            _: 1
          }, 8, ["id"])]),
          _: 3
        }, 16, ["data-state"])]),
        _: 3
      });
    };
  }
});
var TooltipContentHoverable_default = /* @__PURE__ */ defineComponent({
  __name: "TooltipContentHoverable",
  props: {
    ariaLabel: {
      type: String,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    },
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    }
  },
  setup(__props) {
    const forwardedProps = useForwardProps$1(__props);
    const { forwardRef, currentElement } = useForwardExpose();
    const { trigger, onClose } = injectTooltipRootContext();
    const providerContext = injectTooltipProviderContext();
    const { isPointerInTransit, onPointerExit } = useGraceArea(trigger, currentElement);
    providerContext.isPointerInTransitRef = isPointerInTransit;
    onPointerExit(() => {
      onClose();
    });
    useEventListener(currentElement, "pointermove", (event) => {
      var _a, _b;
      const content = currentElement.value;
      if (!content || event.pointerType === "touch") return;
      if ((_b = (_a = content.ownerDocument).elementsFromPoint) == null ? void 0 : _b.call(_a, event.clientX, event.clientY).some((el) => {
        if (content.contains(el)) return false;
        const coveredTrigger = el.closest("[data-grace-area-trigger]");
        return !!coveredTrigger && coveredTrigger !== trigger.value;
      })) onClose();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(TooltipContentImpl_default, mergeProps({ ref: unref(forwardRef) }, unref(forwardedProps)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var TooltipContent_default = /* @__PURE__ */ defineComponent({
  __name: "TooltipContent",
  props: {
    forceMount: {
      type: Boolean,
      required: false
    },
    ariaLabel: {
      type: String,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    },
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const rootContext = injectTooltipRootContext();
    const forwarded = useForwardPropsEmits(props, emits);
    const { forwardRef } = useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Presence_default), { present: __props.forceMount || unref(rootContext).open.value }, {
        default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(unref(rootContext).disableHoverableContent.value ? TooltipContentImpl_default : TooltipContentHoverable_default), mergeProps({ ref: unref(forwardRef) }, unref(forwarded)), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16))]),
        _: 3
      }, 8, ["present"]);
    };
  }
});
var TooltipPortal_default = /* @__PURE__ */ defineComponent({
  __name: "TooltipPortal",
  props: {
    to: {
      type: null,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    defer: {
      type: Boolean,
      required: false
    },
    forceMount: {
      type: Boolean,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Teleport_default), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var TooltipTrigger_default = /* @__PURE__ */ defineComponent({
  __name: "TooltipTrigger",
  props: {
    reference: {
      type: null,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "button"
    }
  },
  setup(__props) {
    const props = __props;
    const rootContext = injectTooltipRootContext();
    const providerContext = injectTooltipProviderContext();
    rootContext.contentId || (rootContext.contentId = useId$1(void 0, "reka-tooltip-content"));
    const { forwardRef, currentElement: triggerElement } = useForwardExpose();
    const isPointerDown = ref(false);
    const hasPointerMoveOpened = ref(false);
    const tooltipListeners = computed(() => {
      if (rootContext.disabled.value) return {};
      return {
        click: handleClick,
        focus: handleFocus,
        pointermove: handlePointerMove,
        pointerleave: handlePointerLeave,
        pointerdown: handlePointerDown,
        blur: handleBlur
      };
    });
    watch(triggerElement, (el) => {
      rootContext.onTriggerChange(el);
    }, { immediate: true });
    function handlePointerUp() {
      setTimeout(() => {
        isPointerDown.value = false;
      }, 1);
    }
    function handlePointerDown() {
      if (rootContext.open && !rootContext.disableClosingTrigger.value) rootContext.onClose();
      isPointerDown.value = true;
      (void 0).addEventListener("pointerup", handlePointerUp, { once: true });
    }
    function handlePointerMove(event) {
      if (event.pointerType === "touch") return;
      if (!hasPointerMoveOpened.value && !providerContext.isPointerInTransitRef.value) {
        rootContext.onTriggerEnter();
        hasPointerMoveOpened.value = true;
      }
    }
    function handlePointerLeave() {
      rootContext.onTriggerLeave();
      hasPointerMoveOpened.value = false;
    }
    function handleFocus(event) {
      var _a, _b;
      if (isPointerDown.value) return;
      if (rootContext.ignoreNonKeyboardFocus.value && !((_b = (_a = event.target).matches) == null ? void 0 : _b.call(_a, ":focus-visible"))) return;
      rootContext.onOpen();
    }
    function handleBlur() {
      rootContext.onClose();
    }
    function handleClick() {
      if (!rootContext.disableClosingTrigger.value) rootContext.onClose();
    }
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createBlock(unref(PopperAnchor_default), {
        "as-child": "",
        reference: (_a = __props.reference) != null ? _a : unref(triggerElement)
      }, {
        default: withCtx(() => [createVNode(unref(Primitive), mergeProps({
          ref: unref(forwardRef),
          "aria-describedby": unref(rootContext).open.value ? unref(rootContext).contentId : void 0,
          "data-state": unref(rootContext).stateAttribute.value,
          as: __props.as,
          "as-child": props.asChild,
          "data-grace-area-trigger": ""
        }, toHandlers(tooltipListeners.value)), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16, [
          "aria-describedby",
          "data-state",
          "as",
          "as-child"
        ])]),
        _: 3
      }, 8, ["reference"]);
    };
  }
});
function useLazyOverlay(open, preload) {
  const rendered = ref(!!toValue(open));
  watch(() => toValue(open), (value) => {
    if (value) rendered.value = true;
  });
  return rendered;
}
var loaders = {
  modal: () => import('./Modal-B3gTgqQa.mjs').then((n) => n.t),
  slideover: () => import('./Slideover-B0Jc8ALV.mjs'),
  drawer: () => import('./Drawer-94vVYUrj.mjs')
};
var lazyOverlays = {
  modal: defineAsyncComponent(loaders.modal),
  slideover: defineAsyncComponent(loaders.slideover),
  drawer: defineAsyncComponent(loaders.drawer)
};
var virtual_nuxt__nuxt_2Fui_2Fheader_default = {
  "slots": {
    "root": "bg-default/75 backdrop-blur-sm border-b border-default h-(--ui-header-height) sticky top-0 z-50",
    "container": "flex items-center justify-between gap-3 h-full",
    "left": "lg:flex-1 flex items-center gap-1.5",
    "center": "hidden lg:flex",
    "right": "flex items-center justify-end lg:flex-1 gap-1.5",
    "title": "shrink-0 font-bold text-xl text-highlighted flex items-end gap-1.5",
    "toggle": "lg:hidden",
    "content": "lg:hidden",
    "overlay": "lg:hidden",
    "header": "px-4 sm:px-6 h-(--ui-header-height) shrink-0 flex items-center justify-between gap-3",
    "body": "p-4 sm:p-6 overflow-y-auto"
  },
  "variants": { "toggleSide": {
    "left": { "toggle": "-ms-1.5" },
    "right": { "toggle": "-me-1.5" }
  } }
};
var _sfc_main$5 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UHeader",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: {
      type: null,
      required: false,
      default: "header"
    },
    title: {
      type: String,
      required: false,
      default: "Nuxt UI"
    },
    to: {
      type: String,
      required: false,
      default: "/"
    },
    mode: {
      type: null,
      required: false,
      default: "modal"
    },
    menu: {
      type: null,
      required: false
    },
    toggle: {
      type: [Boolean, Object],
      required: false,
      default: true
    },
    toggleSide: {
      type: String,
      required: false,
      default: "right"
    },
    autoClose: {
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
    }
  }, {
    "open": {
      type: Boolean,
      default: false
    },
    "openModifiers": {}
  }),
  emits: ["update:open"],
  setup(__props) {
    const _props = __props;
    const slots = useSlots();
    const props = useComponentProps("header", _props);
    const open = useModel(__props, "open", {
      type: Boolean,
      default: false
    });
    const route = useRoute$1();
    const { t, locale } = useLocale();
    const appConfig = useAppConfig();
    const [DefineLeftTemplate, ReuseLeftTemplate] = createReusableTemplate();
    const [DefineRightTemplate, ReuseRightTemplate] = createReusableTemplate();
    const [DefineToggleTemplate, ReuseToggleTemplate] = createReusableTemplate();
    const ariaLabel = computed(() => {
      return (slots.title && getSlotChildrenText(slots.title()) || props.title || "Nuxt UI").trim();
    });
    watch(() => route.fullPath, () => {
      if (!props.autoClose) return;
      open.value = false;
    });
    const ui = computed(() => {
      var _a;
      return tv({
        extend: virtual_nuxt__nuxt_2Fui_2Fheader_default,
        ...((_a = appConfig.ui) == null ? void 0 : _a.header) || {}
      })();
    });
    const { slideover: USlideover, modal: UModal, drawer: UDrawer } = lazyOverlays;
    const Menu = computed(() => ({
      slideover: USlideover,
      modal: UModal,
      drawer: UDrawer
    })[props.mode]);
    const menuProps = toRef(() => defu(props.menu, {}, props.mode === "modal" ? {
      fullscreen: true,
      transition: false
    } : {}));
    const renderMenu = useLazyOverlay(() => {
      var _a;
      return open.value || ((_a = props.menu) == null ? void 0 : _a.unmountOnHide) === false;
    });
    function toggleOpen() {
      open.value = !open.value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineToggleTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) ssrRenderSlot(_ctx.$slots, "toggle", {
            open: open.value,
            toggle: toggleOpen,
            ui: ui.value
          }, () => {
            var _a2;
            if (unref(props).toggle) _push2(ssrRenderComponent(_sfc_main$6, mergeProps({
              color: "neutral",
              variant: "ghost",
              "aria-label": open.value ? unref(t)("header.close") : unref(t)("header.open"),
              icon: open.value ? unref(appConfig).ui.icons.close : unref(appConfig).ui.icons.menu
            }, typeof unref(props).toggle === "object" ? unref(props).toggle : {}, {
              "data-slot": "toggle",
              class: ui.value.toggle({
                class: (_a2 = unref(props).ui) == null ? void 0 : _a2.toggle,
                toggleSide: unref(props).toggleSide
              }),
              onClick: toggleOpen
            }), null, _parent2, _scopeId));
            else _push2(`<!---->`);
          }, _push2, _parent2, _scopeId);
          else return [renderSlot(_ctx.$slots, "toggle", {
            open: open.value,
            toggle: toggleOpen,
            ui: ui.value
          }, () => {
            var _a2;
            return [unref(props).toggle ? (openBlock(), createBlock(_sfc_main$6, mergeProps({
              key: 0,
              color: "neutral",
              variant: "ghost",
              "aria-label": open.value ? unref(t)("header.close") : unref(t)("header.open"),
              icon: open.value ? unref(appConfig).ui.icons.close : unref(appConfig).ui.icons.menu
            }, typeof unref(props).toggle === "object" ? unref(props).toggle : {}, {
              "data-slot": "toggle",
              class: ui.value.toggle({
                class: (_a2 = unref(props).ui) == null ? void 0 : _a2.toggle,
                toggleSide: unref(props).toggleSide
              }),
              onClick: toggleOpen
            }), null, 16, [
              "aria-label",
              "icon",
              "class"
            ])) : createCommentVNode("", true)];
          })];
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(DefineLeftTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`<div data-slot="left" class="${ssrRenderClass(ui.value.left({ class: (_a2 = unref(props).ui) == null ? void 0 : _a2.left }))}"${_scopeId}>`);
            if (unref(props).toggleSide === "left") _push2(ssrRenderComponent(unref(ReuseToggleTemplate), null, null, _parent2, _scopeId));
            else _push2(`<!---->`);
            ssrRenderSlot(_ctx.$slots, "left", {}, () => {
              var _a3;
              _push2(ssrRenderComponent(_sfc_main$1$1, {
                to: unref(props).to,
                "aria-label": ariaLabel.value,
                "data-slot": "title",
                class: ui.value.title({ class: (_a3 = unref(props).ui) == null ? void 0 : _a3.title })
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                    _push3(`${ssrInterpolate(unref(props).title)}`);
                  }, _push3, _parent3, _scopeId2);
                  else return [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])];
                }),
                _: 3
              }, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else return [createVNode("div", {
            "data-slot": "left",
            class: ui.value.left({ class: (_b2 = unref(props).ui) == null ? void 0 : _b2.left })
          }, [unref(props).toggleSide === "left" ? (openBlock(), createBlock(unref(ReuseToggleTemplate), { key: 0 })) : createCommentVNode("", true), renderSlot(_ctx.$slots, "left", {}, () => {
            var _a3;
            return [createVNode(_sfc_main$1$1, {
              to: unref(props).to,
              "aria-label": ariaLabel.value,
              "data-slot": "title",
              class: ui.value.title({ class: (_a3 = unref(props).ui) == null ? void 0 : _a3.title })
            }, {
              default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
              _: 3
            }, 8, [
              "to",
              "aria-label",
              "class"
            ])];
          })], 2)];
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(DefineRightTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`<div data-slot="right" class="${ssrRenderClass(ui.value.right({ class: (_a2 = unref(props).ui) == null ? void 0 : _a2.right }))}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "right", {}, null, _push2, _parent2, _scopeId);
            if (unref(props).toggleSide === "right") _push2(ssrRenderComponent(unref(ReuseToggleTemplate), null, null, _parent2, _scopeId));
            else _push2(`<!---->`);
            _push2(`</div>`);
          } else return [createVNode("div", {
            "data-slot": "right",
            class: ui.value.right({ class: (_b2 = unref(props).ui) == null ? void 0 : _b2.right })
          }, [renderSlot(_ctx.$slots, "right"), unref(props).toggleSide === "right" ? (openBlock(), createBlock(unref(ReuseToggleTemplate), { key: 0 })) : createCommentVNode("", true)], 2)];
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: unref(props).as,
        "data-slot": "root"
      }, _ctx.$attrs, { class: ui.value.root({ class: [(_a = unref(props).ui) == null ? void 0 : _a.root, unref(props).class] }) }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "top", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(_sfc_main$7, {
              "data-slot": "container",
              class: ui.value.container({ class: (_a2 = unref(props).ui) == null ? void 0 : _a2.container })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a3, _b3;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ReuseLeftTemplate), null, null, _parent3, _scopeId2));
                  _push3(`<div data-slot="center" class="${ssrRenderClass(ui.value.center({ class: (_a3 = unref(props).ui) == null ? void 0 : _a3.center }))}"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(unref(ReuseRightTemplate), null, null, _parent3, _scopeId2));
                } else return [
                  createVNode(unref(ReuseLeftTemplate)),
                  createVNode("div", {
                    "data-slot": "center",
                    class: ui.value.center({ class: (_b3 = unref(props).ui) == null ? void 0 : _b3.center })
                  }, [renderSlot(_ctx.$slots, "default")], 2),
                  createVNode(unref(ReuseRightTemplate))
                ];
              }),
              _: 3
            }, _parent2, _scopeId));
            ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push2, _parent2, _scopeId);
          } else return [
            renderSlot(_ctx.$slots, "top"),
            createVNode(_sfc_main$7, {
              "data-slot": "container",
              class: ui.value.container({ class: (_b2 = unref(props).ui) == null ? void 0 : _b2.container })
            }, {
              default: withCtx(() => {
                var _a3;
                return [
                  createVNode(unref(ReuseLeftTemplate)),
                  createVNode("div", {
                    "data-slot": "center",
                    class: ui.value.center({ class: (_a3 = unref(props).ui) == null ? void 0 : _a3.center })
                  }, [renderSlot(_ctx.$slots, "default")], 2),
                  createVNode(unref(ReuseRightTemplate))
                ];
              }),
              _: 3
            }, 8, ["class"]),
            renderSlot(_ctx.$slots, "bottom")
          ];
        }),
        _: 3
      }, _parent));
      if (unref(renderMenu)) _push(ssrRenderComponent(unref(Menu), mergeProps({
        open: open.value,
        "onUpdate:open": ($event) => open.value = $event,
        title: ((_b = unref(locale).messages.header) == null ? void 0 : _b.title) || unref(t)("header.open"),
        description: (_c = unref(locale).messages.header) == null ? void 0 : _c.description
      }, menuProps.value, { ui: {
        overlay: ui.value.overlay({ class: (_d = unref(props).ui) == null ? void 0 : _d.overlay }),
        content: ui.value.content({ class: (_e = unref(props).ui) == null ? void 0 : _e.content })
      } }), {
        content: withCtx((contentData, _push2, _parent2, _scopeId) => {
          if (_push2) ssrRenderSlot(_ctx.$slots, "content", contentData, () => {
            var _a2, _b2;
            if (unref(props).mode !== "drawer") {
              _push2(`<div data-slot="header" class="${ssrRenderClass(ui.value.header({ class: (_a2 = unref(props).ui) == null ? void 0 : _a2.header }))}"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(ReuseLeftTemplate), null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(ReuseRightTemplate), null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else _push2(`<!---->`);
            _push2(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: (_b2 = unref(props).ui) == null ? void 0 : _b2.body }))}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "body", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          }, _push2, _parent2, _scopeId);
          else return [renderSlot(_ctx.$slots, "content", contentData, () => {
            var _a2, _b2;
            return [unref(props).mode !== "drawer" ? (openBlock(), createBlock("div", {
              key: 0,
              "data-slot": "header",
              class: ui.value.header({ class: (_a2 = unref(props).ui) == null ? void 0 : _a2.header })
            }, [createVNode(unref(ReuseLeftTemplate)), createVNode(unref(ReuseRightTemplate))], 2)) : createCommentVNode("", true), createVNode("div", {
              "data-slot": "body",
              class: ui.value.body({ class: (_b2 = unref(props).ui) == null ? void 0 : _b2.body })
            }, [renderSlot(_ctx.$slots, "body")], 2)];
          })];
        }),
        _: 3
      }, _parent));
      else _push(`<!---->`);
      _push(`<!--]-->`);
    };
  }
});
var _sfc_setup$10 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Header.vue");
  return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
var virtual_nuxt__nuxt_2Fui_2Fpopover_default = { "slots": {
  "content": "bg-default shadow-lg rounded-md ring ring-default data-[state=open]:animate-[scale-in_100ms_var(--ease-out)] data-[state=closed]:animate-[scale-out_100ms_var(--ease-out)] origin-(--reka-popover-content-transform-origin) focus:outline-none pointer-events-auto",
  "arrow": "fill-bg stroke-default"
} };
var _sfc_main$4 = {
  __name: "UPopover",
  __ssrInlineRender: true,
  props: {
    mode: {
      type: null,
      required: false,
      default: "click"
    },
    content: {
      type: Object,
      required: false
    },
    arrow: {
      type: [Boolean, Object],
      required: false
    },
    portal: {
      type: [Boolean, String],
      required: false,
      skipCheck: true,
      default: true
    },
    reference: {
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
    defaultOpen: {
      type: Boolean,
      required: false
    },
    open: {
      type: Boolean,
      required: false
    },
    modal: {
      type: Boolean,
      required: false
    },
    openDelay: {
      type: Number,
      required: false,
      default: 0
    },
    closeDelay: {
      type: Number,
      required: false,
      default: 0
    },
    enableTouch: {
      type: Boolean,
      required: false
    }
  },
  emits: ["close:prevent", "update:open"],
  setup(__props, { emit: __emit }) {
    const Popover = {
      Root: PopoverRoot_default,
      Trigger: PopoverTrigger_default,
      Portal: PopoverPortal_default,
      Content: PopoverContent_default,
      Arrow: PopoverArrow_default,
      Anchor: PopoverAnchor_default
    };
    const HoverCard = {
      Root: HoverCardRoot_default,
      Trigger: HoverCardTrigger_default,
      Portal: HoverCardPortal_default,
      Content: HoverCardContent_default,
      Arrow: HoverCardArrow_default
    };
    const _props = __props;
    const emits = __emit;
    const slots = useSlots();
    const props = useComponentProps("popover", _props);
    const appConfig = useAppConfig();
    const pick = props.mode === "hover" ? reactivePick(props, "defaultOpen", "open", "openDelay", "closeDelay", "enableTouch") : reactivePick(props, "defaultOpen", "open", "modal");
    const rootProps = useForwardProps(pick, emits);
    const portalProps = usePortal(toRef(() => props.portal));
    const contentProps = toRef(() => defu(props.content, {
      side: "bottom",
      sideOffset: 8,
      collisionPadding: 8
    }));
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
    const arrowProps = toRef(() => defu(props.arrow, { rounded: true }));
    const ui = computed(() => {
      var _a;
      return tv({
        extend: virtual_nuxt__nuxt_2Fui_2Fpopover_default,
        ...((_a = appConfig.ui) == null ? void 0 : _a.popover) || {}
      })({ side: contentProps.value.side });
    });
    const Component = computed(() => props.mode === "hover" ? HoverCard : Popover);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Component).Root, mergeProps(unref(rootProps), _attrs), {
        default: withCtx(({ open, close }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default) _push2(ssrRenderComponent(unref(Component).Trigger, {
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
            if ("Anchor" in Component.value && !!slots.anchor) _push2(ssrRenderComponent(unref(Component).Anchor, { "as-child": "" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) ssrRenderSlot(_ctx.$slots, "anchor", close ? { close } : {}, null, _push3, _parent3, _scopeId2);
                else return [renderSlot(_ctx.$slots, "anchor", close ? { close } : {})];
              }),
              _: 2
            }, _parent2, _scopeId));
            else _push2(`<!---->`);
            _push2(ssrRenderComponent(unref(Component).Portal, unref(portalProps), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) _push3(ssrRenderComponent(unref(FieldGroupReset), null, {
                  default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                    var _a, _b, _c, _d, _e, _f;
                    if (_push4) _push4(ssrRenderComponent(unref(Component).Content, mergeProps(contentProps.value, {
                      reference: (_b = unref(props).reference) != null ? _b : (_a = unref(props).content) == null ? void 0 : _a.reference,
                      "data-slot": "content",
                      class: ui.value.content({ class: [!slots.default && unref(props).class, (_c = unref(props).ui) == null ? void 0 : _c.content] })
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                        var _a2, _b2;
                        if (_push5) {
                          ssrRenderSlot(_ctx.$slots, "content", close ? { close } : {}, null, _push5, _parent5, _scopeId4);
                          if (!!unref(props).arrow) _push5(ssrRenderComponent(unref(Component).Arrow, mergeProps(arrowProps.value, {
                            "data-slot": "arrow",
                            class: ui.value.arrow({ class: (_a2 = unref(props).ui) == null ? void 0 : _a2.arrow })
                          }), null, _parent5, _scopeId4));
                          else _push5(`<!---->`);
                        } else return [renderSlot(_ctx.$slots, "content", close ? { close } : {}), !!unref(props).arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({ key: 0 }, arrowProps.value, {
                          "data-slot": "arrow",
                          class: ui.value.arrow({ class: (_b2 = unref(props).ui) == null ? void 0 : _b2.arrow })
                        }), null, 16, ["class"])) : createCommentVNode("", true)];
                      }),
                      _: 2
                    }, _parent4, _scopeId3));
                    else return [createVNode(unref(Component).Content, mergeProps(contentProps.value, {
                      reference: (_e = unref(props).reference) != null ? _e : (_d = unref(props).content) == null ? void 0 : _d.reference,
                      "data-slot": "content",
                      class: ui.value.content({ class: [!slots.default && unref(props).class, (_f = unref(props).ui) == null ? void 0 : _f.content] })
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => {
                        var _a2;
                        return [renderSlot(_ctx.$slots, "content", close ? { close } : {}), !!unref(props).arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({ key: 0 }, arrowProps.value, {
                          "data-slot": "arrow",
                          class: ui.value.arrow({ class: (_a2 = unref(props).ui) == null ? void 0 : _a2.arrow })
                        }), null, 16, ["class"])) : createCommentVNode("", true)];
                      }),
                      _: 2
                    }, 1040, ["reference", "class"])];
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                else return [createVNode(unref(FieldGroupReset), null, {
                  default: withCtx(() => {
                    var _a, _b, _c;
                    return [createVNode(unref(Component).Content, mergeProps(contentProps.value, {
                      reference: (_b = unref(props).reference) != null ? _b : (_a = unref(props).content) == null ? void 0 : _a.reference,
                      "data-slot": "content",
                      class: ui.value.content({ class: [!slots.default && unref(props).class, (_c = unref(props).ui) == null ? void 0 : _c.content] })
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => {
                        var _a2;
                        return [renderSlot(_ctx.$slots, "content", close ? { close } : {}), !!unref(props).arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({ key: 0 }, arrowProps.value, {
                          "data-slot": "arrow",
                          class: ui.value.arrow({ class: (_a2 = unref(props).ui) == null ? void 0 : _a2.arrow })
                        }), null, 16, ["class"])) : createCommentVNode("", true)];
                      }),
                      _: 2
                    }, 1040, ["reference", "class"])];
                  }),
                  _: 2
                }, 1024)];
              }),
              _: 2
            }, _parent2, _scopeId));
          } else return [
            !!slots.default ? (openBlock(), createBlock(unref(Component).Trigger, {
              key: 0,
              "as-child": "",
              class: unref(props).class
            }, {
              default: withCtx(() => [renderSlot(_ctx.$slots, "default", { open })]),
              _: 2
            }, 1032, ["class"])) : createCommentVNode("", true),
            "Anchor" in Component.value && !!slots.anchor ? (openBlock(), createBlock(unref(Component).Anchor, {
              key: 1,
              "as-child": ""
            }, {
              default: withCtx(() => [renderSlot(_ctx.$slots, "anchor", close ? { close } : {})]),
              _: 2
            }, 1024)) : createCommentVNode("", true),
            createVNode(unref(Component).Portal, unref(portalProps), {
              default: withCtx(() => [createVNode(unref(FieldGroupReset), null, {
                default: withCtx(() => {
                  var _a, _b, _c;
                  return [createVNode(unref(Component).Content, mergeProps(contentProps.value, {
                    reference: (_b = unref(props).reference) != null ? _b : (_a = unref(props).content) == null ? void 0 : _a.reference,
                    "data-slot": "content",
                    class: ui.value.content({ class: [!slots.default && unref(props).class, (_c = unref(props).ui) == null ? void 0 : _c.content] })
                  }, toHandlers(contentEvents.value)), {
                    default: withCtx(() => {
                      var _a2;
                      return [renderSlot(_ctx.$slots, "content", close ? { close } : {}), !!unref(props).arrow ? (openBlock(), createBlock(unref(Component).Arrow, mergeProps({ key: 0 }, arrowProps.value, {
                        "data-slot": "arrow",
                        class: ui.value.arrow({ class: (_a2 = unref(props).ui) == null ? void 0 : _a2.arrow })
                      }), null, 16, ["class"])) : createCommentVNode("", true)];
                    }),
                    _: 2
                  }, 1040, ["reference", "class"])];
                }),
                _: 2
              }, 1024)]),
              _: 2
            }, 1040)
          ];
        }),
        _: 3
      }, _parent));
    };
  }
};
var _sfc_setup$9 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Popover.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var kbdKeysMap = {
  meta: "",
  ctrl: "",
  alt: "",
  win: "\u229E",
  command: "\u2318",
  shift: "\u21E7",
  control: "\u2303",
  option: "\u2325",
  enter: "\u21B5",
  delete: "\u2326",
  backspace: "\u232B",
  escape: "Esc",
  tab: "\u21E5",
  capslock: "\u21EA",
  arrowup: "\u2191",
  arrowright: "\u2192",
  arrowdown: "\u2193",
  arrowleft: "\u2190",
  pageup: "\u21DE",
  pagedown: "\u21DF",
  home: "\u2196",
  end: "\u2198"
};
var kbdKeysPlatformMap = {
  meta: {
    macos: kbdKeysMap.command,
    other: "Ctrl"
  },
  ctrl: {
    macos: kbdKeysMap.control,
    other: "Ctrl"
  },
  alt: {
    macos: kbdKeysMap.option,
    other: "Alt"
  }
};
var _useKbd = () => {
  return { macOS: computed(() => false) };
};
var useSharedKbd = /* @__PURE__ */ createSharedComposable(_useKbd);
function useKbd() {
  const { macOS } = useSharedKbd();
  const mounted = getCurrentInstance() ? useMounted() : shallowRef(false);
  function getKbdKey(value) {
    if (!value) return;
    if ([
      "meta",
      "alt",
      "ctrl"
    ].includes(value)) return mounted.value ? kbdKeysPlatformMap[value][macOS.value ? "macos" : "other"] : " ";
    return kbdKeysMap[value] || value;
  }
  return {
    macOS,
    getKbdKey
  };
}
var virtual_nuxt__nuxt_2Fui_2Fkbd_default = {
  "base": "inline-flex items-center justify-center px-1 rounded-sm font-medium font-sans uppercase",
  "variants": {
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
      "sm": "h-4 min-w-[16px] text-[10px]",
      "md": "h-5 min-w-[20px] text-[11px]",
      "lg": "h-6 min-w-[24px] text-[12px]"
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "variant": "solid",
      "class": "text-inverted bg-primary"
    },
    {
      "color": "secondary",
      "variant": "solid",
      "class": "text-inverted bg-secondary"
    },
    {
      "color": "success",
      "variant": "solid",
      "class": "text-inverted bg-success"
    },
    {
      "color": "info",
      "variant": "solid",
      "class": "text-inverted bg-info"
    },
    {
      "color": "warning",
      "variant": "solid",
      "class": "text-inverted bg-warning"
    },
    {
      "color": "error",
      "variant": "solid",
      "class": "text-inverted bg-error"
    },
    {
      "color": "primary",
      "variant": "outline",
      "class": "ring ring-inset ring-primary/50 text-primary"
    },
    {
      "color": "secondary",
      "variant": "outline",
      "class": "ring ring-inset ring-secondary/50 text-secondary"
    },
    {
      "color": "success",
      "variant": "outline",
      "class": "ring ring-inset ring-success/50 text-success"
    },
    {
      "color": "info",
      "variant": "outline",
      "class": "ring ring-inset ring-info/50 text-info"
    },
    {
      "color": "warning",
      "variant": "outline",
      "class": "ring ring-inset ring-warning/50 text-warning"
    },
    {
      "color": "error",
      "variant": "outline",
      "class": "ring ring-inset ring-error/50 text-error"
    },
    {
      "color": "primary",
      "variant": "soft",
      "class": "text-primary bg-primary/10"
    },
    {
      "color": "secondary",
      "variant": "soft",
      "class": "text-secondary bg-secondary/10"
    },
    {
      "color": "success",
      "variant": "soft",
      "class": "text-success bg-success/10"
    },
    {
      "color": "info",
      "variant": "soft",
      "class": "text-info bg-info/10"
    },
    {
      "color": "warning",
      "variant": "soft",
      "class": "text-warning bg-warning/10"
    },
    {
      "color": "error",
      "variant": "soft",
      "class": "text-error bg-error/10"
    },
    {
      "color": "primary",
      "variant": "subtle",
      "class": "text-primary ring ring-inset ring-primary/25 bg-primary/10"
    },
    {
      "color": "secondary",
      "variant": "subtle",
      "class": "text-secondary ring ring-inset ring-secondary/25 bg-secondary/10"
    },
    {
      "color": "success",
      "variant": "subtle",
      "class": "text-success ring ring-inset ring-success/25 bg-success/10"
    },
    {
      "color": "info",
      "variant": "subtle",
      "class": "text-info ring ring-inset ring-info/25 bg-info/10"
    },
    {
      "color": "warning",
      "variant": "subtle",
      "class": "text-warning ring ring-inset ring-warning/25 bg-warning/10"
    },
    {
      "color": "error",
      "variant": "subtle",
      "class": "text-error ring ring-inset ring-error/25 bg-error/10"
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
    }
  ],
  "defaultVariants": {
    "variant": "outline",
    "color": "neutral",
    "size": "md"
  }
};
var _sfc_main$3 = {
  __name: "UKbd",
  __ssrInlineRender: true,
  props: {
    as: {
      type: null,
      required: false,
      default: "kbd"
    },
    value: {
      type: null,
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
    const props = useComponentProps("kbd", __props);
    const { getKbdKey } = useKbd();
    const appConfig = useAppConfig();
    const prefix = usePrefix();
    const platformKey = computed(() => props.value && Object.hasOwn(kbdKeysPlatformMap, props.value) ? kbdKeysPlatformMap[props.value] : void 0);
    if (platformKey.value) useHead({ script: [{
      key: "ui-kbd-macos",
      innerHTML: `/Macintosh;/.test(navigator.userAgent)&&document.documentElement.classList.add('ui-macos')`,
      tagPosition: "head"
    }] });
    const ui = computed(() => {
      var _a;
      return tv({
        extend: virtual_nuxt__nuxt_2Fui_2Fkbd_default,
        ...((_a = appConfig.ui) == null ? void 0 : _a.kbd) || {}
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: unref(props).as,
        class: ui.value({
          class: [(_a = unref(props).ui) == null ? void 0 : _a.base, unref(props).class],
          color: unref(props).color,
          variant: unref(props).variant,
          size: unref(props).size
        })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) ssrRenderSlot(_ctx.$slots, "default", {}, () => {
            if (platformKey.value) _push2(`<!--[--><span class="${ssrRenderClass(unref(prefix)("hidden in-[.ui-macos]:inline"))}"${_scopeId}>${ssrInterpolate(platformKey.value.macos)}</span><span class="${ssrRenderClass(unref(prefix)("in-[.ui-macos]:hidden"))}"${_scopeId}>${ssrInterpolate(platformKey.value.other)}</span><!--]-->`);
            else _push2(`<!--[-->${ssrInterpolate(unref(getKbdKey)(unref(props).value))}<!--]-->`);
          }, _push2, _parent2, _scopeId);
          else return [renderSlot(_ctx.$slots, "default", {}, () => [platformKey.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [createVNode("span", { class: unref(prefix)("hidden in-[.ui-macos]:inline") }, toDisplayString(platformKey.value.macos), 3), createVNode("span", { class: unref(prefix)("in-[.ui-macos]:hidden") }, toDisplayString(platformKey.value.other), 3)], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(unref(getKbdKey)(unref(props).value)), 1)], 64))])];
        }),
        _: 3
      }, _parent));
    };
  }
};
var _sfc_setup$8 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Kbd.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var virtual_nuxt__nuxt_2Fui_2Ftooltip_default = { "slots": {
  "content": "flex items-center gap-1 bg-default text-highlighted shadow-sm rounded-sm ring ring-default h-6 px-2.5 py-1 text-xs select-none data-[state=delayed-open]:animate-[scale-in_100ms_var(--ease-out)] data-[state=closed]:animate-[scale-out_100ms_var(--ease-out)] origin-(--reka-tooltip-content-transform-origin) pointer-events-auto",
  "arrow": "fill-bg stroke-default",
  "text": "truncate",
  "kbds": "hidden lg:inline-flex items-center shrink-0 gap-0.5 not-first-of-type:before:content-['\xB7'] not-first-of-type:before:me-0.5",
  "kbdsSize": "sm"
} };
var _sfc_main$2 = {
  __name: "UTooltip",
  __ssrInlineRender: true,
  props: {
    text: {
      type: String,
      required: false
    },
    kbds: {
      type: Array,
      required: false
    },
    content: {
      type: Object,
      required: false
    },
    arrow: {
      type: [Boolean, Object],
      required: false
    },
    portal: {
      type: [Boolean, String],
      required: false,
      skipCheck: true,
      default: true
    },
    reference: {
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
    },
    defaultOpen: {
      type: Boolean,
      required: false
    },
    open: {
      type: Boolean,
      required: false
    },
    delayDuration: {
      type: Number,
      required: false
    },
    disableHoverableContent: {
      type: Boolean,
      required: false
    },
    disableClosingTrigger: {
      type: Boolean,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    ignoreNonKeyboardFocus: {
      type: Boolean,
      required: false
    }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const _props = __props;
    const emits = __emit;
    const slots = useSlots();
    const props = useComponentProps("tooltip", _props);
    const appConfig = useAppConfig();
    const providerContext = injectTooltipProviderContext();
    const rootProps = useForwardProps(reactivePick(props, "defaultOpen", "open", "delayDuration", "disableHoverableContent", "disableClosingTrigger", "ignoreNonKeyboardFocus"), emits);
    const portalProps = usePortal(toRef(() => props.portal));
    const contentProps = toRef(() => defu(props.content, providerContext.content.value, {
      side: "bottom",
      sideOffset: 8,
      collisionPadding: 8
    }));
    const arrowProps = toRef(() => defu(props.arrow, { rounded: true }));
    const { getKbdKey } = useKbd();
    const ariaLabel = computed(() => {
      if (contentProps.value.ariaLabel || slots.content) return contentProps.value.ariaLabel;
      return [props.text, ...(props.kbds || []).map((kbd) => getKbdKey(typeof kbd === "object" ? kbd.value : kbd))].filter(Boolean).join(" ");
    });
    const ui = computed(() => {
      var _a;
      return tv({
        extend: virtual_nuxt__nuxt_2Fui_2Ftooltip_default,
        ...((_a = appConfig.ui) == null ? void 0 : _a.tooltip) || {}
      })({ side: contentProps.value.side });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(TooltipRoot_default), mergeProps(unref(rootProps), { disabled: !(unref(props).text || ((_a = unref(props).kbds) == null ? void 0 : _a.length) || !!slots.content) || unref(props).disabled }, _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default || !!unref(props).reference) _push2(ssrRenderComponent(unref(TooltipTrigger_default), mergeProps(_ctx.$attrs, {
              "as-child": "",
              reference: unref(props).reference,
              class: unref(props).class
            }), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push3, _parent3, _scopeId2);
                else return [renderSlot(_ctx.$slots, "default", { open })];
              }),
              _: 2
            }, _parent2, _scopeId));
            else _push2(`<!---->`);
            _push2(ssrRenderComponent(unref(TooltipPortal_default), unref(portalProps), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) _push3(ssrRenderComponent(unref(FieldGroupReset), null, {
                  default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                    var _a2, _b;
                    if (_push4) _push4(ssrRenderComponent(unref(TooltipContent_default), mergeProps(contentProps.value, {
                      "aria-label": ariaLabel.value,
                      "data-slot": "content",
                      class: ui.value.content({ class: [!slots.default && unref(props).class, (_a2 = unref(props).ui) == null ? void 0 : _a2.content] })
                    }), {
                      default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                        var _a3, _b2;
                        if (_push5) {
                          ssrRenderSlot(_ctx.$slots, "content", { ui: ui.value }, () => {
                            var _a4, _b3, _c;
                            if (unref(props).text) _push5(`<span data-slot="text" class="${ssrRenderClass(ui.value.text({ class: (_a4 = unref(props).ui) == null ? void 0 : _a4.text }))}"${_scopeId4}>${ssrInterpolate(unref(props).text)}</span>`);
                            else _push5(`<!---->`);
                            if ((_b3 = unref(props).kbds) == null ? void 0 : _b3.length) {
                              _push5(`<span data-slot="kbds" class="${ssrRenderClass(ui.value.kbds({ class: (_c = unref(props).ui) == null ? void 0 : _c.kbds }))}"${_scopeId4}><!--[-->`);
                              ssrRenderList(unref(props).kbds, (kbd, index) => {
                                var _a5;
                                _push5(ssrRenderComponent(_sfc_main$3, mergeProps({
                                  key: index,
                                  size: ((_a5 = unref(props).ui) == null ? void 0 : _a5.kbdsSize) || ui.value.kbdsSize()
                                }, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, _parent5, _scopeId4));
                              });
                              _push5(`<!--]--></span>`);
                            } else _push5(`<!---->`);
                          }, _push5, _parent5, _scopeId4);
                          if (!!unref(props).arrow) _push5(ssrRenderComponent(unref(TooltipArrow_default), mergeProps(arrowProps.value, {
                            "data-slot": "arrow",
                            class: ui.value.arrow({ class: (_a3 = unref(props).ui) == null ? void 0 : _a3.arrow })
                          }), null, _parent5, _scopeId4));
                          else _push5(`<!---->`);
                        } else return [renderSlot(_ctx.$slots, "content", { ui: ui.value }, () => {
                          var _a4, _b3, _c;
                          return [unref(props).text ? (openBlock(), createBlock("span", {
                            key: 0,
                            "data-slot": "text",
                            class: ui.value.text({ class: (_a4 = unref(props).ui) == null ? void 0 : _a4.text })
                          }, toDisplayString(unref(props).text), 3)) : createCommentVNode("", true), ((_b3 = unref(props).kbds) == null ? void 0 : _b3.length) ? (openBlock(), createBlock("span", {
                            key: 1,
                            "data-slot": "kbds",
                            class: ui.value.kbds({ class: (_c = unref(props).ui) == null ? void 0 : _c.kbds })
                          }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(props).kbds, (kbd, index) => {
                            var _a5;
                            return openBlock(), createBlock(_sfc_main$3, mergeProps({
                              key: index,
                              size: ((_a5 = unref(props).ui) == null ? void 0 : _a5.kbdsSize) || ui.value.kbdsSize()
                            }, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                          }), 128))], 2)) : createCommentVNode("", true)];
                        }), !!unref(props).arrow ? (openBlock(), createBlock(unref(TooltipArrow_default), mergeProps({ key: 0 }, arrowProps.value, {
                          "data-slot": "arrow",
                          class: ui.value.arrow({ class: (_b2 = unref(props).ui) == null ? void 0 : _b2.arrow })
                        }), null, 16, ["class"])) : createCommentVNode("", true)];
                      }),
                      _: 2
                    }, _parent4, _scopeId3));
                    else return [createVNode(unref(TooltipContent_default), mergeProps(contentProps.value, {
                      "aria-label": ariaLabel.value,
                      "data-slot": "content",
                      class: ui.value.content({ class: [!slots.default && unref(props).class, (_b = unref(props).ui) == null ? void 0 : _b.content] })
                    }), {
                      default: withCtx(() => {
                        var _a3;
                        return [renderSlot(_ctx.$slots, "content", { ui: ui.value }, () => {
                          var _a4, _b2, _c;
                          return [unref(props).text ? (openBlock(), createBlock("span", {
                            key: 0,
                            "data-slot": "text",
                            class: ui.value.text({ class: (_a4 = unref(props).ui) == null ? void 0 : _a4.text })
                          }, toDisplayString(unref(props).text), 3)) : createCommentVNode("", true), ((_b2 = unref(props).kbds) == null ? void 0 : _b2.length) ? (openBlock(), createBlock("span", {
                            key: 1,
                            "data-slot": "kbds",
                            class: ui.value.kbds({ class: (_c = unref(props).ui) == null ? void 0 : _c.kbds })
                          }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(props).kbds, (kbd, index) => {
                            var _a5;
                            return openBlock(), createBlock(_sfc_main$3, mergeProps({
                              key: index,
                              size: ((_a5 = unref(props).ui) == null ? void 0 : _a5.kbdsSize) || ui.value.kbdsSize()
                            }, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                          }), 128))], 2)) : createCommentVNode("", true)];
                        }), !!unref(props).arrow ? (openBlock(), createBlock(unref(TooltipArrow_default), mergeProps({ key: 0 }, arrowProps.value, {
                          "data-slot": "arrow",
                          class: ui.value.arrow({ class: (_a3 = unref(props).ui) == null ? void 0 : _a3.arrow })
                        }), null, 16, ["class"])) : createCommentVNode("", true)];
                      }),
                      _: 3
                    }, 16, ["aria-label", "class"])];
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                else return [createVNode(unref(FieldGroupReset), null, {
                  default: withCtx(() => {
                    var _a2;
                    return [createVNode(unref(TooltipContent_default), mergeProps(contentProps.value, {
                      "aria-label": ariaLabel.value,
                      "data-slot": "content",
                      class: ui.value.content({ class: [!slots.default && unref(props).class, (_a2 = unref(props).ui) == null ? void 0 : _a2.content] })
                    }), {
                      default: withCtx(() => {
                        var _a3;
                        return [renderSlot(_ctx.$slots, "content", { ui: ui.value }, () => {
                          var _a4, _b, _c;
                          return [unref(props).text ? (openBlock(), createBlock("span", {
                            key: 0,
                            "data-slot": "text",
                            class: ui.value.text({ class: (_a4 = unref(props).ui) == null ? void 0 : _a4.text })
                          }, toDisplayString(unref(props).text), 3)) : createCommentVNode("", true), ((_b = unref(props).kbds) == null ? void 0 : _b.length) ? (openBlock(), createBlock("span", {
                            key: 1,
                            "data-slot": "kbds",
                            class: ui.value.kbds({ class: (_c = unref(props).ui) == null ? void 0 : _c.kbds })
                          }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(props).kbds, (kbd, index) => {
                            var _a5;
                            return openBlock(), createBlock(_sfc_main$3, mergeProps({
                              key: index,
                              size: ((_a5 = unref(props).ui) == null ? void 0 : _a5.kbdsSize) || ui.value.kbdsSize()
                            }, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                          }), 128))], 2)) : createCommentVNode("", true)];
                        }), !!unref(props).arrow ? (openBlock(), createBlock(unref(TooltipArrow_default), mergeProps({ key: 0 }, arrowProps.value, {
                          "data-slot": "arrow",
                          class: ui.value.arrow({ class: (_a3 = unref(props).ui) == null ? void 0 : _a3.arrow })
                        }), null, 16, ["class"])) : createCommentVNode("", true)];
                      }),
                      _: 3
                    }, 16, ["aria-label", "class"])];
                  }),
                  _: 3
                })];
              }),
              _: 2
            }, _parent2, _scopeId));
          } else return [!!slots.default || !!unref(props).reference ? (openBlock(), createBlock(unref(TooltipTrigger_default), mergeProps({ key: 0 }, _ctx.$attrs, {
            "as-child": "",
            reference: unref(props).reference,
            class: unref(props).class
          }), {
            default: withCtx(() => [renderSlot(_ctx.$slots, "default", { open })]),
            _: 2
          }, 1040, ["reference", "class"])) : createCommentVNode("", true), createVNode(unref(TooltipPortal_default), unref(portalProps), {
            default: withCtx(() => [createVNode(unref(FieldGroupReset), null, {
              default: withCtx(() => {
                var _a2;
                return [createVNode(unref(TooltipContent_default), mergeProps(contentProps.value, {
                  "aria-label": ariaLabel.value,
                  "data-slot": "content",
                  class: ui.value.content({ class: [!slots.default && unref(props).class, (_a2 = unref(props).ui) == null ? void 0 : _a2.content] })
                }), {
                  default: withCtx(() => {
                    var _a3;
                    return [renderSlot(_ctx.$slots, "content", { ui: ui.value }, () => {
                      var _a4, _b, _c;
                      return [unref(props).text ? (openBlock(), createBlock("span", {
                        key: 0,
                        "data-slot": "text",
                        class: ui.value.text({ class: (_a4 = unref(props).ui) == null ? void 0 : _a4.text })
                      }, toDisplayString(unref(props).text), 3)) : createCommentVNode("", true), ((_b = unref(props).kbds) == null ? void 0 : _b.length) ? (openBlock(), createBlock("span", {
                        key: 1,
                        "data-slot": "kbds",
                        class: ui.value.kbds({ class: (_c = unref(props).ui) == null ? void 0 : _c.kbds })
                      }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(props).kbds, (kbd, index) => {
                        var _a5;
                        return openBlock(), createBlock(_sfc_main$3, mergeProps({
                          key: index,
                          size: ((_a5 = unref(props).ui) == null ? void 0 : _a5.kbdsSize) || ui.value.kbdsSize()
                        }, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
                      }), 128))], 2)) : createCommentVNode("", true)];
                    }), !!unref(props).arrow ? (openBlock(), createBlock(unref(TooltipArrow_default), mergeProps({ key: 0 }, arrowProps.value, {
                      "data-slot": "arrow",
                      class: ui.value.arrow({ class: (_a3 = unref(props).ui) == null ? void 0 : _a3.arrow })
                    }), null, 16, ["class"])) : createCommentVNode("", true)];
                  }),
                  _: 3
                }, 16, ["aria-label", "class"])];
              }),
              _: 3
            })]),
            _: 3
          }, 16)];
        }),
        _: 3
      }, _parent));
    };
  }
};
var _sfc_setup$7 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Tooltip.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var virtual_nuxt__nuxt_2Fui_2Fnavigation_menu_default = {
  "slots": {
    "root": "relative flex gap-1.5 [&>div]:min-w-0",
    "list": "isolate min-w-0",
    "label": "w-full flex items-center gap-1.5 font-semibold text-xs/5 text-highlighted px-2.5 py-1.5",
    "item": "min-w-0",
    "link": "group relative w-full flex items-center gap-1.5 font-medium text-sm before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none focus-visible:before:outline-3",
    "linkLeadingIcon": "shrink-0 size-5",
    "linkLeadingAvatar": "shrink-0",
    "linkLeadingAvatarSize": "2xs",
    "linkLeadingChipSize": "sm",
    "linkTrailing": "group ms-auto inline-flex gap-1.5 items-center",
    "linkTrailingBadge": "shrink-0",
    "linkTrailingBadgeSize": "sm",
    "linkTrailingIcon": "size-5 transform shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-200 ease-out motion-reduce:transition-none",
    "linkLabel": "truncate",
    "linkLabelExternalIcon": "inline-block size-3 align-top text-dimmed",
    "childList": "isolate",
    "childLabel": "text-xs text-highlighted",
    "childItem": "",
    "childLink": "group relative size-full flex items-start text-start text-sm before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none focus-visible:before:outline-3",
    "childLinkWrapper": "min-w-0",
    "childLinkIcon": "size-5 shrink-0",
    "childLinkLabel": "truncate",
    "childLinkLabelExternalIcon": "inline-block size-3 align-top text-dimmed",
    "childLinkDescription": "text-muted",
    "separator": "px-2 h-px bg-border",
    "viewportWrapper": "absolute top-full start-0 flex w-full",
    "viewport": "relative overflow-hidden bg-default shadow-lg rounded-md ring ring-default h-(--reka-navigation-menu-viewport-height) w-full transition-[width,height,left,right] duration-200 ease-out motion-reduce:transition-none origin-[top_center] data-[state=open]:animate-[scale-in_100ms_var(--ease-out)] data-[state=closed]:animate-[scale-out_100ms_var(--ease-out)] z-1",
    "content": "",
    "indicator": "absolute left-0 data-[state=visible]:animate-[fade-in_100ms_var(--ease-out)] data-[state=hidden]:animate-[fade-out_100ms_var(--ease-out)] data-[state=hidden]:opacity-0 bottom-0 z-2 w-(--reka-navigation-menu-indicator-size) translate-x-(--reka-navigation-menu-indicator-position) flex h-2.5 items-end justify-center overflow-hidden transition-[translate,width] duration-200 ease-out motion-reduce:transition-none",
    "arrow": "relative top-[50%] size-2.5 rotate-45 border border-default bg-default z-1 rounded-xs"
  },
  "variants": {
    "color": {
      "primary": {
        "link": "before:outline-primary/25",
        "childLink": "before:outline-primary/25"
      },
      "secondary": {
        "link": "before:outline-secondary/25",
        "childLink": "before:outline-secondary/25"
      },
      "success": {
        "link": "before:outline-success/25",
        "childLink": "before:outline-success/25"
      },
      "info": {
        "link": "before:outline-info/25",
        "childLink": "before:outline-info/25"
      },
      "warning": {
        "link": "before:outline-warning/25",
        "childLink": "before:outline-warning/25"
      },
      "error": {
        "link": "before:outline-error/25",
        "childLink": "before:outline-error/25"
      },
      "neutral": {
        "link": "before:outline-inverted/25",
        "childLink": "before:outline-inverted/25"
      }
    },
    "highlightColor": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "variant": {
      "pill": "",
      "link": ""
    },
    "orientation": {
      "horizontal": {
        "root": "items-center justify-between",
        "list": "flex items-center",
        "item": "py-2",
        "link": "px-2.5 py-1.5 before:inset-x-px before:inset-y-0",
        "childList": "grid p-2",
        "childLink": "px-3 py-2 gap-2 before:inset-x-px before:inset-y-0",
        "childLinkLabel": "font-medium",
        "content": "absolute top-0 start-0 w-full max-h-[70vh] overflow-y-auto"
      },
      "vertical": {
        "root": "flex-col",
        "link": "flex-row px-2.5 py-1.5 before:inset-y-px before:inset-x-0",
        "childLabel": "px-1.5 py-0.5",
        "childLink": "p-1.5 gap-1.5 before:inset-y-px before:inset-x-0"
      }
    },
    "contentOrientation": {
      "horizontal": {
        "viewportWrapper": "justify-center",
        "content": "data-[motion=from-start]:animate-[enter-from-left_200ms_var(--ease-out)] data-[motion=from-end]:animate-[enter-from-right_200ms_var(--ease-out)] data-[motion=to-start]:animate-[exit-to-left_200ms_var(--ease-out)] data-[motion=to-end]:animate-[exit-to-right_200ms_var(--ease-out)]"
      },
      "vertical": { "viewport": "sm:w-(--reka-navigation-menu-viewport-width) left-(--reka-navigation-menu-viewport-left) rtl:left-auto rtl:right-[calc(100%-var(--reka-navigation-menu-viewport-left)-var(--reka-navigation-menu-viewport-width))]" }
    },
    "active": {
      "true": {
        "childLink": "before:bg-elevated text-highlighted",
        "childLinkIcon": "text-default"
      },
      "false": {
        "link": "text-muted",
        "linkLeadingIcon": "text-dimmed",
        "childLink": ["hover:before:bg-elevated/50 text-default hover:text-highlighted", "transition-colors before:transition-colors"],
        "childLinkIcon": ["text-dimmed group-hover:text-default", "transition-colors"]
      }
    },
    "disabled": { "true": { "link": "cursor-not-allowed opacity-75" } },
    "highlight": { "true": "" },
    "level": { "true": "" },
    "collapsed": { "true": "" }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal",
      "contentOrientation": "horizontal",
      "class": { "childList": "grid-cols-2 gap-2" }
    },
    {
      "orientation": "horizontal",
      "contentOrientation": "vertical",
      "class": {
        "childList": "gap-1",
        "content": "w-60"
      }
    },
    {
      "orientation": "vertical",
      "collapsed": false,
      "class": {
        "childList": "ms-5 border-s border-default",
        "childItem": "ps-1.5 -ms-px",
        "content": "data-[state=open]:animate-[collapsible-down_200ms_var(--ease-out)] data-[state=closed]:animate-[collapsible-up_200ms_var(--ease-out)] data-[state=closed]:overflow-hidden"
      }
    },
    {
      "orientation": "vertical",
      "collapsed": true,
      "class": {
        "link": "px-1.5",
        "linkLabel": "hidden",
        "linkTrailing": "hidden",
        "content": "shadow-sm rounded-sm min-h-6 p-1"
      }
    },
    {
      "orientation": "horizontal",
      "highlight": true,
      "class": { "link": ["after:absolute after:-bottom-2 after:inset-x-2.5 after:block after:h-px after:rounded-full", "after:transition-colors"] }
    },
    {
      "orientation": "vertical",
      "highlight": true,
      "level": true,
      "class": { "link": ["after:absolute after:-start-1.5 after:inset-y-0.5 after:block after:w-px after:rounded-full", "after:transition-colors"] }
    },
    {
      "disabled": false,
      "active": false,
      "variant": "pill",
      "class": {
        "link": ["hover:text-highlighted hover:before:bg-elevated/50", "transition-colors before:transition-colors"],
        "linkLeadingIcon": ["group-hover:text-default", "transition-colors"]
      }
    },
    {
      "disabled": false,
      "active": false,
      "variant": "pill",
      "orientation": "horizontal",
      "class": {
        "link": "data-[state=open]:text-highlighted",
        "linkLeadingIcon": "group-data-[state=open]:text-default"
      }
    },
    {
      "disabled": false,
      "variant": "pill",
      "highlight": true,
      "orientation": "horizontal",
      "class": { "link": "data-[state=open]:before:bg-elevated/50" }
    },
    {
      "disabled": false,
      "variant": "pill",
      "highlight": false,
      "active": false,
      "orientation": "horizontal",
      "class": { "link": "data-[state=open]:before:bg-elevated/50" }
    },
    {
      "color": "primary",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-primary",
        "linkLeadingIcon": "text-primary group-data-[state=open]:text-primary"
      }
    },
    {
      "color": "secondary",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-secondary",
        "linkLeadingIcon": "text-secondary group-data-[state=open]:text-secondary"
      }
    },
    {
      "color": "success",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-success",
        "linkLeadingIcon": "text-success group-data-[state=open]:text-success"
      }
    },
    {
      "color": "info",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-info",
        "linkLeadingIcon": "text-info group-data-[state=open]:text-info"
      }
    },
    {
      "color": "warning",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-warning",
        "linkLeadingIcon": "text-warning group-data-[state=open]:text-warning"
      }
    },
    {
      "color": "error",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-error",
        "linkLeadingIcon": "text-error group-data-[state=open]:text-error"
      }
    },
    {
      "color": "neutral",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-highlighted",
        "linkLeadingIcon": "text-highlighted group-data-[state=open]:text-highlighted"
      }
    },
    {
      "variant": "pill",
      "active": true,
      "highlight": false,
      "class": { "link": "before:bg-elevated" }
    },
    {
      "variant": "pill",
      "active": true,
      "highlight": true,
      "disabled": false,
      "class": { "link": ["hover:before:bg-elevated/50", "before:transition-colors"] }
    },
    {
      "disabled": false,
      "active": false,
      "variant": "link",
      "class": {
        "link": ["hover:text-highlighted", "transition-colors"],
        "linkLeadingIcon": ["group-hover:text-default", "transition-colors"]
      }
    },
    {
      "disabled": false,
      "active": false,
      "variant": "link",
      "orientation": "horizontal",
      "class": {
        "link": "data-[state=open]:text-highlighted",
        "linkLeadingIcon": "group-data-[state=open]:text-default"
      }
    },
    {
      "color": "primary",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-primary",
        "linkLeadingIcon": "text-primary group-data-[state=open]:text-primary"
      }
    },
    {
      "color": "secondary",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-secondary",
        "linkLeadingIcon": "text-secondary group-data-[state=open]:text-secondary"
      }
    },
    {
      "color": "success",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-success",
        "linkLeadingIcon": "text-success group-data-[state=open]:text-success"
      }
    },
    {
      "color": "info",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-info",
        "linkLeadingIcon": "text-info group-data-[state=open]:text-info"
      }
    },
    {
      "color": "warning",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-warning",
        "linkLeadingIcon": "text-warning group-data-[state=open]:text-warning"
      }
    },
    {
      "color": "error",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-error",
        "linkLeadingIcon": "text-error group-data-[state=open]:text-error"
      }
    },
    {
      "color": "neutral",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-highlighted",
        "linkLeadingIcon": "text-highlighted group-data-[state=open]:text-highlighted"
      }
    },
    {
      "highlightColor": "primary",
      "highlight": true,
      "level": true,
      "active": true,
      "class": { "link": "after:bg-primary" }
    },
    {
      "highlightColor": "secondary",
      "highlight": true,
      "level": true,
      "active": true,
      "class": { "link": "after:bg-secondary" }
    },
    {
      "highlightColor": "success",
      "highlight": true,
      "level": true,
      "active": true,
      "class": { "link": "after:bg-success" }
    },
    {
      "highlightColor": "info",
      "highlight": true,
      "level": true,
      "active": true,
      "class": { "link": "after:bg-info" }
    },
    {
      "highlightColor": "warning",
      "highlight": true,
      "level": true,
      "active": true,
      "class": { "link": "after:bg-warning" }
    },
    {
      "highlightColor": "error",
      "highlight": true,
      "level": true,
      "active": true,
      "class": { "link": "after:bg-error" }
    },
    {
      "highlightColor": "neutral",
      "highlight": true,
      "level": true,
      "active": true,
      "class": { "link": "after:bg-inverted" }
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "highlightColor": "primary",
    "variant": "pill"
  }
};
var _sfc_main$1 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UNavigationMenu",
  __ssrInlineRender: true,
  props: {
    as: {
      type: null,
      required: false
    },
    type: {
      type: null,
      required: false,
      default: "multiple"
    },
    modelValue: {
      type: null,
      required: false
    },
    defaultValue: {
      type: null,
      required: false
    },
    trailingIcon: {
      type: null,
      required: false
    },
    externalIcon: {
      type: [Boolean, String],
      required: false,
      skipCheck: true,
      default: true
    },
    items: {
      type: null,
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
    orientation: {
      type: null,
      required: false,
      default: "horizontal"
    },
    collapsed: {
      type: Boolean,
      required: false
    },
    tooltip: {
      type: [Boolean, Object],
      required: false
    },
    popover: {
      type: [Boolean, Object],
      required: false
    },
    highlight: {
      type: Boolean,
      required: false
    },
    highlightColor: {
      type: null,
      required: false
    },
    content: {
      type: Object,
      required: false
    },
    contentOrientation: {
      type: null,
      required: false,
      default: "horizontal"
    },
    viewport: {
      type: Object,
      required: false
    },
    arrow: {
      type: Boolean,
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
    delayDuration: {
      type: Number,
      required: false,
      default: 0
    },
    disableClickTrigger: {
      type: Boolean,
      required: false
    },
    disableHoverTrigger: {
      type: Boolean,
      required: false
    },
    skipDelayDuration: {
      type: Number,
      required: false
    },
    disablePointerLeaveClose: {
      type: Boolean,
      required: false
    },
    unmountOnHide: {
      type: Boolean,
      required: false,
      default: true
    },
    disabled: {
      type: Boolean,
      required: false
    },
    collapsible: {
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
    const props = useComponentProps("navigationMenu", _props);
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(computed(() => ({
      as: props.as,
      delayDuration: props.delayDuration,
      skipDelayDuration: props.skipDelayDuration,
      orientation: props.orientation,
      disableClickTrigger: props.disableClickTrigger,
      disableHoverTrigger: props.disableHoverTrigger,
      disablePointerLeaveClose: props.disablePointerLeaveClose,
      unmountOnHide: props.unmountOnHide
    })), emits);
    const accordionProps = useForwardProps(reactivePick(props, "collapsible", "disabled", "type", "unmountOnHide"), emits);
    const contentProps = toRef(() => props.content);
    const viewportProps = toRef(() => props.viewport);
    const tooltipProps = toRef(() => defu(typeof props.tooltip === "boolean" ? {} : props.tooltip, { ...props.orientation === "vertical" && {
      delayDuration: 0,
      content: { side: "right" }
    } }));
    const popoverProps = toRef(() => defu(typeof props.popover === "boolean" ? {} : props.popover, {
      mode: "hover",
      content: {
        side: "right",
        align: "start",
        alignOffset: 2
      }
    }));
    const [DefineLinkTemplate, ReuseLinkTemplate] = createReusableTemplate();
    const [DefineItemTemplate, ReuseItemTemplate] = createReusableTemplate({ props: {
      item: Object,
      index: Number,
      level: Number,
      listIndex: Number
    } });
    const ui = computed(() => {
      var _a;
      return tv({
        extend: virtual_nuxt__nuxt_2Fui_2Fnavigation_menu_default,
        ...((_a = appConfig.ui) == null ? void 0 : _a.navigationMenu) || {}
      })({
        orientation: props.orientation,
        contentOrientation: props.orientation === "vertical" ? void 0 : props.contentOrientation,
        collapsed: props.collapsed,
        color: props.color,
        variant: props.variant,
        highlight: props.highlight,
        highlightColor: props.highlightColor || props.color
      });
    });
    const lists = computed(() => {
      var _a;
      return ((_a = props.items) == null ? void 0 : _a.length) ? isArrayOfArray(props.items) ? props.items : [props.items] : [];
    });
    function getItemValue(item, index, level, listIndex) {
      var _a;
      const prefix = lists.value.length > 1 ? `group-${listIndex}-` : "";
      return (_a = get(item, props.valueKey)) != null ? _a : level > 0 ? `${prefix}item-${level}-${index}` : `${prefix}item-${index}`;
    }
    function getAccordionDefaultValue(list, level = 0, listIndex = 0) {
      const indexes = list.reduce((acc, item, index) => {
        if (item.defaultOpen || item.open) acc.push(getItemValue(item, index, level, listIndex));
        return acc;
      }, []);
      return props.type === "single" ? indexes[0] : indexes;
    }
    const trailingClicks = /* @__PURE__ */ new WeakSet();
    function onLinkTrailingClick(e, item, trailingTrigger) {
      var _a;
      if (!((_a = item.children) == null ? void 0 : _a.length)) return;
      if (props.orientation === "horizontal") trailingClicks.add(e);
      else if (props.orientation === "vertical" && !props.collapsed && trailingTrigger) {
        e.preventDefault();
        e.stopPropagation();
      }
    }
    function onLinkClick(e) {
      if (trailingClicks.has(e)) e.preventDefault();
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineLinkTemplate), null, {
        default: withCtx(({ item, active, index, trailingTrigger }, _push2, _parent2, _scopeId) => {
          if (_push2) ssrRenderSlot(_ctx.$slots, item.slot || "item", {
            item,
            index,
            active,
            ui: ui.value
          }, () => {
            var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j;
            ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
              item,
              active,
              index,
              ui: ui.value
            }, () => {
              var _a3, _b2, _c2, _d2, _e2, _f2, _g2, _h2;
              if (item.avatar) _push2(ssrRenderComponent(_sfc_main$3$1, mergeProps({ size: ((_a3 = item.ui) == null ? void 0 : _a3.linkLeadingAvatarSize) || ((_b2 = unref(props).ui) == null ? void 0 : _b2.linkLeadingAvatarSize) || ui.value.linkLeadingAvatarSize() }, item.avatar, {
                "data-slot": "linkLeadingAvatar",
                class: ui.value.linkLeadingAvatar({
                  class: [(_c2 = unref(props).ui) == null ? void 0 : _c2.linkLeadingAvatar, (_d2 = item.ui) == null ? void 0 : _d2.linkLeadingAvatar],
                  active,
                  disabled: !!item.disabled
                })
              }), null, _parent2, _scopeId));
              else if (item.icon && item.chip) _push2(ssrRenderComponent(_sfc_main$4$1, mergeProps({
                size: ((_e2 = item.ui) == null ? void 0 : _e2.linkLeadingChipSize) || ((_f2 = unref(props).ui) == null ? void 0 : _f2.linkLeadingChipSize) || ui.value.linkLeadingChipSize(),
                inset: ""
              }, typeof item.chip === "object" ? item.chip : {}, { "data-slot": "linkLeadingChip" }), {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  var _a4, _b3, _c3, _d3;
                  if (_push3) _push3(ssrRenderComponent(_sfc_main$5$1, {
                    name: item.icon,
                    "data-slot": "linkLeadingIcon",
                    class: ui.value.linkLeadingIcon({
                      class: [(_a4 = unref(props).ui) == null ? void 0 : _a4.linkLeadingIcon, (_b3 = item.ui) == null ? void 0 : _b3.linkLeadingIcon],
                      active,
                      disabled: !!item.disabled
                    })
                  }, null, _parent3, _scopeId2));
                  else return [createVNode(_sfc_main$5$1, {
                    name: item.icon,
                    "data-slot": "linkLeadingIcon",
                    class: ui.value.linkLeadingIcon({
                      class: [(_c3 = unref(props).ui) == null ? void 0 : _c3.linkLeadingIcon, (_d3 = item.ui) == null ? void 0 : _d3.linkLeadingIcon],
                      active,
                      disabled: !!item.disabled
                    })
                  }, null, 8, ["name", "class"])];
                }),
                _: 2
              }, _parent2, _scopeId));
              else if (item.icon) _push2(ssrRenderComponent(_sfc_main$5$1, {
                name: item.icon,
                "data-slot": "linkLeadingIcon",
                class: ui.value.linkLeadingIcon({
                  class: [(_g2 = unref(props).ui) == null ? void 0 : _g2.linkLeadingIcon, (_h2 = item.ui) == null ? void 0 : _h2.linkLeadingIcon],
                  active,
                  disabled: !!item.disabled
                })
              }, null, _parent2, _scopeId));
              else _push2(`<!---->`);
            }, _push2, _parent2, _scopeId);
            if (unref(get)(item, unref(props).labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"]) {
              _push2(`<span data-slot="linkLabel" class="${ssrRenderClass(ui.value.linkLabel({ class: [(_a2 = unref(props).ui) == null ? void 0 : _a2.linkLabel, (_b = item.ui) == null ? void 0 : _b.linkLabel] }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                item,
                active,
                index
              }, () => {
                _push2(`${ssrInterpolate(unref(get)(item, unref(props).labelKey))}`);
              }, _push2, _parent2, _scopeId);
              if (item.target === "_blank" && unref(props).externalIcon !== false) _push2(ssrRenderComponent(_sfc_main$5$1, {
                name: typeof unref(props).externalIcon === "string" ? unref(props).externalIcon : unref(appConfig).ui.icons.external,
                "data-slot": "linkLabelExternalIcon",
                class: ui.value.linkLabelExternalIcon({
                  class: [(_c = unref(props).ui) == null ? void 0 : _c.linkLabelExternalIcon, (_d = item.ui) == null ? void 0 : _d.linkLabelExternalIcon],
                  active
                })
              }, null, _parent2, _scopeId));
              else _push2(`<!---->`);
              _push2(`</span>`);
            } else _push2(`<!---->`);
            if (item.badge || item.badge === 0 || unref(props).orientation === "horizontal" && (((_e = item.children) == null ? void 0 : _e.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || unref(props).orientation === "vertical" && ((_f = item.children) == null ? void 0 : _f.length) || item.trailingIcon || !!slots[item.slot ? `${item.slot}-trailing` : "item-trailing"]) ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(props).orientation === "vertical" && ((_g = item.children) == null ? void 0 : _g.length) && !unref(props).collapsed && trailingTrigger ? unref(AccordionTrigger_default) : "span"), {
              as: unref(props).orientation === "vertical" && ((_h = item.children) == null ? void 0 : _h.length) && !unref(props).collapsed && trailingTrigger ? "span" : void 0,
              "data-slot": "linkTrailing",
              class: ui.value.linkTrailing({ class: [(_i = unref(props).ui) == null ? void 0 : _i.linkTrailing, (_j = item.ui) == null ? void 0 : _j.linkTrailing] }),
              onClick: (e) => onLinkTrailingClick(e, item, trailingTrigger)
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                  item,
                  active,
                  index,
                  ui: ui.value
                }, () => {
                  var _a3, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
                  if (item.badge || item.badge === 0) _push3(ssrRenderComponent(_sfc_main$9, mergeProps({
                    color: "neutral",
                    variant: "outline",
                    size: ((_a3 = item.ui) == null ? void 0 : _a3.linkTrailingBadgeSize) || ((_b2 = unref(props).ui) == null ? void 0 : _b2.linkTrailingBadgeSize) || ui.value.linkTrailingBadgeSize()
                  }, typeof item.badge === "string" || typeof item.badge === "number" ? { label: item.badge } : item.badge, {
                    "data-slot": "linkTrailingBadge",
                    class: ui.value.linkTrailingBadge({ class: [(_c2 = unref(props).ui) == null ? void 0 : _c2.linkTrailingBadge, (_d2 = item.ui) == null ? void 0 : _d2.linkTrailingBadge] })
                  }), null, _parent3, _scopeId2));
                  else _push3(`<!---->`);
                  if (unref(props).orientation === "horizontal" && (((_e2 = item.children) == null ? void 0 : _e2.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || unref(props).orientation === "vertical" && ((_f2 = item.children) == null ? void 0 : _f2.length)) _push3(ssrRenderComponent(_sfc_main$5$1, {
                    name: item.trailingIcon || unref(props).trailingIcon || unref(appConfig).ui.icons.chevronDown,
                    "data-slot": "linkTrailingIcon",
                    class: ui.value.linkTrailingIcon({
                      class: [(_g2 = unref(props).ui) == null ? void 0 : _g2.linkTrailingIcon, (_h2 = item.ui) == null ? void 0 : _h2.linkTrailingIcon],
                      active
                    })
                  }, null, _parent3, _scopeId2));
                  else if (item.trailingIcon) _push3(ssrRenderComponent(_sfc_main$5$1, {
                    name: item.trailingIcon,
                    "data-slot": "linkTrailingIcon",
                    class: ui.value.linkTrailingIcon({
                      class: [(_i2 = unref(props).ui) == null ? void 0 : _i2.linkTrailingIcon, (_j2 = item.ui) == null ? void 0 : _j2.linkTrailingIcon],
                      active
                    })
                  }, null, _parent3, _scopeId2));
                  else _push3(`<!---->`);
                }, _push3, _parent3, _scopeId2);
                else return [renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                  item,
                  active,
                  index,
                  ui: ui.value
                }, () => {
                  var _a3, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
                  return [item.badge || item.badge === 0 ? (openBlock(), createBlock(_sfc_main$9, mergeProps({
                    key: 0,
                    color: "neutral",
                    variant: "outline",
                    size: ((_a3 = item.ui) == null ? void 0 : _a3.linkTrailingBadgeSize) || ((_b2 = unref(props).ui) == null ? void 0 : _b2.linkTrailingBadgeSize) || ui.value.linkTrailingBadgeSize()
                  }, typeof item.badge === "string" || typeof item.badge === "number" ? { label: item.badge } : item.badge, {
                    "data-slot": "linkTrailingBadge",
                    class: ui.value.linkTrailingBadge({ class: [(_c2 = unref(props).ui) == null ? void 0 : _c2.linkTrailingBadge, (_d2 = item.ui) == null ? void 0 : _d2.linkTrailingBadge] })
                  }), null, 16, ["size", "class"])) : createCommentVNode("", true), unref(props).orientation === "horizontal" && (((_e2 = item.children) == null ? void 0 : _e2.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || unref(props).orientation === "vertical" && ((_f2 = item.children) == null ? void 0 : _f2.length) ? (openBlock(), createBlock(_sfc_main$5$1, {
                    key: 1,
                    name: item.trailingIcon || unref(props).trailingIcon || unref(appConfig).ui.icons.chevronDown,
                    "data-slot": "linkTrailingIcon",
                    class: ui.value.linkTrailingIcon({
                      class: [(_g2 = unref(props).ui) == null ? void 0 : _g2.linkTrailingIcon, (_h2 = item.ui) == null ? void 0 : _h2.linkTrailingIcon],
                      active
                    })
                  }, null, 8, ["name", "class"])) : item.trailingIcon ? (openBlock(), createBlock(_sfc_main$5$1, {
                    key: 2,
                    name: item.trailingIcon,
                    "data-slot": "linkTrailingIcon",
                    class: ui.value.linkTrailingIcon({
                      class: [(_i2 = unref(props).ui) == null ? void 0 : _i2.linkTrailingIcon, (_j2 = item.ui) == null ? void 0 : _j2.linkTrailingIcon],
                      active
                    })
                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)];
                })];
              }),
              _: 2
            }), _parent2, _scopeId);
            else _push2(`<!---->`);
          }, _push2, _parent2, _scopeId);
          else return [renderSlot(_ctx.$slots, item.slot || "item", {
            item,
            index,
            active,
            ui: ui.value
          }, () => {
            var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j;
            return [
              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                item,
                active,
                index,
                ui: ui.value
              }, () => {
                var _a3, _b2, _c2, _d2, _e2, _f2, _g2, _h2;
                return [item.avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
                  key: 0,
                  size: ((_a3 = item.ui) == null ? void 0 : _a3.linkLeadingAvatarSize) || ((_b2 = unref(props).ui) == null ? void 0 : _b2.linkLeadingAvatarSize) || ui.value.linkLeadingAvatarSize()
                }, item.avatar, {
                  "data-slot": "linkLeadingAvatar",
                  class: ui.value.linkLeadingAvatar({
                    class: [(_c2 = unref(props).ui) == null ? void 0 : _c2.linkLeadingAvatar, (_d2 = item.ui) == null ? void 0 : _d2.linkLeadingAvatar],
                    active,
                    disabled: !!item.disabled
                  })
                }), null, 16, ["size", "class"])) : item.icon && item.chip ? (openBlock(), createBlock(_sfc_main$4$1, mergeProps({
                  key: 1,
                  size: ((_e2 = item.ui) == null ? void 0 : _e2.linkLeadingChipSize) || ((_f2 = unref(props).ui) == null ? void 0 : _f2.linkLeadingChipSize) || ui.value.linkLeadingChipSize(),
                  inset: ""
                }, typeof item.chip === "object" ? item.chip : {}, { "data-slot": "linkLeadingChip" }), {
                  default: withCtx(() => {
                    var _a4, _b3;
                    return [createVNode(_sfc_main$5$1, {
                      name: item.icon,
                      "data-slot": "linkLeadingIcon",
                      class: ui.value.linkLeadingIcon({
                        class: [(_a4 = unref(props).ui) == null ? void 0 : _a4.linkLeadingIcon, (_b3 = item.ui) == null ? void 0 : _b3.linkLeadingIcon],
                        active,
                        disabled: !!item.disabled
                      })
                    }, null, 8, ["name", "class"])];
                  }),
                  _: 2
                }, 1040, ["size"])) : item.icon ? (openBlock(), createBlock(_sfc_main$5$1, {
                  key: 2,
                  name: item.icon,
                  "data-slot": "linkLeadingIcon",
                  class: ui.value.linkLeadingIcon({
                    class: [(_g2 = unref(props).ui) == null ? void 0 : _g2.linkLeadingIcon, (_h2 = item.ui) == null ? void 0 : _h2.linkLeadingIcon],
                    active,
                    disabled: !!item.disabled
                  })
                }, null, 8, ["name", "class"])) : createCommentVNode("", true)];
              }),
              unref(get)(item, unref(props).labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] ? (openBlock(), createBlock("span", {
                key: 0,
                "data-slot": "linkLabel",
                class: ui.value.linkLabel({ class: [(_a2 = unref(props).ui) == null ? void 0 : _a2.linkLabel, (_b = item.ui) == null ? void 0 : _b.linkLabel] })
              }, [renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                item,
                active,
                index
              }, () => [createTextVNode(toDisplayString(unref(get)(item, unref(props).labelKey)), 1)]), item.target === "_blank" && unref(props).externalIcon !== false ? (openBlock(), createBlock(_sfc_main$5$1, {
                key: 0,
                name: typeof unref(props).externalIcon === "string" ? unref(props).externalIcon : unref(appConfig).ui.icons.external,
                "data-slot": "linkLabelExternalIcon",
                class: ui.value.linkLabelExternalIcon({
                  class: [(_c = unref(props).ui) == null ? void 0 : _c.linkLabelExternalIcon, (_d = item.ui) == null ? void 0 : _d.linkLabelExternalIcon],
                  active
                })
              }, null, 8, ["name", "class"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
              item.badge || item.badge === 0 || unref(props).orientation === "horizontal" && (((_e = item.children) == null ? void 0 : _e.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || unref(props).orientation === "vertical" && ((_f = item.children) == null ? void 0 : _f.length) || item.trailingIcon || !!slots[item.slot ? `${item.slot}-trailing` : "item-trailing"] ? (openBlock(), createBlock(resolveDynamicComponent(unref(props).orientation === "vertical" && ((_g = item.children) == null ? void 0 : _g.length) && !unref(props).collapsed && trailingTrigger ? unref(AccordionTrigger_default) : "span"), {
                key: 1,
                as: unref(props).orientation === "vertical" && ((_h = item.children) == null ? void 0 : _h.length) && !unref(props).collapsed && trailingTrigger ? "span" : void 0,
                "data-slot": "linkTrailing",
                class: ui.value.linkTrailing({ class: [(_i = unref(props).ui) == null ? void 0 : _i.linkTrailing, (_j = item.ui) == null ? void 0 : _j.linkTrailing] }),
                onClick: (e) => onLinkTrailingClick(e, item, trailingTrigger)
              }, {
                default: withCtx(() => [renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                  item,
                  active,
                  index,
                  ui: ui.value
                }, () => {
                  var _a3, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
                  return [item.badge || item.badge === 0 ? (openBlock(), createBlock(_sfc_main$9, mergeProps({
                    key: 0,
                    color: "neutral",
                    variant: "outline",
                    size: ((_a3 = item.ui) == null ? void 0 : _a3.linkTrailingBadgeSize) || ((_b2 = unref(props).ui) == null ? void 0 : _b2.linkTrailingBadgeSize) || ui.value.linkTrailingBadgeSize()
                  }, typeof item.badge === "string" || typeof item.badge === "number" ? { label: item.badge } : item.badge, {
                    "data-slot": "linkTrailingBadge",
                    class: ui.value.linkTrailingBadge({ class: [(_c2 = unref(props).ui) == null ? void 0 : _c2.linkTrailingBadge, (_d2 = item.ui) == null ? void 0 : _d2.linkTrailingBadge] })
                  }), null, 16, ["size", "class"])) : createCommentVNode("", true), unref(props).orientation === "horizontal" && (((_e2 = item.children) == null ? void 0 : _e2.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || unref(props).orientation === "vertical" && ((_f2 = item.children) == null ? void 0 : _f2.length) ? (openBlock(), createBlock(_sfc_main$5$1, {
                    key: 1,
                    name: item.trailingIcon || unref(props).trailingIcon || unref(appConfig).ui.icons.chevronDown,
                    "data-slot": "linkTrailingIcon",
                    class: ui.value.linkTrailingIcon({
                      class: [(_g2 = unref(props).ui) == null ? void 0 : _g2.linkTrailingIcon, (_h2 = item.ui) == null ? void 0 : _h2.linkTrailingIcon],
                      active
                    })
                  }, null, 8, ["name", "class"])) : item.trailingIcon ? (openBlock(), createBlock(_sfc_main$5$1, {
                    key: 2,
                    name: item.trailingIcon,
                    "data-slot": "linkTrailingIcon",
                    class: ui.value.linkTrailingIcon({
                      class: [(_i2 = unref(props).ui) == null ? void 0 : _i2.linkTrailingIcon, (_j2 = item.ui) == null ? void 0 : _j2.linkTrailingIcon],
                      active
                    })
                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)];
                })]),
                _: 2
              }, 1032, [
                "as",
                "class",
                "onClick"
              ])) : createCommentVNode("", true)
            ];
          })];
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(DefineItemTemplate), null, {
        default: withCtx(({ item, index, level = 0, listIndex = 0 }, _push2, _parent2, _scopeId) => {
          if (_push2) ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(props).orientation === "vertical" && !unref(props).collapsed ? unref(AccordionItem_default) : unref(NavigationMenuItem_default)), mergeProps({ as: "li" }, unref(props).orientation === "vertical" && !unref(props).collapsed ? { disabled: !!item.disabled } : {}, { value: getItemValue(item, index, level, listIndex) }), {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
              if (_push3) {
                if (unref(props).orientation === "vertical" && item.type === "label" && !unref(props).collapsed) {
                  _push3(`<div data-slot="label" class="${ssrRenderClass(ui.value.label({ class: [
                    (_a2 = unref(props).ui) == null ? void 0 : _a2.label,
                    (_b = item.ui) == null ? void 0 : _b.label,
                    item.class
                  ] }))}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(ReuseLinkTemplate), {
                    item,
                    index,
                    "trailing-trigger": true
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else if (item.type !== "label") _push3(ssrRenderComponent(_sfc_main$1$1, mergeProps(unref(props).orientation === "vertical" && ((_c = item.children) == null ? void 0 : _c.length) && !unref(props).collapsed && item.type === "trigger" ? {} : unref(pickLinkProps)(item), { custom: "" }), {
                  default: withCtx(({ active, ...slotProps }, _push4, _parent4, _scopeId3) => {
                    var _a3, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
                    if (_push4) {
                      ssrRenderVNode(_push4, createVNode(resolveDynamicComponent(unref(props).orientation === "horizontal" && (((_a3 = item.children) == null ? void 0 : _a3.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? unref(NavigationMenuTrigger_default) : unref(props).orientation === "vertical" && ((_b2 = item.children) == null ? void 0 : _b2.length) && !unref(props).collapsed && !slotProps.href ? unref(AccordionTrigger_default) : unref(NavigationMenuLink_default)), {
                        "as-child": "",
                        active: active || item.active,
                        disabled: item.disabled,
                        onSelect: item.onSelect
                      }, {
                        default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                          var _a4, _b3, _c3, _d3, _e3, _f3, _g3, _h3, _i3, _j3;
                          if (_push5) {
                            if (unref(props).orientation === "vertical" && unref(props).collapsed && ((_a4 = item.children) == null ? void 0 : _a4.length) && (!!unref(props).popover || !!item.popover)) _push5(ssrRenderComponent(_sfc_main$4, mergeProps({
                              ...popoverProps.value,
                              ...typeof item.popover === "boolean" ? {} : item.popover || {}
                            }, { ui: { content: ui.value.content({ class: [(_b3 = unref(props).ui) == null ? void 0 : _b3.content, (_c3 = item.ui) == null ? void 0 : _c3.content] }) } }), {
                              content: withCtx(({ close }, _push6, _parent6, _scopeId5) => {
                                if (_push6) ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                  item,
                                  active: active || item.active,
                                  index,
                                  ui: ui.value,
                                  close
                                }, () => {
                                  var _a5, _b4, _c4, _d4;
                                  _push6(`<ul data-slot="childList" class="${ssrRenderClass(ui.value.childList({ class: [(_a5 = unref(props).ui) == null ? void 0 : _a5.childList, (_b4 = item.ui) == null ? void 0 : _b4.childList] }))}"${_scopeId5}><li data-slot="childLabel" class="${ssrRenderClass(ui.value.childLabel({ class: [(_c4 = unref(props).ui) == null ? void 0 : _c4.childLabel, (_d4 = item.ui) == null ? void 0 : _d4.childLabel] }))}"${_scopeId5}>${ssrInterpolate(unref(get)(item, unref(props).labelKey))}</li><!--[-->`);
                                  ssrRenderList(item.children, (childItem, childIndex) => {
                                    var _a6, _b5;
                                    _push6(`<li data-slot="childItem" class="${ssrRenderClass(ui.value.childItem({ class: [(_a6 = unref(props).ui) == null ? void 0 : _a6.childItem, (_b5 = item.ui) == null ? void 0 : _b5.childItem] }))}"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_sfc_main$1$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                      default: withCtx(({ active: childActive, ...childSlotProps }, _push7, _parent7, _scopeId6) => {
                                        if (_push7) _push7(ssrRenderComponent(unref(NavigationMenuLink_default), {
                                          "as-child": "",
                                          active: childActive,
                                          onSelect: childItem.onSelect
                                        }, {
                                          default: withCtx((_3, _push8, _parent8, _scopeId7) => {
                                            var _a7, _b6, _c5, _d5;
                                            if (_push8) _push8(ssrRenderComponent(_sfc_main$2$1, mergeProps({ ref_for: true }, childSlotProps, {
                                              "data-slot": "childLink",
                                              class: ui.value.childLink({
                                                class: [
                                                  (_a7 = unref(props).ui) == null ? void 0 : _a7.childLink,
                                                  (_b6 = item.ui) == null ? void 0 : _b6.childLink,
                                                  childItem.class
                                                ],
                                                active: childActive
                                              })
                                            }), {
                                              default: withCtx((_4, _push9, _parent9, _scopeId8) => {
                                                var _a8, _b7, _c6, _d6, _e4, _f4, _g4, _h4, _i4, _j4, _k2, _l2;
                                                if (_push9) {
                                                  if (childItem.icon) _push9(ssrRenderComponent(_sfc_main$5$1, {
                                                    name: childItem.icon,
                                                    "data-slot": "childLinkIcon",
                                                    class: ui.value.childLinkIcon({
                                                      class: [(_a8 = unref(props).ui) == null ? void 0 : _a8.childLinkIcon, (_b7 = item.ui) == null ? void 0 : _b7.childLinkIcon],
                                                      active: childActive
                                                    })
                                                  }, null, _parent9, _scopeId8));
                                                  else _push9(`<!---->`);
                                                  _push9(`<span data-slot="childLinkLabel" class="${ssrRenderClass(ui.value.childLinkLabel({
                                                    class: [(_c6 = unref(props).ui) == null ? void 0 : _c6.childLinkLabel, (_d6 = item.ui) == null ? void 0 : _d6.childLinkLabel],
                                                    active: childActive
                                                  }))}"${_scopeId8}>${ssrInterpolate(unref(get)(childItem, unref(props).labelKey))} `);
                                                  if (childItem.target === "_blank" && unref(props).externalIcon !== false) _push9(ssrRenderComponent(_sfc_main$5$1, {
                                                    name: typeof unref(props).externalIcon === "string" ? unref(props).externalIcon : unref(appConfig).ui.icons.external,
                                                    "data-slot": "childLinkLabelExternalIcon",
                                                    class: ui.value.childLinkLabelExternalIcon({
                                                      class: [(_e4 = unref(props).ui) == null ? void 0 : _e4.childLinkLabelExternalIcon, (_f4 = item.ui) == null ? void 0 : _f4.childLinkLabelExternalIcon],
                                                      active: childActive
                                                    })
                                                  }, null, _parent9, _scopeId8));
                                                  else _push9(`<!---->`);
                                                  _push9(`</span>`);
                                                } else return [childItem.icon ? (openBlock(), createBlock(_sfc_main$5$1, {
                                                  key: 0,
                                                  name: childItem.icon,
                                                  "data-slot": "childLinkIcon",
                                                  class: ui.value.childLinkIcon({
                                                    class: [(_g4 = unref(props).ui) == null ? void 0 : _g4.childLinkIcon, (_h4 = item.ui) == null ? void 0 : _h4.childLinkIcon],
                                                    active: childActive
                                                  })
                                                }, null, 8, ["name", "class"])) : createCommentVNode("", true), createVNode("span", {
                                                  "data-slot": "childLinkLabel",
                                                  class: ui.value.childLinkLabel({
                                                    class: [(_i4 = unref(props).ui) == null ? void 0 : _i4.childLinkLabel, (_j4 = item.ui) == null ? void 0 : _j4.childLinkLabel],
                                                    active: childActive
                                                  })
                                                }, [createTextVNode(toDisplayString(unref(get)(childItem, unref(props).labelKey)) + " ", 1), childItem.target === "_blank" && unref(props).externalIcon !== false ? (openBlock(), createBlock(_sfc_main$5$1, {
                                                  key: 0,
                                                  name: typeof unref(props).externalIcon === "string" ? unref(props).externalIcon : unref(appConfig).ui.icons.external,
                                                  "data-slot": "childLinkLabelExternalIcon",
                                                  class: ui.value.childLinkLabelExternalIcon({
                                                    class: [(_k2 = unref(props).ui) == null ? void 0 : _k2.childLinkLabelExternalIcon, (_l2 = item.ui) == null ? void 0 : _l2.childLinkLabelExternalIcon],
                                                    active: childActive
                                                  })
                                                }, null, 8, ["name", "class"])) : createCommentVNode("", true)], 2)];
                                              }),
                                              _: 2
                                            }, _parent8, _scopeId7));
                                            else return [createVNode(_sfc_main$2$1, mergeProps({ ref_for: true }, childSlotProps, {
                                              "data-slot": "childLink",
                                              class: ui.value.childLink({
                                                class: [
                                                  (_c5 = unref(props).ui) == null ? void 0 : _c5.childLink,
                                                  (_d5 = item.ui) == null ? void 0 : _d5.childLink,
                                                  childItem.class
                                                ],
                                                active: childActive
                                              })
                                            }), {
                                              default: withCtx(() => {
                                                var _a8, _b7, _c6, _d6, _e4, _f4;
                                                return [childItem.icon ? (openBlock(), createBlock(_sfc_main$5$1, {
                                                  key: 0,
                                                  name: childItem.icon,
                                                  "data-slot": "childLinkIcon",
                                                  class: ui.value.childLinkIcon({
                                                    class: [(_a8 = unref(props).ui) == null ? void 0 : _a8.childLinkIcon, (_b7 = item.ui) == null ? void 0 : _b7.childLinkIcon],
                                                    active: childActive
                                                  })
                                                }, null, 8, ["name", "class"])) : createCommentVNode("", true), createVNode("span", {
                                                  "data-slot": "childLinkLabel",
                                                  class: ui.value.childLinkLabel({
                                                    class: [(_c6 = unref(props).ui) == null ? void 0 : _c6.childLinkLabel, (_d6 = item.ui) == null ? void 0 : _d6.childLinkLabel],
                                                    active: childActive
                                                  })
                                                }, [createTextVNode(toDisplayString(unref(get)(childItem, unref(props).labelKey)) + " ", 1), childItem.target === "_blank" && unref(props).externalIcon !== false ? (openBlock(), createBlock(_sfc_main$5$1, {
                                                  key: 0,
                                                  name: typeof unref(props).externalIcon === "string" ? unref(props).externalIcon : unref(appConfig).ui.icons.external,
                                                  "data-slot": "childLinkLabelExternalIcon",
                                                  class: ui.value.childLinkLabelExternalIcon({
                                                    class: [(_e4 = unref(props).ui) == null ? void 0 : _e4.childLinkLabelExternalIcon, (_f4 = item.ui) == null ? void 0 : _f4.childLinkLabelExternalIcon],
                                                    active: childActive
                                                  })
                                                }, null, 8, ["name", "class"])) : createCommentVNode("", true)], 2)];
                                              }),
                                              _: 2
                                            }, 1040, ["class"])];
                                          }),
                                          _: 2
                                        }, _parent7, _scopeId6));
                                        else return [createVNode(unref(NavigationMenuLink_default), {
                                          "as-child": "",
                                          active: childActive,
                                          onSelect: childItem.onSelect
                                        }, {
                                          default: withCtx(() => {
                                            var _a7, _b6;
                                            return [createVNode(_sfc_main$2$1, mergeProps({ ref_for: true }, childSlotProps, {
                                              "data-slot": "childLink",
                                              class: ui.value.childLink({
                                                class: [
                                                  (_a7 = unref(props).ui) == null ? void 0 : _a7.childLink,
                                                  (_b6 = item.ui) == null ? void 0 : _b6.childLink,
                                                  childItem.class
                                                ],
                                                active: childActive
                                              })
                                            }), {
                                              default: withCtx(() => {
                                                var _a8, _b7, _c5, _d5, _e4, _f4;
                                                return [childItem.icon ? (openBlock(), createBlock(_sfc_main$5$1, {
                                                  key: 0,
                                                  name: childItem.icon,
                                                  "data-slot": "childLinkIcon",
                                                  class: ui.value.childLinkIcon({
                                                    class: [(_a8 = unref(props).ui) == null ? void 0 : _a8.childLinkIcon, (_b7 = item.ui) == null ? void 0 : _b7.childLinkIcon],
                                                    active: childActive
                                                  })
                                                }, null, 8, ["name", "class"])) : createCommentVNode("", true), createVNode("span", {
                                                  "data-slot": "childLinkLabel",
                                                  class: ui.value.childLinkLabel({
                                                    class: [(_c5 = unref(props).ui) == null ? void 0 : _c5.childLinkLabel, (_d5 = item.ui) == null ? void 0 : _d5.childLinkLabel],
                                                    active: childActive
                                                  })
                                                }, [createTextVNode(toDisplayString(unref(get)(childItem, unref(props).labelKey)) + " ", 1), childItem.target === "_blank" && unref(props).externalIcon !== false ? (openBlock(), createBlock(_sfc_main$5$1, {
                                                  key: 0,
                                                  name: typeof unref(props).externalIcon === "string" ? unref(props).externalIcon : unref(appConfig).ui.icons.external,
                                                  "data-slot": "childLinkLabelExternalIcon",
                                                  class: ui.value.childLinkLabelExternalIcon({
                                                    class: [(_e4 = unref(props).ui) == null ? void 0 : _e4.childLinkLabelExternalIcon, (_f4 = item.ui) == null ? void 0 : _f4.childLinkLabelExternalIcon],
                                                    active: childActive
                                                  })
                                                }, null, 8, ["name", "class"])) : createCommentVNode("", true)], 2)];
                                              }),
                                              _: 2
                                            }, 1040, ["class"])];
                                          }),
                                          _: 2
                                        }, 1032, ["active", "onSelect"])];
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(`</li>`);
                                  });
                                  _push6(`<!--]--></ul>`);
                                }, _push6, _parent6, _scopeId5);
                                else return [renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                  item,
                                  active: active || item.active,
                                  index,
                                  ui: ui.value,
                                  close
                                }, () => {
                                  var _a5, _b4, _c4, _d4;
                                  return [createVNode("ul", {
                                    "data-slot": "childList",
                                    class: ui.value.childList({ class: [(_a5 = unref(props).ui) == null ? void 0 : _a5.childList, (_b4 = item.ui) == null ? void 0 : _b4.childList] })
                                  }, [createVNode("li", {
                                    "data-slot": "childLabel",
                                    class: ui.value.childLabel({ class: [(_c4 = unref(props).ui) == null ? void 0 : _c4.childLabel, (_d4 = item.ui) == null ? void 0 : _d4.childLabel] })
                                  }, toDisplayString(unref(get)(item, unref(props).labelKey)), 3), (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                    var _a6, _b5;
                                    return openBlock(), createBlock("li", {
                                      key: childIndex,
                                      "data-slot": "childItem",
                                      class: ui.value.childItem({ class: [(_a6 = unref(props).ui) == null ? void 0 : _a6.childItem, (_b5 = item.ui) == null ? void 0 : _b5.childItem] })
                                    }, [createVNode(_sfc_main$1$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                      default: withCtx(({ active: childActive, ...childSlotProps }) => [createVNode(unref(NavigationMenuLink_default), {
                                        "as-child": "",
                                        active: childActive,
                                        onSelect: childItem.onSelect
                                      }, {
                                        default: withCtx(() => {
                                          var _a7, _b6;
                                          return [createVNode(_sfc_main$2$1, mergeProps({ ref_for: true }, childSlotProps, {
                                            "data-slot": "childLink",
                                            class: ui.value.childLink({
                                              class: [
                                                (_a7 = unref(props).ui) == null ? void 0 : _a7.childLink,
                                                (_b6 = item.ui) == null ? void 0 : _b6.childLink,
                                                childItem.class
                                              ],
                                              active: childActive
                                            })
                                          }), {
                                            default: withCtx(() => {
                                              var _a8, _b7, _c5, _d5, _e4, _f4;
                                              return [childItem.icon ? (openBlock(), createBlock(_sfc_main$5$1, {
                                                key: 0,
                                                name: childItem.icon,
                                                "data-slot": "childLinkIcon",
                                                class: ui.value.childLinkIcon({
                                                  class: [(_a8 = unref(props).ui) == null ? void 0 : _a8.childLinkIcon, (_b7 = item.ui) == null ? void 0 : _b7.childLinkIcon],
                                                  active: childActive
                                                })
                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true), createVNode("span", {
                                                "data-slot": "childLinkLabel",
                                                class: ui.value.childLinkLabel({
                                                  class: [(_c5 = unref(props).ui) == null ? void 0 : _c5.childLinkLabel, (_d5 = item.ui) == null ? void 0 : _d5.childLinkLabel],
                                                  active: childActive
                                                })
                                              }, [createTextVNode(toDisplayString(unref(get)(childItem, unref(props).labelKey)) + " ", 1), childItem.target === "_blank" && unref(props).externalIcon !== false ? (openBlock(), createBlock(_sfc_main$5$1, {
                                                key: 0,
                                                name: typeof unref(props).externalIcon === "string" ? unref(props).externalIcon : unref(appConfig).ui.icons.external,
                                                "data-slot": "childLinkLabelExternalIcon",
                                                class: ui.value.childLinkLabelExternalIcon({
                                                  class: [(_e4 = unref(props).ui) == null ? void 0 : _e4.childLinkLabelExternalIcon, (_f4 = item.ui) == null ? void 0 : _f4.childLinkLabelExternalIcon],
                                                  active: childActive
                                                })
                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)], 2)];
                                            }),
                                            _: 2
                                          }, 1040, ["class"])];
                                        }),
                                        _: 2
                                      }, 1032, ["active", "onSelect"])]),
                                      _: 2
                                    }, 1040)], 2);
                                  }), 128))], 2)];
                                })];
                              }),
                              default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                var _a5, _b4, _c4, _d4;
                                if (_push6) _push6(ssrRenderComponent(_sfc_main$2$1, mergeProps(slotProps, {
                                  "data-slot": "link",
                                  class: ui.value.link({
                                    class: [
                                      (_a5 = unref(props).ui) == null ? void 0 : _a5.link,
                                      (_b4 = item.ui) == null ? void 0 : _b4.link,
                                      item.class
                                    ],
                                    active: active || item.active,
                                    disabled: !!item.disabled,
                                    level: level > 0
                                  })
                                }), {
                                  default: withCtx((_4, _push7, _parent7, _scopeId6) => {
                                    if (_push7) _push7(ssrRenderComponent(unref(ReuseLinkTemplate), {
                                      item,
                                      active: active || item.active,
                                      index,
                                      "trailing-trigger": !!slotProps.href
                                    }, null, _parent7, _scopeId6));
                                    else return [createVNode(unref(ReuseLinkTemplate), {
                                      item,
                                      active: active || item.active,
                                      index,
                                      "trailing-trigger": !!slotProps.href
                                    }, null, 8, [
                                      "item",
                                      "active",
                                      "index",
                                      "trailing-trigger"
                                    ])];
                                  }),
                                  _: 2
                                }, _parent6, _scopeId5));
                                else return [createVNode(_sfc_main$2$1, mergeProps(slotProps, {
                                  "data-slot": "link",
                                  class: ui.value.link({
                                    class: [
                                      (_c4 = unref(props).ui) == null ? void 0 : _c4.link,
                                      (_d4 = item.ui) == null ? void 0 : _d4.link,
                                      item.class
                                    ],
                                    active: active || item.active,
                                    disabled: !!item.disabled,
                                    level: level > 0
                                  })
                                }), {
                                  default: withCtx(() => [createVNode(unref(ReuseLinkTemplate), {
                                    item,
                                    active: active || item.active,
                                    index,
                                    "trailing-trigger": !!slotProps.href
                                  }, null, 8, [
                                    "item",
                                    "active",
                                    "index",
                                    "trailing-trigger"
                                  ])]),
                                  _: 2
                                }, 1040, ["class"])];
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                            else if (unref(props).orientation === "vertical" && unref(props).collapsed && (!!unref(props).tooltip || !!item.tooltip) || unref(props).orientation === "horizontal" && !!item.tooltip) _push5(ssrRenderComponent(_sfc_main$2, mergeProps({ text: unref(get)(item, unref(props).labelKey) }, {
                              ...tooltipProps.value,
                              ...typeof item.tooltip === "boolean" ? {} : item.tooltip || {}
                            }), {
                              default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                var _a5, _b4, _c4, _d4;
                                if (_push6) _push6(ssrRenderComponent(_sfc_main$2$1, mergeProps(slotProps, {
                                  "data-slot": "link",
                                  class: ui.value.link({
                                    class: [
                                      (_a5 = unref(props).ui) == null ? void 0 : _a5.link,
                                      (_b4 = item.ui) == null ? void 0 : _b4.link,
                                      item.class
                                    ],
                                    active: active || item.active,
                                    disabled: !!item.disabled,
                                    level: level > 0
                                  }),
                                  onClick: onLinkClick
                                }), {
                                  default: withCtx((_4, _push7, _parent7, _scopeId6) => {
                                    if (_push7) _push7(ssrRenderComponent(unref(ReuseLinkTemplate), {
                                      item,
                                      active: active || item.active,
                                      index,
                                      "trailing-trigger": !!slotProps.href
                                    }, null, _parent7, _scopeId6));
                                    else return [createVNode(unref(ReuseLinkTemplate), {
                                      item,
                                      active: active || item.active,
                                      index,
                                      "trailing-trigger": !!slotProps.href
                                    }, null, 8, [
                                      "item",
                                      "active",
                                      "index",
                                      "trailing-trigger"
                                    ])];
                                  }),
                                  _: 2
                                }, _parent6, _scopeId5));
                                else return [createVNode(_sfc_main$2$1, mergeProps(slotProps, {
                                  "data-slot": "link",
                                  class: ui.value.link({
                                    class: [
                                      (_c4 = unref(props).ui) == null ? void 0 : _c4.link,
                                      (_d4 = item.ui) == null ? void 0 : _d4.link,
                                      item.class
                                    ],
                                    active: active || item.active,
                                    disabled: !!item.disabled,
                                    level: level > 0
                                  }),
                                  onClick: onLinkClick
                                }), {
                                  default: withCtx(() => [createVNode(unref(ReuseLinkTemplate), {
                                    item,
                                    active: active || item.active,
                                    index,
                                    "trailing-trigger": !!slotProps.href
                                  }, null, 8, [
                                    "item",
                                    "active",
                                    "index",
                                    "trailing-trigger"
                                  ])]),
                                  _: 2
                                }, 1040, ["class"])];
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                            else _push5(ssrRenderComponent(_sfc_main$2$1, mergeProps(slotProps, {
                              "data-slot": "link",
                              class: ui.value.link({
                                class: [
                                  (_d3 = unref(props).ui) == null ? void 0 : _d3.link,
                                  (_e3 = item.ui) == null ? void 0 : _e3.link,
                                  item.class
                                ],
                                active: active || item.active,
                                disabled: !!item.disabled,
                                level: unref(props).orientation === "horizontal" || level > 0
                              }),
                              onClick: onLinkClick
                            }), {
                              default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                if (_push6) _push6(ssrRenderComponent(unref(ReuseLinkTemplate), {
                                  item,
                                  active: active || item.active,
                                  index,
                                  "trailing-trigger": !!slotProps.href
                                }, null, _parent6, _scopeId5));
                                else return [createVNode(unref(ReuseLinkTemplate), {
                                  item,
                                  active: active || item.active,
                                  index,
                                  "trailing-trigger": !!slotProps.href
                                }, null, 8, [
                                  "item",
                                  "active",
                                  "index",
                                  "trailing-trigger"
                                ])];
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          } else return [unref(props).orientation === "vertical" && unref(props).collapsed && ((_f3 = item.children) == null ? void 0 : _f3.length) && (!!unref(props).popover || !!item.popover) ? (openBlock(), createBlock(_sfc_main$4, mergeProps({ key: 0 }, {
                            ...popoverProps.value,
                            ...typeof item.popover === "boolean" ? {} : item.popover || {}
                          }, { ui: { content: ui.value.content({ class: [(_g3 = unref(props).ui) == null ? void 0 : _g3.content, (_h3 = item.ui) == null ? void 0 : _h3.content] }) } }), {
                            content: withCtx(({ close }) => [renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                              item,
                              active: active || item.active,
                              index,
                              ui: ui.value,
                              close
                            }, () => {
                              var _a5, _b4, _c4, _d4;
                              return [createVNode("ul", {
                                "data-slot": "childList",
                                class: ui.value.childList({ class: [(_a5 = unref(props).ui) == null ? void 0 : _a5.childList, (_b4 = item.ui) == null ? void 0 : _b4.childList] })
                              }, [createVNode("li", {
                                "data-slot": "childLabel",
                                class: ui.value.childLabel({ class: [(_c4 = unref(props).ui) == null ? void 0 : _c4.childLabel, (_d4 = item.ui) == null ? void 0 : _d4.childLabel] })
                              }, toDisplayString(unref(get)(item, unref(props).labelKey)), 3), (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                var _a6, _b5;
                                return openBlock(), createBlock("li", {
                                  key: childIndex,
                                  "data-slot": "childItem",
                                  class: ui.value.childItem({ class: [(_a6 = unref(props).ui) == null ? void 0 : _a6.childItem, (_b5 = item.ui) == null ? void 0 : _b5.childItem] })
                                }, [createVNode(_sfc_main$1$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                  default: withCtx(({ active: childActive, ...childSlotProps }) => [createVNode(unref(NavigationMenuLink_default), {
                                    "as-child": "",
                                    active: childActive,
                                    onSelect: childItem.onSelect
                                  }, {
                                    default: withCtx(() => {
                                      var _a7, _b6;
                                      return [createVNode(_sfc_main$2$1, mergeProps({ ref_for: true }, childSlotProps, {
                                        "data-slot": "childLink",
                                        class: ui.value.childLink({
                                          class: [
                                            (_a7 = unref(props).ui) == null ? void 0 : _a7.childLink,
                                            (_b6 = item.ui) == null ? void 0 : _b6.childLink,
                                            childItem.class
                                          ],
                                          active: childActive
                                        })
                                      }), {
                                        default: withCtx(() => {
                                          var _a8, _b7, _c5, _d5, _e4, _f4;
                                          return [childItem.icon ? (openBlock(), createBlock(_sfc_main$5$1, {
                                            key: 0,
                                            name: childItem.icon,
                                            "data-slot": "childLinkIcon",
                                            class: ui.value.childLinkIcon({
                                              class: [(_a8 = unref(props).ui) == null ? void 0 : _a8.childLinkIcon, (_b7 = item.ui) == null ? void 0 : _b7.childLinkIcon],
                                              active: childActive
                                            })
                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true), createVNode("span", {
                                            "data-slot": "childLinkLabel",
                                            class: ui.value.childLinkLabel({
                                              class: [(_c5 = unref(props).ui) == null ? void 0 : _c5.childLinkLabel, (_d5 = item.ui) == null ? void 0 : _d5.childLinkLabel],
                                              active: childActive
                                            })
                                          }, [createTextVNode(toDisplayString(unref(get)(childItem, unref(props).labelKey)) + " ", 1), childItem.target === "_blank" && unref(props).externalIcon !== false ? (openBlock(), createBlock(_sfc_main$5$1, {
                                            key: 0,
                                            name: typeof unref(props).externalIcon === "string" ? unref(props).externalIcon : unref(appConfig).ui.icons.external,
                                            "data-slot": "childLinkLabelExternalIcon",
                                            class: ui.value.childLinkLabelExternalIcon({
                                              class: [(_e4 = unref(props).ui) == null ? void 0 : _e4.childLinkLabelExternalIcon, (_f4 = item.ui) == null ? void 0 : _f4.childLinkLabelExternalIcon],
                                              active: childActive
                                            })
                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true)], 2)];
                                        }),
                                        _: 2
                                      }, 1040, ["class"])];
                                    }),
                                    _: 2
                                  }, 1032, ["active", "onSelect"])]),
                                  _: 2
                                }, 1040)], 2);
                              }), 128))], 2)];
                            })]),
                            default: withCtx(() => {
                              var _a5, _b4;
                              return [createVNode(_sfc_main$2$1, mergeProps(slotProps, {
                                "data-slot": "link",
                                class: ui.value.link({
                                  class: [
                                    (_a5 = unref(props).ui) == null ? void 0 : _a5.link,
                                    (_b4 = item.ui) == null ? void 0 : _b4.link,
                                    item.class
                                  ],
                                  active: active || item.active,
                                  disabled: !!item.disabled,
                                  level: level > 0
                                })
                              }), {
                                default: withCtx(() => [createVNode(unref(ReuseLinkTemplate), {
                                  item,
                                  active: active || item.active,
                                  index,
                                  "trailing-trigger": !!slotProps.href
                                }, null, 8, [
                                  "item",
                                  "active",
                                  "index",
                                  "trailing-trigger"
                                ])]),
                                _: 2
                              }, 1040, ["class"])];
                            }),
                            _: 2
                          }, 1040, ["ui"])) : unref(props).orientation === "vertical" && unref(props).collapsed && (!!unref(props).tooltip || !!item.tooltip) || unref(props).orientation === "horizontal" && !!item.tooltip ? (openBlock(), createBlock(_sfc_main$2, mergeProps({
                            key: 1,
                            text: unref(get)(item, unref(props).labelKey)
                          }, {
                            ...tooltipProps.value,
                            ...typeof item.tooltip === "boolean" ? {} : item.tooltip || {}
                          }), {
                            default: withCtx(() => {
                              var _a5, _b4;
                              return [createVNode(_sfc_main$2$1, mergeProps(slotProps, {
                                "data-slot": "link",
                                class: ui.value.link({
                                  class: [
                                    (_a5 = unref(props).ui) == null ? void 0 : _a5.link,
                                    (_b4 = item.ui) == null ? void 0 : _b4.link,
                                    item.class
                                  ],
                                  active: active || item.active,
                                  disabled: !!item.disabled,
                                  level: level > 0
                                }),
                                onClick: onLinkClick
                              }), {
                                default: withCtx(() => [createVNode(unref(ReuseLinkTemplate), {
                                  item,
                                  active: active || item.active,
                                  index,
                                  "trailing-trigger": !!slotProps.href
                                }, null, 8, [
                                  "item",
                                  "active",
                                  "index",
                                  "trailing-trigger"
                                ])]),
                                _: 2
                              }, 1040, ["class"])];
                            }),
                            _: 2
                          }, 1040, ["text"])) : (openBlock(), createBlock(_sfc_main$2$1, mergeProps({ key: 2 }, slotProps, {
                            "data-slot": "link",
                            class: ui.value.link({
                              class: [
                                (_i3 = unref(props).ui) == null ? void 0 : _i3.link,
                                (_j3 = item.ui) == null ? void 0 : _j3.link,
                                item.class
                              ],
                              active: active || item.active,
                              disabled: !!item.disabled,
                              level: unref(props).orientation === "horizontal" || level > 0
                            }),
                            onClick: onLinkClick
                          }), {
                            default: withCtx(() => [createVNode(unref(ReuseLinkTemplate), {
                              item,
                              active: active || item.active,
                              index,
                              "trailing-trigger": !!slotProps.href
                            }, null, 8, [
                              "item",
                              "active",
                              "index",
                              "trailing-trigger"
                            ])]),
                            _: 2
                          }, 1040, ["class"]))];
                        }),
                        _: 2
                      }), _parent4, _scopeId3);
                      if (unref(props).orientation === "horizontal" && (((_c2 = item.children) == null ? void 0 : _c2.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"])) _push4(ssrRenderComponent(unref(NavigationMenuContent_default), mergeProps(contentProps.value, {
                        "data-slot": "content",
                        class: ui.value.content({ class: [(_d2 = unref(props).ui) == null ? void 0 : _d2.content, (_e2 = item.ui) == null ? void 0 : _e2.content] })
                      }), {
                        default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                          if (_push5) ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                            item,
                            active: active || item.active,
                            index,
                            ui: ui.value
                          }, () => {
                            var _a4, _b3;
                            _push5(`<ul data-slot="childList" class="${ssrRenderClass(ui.value.childList({ class: [(_a4 = unref(props).ui) == null ? void 0 : _a4.childList, (_b3 = item.ui) == null ? void 0 : _b3.childList] }))}"${_scopeId4}><!--[-->`);
                            ssrRenderList(item.children, (childItem, childIndex) => {
                              var _a5, _b4;
                              _push5(`<li data-slot="childItem" class="${ssrRenderClass(ui.value.childItem({ class: [(_a5 = unref(props).ui) == null ? void 0 : _a5.childItem, (_b4 = item.ui) == null ? void 0 : _b4.childItem] }))}"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_sfc_main$1$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                default: withCtx(({ active: childActive, ...childSlotProps }, _push6, _parent6, _scopeId5) => {
                                  if (_push6) _push6(ssrRenderComponent(unref(NavigationMenuLink_default), {
                                    "as-child": "",
                                    active: childActive,
                                    onSelect: childItem.onSelect
                                  }, {
                                    default: withCtx((_3, _push7, _parent7, _scopeId6) => {
                                      var _a6, _b5, _c3, _d3;
                                      if (_push7) _push7(ssrRenderComponent(_sfc_main$2$1, mergeProps({ ref_for: true }, childSlotProps, {
                                        "data-slot": "childLink",
                                        class: ui.value.childLink({
                                          class: [
                                            (_a6 = unref(props).ui) == null ? void 0 : _a6.childLink,
                                            (_b5 = item.ui) == null ? void 0 : _b5.childLink,
                                            childItem.class
                                          ],
                                          active: childActive
                                        })
                                      }), {
                                        default: withCtx((_4, _push8, _parent8, _scopeId7) => {
                                          var _a7, _b6, _c4, _d4, _e3, _f3, _g3, _h3, _i3, _j3, _k2, _l2, _m, _n, _o, _p, _q, _r, _s, _t;
                                          if (_push8) {
                                            if (childItem.icon) _push8(ssrRenderComponent(_sfc_main$5$1, {
                                              name: childItem.icon,
                                              "data-slot": "childLinkIcon",
                                              class: ui.value.childLinkIcon({
                                                class: [(_a7 = unref(props).ui) == null ? void 0 : _a7.childLinkIcon, (_b6 = item.ui) == null ? void 0 : _b6.childLinkIcon],
                                                active: childActive
                                              })
                                            }, null, _parent8, _scopeId7));
                                            else _push8(`<!---->`);
                                            _push8(`<div data-slot="childLinkWrapper" class="${ssrRenderClass(ui.value.childLinkWrapper({ class: [(_c4 = unref(props).ui) == null ? void 0 : _c4.childLinkWrapper, (_d4 = item.ui) == null ? void 0 : _d4.childLinkWrapper] }))}"${_scopeId7}><p data-slot="childLinkLabel" class="${ssrRenderClass(ui.value.childLinkLabel({
                                              class: [(_e3 = unref(props).ui) == null ? void 0 : _e3.childLinkLabel, (_f3 = item.ui) == null ? void 0 : _f3.childLinkLabel],
                                              active: childActive
                                            }))}"${_scopeId7}>${ssrInterpolate(unref(get)(childItem, unref(props).labelKey))} `);
                                            if (childItem.target === "_blank" && unref(props).externalIcon !== false) _push8(ssrRenderComponent(_sfc_main$5$1, {
                                              name: typeof unref(props).externalIcon === "string" ? unref(props).externalIcon : unref(appConfig).ui.icons.external,
                                              "data-slot": "childLinkLabelExternalIcon",
                                              class: ui.value.childLinkLabelExternalIcon({
                                                class: [(_g3 = unref(props).ui) == null ? void 0 : _g3.childLinkLabelExternalIcon, (_h3 = item.ui) == null ? void 0 : _h3.childLinkLabelExternalIcon],
                                                active: childActive
                                              })
                                            }, null, _parent8, _scopeId7));
                                            else _push8(`<!---->`);
                                            _push8(`</p>`);
                                            if (childItem.description) _push8(`<p data-slot="childLinkDescription" class="${ssrRenderClass(ui.value.childLinkDescription({
                                              class: [(_i3 = unref(props).ui) == null ? void 0 : _i3.childLinkDescription, (_j3 = item.ui) == null ? void 0 : _j3.childLinkDescription],
                                              active: childActive
                                            }))}"${_scopeId7}>${ssrInterpolate(childItem.description)}</p>`);
                                            else _push8(`<!---->`);
                                            _push8(`</div>`);
                                          } else return [childItem.icon ? (openBlock(), createBlock(_sfc_main$5$1, {
                                            key: 0,
                                            name: childItem.icon,
                                            "data-slot": "childLinkIcon",
                                            class: ui.value.childLinkIcon({
                                              class: [(_k2 = unref(props).ui) == null ? void 0 : _k2.childLinkIcon, (_l2 = item.ui) == null ? void 0 : _l2.childLinkIcon],
                                              active: childActive
                                            })
                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true), createVNode("div", {
                                            "data-slot": "childLinkWrapper",
                                            class: ui.value.childLinkWrapper({ class: [(_m = unref(props).ui) == null ? void 0 : _m.childLinkWrapper, (_n = item.ui) == null ? void 0 : _n.childLinkWrapper] })
                                          }, [createVNode("p", {
                                            "data-slot": "childLinkLabel",
                                            class: ui.value.childLinkLabel({
                                              class: [(_o = unref(props).ui) == null ? void 0 : _o.childLinkLabel, (_p = item.ui) == null ? void 0 : _p.childLinkLabel],
                                              active: childActive
                                            })
                                          }, [createTextVNode(toDisplayString(unref(get)(childItem, unref(props).labelKey)) + " ", 1), childItem.target === "_blank" && unref(props).externalIcon !== false ? (openBlock(), createBlock(_sfc_main$5$1, {
                                            key: 0,
                                            name: typeof unref(props).externalIcon === "string" ? unref(props).externalIcon : unref(appConfig).ui.icons.external,
                                            "data-slot": "childLinkLabelExternalIcon",
                                            class: ui.value.childLinkLabelExternalIcon({
                                              class: [(_q = unref(props).ui) == null ? void 0 : _q.childLinkLabelExternalIcon, (_r = item.ui) == null ? void 0 : _r.childLinkLabelExternalIcon],
                                              active: childActive
                                            })
                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true)], 2), childItem.description ? (openBlock(), createBlock("p", {
                                            key: 0,
                                            "data-slot": "childLinkDescription",
                                            class: ui.value.childLinkDescription({
                                              class: [(_s = unref(props).ui) == null ? void 0 : _s.childLinkDescription, (_t = item.ui) == null ? void 0 : _t.childLinkDescription],
                                              active: childActive
                                            })
                                          }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)], 2)];
                                        }),
                                        _: 2
                                      }, _parent7, _scopeId6));
                                      else return [createVNode(_sfc_main$2$1, mergeProps({ ref_for: true }, childSlotProps, {
                                        "data-slot": "childLink",
                                        class: ui.value.childLink({
                                          class: [
                                            (_c3 = unref(props).ui) == null ? void 0 : _c3.childLink,
                                            (_d3 = item.ui) == null ? void 0 : _d3.childLink,
                                            childItem.class
                                          ],
                                          active: childActive
                                        })
                                      }), {
                                        default: withCtx(() => {
                                          var _a7, _b6, _c4, _d4, _e3, _f3, _g3, _h3, _i3, _j3;
                                          return [childItem.icon ? (openBlock(), createBlock(_sfc_main$5$1, {
                                            key: 0,
                                            name: childItem.icon,
                                            "data-slot": "childLinkIcon",
                                            class: ui.value.childLinkIcon({
                                              class: [(_a7 = unref(props).ui) == null ? void 0 : _a7.childLinkIcon, (_b6 = item.ui) == null ? void 0 : _b6.childLinkIcon],
                                              active: childActive
                                            })
                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true), createVNode("div", {
                                            "data-slot": "childLinkWrapper",
                                            class: ui.value.childLinkWrapper({ class: [(_c4 = unref(props).ui) == null ? void 0 : _c4.childLinkWrapper, (_d4 = item.ui) == null ? void 0 : _d4.childLinkWrapper] })
                                          }, [createVNode("p", {
                                            "data-slot": "childLinkLabel",
                                            class: ui.value.childLinkLabel({
                                              class: [(_e3 = unref(props).ui) == null ? void 0 : _e3.childLinkLabel, (_f3 = item.ui) == null ? void 0 : _f3.childLinkLabel],
                                              active: childActive
                                            })
                                          }, [createTextVNode(toDisplayString(unref(get)(childItem, unref(props).labelKey)) + " ", 1), childItem.target === "_blank" && unref(props).externalIcon !== false ? (openBlock(), createBlock(_sfc_main$5$1, {
                                            key: 0,
                                            name: typeof unref(props).externalIcon === "string" ? unref(props).externalIcon : unref(appConfig).ui.icons.external,
                                            "data-slot": "childLinkLabelExternalIcon",
                                            class: ui.value.childLinkLabelExternalIcon({
                                              class: [(_g3 = unref(props).ui) == null ? void 0 : _g3.childLinkLabelExternalIcon, (_h3 = item.ui) == null ? void 0 : _h3.childLinkLabelExternalIcon],
                                              active: childActive
                                            })
                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true)], 2), childItem.description ? (openBlock(), createBlock("p", {
                                            key: 0,
                                            "data-slot": "childLinkDescription",
                                            class: ui.value.childLinkDescription({
                                              class: [(_i3 = unref(props).ui) == null ? void 0 : _i3.childLinkDescription, (_j3 = item.ui) == null ? void 0 : _j3.childLinkDescription],
                                              active: childActive
                                            })
                                          }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)], 2)];
                                        }),
                                        _: 2
                                      }, 1040, ["class"])];
                                    }),
                                    _: 2
                                  }, _parent6, _scopeId5));
                                  else return [createVNode(unref(NavigationMenuLink_default), {
                                    "as-child": "",
                                    active: childActive,
                                    onSelect: childItem.onSelect
                                  }, {
                                    default: withCtx(() => {
                                      var _a6, _b5;
                                      return [createVNode(_sfc_main$2$1, mergeProps({ ref_for: true }, childSlotProps, {
                                        "data-slot": "childLink",
                                        class: ui.value.childLink({
                                          class: [
                                            (_a6 = unref(props).ui) == null ? void 0 : _a6.childLink,
                                            (_b5 = item.ui) == null ? void 0 : _b5.childLink,
                                            childItem.class
                                          ],
                                          active: childActive
                                        })
                                      }), {
                                        default: withCtx(() => {
                                          var _a7, _b6, _c3, _d3, _e3, _f3, _g3, _h3, _i3, _j3;
                                          return [childItem.icon ? (openBlock(), createBlock(_sfc_main$5$1, {
                                            key: 0,
                                            name: childItem.icon,
                                            "data-slot": "childLinkIcon",
                                            class: ui.value.childLinkIcon({
                                              class: [(_a7 = unref(props).ui) == null ? void 0 : _a7.childLinkIcon, (_b6 = item.ui) == null ? void 0 : _b6.childLinkIcon],
                                              active: childActive
                                            })
                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true), createVNode("div", {
                                            "data-slot": "childLinkWrapper",
                                            class: ui.value.childLinkWrapper({ class: [(_c3 = unref(props).ui) == null ? void 0 : _c3.childLinkWrapper, (_d3 = item.ui) == null ? void 0 : _d3.childLinkWrapper] })
                                          }, [createVNode("p", {
                                            "data-slot": "childLinkLabel",
                                            class: ui.value.childLinkLabel({
                                              class: [(_e3 = unref(props).ui) == null ? void 0 : _e3.childLinkLabel, (_f3 = item.ui) == null ? void 0 : _f3.childLinkLabel],
                                              active: childActive
                                            })
                                          }, [createTextVNode(toDisplayString(unref(get)(childItem, unref(props).labelKey)) + " ", 1), childItem.target === "_blank" && unref(props).externalIcon !== false ? (openBlock(), createBlock(_sfc_main$5$1, {
                                            key: 0,
                                            name: typeof unref(props).externalIcon === "string" ? unref(props).externalIcon : unref(appConfig).ui.icons.external,
                                            "data-slot": "childLinkLabelExternalIcon",
                                            class: ui.value.childLinkLabelExternalIcon({
                                              class: [(_g3 = unref(props).ui) == null ? void 0 : _g3.childLinkLabelExternalIcon, (_h3 = item.ui) == null ? void 0 : _h3.childLinkLabelExternalIcon],
                                              active: childActive
                                            })
                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true)], 2), childItem.description ? (openBlock(), createBlock("p", {
                                            key: 0,
                                            "data-slot": "childLinkDescription",
                                            class: ui.value.childLinkDescription({
                                              class: [(_i3 = unref(props).ui) == null ? void 0 : _i3.childLinkDescription, (_j3 = item.ui) == null ? void 0 : _j3.childLinkDescription],
                                              active: childActive
                                            })
                                          }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)], 2)];
                                        }),
                                        _: 2
                                      }, 1040, ["class"])];
                                    }),
                                    _: 2
                                  }, 1032, ["active", "onSelect"])];
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(`</li>`);
                            });
                            _push5(`<!--]--></ul>`);
                          }, _push5, _parent5, _scopeId4);
                          else return [renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                            item,
                            active: active || item.active,
                            index,
                            ui: ui.value
                          }, () => {
                            var _a4, _b3;
                            return [createVNode("ul", {
                              "data-slot": "childList",
                              class: ui.value.childList({ class: [(_a4 = unref(props).ui) == null ? void 0 : _a4.childList, (_b3 = item.ui) == null ? void 0 : _b3.childList] })
                            }, [(openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                              var _a5, _b4;
                              return openBlock(), createBlock("li", {
                                key: childIndex,
                                "data-slot": "childItem",
                                class: ui.value.childItem({ class: [(_a5 = unref(props).ui) == null ? void 0 : _a5.childItem, (_b4 = item.ui) == null ? void 0 : _b4.childItem] })
                              }, [createVNode(_sfc_main$1$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                default: withCtx(({ active: childActive, ...childSlotProps }) => [createVNode(unref(NavigationMenuLink_default), {
                                  "as-child": "",
                                  active: childActive,
                                  onSelect: childItem.onSelect
                                }, {
                                  default: withCtx(() => {
                                    var _a6, _b5;
                                    return [createVNode(_sfc_main$2$1, mergeProps({ ref_for: true }, childSlotProps, {
                                      "data-slot": "childLink",
                                      class: ui.value.childLink({
                                        class: [
                                          (_a6 = unref(props).ui) == null ? void 0 : _a6.childLink,
                                          (_b5 = item.ui) == null ? void 0 : _b5.childLink,
                                          childItem.class
                                        ],
                                        active: childActive
                                      })
                                    }), {
                                      default: withCtx(() => {
                                        var _a7, _b6, _c3, _d3, _e3, _f3, _g3, _h3, _i3, _j3;
                                        return [childItem.icon ? (openBlock(), createBlock(_sfc_main$5$1, {
                                          key: 0,
                                          name: childItem.icon,
                                          "data-slot": "childLinkIcon",
                                          class: ui.value.childLinkIcon({
                                            class: [(_a7 = unref(props).ui) == null ? void 0 : _a7.childLinkIcon, (_b6 = item.ui) == null ? void 0 : _b6.childLinkIcon],
                                            active: childActive
                                          })
                                        }, null, 8, ["name", "class"])) : createCommentVNode("", true), createVNode("div", {
                                          "data-slot": "childLinkWrapper",
                                          class: ui.value.childLinkWrapper({ class: [(_c3 = unref(props).ui) == null ? void 0 : _c3.childLinkWrapper, (_d3 = item.ui) == null ? void 0 : _d3.childLinkWrapper] })
                                        }, [createVNode("p", {
                                          "data-slot": "childLinkLabel",
                                          class: ui.value.childLinkLabel({
                                            class: [(_e3 = unref(props).ui) == null ? void 0 : _e3.childLinkLabel, (_f3 = item.ui) == null ? void 0 : _f3.childLinkLabel],
                                            active: childActive
                                          })
                                        }, [createTextVNode(toDisplayString(unref(get)(childItem, unref(props).labelKey)) + " ", 1), childItem.target === "_blank" && unref(props).externalIcon !== false ? (openBlock(), createBlock(_sfc_main$5$1, {
                                          key: 0,
                                          name: typeof unref(props).externalIcon === "string" ? unref(props).externalIcon : unref(appConfig).ui.icons.external,
                                          "data-slot": "childLinkLabelExternalIcon",
                                          class: ui.value.childLinkLabelExternalIcon({
                                            class: [(_g3 = unref(props).ui) == null ? void 0 : _g3.childLinkLabelExternalIcon, (_h3 = item.ui) == null ? void 0 : _h3.childLinkLabelExternalIcon],
                                            active: childActive
                                          })
                                        }, null, 8, ["name", "class"])) : createCommentVNode("", true)], 2), childItem.description ? (openBlock(), createBlock("p", {
                                          key: 0,
                                          "data-slot": "childLinkDescription",
                                          class: ui.value.childLinkDescription({
                                            class: [(_i3 = unref(props).ui) == null ? void 0 : _i3.childLinkDescription, (_j3 = item.ui) == null ? void 0 : _j3.childLinkDescription],
                                            active: childActive
                                          })
                                        }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)], 2)];
                                      }),
                                      _: 2
                                    }, 1040, ["class"])];
                                  }),
                                  _: 2
                                }, 1032, ["active", "onSelect"])]),
                                _: 2
                              }, 1040)], 2);
                            }), 128))], 2)];
                          })];
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                      else _push4(`<!---->`);
                    } else return [(openBlock(), createBlock(resolveDynamicComponent(unref(props).orientation === "horizontal" && (((_f2 = item.children) == null ? void 0 : _f2.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? unref(NavigationMenuTrigger_default) : unref(props).orientation === "vertical" && ((_g2 = item.children) == null ? void 0 : _g2.length) && !unref(props).collapsed && !slotProps.href ? unref(AccordionTrigger_default) : unref(NavigationMenuLink_default)), {
                      "as-child": "",
                      active: active || item.active,
                      disabled: item.disabled,
                      onSelect: item.onSelect
                    }, {
                      default: withCtx(() => {
                        var _a4, _b3, _c3, _d3, _e3;
                        return [unref(props).orientation === "vertical" && unref(props).collapsed && ((_a4 = item.children) == null ? void 0 : _a4.length) && (!!unref(props).popover || !!item.popover) ? (openBlock(), createBlock(_sfc_main$4, mergeProps({ key: 0 }, {
                          ...popoverProps.value,
                          ...typeof item.popover === "boolean" ? {} : item.popover || {}
                        }, { ui: { content: ui.value.content({ class: [(_b3 = unref(props).ui) == null ? void 0 : _b3.content, (_c3 = item.ui) == null ? void 0 : _c3.content] }) } }), {
                          content: withCtx(({ close }) => [renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                            item,
                            active: active || item.active,
                            index,
                            ui: ui.value,
                            close
                          }, () => {
                            var _a5, _b4, _c4, _d4;
                            return [createVNode("ul", {
                              "data-slot": "childList",
                              class: ui.value.childList({ class: [(_a5 = unref(props).ui) == null ? void 0 : _a5.childList, (_b4 = item.ui) == null ? void 0 : _b4.childList] })
                            }, [createVNode("li", {
                              "data-slot": "childLabel",
                              class: ui.value.childLabel({ class: [(_c4 = unref(props).ui) == null ? void 0 : _c4.childLabel, (_d4 = item.ui) == null ? void 0 : _d4.childLabel] })
                            }, toDisplayString(unref(get)(item, unref(props).labelKey)), 3), (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                              var _a6, _b5;
                              return openBlock(), createBlock("li", {
                                key: childIndex,
                                "data-slot": "childItem",
                                class: ui.value.childItem({ class: [(_a6 = unref(props).ui) == null ? void 0 : _a6.childItem, (_b5 = item.ui) == null ? void 0 : _b5.childItem] })
                              }, [createVNode(_sfc_main$1$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                default: withCtx(({ active: childActive, ...childSlotProps }) => [createVNode(unref(NavigationMenuLink_default), {
                                  "as-child": "",
                                  active: childActive,
                                  onSelect: childItem.onSelect
                                }, {
                                  default: withCtx(() => {
                                    var _a7, _b6;
                                    return [createVNode(_sfc_main$2$1, mergeProps({ ref_for: true }, childSlotProps, {
                                      "data-slot": "childLink",
                                      class: ui.value.childLink({
                                        class: [
                                          (_a7 = unref(props).ui) == null ? void 0 : _a7.childLink,
                                          (_b6 = item.ui) == null ? void 0 : _b6.childLink,
                                          childItem.class
                                        ],
                                        active: childActive
                                      })
                                    }), {
                                      default: withCtx(() => {
                                        var _a8, _b7, _c5, _d5, _e4, _f3;
                                        return [childItem.icon ? (openBlock(), createBlock(_sfc_main$5$1, {
                                          key: 0,
                                          name: childItem.icon,
                                          "data-slot": "childLinkIcon",
                                          class: ui.value.childLinkIcon({
                                            class: [(_a8 = unref(props).ui) == null ? void 0 : _a8.childLinkIcon, (_b7 = item.ui) == null ? void 0 : _b7.childLinkIcon],
                                            active: childActive
                                          })
                                        }, null, 8, ["name", "class"])) : createCommentVNode("", true), createVNode("span", {
                                          "data-slot": "childLinkLabel",
                                          class: ui.value.childLinkLabel({
                                            class: [(_c5 = unref(props).ui) == null ? void 0 : _c5.childLinkLabel, (_d5 = item.ui) == null ? void 0 : _d5.childLinkLabel],
                                            active: childActive
                                          })
                                        }, [createTextVNode(toDisplayString(unref(get)(childItem, unref(props).labelKey)) + " ", 1), childItem.target === "_blank" && unref(props).externalIcon !== false ? (openBlock(), createBlock(_sfc_main$5$1, {
                                          key: 0,
                                          name: typeof unref(props).externalIcon === "string" ? unref(props).externalIcon : unref(appConfig).ui.icons.external,
                                          "data-slot": "childLinkLabelExternalIcon",
                                          class: ui.value.childLinkLabelExternalIcon({
                                            class: [(_e4 = unref(props).ui) == null ? void 0 : _e4.childLinkLabelExternalIcon, (_f3 = item.ui) == null ? void 0 : _f3.childLinkLabelExternalIcon],
                                            active: childActive
                                          })
                                        }, null, 8, ["name", "class"])) : createCommentVNode("", true)], 2)];
                                      }),
                                      _: 2
                                    }, 1040, ["class"])];
                                  }),
                                  _: 2
                                }, 1032, ["active", "onSelect"])]),
                                _: 2
                              }, 1040)], 2);
                            }), 128))], 2)];
                          })]),
                          default: withCtx(() => {
                            var _a5, _b4;
                            return [createVNode(_sfc_main$2$1, mergeProps(slotProps, {
                              "data-slot": "link",
                              class: ui.value.link({
                                class: [
                                  (_a5 = unref(props).ui) == null ? void 0 : _a5.link,
                                  (_b4 = item.ui) == null ? void 0 : _b4.link,
                                  item.class
                                ],
                                active: active || item.active,
                                disabled: !!item.disabled,
                                level: level > 0
                              })
                            }), {
                              default: withCtx(() => [createVNode(unref(ReuseLinkTemplate), {
                                item,
                                active: active || item.active,
                                index,
                                "trailing-trigger": !!slotProps.href
                              }, null, 8, [
                                "item",
                                "active",
                                "index",
                                "trailing-trigger"
                              ])]),
                              _: 2
                            }, 1040, ["class"])];
                          }),
                          _: 2
                        }, 1040, ["ui"])) : unref(props).orientation === "vertical" && unref(props).collapsed && (!!unref(props).tooltip || !!item.tooltip) || unref(props).orientation === "horizontal" && !!item.tooltip ? (openBlock(), createBlock(_sfc_main$2, mergeProps({
                          key: 1,
                          text: unref(get)(item, unref(props).labelKey)
                        }, {
                          ...tooltipProps.value,
                          ...typeof item.tooltip === "boolean" ? {} : item.tooltip || {}
                        }), {
                          default: withCtx(() => {
                            var _a5, _b4;
                            return [createVNode(_sfc_main$2$1, mergeProps(slotProps, {
                              "data-slot": "link",
                              class: ui.value.link({
                                class: [
                                  (_a5 = unref(props).ui) == null ? void 0 : _a5.link,
                                  (_b4 = item.ui) == null ? void 0 : _b4.link,
                                  item.class
                                ],
                                active: active || item.active,
                                disabled: !!item.disabled,
                                level: level > 0
                              }),
                              onClick: onLinkClick
                            }), {
                              default: withCtx(() => [createVNode(unref(ReuseLinkTemplate), {
                                item,
                                active: active || item.active,
                                index,
                                "trailing-trigger": !!slotProps.href
                              }, null, 8, [
                                "item",
                                "active",
                                "index",
                                "trailing-trigger"
                              ])]),
                              _: 2
                            }, 1040, ["class"])];
                          }),
                          _: 2
                        }, 1040, ["text"])) : (openBlock(), createBlock(_sfc_main$2$1, mergeProps({ key: 2 }, slotProps, {
                          "data-slot": "link",
                          class: ui.value.link({
                            class: [
                              (_d3 = unref(props).ui) == null ? void 0 : _d3.link,
                              (_e3 = item.ui) == null ? void 0 : _e3.link,
                              item.class
                            ],
                            active: active || item.active,
                            disabled: !!item.disabled,
                            level: unref(props).orientation === "horizontal" || level > 0
                          }),
                          onClick: onLinkClick
                        }), {
                          default: withCtx(() => [createVNode(unref(ReuseLinkTemplate), {
                            item,
                            active: active || item.active,
                            index,
                            "trailing-trigger": !!slotProps.href
                          }, null, 8, [
                            "item",
                            "active",
                            "index",
                            "trailing-trigger"
                          ])]),
                          _: 2
                        }, 1040, ["class"]))];
                      }),
                      _: 2
                    }, 1064, [
                      "active",
                      "disabled",
                      "onSelect"
                    ])), unref(props).orientation === "horizontal" && (((_h2 = item.children) == null ? void 0 : _h2.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? (openBlock(), createBlock(unref(NavigationMenuContent_default), mergeProps({ key: 0 }, contentProps.value, {
                      "data-slot": "content",
                      class: ui.value.content({ class: [(_i2 = unref(props).ui) == null ? void 0 : _i2.content, (_j2 = item.ui) == null ? void 0 : _j2.content] })
                    }), {
                      default: withCtx(() => [renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                        item,
                        active: active || item.active,
                        index,
                        ui: ui.value
                      }, () => {
                        var _a4, _b3;
                        return [createVNode("ul", {
                          "data-slot": "childList",
                          class: ui.value.childList({ class: [(_a4 = unref(props).ui) == null ? void 0 : _a4.childList, (_b3 = item.ui) == null ? void 0 : _b3.childList] })
                        }, [(openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                          var _a5, _b4;
                          return openBlock(), createBlock("li", {
                            key: childIndex,
                            "data-slot": "childItem",
                            class: ui.value.childItem({ class: [(_a5 = unref(props).ui) == null ? void 0 : _a5.childItem, (_b4 = item.ui) == null ? void 0 : _b4.childItem] })
                          }, [createVNode(_sfc_main$1$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                            default: withCtx(({ active: childActive, ...childSlotProps }) => [createVNode(unref(NavigationMenuLink_default), {
                              "as-child": "",
                              active: childActive,
                              onSelect: childItem.onSelect
                            }, {
                              default: withCtx(() => {
                                var _a6, _b5;
                                return [createVNode(_sfc_main$2$1, mergeProps({ ref_for: true }, childSlotProps, {
                                  "data-slot": "childLink",
                                  class: ui.value.childLink({
                                    class: [
                                      (_a6 = unref(props).ui) == null ? void 0 : _a6.childLink,
                                      (_b5 = item.ui) == null ? void 0 : _b5.childLink,
                                      childItem.class
                                    ],
                                    active: childActive
                                  })
                                }), {
                                  default: withCtx(() => {
                                    var _a7, _b6, _c3, _d3, _e3, _f3, _g3, _h3, _i3, _j3;
                                    return [childItem.icon ? (openBlock(), createBlock(_sfc_main$5$1, {
                                      key: 0,
                                      name: childItem.icon,
                                      "data-slot": "childLinkIcon",
                                      class: ui.value.childLinkIcon({
                                        class: [(_a7 = unref(props).ui) == null ? void 0 : _a7.childLinkIcon, (_b6 = item.ui) == null ? void 0 : _b6.childLinkIcon],
                                        active: childActive
                                      })
                                    }, null, 8, ["name", "class"])) : createCommentVNode("", true), createVNode("div", {
                                      "data-slot": "childLinkWrapper",
                                      class: ui.value.childLinkWrapper({ class: [(_c3 = unref(props).ui) == null ? void 0 : _c3.childLinkWrapper, (_d3 = item.ui) == null ? void 0 : _d3.childLinkWrapper] })
                                    }, [createVNode("p", {
                                      "data-slot": "childLinkLabel",
                                      class: ui.value.childLinkLabel({
                                        class: [(_e3 = unref(props).ui) == null ? void 0 : _e3.childLinkLabel, (_f3 = item.ui) == null ? void 0 : _f3.childLinkLabel],
                                        active: childActive
                                      })
                                    }, [createTextVNode(toDisplayString(unref(get)(childItem, unref(props).labelKey)) + " ", 1), childItem.target === "_blank" && unref(props).externalIcon !== false ? (openBlock(), createBlock(_sfc_main$5$1, {
                                      key: 0,
                                      name: typeof unref(props).externalIcon === "string" ? unref(props).externalIcon : unref(appConfig).ui.icons.external,
                                      "data-slot": "childLinkLabelExternalIcon",
                                      class: ui.value.childLinkLabelExternalIcon({
                                        class: [(_g3 = unref(props).ui) == null ? void 0 : _g3.childLinkLabelExternalIcon, (_h3 = item.ui) == null ? void 0 : _h3.childLinkLabelExternalIcon],
                                        active: childActive
                                      })
                                    }, null, 8, ["name", "class"])) : createCommentVNode("", true)], 2), childItem.description ? (openBlock(), createBlock("p", {
                                      key: 0,
                                      "data-slot": "childLinkDescription",
                                      class: ui.value.childLinkDescription({
                                        class: [(_i3 = unref(props).ui) == null ? void 0 : _i3.childLinkDescription, (_j3 = item.ui) == null ? void 0 : _j3.childLinkDescription],
                                        active: childActive
                                      })
                                    }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)], 2)];
                                  }),
                                  _: 2
                                }, 1040, ["class"])];
                              }),
                              _: 2
                            }, 1032, ["active", "onSelect"])]),
                            _: 2
                          }, 1040)], 2);
                        }), 128))], 2)];
                      })]),
                      _: 2
                    }, 1040, ["class"])) : createCommentVNode("", true)];
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                else _push3(`<!---->`);
                if (unref(props).orientation === "vertical" && ((_d = item.children) == null ? void 0 : _d.length) && !unref(props).collapsed) _push3(ssrRenderComponent(unref(AccordionContent_default), {
                  "data-slot": "content",
                  class: ui.value.content({ class: [(_e = unref(props).ui) == null ? void 0 : _e.content, (_f = item.ui) == null ? void 0 : _f.content] })
                }, {
                  default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                    var _a3, _b2, _c2, _d2;
                    if (_push4) _push4(ssrRenderComponent(unref(AccordionRoot_default), mergeProps({
                      ...unref(accordionProps),
                      defaultValue: getAccordionDefaultValue(item.children, level + 1, listIndex)
                    }, {
                      as: "ul",
                      "data-slot": "childList",
                      class: ui.value.childList({ class: [(_a3 = unref(props).ui) == null ? void 0 : _a3.childList, (_b2 = item.ui) == null ? void 0 : _b2.childList] })
                    }), {
                      default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<!--[-->`);
                          ssrRenderList(item.children, (childItem, childIndex) => {
                            var _a4, _b3;
                            _push5(ssrRenderComponent(unref(ReuseItemTemplate), {
                              key: childIndex,
                              item: childItem,
                              index: childIndex,
                              level: level + 1,
                              "list-index": listIndex,
                              "data-slot": "childItem",
                              class: ui.value.childItem({ class: [(_a4 = unref(props).ui) == null ? void 0 : _a4.childItem, (_b3 = childItem.ui) == null ? void 0 : _b3.childItem] })
                            }, null, _parent5, _scopeId4));
                          });
                          _push5(`<!--]-->`);
                        } else return [(openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                          var _a4, _b3;
                          return openBlock(), createBlock(unref(ReuseItemTemplate), {
                            key: childIndex,
                            item: childItem,
                            index: childIndex,
                            level: level + 1,
                            "list-index": listIndex,
                            "data-slot": "childItem",
                            class: ui.value.childItem({ class: [(_a4 = unref(props).ui) == null ? void 0 : _a4.childItem, (_b3 = childItem.ui) == null ? void 0 : _b3.childItem] })
                          }, null, 8, [
                            "item",
                            "index",
                            "level",
                            "list-index",
                            "class"
                          ]);
                        }), 128))];
                      }),
                      _: 2
                    }, _parent4, _scopeId3));
                    else return [createVNode(unref(AccordionRoot_default), mergeProps({
                      ...unref(accordionProps),
                      defaultValue: getAccordionDefaultValue(item.children, level + 1, listIndex)
                    }, {
                      as: "ul",
                      "data-slot": "childList",
                      class: ui.value.childList({ class: [(_c2 = unref(props).ui) == null ? void 0 : _c2.childList, (_d2 = item.ui) == null ? void 0 : _d2.childList] })
                    }), {
                      default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                        var _a4, _b3;
                        return openBlock(), createBlock(unref(ReuseItemTemplate), {
                          key: childIndex,
                          item: childItem,
                          index: childIndex,
                          level: level + 1,
                          "list-index": listIndex,
                          "data-slot": "childItem",
                          class: ui.value.childItem({ class: [(_a4 = unref(props).ui) == null ? void 0 : _a4.childItem, (_b3 = childItem.ui) == null ? void 0 : _b3.childItem] })
                        }, null, 8, [
                          "item",
                          "index",
                          "level",
                          "list-index",
                          "class"
                        ]);
                      }), 128))]),
                      _: 2
                    }, 1040, ["class"])];
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                else _push3(`<!---->`);
              } else return [unref(props).orientation === "vertical" && item.type === "label" && !unref(props).collapsed ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "label",
                class: ui.value.label({ class: [
                  (_g = unref(props).ui) == null ? void 0 : _g.label,
                  (_h = item.ui) == null ? void 0 : _h.label,
                  item.class
                ] })
              }, [createVNode(unref(ReuseLinkTemplate), {
                item,
                index,
                "trailing-trigger": true
              }, null, 8, ["item", "index"])], 2)) : item.type !== "label" ? (openBlock(), createBlock(_sfc_main$1$1, mergeProps({ key: 1 }, unref(props).orientation === "vertical" && ((_i = item.children) == null ? void 0 : _i.length) && !unref(props).collapsed && item.type === "trigger" ? {} : unref(pickLinkProps)(item), { custom: "" }), {
                default: withCtx(({ active, ...slotProps }) => {
                  var _a3, _b2, _c2, _d2, _e2;
                  return [(openBlock(), createBlock(resolveDynamicComponent(unref(props).orientation === "horizontal" && (((_a3 = item.children) == null ? void 0 : _a3.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? unref(NavigationMenuTrigger_default) : unref(props).orientation === "vertical" && ((_b2 = item.children) == null ? void 0 : _b2.length) && !unref(props).collapsed && !slotProps.href ? unref(AccordionTrigger_default) : unref(NavigationMenuLink_default)), {
                    "as-child": "",
                    active: active || item.active,
                    disabled: item.disabled,
                    onSelect: item.onSelect
                  }, {
                    default: withCtx(() => {
                      var _a4, _b3, _c3, _d3, _e3;
                      return [unref(props).orientation === "vertical" && unref(props).collapsed && ((_a4 = item.children) == null ? void 0 : _a4.length) && (!!unref(props).popover || !!item.popover) ? (openBlock(), createBlock(_sfc_main$4, mergeProps({ key: 0 }, {
                        ...popoverProps.value,
                        ...typeof item.popover === "boolean" ? {} : item.popover || {}
                      }, { ui: { content: ui.value.content({ class: [(_b3 = unref(props).ui) == null ? void 0 : _b3.content, (_c3 = item.ui) == null ? void 0 : _c3.content] }) } }), {
                        content: withCtx(({ close }) => [renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                          item,
                          active: active || item.active,
                          index,
                          ui: ui.value,
                          close
                        }, () => {
                          var _a5, _b4, _c4, _d4;
                          return [createVNode("ul", {
                            "data-slot": "childList",
                            class: ui.value.childList({ class: [(_a5 = unref(props).ui) == null ? void 0 : _a5.childList, (_b4 = item.ui) == null ? void 0 : _b4.childList] })
                          }, [createVNode("li", {
                            "data-slot": "childLabel",
                            class: ui.value.childLabel({ class: [(_c4 = unref(props).ui) == null ? void 0 : _c4.childLabel, (_d4 = item.ui) == null ? void 0 : _d4.childLabel] })
                          }, toDisplayString(unref(get)(item, unref(props).labelKey)), 3), (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                            var _a6, _b5;
                            return openBlock(), createBlock("li", {
                              key: childIndex,
                              "data-slot": "childItem",
                              class: ui.value.childItem({ class: [(_a6 = unref(props).ui) == null ? void 0 : _a6.childItem, (_b5 = item.ui) == null ? void 0 : _b5.childItem] })
                            }, [createVNode(_sfc_main$1$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                              default: withCtx(({ active: childActive, ...childSlotProps }) => [createVNode(unref(NavigationMenuLink_default), {
                                "as-child": "",
                                active: childActive,
                                onSelect: childItem.onSelect
                              }, {
                                default: withCtx(() => {
                                  var _a7, _b6;
                                  return [createVNode(_sfc_main$2$1, mergeProps({ ref_for: true }, childSlotProps, {
                                    "data-slot": "childLink",
                                    class: ui.value.childLink({
                                      class: [
                                        (_a7 = unref(props).ui) == null ? void 0 : _a7.childLink,
                                        (_b6 = item.ui) == null ? void 0 : _b6.childLink,
                                        childItem.class
                                      ],
                                      active: childActive
                                    })
                                  }), {
                                    default: withCtx(() => {
                                      var _a8, _b7, _c5, _d5, _e4, _f2;
                                      return [childItem.icon ? (openBlock(), createBlock(_sfc_main$5$1, {
                                        key: 0,
                                        name: childItem.icon,
                                        "data-slot": "childLinkIcon",
                                        class: ui.value.childLinkIcon({
                                          class: [(_a8 = unref(props).ui) == null ? void 0 : _a8.childLinkIcon, (_b7 = item.ui) == null ? void 0 : _b7.childLinkIcon],
                                          active: childActive
                                        })
                                      }, null, 8, ["name", "class"])) : createCommentVNode("", true), createVNode("span", {
                                        "data-slot": "childLinkLabel",
                                        class: ui.value.childLinkLabel({
                                          class: [(_c5 = unref(props).ui) == null ? void 0 : _c5.childLinkLabel, (_d5 = item.ui) == null ? void 0 : _d5.childLinkLabel],
                                          active: childActive
                                        })
                                      }, [createTextVNode(toDisplayString(unref(get)(childItem, unref(props).labelKey)) + " ", 1), childItem.target === "_blank" && unref(props).externalIcon !== false ? (openBlock(), createBlock(_sfc_main$5$1, {
                                        key: 0,
                                        name: typeof unref(props).externalIcon === "string" ? unref(props).externalIcon : unref(appConfig).ui.icons.external,
                                        "data-slot": "childLinkLabelExternalIcon",
                                        class: ui.value.childLinkLabelExternalIcon({
                                          class: [(_e4 = unref(props).ui) == null ? void 0 : _e4.childLinkLabelExternalIcon, (_f2 = item.ui) == null ? void 0 : _f2.childLinkLabelExternalIcon],
                                          active: childActive
                                        })
                                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)], 2)];
                                    }),
                                    _: 2
                                  }, 1040, ["class"])];
                                }),
                                _: 2
                              }, 1032, ["active", "onSelect"])]),
                              _: 2
                            }, 1040)], 2);
                          }), 128))], 2)];
                        })]),
                        default: withCtx(() => {
                          var _a5, _b4;
                          return [createVNode(_sfc_main$2$1, mergeProps(slotProps, {
                            "data-slot": "link",
                            class: ui.value.link({
                              class: [
                                (_a5 = unref(props).ui) == null ? void 0 : _a5.link,
                                (_b4 = item.ui) == null ? void 0 : _b4.link,
                                item.class
                              ],
                              active: active || item.active,
                              disabled: !!item.disabled,
                              level: level > 0
                            })
                          }), {
                            default: withCtx(() => [createVNode(unref(ReuseLinkTemplate), {
                              item,
                              active: active || item.active,
                              index,
                              "trailing-trigger": !!slotProps.href
                            }, null, 8, [
                              "item",
                              "active",
                              "index",
                              "trailing-trigger"
                            ])]),
                            _: 2
                          }, 1040, ["class"])];
                        }),
                        _: 2
                      }, 1040, ["ui"])) : unref(props).orientation === "vertical" && unref(props).collapsed && (!!unref(props).tooltip || !!item.tooltip) || unref(props).orientation === "horizontal" && !!item.tooltip ? (openBlock(), createBlock(_sfc_main$2, mergeProps({
                        key: 1,
                        text: unref(get)(item, unref(props).labelKey)
                      }, {
                        ...tooltipProps.value,
                        ...typeof item.tooltip === "boolean" ? {} : item.tooltip || {}
                      }), {
                        default: withCtx(() => {
                          var _a5, _b4;
                          return [createVNode(_sfc_main$2$1, mergeProps(slotProps, {
                            "data-slot": "link",
                            class: ui.value.link({
                              class: [
                                (_a5 = unref(props).ui) == null ? void 0 : _a5.link,
                                (_b4 = item.ui) == null ? void 0 : _b4.link,
                                item.class
                              ],
                              active: active || item.active,
                              disabled: !!item.disabled,
                              level: level > 0
                            }),
                            onClick: onLinkClick
                          }), {
                            default: withCtx(() => [createVNode(unref(ReuseLinkTemplate), {
                              item,
                              active: active || item.active,
                              index,
                              "trailing-trigger": !!slotProps.href
                            }, null, 8, [
                              "item",
                              "active",
                              "index",
                              "trailing-trigger"
                            ])]),
                            _: 2
                          }, 1040, ["class"])];
                        }),
                        _: 2
                      }, 1040, ["text"])) : (openBlock(), createBlock(_sfc_main$2$1, mergeProps({ key: 2 }, slotProps, {
                        "data-slot": "link",
                        class: ui.value.link({
                          class: [
                            (_d3 = unref(props).ui) == null ? void 0 : _d3.link,
                            (_e3 = item.ui) == null ? void 0 : _e3.link,
                            item.class
                          ],
                          active: active || item.active,
                          disabled: !!item.disabled,
                          level: unref(props).orientation === "horizontal" || level > 0
                        }),
                        onClick: onLinkClick
                      }), {
                        default: withCtx(() => [createVNode(unref(ReuseLinkTemplate), {
                          item,
                          active: active || item.active,
                          index,
                          "trailing-trigger": !!slotProps.href
                        }, null, 8, [
                          "item",
                          "active",
                          "index",
                          "trailing-trigger"
                        ])]),
                        _: 2
                      }, 1040, ["class"]))];
                    }),
                    _: 2
                  }, 1064, [
                    "active",
                    "disabled",
                    "onSelect"
                  ])), unref(props).orientation === "horizontal" && (((_c2 = item.children) == null ? void 0 : _c2.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? (openBlock(), createBlock(unref(NavigationMenuContent_default), mergeProps({ key: 0 }, contentProps.value, {
                    "data-slot": "content",
                    class: ui.value.content({ class: [(_d2 = unref(props).ui) == null ? void 0 : _d2.content, (_e2 = item.ui) == null ? void 0 : _e2.content] })
                  }), {
                    default: withCtx(() => [renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                      item,
                      active: active || item.active,
                      index,
                      ui: ui.value
                    }, () => {
                      var _a4, _b3;
                      return [createVNode("ul", {
                        "data-slot": "childList",
                        class: ui.value.childList({ class: [(_a4 = unref(props).ui) == null ? void 0 : _a4.childList, (_b3 = item.ui) == null ? void 0 : _b3.childList] })
                      }, [(openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                        var _a5, _b4;
                        return openBlock(), createBlock("li", {
                          key: childIndex,
                          "data-slot": "childItem",
                          class: ui.value.childItem({ class: [(_a5 = unref(props).ui) == null ? void 0 : _a5.childItem, (_b4 = item.ui) == null ? void 0 : _b4.childItem] })
                        }, [createVNode(_sfc_main$1$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                          default: withCtx(({ active: childActive, ...childSlotProps }) => [createVNode(unref(NavigationMenuLink_default), {
                            "as-child": "",
                            active: childActive,
                            onSelect: childItem.onSelect
                          }, {
                            default: withCtx(() => {
                              var _a6, _b5;
                              return [createVNode(_sfc_main$2$1, mergeProps({ ref_for: true }, childSlotProps, {
                                "data-slot": "childLink",
                                class: ui.value.childLink({
                                  class: [
                                    (_a6 = unref(props).ui) == null ? void 0 : _a6.childLink,
                                    (_b5 = item.ui) == null ? void 0 : _b5.childLink,
                                    childItem.class
                                  ],
                                  active: childActive
                                })
                              }), {
                                default: withCtx(() => {
                                  var _a7, _b6, _c3, _d3, _e3, _f2, _g2, _h2, _i2, _j2;
                                  return [childItem.icon ? (openBlock(), createBlock(_sfc_main$5$1, {
                                    key: 0,
                                    name: childItem.icon,
                                    "data-slot": "childLinkIcon",
                                    class: ui.value.childLinkIcon({
                                      class: [(_a7 = unref(props).ui) == null ? void 0 : _a7.childLinkIcon, (_b6 = item.ui) == null ? void 0 : _b6.childLinkIcon],
                                      active: childActive
                                    })
                                  }, null, 8, ["name", "class"])) : createCommentVNode("", true), createVNode("div", {
                                    "data-slot": "childLinkWrapper",
                                    class: ui.value.childLinkWrapper({ class: [(_c3 = unref(props).ui) == null ? void 0 : _c3.childLinkWrapper, (_d3 = item.ui) == null ? void 0 : _d3.childLinkWrapper] })
                                  }, [createVNode("p", {
                                    "data-slot": "childLinkLabel",
                                    class: ui.value.childLinkLabel({
                                      class: [(_e3 = unref(props).ui) == null ? void 0 : _e3.childLinkLabel, (_f2 = item.ui) == null ? void 0 : _f2.childLinkLabel],
                                      active: childActive
                                    })
                                  }, [createTextVNode(toDisplayString(unref(get)(childItem, unref(props).labelKey)) + " ", 1), childItem.target === "_blank" && unref(props).externalIcon !== false ? (openBlock(), createBlock(_sfc_main$5$1, {
                                    key: 0,
                                    name: typeof unref(props).externalIcon === "string" ? unref(props).externalIcon : unref(appConfig).ui.icons.external,
                                    "data-slot": "childLinkLabelExternalIcon",
                                    class: ui.value.childLinkLabelExternalIcon({
                                      class: [(_g2 = unref(props).ui) == null ? void 0 : _g2.childLinkLabelExternalIcon, (_h2 = item.ui) == null ? void 0 : _h2.childLinkLabelExternalIcon],
                                      active: childActive
                                    })
                                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)], 2), childItem.description ? (openBlock(), createBlock("p", {
                                    key: 0,
                                    "data-slot": "childLinkDescription",
                                    class: ui.value.childLinkDescription({
                                      class: [(_i2 = unref(props).ui) == null ? void 0 : _i2.childLinkDescription, (_j2 = item.ui) == null ? void 0 : _j2.childLinkDescription],
                                      active: childActive
                                    })
                                  }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)], 2)];
                                }),
                                _: 2
                              }, 1040, ["class"])];
                            }),
                            _: 2
                          }, 1032, ["active", "onSelect"])]),
                          _: 2
                        }, 1040)], 2);
                      }), 128))], 2)];
                    })]),
                    _: 2
                  }, 1040, ["class"])) : createCommentVNode("", true)];
                }),
                _: 2
              }, 1040)) : createCommentVNode("", true), unref(props).orientation === "vertical" && ((_j = item.children) == null ? void 0 : _j.length) && !unref(props).collapsed ? (openBlock(), createBlock(unref(AccordionContent_default), {
                key: 2,
                "data-slot": "content",
                class: ui.value.content({ class: [(_k = unref(props).ui) == null ? void 0 : _k.content, (_l = item.ui) == null ? void 0 : _l.content] })
              }, {
                default: withCtx(() => {
                  var _a3, _b2;
                  return [createVNode(unref(AccordionRoot_default), mergeProps({
                    ...unref(accordionProps),
                    defaultValue: getAccordionDefaultValue(item.children, level + 1, listIndex)
                  }, {
                    as: "ul",
                    "data-slot": "childList",
                    class: ui.value.childList({ class: [(_a3 = unref(props).ui) == null ? void 0 : _a3.childList, (_b2 = item.ui) == null ? void 0 : _b2.childList] })
                  }), {
                    default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                      var _a4, _b3;
                      return openBlock(), createBlock(unref(ReuseItemTemplate), {
                        key: childIndex,
                        item: childItem,
                        index: childIndex,
                        level: level + 1,
                        "list-index": listIndex,
                        "data-slot": "childItem",
                        class: ui.value.childItem({ class: [(_a4 = unref(props).ui) == null ? void 0 : _a4.childItem, (_b3 = childItem.ui) == null ? void 0 : _b3.childItem] })
                      }, null, 8, [
                        "item",
                        "index",
                        "level",
                        "list-index",
                        "class"
                      ]);
                    }), 128))]),
                    _: 2
                  }, 1040, ["class"])];
                }),
                _: 2
              }, 1032, ["class"])) : createCommentVNode("", true)];
            }),
            _: 2
          }), _parent2, _scopeId);
          else return [(openBlock(), createBlock(resolveDynamicComponent(unref(props).orientation === "vertical" && !unref(props).collapsed ? unref(AccordionItem_default) : unref(NavigationMenuItem_default)), mergeProps({ as: "li" }, unref(props).orientation === "vertical" && !unref(props).collapsed ? { disabled: !!item.disabled } : {}, { value: getItemValue(item, index, level, listIndex) }), {
            default: withCtx(() => {
              var _a2, _b, _c, _d, _e, _f;
              return [unref(props).orientation === "vertical" && item.type === "label" && !unref(props).collapsed ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "label",
                class: ui.value.label({ class: [
                  (_a2 = unref(props).ui) == null ? void 0 : _a2.label,
                  (_b = item.ui) == null ? void 0 : _b.label,
                  item.class
                ] })
              }, [createVNode(unref(ReuseLinkTemplate), {
                item,
                index,
                "trailing-trigger": true
              }, null, 8, ["item", "index"])], 2)) : item.type !== "label" ? (openBlock(), createBlock(_sfc_main$1$1, mergeProps({ key: 1 }, unref(props).orientation === "vertical" && ((_c = item.children) == null ? void 0 : _c.length) && !unref(props).collapsed && item.type === "trigger" ? {} : unref(pickLinkProps)(item), { custom: "" }), {
                default: withCtx(({ active, ...slotProps }) => {
                  var _a3, _b2, _c2, _d2, _e2;
                  return [(openBlock(), createBlock(resolveDynamicComponent(unref(props).orientation === "horizontal" && (((_a3 = item.children) == null ? void 0 : _a3.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? unref(NavigationMenuTrigger_default) : unref(props).orientation === "vertical" && ((_b2 = item.children) == null ? void 0 : _b2.length) && !unref(props).collapsed && !slotProps.href ? unref(AccordionTrigger_default) : unref(NavigationMenuLink_default)), {
                    "as-child": "",
                    active: active || item.active,
                    disabled: item.disabled,
                    onSelect: item.onSelect
                  }, {
                    default: withCtx(() => {
                      var _a4, _b3, _c3, _d3, _e3;
                      return [unref(props).orientation === "vertical" && unref(props).collapsed && ((_a4 = item.children) == null ? void 0 : _a4.length) && (!!unref(props).popover || !!item.popover) ? (openBlock(), createBlock(_sfc_main$4, mergeProps({ key: 0 }, {
                        ...popoverProps.value,
                        ...typeof item.popover === "boolean" ? {} : item.popover || {}
                      }, { ui: { content: ui.value.content({ class: [(_b3 = unref(props).ui) == null ? void 0 : _b3.content, (_c3 = item.ui) == null ? void 0 : _c3.content] }) } }), {
                        content: withCtx(({ close }) => [renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                          item,
                          active: active || item.active,
                          index,
                          ui: ui.value,
                          close
                        }, () => {
                          var _a5, _b4, _c4, _d4;
                          return [createVNode("ul", {
                            "data-slot": "childList",
                            class: ui.value.childList({ class: [(_a5 = unref(props).ui) == null ? void 0 : _a5.childList, (_b4 = item.ui) == null ? void 0 : _b4.childList] })
                          }, [createVNode("li", {
                            "data-slot": "childLabel",
                            class: ui.value.childLabel({ class: [(_c4 = unref(props).ui) == null ? void 0 : _c4.childLabel, (_d4 = item.ui) == null ? void 0 : _d4.childLabel] })
                          }, toDisplayString(unref(get)(item, unref(props).labelKey)), 3), (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                            var _a6, _b5;
                            return openBlock(), createBlock("li", {
                              key: childIndex,
                              "data-slot": "childItem",
                              class: ui.value.childItem({ class: [(_a6 = unref(props).ui) == null ? void 0 : _a6.childItem, (_b5 = item.ui) == null ? void 0 : _b5.childItem] })
                            }, [createVNode(_sfc_main$1$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                              default: withCtx(({ active: childActive, ...childSlotProps }) => [createVNode(unref(NavigationMenuLink_default), {
                                "as-child": "",
                                active: childActive,
                                onSelect: childItem.onSelect
                              }, {
                                default: withCtx(() => {
                                  var _a7, _b6;
                                  return [createVNode(_sfc_main$2$1, mergeProps({ ref_for: true }, childSlotProps, {
                                    "data-slot": "childLink",
                                    class: ui.value.childLink({
                                      class: [
                                        (_a7 = unref(props).ui) == null ? void 0 : _a7.childLink,
                                        (_b6 = item.ui) == null ? void 0 : _b6.childLink,
                                        childItem.class
                                      ],
                                      active: childActive
                                    })
                                  }), {
                                    default: withCtx(() => {
                                      var _a8, _b7, _c5, _d5, _e4, _f2;
                                      return [childItem.icon ? (openBlock(), createBlock(_sfc_main$5$1, {
                                        key: 0,
                                        name: childItem.icon,
                                        "data-slot": "childLinkIcon",
                                        class: ui.value.childLinkIcon({
                                          class: [(_a8 = unref(props).ui) == null ? void 0 : _a8.childLinkIcon, (_b7 = item.ui) == null ? void 0 : _b7.childLinkIcon],
                                          active: childActive
                                        })
                                      }, null, 8, ["name", "class"])) : createCommentVNode("", true), createVNode("span", {
                                        "data-slot": "childLinkLabel",
                                        class: ui.value.childLinkLabel({
                                          class: [(_c5 = unref(props).ui) == null ? void 0 : _c5.childLinkLabel, (_d5 = item.ui) == null ? void 0 : _d5.childLinkLabel],
                                          active: childActive
                                        })
                                      }, [createTextVNode(toDisplayString(unref(get)(childItem, unref(props).labelKey)) + " ", 1), childItem.target === "_blank" && unref(props).externalIcon !== false ? (openBlock(), createBlock(_sfc_main$5$1, {
                                        key: 0,
                                        name: typeof unref(props).externalIcon === "string" ? unref(props).externalIcon : unref(appConfig).ui.icons.external,
                                        "data-slot": "childLinkLabelExternalIcon",
                                        class: ui.value.childLinkLabelExternalIcon({
                                          class: [(_e4 = unref(props).ui) == null ? void 0 : _e4.childLinkLabelExternalIcon, (_f2 = item.ui) == null ? void 0 : _f2.childLinkLabelExternalIcon],
                                          active: childActive
                                        })
                                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)], 2)];
                                    }),
                                    _: 2
                                  }, 1040, ["class"])];
                                }),
                                _: 2
                              }, 1032, ["active", "onSelect"])]),
                              _: 2
                            }, 1040)], 2);
                          }), 128))], 2)];
                        })]),
                        default: withCtx(() => {
                          var _a5, _b4;
                          return [createVNode(_sfc_main$2$1, mergeProps(slotProps, {
                            "data-slot": "link",
                            class: ui.value.link({
                              class: [
                                (_a5 = unref(props).ui) == null ? void 0 : _a5.link,
                                (_b4 = item.ui) == null ? void 0 : _b4.link,
                                item.class
                              ],
                              active: active || item.active,
                              disabled: !!item.disabled,
                              level: level > 0
                            })
                          }), {
                            default: withCtx(() => [createVNode(unref(ReuseLinkTemplate), {
                              item,
                              active: active || item.active,
                              index,
                              "trailing-trigger": !!slotProps.href
                            }, null, 8, [
                              "item",
                              "active",
                              "index",
                              "trailing-trigger"
                            ])]),
                            _: 2
                          }, 1040, ["class"])];
                        }),
                        _: 2
                      }, 1040, ["ui"])) : unref(props).orientation === "vertical" && unref(props).collapsed && (!!unref(props).tooltip || !!item.tooltip) || unref(props).orientation === "horizontal" && !!item.tooltip ? (openBlock(), createBlock(_sfc_main$2, mergeProps({
                        key: 1,
                        text: unref(get)(item, unref(props).labelKey)
                      }, {
                        ...tooltipProps.value,
                        ...typeof item.tooltip === "boolean" ? {} : item.tooltip || {}
                      }), {
                        default: withCtx(() => {
                          var _a5, _b4;
                          return [createVNode(_sfc_main$2$1, mergeProps(slotProps, {
                            "data-slot": "link",
                            class: ui.value.link({
                              class: [
                                (_a5 = unref(props).ui) == null ? void 0 : _a5.link,
                                (_b4 = item.ui) == null ? void 0 : _b4.link,
                                item.class
                              ],
                              active: active || item.active,
                              disabled: !!item.disabled,
                              level: level > 0
                            }),
                            onClick: onLinkClick
                          }), {
                            default: withCtx(() => [createVNode(unref(ReuseLinkTemplate), {
                              item,
                              active: active || item.active,
                              index,
                              "trailing-trigger": !!slotProps.href
                            }, null, 8, [
                              "item",
                              "active",
                              "index",
                              "trailing-trigger"
                            ])]),
                            _: 2
                          }, 1040, ["class"])];
                        }),
                        _: 2
                      }, 1040, ["text"])) : (openBlock(), createBlock(_sfc_main$2$1, mergeProps({ key: 2 }, slotProps, {
                        "data-slot": "link",
                        class: ui.value.link({
                          class: [
                            (_d3 = unref(props).ui) == null ? void 0 : _d3.link,
                            (_e3 = item.ui) == null ? void 0 : _e3.link,
                            item.class
                          ],
                          active: active || item.active,
                          disabled: !!item.disabled,
                          level: unref(props).orientation === "horizontal" || level > 0
                        }),
                        onClick: onLinkClick
                      }), {
                        default: withCtx(() => [createVNode(unref(ReuseLinkTemplate), {
                          item,
                          active: active || item.active,
                          index,
                          "trailing-trigger": !!slotProps.href
                        }, null, 8, [
                          "item",
                          "active",
                          "index",
                          "trailing-trigger"
                        ])]),
                        _: 2
                      }, 1040, ["class"]))];
                    }),
                    _: 2
                  }, 1064, [
                    "active",
                    "disabled",
                    "onSelect"
                  ])), unref(props).orientation === "horizontal" && (((_c2 = item.children) == null ? void 0 : _c2.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? (openBlock(), createBlock(unref(NavigationMenuContent_default), mergeProps({ key: 0 }, contentProps.value, {
                    "data-slot": "content",
                    class: ui.value.content({ class: [(_d2 = unref(props).ui) == null ? void 0 : _d2.content, (_e2 = item.ui) == null ? void 0 : _e2.content] })
                  }), {
                    default: withCtx(() => [renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                      item,
                      active: active || item.active,
                      index,
                      ui: ui.value
                    }, () => {
                      var _a4, _b3;
                      return [createVNode("ul", {
                        "data-slot": "childList",
                        class: ui.value.childList({ class: [(_a4 = unref(props).ui) == null ? void 0 : _a4.childList, (_b3 = item.ui) == null ? void 0 : _b3.childList] })
                      }, [(openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                        var _a5, _b4;
                        return openBlock(), createBlock("li", {
                          key: childIndex,
                          "data-slot": "childItem",
                          class: ui.value.childItem({ class: [(_a5 = unref(props).ui) == null ? void 0 : _a5.childItem, (_b4 = item.ui) == null ? void 0 : _b4.childItem] })
                        }, [createVNode(_sfc_main$1$1, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                          default: withCtx(({ active: childActive, ...childSlotProps }) => [createVNode(unref(NavigationMenuLink_default), {
                            "as-child": "",
                            active: childActive,
                            onSelect: childItem.onSelect
                          }, {
                            default: withCtx(() => {
                              var _a6, _b5;
                              return [createVNode(_sfc_main$2$1, mergeProps({ ref_for: true }, childSlotProps, {
                                "data-slot": "childLink",
                                class: ui.value.childLink({
                                  class: [
                                    (_a6 = unref(props).ui) == null ? void 0 : _a6.childLink,
                                    (_b5 = item.ui) == null ? void 0 : _b5.childLink,
                                    childItem.class
                                  ],
                                  active: childActive
                                })
                              }), {
                                default: withCtx(() => {
                                  var _a7, _b6, _c3, _d3, _e3, _f2, _g, _h, _i, _j;
                                  return [childItem.icon ? (openBlock(), createBlock(_sfc_main$5$1, {
                                    key: 0,
                                    name: childItem.icon,
                                    "data-slot": "childLinkIcon",
                                    class: ui.value.childLinkIcon({
                                      class: [(_a7 = unref(props).ui) == null ? void 0 : _a7.childLinkIcon, (_b6 = item.ui) == null ? void 0 : _b6.childLinkIcon],
                                      active: childActive
                                    })
                                  }, null, 8, ["name", "class"])) : createCommentVNode("", true), createVNode("div", {
                                    "data-slot": "childLinkWrapper",
                                    class: ui.value.childLinkWrapper({ class: [(_c3 = unref(props).ui) == null ? void 0 : _c3.childLinkWrapper, (_d3 = item.ui) == null ? void 0 : _d3.childLinkWrapper] })
                                  }, [createVNode("p", {
                                    "data-slot": "childLinkLabel",
                                    class: ui.value.childLinkLabel({
                                      class: [(_e3 = unref(props).ui) == null ? void 0 : _e3.childLinkLabel, (_f2 = item.ui) == null ? void 0 : _f2.childLinkLabel],
                                      active: childActive
                                    })
                                  }, [createTextVNode(toDisplayString(unref(get)(childItem, unref(props).labelKey)) + " ", 1), childItem.target === "_blank" && unref(props).externalIcon !== false ? (openBlock(), createBlock(_sfc_main$5$1, {
                                    key: 0,
                                    name: typeof unref(props).externalIcon === "string" ? unref(props).externalIcon : unref(appConfig).ui.icons.external,
                                    "data-slot": "childLinkLabelExternalIcon",
                                    class: ui.value.childLinkLabelExternalIcon({
                                      class: [(_g = unref(props).ui) == null ? void 0 : _g.childLinkLabelExternalIcon, (_h = item.ui) == null ? void 0 : _h.childLinkLabelExternalIcon],
                                      active: childActive
                                    })
                                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)], 2), childItem.description ? (openBlock(), createBlock("p", {
                                    key: 0,
                                    "data-slot": "childLinkDescription",
                                    class: ui.value.childLinkDescription({
                                      class: [(_i = unref(props).ui) == null ? void 0 : _i.childLinkDescription, (_j = item.ui) == null ? void 0 : _j.childLinkDescription],
                                      active: childActive
                                    })
                                  }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)], 2)];
                                }),
                                _: 2
                              }, 1040, ["class"])];
                            }),
                            _: 2
                          }, 1032, ["active", "onSelect"])]),
                          _: 2
                        }, 1040)], 2);
                      }), 128))], 2)];
                    })]),
                    _: 2
                  }, 1040, ["class"])) : createCommentVNode("", true)];
                }),
                _: 2
              }, 1040)) : createCommentVNode("", true), unref(props).orientation === "vertical" && ((_d = item.children) == null ? void 0 : _d.length) && !unref(props).collapsed ? (openBlock(), createBlock(unref(AccordionContent_default), {
                key: 2,
                "data-slot": "content",
                class: ui.value.content({ class: [(_e = unref(props).ui) == null ? void 0 : _e.content, (_f = item.ui) == null ? void 0 : _f.content] })
              }, {
                default: withCtx(() => {
                  var _a3, _b2;
                  return [createVNode(unref(AccordionRoot_default), mergeProps({
                    ...unref(accordionProps),
                    defaultValue: getAccordionDefaultValue(item.children, level + 1, listIndex)
                  }, {
                    as: "ul",
                    "data-slot": "childList",
                    class: ui.value.childList({ class: [(_a3 = unref(props).ui) == null ? void 0 : _a3.childList, (_b2 = item.ui) == null ? void 0 : _b2.childList] })
                  }), {
                    default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                      var _a4, _b3;
                      return openBlock(), createBlock(unref(ReuseItemTemplate), {
                        key: childIndex,
                        item: childItem,
                        index: childIndex,
                        level: level + 1,
                        "list-index": listIndex,
                        "data-slot": "childItem",
                        class: ui.value.childItem({ class: [(_a4 = unref(props).ui) == null ? void 0 : _a4.childItem, (_b3 = childItem.ui) == null ? void 0 : _b3.childItem] })
                      }, null, 8, [
                        "item",
                        "index",
                        "level",
                        "list-index",
                        "class"
                      ]);
                    }), 128))]),
                    _: 2
                  }, 1040, ["class"])];
                }),
                _: 2
              }, 1032, ["class"])) : createCommentVNode("", true)];
            }),
            _: 2
          }, 1040, ["value"]))];
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(NavigationMenuRoot_default), mergeProps({ "data-slot": "root" }, {
        ...unref(rootProps),
        ...unref(props).orientation === "horizontal" ? {
          modelValue: unref(props).modelValue,
          defaultValue: unref(props).defaultValue
        } : {},
        ..._ctx.$attrs
      }, {
        "data-collapsed": unref(props).collapsed,
        class: ui.value.root({ class: [(_a = unref(props).ui) == null ? void 0 : _a.root, unref(props).class] })
      }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f;
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "list-leading", {}, null, _push2, _parent2, _scopeId);
            _push2(`<!--[-->`);
            ssrRenderList(lists.value, (list, listIndex) => {
              var _a3, _b2, _c2;
              _push2(`<!--[-->`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(props).orientation === "vertical" ? unref(AccordionRoot_default) : unref(NavigationMenuList_default)), mergeProps({ ref_for: true }, unref(props).orientation === "vertical" && !unref(props).collapsed ? {
                ...unref(accordionProps),
                modelValue: unref(props).modelValue,
                defaultValue: (_a3 = unref(props).defaultValue) != null ? _a3 : getAccordionDefaultValue(list, 0, listIndex)
              } : {}, {
                as: "ul",
                "data-slot": "list",
                class: ui.value.list({ class: (_b2 = unref(props).ui) == null ? void 0 : _b2.list })
              }), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(list, (item, index) => {
                      var _a4, _b3;
                      _push3(ssrRenderComponent(unref(ReuseItemTemplate), {
                        key: `list-${listIndex}-${index}`,
                        item,
                        index,
                        "list-index": listIndex,
                        "data-slot": "item",
                        class: ui.value.item({ class: [(_a4 = unref(props).ui) == null ? void 0 : _a4.item, (_b3 = item.ui) == null ? void 0 : _b3.item] })
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else return [(openBlock(true), createBlock(Fragment, null, renderList(list, (item, index) => {
                    var _a4, _b3;
                    return openBlock(), createBlock(unref(ReuseItemTemplate), {
                      key: `list-${listIndex}-${index}`,
                      item,
                      index,
                      "list-index": listIndex,
                      "data-slot": "item",
                      class: ui.value.item({ class: [(_a4 = unref(props).ui) == null ? void 0 : _a4.item, (_b3 = item.ui) == null ? void 0 : _b3.item] })
                    }, null, 8, [
                      "item",
                      "index",
                      "list-index",
                      "class"
                    ]);
                  }), 128))];
                }),
                _: 2
              }), _parent2, _scopeId);
              if (unref(props).orientation === "vertical" && listIndex < lists.value.length - 1) _push2(`<div data-slot="separator" class="${ssrRenderClass(ui.value.separator({ class: (_c2 = unref(props).ui) == null ? void 0 : _c2.separator }))}"${_scopeId}></div>`);
              else _push2(`<!---->`);
              _push2(`<!--]-->`);
            });
            _push2(`<!--]-->`);
            ssrRenderSlot(_ctx.$slots, "list-trailing", {}, null, _push2, _parent2, _scopeId);
            if (unref(props).orientation === "horizontal") {
              _push2(`<div data-slot="viewportWrapper" class="${ssrRenderClass(ui.value.viewportWrapper({ class: (_a2 = unref(props).ui) == null ? void 0 : _a2.viewportWrapper }))}"${_scopeId}>`);
              if (unref(props).arrow) _push2(ssrRenderComponent(unref(NavigationMenuIndicator_default), {
                "data-slot": "indicator",
                class: ui.value.indicator({ class: (_b = unref(props).ui) == null ? void 0 : _b.indicator })
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a3, _b2;
                  if (_push3) _push3(`<div data-slot="arrow" class="${ssrRenderClass(ui.value.arrow({ class: (_a3 = unref(props).ui) == null ? void 0 : _a3.arrow }))}"${_scopeId2}></div>`);
                  else return [createVNode("div", {
                    "data-slot": "arrow",
                    class: ui.value.arrow({ class: (_b2 = unref(props).ui) == null ? void 0 : _b2.arrow })
                  }, null, 2)];
                }),
                _: 1
              }, _parent2, _scopeId));
              else _push2(`<!---->`);
              _push2(ssrRenderComponent(unref(NavigationMenuViewport_default), mergeProps(viewportProps.value, {
                "data-slot": "viewport",
                class: ui.value.viewport({ class: (_c = unref(props).ui) == null ? void 0 : _c.viewport })
              }), null, _parent2, _scopeId));
              _push2(`</div>`);
            } else _push2(`<!---->`);
          } else return [
            renderSlot(_ctx.$slots, "list-leading"),
            (openBlock(true), createBlock(Fragment, null, renderList(lists.value, (list, listIndex) => {
              var _a3, _b2, _c2;
              return openBlock(), createBlock(Fragment, { key: `list-${listIndex}` }, [(openBlock(), createBlock(resolveDynamicComponent(unref(props).orientation === "vertical" ? unref(AccordionRoot_default) : unref(NavigationMenuList_default)), mergeProps({ ref_for: true }, unref(props).orientation === "vertical" && !unref(props).collapsed ? {
                ...unref(accordionProps),
                modelValue: unref(props).modelValue,
                defaultValue: (_a3 = unref(props).defaultValue) != null ? _a3 : getAccordionDefaultValue(list, 0, listIndex)
              } : {}, {
                as: "ul",
                "data-slot": "list",
                class: ui.value.list({ class: (_b2 = unref(props).ui) == null ? void 0 : _b2.list })
              }), {
                default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(list, (item, index) => {
                  var _a4, _b3;
                  return openBlock(), createBlock(unref(ReuseItemTemplate), {
                    key: `list-${listIndex}-${index}`,
                    item,
                    index,
                    "list-index": listIndex,
                    "data-slot": "item",
                    class: ui.value.item({ class: [(_a4 = unref(props).ui) == null ? void 0 : _a4.item, (_b3 = item.ui) == null ? void 0 : _b3.item] })
                  }, null, 8, [
                    "item",
                    "index",
                    "list-index",
                    "class"
                  ]);
                }), 128))]),
                _: 2
              }, 1040, ["class"])), unref(props).orientation === "vertical" && listIndex < lists.value.length - 1 ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "separator",
                class: ui.value.separator({ class: (_c2 = unref(props).ui) == null ? void 0 : _c2.separator })
              }, null, 2)) : createCommentVNode("", true)], 64);
            }), 128)),
            renderSlot(_ctx.$slots, "list-trailing"),
            unref(props).orientation === "horizontal" ? (openBlock(), createBlock("div", {
              key: 0,
              "data-slot": "viewportWrapper",
              class: ui.value.viewportWrapper({ class: (_d = unref(props).ui) == null ? void 0 : _d.viewportWrapper })
            }, [unref(props).arrow ? (openBlock(), createBlock(unref(NavigationMenuIndicator_default), {
              key: 0,
              "data-slot": "indicator",
              class: ui.value.indicator({ class: (_e = unref(props).ui) == null ? void 0 : _e.indicator })
            }, {
              default: withCtx(() => {
                var _a3;
                return [createVNode("div", {
                  "data-slot": "arrow",
                  class: ui.value.arrow({ class: (_a3 = unref(props).ui) == null ? void 0 : _a3.arrow })
                }, null, 2)];
              }),
              _: 1
            }, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(NavigationMenuViewport_default), mergeProps(viewportProps.value, {
              "data-slot": "viewport",
              class: ui.value.viewport({ class: (_f = unref(props).ui) == null ? void 0 : _f.viewport })
            }), null, 16, ["class"])], 2)) : createCommentVNode("", true)
          ];
        }),
        _: 3
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
var _sfc_setup$6 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/NavigationMenu.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var AppHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute$1();
    const scrolled = ref(false);
    const mobileOpen = ref(false);
    const items = computed(() => [
      {
        label: "LOCATIONS",
        to: "/locations",
        children: site.regions.map((r) => ({
          label: r.name,
          to: `/locations#${r.id}`
        }))
      },
      {
        label: "SERMONS",
        to: site.sermons.url,
        target: "_blank"
      },
      {
        label: "BELIEFS",
        to: "/beliefs"
      },
      {
        label: "LEADERSHIP",
        to: "/leadership"
      }
    ]);
    watch(() => route.fullPath, () => mobileOpen.value = false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UHeader = _sfc_main$5;
      const _component_NuxtLink = NuxtLink;
      const _component_UNavigationMenu = _sfc_main$1;
      const _component_UButton = _sfc_main$6;
      _push(ssrRenderComponent(_component_UHeader, mergeProps({
        class: ["fixed inset-x-0 top-0 z-50 transition-all duration-300", unref(scrolled) || unref(route).path !== "/" ? "bg-white/95 shadow-sm backdrop-blur" : "bg-transparent text-white"],
        toggle: { color: "neutral" }
      }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) _push2(ssrRenderComponent(_component_NuxtLink, {
            to: "/",
            class: "font-display text-lg font-extrabold tracking-tight sm:text-xl"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) _push3(`${ssrInterpolate(unref(site).name)}`);
              else return [createTextVNode(toDisplayString(unref(site).name), 1)];
            }),
            _: 1
          }, _parent2, _scopeId));
          else return [createVNode(_component_NuxtLink, {
            to: "/",
            class: "font-display text-lg font-extrabold tracking-tight sm:text-xl"
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(unref(site).name), 1)]),
            _: 1
          })];
        }),
        right: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              to: "/visit-church",
              label: "VISIT CHURCH",
              color: "primary",
              size: "sm",
              class: "hidden sm:inline-flex"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              icon: "i-lucide-menu",
              variant: "ghost",
              color: "neutral",
              "aria-label": "Open navigation menu",
              class: "md:hidden",
              onClick: ($event) => mobileOpen.value = !unref(mobileOpen)
            }, null, _parent2, _scopeId));
          } else return [createVNode(_component_UButton, {
            to: "/visit-church",
            label: "VISIT CHURCH",
            color: "primary",
            size: "sm",
            class: "hidden sm:inline-flex"
          }), createVNode(_component_UButton, {
            icon: "i-lucide-menu",
            variant: "ghost",
            color: "neutral",
            "aria-label": "Open navigation menu",
            class: "md:hidden",
            onClick: ($event) => mobileOpen.value = !unref(mobileOpen)
          }, null, 8, ["onClick"])];
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(mobileOpen)) {
              _push2(`<nav aria-label="Mobile navigation" class="fixed inset-x-0 top-[var(--ui-header-height)] min-h-[calc(100dvh-var(--ui-header-height))] bg-white px-6 py-8 text-slate-900 md:hidden"${_scopeId}><div class="mx-auto flex max-w-lg flex-col gap-2"${_scopeId}><details class="border-b border-slate-200 py-3"${_scopeId}><summary class="cursor-pointer font-bold"${_scopeId}>LOCATIONS</summary><!--[-->`);
              ssrRenderList(unref(site).regions, (region) => {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  key: region.id,
                  to: `/locations#${region.id}`,
                  class: "block py-3 pl-4 text-slate-600"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) _push3(`${ssrInterpolate(region.name)}`);
                    else return [createTextVNode(toDisplayString(region.name), 1)];
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></details><a${ssrRenderAttr("href", unref(site).sermons.url)} target="_blank" class="border-b border-slate-200 py-4 font-bold"${_scopeId}>SERMONS \u2197</a>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "/beliefs",
                class: "border-b border-slate-200 py-4 font-bold"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) _push3(`BELIEFS`);
                  else return [createTextVNode("BELIEFS")];
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "/leadership",
                class: "border-b border-slate-200 py-4 font-bold"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) _push3(`LEADERSHIP`);
                  else return [createTextVNode("LEADERSHIP")];
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                to: "/visit-church",
                label: "VISIT CHURCH",
                class: "mt-4 justify-center",
                size: "lg"
              }, null, _parent2, _scopeId));
              _push2(`</div></nav>`);
            } else _push2(`<!---->`);
          } else return [unref(mobileOpen) ? (openBlock(), createBlock("nav", {
            key: 0,
            "aria-label": "Mobile navigation",
            class: "fixed inset-x-0 top-[var(--ui-header-height)] min-h-[calc(100dvh-var(--ui-header-height))] bg-white px-6 py-8 text-slate-900 md:hidden"
          }, [createVNode("div", { class: "mx-auto flex max-w-lg flex-col gap-2" }, [
            createVNode("details", { class: "border-b border-slate-200 py-3" }, [createVNode("summary", { class: "cursor-pointer font-bold" }, "LOCATIONS"), (openBlock(true), createBlock(Fragment, null, renderList(unref(site).regions, (region) => {
              return openBlock(), createBlock(_component_NuxtLink, {
                key: region.id,
                to: `/locations#${region.id}`,
                class: "block py-3 pl-4 text-slate-600"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(region.name), 1)]),
                _: 2
              }, 1032, ["to"]);
            }), 128))]),
            createVNode("a", {
              href: unref(site).sermons.url,
              target: "_blank",
              class: "border-b border-slate-200 py-4 font-bold"
            }, "SERMONS \u2197", 8, ["href"]),
            createVNode(_component_NuxtLink, {
              to: "/beliefs",
              class: "border-b border-slate-200 py-4 font-bold"
            }, {
              default: withCtx(() => [createTextVNode("BELIEFS")]),
              _: 1
            }),
            createVNode(_component_NuxtLink, {
              to: "/leadership",
              class: "border-b border-slate-200 py-4 font-bold"
            }, {
              default: withCtx(() => [createTextVNode("LEADERSHIP")]),
              _: 1
            }),
            createVNode(_component_UButton, {
              to: "/visit-church",
              label: "VISIT CHURCH",
              class: "mt-4 justify-center",
              size: "lg"
            })
          ])])) : createCommentVNode("", true)];
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) _push2(ssrRenderComponent(_component_UNavigationMenu, {
            items: unref(items),
            class: "hidden md:flex"
          }, null, _parent2, _scopeId));
          else return [createVNode(_component_UNavigationMenu, {
            items: unref(items),
            class: "hidden md:flex"
          }, null, 8, ["items"])];
        }),
        _: 1
      }, _parent));
    };
  }
});
var _sfc_setup$5 = AppHeader_vue_vue_type_script_setup_true_lang_default.setup;
AppHeader_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var AppHeader_default = Object.assign(AppHeader_vue_vue_type_script_setup_true_lang_default, { __name: "AppHeader" });
var RegionsFooter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "RegionsFooter",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$7;
      const _component_UButton = _sfc_main$6;
      const _component_NuxtLink = NuxtLink;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-slate-950 py-16 text-white sm:py-20" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid gap-12 lg:grid-cols-[1.1fr_2fr]"${_scopeId}><div${_scopeId}><p class="mb-4 text-xs font-bold uppercase tracking-[.2em] text-brand-300"${_scopeId}>Get Involved</p><h2 class="font-display text-3xl font-bold sm:text-4xl"${_scopeId}>${ssrInterpolate(unref(site).name)}</h2><p class="mt-5 max-w-md leading-7 text-slate-300"${_scopeId}>${ssrInterpolate(unref(site).contact.mission)}</p><div class="mt-6 flex gap-2"${_scopeId}><!--[-->`);
            ssrRenderList(unref(site).socials, (social) => {
              _push2(ssrRenderComponent(_component_UButton, {
                key: social.label,
                to: social.url,
                target: "_blank",
                icon: social.icon,
                "aria-label": social.label,
                color: "neutral",
                variant: "ghost",
                class: "text-white"
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div><div class="grid grid-cols-2 gap-8 md:grid-cols-4"${_scopeId}><!--[-->`);
            ssrRenderList(unref(site).regions, (region) => {
              _push2(`<div${_scopeId}><h3 class="mb-4 text-xs font-bold uppercase tracking-[.16em] text-brand-300"${_scopeId}>${ssrInterpolate(region.name)}</h3><ul class="space-y-3 text-sm text-slate-300"${_scopeId}><!--[-->`);
              ssrRenderList(region.groups, (group) => {
                _push2(`<li${_scopeId}>`);
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: `/locations#${region.id}`,
                  class: "hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) _push3(`${ssrInterpolate(group)}`);
                    else return [createTextVNode(toDisplayString(group), 1)];
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</li>`);
              });
              _push2(`<!--]--></ul></div>`);
            });
            _push2(`<!--]--></div></div>`);
          } else return [createVNode("div", { class: "grid gap-12 lg:grid-cols-[1.1fr_2fr]" }, [createVNode("div", null, [
            createVNode("p", { class: "mb-4 text-xs font-bold uppercase tracking-[.2em] text-brand-300" }, "Get Involved"),
            createVNode("h2", { class: "font-display text-3xl font-bold sm:text-4xl" }, toDisplayString(unref(site).name), 1),
            createVNode("p", { class: "mt-5 max-w-md leading-7 text-slate-300" }, toDisplayString(unref(site).contact.mission), 1),
            createVNode("div", { class: "mt-6 flex gap-2" }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(site).socials, (social) => {
              return openBlock(), createBlock(_component_UButton, {
                key: social.label,
                to: social.url,
                target: "_blank",
                icon: social.icon,
                "aria-label": social.label,
                color: "neutral",
                variant: "ghost",
                class: "text-white"
              }, null, 8, [
                "to",
                "icon",
                "aria-label"
              ]);
            }), 128))])
          ]), createVNode("div", { class: "grid grid-cols-2 gap-8 md:grid-cols-4" }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(site).regions, (region) => {
            return openBlock(), createBlock("div", { key: region.id }, [createVNode("h3", { class: "mb-4 text-xs font-bold uppercase tracking-[.16em] text-brand-300" }, toDisplayString(region.name), 1), createVNode("ul", { class: "space-y-3 text-sm text-slate-300" }, [(openBlock(true), createBlock(Fragment, null, renderList(region.groups, (group) => {
              return openBlock(), createBlock("li", { key: group }, [createVNode(_component_NuxtLink, {
                to: `/locations#${region.id}`,
                class: "hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(group), 1)]),
                _: 2
              }, 1032, ["to"])]);
            }), 128))])]);
          }), 128))])])];
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
var _sfc_setup$4 = RegionsFooter_vue_vue_type_script_setup_true_lang_default.setup;
RegionsFooter_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RegionsFooter.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var RegionsFooter_default = Object.assign(RegionsFooter_vue_vue_type_script_setup_true_lang_default, { __name: "RegionsFooter" });
var SiteFooter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "SiteFooter",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RegionsFooter = RegionsFooter_default;
      const _component_UContainer = _sfc_main$7;
      const _component_NuxtLink = NuxtLink;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-slate-950 text-slate-400" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_RegionsFooter, null, null, _parent));
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col justify-between gap-3 border-t border-white/10 py-6 text-xs sm:flex-row"${_scopeId}><p${_scopeId}>\xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} ${ssrInterpolate(unref(site).name)} \xB7 ${ssrInterpolate(unref(site).contact.affiliation)}</p>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/visit-church",
              class: "hover:text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) _push3(`Plan a visit`);
                else return [createTextVNode("Plan a visit")];
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else return [createVNode("div", { class: "flex flex-col justify-between gap-3 border-t border-white/10 py-6 text-xs sm:flex-row" }, [createVNode("p", null, "\xA9 " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " " + toDisplayString(unref(site).name) + " \xB7 " + toDisplayString(unref(site).contact.affiliation), 1), createVNode(_component_NuxtLink, {
            to: "/visit-church",
            class: "hover:text-white"
          }, {
            default: withCtx(() => [createTextVNode("Plan a visit")]),
            _: 1
          })])];
        }),
        _: 1
      }, _parent));
      _push(`</footer>`);
    };
  }
});
var _sfc_setup$3 = SiteFooter_vue_vue_type_script_setup_true_lang_default.setup;
SiteFooter_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SiteFooter.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var SiteFooter_default = Object.assign(SiteFooter_vue_vue_type_script_setup_true_lang_default, { __name: "SiteFooter" });
function useScrollTop() {
  return { visible: ref(false) };
}
var ScrollTop_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "ScrollTop",
  __ssrInlineRender: true,
  setup(__props) {
    const { visible } = useScrollTop();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$6;
      if (unref(visible)) _push(ssrRenderComponent(_component_UButton, mergeProps({
        to: "#top",
        icon: "i-lucide-arrow-up",
        "aria-label": "Back to top",
        color: "primary",
        class: "fixed bottom-5 right-5 z-40 rounded-full shadow-lg"
      }, _attrs), null, _parent));
      else _push(`<!---->`);
    };
  }
});
var _sfc_setup$2 = ScrollTop_vue_vue_type_script_setup_true_lang_default.setup;
ScrollTop_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ScrollTop.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var ScrollTop_default = Object.assign(ScrollTop_vue_vue_type_script_setup_true_lang_default, { __name: "ScrollTop" });
function useVisitPopup() {
  const open = ref(false);
  const close = () => {
    open.value = false;
    try {
      sessionStorage.setItem("church-visit-seen", "1");
    } catch {
    }
  };
  return {
    open,
    close
  };
}
var VisitPopup_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "VisitPopup",
  __ssrInlineRender: true,
  setup(__props) {
    const { open, close } = useVisitPopup();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = _sfc_main$8;
      const _component_UButton = _sfc_main$6;
      _push(ssrRenderComponent(_component_UModal, mergeProps({
        open: unref(open),
        "onUpdate:open": ($event) => isRef(open) ? open.value = $event : null,
        title: "VISIT US",
        description: unref(site).contact.serviceTime
      }, _attrs), {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-5"${_scopeId}><div${_scopeId}><p class="font-display text-2xl font-bold"${_scopeId}>${ssrInterpolate(unref(site).contact.venue)}</p><p class="mt-1 text-slate-600"${_scopeId}>${ssrInterpolate(unref(site).contact.address)}</p>`);
            _push2(ssrRenderComponent(_component_UButton, {
              to: unref(site).contact.mapUrl,
              target: "_blank",
              label: "Google Maps \u2192",
              variant: "link",
              class: "px-0"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><p class="text-sm font-semibold text-slate-500"${_scopeId}>Call or Text</p><a${ssrRenderAttr("href", `tel:${unref(site).contact.phone}`)} class="font-semibold text-primary"${_scopeId}>${ssrInterpolate(unref(site).contact.phone)}</a></div><div class="flex gap-2"${_scopeId}><!--[-->`);
            ssrRenderList(unref(site).socials, (social) => {
              _push2(ssrRenderComponent(_component_UButton, {
                key: social.label,
                to: social.url,
                target: "_blank",
                icon: social.icon,
                "aria-label": social.label,
                color: "neutral",
                variant: "ghost"
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div>`);
          } else return [createVNode("div", { class: "space-y-5" }, [
            createVNode("div", null, [
              createVNode("p", { class: "font-display text-2xl font-bold" }, toDisplayString(unref(site).contact.venue), 1),
              createVNode("p", { class: "mt-1 text-slate-600" }, toDisplayString(unref(site).contact.address), 1),
              createVNode(_component_UButton, {
                to: unref(site).contact.mapUrl,
                target: "_blank",
                label: "Google Maps \u2192",
                variant: "link",
                class: "px-0"
              }, null, 8, ["to"])
            ]),
            createVNode("div", null, [createVNode("p", { class: "text-sm font-semibold text-slate-500" }, "Call or Text"), createVNode("a", {
              href: `tel:${unref(site).contact.phone}`,
              class: "font-semibold text-primary"
            }, toDisplayString(unref(site).contact.phone), 9, ["href"])]),
            createVNode("div", { class: "flex gap-2" }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(site).socials, (social) => {
              return openBlock(), createBlock(_component_UButton, {
                key: social.label,
                to: social.url,
                target: "_blank",
                icon: social.icon,
                "aria-label": social.label,
                color: "neutral",
                variant: "ghost"
              }, null, 8, [
                "to",
                "icon",
                "aria-label"
              ]);
            }), 128))])
          ])];
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              label: "Plan your visit",
              to: "/visit-church",
              onClick: unref(close)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              label: "Close",
              variant: "ghost",
              color: "neutral",
              onClick: unref(close)
            }, null, _parent2, _scopeId));
          } else return [createVNode(_component_UButton, {
            label: "Plan your visit",
            to: "/visit-church",
            onClick: unref(close)
          }, null, 8, ["onClick"]), createVNode(_component_UButton, {
            label: "Close",
            variant: "ghost",
            color: "neutral",
            onClick: unref(close)
          }, null, 8, ["onClick"])];
        }),
        _: 1
      }, _parent));
    };
  }
});
var _sfc_setup$1 = VisitPopup_vue_vue_type_script_setup_true_lang_default.setup;
VisitPopup_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VisitPopup.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var VisitPopup_default = Object.assign(VisitPopup_vue_vue_type_script_setup_true_lang_default, { __name: "VisitPopup" });
var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppHeader = AppHeader_default;
  const _component_SiteFooter = SiteFooter_default;
  const _component_ScrollTop = ScrollTop_default;
  const _component_VisitPopup = VisitPopup_default;
  _push(`<!--[--><a href="#main-content" class="sr-only z-[100] focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-slate-900">Skip to content</a>`);
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  _push(`<main id="main-content">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_SiteFooter, null, null, _parent));
  _push(ssrRenderComponent(_component_ScrollTop, null, null, _parent));
  _push(ssrRenderComponent(_component_VisitPopup, null, null, _parent));
  _push(`<!--]-->`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var default_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { default_default as default };
//# sourceMappingURL=default-Clj2r-2v.mjs.map
