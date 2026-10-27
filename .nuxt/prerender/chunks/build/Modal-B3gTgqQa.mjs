import { r as __exportAll } from './components-DxzSx7d2.mjs';
import { a as useComponentProps, f as useLocale, b as useAppConfig, c as useForwardProps, v as usePortal, t as tv, p as VisuallyHidden_default, z as useEmitAsProps, d as useForwardExpose, P as Primitive, T as Teleport_default, n as createContext, o as getActiveElement, B as AUTOFOCUS_ON_UNMOUNT, C as focus, A as injectConfigProviderContext, D as containsComposed, E as AUTOFOCUS_ON_MOUNT, F as focusFirst, G as getTabbableCandidates, H as EVENT_OPTIONS, I as getTabbableEdges } from '../virtual/entry.mjs';
import { u as useId$1 } from './useId-BZnJFoR8.mjs';
import { P as Presence_default } from './Presence-wbRA2BG8.mjs';
import { _ as _sfc_main$1, F as FieldGroupReset } from './Button-Cwxo7d33.mjs';
import { useSlots, toRef, computed, unref, mergeProps, withCtx, toHandlers, renderSlot, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createVNode, Fragment, defineComponent, ref, toRefs, withDirectives, vShow, normalizeProps, guardReactiveProps, watch, withModifiers, watchEffect, nextTick, normalizeStyle, reactive, toValue, useSSRContext } from 'file:///Users/ccci/Project/node_modules/vue/index.mjs';
import { defu } from 'file:///Users/ccci/Project/node_modules/defu/dist/defu.mjs';
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderClass } from 'file:///Users/ccci/Project/node_modules/vue/server-renderer/index.mjs';
import { reactivePick, createReusableTemplate, useVModel, unrefElement, onKeyStroke, createSharedComposable, useEventListener, createGlobalState } from 'file:///Users/ccci/Project/node_modules/@vueuse/core/dist/index.js';
import { tryOnBeforeUnmount, isClient, isIOS } from 'file:///Users/ccci/Project/node_modules/@vueuse/shared/dist/index.js';
import { hideOthers } from 'file:///Users/ccci/Project/node_modules/aria-hidden/dist/es5/index.js';
import 'file:///Users/ccci/Project/node_modules/nostics/dist/index.mjs';
import 'file:///Users/ccci/Project/node_modules/ohash/dist/index.mjs';
import 'file:///Users/ccci/Project/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///Users/ccci/Project/node_modules/@iconify/utils/lib/css/icon.js';
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
import 'file:///Users/ccci/Project/node_modules/scule/dist/index.mjs';
import 'file:///Users/ccci/Project/node_modules/nitropack/node_modules/unctx/dist/index.mjs';
import 'file:///Users/ccci/Project/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/ccci/Project/node_modules/pathe/dist/index.mjs';
import 'node:async_hooks';
import 'file:///Users/ccci/Project/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/ccci/Project/node_modules/devalue/src/index.js';
import 'file:///Users/ccci/Project/node_modules/tailwindcss/dist/colors.mjs';
import './nuxt-link-C7rfVfaB.mjs';
import 'file:///Users/ccci/Project/node_modules/ohash/dist/utils/index.mjs';

