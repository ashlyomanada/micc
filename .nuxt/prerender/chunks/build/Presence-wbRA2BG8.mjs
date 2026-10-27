import { J as renderSlotFragments } from '../virtual/entry.mjs';
import { defineComponent, toRefs, ref, getCurrentInstance, h, watch, nextTick, computed } from 'file:///Users/ccci/Project/node_modules/vue/index.mjs';
import { unrefElement, defaultWindow } from 'file:///Users/ccci/Project/node_modules/@vueuse/core/dist/index.js';
import { isClient } from 'file:///Users/ccci/Project/node_modules/@vueuse/shared/dist/index.js';

function useStateMachine(initialState, machine) {
  const state = ref(initialState);
  function reducer(event) {
    var _a;
    return (_a = machine[state.value][event]) != null ? _a : state.value;
  }
  const dispatch = (event) => {
    state.value = reducer(event);
  };
  return {
    state,
    dispatch
  };
}
function usePresence(present, node) {
  var _a, _b;
  const stylesRef = ref({});
  const prevAnimationNameRef = ref("none");
  const prevPresentRef = ref(present);
  const initialState = present.value ? "mounted" : "unmounted";
  let timeoutId;
  const ownerWindow = (_b = (_a = node.value) == null ? void 0 : _a.ownerDocument.defaultView) != null ? _b : defaultWindow;
  const { state, dispatch } = useStateMachine(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: { MOUNT: "mounted" }
  });
  const dispatchCustomEvent = (name) => {
    var _a2;
    if (isClient) {
      const customEvent = new CustomEvent(name, {
        bubbles: false,
        cancelable: false
      });
      (_a2 = node.value) == null ? void 0 : _a2.dispatchEvent(customEvent);
    }
  };
  watch(present, async (currentPresent, prevPresent) => {
    var _a2;
    const hasPresentChanged = prevPresent !== currentPresent;
    await nextTick();
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.value;
      const currentAnimationName = getAnimationName(node.value);
      if (currentPresent) {
        dispatch("MOUNT");
        dispatchCustomEvent("enter");
        if (currentAnimationName === "none") dispatchCustomEvent("after-enter");
      } else if (currentAnimationName === "none" || currentAnimationName === "undefined" || ((_a2 = stylesRef.value) == null ? void 0 : _a2.display) === "none") {
        dispatch("UNMOUNT");
        dispatchCustomEvent("leave");
        dispatchCustomEvent("after-leave");
      } else if (prevPresent && prevAnimationName !== currentAnimationName) {
        dispatch("ANIMATION_OUT");
        dispatchCustomEvent("leave");
      } else {
        dispatch("UNMOUNT");
        dispatchCustomEvent("after-leave");
      }
    }
  }, { immediate: true });
  const handleAnimationEnd = (event) => {
    if (event.target !== node.value) return;
    const currentAnimationName = getAnimationName(node.value);
    const isCurrentAnimation = currentAnimationName.includes(CSS.escape(event.animationName));
    const directionName = state.value === "mounted" ? "enter" : "leave";
    if (isCurrentAnimation) {
      dispatchCustomEvent(`after-${directionName}`);
      dispatch("ANIMATION_END");
      if (!prevPresentRef.value) {
        const currentFillMode = node.value.style.animationFillMode;
        node.value.style.animationFillMode = "forwards";
        timeoutId = ownerWindow == null ? void 0 : ownerWindow.setTimeout(() => {
          var _a2;
          if (((_a2 = node.value) == null ? void 0 : _a2.style.animationFillMode) === "forwards") node.value.style.animationFillMode = currentFillMode;
        });
      }
    }
    if (currentAnimationName === "none") dispatch("ANIMATION_END");
  };
  const handleAnimationStart = (event) => {
    if (event.target === node.value) prevAnimationNameRef.value = getAnimationName(node.value);
  };
  watch(node, (newNode, oldNode) => {
    if (newNode) {
      stylesRef.value = getComputedStyle(newNode);
      newNode.addEventListener("animationstart", handleAnimationStart);
      newNode.addEventListener("animationcancel", handleAnimationEnd);
      newNode.addEventListener("animationend", handleAnimationEnd);
    } else {
      dispatch("ANIMATION_END");
      if (timeoutId !== void 0) ownerWindow == null ? void 0 : ownerWindow.clearTimeout(timeoutId);
      oldNode == null ? void 0 : oldNode.removeEventListener("animationstart", handleAnimationStart);
      oldNode == null ? void 0 : oldNode.removeEventListener("animationcancel", handleAnimationEnd);
      oldNode == null ? void 0 : oldNode.removeEventListener("animationend", handleAnimationEnd);
    }
  }, { immediate: true });
  watch(state, () => {
    const currentAnimationName = getAnimationName(node.value);
    prevAnimationNameRef.value = state.value === "mounted" ? currentAnimationName : "none";
  });
  return { isPresent: computed(() => ["mounted", "unmountSuspended"].includes(state.value)) };
}
function getAnimationName(node) {
  return node ? getComputedStyle(node).animationName || "none" : "none";
}
var Presence_default = /* @__PURE__ */ defineComponent({
  name: "Presence",
  props: {
    present: {
      type: Boolean,
      required: true
    },
    forceMount: { type: Boolean }
  },
  slots: {},
  setup(props, { slots, expose }) {
    var _a;
    const { present, forceMount } = toRefs(props);
    const node = ref();
    const { isPresent } = usePresence(present, node);
    expose({ present: isPresent });
    let children = slots.default({ present: isPresent.value });
    children = renderSlotFragments(children || []);
    const instance = getCurrentInstance();
    if (children && (children == null ? void 0 : children.length) > 1) {
      const componentName = ((_a = instance == null ? void 0 : instance.parent) == null ? void 0 : _a.type.name) ? `<${instance.parent.type.name} />` : "component";
      throw new Error([
        `Detected an invalid children for \`${componentName}\` for  \`Presence\` component.`,
        "",
        "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
        "You can apply a few solutions:",
        ["Provide a single child element so that `presence` directive attach correctly.", "Ensure the first child is an actual element instead of a raw text node or comment node."].map((line) => `  - ${line}`).join("\n")
      ].join("\n"));
    }
    return () => {
      if (forceMount.value || present.value || isPresent.value) return h(slots.default({ present: isPresent.value })[0], { ref: (v) => {
        const el = unrefElement(v);
        if (typeof (el == null ? void 0 : el.hasAttribute) === "undefined") return el;
        if (el == null ? void 0 : el.hasAttribute("data-reka-popper-content-wrapper")) node.value = el.firstElementChild;
        else node.value = el;
        return el;
      } });
      else return null;
    };
  }
});

export { Presence_default as P };
//# sourceMappingURL=Presence-wbRA2BG8.mjs.map
