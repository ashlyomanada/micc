import { n as virtual_nuxt__nuxt_2Fapp_config_default, t as useAppConfig } from "./config-CAn_Nf-x.js";
import { Comment, Fragment, camelize, cloneVNode, computed, defineComponent, getCurrentInstance, h, inject, mergeProps, provide, toHandlerKey, toRef, unref } from "vue";
import "/Users/ccci/Project/node_modules/ufo/dist/index.mjs";
import defu, { defu as defu$1 } from "/Users/ccci/Project/node_modules/defu/dist/defu.mjs";
import "/Users/ccci/Project/node_modules/ohash/dist/utils/index.mjs";
import { cnMerge, createTV } from "/Users/ccci/Project/node_modules/tailwind-variants/dist/index.js";
// node_modules/reka-ui/dist/shared/createContext.js
/**
* @param providerComponentName - The name(s) of the component(s) providing the context.
*
* There are situations where context can come from multiple components. In such cases, you might need to give an array of component names to provide your context, instead of just a single string.
*
* @param contextName The description for injection key symbol.
*/
function createContext(providerComponentName, contextName) {
	const symbolDescription = typeof providerComponentName === "string" && !contextName ? `${providerComponentName}Context` : contextName;
	const injectionKey = Symbol(symbolDescription);
	/**
	* @param fallback The context value to return if the injection fails.
	*
	* @throws When context injection failed and no fallback is specified.
	* This happens when the component injecting the context is not a child of the root component providing the context.
	*/
	const injectContext = (fallback) => {
		const context = inject(injectionKey, fallback);
		if (context) return context;
		if (context === null) return context;
		throw new Error(`Injection \`${injectionKey.toString()}\` not found. Component must be used within ${Array.isArray(providerComponentName) ? `one of the following components: ${providerComponentName.join(", ")}` : `\`${providerComponentName}\``}`);
	};
	const provideContext = (contextValue) => {
		provide(injectionKey, contextValue);
		return contextValue;
	};
	return [injectContext, provideContext];
}
// node_modules/reka-ui/dist/shared/renderSlotFragments.js
function renderSlotFragments(children) {
	if (!children) return [];
	return children.flatMap((child) => {
		if (child.type === Fragment) return renderSlotFragments(child.children);
		return [child];
	});
}
// node_modules/reka-ui/dist/shared/useEmitAsProps.js
/**
* The `useEmitAsProps` function is a TypeScript utility that converts emitted events into props for a
* Vue component.
*
* @template Name - The event name string union type.
* @template Fn - The emit function type.
*
* @param emit - The `emit` parameter is a function that is used to emit events from a component. It
*
* takes two parameters: `name` which is the name of the event to be emitted, and `...args` which are
* the arguments to be passed along with the event.
* @returns The function `useEmitAsProps` returns an object that maps event names to functions that
* call the `emit` function with the corresponding event name and arguments.
*/
function useEmitAsProps(emit) {
	const vm = getCurrentInstance();
	const events = vm?.type.emits;
	const result = {};
	if (!events?.length) console.warn(`No emitted event found. Please check component: ${vm?.type.__name}`);
	events?.forEach((ev) => {
		result[toHandlerKey(camelize(ev))] = (...arg) => emit(ev, ...arg);
	});
	return result;
}
// node_modules/reka-ui/dist/shared/useForwardProps.js
/**
* The `useForwardProps` function in TypeScript takes in a set of props and returns a computed value
* that combines default props with assigned props from the current instance.
* @param {T} props - The `props` parameter is an object that represents the props passed to a
* component.
* @returns computed value that combines the default props, preserved props, and assigned props.
*/
function useForwardProps$1(props) {
	const vm = getCurrentInstance();
	const defaultProps = Object.keys(vm?.type.props ?? {}).reduce((prev, curr) => {
		const defaultValue = (vm?.type.props[curr]).default;
		if (defaultValue !== void 0) prev[curr] = defaultValue;
		return prev;
	}, {});
	const refProps = toRef(props);
	return computed(() => {
		const preservedProps = {};
		const assignedProps = vm?.vnode.props ?? {};
		Object.keys(assignedProps).forEach((key) => {
			preservedProps[camelize(key)] = assignedProps[key];
		});
		return Object.keys({
			...defaultProps,
			...preservedProps
		}).reduce((prev, curr) => {
			if (refProps.value[curr] !== void 0) prev[curr] = refProps.value[curr];
			return prev;
		}, {});
	});
}
// node_modules/reka-ui/dist/Primitive/Slot.js
var Slot = /*#__PURE__*/ defineComponent({
	name: "PrimitiveSlot",
	inheritAttrs: false,
	setup(_, { attrs, slots }) {
		return () => {
			if (!slots.default) return null;
			const children = renderSlotFragments(slots.default());
			const firstNonCommentChildrenIndex = children.findIndex((child) => child.type !== Comment);
			if (firstNonCommentChildrenIndex === -1) return children;
			const firstNonCommentChildren = children[firstNonCommentChildrenIndex];
			delete firstNonCommentChildren.props?.ref;
			const mergedProps = firstNonCommentChildren.props ? mergeProps(attrs, firstNonCommentChildren.props) : attrs;
			const cloned = cloneVNode({
				...firstNonCommentChildren,
				props: {}
			}, mergedProps);
			if (children.length === 1) return cloned;
			children[firstNonCommentChildrenIndex] = cloned;
			return children;
		};
	}
});
// node_modules/reka-ui/dist/Primitive/Primitive.js
var SELF_CLOSING_TAGS = [
	"area",
	"img",
	"input"
];
var Primitive = /*#__PURE__*/ defineComponent({
	name: "Primitive",
	inheritAttrs: false,
	props: {
		asChild: {
			type: Boolean,
			default: false
		},
		as: {
			type: [String, Object],
			default: "div"
		}
	},
	setup(props, { attrs, slots }) {
		const asTag = props.asChild ? "template" : props.as;
		if (typeof asTag === "string" && SELF_CLOSING_TAGS.includes(asTag)) return () => h(asTag, attrs);
		if (asTag !== "template") return () => h(props.as, attrs, { default: slots.default });
		return () => h(Slot, attrs, { default: slots.default });
	}
});
// node_modules/@nuxt/ui/dist/runtime/utils/index.js
function omit(data, keys) {
	const result = { ...data };
	for (const key of keys) delete result[key];
	return result;
}
function get(object, path, defaultValue) {
	const keys = typeof path === "string" ? path.split(".") : path;
	let result = object;
	for (const key of keys) {
		if (result === void 0 || result === null) return defaultValue;
		result = result[key];
	}
	return result !== void 0 ? result : defaultValue;
}
function isArrayOfArray(item) {
	return Array.isArray(item[0]);
}
function mergeClasses(appConfigClass, propClass) {
	if (!appConfigClass && !propClass) return "";
	return [...Array.isArray(appConfigClass) ? appConfigClass : [appConfigClass], propClass].filter(Boolean);
}
function getSlotChildrenText(children) {
	return children.map((node) => {
		if (!node.children || typeof node.children === "string") return node.children || "";
		else if (Array.isArray(node.children)) return getSlotChildrenText(node.children);
		else if (node.children.default) return getSlotChildrenText(node.children.default());
	}).join("");
}
function resolveAs(as, defaults) {
	if (typeof as === "string" || typeof as === "function" || typeof as?.render === "function" || typeof as?.setup === "function") return {
		...defaults,
		root: as
	};
	return defu$1(as, defaults);
}
// node_modules/@nuxt/ui/dist/runtime/composables/useComponentProps.js
var [_injectThemeContext, provideThemeContext] = createContext("UTheme", "RootContext");
var defaultThemeContext = { defaults: computed(() => ({})) };
function injectThemeContext(fallback = defaultThemeContext) {
	return _injectThemeContext(fallback);
}
function camelCase(str) {
	return str.replace(/-(\w)/g, (_, c) => c.toUpperCase());
}
function kebabCase(str) {
	return str.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
}
function propIsDefined(vnode, prop) {
	if (!vnode || !vnode.props) return false;
	return vnode.props[camelCase(prop)] !== void 0 || vnode.props[kebabCase(prop)] !== void 0;
}
function useComponentProps(name, props) {
	const vm = getCurrentInstance();
	const { defaults } = injectThemeContext();
	const appConfig = useAppConfig();
	return new Proxy(props, {
		get(target, prop, receiver) {
			if (prop === "__v_isReactive") return true;
			if (prop === "__v_raw") return target;
			if (typeof prop === "string" && prop.startsWith("__v_")) return void 0;
			const raw = Reflect.get(target, prop, receiver);
			if (typeof prop !== "string") return raw;
			const themeEntry = name.includes(".") ? get(defaults.value, name) : defaults.value[name];
			if (prop === "ui") {
				const themeUi = themeEntry?.ui;
				if (!raw && !themeUi) return raw;
				return defu(raw ?? {}, themeUi ?? {});
			}
			if (prop === "class") {
				const themeClass = themeEntry?.class;
				if (themeClass === void 0) return raw;
				if (raw === void 0) return themeClass;
				return [themeClass, raw];
			}
			if (vm && propIsDefined(vm.vnode, prop)) return raw;
			const themeValue = themeEntry?.[prop];
			if (themeValue !== void 0) return themeValue;
			const appConfigValue = (name.includes(".") ? get(appConfig.ui ?? {}, name) : appConfig.ui?.[name])?.defaultVariants?.[prop];
			if (appConfigValue !== void 0) return appConfigValue;
			const propDef = vm?.type?.props?.[prop];
			if (propDef && Object.prototype.hasOwnProperty.call(propDef, "default")) return raw;
		},
		has: (t, p) => Reflect.has(t, p),
		ownKeys: (t) => Reflect.ownKeys(t),
		getOwnPropertyDescriptor: (t, p) => Reflect.getOwnPropertyDescriptor(t, p)
	});
}
// node_modules/@nuxt/ui/dist/runtime/composables/useForwardProps.js
function useForwardProps(source, emits) {
	const emitAsProps = emits ? useEmitAsProps(emits) : {};
	return computed(() => {
		const src = unref(source);
		const out = { ...emitAsProps };
		for (const key in src) {
			const value = src[key];
			if (value !== void 0) out[key] = value;
		}
		return out;
	});
}
// node_modules/@nuxt/ui/dist/runtime/utils/tv.js
var config = virtual_nuxt__nuxt_2Fapp_config_default.ui?.tv;
var baseTv = /* @__PURE__ */ createTV(config);
function findReplacer(value) {
	if (typeof value === "function") return value;
	if (Array.isArray(value)) for (let i = value.length - 1; i >= 0; i--) {
		const replacer = findReplacer(value[i]);
		if (replacer) return replacer;
	}
}
function plainClasses(value) {
	if (Array.isArray(value)) return value.flatMap((item) => plainClasses(item));
	if (typeof value === "function") return [];
	return [value];
}
function applyReplacer(replacer, slotProps, resolveDefaults) {
	return cnMerge(replacer(resolveDefaults()), ...plainClasses(slotProps.class), ...plainClasses(slotProps.className))(config) ?? "";
}
function isMemoizable(value, depth = 0) {
	if (value === void 0 || value === null) return true;
	const type = typeof value;
	if (type === "string" || type === "boolean") return true;
	if (type === "number") return Number.isFinite(value);
	if (Array.isArray(value)) {
		if (depth >= 4) return false;
		for (const item of value) if (!isMemoizable(item, depth + 1)) return false;
		return true;
	}
	return false;
}
function memoKey(slotProps) {
	const proto = Object.getPrototypeOf(slotProps);
	if (proto !== Object.prototype && proto !== null) return;
	for (const key of Object.keys(slotProps)) if (!isMemoizable(slotProps[key])) return;
	return JSON.stringify(slotProps);
}
function wrapSlots(slots) {
	const memo = /* @__PURE__ */ new Map();
	return new Proxy(slots, { get(target, key) {
		const slot = target[key];
		if (typeof slot !== "function") return slot;
		return (slotProps = {}) => {
			const replacer = findReplacer(slotProps.class) ?? findReplacer(slotProps.className);
			if (!replacer) {
				const cacheKey = memoKey(slotProps);
				if (cacheKey === void 0) return slot(slotProps);
				let cache = memo.get(key);
				if (!cache) {
					cache = /* @__PURE__ */ new Map();
					memo.set(key, cache);
				}
				let result = cache.get(cacheKey);
				if (result === void 0 && !cache.has(cacheKey)) {
					if (cache.size >= 500) cache.clear();
					result = slot(slotProps);
					cache.set(cacheKey, result);
				}
				return result;
			}
			return applyReplacer(replacer, slotProps, () => slot({
				...slotProps,
				class: void 0,
				className: void 0
			}));
		};
	} });
}
function defaultClasses(value) {
	return cnMerge(value)(config) ?? "";
}
function resolveReplacers(componentConfig) {
	if (!componentConfig || typeof componentConfig !== "object") return componentConfig;
	const slots = componentConfig.slots;
	const replacers = slots && typeof slots === "object" ? Object.entries(slots).filter((entry) => typeof entry[1] === "function") : [];
	const baseReplacer = typeof componentConfig.base === "function" ? componentConfig.base : void 0;
	if (!replacers.length && !baseReplacer) return componentConfig;
	const extend = componentConfig.extend;
	const resolved = { ...componentConfig };
	let extendSlots;
	let blankExtendBase = false;
	if (baseReplacer) {
		resolved.base = baseReplacer(defaultClasses(extend?.slots?.base ?? extend?.base));
		if (extend?.slots?.base) {
			extendSlots ??= { ...extend.slots };
			extendSlots.base = "";
		}
		if (extend?.base) blankExtendBase = true;
	}
	if (replacers.length) {
		const cleaned = { ...slots };
		for (const [slot, replacer] of replacers) {
			cleaned[slot] = replacer(defaultClasses(extend?.slots?.[slot]));
			if (extend?.slots?.[slot]) {
				extendSlots ??= { ...extend.slots };
				extendSlots[slot] = "";
			}
		}
		resolved.slots = cleaned;
	}
	if (extendSlots || blankExtendBase) {
		const cleanedExtend = { ...extend };
		if (extendSlots) cleanedExtend.slots = extendSlots;
		if (blankExtendBase) cleanedExtend.base = "";
		resolved.extend = cleanedExtend;
	}
	return resolved;
}
var tv = ((componentConfig) => {
	const component = baseTv(resolveReplacers(componentConfig));
	return new Proxy(component, { apply(target, thisArg, args) {
		const result = Reflect.apply(target, thisArg, args);
		if (result && typeof result === "object") return wrapSlots(result);
		if (typeof result === "string") {
			const slotProps = args[0] ?? {};
			const replacer = findReplacer(slotProps.class) ?? findReplacer(slotProps.className);
			if (replacer) return applyReplacer(replacer, slotProps, () => Reflect.apply(target, thisArg, [{
				...slotProps,
				class: void 0,
				className: void 0
			}]));
		}
		return result;
	} });
});
export { getSlotChildrenText as a, omit as c, Slot as d, useForwardProps$1 as f, createContext as h, get as i, resolveAs as l, renderSlotFragments as m, useForwardProps as n, isArrayOfArray as o, useEmitAsProps as p, useComponentProps as r, mergeClasses as s, tv as t, Primitive as u };

//# sourceMappingURL=tv-CMuosA3a.js.map