import { a as useComponentProps, f as useLocale, b as useAppConfig, c as useForwardProps, t as tv, d as useForwardExpose, i as injectToastProviderContext, P as Primitive, h as useCollection, j as getAnnounceTextContent, V as VIEWPORT_PAUSE, k as VIEWPORT_RESUME, l as isDeltaInDirection, m as handleAndDispatchCustomEvent, n as createContext, o as getActiveElement, p as VisuallyHidden_default } from '../virtual/entry.mjs';
import { i as isNullish } from './nullish-Dvpx-avd.mjs';
import { P as Presence_default } from './Presence-wbRA2BG8.mjs';
import { c as _sfc_main$3, a as _sfc_main$5, _ as _sfc_main$2 } from './Button-Cwxo7d33.mjs';
import { useSlots, computed, useTemplateRef, ref, unref, mergeProps, withCtx, createVNode, resolveDynamicComponent, renderSlot, openBlock, createBlock, Fragment, createTextVNode, toDisplayString, withModifiers, createCommentVNode, renderList, defineComponent, watch, normalizeProps, shallowRef, reactive, watchEffect, toRef, createElementBlock, Teleport, nextTick, onScopeDispose, useSSRContext } from 'file:///Users/ccci/Project/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrRenderVNode, ssrInterpolate, ssrRenderList, ssrRenderStyle } from 'file:///Users/ccci/Project/node_modules/vue/server-renderer/index.mjs';
import { reactivePick, useVModel, useRafFn, useResizeObserver, onKeyStroke } from 'file:///Users/ccci/Project/node_modules/@vueuse/core/dist/index.js';
import { isClient, useTimeout } from 'file:///Users/ccci/Project/node_modules/@vueuse/shared/dist/index.js';
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
import './components-DxzSx7d2.mjs';
import 'file:///Users/ccci/Project/node_modules/@iconify/utils/lib/css/icon.js';
import './nuxt-link-C7rfVfaB.mjs';
import 'file:///Users/ccci/Project/node_modules/ohash/dist/utils/index.mjs';