function handleAndDispatchCustomEvent(name, handler, detail) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, {
    bubbles: false,
    cancelable: true,
    detail
  });
  if (handler) target.addEventListener(name, handler, { once: true });
  target.dispatchEvent(event);
}
var locks = /* @__PURE__ */ new WeakMap();
function acquireBodyPointerEvents(doc, owner) {
  let lock = locks.get(doc);
  if (!lock) {
    lock = {
      owners: /* @__PURE__ */ new Set(),
      original: doc.body.style.pointerEvents
    };
    locks.set(doc, lock);
  }
  lock.owners.add(owner);
  doc.body.style.pointerEvents = "none";
}
function releaseBodyPointerEvents(doc, owner) {
  const lock = locks.get(doc);
  if (!(lock == null ? void 0 : lock.owners.delete(owner))) return;
  if (lock.owners.size === 0) {
    locks.delete(doc);
    doc.body.style.pointerEvents = lock.original;
  }
}
var pointerEventsOwner = /* @__PURE__ */ Symbol("useBodyScrollLock");
var useBodyLockStackCount = createSharedComposable(() => {
  const map = ref(/* @__PURE__ */ new Map());
  const initialOverflow = ref();
  const locked = computed(() => {
    for (const value of map.value.values()) if (value) return true;
    return false;
  });
  const context2 = injectConfigProviderContext({ scrollBody: ref(true) });
  let stopTouchMoveListener = null;
  const resetBodyStyle = () => {
    var _a;
    (void 0).body.style.paddingRight = "";
    (void 0).body.style.marginRight = "";
    releaseBodyPointerEvents(void 0, pointerEventsOwner);
    (void 0).documentElement.style.removeProperty("--scrollbar-width");
    (void 0).body.style.overflow = (_a = initialOverflow.value) != null ? _a : "";
    isIOS && (stopTouchMoveListener == null ? void 0 : stopTouchMoveListener());
    initialOverflow.value = void 0;
  };
  watch(locked, (val, oldVal) => {
    var _a;
    if (!isClient) return;
    if (!val) {
      if (oldVal) resetBodyStyle();
      return;
    }
    if (initialOverflow.value === void 0) initialOverflow.value = (void 0).body.style.overflow;
    const verticalScrollbarWidth = (void 0).innerWidth - (void 0).documentElement.clientWidth;
    const defaultConfig = {
      padding: verticalScrollbarWidth,
      margin: 0
    };
    const config = ((_a = context2.scrollBody) == null ? void 0 : _a.value) ? typeof context2.scrollBody.value === "object" ? defu({
      padding: context2.scrollBody.value.padding === true ? verticalScrollbarWidth : context2.scrollBody.value.padding,
      margin: context2.scrollBody.value.margin === true ? verticalScrollbarWidth : context2.scrollBody.value.margin
    }, defaultConfig) : defaultConfig : {
      padding: 0,
      margin: 0
    };
    if (verticalScrollbarWidth > 0) {
      (void 0).body.style.paddingRight = typeof config.padding === "number" ? `${config.padding}px` : String(config.padding);
      (void 0).body.style.marginRight = typeof config.margin === "number" ? `${config.margin}px` : String(config.margin);
      (void 0).documentElement.style.setProperty("--scrollbar-width", `${verticalScrollbarWidth}px`);
      (void 0).body.style.overflow = "hidden";
    }
    if (isIOS) stopTouchMoveListener = useEventListener(void 0, "touchmove", (e) => preventDefault(e), { passive: false });
    nextTick(() => {
      if (!locked.value) return;
      acquireBodyPointerEvents(void 0, pointerEventsOwner);
      (void 0).body.style.overflow = "hidden";
    });
  }, {
    immediate: true,
    flush: "sync"
  });
  return map;
});
function useBodyScrollLock(initialState) {
  const id = Math.random().toString(36).substring(2, 7);
  const map = useBodyLockStackCount();
  map.value.set(id, initialState != null ? initialState : false);
  const locked = computed({
    get: () => {
      var _a;
      return (_a = map.value.get(id)) != null ? _a : false;
    },
    set: (value) => map.value.set(id, value)
  });
  tryOnBeforeUnmount(() => {
    map.value.delete(id);
  });
  return locked;
}
function checkOverflowScroll(ele) {
  const style = (void 0).getComputedStyle(ele);
  if (style.overflowX === "scroll" || style.overflowY === "scroll" || style.overflowX === "auto" && ele.clientWidth < ele.scrollWidth || style.overflowY === "auto" && ele.clientHeight < ele.scrollHeight) return true;
  else {
    const parent = ele.parentNode;
    if (!(parent instanceof Element) || parent.tagName === "BODY") return false;
    return checkOverflowScroll(parent);
  }
}
function preventDefault(rawEvent) {
  const e = rawEvent || (void 0).event;
  const _target = e.target;
  if (_target instanceof Element && checkOverflowScroll(_target)) return false;
  if (e.touches.length > 1) return true;
  if (e.preventDefault && e.cancelable) e.preventDefault();
  return false;
}
function useHideOthers(target) {
  let undo;
  watch(() => unrefElement(target), (el) => {
    let isInsideClosedPopover = false;
    try {
      isInsideClosedPopover = !!(el == null ? void 0 : el.closest("[popover]:not(:popover-open)"));
    } catch {
    }
    if (el && !isInsideClosedPopover) undo = hideOthers(el);
    else if (undo) undo();
  });
}
var [injectDialogRootContext, provideDialogRootContext] = /* @__PURE__ */ createContext("DialogRoot");
var DialogRoot_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "DialogRoot",
  props: {
    open: {
      type: Boolean,
      required: false,
      default: void 0
    },
    defaultOpen: {
      type: Boolean,
      required: false,
      default: false
    },
    modal: {
      type: Boolean,
      required: false,
      default: true
    },
    unmountOnHide: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const open = useVModel(props, "open", __emit, {
      defaultValue: props.defaultOpen,
      passive: props.open === void 0
    });
    const triggerElement = ref();
    const contentElement = ref();
    const { modal, unmountOnHide } = toRefs(props);
    provideDialogRootContext({
      open,
      modal,
      unmountOnHide,
      openModal: () => {
        open.value = true;
      },
      onOpenChange: (value) => {
        open.value = value;
      },
      onOpenToggle: () => {
        open.value = !open.value;
      },
      contentId: "",
      titleId: "",
      descriptionId: "",
      triggerElement,
      contentElement
    });
    return (_ctx, _cache) => {
      return renderSlot(_ctx.$slots, "default", {
        open: unref(open),
        close: () => open.value = false
      });
    };
  }
});
var DialogClose_default = /* @__PURE__ */ defineComponent({
  __name: "DialogClose",
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
    useForwardExpose();
    const rootContext = injectDialogRootContext();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
        type: __props.as === "button" ? "button" : void 0,
        onClick: _cache[0] || (_cache[0] = ($event) => unref(rootContext).onOpenChange(false))
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, ["type"]);
    };
  }
});
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
function isElement(node) {
  var _a;
  if (typeof node !== "object" || node === null) return false;
  const ownerWindow = (_a = node.ownerDocument) == null ? void 0 : _a.defaultView;
  return typeof Element !== "undefined" && node instanceof Element || !!ownerWindow && node instanceof ownerWindow.Element;
}
function isLayerExist(layerElement, targetElement) {
  if (!isElement(targetElement)) return false;
  if (layerElement.contains(targetElement)) return true;
  const targetLayer = targetElement.closest("[data-dismissable-layer]");
  const mainLayer = layerElement.dataset.dismissableLayer === "" ? layerElement : layerElement.querySelector("[data-dismissable-layer]");
  const nodeList = Array.from(layerElement.ownerDocument.querySelectorAll("[data-dismissable-layer]"));
  if (targetLayer && (mainLayer === targetLayer || nodeList.indexOf(mainLayer) < nodeList.indexOf(targetLayer))) return true;
  else return false;
}
function usePointerDownOutside(onPointerDownOutside, element, enabled = true) {
  const isPointerInsideDOMTree = ref(false);
  const handleClickRef = ref(() => {
  });
  watchEffect((cleanupFn) => {
    var _a, _b;
    if (!isClient || !toValue(enabled)) return;
    const ownerDocument = (_b = (_a = element == null ? void 0 : element.value) == null ? void 0 : _a.ownerDocument) != null ? _b : globalThis.document;
    const handlePointerDown = async (event) => {
      const target = event.target;
      if (!(element == null ? void 0 : element.value) || !target) return;
      if (isLayerExist(element.value, target)) {
        ownerDocument.removeEventListener("click", handleClickRef.value);
        isPointerInsideDOMTree.value = false;
        return;
      }
      if (event.target && !isPointerInsideDOMTree.value) {
        let handleAndDispatchPointerDownOutsideEvent = function() {
          handleAndDispatchCustomEvent(POINTER_DOWN_OUTSIDE, onPointerDownOutside, eventDetail);
        };
        const eventDetail = { originalEvent: event };
        if (event.pointerType === "touch") {
          ownerDocument.removeEventListener("click", handleClickRef.value);
          handleClickRef.value = handleAndDispatchPointerDownOutsideEvent;
          ownerDocument.addEventListener("click", handleClickRef.value, { once: true });
        } else handleAndDispatchPointerDownOutsideEvent();
      } else ownerDocument.removeEventListener("click", handleClickRef.value);
      isPointerInsideDOMTree.value = false;
    };
    const timerId = (void 0).setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    cleanupFn(() => {
      (void 0).clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.value);
    });
  });
  return { onPointerDownCapture: () => {
    if (!toValue(enabled)) return;
    isPointerInsideDOMTree.value = true;
  } };
}
function useFocusOutside(onFocusOutside, element, enabled = true) {
  const isFocusInsideDOMTree = ref(false);
  watchEffect((cleanupFn) => {
    var _a, _b;
    if (!isClient || !toValue(enabled)) return;
    const ownerDocument = (_b = (_a = element == null ? void 0 : element.value) == null ? void 0 : _a.ownerDocument) != null ? _b : globalThis.document;
    const handleFocus = async (event) => {
      if (!(element == null ? void 0 : element.value)) return;
      await nextTick();
      await nextTick();
      const target = event.target;
      if (!element.value || !target || isLayerExist(element.value, target)) return;
      if (event.target && !isFocusInsideDOMTree.value) handleAndDispatchCustomEvent(FOCUS_OUTSIDE, onFocusOutside, { originalEvent: event });
    };
    ownerDocument.addEventListener("focusin", handleFocus);
    cleanupFn(() => ownerDocument.removeEventListener("focusin", handleFocus));
  });
  return {
    onFocusCapture: () => {
      if (!toValue(enabled)) return;
      isFocusInsideDOMTree.value = true;
    },
    onBlurCapture: () => {
      if (!toValue(enabled)) return;
      isFocusInsideDOMTree.value = false;
    }
  };
}
var context = /* @__PURE__ */ reactive({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var DismissableLayer_default = /* @__PURE__ */ defineComponent({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: {
      type: Boolean,
      required: false,
      default: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    },
    present: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "dismiss"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { forwardRef, currentElement: layerElement } = useForwardExpose();
    const ownerDocument = computed(() => {
      var _a, _b;
      return (_b = (_a = layerElement.value) == null ? void 0 : _a.ownerDocument) != null ? _b : globalThis.document;
    });
    const layers = computed(() => context.layersRoot);
    const index = computed(() => {
      return layerElement.value ? Array.from(layers.value).indexOf(layerElement.value) : -1;
    });
    const isBodyPointerEventsDisabled = computed(() => {
      return context.layersWithOutsidePointerEventsDisabled.size > 0;
    });
    const isPointerEventsEnabled = computed(() => {
      const localLayers = Array.from(layers.value);
      const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1);
      const highestLayerWithOutsidePointerEventsDisabledIndex = localLayers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
      return index.value >= highestLayerWithOutsidePointerEventsDisabledIndex;
    });
    const pointerDownOutside2 = usePointerDownOutside(async (event) => {
      const isPointerDownOnBranch = [...context.branches].some((branch) => branch == null ? void 0 : branch.contains(event.target));
      if (!props.present || !isPointerEventsEnabled.value || isPointerDownOnBranch) return;
      emits("pointerDownOutside", event);
      emits("interactOutside", event);
      await nextTick();
      if (!event.defaultPrevented) emits("dismiss");
    }, layerElement, () => props.present);
    const focusOutside = useFocusOutside((event) => {
      const isFocusInBranch = [...context.branches].some((branch) => branch == null ? void 0 : branch.contains(event.target));
      if (!props.present || isFocusInBranch) return;
      emits("focusOutside", event);
      emits("interactOutside", event);
      if (!event.defaultPrevented) emits("dismiss");
    }, layerElement);
    onKeyStroke("Escape", (event) => {
      if (!props.present) return;
      if (!(index.value === layers.value.size - 1)) return;
      emits("escapeKeyDown", event);
      if (!event.defaultPrevented) emits("dismiss");
    }, { target: () => {
      var _a, _b;
      return (_b = (_a = ownerDocument.value) == null ? void 0 : _a.defaultView) != null ? _b : globalThis.window;
    } });
    watch([
      layerElement,
      () => props.disableOutsidePointerEvents,
      () => props.present
    ], ([element, disableOutsidePointerEvents, present], _, onCleanup) => {
      if (!element || !present) return;
      if (disableOutsidePointerEvents) {
        const doc = element.ownerDocument;
        acquireBodyPointerEvents(doc, element);
        context.layersWithOutsidePointerEventsDisabled.add(element);
        onCleanup(() => {
          context.layersWithOutsidePointerEventsDisabled.delete(element);
          releaseBodyPointerEvents(doc, element);
        });
      }
    }, { immediate: true });
    watch([layerElement, () => props.present], ([element, present], _, onCleanup) => {
      if (!element || !present) return;
      layers.value.add(element);
      onCleanup(() => {
        layers.value.delete(element);
      });
    }, { immediate: true });
    watchEffect((cleanupFn) => {
      cleanupFn(() => {
        if (!layerElement.value) return;
        layers.value.delete(layerElement.value);
        context.layersWithOutsidePointerEventsDisabled.delete(layerElement.value);
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        ref: unref(forwardRef),
        "as-child": __props.asChild,
        as: __props.as,
        "data-dismissable-layer": "",
        style: normalizeStyle({ pointerEvents: isBodyPointerEventsDisabled.value ? isPointerEventsEnabled.value ? "auto" : "none" : void 0 }),
        onFocusCapture: unref(focusOutside).onFocusCapture,
        onBlurCapture: unref(focusOutside).onBlurCapture,
        onPointerdownCapture: unref(pointerDownOutside2).onPointerDownCapture
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, [
        "as-child",
        "as",
        "style",
        "onFocusCapture",
        "onBlurCapture",
        "onPointerdownCapture"
      ]);
    };
  }
});
var useFocusStackState = createGlobalState(() => {
  return ref([]);
});
function createFocusScopesStack() {
  const stack = useFocusStackState();
  return {
    add(focusScope) {
      const activeFocusScope = stack.value[0];
      if (focusScope !== activeFocusScope) activeFocusScope == null ? void 0 : activeFocusScope.pause();
      stack.value = arrayRemove(stack.value, focusScope);
      stack.value.unshift(focusScope);
    },
    remove(focusScope) {
      var _a;
      stack.value = arrayRemove(stack.value, focusScope);
      (_a = stack.value[0]) == null ? void 0 : _a.resume();
    }
  };
}
function arrayRemove(array, item) {
  const updatedArray = [...array];
  const index = updatedArray.indexOf(item);
  if (index !== -1) updatedArray.splice(index, 1);
  return updatedArray;
}
var FocusScope_default = /* @__PURE__ */ defineComponent({
  __name: "FocusScope",
  props: {
    loop: {
      type: Boolean,
      required: false,
      default: false
    },
    trapped: {
      type: Boolean,
      required: false,
      default: false
    },
    present: {
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
      required: false
    }
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { currentRef, currentElement } = useForwardExpose();
    const lastFocusedElementRef = ref(null);
    const focusScopesStack = createFocusScopesStack();
    const focusScope = /* @__PURE__ */ reactive({
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    });
    watchEffect((cleanupFn) => {
      var _a;
      if (!isClient) return;
      const container = currentElement.value;
      if (!props.trapped) return;
      const ownerDocument = (_a = container == null ? void 0 : container.ownerDocument) != null ? _a : void 0;
      const root = container ? container.getRootNode() : ownerDocument;
      function handleFocusIn(event) {
        if (focusScope.paused || !container) return;
        const target = event.target;
        if (container.contains(target)) lastFocusedElementRef.value = target;
        else focus(lastFocusedElementRef.value, { select: true });
      }
      function handleFocusOut(event) {
        if (focusScope.paused || !container) return;
        const relatedTarget = event.relatedTarget;
        if (relatedTarget === null) return;
        if (!container.contains(relatedTarget)) focus(lastFocusedElementRef.value, { select: true });
      }
      function handleMutations(mutations) {
        const lastFocusedElement = lastFocusedElementRef.value;
        if (lastFocusedElement === null) return;
        if (!mutations.some((m) => m.removedNodes.length > 0)) return;
        const activeElement = getActiveElement();
        if (activeElement && container.contains(activeElement)) return;
        if (!container.contains(lastFocusedElement)) focus(container);
      }
      function handleDocumentFocusIn(event) {
        if (focusScope.paused || !container) return;
        const target = event.composedPath()[0];
        if (!containsComposed(container, target)) focus(lastFocusedElementRef.value, { select: true });
      }
      root.addEventListener("focusin", handleFocusIn);
      root.addEventListener("focusout", handleFocusOut);
      if (root !== ownerDocument) ownerDocument.addEventListener("focusin", handleDocumentFocusIn);
      const mutationObserver = new MutationObserver(handleMutations);
      if (container) mutationObserver.observe(container, {
        childList: true,
        subtree: true
      });
      cleanupFn(() => {
        root.removeEventListener("focusin", handleFocusIn);
        root.removeEventListener("focusout", handleFocusOut);
        if (root !== ownerDocument) ownerDocument.removeEventListener("focusin", handleDocumentFocusIn);
        mutationObserver.disconnect();
      });
    });
    function dispatchMountAutoFocus(container, previouslyFocusedElement) {
      const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
      const handleMountAutoFocus = (ev) => emits("mountAutoFocus", ev);
      container.addEventListener(AUTOFOCUS_ON_MOUNT, handleMountAutoFocus);
      container.dispatchEvent(mountEvent);
      container.removeEventListener(AUTOFOCUS_ON_MOUNT, handleMountAutoFocus);
      if (!mountEvent.defaultPrevented) {
        focusFirst(getTabbableCandidates(container), { select: true });
        if (getActiveElement() === previouslyFocusedElement) focus(container);
      }
    }
    watchEffect(async (cleanupFn) => {
      const container = currentElement.value;
      await nextTick();
      if (!container) return;
      if (props.present !== false) focusScopesStack.add(focusScope);
      const previouslyFocusedElement = getActiveElement();
      if (!container.contains(previouslyFocusedElement) && props.present !== false) dispatchMountAutoFocus(container, previouslyFocusedElement);
      cleanupFn(() => {
        const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
        const unmountEventHandler = (ev) => {
          emits("unmountAutoFocus", ev);
        };
        container.addEventListener(AUTOFOCUS_ON_UNMOUNT, unmountEventHandler);
        container.dispatchEvent(unmountEvent);
        container.setAttribute("data-focus-scope-unmounting", "");
        setTimeout(() => {
          if (!unmountEvent.defaultPrevented) focus(previouslyFocusedElement != null ? previouslyFocusedElement : (void 0).body, { select: true });
          container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, unmountEventHandler);
          focusScopesStack.remove(focusScope);
          container.removeAttribute("data-focus-scope-unmounting");
        }, 0);
      });
    });
    watch(() => props.present, async (present, prevPresent) => {
      if (!isClient) return;
      if (present === false && prevPresent === true) {
        focusScopesStack.remove(focusScope);
        return;
      }
      if (present !== true || prevPresent !== false) return;
      focusScopesStack.add(focusScope);
      await nextTick();
      const container = currentElement.value;
      if (!container) return;
      const previouslyFocusedElement = getActiveElement();
      if (!container.contains(previouslyFocusedElement)) dispatchMountAutoFocus(container, previouslyFocusedElement);
    });
    function handleKeyDown(event) {
      if (!props.loop && !props.trapped) return;
      if (focusScope.paused) return;
      const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
      const focusedElement = getActiveElement();
      if (isTabKey && focusedElement) {
        const container = event.currentTarget;
        const [first, last] = getTabbableEdges(container);
        if (!(first && last)) {
          if (focusedElement === container) event.preventDefault();
        } else if (!event.shiftKey && focusedElement === last) {
          event.preventDefault();
          if (props.loop) focus(first, { select: true });
        } else if (event.shiftKey && focusedElement === first) {
          event.preventDefault();
          if (props.loop) focus(last, { select: true });
        }
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        ref_key: "currentRef",
        ref: currentRef,
        tabindex: "-1",
        "as-child": __props.asChild,
        as: __props.as,
        onKeydown: handleKeyDown
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, ["as-child", "as"]);
    };
  }
});
function getOpenState(open) {
  return open ? "open" : "closed";
}
var DialogContentImpl_default = /* @__PURE__ */ defineComponent({
  __name: "DialogContentImpl",
  props: {
    forceMount: {
      type: Boolean,
      required: false
    },
    trapFocus: {
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
    },
    present: {
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
    const rootContext = injectDialogRootContext();
    const { forwardRef} = useForwardExpose();
    rootContext.titleId || (rootContext.titleId = useId$1(void 0, "reka-dialog-title"));
    rootContext.descriptionId || (rootContext.descriptionId = useId$1(void 0, "reka-dialog-description"));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(FocusScope_default), {
        "as-child": "",
        loop: "",
        trapped: props.trapFocus,
        present: props.present,
        onMountAutoFocus: _cache[5] || (_cache[5] = ($event) => emits("openAutoFocus", $event)),
        onUnmountAutoFocus: _cache[6] || (_cache[6] = ($event) => emits("closeAutoFocus", $event))
      }, {
        default: withCtx(() => [createVNode(unref(DismissableLayer_default), mergeProps({
          id: unref(rootContext).contentId,
          ref: unref(forwardRef),
          as: __props.as,
          "as-child": __props.asChild,
          present: props.present,
          "disable-outside-pointer-events": __props.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": unref(rootContext).descriptionId,
          "aria-labelledby": unref(rootContext).titleId,
          "data-state": unref(getOpenState)(unref(rootContext).open.value)
        }, _ctx.$attrs, {
          onDismiss: _cache[0] || (_cache[0] = ($event) => unref(rootContext).onOpenChange(false)),
          onEscapeKeyDown: _cache[1] || (_cache[1] = ($event) => emits("escapeKeyDown", $event)),
          onFocusOutside: _cache[2] || (_cache[2] = ($event) => emits("focusOutside", $event)),
          onInteractOutside: _cache[3] || (_cache[3] = ($event) => emits("interactOutside", $event)),
          onPointerDownOutside: _cache[4] || (_cache[4] = ($event) => emits("pointerDownOutside", $event))
        }), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16, [
          "id",
          "as",
          "as-child",
          "present",
          "disable-outside-pointer-events",
          "aria-describedby",
          "aria-labelledby",
          "data-state"
        ])]),
        _: 3
      }, 8, ["trapped", "present"]);
    };
  }
});
var DialogContentModal_default = /* @__PURE__ */ defineComponent({
  __name: "DialogContentModal",
  props: {
    forceMount: {
      type: Boolean,
      required: false
    },
    trapFocus: {
      type: Boolean,
      required: false
    },
    disableOutsidePointerEvents: {
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
      required: false
    },
    present: {
      type: Boolean,
      required: true
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
    const rootContext = injectDialogRootContext();
    const emitsAsProps = useEmitAsProps(emits);
    const { forwardRef, currentElement } = useForwardExpose();
    useHideOthers(computed(() => props.present ? currentElement.value : void 0));
    const forwardedProps = computed(() => {
      const { present: _, ...rest } = props;
      return rest;
    });
    watch(() => props.present, (isPresent, wasPresent) => {
      var _a;
      if (!isPresent && wasPresent) (_a = rootContext.triggerElement.value) == null ? void 0 : _a.focus();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(DialogContentImpl_default, mergeProps({
        ...forwardedProps.value,
        ...unref(emitsAsProps)
      }, {
        ref: unref(forwardRef),
        present: __props.present,
        "trap-focus": unref(rootContext).open.value,
        "disable-outside-pointer-events": props.disableOutsidePointerEvents,
        onCloseAutoFocus: _cache[0] || (_cache[0] = (event) => {
          var _a;
          if (!event.defaultPrevented) {
            event.preventDefault();
            (_a = unref(rootContext).triggerElement.value) == null ? void 0 : _a.focus();
          }
        }),
        onPointerDownOutside: _cache[1] || (_cache[1] = (event) => {
          const originalEvent = event.detail.originalEvent;
          const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
          if (originalEvent.button === 2 || ctrlLeftClick) event.preventDefault();
        }),
        onFocusOutside: _cache[2] || (_cache[2] = (event) => {
          event.preventDefault();
        })
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, [
        "present",
        "trap-focus",
        "disable-outside-pointer-events"
      ]);
    };
  }
});
var DialogContentNonModal_default = /* @__PURE__ */ defineComponent({
  __name: "DialogContentNonModal",
  props: {
    forceMount: {
      type: Boolean,
      required: false
    },
    trapFocus: {
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
    },
    present: {
      type: Boolean,
      required: true
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
    const emitsAsProps = useEmitAsProps(__emit);
    useForwardExpose();
    const rootContext = injectDialogRootContext();
    const hasInteractedOutsideRef = ref(false);
    const hasPointerDownOutsideRef = ref(false);
    const forwardedProps = computed(() => {
      const { present: _, ...rest } = props;
      return rest;
    });
    watch(() => props.present, (isPresent, wasPresent) => {
      var _a;
      if (!isPresent && wasPresent) {
        if (!hasInteractedOutsideRef.value) (_a = rootContext.triggerElement.value) == null ? void 0 : _a.focus();
        hasInteractedOutsideRef.value = false;
        hasPointerDownOutsideRef.value = false;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(DialogContentImpl_default, mergeProps({
        ...forwardedProps.value,
        ...unref(emitsAsProps)
      }, {
        present: __props.present,
        "trap-focus": false,
        "disable-outside-pointer-events": false,
        onCloseAutoFocus: _cache[0] || (_cache[0] = (event) => {
          var _a;
          if (!event.defaultPrevented) {
            if (!hasInteractedOutsideRef.value) (_a = unref(rootContext).triggerElement.value) == null ? void 0 : _a.focus();
            event.preventDefault();
          }
          hasInteractedOutsideRef.value = false;
          hasPointerDownOutsideRef.value = false;
        }),
        onInteractOutside: _cache[1] || (_cache[1] = (event) => {
          var _a;
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
      }, 16, ["present"]);
    };
  }
});
var DialogContent_default = /* @__PURE__ */ defineComponent({
  __name: "DialogContent",
  props: {
    forceMount: {
      type: Boolean,
      required: false
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: false,
      default: void 0
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
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const rootContext = injectDialogRootContext();
    const emitsAsProps = useEmitAsProps(emits);
    const { forwardRef } = useForwardExpose();
    const staysMounted = computed(() => props.forceMount || !rootContext.unmountOnHide.value);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Presence_default), {
        present: unref(rootContext).open.value,
        "force-mount": staysMounted.value
      }, {
        default: withCtx(({ present }) => [unref(rootContext).modal.value ? withDirectives((openBlock(), createBlock(DialogContentModal_default, mergeProps({
          key: 0,
          ref: unref(forwardRef),
          present: staysMounted.value ? present : true
        }, {
          ...props,
          ...unref(emitsAsProps),
          ..._ctx.$attrs
        }), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16, ["present"])), [[vShow, __props.forceMount || unref(rootContext).unmountOnHide.value || present]]) : withDirectives((openBlock(), createBlock(DialogContentNonModal_default, mergeProps({
          key: 1,
          ref: unref(forwardRef),
          present: staysMounted.value ? present : true
        }, {
          ...props,
          ...unref(emitsAsProps),
          ..._ctx.$attrs
        }), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16, ["present"])), [[vShow, __props.forceMount || unref(rootContext).unmountOnHide.value || present]])]),
        _: 3
      }, 8, ["present", "force-mount"]);
    };
  }
});
var DialogDescription_default = /* @__PURE__ */ defineComponent({
  __name: "DialogDescription",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "p"
    }
  },
  setup(__props) {
    const props = __props;
    useForwardExpose();
    const rootContext = injectDialogRootContext();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps(props, { id: unref(rootContext).descriptionId }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, ["id"]);
    };
  }
});
var DialogOverlayImpl_default = /* @__PURE__ */ defineComponent({
  __name: "DialogOverlayImpl",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    },
    present: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup(__props) {
    const props = __props;
    const rootContext = injectDialogRootContext();
    const scrollLocked = useBodyScrollLock(props.present);
    watch(() => props.present, (val) => scrollLocked.value = val);
    useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        as: __props.as,
        "as-child": __props.asChild,
        "data-state": unref(rootContext).open.value ? "open" : "closed",
        style: { "pointer-events": "auto" },
        onPointerdown: _cache[0] || (_cache[0] = withModifiers(() => {
        }, [
          "left",
          "self",
          "prevent"
        ]))
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "data-state"
      ]);
    };
  }
});
var DialogOverlay_default = /* @__PURE__ */ defineComponent({
  __name: "DialogOverlay",
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
    const rootContext = injectDialogRootContext();
    const { forwardRef } = useForwardExpose();
    const staysMounted = computed(() => props.forceMount || !rootContext.unmountOnHide.value);
    return (_ctx, _cache) => {
      var _a;
      return ((_a = unref(rootContext)) == null ? void 0 : _a.modal.value) ? (openBlock(), createBlock(unref(Presence_default), {
        key: 0,
        present: unref(rootContext).open.value,
        "force-mount": staysMounted.value
      }, {
        default: withCtx(({ present }) => [withDirectives(createVNode(DialogOverlayImpl_default, mergeProps(_ctx.$attrs, {
          ref: unref(forwardRef),
          as: __props.as,
          "as-child": __props.asChild,
          present: staysMounted.value ? present : true
        }), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16, [
          "as",
          "as-child",
          "present"
        ]), [[vShow, __props.forceMount || unref(rootContext).unmountOnHide.value || present]])]),
        _: 3
      }, 8, ["present", "force-mount"])) : createCommentVNode("v-if", true);
    };
  }
});
var DialogPortal_default = /* @__PURE__ */ defineComponent({
  __name: "DialogPortal",
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
var DialogTitle_default = /* @__PURE__ */ defineComponent({
  __name: "DialogTitle",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "h2"
    }
  },
  setup(__props) {
    const props = __props;
    const rootContext = injectDialogRootContext();
    useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps(props, { id: unref(rootContext).titleId }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, ["id"]);
    };
  }
});
var DialogTrigger_default = /* @__PURE__ */ defineComponent({
  __name: "DialogTrigger",
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
    const rootContext = injectDialogRootContext();
    const { forwardRef} = useForwardExpose();
    rootContext.contentId || (rootContext.contentId = useId$1(void 0, "reka-dialog-content"));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
        ref: unref(forwardRef),
        type: __props.as === "button" ? "button" : void 0,
        "aria-haspopup": "dialog",
        "aria-expanded": unref(rootContext).open.value || false,
        "aria-controls": unref(rootContext).open.value ? unref(rootContext).contentId : void 0,
        "data-state": unref(rootContext).open.value ? "open" : "closed",
        onClick: unref(rootContext).onOpenToggle
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, [
        "type",
        "aria-expanded",
        "aria-controls",
        "data-state",
        "onClick"
      ]);
    };
  }
});
function pointerDownOutside(e, options = {}) {
  const originalEvent = e.detail.originalEvent;
  const target = originalEvent.target;
  if (!(target == null ? void 0 : target.isConnected)) {
    e.preventDefault();
    return;
  }
  if (options.scrollable) {
    if (originalEvent.offsetX > target.clientWidth || originalEvent.offsetY > target.clientHeight) e.preventDefault();
  }
}
var virtual_nuxt__nuxt_2Fui_2Fmodal_default = {
  "slots": {
    "overlay": "fixed inset-0",
    "content": "bg-default divide-y divide-default flex flex-col focus:outline-none",
    "header": "flex items-center gap-1.5 p-4 sm:px-6 min-h-(--ui-header-height)",
    "wrapper": "",
    "body": "flex-1 p-4 sm:p-6",
    "footer": "flex items-center gap-1.5 p-4 sm:px-6",
    "title": "text-highlighted font-semibold",
    "description": "mt-1 text-muted text-sm",
    "close": "absolute top-4 end-4"
  },
  "variants": {
    "transition": { "true": {
      "overlay": "data-[state=open]:animate-[fade-in_200ms_var(--ease-out)] data-[state=closed]:animate-[fade-out_200ms_var(--ease-out)]",
      "content": "data-[state=open]:animate-[scale-in_200ms_var(--ease-out)] data-[state=closed]:animate-[scale-out_200ms_var(--ease-out)]"
    } },
    "fullscreen": {
      "true": { "content": "inset-0" },
      "false": { "content": "w-[calc(100vw-2rem)] max-w-lg rounded-lg shadow-lg ring ring-default" }
    },
    "overlay": { "true": { "overlay": "bg-elevated/75" } },
    "scrollable": {
      "true": {
        "overlay": "overflow-y-auto",
        "content": "relative"
      },
      "false": {
        "content": "fixed",
        "body": "overflow-y-auto"
      }
    }
  },
  "compoundVariants": [{
    "scrollable": true,
    "fullscreen": false,
    "class": { "overlay": "grid place-items-center p-4 sm:py-8" }
  }, {
    "scrollable": false,
    "fullscreen": false,
    "class": { "content": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-4rem)] overflow-hidden" }
  }]
};
var Modal_exports = /* @__PURE__ */ __exportAll({ default: () => _sfc_main });
var _sfc_main = {
  __name: "UModal",
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
    scrollable: {
      type: Boolean,
      required: false
    },
    transition: {
      type: Boolean,
      required: false,
      default: true
    },
    fullscreen: {
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
    const props = useComponentProps("modal", _props);
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
      return { pointerDownOutside: (e) => pointerDownOutside(e, { scrollable: props.scrollable }) };
    });
    const [DefineContentTemplate, ReuseContentTemplate] = createReusableTemplate();
    const ui = computed(() => {
      var _a;
      return tv({
        extend: virtual_nuxt__nuxt_2Fui_2Fmodal_default,
        ...((_a = appConfig.ui) == null ? void 0 : _a.modal) || {}
      })({
        transition: props.transition,
        fullscreen: props.fullscreen,
        overlay: props.overlay,
        scrollable: props.scrollable
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogRoot_default), mergeProps(unref(rootProps), _attrs), {
        default: withCtx(({ open, close }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(DefineContentTemplate), null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) _push3(ssrRenderComponent(unref(DialogContent_default), mergeProps({
                  "data-slot": "content",
                  class: ui.value.content({ class: [!slots.default && unref(props).class, (_a = unref(props).ui) == null ? void 0 : _a.content] })
                }, contentProps.value, {
                  onEnter: ($event) => !unref(props).scrollable && emits("enter"),
                  onAfterEnter: ($event) => !unref(props).scrollable && emits("after:enter"),
                  onLeave: ($event) => !unref(props).scrollable && emits("leave"),
                  onAfterLeave: ($event) => !unref(props).scrollable && emits("after:leave")
                }, toHandlers(contentEvents.value)), {
                  default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      if (!unref(props).title && !slots.title || !unref(props).description && !slots.description || !!slots.content) _push4(ssrRenderComponent(unref(VisuallyHidden_default), null, {
                        default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            if (!unref(props).title && !slots.title) _push5(ssrRenderComponent(unref(DialogTitle_default), null, null, _parent5, _scopeId4));
                            else if (!!slots.content) _push5(ssrRenderComponent(unref(DialogTitle_default), null, {
                              default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                if (_push6) ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                  _push6(`${ssrInterpolate(unref(props).title)}`);
                                }, _push6, _parent6, _scopeId5);
                                else return [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])];
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                            else _push5(`<!---->`);
                            if (!unref(props).description && !slots.description) _push5(ssrRenderComponent(unref(DialogDescription_default), null, null, _parent5, _scopeId4));
                            else if (!!slots.content) _push5(ssrRenderComponent(unref(DialogDescription_default), null, {
                              default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                if (_push6) ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                  _push6(`${ssrInterpolate(unref(props).description)}`);
                                }, _push6, _parent6, _scopeId5);
                                else return [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])];
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                            else _push5(`<!---->`);
                          } else return [!unref(props).title && !slots.title ? (openBlock(), createBlock(unref(DialogTitle_default), { key: 0 })) : !!slots.content ? (openBlock(), createBlock(unref(DialogTitle_default), { key: 1 }, {
                            default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
                            _: 3
                          })) : createCommentVNode("", true), !unref(props).description && !slots.description ? (openBlock(), createBlock(unref(DialogDescription_default), { key: 2 })) : !!slots.content ? (openBlock(), createBlock(unref(DialogDescription_default), { key: 3 }, {
                            default: withCtx(() => [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])]),
                            _: 3
                          })) : createCommentVNode("", true)];
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                      else _push4(`<!---->`);
                      ssrRenderSlot(_ctx.$slots, "content", { close }, () => {
                        var _a2, _b2, _c;
                        if (!!slots.header || unref(props).title || !!slots.title || unref(props).description || !!slots.description || unref(props).close || !!slots.close) {
                          _push4(`<div data-slot="header" class="${ssrRenderClass(ui.value.header({ class: (_a2 = unref(props).ui) == null ? void 0 : _a2.header }))}"${_scopeId3}>`);
                          ssrRenderSlot(_ctx.$slots, "header", { close }, () => {
                            var _a3, _b3, _c2;
                            if (unref(props).title || !!slots.title || unref(props).description || !!slots.description) {
                              _push4(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: (_a3 = unref(props).ui) == null ? void 0 : _a3.wrapper }))}"${_scopeId3}>`);
                              if (unref(props).title || !!slots.title) _push4(ssrRenderComponent(unref(DialogTitle_default), {
                                "data-slot": "title",
                                class: ui.value.title({ class: (_b3 = unref(props).ui) == null ? void 0 : _b3.title })
                              }, {
                                default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                  if (_push5) ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                    _push5(`${ssrInterpolate(unref(props).title)}`);
                                  }, _push5, _parent5, _scopeId4);
                                  else return [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])];
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              else _push4(`<!---->`);
                              if (unref(props).description || !!slots.description) _push4(ssrRenderComponent(unref(DialogDescription_default), {
                                "data-slot": "description",
                                class: ui.value.description({ class: (_c2 = unref(props).ui) == null ? void 0 : _c2.description })
                              }, {
                                default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                  if (_push5) ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                    _push5(`${ssrInterpolate(unref(props).description)}`);
                                  }, _push5, _parent5, _scopeId4);
                                  else return [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])];
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              else _push4(`<!---->`);
                              _push4(`</div>`);
                            } else _push4(`<!---->`);
                            ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push4, _parent4, _scopeId3);
                            if (unref(props).close || !!slots.close) _push4(ssrRenderComponent(unref(DialogClose_default), { "as-child": "" }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) ssrRenderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                  var _a4;
                                  if (unref(props).close) _push5(ssrRenderComponent(_sfc_main$1, mergeProps({
                                    icon: unref(props).closeIcon || unref(appConfig).ui.icons.close,
                                    color: "neutral",
                                    variant: "ghost",
                                    "aria-label": unref(t)("modal.close")
                                  }, typeof unref(props).close === "object" ? unref(props).close : {}, {
                                    "data-slot": "close",
                                    class: ui.value.close({ class: (_a4 = unref(props).ui) == null ? void 0 : _a4.close })
                                  }), null, _parent5, _scopeId4));
                                  else _push5(`<!---->`);
                                }, _push5, _parent5, _scopeId4);
                                else return [renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                  var _a4;
                                  return [unref(props).close ? (openBlock(), createBlock(_sfc_main$1, mergeProps({
                                    key: 0,
                                    icon: unref(props).closeIcon || unref(appConfig).ui.icons.close,
                                    color: "neutral",
                                    variant: "ghost",
                                    "aria-label": unref(t)("modal.close")
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
                            }, _parent4, _scopeId3));
                            else _push4(`<!---->`);
                          }, _push4, _parent4, _scopeId3);
                          _push4(`</div>`);
                        } else _push4(`<!---->`);
                        if (!!slots.body) {
                          _push4(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: (_b2 = unref(props).ui) == null ? void 0 : _b2.body }))}"${_scopeId3}>`);
                          ssrRenderSlot(_ctx.$slots, "body", { close }, null, _push4, _parent4, _scopeId3);
                          _push4(`</div>`);
                        } else _push4(`<!---->`);
                        if (!!slots.footer) {
                          _push4(`<div data-slot="footer" class="${ssrRenderClass(ui.value.footer({ class: (_c = unref(props).ui) == null ? void 0 : _c.footer }))}"${_scopeId3}>`);
                          ssrRenderSlot(_ctx.$slots, "footer", { close }, null, _push4, _parent4, _scopeId3);
                          _push4(`</div>`);
                        } else _push4(`<!---->`);
                      }, _push4, _parent4, _scopeId3);
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
                                  "aria-label": unref(t)("modal.close")
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
                        !!slots.body ? (openBlock(), createBlock("div", {
                          key: 1,
                          "data-slot": "body",
                          class: ui.value.body({ class: (_b2 = unref(props).ui) == null ? void 0 : _b2.body })
                        }, [renderSlot(_ctx.$slots, "body", { close })], 2)) : createCommentVNode("", true),
                        !!slots.footer ? (openBlock(), createBlock("div", {
                          key: 2,
                          "data-slot": "footer",
                          class: ui.value.footer({ class: (_c = unref(props).ui) == null ? void 0 : _c.footer })
                        }, [renderSlot(_ctx.$slots, "footer", { close })], 2)) : createCommentVNode("", true)
                      ];
                    })];
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                else return [createVNode(unref(DialogContent_default), mergeProps({
                  "data-slot": "content",
                  class: ui.value.content({ class: [!slots.default && unref(props).class, (_b = unref(props).ui) == null ? void 0 : _b.content] })
                }, contentProps.value, {
                  onEnter: ($event) => !unref(props).scrollable && emits("enter"),
                  onAfterEnter: ($event) => !unref(props).scrollable && emits("after:enter"),
                  onLeave: ($event) => !unref(props).scrollable && emits("leave"),
                  onAfterLeave: ($event) => !unref(props).scrollable && emits("after:leave")
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
                                "aria-label": unref(t)("modal.close")
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
                      !!slots.body ? (openBlock(), createBlock("div", {
                        key: 1,
                        "data-slot": "body",
                        class: ui.value.body({ class: (_b2 = unref(props).ui) == null ? void 0 : _b2.body })
                      }, [renderSlot(_ctx.$slots, "body", { close })], 2)) : createCommentVNode("", true),
                      !!slots.footer ? (openBlock(), createBlock("div", {
                        key: 2,
                        "data-slot": "footer",
                        class: ui.value.footer({ class: (_c = unref(props).ui) == null ? void 0 : _c.footer })
                      }, [renderSlot(_ctx.$slots, "footer", { close })], 2)) : createCommentVNode("", true)
                    ];
                  })]),
                  _: 2
                }, 1040, [
                  "class",
                  "onEnter",
                  "onAfterEnter",
                  "onLeave",
                  "onAfterLeave"
                ])];
              }),
              _: 2
            }, _parent2, _scopeId));
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
                      if (unref(props).scrollable) _push4(ssrRenderComponent(unref(DialogOverlay_default), {
                        "data-slot": "overlay",
                        class: ui.value.overlay({ class: (_a = unref(props).ui) == null ? void 0 : _a.overlay }),
                        onEnter: ($event) => emits("enter"),
                        onAfterEnter: ($event) => emits("after:enter"),
                        onLeave: ($event) => emits("leave"),
                        onAfterLeave: ($event) => emits("after:leave")
                      }, {
                        default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                          if (_push5) _push5(ssrRenderComponent(unref(ReuseContentTemplate), null, null, _parent5, _scopeId4));
                          else return [createVNode(unref(ReuseContentTemplate))];
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                      else {
                        _push4(`<!--[-->`);
                        if (unref(props).overlay) _push4(ssrRenderComponent(unref(DialogOverlay_default), {
                          "data-slot": "overlay",
                          class: ui.value.overlay({ class: (_b = unref(props).ui) == null ? void 0 : _b.overlay })
                        }, null, _parent4, _scopeId3));
                        else _push4(`<!---->`);
                        _push4(ssrRenderComponent(unref(ReuseContentTemplate), null, null, _parent4, _scopeId3));
                        _push4(`<!--]-->`);
                      }
                    } else return [unref(props).scrollable ? (openBlock(), createBlock(unref(DialogOverlay_default), {
                      key: 0,
                      "data-slot": "overlay",
                      class: ui.value.overlay({ class: (_c = unref(props).ui) == null ? void 0 : _c.overlay }),
                      onEnter: ($event) => emits("enter"),
                      onAfterEnter: ($event) => emits("after:enter"),
                      onLeave: ($event) => emits("leave"),
                      onAfterLeave: ($event) => emits("after:leave")
                    }, {
                      default: withCtx(() => [createVNode(unref(ReuseContentTemplate))]),
                      _: 1
                    }, 8, [
                      "class",
                      "onEnter",
                      "onAfterEnter",
                      "onLeave",
                      "onAfterLeave"
                    ])) : (openBlock(), createBlock(Fragment, { key: 1 }, [unref(props).overlay ? (openBlock(), createBlock(unref(DialogOverlay_default), {
                      key: 0,
                      "data-slot": "overlay",
                      class: ui.value.overlay({ class: (_d = unref(props).ui) == null ? void 0 : _d.overlay })
                    }, null, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(ReuseContentTemplate))], 64))];
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                else return [createVNode(unref(FieldGroupReset), null, {
                  default: withCtx(() => {
                    var _a, _b;
                    return [unref(props).scrollable ? (openBlock(), createBlock(unref(DialogOverlay_default), {
                      key: 0,
                      "data-slot": "overlay",
                      class: ui.value.overlay({ class: (_a = unref(props).ui) == null ? void 0 : _a.overlay }),
                      onEnter: ($event) => emits("enter"),
                      onAfterEnter: ($event) => emits("after:enter"),
                      onLeave: ($event) => emits("leave"),
                      onAfterLeave: ($event) => emits("after:leave")
                    }, {
                      default: withCtx(() => [createVNode(unref(ReuseContentTemplate))]),
                      _: 1
                    }, 8, [
                      "class",
                      "onEnter",
                      "onAfterEnter",
                      "onLeave",
                      "onAfterLeave"
                    ])) : (openBlock(), createBlock(Fragment, { key: 1 }, [unref(props).overlay ? (openBlock(), createBlock(unref(DialogOverlay_default), {
                      key: 0,
                      "data-slot": "overlay",
                      class: ui.value.overlay({ class: (_b = unref(props).ui) == null ? void 0 : _b.overlay })
                    }, null, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(ReuseContentTemplate))], 64))];
                  }),
                  _: 1
                })];
              }),
              _: 2
            }, _parent2, _scopeId));
          } else return [
            createVNode(unref(DefineContentTemplate), null, {
              default: withCtx(() => {
                var _a;
                return [createVNode(unref(DialogContent_default), mergeProps({
                  "data-slot": "content",
                  class: ui.value.content({ class: [!slots.default && unref(props).class, (_a = unref(props).ui) == null ? void 0 : _a.content] })
                }, contentProps.value, {
                  onEnter: ($event) => !unref(props).scrollable && emits("enter"),
                  onAfterEnter: ($event) => !unref(props).scrollable && emits("after:enter"),
                  onLeave: ($event) => !unref(props).scrollable && emits("leave"),
                  onAfterLeave: ($event) => !unref(props).scrollable && emits("after:leave")
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
                    var _a2, _b, _c;
                    return [
                      !!slots.header || unref(props).title || !!slots.title || unref(props).description || !!slots.description || unref(props).close || !!slots.close ? (openBlock(), createBlock("div", {
                        key: 0,
                        "data-slot": "header",
                        class: ui.value.header({ class: (_a2 = unref(props).ui) == null ? void 0 : _a2.header })
                      }, [renderSlot(_ctx.$slots, "header", { close }, () => {
                        var _a3, _b2, _c2;
                        return [
                          unref(props).title || !!slots.title || unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
                            key: 0,
                            "data-slot": "wrapper",
                            class: ui.value.wrapper({ class: (_a3 = unref(props).ui) == null ? void 0 : _a3.wrapper })
                          }, [unref(props).title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle_default), {
                            key: 0,
                            "data-slot": "title",
                            class: ui.value.title({ class: (_b2 = unref(props).ui) == null ? void 0 : _b2.title })
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
                                "aria-label": unref(t)("modal.close")
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
                      !!slots.body ? (openBlock(), createBlock("div", {
                        key: 1,
                        "data-slot": "body",
                        class: ui.value.body({ class: (_b = unref(props).ui) == null ? void 0 : _b.body })
                      }, [renderSlot(_ctx.$slots, "body", { close })], 2)) : createCommentVNode("", true),
                      !!slots.footer ? (openBlock(), createBlock("div", {
                        key: 2,
                        "data-slot": "footer",
                        class: ui.value.footer({ class: (_c = unref(props).ui) == null ? void 0 : _c.footer })
                      }, [renderSlot(_ctx.$slots, "footer", { close })], 2)) : createCommentVNode("", true)
                    ];
                  })]),
                  _: 2
                }, 1040, [
                  "class",
                  "onEnter",
                  "onAfterEnter",
                  "onLeave",
                  "onAfterLeave"
                ])];
              }),
              _: 2
            }, 1024),
            !!slots.default ? (openBlock(), createBlock(unref(DialogTrigger_default), {
              key: 0,
              "as-child": "",
              class: unref(props).class
            }, {
              default: withCtx(() => [renderSlot(_ctx.$slots, "default", { open })]),
              _: 2
            }, 1032, ["class"])) : createCommentVNode("", true),
            createVNode(unref(DialogPortal_default), mergeProps(unref(portalProps), { "force-mount": unref(portalProps).disabled && unref(props).unmountOnHide === false || void 0 }), {
              default: withCtx(() => [createVNode(unref(FieldGroupReset), null, {
                default: withCtx(() => {
                  var _a, _b;
                  return [unref(props).scrollable ? (openBlock(), createBlock(unref(DialogOverlay_default), {
                    key: 0,
                    "data-slot": "overlay",
                    class: ui.value.overlay({ class: (_a = unref(props).ui) == null ? void 0 : _a.overlay }),
                    onEnter: ($event) => emits("enter"),
                    onAfterEnter: ($event) => emits("after:enter"),
                    onLeave: ($event) => emits("leave"),
                    onAfterLeave: ($event) => emits("after:leave")
                  }, {
                    default: withCtx(() => [createVNode(unref(ReuseContentTemplate))]),
                    _: 1
                  }, 8, [
                    "class",
                    "onEnter",
                    "onAfterEnter",
                    "onLeave",
                    "onAfterLeave"
                  ])) : (openBlock(), createBlock(Fragment, { key: 1 }, [unref(props).overlay ? (openBlock(), createBlock(unref(DialogOverlay_default), {
                    key: 0,
                    "data-slot": "overlay",
                    class: ui.value.overlay({ class: (_b = unref(props).ui) == null ? void 0 : _b.overlay })
                  }, null, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(ReuseContentTemplate))], 64))];
                }),
                _: 1
              })]),
              _: 1
            }, 16, ["force-mount"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Modal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { DialogTitle_default as a, DialogDescription_default as c, DismissableLayer_default as d, DialogClose_default as f, useBodyScrollLock as h, DialogTrigger_default as i, DialogContent_default as l, useHideOthers as m, _sfc_main as n, DialogPortal_default as o, DialogRoot_default as p, pointerDownOutside as r, DialogOverlay_default as s, Modal_exports as t, FocusScope_default as u };
//# sourceMappingURL=Modal-B3gTgqQa.mjs.map
