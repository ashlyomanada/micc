import { c as useRuntimeConfig, f as docsBase, l as asyncDataDefaults, p as prodReporters, s as useNuxtApp, t as useHead } from "./head-rFsGK3Ox.js";
import { E as createError, s as sanitizeTag } from "./utils-CdhFP_jx.js";
import { t as useAppConfig } from "./config-CAn_Nf-x.js";
import "./ready-C4lfWLOw.js";
import { defineProdDiagnostics } from "/Users/ccci/Project/node_modules/nostics/dist/index.mjs";
import { cloneVNode, computed, createElementBlock, defineComponent, getCurrentInstance, h, isRef, nextTick, onServerPrefetch, provide, queuePostFlushCb, ref, shallowRef, toRaw, toRef, toValue, unref } from "vue";
import { hash } from "/Users/ccci/Project/node_modules/ohash/dist/index.mjs";
import { Icon, getIcon, loadIcon } from "@iconify/vue";
import { getIconCSS } from "/Users/ccci/Project/node_modules/@iconify/utils/lib/css/icon.js";
// \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
// node_modules/@nuxt/icon/dist/runtime/components/css-cache.js
var MAX_SIZE = 1e3;
var cache = /* @__PURE__ */ new Map();
function isSameIcon(a, b) {
	const keys = Object.keys(a);
	return keys.length === Object.keys(b).length && keys.every((key) => Object.hasOwn(b, key) && a[key] === b[key]);
}
function getCachedIconCSS(icon, iconSelector, customise) {
	if (customise) return getIconCSS(icon, {
		iconSelector,
		format: "compressed",
		customise
	});
	const cached = cache.get(iconSelector);
	if (cached && isSameIcon(cached.icon, icon)) return cached.css;
	const css = getIconCSS(icon, {
		iconSelector,
		format: "compressed"
	});
	if (!cached && cache.size >= MAX_SIZE) cache.clear();
	cache.set(iconSelector, {
		icon: { ...icon },
		css
	});
	return css;
}
// node_modules/@nuxt/icon/dist/runtime/components/resolve-name.js
var HYPHEN = 45;
var sortedCollectionsCache = /* @__PURE__ */ new WeakMap();
function getSortedCollections(collections) {
	if (!collections) return [];
	const key = toRaw(collections);
	let sorted = sortedCollectionsCache.get(key);
	if (!sorted) {
		const sort = (source) => [...source].sort((a, b) => b.length - a.length);
		sorted = { value: sort(key) };
		sortedCollectionsCache.set(key, sorted);
	}
	return sorted.value;
}
function resolveName(name, options) {
	const bare = name.startsWith(options.cssSelectorPrefix) ? name.slice(options.cssSelectorPrefix.length) : name;
	const resolved = options.aliases?.[bare] || bare;
	if (!resolved.includes(":")) {
		const collection = getSortedCollections(options.collections).find((c) => resolved.charCodeAt(c.length) === HYPHEN && resolved.startsWith(c));
		return collection ? collection + ":" + resolved.slice(collection.length + 1) : resolved;
	}
	return resolved;
}
// node_modules/@nuxt/icon/dist/runtime/components/shared.js
async function loadIcon$1(name, timeout) {
	if (!name) return null;
	const _icon = getIcon(name);
	if (_icon) return _icon;
	let timeoutWarn;
	const load = loadIcon(name).catch(() => {
		console.warn(`[Icon] failed to load icon \`${name}\``);
		return null;
	});
	if (timeout > 0) await Promise.race([load, new Promise((resolve) => {
		timeoutWarn = setTimeout(() => {
			console.warn(`[Icon] loading icon \`${name}\` timed out after ${timeout}ms`);
			resolve();
		}, timeout);
	})]).finally(() => clearTimeout(timeoutWarn));
	else await load;
	return getIcon(name);
}
function useResolvedName(getName) {
	const options = useAppConfig().icon;
	return computed(() => resolveName(getName(), options));
}
function resolveCustomizeFn(customize, globalCustomize) {
	if (customize === false) return void 0;
	if (customize === true || customize === null) return globalCustomize;
	return customize;
}
// node_modules/@nuxt/icon/dist/runtime/components/css.js
var SYMBOL_SERVER_CSS = "NUXT_ICONS_SERVER_CSS";
function escapeCssSelector(selector) {
	return selector.replace(/([^\w-])/g, "\\$1");
}
var NuxtIconCss = /* @__PURE__ */ defineComponent({
	name: "NuxtIconCss",
	props: {
		name: {
			type: String,
			required: true
		},
		customize: {
			type: [
				Function,
				Boolean,
				null
			],
			default: null,
			required: false
		}
	},
	setup(props) {
		const nuxt = useNuxtApp();
		const options = useAppConfig().icon;
		const cssClass = computed(() => {
			if (!props.name) return "";
			const base = options.cssSelectorPrefix + props.name;
			if (typeof props.customize === "function") return base + "--customized-" + hash(props.customize.toString());
			return base;
		});
		const selector = computed(() => "." + escapeCssSelector(cssClass.value));
		function getCSS(icon, withLayer = true, iconSelector = selector.value) {
			if (options.cssWherePseudo) iconSelector = `:where(${iconSelector})`;
			const css = getCachedIconCSS(icon, iconSelector, resolveCustomizeFn(props.customize, options.customize));
			if (options.cssLayer && withLayer) return `@layer ${options.cssLayer} { ${css} }`;
			return css;
		}
		onServerPrefetch(async () => {
			if (!(useRuntimeConfig().icon || {})?.serverKnownCssClasses?.includes(cssClass.value)) {
				const icon = await loadIcon$1(props.name, options.fetchTimeout).catch(() => null);
				if (!icon) return null;
				let ssrCSS = nuxt.vueApp._context.provides[SYMBOL_SERVER_CSS];
				if (!ssrCSS) {
					ssrCSS = nuxt.vueApp._context.provides[SYMBOL_SERVER_CSS] = /* @__PURE__ */ new Map();
					nuxt.runWithContext(() => {
						useHead({ style: [() => {
							const sep = "";
							let css = Array.from(ssrCSS.values()).sort().join(sep);
							if (options.cssLayer) css = `@layer ${options.cssLayer} {${sep}${css}${sep}}`;
							return { innerHTML: css };
						}] }, { tagPriority: "low" });
					});
				}
				if (cssClass.value && !ssrCSS.has(cssClass.value)) {
					const css = getCSS(icon, false);
					ssrCSS.set(cssClass.value, css);
				}
				return null;
			}
		});
		return () => h("span", { class: ["iconify", cssClass.value] });
	}
});
// node_modules/nuxt/dist/app/utils/debounce-tick.js
/**
* Debounce an async function so that repeated calls within the same tick are
* collapsed into a single call (plus a trailing call if arguments arrived
* while the debounced call was still pending).
*
* Adapted from https://github.com/unjs/perfect-debounce with the timeout
* replaced by Vue's post-flush callback queue.
*/
function debounceTick(fn, options = {}) {
	let leadingValue;
	let active = false;
	let resolveList = [];
	let currentPromise;
	let trailingArgs;
	const applyFn = (_this, args) => {
		const promise = _applyPromised(fn, _this, args);
		currentPromise = promise;
		promise.finally(() => {
			currentPromise = void 0;
			if (trailingArgs && !active) {
				const args = trailingArgs;
				trailingArgs = void 0;
				applyFn(_this, args);
			}
		});
		return promise;
	};
	return function(...args) {
		trailingArgs = args;
		if (currentPromise) return currentPromise;
		return new Promise((resolve) => {
			const shouldCallNow = options.leading && !active;
			if (!active) {
				active = true;
				queuePostFlushCb(() => {
					active = false;
					const flushArgs = trailingArgs ?? args;
					trailingArgs = void 0;
					const promise = options.leading ? leadingValue : applyFn(this, flushArgs);
					for (const _resolve of resolveList) _resolve(promise);
					resolveList = [];
				});
			}
			if (shouldCallNow) {
				leadingValue = applyFn(this, args);
				resolve(leadingValue);
			} else resolveList.push(resolve);
		});
	};
}
async function _applyPromised(fn, _this, args) {
	return await fn.apply(_this, args);
}
defineComponent({
	name: "ServerPlaceholder",
	render() {
		return createElementBlock("div");
	}
});
// node_modules/nuxt/dist/app/components/client-only.js
var clientOnlySymbol = Symbol.for("nuxt:client-only");
defineComponent({
	name: "ClientOnly",
	inheritAttrs: false,
	props: [
		"fallback",
		"placeholder",
		"placeholderTag",
		"fallbackTag"
	],
	setup(props, { slots, attrs }) {
		const mounted = shallowRef(false);
		const vm = getCurrentInstance();
		if (vm) vm._nuxtClientOnly = true;
		provide(clientOnlySymbol, true);
		return () => {
			if (mounted.value) {
				const vnodes = slots.default?.();
				if (vnodes && vnodes.length === 1 && true) return [cloneVNode(vnodes[0], attrs)];
				return vnodes;
			}
			const slot = slots.fallback || slots.placeholder;
			if (slot) return h(slot);
			const fallbackStr = props.fallback || props.placeholder || "";
			const fallbackTag = sanitizeTag(props.fallbackTag || props.placeholderTag, "span");
			return createElementBlock(fallbackTag, attrs, fallbackStr);
		};
	}
});
// node_modules/nuxt/dist/app/diagnostics/data.js
/**
* E3xxx
* Data fetching (useFetch / useAsyncData) runtime diagnostics.
*/
var dataDiagnostics = /* #__PURE__ */ defineProdDiagnostics({
	docsBase,
	reporters: prodReporters
});
// node_modules/nuxt/dist/app/composables/asyncData.js
/** @internal */
function _createUseAsyncData(options = {}) {
	{
		function useAsyncData(...args) {
			const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
			if (_isAutoKeyNeeded(args[0], args[1])) args.unshift(autoKey);
			let [_key, _handler, opts = {}] = args;
			const key = isRef(_key) || typeof _key === "function" ? computed(() => toValue(_key)) : { value: _key };
			if (!key.value || typeof key.value !== "string") throw dataDiagnostics.NUXT_E3008();
			if (typeof _handler !== "function") throw dataDiagnostics.NUXT_E3009();
			const shouldFactoryOptionsOverride = typeof options === "function";
			const nuxtApp = useNuxtApp();
			const factoryOptions = shouldFactoryOptionsOverride ? options(opts) : options;
			if (!shouldFactoryOptionsOverride) for (const key in factoryOptions) {
				if (factoryOptions[key] === void 0) continue;
				if (opts[key] !== void 0) continue;
				opts[key] = factoryOptions[key];
			}
			opts.server ??= true;
			opts.default ??= getDefault;
			opts.getCachedData ??= getDefaultCachedData;
			opts.lazy ??= false;
			opts.immediate ??= true;
			opts.deep ??= asyncDataDefaults.deep;
			opts.dedupe ??= "cancel";
			opts.enabled ??= true;
			if (shouldFactoryOptionsOverride) for (const key in factoryOptions) {
				if (factoryOptions[key] === void 0) continue;
				opts[key] = factoryOptions[key];
			}
			nuxtApp._asyncData[key.value];
			function createInitialFetch() {
				const initialFetchOptions = {
					cause: "initial",
					dedupe: opts.dedupe
				};
				const existing = nuxtApp._asyncData[key.value];
				if (!existing?._init) {
					initialFetchOptions.cachedData = opts.getCachedData(key.value, nuxtApp, { cause: "initial" });
					nuxtApp._asyncData[key.value] = buildAsyncData(nuxtApp, key.value, _handler, opts, initialFetchOptions.cachedData);
					nuxtApp._asyncData[key.value]._initialCachedData = initialFetchOptions.cachedData;
				} else if (nuxtApp._asyncDataPromises[key.value]) initialFetchOptions.cachedData = existing._initialCachedData;
				return () => nuxtApp._asyncData[key.value].execute(initialFetchOptions);
			}
			const initialFetch = createInitialFetch();
			const asyncData = nuxtApp._asyncData[key.value];
			asyncData._deps++;
			const fetchOnServer = opts.server !== false && nuxtApp.payload.serverRendered;
			const isWithinVaporComponent = () => {
				return false;
			};
			if (fetchOnServer && opts.immediate) {
				const promise = initialFetch();
				if (getCurrentInstance() || isWithinVaporComponent()) onServerPrefetch(() => promise);
				else nuxtApp.hook("app:created", async () => {
					await promise;
				});
			}
			const asyncReturn = {
				data: writableComputedRef(() => nuxtApp._asyncData[key.value]?.data, !opts.deep),
				pending: writableComputedRef(() => nuxtApp._asyncData[key.value]?.pending),
				status: writableComputedRef(() => nuxtApp._asyncData[key.value]?.status),
				error: writableComputedRef(() => nuxtApp._asyncData[key.value]?.error),
				refresh: (...args) => {
					if (!nuxtApp._asyncData[key.value]?._init) return createInitialFetch()();
					return nuxtApp._asyncData[key.value].execute(...args);
				},
				execute: (...args) => asyncReturn.refresh(...args),
				clear: () => {
					const entry = nuxtApp._asyncData[key.value];
					if (entry?._abortController) try {
						entry._abortController.abort(new DOMException("AsyncData aborted by user.", "AbortError"));
					} finally {
						entry._abortController = void 0;
					}
					clearNuxtDataByKey(nuxtApp, key.value);
				}
			};
			const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key.value]).then(() => asyncReturn);
			Object.assign(asyncDataPromise, asyncReturn);
			Object.defineProperties(asyncDataPromise, {
				then: {
					enumerable: true,
					value: asyncDataPromise.then.bind(asyncDataPromise)
				},
				catch: {
					enumerable: true,
					value: asyncDataPromise.catch.bind(asyncDataPromise)
				},
				finally: {
					enumerable: true,
					value: asyncDataPromise.finally.bind(asyncDataPromise)
				}
			});
			return asyncDataPromise;
		}
		return useAsyncData;
	}
}
var useAsyncData = _createUseAsyncData();
function writableComputedRef(getter, shallow = false) {
	const forwardedRef = computed({
		get() {
			return getter()?.value;
		},
		set(value) {
			const ref = getter();
			if (ref) ref.value = value;
		}
	});
	if (shallow) forwardedRef.__v_isShallow = true;
	return forwardedRef;
}
/** @internal */
function _isAutoKeyNeeded(keyOrFetcher, fetcher) {
	if (typeof keyOrFetcher === "string") return false;
	if (typeof keyOrFetcher === "object" && keyOrFetcher !== null) return false;
	if (typeof keyOrFetcher === "function" && typeof fetcher === "function") return false;
	return true;
}
function clearNuxtDataByKey(nuxtApp, key) {
	delete nuxtApp.payload.data[key];
	delete nuxtApp.payload._errors[key];
	if (nuxtApp._asyncData[key]) {
		nuxtApp._asyncData[key].data.value = unref(nuxtApp._asyncData[key]._default());
		nuxtApp._asyncData[key].error.value = void 0;
		nuxtApp._asyncData[key].status.value = "idle";
		nuxtApp._asyncData[key]._initialCachedData = void 0;
	}
	delete nuxtApp._asyncDataPromises[key];
}
function pick(obj, keys) {
	const newObj = {};
	for (const key of keys) newObj[key] = obj[key];
	return newObj;
}
function buildAsyncData(nuxtApp, key, _handler, options, initialCachedData) {
	nuxtApp.payload._errors[key] ??= void 0;
	const hasCustomGetCachedData = options.getCachedData !== getDefaultCachedData;
	const handler = !import.meta.prerender || !nuxtApp.ssrContext?.["~sharedPrerenderCache"] ? _handler : (nuxtApp, options) => {
		const value = nuxtApp.ssrContext["~sharedPrerenderCache"].get(key);
		if (value) return value;
		const promise = Promise.resolve().then(() => nuxtApp.runWithContext(() => _handler(nuxtApp, options)));
		nuxtApp.ssrContext["~sharedPrerenderCache"].set(key, promise);
		return promise;
	};
	const _ref = options.deep ? ref : shallowRef;
	const hasCachedData = initialCachedData !== void 0;
	const unsubRefreshAsyncData = nuxtApp.hook("app:data:refresh", async (keys) => {
		if (!keys || keys.includes(key)) await asyncData.execute({ cause: "refresh:hook" });
	});
	const asyncData = {
		data: _ref(hasCachedData ? initialCachedData : options.default()),
		pending: computed(() => asyncData.status.value === "pending"),
		error: toRef(nuxtApp.payload._errors, key),
		status: shallowRef("idle"),
		execute: (...args) => {
			const [_opts, newValue = void 0] = args;
			const opts = _opts && newValue === void 0 && typeof _opts === "object" ? _opts : {};
			if (nuxtApp._asyncDataPromises[key]) {
				if ((opts.dedupe ?? options.dedupe) === "defer") return nuxtApp._asyncDataPromises[key];
			}
			{
				const cachedData = "cachedData" in opts ? opts.cachedData : options.getCachedData(key, nuxtApp, { cause: opts.cause ?? "refresh:manual" });
				if (cachedData !== void 0) {
					if (options.serialize !== false) nuxtApp.payload.data[key] = cachedData;
					asyncData.data.value = cachedData;
					asyncData.error.value = void 0;
					asyncData.status.value = "success";
					return Promise.resolve(cachedData);
				}
			}
			if (toValue(options.enabled) === false) return Promise.resolve(asyncData.data.value);
			if (asyncData._abortController) asyncData._abortController.abort(new DOMException("AsyncData request cancelled by deduplication", "AbortError"));
			asyncData._abortController = new AbortController();
			asyncData.status.value = "pending";
			const cleanupController = new AbortController();
			const promise = new Promise((resolve, reject) => {
				try {
					const timeout = opts.timeout ?? options.timeout;
					const mergedSignal = mergeAbortSignals([asyncData._abortController?.signal, opts?.signal], cleanupController.signal, timeout);
					if (mergedSignal.aborted) {
						const reason = mergedSignal.reason;
						reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
						return;
					}
					mergedSignal.addEventListener("abort", () => {
						const reason = mergedSignal.reason;
						reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
					}, {
						once: true,
						signal: cleanupController.signal
					});
					const ctx = { signal: mergedSignal };
					let run = () => Promise.resolve(handler(nuxtApp, ctx));
					if (options.middleware?.length) for (let i = options.middleware.length - 1; i >= 0; i--) {
						const middleware = options.middleware[i];
						const next = run;
						run = () => Promise.resolve(middleware(next, ctx));
					}
					return run().then(resolve, reject);
				} catch (err) {
					reject(err);
				}
			}).then(async (_result) => {
				if (nuxtApp._asyncDataPromises[key] !== promise) return;
				let result = _result;
				if (options.transform) result = await options.transform(_result);
				if (options.pick) result = pick(result, options.pick);
				if (options.serialize !== false) nuxtApp.payload.data[key] = result;
				asyncData.data.value = result;
				asyncData.error.value = void 0;
				asyncData.status.value = "success";
			}).catch((error) => {
				if (nuxtApp._asyncDataPromises[key] !== promise) return nuxtApp._asyncDataPromises[key];
				if (asyncData._abortController?.signal.aborted) return nuxtApp._asyncDataPromises[key];
				if (typeof DOMException !== "undefined" && error instanceof DOMException && error.name === "AbortError") {
					asyncData.status.value = "idle";
					return nuxtApp._asyncDataPromises[key];
				}
				asyncData.error.value = createError(error);
				asyncData.data.value = unref(options.default());
				asyncData.status.value = "error";
			}).finally(() => {
				cleanupController.abort();
				if (nuxtApp._asyncDataPromises[key] === promise) delete nuxtApp._asyncDataPromises[key];
			});
			nuxtApp._asyncDataPromises[key] = promise;
			return nuxtApp._asyncDataPromises[key];
		},
		_execute: debounceTick((...args) => asyncData.execute(...args)),
		_default: options.default,
		_deps: 0,
		_init: true,
		_hash: void 0,
		_off: () => {
			unsubRefreshAsyncData();
			if (nuxtApp._asyncData[key] !== asyncData) return;
			if (nuxtApp._asyncData[key]?._init) nuxtApp._asyncData[key]._init = false;
			if (nuxtApp._asyncDataPromises[key]) {
				asyncData._abortController?.abort(new DOMException("AsyncData request cancelled by unmount", "AbortError"));
				delete nuxtApp._asyncDataPromises[key];
				if (asyncData.status.value === "pending") asyncData.status.value = "idle";
			}
			if (!hasCustomGetCachedData) nextTick(() => {
				if (!nuxtApp._asyncData[key]?._init) {
					clearNuxtDataByKey(nuxtApp, key);
					asyncData.execute = () => Promise.resolve();
				}
			});
		}
	};
	return asyncData;
}
var getDefault = () => void 0;
var getDefaultCachedData = (key, nuxtApp, ctx) => {
	if (nuxtApp.isHydrating) return nuxtApp.payload.data[key];
	if (ctx.cause !== "refresh:manual" && ctx.cause !== "refresh:hook") return nuxtApp.static.data[key];
};
function mergeAbortSignals(signals, cleanupSignal, timeout) {
	const list = signals.filter((s) => !!s);
	if (typeof timeout === "number" && timeout >= 0) {
		const timeoutSignal = AbortSignal.timeout?.(timeout);
		if (timeoutSignal) list.push(timeoutSignal);
	}
	if (AbortSignal.any) return AbortSignal.any(list);
	const controller = new AbortController();
	for (const sig of list) if (sig.aborted) {
		const reason = sig.reason ?? new DOMException("Aborted", "AbortError");
		try {
			controller.abort(reason);
		} catch {
			controller.abort();
		}
		return controller.signal;
	}
	const onAbort = () => {
		const reason = list.find((s) => s.aborted)?.reason ?? new DOMException("Aborted", "AbortError");
		try {
			controller.abort(reason);
		} catch {
			controller.abort();
		}
	};
	for (const sig of list) sig.addEventListener?.("abort", onAbort, {
		once: true,
		signal: cleanupSignal
	});
	return controller.signal;
}
// node_modules/@nuxt/icon/dist/runtime/components/svg.js
var NuxtIconSvg = /* @__PURE__ */ defineComponent({
	name: "NuxtIconSvg",
	props: {
		name: {
			type: String,
			required: true
		},
		customize: {
			type: [
				Function,
				Boolean,
				null
			],
			default: null,
			required: false
		}
	},
	setup(props, { slots }) {
		useNuxtApp();
		const options = useAppConfig().icon;
		const name = useResolvedName(() => props.name);
		const storeKey = "i-" + name.value;
		if (name.value) onServerPrefetch(async () => {
			await useAsyncData(storeKey, async () => await loadIcon$1(name.value, options.fetchTimeout), { deep: false });
		});
		return () => h(Icon, {
			icon: name.value,
			ssr: true,
			customise: resolveCustomizeFn(props.customize, options.customize)
		}, slots);
	}
});
// node_modules/@nuxt/icon/dist/runtime/components/index.js
var components_exports = /* @__PURE__ */ __exportAll({ default: () => components_default });
var components_default = defineComponent({
	name: "NuxtIcon",
	props: {
		name: {
			type: String,
			required: true
		},
		mode: {
			type: String,
			required: false,
			default: null
		},
		size: {
			type: [Number, String],
			required: false,
			default: null
		},
		customize: {
			type: [
				Function,
				Boolean,
				null
			],
			default: null,
			required: false
		}
	},
	setup(props, { slots }) {
		const nuxtApp = useNuxtApp();
		const runtimeOptions = useAppConfig().icon;
		const name = useResolvedName(() => props.name);
		const component = computed(() => nuxtApp.vueApp?.component(name.value) || ((props.mode || runtimeOptions.mode) === "svg" ? NuxtIconSvg : NuxtIconCss));
		const style = computed(() => {
			const size = props.size || runtimeOptions.size;
			return size ? { fontSize: Number.isNaN(+size) ? size : size + "px" } : null;
		});
		return () => h(component.value, {
			...runtimeOptions.attrs,
			name: name.value,
			class: runtimeOptions.class,
			style: style.value,
			customize: props.customize
		}, slots);
	}
});
export { components_exports as n, __exportAll as r, components_default as t };

//# sourceMappingURL=components-DxzSx7d2.js.map