var DEFAULT_MAX = 100;
var [injectProgressRootContext, provideProgressRootContext] = /* @__PURE__ */ createContext("ProgressRoot");
var isNumber = (v) => typeof v === "number";
function validateValue(value, max) {
  if (isNullish(value) || isNumber(value) && !Number.isNaN(value) && value <= max && value >= 0) return value;
  console.error(`Invalid prop \`value\` of value \`${value}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${DEFAULT_MAX} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`);
  return null;
}
function validateMax(max) {
  if (isNumber(max) && !Number.isNaN(max) && max > 0) return max;
  console.error(`Invalid prop \`max\` of value \`${max}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${DEFAULT_MAX}\`.`);
  return DEFAULT_MAX;
}
var ProgressRoot_default = /* @__PURE__ */ defineComponent({
  __name: "ProgressRoot",
  props: {
    modelValue: {
      type: [Number, null],
      required: false
    },
    max: {
      type: Number,
      required: false,
      default: DEFAULT_MAX
    },
    getValueLabel: {
      type: Function,
      required: false,
      default: (value, max) => isNumber(value) ? `${Math.round(value / max * DEFAULT_MAX)}%` : void 0
    },
    getValueText: {
      type: Function,
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
  emits: ["update:modelValue", "update:max"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    useForwardExpose();
    const modelValue = useVModel(props, "modelValue", emit, { passive: props.modelValue === void 0 });
    const max = useVModel(props, "max", emit, { passive: props.max === void 0 });
    watch(() => modelValue.value, async (value) => {
      const correctedValue = validateValue(value, props.max);
      if (correctedValue !== value) {
        await nextTick();
        modelValue.value = correctedValue;
      }
    }, { immediate: true });
    watch(() => props.max, (newMax) => {
      const correctedMax = validateMax(props.max);
      if (correctedMax !== newMax) max.value = correctedMax;
    }, { immediate: true });
    const progressState = computed(() => {
      if (isNullish(modelValue.value)) return "indeterminate";
      if (modelValue.value === max.value) return "complete";
      return "loading";
    });
    provideProgressRootContext({
      modelValue,
      max,
      progressState
    });
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createBlock(unref(Primitive), {
        "as-child": __props.asChild,
        as: __props.as,
        "aria-valuemax": unref(max),
        "aria-valuemin": 0,
        "aria-valuenow": isNumber(unref(modelValue)) ? unref(modelValue) : void 0,
        "aria-valuetext": (_a = __props.getValueText) == null ? void 0 : _a.call(__props, unref(modelValue), unref(max)),
        "aria-label": __props.getValueLabel(unref(modelValue), unref(max)),
        role: "progressbar",
        "data-state": progressState.value,
        "data-value": (_b = unref(modelValue)) != null ? _b : void 0,
        "data-max": unref(max)
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", { modelValue: unref(modelValue) })]),
        _: 3
      }, 8, [
        "as-child",
        "as",
        "aria-valuemax",
        "aria-valuenow",
        "aria-valuetext",
        "aria-label",
        "data-state",
        "data-value",
        "data-max"
      ]);
    };
  }
});
var ProgressIndicator_default = /* @__PURE__ */ defineComponent({
  __name: "ProgressIndicator",
  props: {
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
    const rootContext = injectProgressRootContext();
    useForwardExpose();
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
        "data-state": unref(rootContext).progressState.value,
        "data-value": (_b = (_a = unref(rootContext).modelValue) == null ? void 0 : _a.value) != null ? _b : void 0,
        "data-max": unref(rootContext).max.value
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, [
        "data-state",
        "data-value",
        "data-max"
      ]);
    };
  }
});
var ToastAnnounceExclude_default = /* @__PURE__ */ defineComponent({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {
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
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        as: __props.as,
        "as-child": __props.asChild,
        "data-reka-toast-announce-exclude": "",
        "data-reka-toast-announce-alt": __props.altText || void 0
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "data-reka-toast-announce-alt"
      ]);
    };
  }
});
var ToastAnnounce_default = /* @__PURE__ */ defineComponent({
  __name: "ToastAnnounce",
  setup(__props) {
    const providerContext = injectToastProviderContext();
    const isAnnounced = useTimeout(1e3);
    const renderAnnounceText = ref(false);
    let raf1 = 0;
    let raf2 = 0;
    if (isClient) {
      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => {
          renderAnnounceText.value = true;
        });
      });
      onScopeDispose(() => {
        cancelAnimationFrame(raf1);
        cancelAnimationFrame(raf2);
      });
    }
    return (_ctx, _cache) => {
      return unref(isAnnounced) || renderAnnounceText.value ? (openBlock(), createBlock(unref(VisuallyHidden_default), {
        key: 0,
        feature: "fully-hidden"
      }, {
        default: withCtx(() => [createTextVNode(toDisplayString(unref(providerContext).label.value) + " ", 1), renderSlot(_ctx.$slots, "default")]),
        _: 3
      })) : createCommentVNode("v-if", true);
    };
  }
});
var [injectToastPositionerContext] = /* @__PURE__ */ createContext("ToastPositioner");
var [injectToastRootContext, provideToastRootContext] = /* @__PURE__ */ createContext("ToastRoot");
var ToastRootImpl_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "ToastRootImpl",
  props: {
    type: {
      type: String,
      required: false
    },
    open: {
      type: Boolean,
      required: false,
      default: false
    },
    duration: {
      type: Number,
      required: false
    },
    toast: {
      type: Object,
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
  emits: [
    "close",
    "escapeKeyDown",
    "pause",
    "resume",
    "swipeStart",
    "swipeMove",
    "swipeCancel",
    "swipeEnd"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { forwardRef, currentElement } = useForwardExpose();
    const { CollectionItem } = useCollection();
    const providerContext = injectToastProviderContext();
    const pointerStartRef = ref(null);
    const swipeDeltaRef = ref(null);
    const duration = computed(() => typeof props.duration === "number" ? props.duration : providerContext.duration.value);
    const closeTimerStartTimeRef = ref(0);
    const closeTimerRemainingTimeRef = ref(duration.value);
    const closeTimerRef = ref(0);
    const remainingTime = ref(duration.value);
    const remainingRaf = useRafFn(() => {
      const elapsedTime = Date.now() - closeTimerStartTimeRef.value;
      remainingTime.value = Math.max(closeTimerRemainingTimeRef.value - elapsedTime, 0);
    }, { fpsLimit: 60 });
    function startTimer(duration$1) {
      if (duration$1 <= 0 || duration$1 === Number.POSITIVE_INFINITY) return;
      if (!isClient) return;
      (void 0).clearTimeout(closeTimerRef.value);
      closeTimerStartTimeRef.value = Date.now();
      closeTimerRef.value = (void 0).setTimeout(handleClose, duration$1);
    }
    function handleClose(event) {
      var _a, _b;
      const isNonPointerEvent = (event == null ? void 0 : event.pointerType) === "";
      if (((_a = currentElement.value) == null ? void 0 : _a.contains(getActiveElement())) && isNonPointerEvent) (_b = providerContext.viewport.value) == null ? void 0 : _b.focus();
      if (isNonPointerEvent) providerContext.isClosePausedRef.value = false;
      emits("close");
    }
    const positionerContext = injectToastPositionerContext(null);
    const announceTextContent = shallowRef(null);
    watch([currentElement, () => {
      var _a;
      return (_a = props.toast) == null ? void 0 : _a.updateKey;
    }], ([element]) => {
      announceTextContent.value = element ? getAnnounceTextContent(element) : null;
    }, {
      flush: "post",
      immediate: true
    });
    const stackEntry = /* @__PURE__ */ reactive({
      seq: 0,
      height: 0,
      open: props.open
    });
    const stack = computed(() => providerContext.getToastStack(stackEntry));
    function measureHeight() {
      const element = currentElement.value;
      if (!element) return;
      const previousHeight = element.style.height;
      element.style.height = "auto";
      stackEntry.height = element.offsetHeight;
      element.style.height = previousHeight;
    }
    useResizeObserver(currentElement, measureHeight);
    watch(() => {
      var _a;
      return (_a = props.toast) == null ? void 0 : _a.updateKey;
    }, measureHeight, { flush: "post" });
    watch(() => props.open, (open, wasOpen) => {
      stackEntry.open = open;
      if (open && !wasOpen) providerContext.reopenToast(stackEntry);
    });
    if (props.type && !["foreground", "background"].includes(props.type)) throw new Error("Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.");
    watchEffect((cleanupFn) => {
      const viewport = providerContext.viewport.value;
      if (viewport) {
        const handleResume = () => {
          startTimer(closeTimerRemainingTimeRef.value);
          remainingRaf.resume();
          emits("resume");
        };
        const handlePause = () => {
          const elapsedTime = Date.now() - closeTimerStartTimeRef.value;
          closeTimerRemainingTimeRef.value = closeTimerRemainingTimeRef.value - elapsedTime;
          (void 0).clearTimeout(closeTimerRef.value);
          remainingRaf.pause();
          emits("pause");
        };
        viewport.addEventListener(VIEWPORT_PAUSE, handlePause);
        viewport.addEventListener(VIEWPORT_RESUME, handleResume);
        cleanupFn(() => {
          viewport.removeEventListener(VIEWPORT_PAUSE, handlePause);
          viewport.removeEventListener(VIEWPORT_RESUME, handleResume);
        });
      }
    });
    const restartKey = computed(() => props.toast ? providerContext.toastStore.getRestartKey(props.toast.id) : 0);
    watch([
      () => props.open,
      duration,
      restartKey
    ], () => {
      closeTimerRemainingTimeRef.value = duration.value;
      if (props.open && !providerContext.isClosePausedRef.value) startTimer(duration.value);
    }, { immediate: true });
    onKeyStroke("Escape", (event) => {
      emits("escapeKeyDown", event);
      if (!event.defaultPrevented) {
        providerContext.isFocusedToastEscapeKeyDownRef.value = true;
        handleClose();
      }
    });
    provideToastRootContext({
      onClose: handleClose,
      toast: toRef(props, "toast")
    });
    return (_ctx, _cache) => {
      var _a, _b, _c;
      return openBlock(), createElementBlock(Fragment, null, [announceTextContent.value ? (openBlock(), createBlock(ToastAnnounce_default, {
        key: (_b = (_a = __props.toast) == null ? void 0 : _a.updateKey) != null ? _b : 0,
        role: "alert",
        "aria-live": __props.type === "foreground" ? "assertive" : "polite"
      }, {
        default: withCtx(() => [createCommentVNode("\n      Render each chunk as its own text node so screen readers get the\n      natural pause break between nodes (see comment in utils.ts).\n      Interpolating the array directly with `{{ announceTextContent }}`\n      would route through Vue's `toDisplayString`, which JSON-stringifies\n      arrays \u2014 the live region would then announce literal `[`, quotes\n      and commas instead of the toast title and description.\n    "), (openBlock(true), createElementBlock(Fragment, null, renderList(announceTextContent.value, (text, i) => {
          return openBlock(), createElementBlock(Fragment, { key: i }, [createTextVNode(toDisplayString(text), 1)], 64);
        }), 128))]),
        _: 1
      }, 8, ["aria-live"])) : createCommentVNode("v-if", true), unref(providerContext).viewport.value || unref(positionerContext) ? (openBlock(), createBlock(Teleport, {
        key: 1,
        to: (_c = unref(providerContext).viewport.value) != null ? _c : "body",
        disabled: !!unref(positionerContext)
      }, [createVNode(unref(CollectionItem), null, {
        default: withCtx(() => {
          var _a2;
          return [createVNode(unref(Primitive), mergeProps({
            ref: unref(forwardRef),
            tabindex: "0"
          }, _ctx.$attrs, {
            as: __props.as,
            "as-child": __props.asChild,
            "data-state": __props.open ? "open" : "closed",
            "data-swipe-direction": unref(providerContext).swipeDirection.value,
            "data-status": (_a2 = __props.toast) == null ? void 0 : _a2.status,
            "data-expanded": unref(providerContext).expanded.value ? "" : void 0,
            "data-limited": stack.value.limited ? "" : void 0,
            inert: stack.value.limited || void 0,
            style: {
              ...unref(providerContext).disableSwipe.value ? void 0 : {
                userSelect: "none",
                touchAction: "none"
              },
              "--reka-toast-index": stack.value.index,
              "--reka-toast-offset-y": `${stack.value.offsetY}px`,
              "--reka-toast-height": stackEntry.height ? `${stackEntry.height}px` : void 0
            },
            onPointerdown: _cache[0] || (_cache[0] = withModifiers((event) => {
              if (unref(providerContext).disableSwipe.value) return;
              pointerStartRef.value = {
                x: event.clientX,
                y: event.clientY
              };
            }, ["left"])),
            onPointermove: _cache[1] || (_cache[1] = (event) => {
              if (unref(providerContext).disableSwipe.value || !pointerStartRef.value) return;
              const x = event.clientX - pointerStartRef.value.x;
              const y = event.clientY - pointerStartRef.value.y;
              const hasSwipeMoveStarted = Boolean(swipeDeltaRef.value);
              const isHorizontalSwipe = ["left", "right"].includes(unref(providerContext).swipeDirection.value);
              const clamp = ["left", "up"].includes(unref(providerContext).swipeDirection.value) ? Math.min : Math.max;
              const clampedX = isHorizontalSwipe ? clamp(0, x) : 0;
              const clampedY = !isHorizontalSwipe ? clamp(0, y) : 0;
              const moveStartBuffer = event.pointerType === "touch" ? 10 : 2;
              const delta = {
                x: clampedX,
                y: clampedY
              };
              const eventDetail = {
                originalEvent: event,
                delta
              };
              if (hasSwipeMoveStarted) {
                swipeDeltaRef.value = delta;
                unref(handleAndDispatchCustomEvent)(unref("toast.swipeMove"), (ev) => emits("swipeMove", ev), eventDetail);
              } else if (unref(isDeltaInDirection)(delta, unref(providerContext).swipeDirection.value, moveStartBuffer)) {
                swipeDeltaRef.value = delta;
                unref(handleAndDispatchCustomEvent)(unref("toast.swipeStart"), (ev) => emits("swipeStart", ev), eventDetail);
                event.target.setPointerCapture(event.pointerId);
              } else if (Math.abs(x) > moveStartBuffer || Math.abs(y) > moveStartBuffer) pointerStartRef.value = null;
            }),
            onPointerup: _cache[2] || (_cache[2] = (event) => {
              if (unref(providerContext).disableSwipe.value) return;
              const delta = swipeDeltaRef.value;
              const target = event.target;
              if (target.hasPointerCapture(event.pointerId)) target.releasePointerCapture(event.pointerId);
              swipeDeltaRef.value = null;
              pointerStartRef.value = null;
              if (delta) {
                const toast = event.currentTarget;
                const eventDetail = {
                  originalEvent: event,
                  delta
                };
                if (unref(isDeltaInDirection)(delta, unref(providerContext).swipeDirection.value, unref(providerContext).swipeThreshold.value)) unref(handleAndDispatchCustomEvent)(unref("toast.swipeEnd"), (ev) => emits("swipeEnd", ev), eventDetail);
                else unref(handleAndDispatchCustomEvent)(unref("toast.swipeCancel"), (ev) => emits("swipeCancel", ev), eventDetail);
                toast == null ? void 0 : toast.addEventListener("click", (event$1) => event$1.preventDefault(), { once: true });
              }
            })
          }), {
            default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
              remaining: remainingTime.value,
              duration: duration.value
            })]),
            _: 3
          }, 16, [
            "as",
            "as-child",
            "data-state",
            "data-swipe-direction",
            "data-status",
            "data-expanded",
            "data-limited",
            "inert",
            "style"
          ])];
        }),
        _: 3
      })], 8, ["to", "disabled"])) : createCommentVNode("v-if", true)], 64);
    };
  }
});
var ToastAction_default = /* @__PURE__ */ defineComponent({
  __name: "ToastAction",
  props: {
    altText: {
      type: String,
      required: false
    },
    closeOnClick: {
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
      default: "button"
    }
  },
  setup(__props) {
    const props = __props;
    const rootContext = injectToastRootContext();
    const { forwardRef } = useForwardExpose();
    const slots = useSlots();
    const actionProps = computed(() => {
      var _a;
      return (_a = rootContext.toast.value) == null ? void 0 : _a.actionProps;
    });
    const isRendered = computed(() => !!slots.default || !rootContext.toast.value || !!actionProps.value);
    const altText = computed(() => {
      var _a, _b;
      return (_b = props.altText) != null ? _b : (_a = actionProps.value) == null ? void 0 : _a.altText;
    });
    if (isRendered.value && !altText.value) throw new Error("Missing prop `altText` expected on `ToastAction`");
    function handleClick(event) {
      var _a, _b, _c, _d;
      (_b = (_a = actionProps.value) == null ? void 0 : _a.onClick) == null ? void 0 : _b.call(_a, event);
      if ((_d = (_c = actionProps.value) == null ? void 0 : _c.closeOnClick) != null ? _d : props.closeOnClick) rootContext.onClose(event);
    }
    return (_ctx, _cache) => {
      return isRendered.value && altText.value ? (openBlock(), createBlock(ToastAnnounceExclude_default, {
        key: 0,
        "alt-text": altText.value,
        "as-child": ""
      }, {
        default: withCtx(() => [createVNode(unref(Primitive), {
          ref: unref(forwardRef),
          as: __props.as,
          "as-child": __props.asChild,
          type: __props.as === "button" ? "button" : void 0,
          onClick: handleClick
        }, {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => {
            var _a;
            return [createTextVNode(toDisplayString((_a = actionProps.value) == null ? void 0 : _a.label), 1)];
          })]),
          _: 3
        }, 8, [
          "as",
          "as-child",
          "type"
        ])]),
        _: 3
      }, 8, ["alt-text"])) : createCommentVNode("v-if", true);
    };
  }
});
var ToastClose_default = /* @__PURE__ */ defineComponent({
  __name: "ToastClose",
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
    const rootContext = injectToastRootContext();
    const { forwardRef } = useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(ToastAnnounceExclude_default, { "as-child": "" }, {
        default: withCtx(() => [createVNode(unref(Primitive), mergeProps(props, {
          ref: unref(forwardRef),
          type: __props.as === "button" ? "button" : void 0,
          onClick: unref(rootContext).onClose
        }), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16, ["type", "onClick"])]),
        _: 3
      });
    };
  }
});
var ToastDescription_default = /* @__PURE__ */ defineComponent({
  __name: "ToastDescription",
  props: {
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
    const rootContext = injectToastRootContext(null);
    return (_ctx, _cache) => {
      var _a;
      return _ctx.$slots.default || !((_a = unref(rootContext)) == null ? void 0 : _a.toast.value) || unref(rootContext).toast.value.description ? (openBlock(), createBlock(unref(Primitive), normalizeProps(mergeProps({ key: 0 }, props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => {
          var _a2, _b;
          return [createTextVNode(toDisplayString((_b = (_a2 = unref(rootContext)) == null ? void 0 : _a2.toast.value) == null ? void 0 : _b.description), 1)];
        })]),
        _: 3
      }, 16)) : createCommentVNode("v-if", true);
    };
  }
});
var ToastRoot_default = /* @__PURE__ */ defineComponent({
  __name: "ToastRoot",
  props: {
    defaultOpen: {
      type: Boolean,
      required: false,
      default: true
    },
    forceMount: {
      type: Boolean,
      required: false
    },
    type: {
      type: String,
      required: false,
      default: "foreground"
    },
    open: {
      type: Boolean,
      required: false,
      default: void 0
    },
    duration: {
      type: Number,
      required: false
    },
    toast: {
      type: Object,
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
  emits: [
    "escapeKeyDown",
    "pause",
    "resume",
    "swipeStart",
    "swipeMove",
    "swipeCancel",
    "swipeEnd",
    "update:open"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { forwardRef } = useForwardExpose();
    const open = useVModel(props, "open", emits, {
      defaultValue: props.defaultOpen,
      passive: props.open === void 0
    });
    const providerContext = injectToastProviderContext();
    const isOpen = computed(() => props.toast ? props.toast.open : open.value);
    const resolvedType = computed(() => {
      var _a, _b;
      return (_b = (_a = props.toast) == null ? void 0 : _a.type) != null ? _b : props.type;
    });
    const resolvedDuration = computed(() => {
      var _a, _b, _c;
      return ((_a = props.toast) == null ? void 0 : _a.status) === "loading" ? Number.POSITIVE_INFINITY : (_c = (_b = props.toast) == null ? void 0 : _b.duration) != null ? _c : props.duration;
    });
    function close() {
      if (props.toast) {
        providerContext.toastStore.close(props.toast.id);
        emits("update:open", false);
      } else open.value = false;
    }
    const isContentMounted = ref(false);
    watch([() => props.toast, isContentMounted], ([toast, mounted]) => {
      if (toast && !toast.open && !mounted) providerContext.toastStore.remove(toast.id);
    }, { immediate: true });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Presence_default), { present: __props.forceMount || isOpen.value }, {
        default: withCtx(() => [createVNode(ToastRootImpl_default, mergeProps({
          ref: unref(forwardRef),
          open: isOpen.value,
          type: resolvedType.value,
          as: __props.as,
          "as-child": __props.asChild,
          duration: resolvedDuration.value,
          toast: __props.toast
        }, _ctx.$attrs, {
          onVnodeMounted: _cache[0] || (_cache[0] = ($event) => isContentMounted.value = true),
          onVnodeUnmounted: _cache[1] || (_cache[1] = ($event) => isContentMounted.value = false),
          onClose: close,
          onPause: _cache[2] || (_cache[2] = ($event) => emits("pause")),
          onResume: _cache[3] || (_cache[3] = ($event) => emits("resume")),
          onEscapeKeyDown: _cache[4] || (_cache[4] = ($event) => emits("escapeKeyDown", $event)),
          onSwipeStart: _cache[5] || (_cache[5] = (event) => {
            emits("swipeStart", event);
            if (!event.defaultPrevented) event.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: _cache[6] || (_cache[6] = (event) => {
            emits("swipeMove", event);
            if (!event.defaultPrevented) {
              const { x, y } = event.detail.delta;
              const target = event.currentTarget;
              target.setAttribute("data-swipe", "move");
              target.style.setProperty("--reka-toast-swipe-move-x", `${x}px`);
              target.style.setProperty("--reka-toast-swipe-move-y", `${y}px`);
            }
          }),
          onSwipeCancel: _cache[7] || (_cache[7] = (event) => {
            emits("swipeCancel", event);
            if (!event.defaultPrevented) {
              const target = event.currentTarget;
              target.setAttribute("data-swipe", "cancel");
              target.style.removeProperty("--reka-toast-swipe-move-x");
              target.style.removeProperty("--reka-toast-swipe-move-y");
              target.style.removeProperty("--reka-toast-swipe-end-x");
              target.style.removeProperty("--reka-toast-swipe-end-y");
            }
          }),
          onSwipeEnd: _cache[8] || (_cache[8] = (event) => {
            emits("swipeEnd", event);
            if (!event.defaultPrevented) {
              const { x, y } = event.detail.delta;
              const target = event.currentTarget;
              target.setAttribute("data-swipe", "end");
              target.style.removeProperty("--reka-toast-swipe-move-x");
              target.style.removeProperty("--reka-toast-swipe-move-y");
              target.style.setProperty("--reka-toast-swipe-end-x", `${x}px`);
              target.style.setProperty("--reka-toast-swipe-end-y", `${y}px`);
              close();
            }
          })
        }), {
          default: withCtx(({ remaining, duration: _duration }) => [renderSlot(_ctx.$slots, "default", {
            remaining,
            duration: _duration,
            open: isOpen.value
          })]),
          _: 3
        }, 16, [
          "open",
          "type",
          "as",
          "as-child",
          "duration",
          "toast"
        ])]),
        _: 3
      }, 8, ["present"]);
    };
  }
});
var ToastTitle_default = /* @__PURE__ */ defineComponent({
  __name: "ToastTitle",
  props: {
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
    const rootContext = injectToastRootContext(null);
    return (_ctx, _cache) => {
      var _a;
      return _ctx.$slots.default || !((_a = unref(rootContext)) == null ? void 0 : _a.toast.value) || unref(rootContext).toast.value.title ? (openBlock(), createBlock(unref(Primitive), normalizeProps(mergeProps({ key: 0 }, props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => {
          var _a2, _b;
          return [createTextVNode(toDisplayString((_b = (_a2 = unref(rootContext)) == null ? void 0 : _a2.toast.value) == null ? void 0 : _b.title), 1)];
        })]),
        _: 3
      }, 16)) : createCommentVNode("v-if", true);
    };
  }
});
var virtual_nuxt__nuxt_2Fui_2Fprogress_default = {
  "slots": {
    "root": "gap-2",
    "base": "relative overflow-hidden rounded-full bg-accented",
    "indicator": "rounded-full size-full transition-transform duration-200 ease-out motion-reduce:transition-none motion-reduce:data-[state=indeterminate]:animate-pulse",
    "status": "flex text-dimmed duration-200 ease-out motion-reduce:transition-none",
    "steps": "grid items-end",
    "step": "truncate text-end row-start-1 col-start-1 transition-opacity ease-out"
  },
  "variants": {
    "animation": {
      "carousel": "",
      "carousel-inverse": "",
      "swing": "",
      "elastic": ""
    },
    "color": {
      "primary": {
        "indicator": "bg-primary",
        "steps": "text-primary"
      },
      "secondary": {
        "indicator": "bg-secondary",
        "steps": "text-secondary"
      },
      "success": {
        "indicator": "bg-success",
        "steps": "text-success"
      },
      "info": {
        "indicator": "bg-info",
        "steps": "text-info"
      },
      "warning": {
        "indicator": "bg-warning",
        "steps": "text-warning"
      },
      "error": {
        "indicator": "bg-error",
        "steps": "text-error"
      },
      "neutral": {
        "indicator": "bg-inverted",
        "steps": "text-highlighted"
      }
    },
    "size": {
      "2xs": {
        "status": "text-xs",
        "steps": "text-xs"
      },
      "xs": {
        "status": "text-xs",
        "steps": "text-xs"
      },
      "sm": {
        "status": "text-sm",
        "steps": "text-sm"
      },
      "md": {
        "status": "text-sm",
        "steps": "text-sm"
      },
      "lg": {
        "status": "text-sm",
        "steps": "text-sm"
      },
      "xl": {
        "status": "text-base",
        "steps": "text-base"
      },
      "2xl": {
        "status": "text-base",
        "steps": "text-base"
      }
    },
    "step": {
      "active": { "step": "opacity-100" },
      "first": { "step": "opacity-100 text-muted" },
      "other": { "step": "opacity-0" },
      "last": { "step": "" }
    },
    "orientation": {
      "horizontal": {
        "root": "w-full flex flex-col",
        "base": "w-full",
        "status": "flex-row items-center justify-end w-(--percent) min-w-fit transition-[width]"
      },
      "vertical": {
        "root": "h-full flex flex-row-reverse",
        "base": "h-full",
        "status": "flex-col justify-end h-(--percent) min-h-fit transition-[height]"
      }
    },
    "inverted": { "true": { "status": "self-end" } }
  },
  "compoundVariants": [
    {
      "inverted": true,
      "orientation": "horizontal",
      "class": {
        "step": "text-start",
        "status": "flex-row-reverse"
      }
    },
    {
      "inverted": true,
      "orientation": "vertical",
      "class": {
        "steps": "items-start",
        "status": "flex-col-reverse"
      }
    },
    {
      "orientation": "horizontal",
      "size": "2xs",
      "class": "h-px"
    },
    {
      "orientation": "horizontal",
      "size": "xs",
      "class": "h-0.5"
    },
    {
      "orientation": "horizontal",
      "size": "sm",
      "class": "h-1"
    },
    {
      "orientation": "horizontal",
      "size": "md",
      "class": "h-2"
    },
    {
      "orientation": "horizontal",
      "size": "lg",
      "class": "h-3"
    },
    {
      "orientation": "horizontal",
      "size": "xl",
      "class": "h-4"
    },
    {
      "orientation": "horizontal",
      "size": "2xl",
      "class": "h-5"
    },
    {
      "orientation": "vertical",
      "size": "2xs",
      "class": "w-px"
    },
    {
      "orientation": "vertical",
      "size": "xs",
      "class": "w-0.5"
    },
    {
      "orientation": "vertical",
      "size": "sm",
      "class": "w-1"
    },
    {
      "orientation": "vertical",
      "size": "md",
      "class": "w-2"
    },
    {
      "orientation": "vertical",
      "size": "lg",
      "class": "w-3"
    },
    {
      "orientation": "vertical",
      "size": "xl",
      "class": "w-4"
    },
    {
      "orientation": "vertical",
      "size": "2xl",
      "class": "w-5"
    },
    {
      "orientation": "horizontal",
      "animation": "carousel",
      "class": { "indicator": "motion-safe:data-[state=indeterminate]:animate-[carousel_2s_linear_infinite] motion-safe:data-[state=indeterminate]:rtl:animate-[carousel-rtl_2s_linear_infinite]" }
    },
    {
      "orientation": "vertical",
      "animation": "carousel",
      "class": { "indicator": "motion-safe:data-[state=indeterminate]:animate-[carousel-vertical_2s_linear_infinite]" }
    },
    {
      "orientation": "horizontal",
      "animation": "carousel-inverse",
      "class": { "indicator": "motion-safe:data-[state=indeterminate]:animate-[carousel-inverse_2s_linear_infinite] motion-safe:data-[state=indeterminate]:rtl:animate-[carousel-inverse-rtl_2s_linear_infinite]" }
    },
    {
      "orientation": "vertical",
      "animation": "carousel-inverse",
      "class": { "indicator": "motion-safe:data-[state=indeterminate]:animate-[carousel-inverse-vertical_2s_linear_infinite]" }
    },
    {
      "orientation": "horizontal",
      "animation": "swing",
      "class": { "indicator": "motion-safe:data-[state=indeterminate]:animate-[swing_2s_var(--ease-in-out)_infinite]" }
    },
    {
      "orientation": "vertical",
      "animation": "swing",
      "class": { "indicator": "motion-safe:data-[state=indeterminate]:animate-[swing-vertical_2s_var(--ease-in-out)_infinite]" }
    },
    {
      "orientation": "horizontal",
      "animation": "elastic",
      "class": { "indicator": "relative motion-safe:data-[state=indeterminate]:animate-[elastic_2s_var(--ease-in-out)_infinite]" }
    },
    {
      "orientation": "vertical",
      "animation": "elastic",
      "class": { "indicator": "relative motion-safe:data-[state=indeterminate]:animate-[elastic-vertical_2s_var(--ease-in-out)_infinite]" }
    }
  ],
  "defaultVariants": {
    "animation": "carousel",
    "color": "primary",
    "size": "md"
  }
};
var _sfc_main$1 = {
  __name: "UProgress",
  __ssrInlineRender: true,
  props: {
    as: {
      type: null,
      required: false
    },
    max: {
      type: [Number, Array],
      required: false
    },
    status: {
      type: Boolean,
      required: false
    },
    inverted: {
      type: Boolean,
      required: false,
      default: false
    },
    size: {
      type: null,
      required: false
    },
    color: {
      type: null,
      required: false
    },
    orientation: {
      type: null,
      required: false,
      default: "horizontal"
    },
    animation: {
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
    getValueLabel: {
      type: Function,
      required: false
    },
    getValueText: {
      type: Function,
      required: false
    },
    modelValue: {
      type: [Number, null],
      required: false,
      default: null
    }
  },
  emits: ["update:modelValue", "update:max"],
  setup(__props, { emit: __emit }) {
    const _props = __props;
    const emits = __emit;
    const slots = useSlots();
    const props = useComponentProps("progress", _props);
    const { dir } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "getValueLabel", "getValueText", "modelValue"), emits);
    const isIndeterminate = computed(() => rootProps.value.modelValue === null);
    const hasSteps = computed(() => Array.isArray(props.max));
    const realMax = computed(() => {
      if (isIndeterminate.value || !props.max) return;
      if (Array.isArray(props.max)) return props.max.length - 1;
      return Number(props.max);
    });
    const percent = computed(() => {
      var _a, _b;
      if (isIndeterminate.value) return;
      switch (true) {
        case rootProps.value.modelValue < 0:
          return 0;
        case rootProps.value.modelValue > ((_a = realMax.value) != null ? _a : 100):
          return 100;
        default:
          return Math.round(rootProps.value.modelValue / ((_b = realMax.value) != null ? _b : 100) * 100);
      }
    });
    const indicatorStyle = computed(() => {
      if (percent.value === void 0) return;
      if (props.orientation === "vertical") return { transform: `translateY(${props.inverted ? "" : "-"}${100 - percent.value}%)` };
      else if (dir.value === "rtl") return { transform: `translateX(${props.inverted ? "-" : ""}${100 - percent.value}%)` };
      else return { transform: `translateX(${props.inverted ? "" : "-"}${100 - percent.value}%)` };
    });
    const statusStyle = computed(() => {
      var _a;
      return { "--percent": `${Math.max((_a = percent.value) != null ? _a : 0, 0)}%` };
    });
    function isActive(index) {
      return index === Number(props.modelValue);
    }
    function isFirst(index) {
      return index === 0;
    }
    function isLast(index) {
      return index === realMax.value;
    }
    function stepVariant(index) {
      index = Number(index);
      if (isActive(index) && !isFirst(index)) return "active";
      if (isFirst(index) && isActive(index)) return "first";
      if (isLast(index) && isActive(index)) return "last";
      return "other";
    }
    const ui = computed(() => {
      var _a;
      return tv({
        extend: virtual_nuxt__nuxt_2Fui_2Fprogress_default,
        ...((_a = appConfig.ui) == null ? void 0 : _a.progress) || {}
      })({
        animation: props.animation,
        size: props.size,
        color: props.color,
        orientation: props.orientation,
        inverted: props.inverted
      });
    });
    const themeColors = computed(() => {
      var _a, _b, _c, _d;
      return Object.keys({
        ...(_a = virtual_nuxt__nuxt_2Fui_2Fprogress_default.variants) == null ? void 0 : _a.color,
        ...(_d = (_c = (_b = appConfig.ui) == null ? void 0 : _b.progress) == null ? void 0 : _c.variants) == null ? void 0 : _d.color
      });
    });
    const customColor = computed(() => props.color && !themeColors.value.includes(props.color) ? props.color : void 0);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: unref(props).as,
        "data-orientation": unref(props).orientation,
        "data-slot": "root",
        class: ui.value.root({ class: [(_a = unref(props).ui) == null ? void 0 : _a.root, unref(props).class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f;
          if (_push2) {
            if (!isIndeterminate.value && (unref(props).status || !!slots.status)) {
              _push2(`<div data-slot="status" class="${ssrRenderClass(ui.value.status({ class: (_a2 = unref(props).ui) == null ? void 0 : _a2.status }))}" style="${ssrRenderStyle(statusStyle.value)}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "status", { percent: percent.value }, () => {
                _push2(`${ssrInterpolate(percent.value)}% `);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else _push2(`<!---->`);
            _push2(ssrRenderComponent(unref(ProgressRoot_default), mergeProps(unref(rootProps), {
              max: realMax.value,
              "data-slot": "base",
              class: ui.value.base({ class: (_b = unref(props).ui) == null ? void 0 : _b.base }),
              style: { "transform": "translateZ(0)" }
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a3, _b2;
                if (_push3) _push3(ssrRenderComponent(unref(ProgressIndicator_default), {
                  "data-slot": "indicator",
                  class: ui.value.indicator({ class: (_a3 = unref(props).ui) == null ? void 0 : _a3.indicator }),
                  style: [indicatorStyle.value, customColor.value ? { backgroundColor: customColor.value } : void 0]
                }, null, _parent3, _scopeId2));
                else return [createVNode(unref(ProgressIndicator_default), {
                  "data-slot": "indicator",
                  class: ui.value.indicator({ class: (_b2 = unref(props).ui) == null ? void 0 : _b2.indicator }),
                  style: [indicatorStyle.value, customColor.value ? { backgroundColor: customColor.value } : void 0]
                }, null, 8, ["class", "style"])];
              }),
              _: 1
            }, _parent2, _scopeId));
            if (hasSteps.value) {
              _push2(`<div data-slot="steps" class="${ssrRenderClass(ui.value.steps({ class: (_c = unref(props).ui) == null ? void 0 : _c.steps }))}" style="${ssrRenderStyle(customColor.value ? { color: customColor.value } : void 0)}"${_scopeId}><!--[-->`);
              ssrRenderList(unref(props).max, (step, index) => {
                var _a3;
                _push2(`<div data-slot="step" class="${ssrRenderClass(ui.value.step({
                  class: (_a3 = unref(props).ui) == null ? void 0 : _a3.step,
                  step: stepVariant(index)
                }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, `step-${index}`, { step }, () => {
                  _push2(`${ssrInterpolate(step)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              });
              _push2(`<!--]--></div>`);
            } else _push2(`<!---->`);
          } else return [
            !isIndeterminate.value && (unref(props).status || !!slots.status) ? (openBlock(), createBlock("div", {
              key: 0,
              "data-slot": "status",
              class: ui.value.status({ class: (_d = unref(props).ui) == null ? void 0 : _d.status }),
              style: statusStyle.value
            }, [renderSlot(_ctx.$slots, "status", { percent: percent.value }, () => [createTextVNode(toDisplayString(percent.value) + "% ", 1)])], 6)) : createCommentVNode("", true),
            createVNode(unref(ProgressRoot_default), mergeProps(unref(rootProps), {
              max: realMax.value,
              "data-slot": "base",
              class: ui.value.base({ class: (_e = unref(props).ui) == null ? void 0 : _e.base }),
              style: { "transform": "translateZ(0)" }
            }), {
              default: withCtx(() => {
                var _a3;
                return [createVNode(unref(ProgressIndicator_default), {
                  "data-slot": "indicator",
                  class: ui.value.indicator({ class: (_a3 = unref(props).ui) == null ? void 0 : _a3.indicator }),
                  style: [indicatorStyle.value, customColor.value ? { backgroundColor: customColor.value } : void 0]
                }, null, 8, ["class", "style"])];
              }),
              _: 1
            }, 16, ["max", "class"]),
            hasSteps.value ? (openBlock(), createBlock("div", {
              key: 1,
              "data-slot": "steps",
              class: ui.value.steps({ class: (_f = unref(props).ui) == null ? void 0 : _f.steps }),
              style: customColor.value ? { color: customColor.value } : void 0
            }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(props).max, (step, index) => {
              var _a3;
              return openBlock(), createBlock("div", {
                key: index,
                "data-slot": "step",
                class: ui.value.step({
                  class: (_a3 = unref(props).ui) == null ? void 0 : _a3.step,
                  step: stepVariant(index)
                })
              }, [renderSlot(_ctx.$slots, `step-${index}`, { step }, () => [createTextVNode(toDisplayString(step), 1)])], 2);
            }), 128))], 6)) : createCommentVNode("", true)
          ];
        }),
        _: 3
      }, _parent));
    };
  }
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Progress.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var virtual_nuxt__nuxt_2Fui_2Ftoast_default = {
  "slots": {
    "root": "relative group overflow-hidden bg-default shadow-lg rounded-lg ring ring-default p-4 flex gap-2.5",
    "wrapper": "w-0 flex-1 flex flex-col",
    "title": "text-sm font-medium text-highlighted",
    "description": "text-sm text-muted",
    "icon": "shrink-0 size-5",
    "avatar": "shrink-0",
    "avatarSize": "2xl",
    "actions": "flex gap-1.5 shrink-0",
    "progress": "absolute inset-x-0 bottom-0",
    "close": "p-0"
  },
  "variants": {
    "color": {
      "primary": {
        "root": "outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary",
        "icon": "text-primary"
      },
      "secondary": {
        "root": "outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary",
        "icon": "text-secondary"
      },
      "success": {
        "root": "outline-success/25 focus-visible:outline-3 focus-visible:ring-success",
        "icon": "text-success"
      },
      "info": {
        "root": "outline-info/25 focus-visible:outline-3 focus-visible:ring-info",
        "icon": "text-info"
      },
      "warning": {
        "root": "outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning",
        "icon": "text-warning"
      },
      "error": {
        "root": "outline-error/25 focus-visible:outline-3 focus-visible:ring-error",
        "icon": "text-error"
      },
      "neutral": {
        "root": "outline-inverted/25 focus-visible:outline-3 focus-visible:ring-inverted",
        "icon": "text-highlighted"
      }
    },
    "orientation": {
      "horizontal": {
        "root": "items-center",
        "actions": "items-center"
      },
      "vertical": {
        "root": "items-start",
        "actions": "items-start mt-2.5"
      }
    },
    "title": { "true": { "description": "mt-1" } }
  },
  "defaultVariants": { "color": "primary" }
};
var _sfc_main = {
  __name: "UToast",
  __ssrInlineRender: true,
  props: {
    as: {
      type: null,
      required: false
    },
    title: {
      type: [
        String,
        Object,
        Function
      ],
      required: false
    },
    description: {
      type: [
        String,
        Object,
        Function
      ],
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
    color: {
      type: null,
      required: false
    },
    orientation: {
      type: null,
      required: false,
      default: "vertical"
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
    actions: {
      type: Array,
      required: false
    },
    duration: {
      type: Number,
      required: false
    },
    progress: {
      type: [Boolean, Object],
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
    type: {
      type: String,
      required: false
    }
  },
  emits: [
    "escapeKeyDown",
    "pause",
    "resume",
    "swipeStart",
    "swipeMove",
    "swipeCancel",
    "swipeEnd",
    "update:open"
  ],
  setup(__props, { expose: __expose, emit: __emit }) {
    const _props = __props;
    const emits = __emit;
    const slots = useSlots();
    const props = useComponentProps("toast", _props);
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardProps(reactivePick(props, "as", "defaultOpen", "open", "duration", "type"), emits);
    const ui = computed(() => {
      var _a;
      return tv({
        extend: virtual_nuxt__nuxt_2Fui_2Ftoast_default,
        ...((_a = appConfig.ui) == null ? void 0 : _a.toast) || {}
      })({
        color: props.color,
        orientation: props.orientation,
        title: !!props.title || !!slots.title
      });
    });
    const rootRef = useTemplateRef("rootRef");
    const height = ref(0);
    __expose({ height });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(unref(ToastRoot_default), mergeProps({
        ref_key: "rootRef",
        ref: rootRef
      }, unref(rootProps), {
        "data-orientation": unref(props).orientation,
        "data-slot": "root",
        class: ui.value.root({ class: [(_a = unref(props).ui) == null ? void 0 : _a.root, unref(props).class] }),
        style: { "--height": height.value }
      }, _attrs), {
        default: withCtx(({ remaining, duration: totalDuration, open }, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
              var _a3, _b2, _c2;
              if (unref(props).avatar) _push2(ssrRenderComponent(_sfc_main$3, mergeProps({ size: ((_a3 = unref(props).ui) == null ? void 0 : _a3.avatarSize) || ui.value.avatarSize() }, unref(props).avatar, {
                "data-slot": "avatar",
                class: ui.value.avatar({ class: (_b2 = unref(props).ui) == null ? void 0 : _b2.avatar })
              }), null, _parent2, _scopeId));
              else if (unref(props).icon) _push2(ssrRenderComponent(_sfc_main$5, {
                name: unref(props).icon,
                "data-slot": "icon",
                class: ui.value.icon({ class: (_c2 = unref(props).ui) == null ? void 0 : _c2.icon })
              }, null, _parent2, _scopeId));
              else _push2(`<!---->`);
            }, _push2, _parent2, _scopeId);
            _push2(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: (_a2 = unref(props).ui) == null ? void 0 : _a2.wrapper }))}"${_scopeId}>`);
            if (unref(props).title || !!slots.title) _push2(ssrRenderComponent(unref(ToastTitle_default), {
              "data-slot": "title",
              class: ui.value.title({ class: (_b = unref(props).ui) == null ? void 0 : _b.title })
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                  if (typeof unref(props).title === "function") ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(unref(props).title()), null, null), _parent3, _scopeId2);
                  else if (typeof unref(props).title === "object") ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(unref(props).title), null, null), _parent3, _scopeId2);
                  else _push3(`<!--[-->${ssrInterpolate(unref(props).title)}<!--]-->`);
                }, _push3, _parent3, _scopeId2);
                else return [renderSlot(_ctx.$slots, "title", {}, () => [typeof unref(props).title === "function" ? (openBlock(), createBlock(resolveDynamicComponent(unref(props).title()), { key: 0 })) : typeof unref(props).title === "object" ? (openBlock(), createBlock(resolveDynamicComponent(unref(props).title), { key: 1 })) : (openBlock(), createBlock(Fragment, { key: 2 }, [createTextVNode(toDisplayString(unref(props).title), 1)], 64))])];
              }),
              _: 2
            }, _parent2, _scopeId));
            else _push2(`<!---->`);
            if (unref(props).description || !!slots.description) _push2(ssrRenderComponent(unref(ToastDescription_default), {
              "data-slot": "description",
              class: ui.value.description({ class: (_c = unref(props).ui) == null ? void 0 : _c.description })
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                  if (typeof unref(props).description === "function") ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(unref(props).description()), null, null), _parent3, _scopeId2);
                  else if (typeof unref(props).description === "object") ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(unref(props).description), null, null), _parent3, _scopeId2);
                  else _push3(`<!--[-->${ssrInterpolate(unref(props).description)}<!--]-->`);
                }, _push3, _parent3, _scopeId2);
                else return [renderSlot(_ctx.$slots, "description", {}, () => [typeof unref(props).description === "function" ? (openBlock(), createBlock(resolveDynamicComponent(unref(props).description()), { key: 0 })) : typeof unref(props).description === "object" ? (openBlock(), createBlock(resolveDynamicComponent(unref(props).description), { key: 1 })) : (openBlock(), createBlock(Fragment, { key: 2 }, [createTextVNode(toDisplayString(unref(props).description), 1)], 64))])];
              }),
              _: 2
            }, _parent2, _scopeId));
            else _push2(`<!---->`);
            if (unref(props).orientation === "vertical" && (((_d = unref(props).actions) == null ? void 0 : _d.length) || !!slots.actions)) {
              _push2(`<div data-slot="actions" class="${ssrRenderClass(ui.value.actions({ class: (_e = unref(props).ui) == null ? void 0 : _e.actions }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "actions", {}, () => {
                _push2(`<!--[-->`);
                ssrRenderList(unref(props).actions, ({ closeOnClick, ...action }, index) => {
                  _push2(ssrRenderComponent(unref(ToastAction_default), {
                    key: index,
                    "alt-text": action.label || "Action",
                    "close-on-click": closeOnClick,
                    "as-child": "",
                    onClick: () => {
                    }
                  }, {
                    default: withCtx((_, _push3, _parent3, _scopeId2) => {
                      if (_push3) _push3(ssrRenderComponent(_sfc_main$2, mergeProps({
                        size: "xs",
                        color: unref(props).color
                      }, { ref_for: true }, action), null, _parent3, _scopeId2));
                      else return [createVNode(_sfc_main$2, mergeProps({
                        size: "xs",
                        color: unref(props).color
                      }, { ref_for: true }, action), null, 16, ["color"])];
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else _push2(`<!---->`);
            _push2(`</div>`);
            if (unref(props).orientation === "horizontal" && (((_f = unref(props).actions) == null ? void 0 : _f.length) || !!slots.actions) || unref(props).close) {
              _push2(`<div data-slot="actions" class="${ssrRenderClass(ui.value.actions({
                class: (_g = unref(props).ui) == null ? void 0 : _g.actions,
                orientation: "horizontal"
              }))}"${_scopeId}>`);
              if (unref(props).orientation === "horizontal" && (((_h = unref(props).actions) == null ? void 0 : _h.length) || !!slots.actions)) ssrRenderSlot(_ctx.$slots, "actions", {}, () => {
                _push2(`<!--[-->`);
                ssrRenderList(unref(props).actions, ({ closeOnClick, ...action }, index) => {
                  _push2(ssrRenderComponent(unref(ToastAction_default), {
                    key: index,
                    "alt-text": action.label || "Action",
                    "close-on-click": closeOnClick,
                    "as-child": "",
                    onClick: () => {
                    }
                  }, {
                    default: withCtx((_, _push3, _parent3, _scopeId2) => {
                      if (_push3) _push3(ssrRenderComponent(_sfc_main$2, mergeProps({
                        size: "xs",
                        color: unref(props).color
                      }, { ref_for: true }, action), null, _parent3, _scopeId2));
                      else return [createVNode(_sfc_main$2, mergeProps({
                        size: "xs",
                        color: unref(props).color
                      }, { ref_for: true }, action), null, 16, ["color"])];
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              }, _push2, _parent2, _scopeId);
              else _push2(`<!---->`);
              if (unref(props).close || !!slots.close) _push2(ssrRenderComponent(unref(ToastClose_default), { "as-child": "" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) ssrRenderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                    var _a3;
                    if (unref(props).close) _push3(ssrRenderComponent(_sfc_main$2, mergeProps({
                      icon: unref(props).closeIcon || unref(appConfig).ui.icons.close,
                      color: "neutral",
                      variant: "link",
                      "aria-label": unref(t)("toast.close")
                    }, typeof unref(props).close === "object" ? unref(props).close : {}, {
                      "data-slot": "close",
                      class: ui.value.close({ class: (_a3 = unref(props).ui) == null ? void 0 : _a3.close }),
                      onClick: () => {
                      }
                    }), null, _parent3, _scopeId2));
                    else _push3(`<!---->`);
                  }, _push3, _parent3, _scopeId2);
                  else return [renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                    var _a3;
                    return [unref(props).close ? (openBlock(), createBlock(_sfc_main$2, mergeProps({
                      key: 0,
                      icon: unref(props).closeIcon || unref(appConfig).ui.icons.close,
                      color: "neutral",
                      variant: "link",
                      "aria-label": unref(t)("toast.close")
                    }, typeof unref(props).close === "object" ? unref(props).close : {}, {
                      "data-slot": "close",
                      class: ui.value.close({ class: (_a3 = unref(props).ui) == null ? void 0 : _a3.close }),
                      onClick: withModifiers(() => {
                      }, ["stop"])
                    }), null, 16, [
                      "icon",
                      "aria-label",
                      "class",
                      "onClick"
                    ])) : createCommentVNode("", true)];
                  })];
                }),
                _: 2
              }, _parent2, _scopeId));
              else _push2(`<!---->`);
              _push2(`</div>`);
            } else _push2(`<!---->`);
            if (unref(props).progress && open && remaining > 0 && totalDuration) _push2(ssrRenderComponent(_sfc_main$1, mergeProps({
              "model-value": remaining / totalDuration * 100,
              color: unref(props).color
            }, typeof unref(props).progress === "object" ? unref(props).progress : {}, {
              size: "sm",
              "data-slot": "progress",
              class: ui.value.progress({ class: (_i = unref(props).ui) == null ? void 0 : _i.progress })
            }), null, _parent2, _scopeId));
            else _push2(`<!---->`);
          } else return [
            renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
              var _a3, _b2, _c2;
              return [unref(props).avatar ? (openBlock(), createBlock(_sfc_main$3, mergeProps({
                key: 0,
                size: ((_a3 = unref(props).ui) == null ? void 0 : _a3.avatarSize) || ui.value.avatarSize()
              }, unref(props).avatar, {
                "data-slot": "avatar",
                class: ui.value.avatar({ class: (_b2 = unref(props).ui) == null ? void 0 : _b2.avatar })
              }), null, 16, ["size", "class"])) : unref(props).icon ? (openBlock(), createBlock(_sfc_main$5, {
                key: 1,
                name: unref(props).icon,
                "data-slot": "icon",
                class: ui.value.icon({ class: (_c2 = unref(props).ui) == null ? void 0 : _c2.icon })
              }, null, 8, ["name", "class"])) : createCommentVNode("", true)];
            }),
            createVNode("div", {
              "data-slot": "wrapper",
              class: ui.value.wrapper({ class: (_j = unref(props).ui) == null ? void 0 : _j.wrapper })
            }, [
              unref(props).title || !!slots.title ? (openBlock(), createBlock(unref(ToastTitle_default), {
                key: 0,
                "data-slot": "title",
                class: ui.value.title({ class: (_k = unref(props).ui) == null ? void 0 : _k.title })
              }, {
                default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [typeof unref(props).title === "function" ? (openBlock(), createBlock(resolveDynamicComponent(unref(props).title()), { key: 0 })) : typeof unref(props).title === "object" ? (openBlock(), createBlock(resolveDynamicComponent(unref(props).title), { key: 1 })) : (openBlock(), createBlock(Fragment, { key: 2 }, [createTextVNode(toDisplayString(unref(props).title), 1)], 64))])]),
                _: 3
              }, 8, ["class"])) : createCommentVNode("", true),
              unref(props).description || !!slots.description ? (openBlock(), createBlock(unref(ToastDescription_default), {
                key: 1,
                "data-slot": "description",
                class: ui.value.description({ class: (_l = unref(props).ui) == null ? void 0 : _l.description })
              }, {
                default: withCtx(() => [renderSlot(_ctx.$slots, "description", {}, () => [typeof unref(props).description === "function" ? (openBlock(), createBlock(resolveDynamicComponent(unref(props).description()), { key: 0 })) : typeof unref(props).description === "object" ? (openBlock(), createBlock(resolveDynamicComponent(unref(props).description), { key: 1 })) : (openBlock(), createBlock(Fragment, { key: 2 }, [createTextVNode(toDisplayString(unref(props).description), 1)], 64))])]),
                _: 3
              }, 8, ["class"])) : createCommentVNode("", true),
              unref(props).orientation === "vertical" && (((_m = unref(props).actions) == null ? void 0 : _m.length) || !!slots.actions) ? (openBlock(), createBlock("div", {
                key: 2,
                "data-slot": "actions",
                class: ui.value.actions({ class: (_n = unref(props).ui) == null ? void 0 : _n.actions })
              }, [renderSlot(_ctx.$slots, "actions", {}, () => [(openBlock(true), createBlock(Fragment, null, renderList(unref(props).actions, ({ closeOnClick, ...action }, index) => {
                return openBlock(), createBlock(unref(ToastAction_default), {
                  key: index,
                  "alt-text": action.label || "Action",
                  "close-on-click": closeOnClick,
                  "as-child": "",
                  onClick: withModifiers(() => {
                  }, ["stop"])
                }, {
                  default: withCtx(() => [createVNode(_sfc_main$2, mergeProps({
                    size: "xs",
                    color: unref(props).color
                  }, { ref_for: true }, action), null, 16, ["color"])]),
                  _: 2
                }, 1032, [
                  "alt-text",
                  "close-on-click",
                  "onClick"
                ]);
              }), 128))])], 2)) : createCommentVNode("", true)
            ], 2),
            unref(props).orientation === "horizontal" && (((_o = unref(props).actions) == null ? void 0 : _o.length) || !!slots.actions) || unref(props).close ? (openBlock(), createBlock("div", {
              key: 0,
              "data-slot": "actions",
              class: ui.value.actions({
                class: (_p = unref(props).ui) == null ? void 0 : _p.actions,
                orientation: "horizontal"
              })
            }, [unref(props).orientation === "horizontal" && (((_q = unref(props).actions) == null ? void 0 : _q.length) || !!slots.actions) ? renderSlot(_ctx.$slots, "actions", {}, () => [(openBlock(true), createBlock(Fragment, null, renderList(unref(props).actions, ({ closeOnClick, ...action }, index) => {
              return openBlock(), createBlock(unref(ToastAction_default), {
                key: index,
                "alt-text": action.label || "Action",
                "close-on-click": closeOnClick,
                "as-child": "",
                onClick: withModifiers(() => {
                }, ["stop"])
              }, {
                default: withCtx(() => [createVNode(_sfc_main$2, mergeProps({
                  size: "xs",
                  color: unref(props).color
                }, { ref_for: true }, action), null, 16, ["color"])]),
                _: 2
              }, 1032, [
                "alt-text",
                "close-on-click",
                "onClick"
              ]);
            }), 128))], void 0, 0) : createCommentVNode("", true), unref(props).close || !!slots.close ? (openBlock(), createBlock(unref(ToastClose_default), {
              key: 1,
              "as-child": ""
            }, {
              default: withCtx(() => [renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                var _a3;
                return [unref(props).close ? (openBlock(), createBlock(_sfc_main$2, mergeProps({
                  key: 0,
                  icon: unref(props).closeIcon || unref(appConfig).ui.icons.close,
                  color: "neutral",
                  variant: "link",
                  "aria-label": unref(t)("toast.close")
                }, typeof unref(props).close === "object" ? unref(props).close : {}, {
                  "data-slot": "close",
                  class: ui.value.close({ class: (_a3 = unref(props).ui) == null ? void 0 : _a3.close }),
                  onClick: withModifiers(() => {
                  }, ["stop"])
                }), null, 16, [
                  "icon",
                  "aria-label",
                  "class",
                  "onClick"
                ])) : createCommentVNode("", true)];
              })]),
              _: 3
            })) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
            unref(props).progress && open && remaining > 0 && totalDuration ? (openBlock(), createBlock(_sfc_main$1, mergeProps({
              key: 1,
              "model-value": remaining / totalDuration * 100,
              color: unref(props).color
            }, typeof unref(props).progress === "object" ? unref(props).progress : {}, {
              size: "sm",
              "data-slot": "progress",
              class: ui.value.progress({ class: (_r = unref(props).ui) == null ? void 0 : _r.progress })
            }), null, 16, [
              "model-value",
              "color",
              "class"
            ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Toast.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Toast-DsZz5VYP.mjs.map
