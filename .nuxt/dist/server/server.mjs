import { c as useRuntimeConfig, f as docsBase, i as createNuxtApp, o as defineNuxtPlugin, p as prodReporters, r as applyPlugins, s as useNuxtApp, t as useHead } from "./_nuxt/head-rFsGK3Ox.js";
import { D as isNuxtError, E as createError$2, T as toArray$1, _ as useRouter, a as isChangingPage, b as LayoutSymbol, c as useRoute$1, d as useError, f as defineNuxtRouteMiddleware, g as useRoute, i as _wrapInTransition, l as _showErrorUnlessCrawler, m as navigateTo, n as _mergeTransitionProps, r as _startTransition, t as _finishTransition, u as showError, v as navigationDiagnostics, x as PageRouteSymbol, y as LayoutMetaSymbol } from "./_nuxt/utils-CdhFP_jx.js";
import { t as useAppConfig } from "./_nuxt/config-CAn_Nf-x.js";
import { c as omit, d as Slot, f as useForwardProps$1, h as createContext, i as get, n as useForwardProps, r as useComponentProps, t as tv, u as Primitive } from "./_nuxt/tv-CMuosA3a.js";
import { t as getActiveElement } from "./_nuxt/getActiveElement-JZTLhsol.js";
import { n as injectConfigProviderContext, t as ConfigProvider_default } from "./_nuxt/ConfigProvider-CpCHo4QI.js";
import { t as useForwardExpose } from "./_nuxt/useForwardExpose-CrVBNDxY.js";
import { defineProdDiagnostics } from "/Users/ccci/Project/node_modules/nostics/dist/index.mjs";
import { executeAsync } from "/Users/ccci/Project/node_modules/unctx/dist/index.mjs";
import { Fragment, Suspense, Teleport, computed, createApp, createBlock, createCommentVNode, createVNode, defineAsyncComponent, defineComponent, guardReactiveProps, h, inject, isReactive, isReadonly, isRef, isShallow, isVNode, markRaw, mergeProps, nextTick, normalizeProps, normalizeStyle, onErrorCaptured, onServerPrefetch, openBlock, provide, reactive, ref, renderList, renderSlot, resolveDynamicComponent, shallowReactive, shallowRef, toRaw, toRef, toRefs, unref, useId, useSSRContext, watch, watchEffect, withCtx } from "vue";
import "/Users/ccci/Project/node_modules/@nuxt/nitro-server/dist/h3.mjs";
import { joinURL } from "/Users/ccci/Project/node_modules/ufo/dist/index.mjs";
import { $fetch } from "/Users/ccci/Project/node_modules/ofetch/dist/node.mjs";
import { baseURL } from "#internal/nuxt/paths";
import { defu as defu$1 } from "/Users/ccci/Project/node_modules/defu/dist/defu.mjs";
import { NavigationFailureType, RouterView, START_LOCATION, createMemoryHistory, createRouter, isNavigationFailure } from "vue-router";
import "/Users/ccci/Project/node_modules/klona/dist/index.mjs";
import "/Users/ccci/Project/node_modules/cookie-es/dist/index.mjs";
import "/Users/ccci/Project/node_modules/ohash/dist/index.mjs";
import { _api, addAPIProvider, setCustomIconsLoader } from "@iconify/vue";
import colors from "/Users/ccci/Project/node_modules/tailwindcss/dist/colors.mjs";
import { ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrRenderSuspense, ssrRenderVNode } from "vue/server-renderer";
import { createSharedComposable, onKeyStroke, reactivePick, unrefElement, useMounted } from "/Users/ccci/Project/node_modules/@vueuse/core/dist/index.js";
import { useTimeoutFn as useTimeoutFn$1 } from "/Users/ccci/Project/node_modules/@vueuse/shared/dist/index.js";
// virtual:nuxt:.nuxt%2Ffetch.mjs
if (!globalThis.$fetch) globalThis.$fetch = $fetch.create({ baseURL: baseURL() });
var $fetch$2 = globalThis.$fetch;
// virtual:nuxt:.nuxt%2Fglobal-polyfills.mjs
if (!("global" in globalThis)) globalThis.global = globalThis;
// node_modules/nuxt/dist/head/runtime/island-head.js
/**
* No-op `head.push` until the returned `unfreeze` runs. Plugin/transformer
* augmentations on the same head are unaffected.
*/
function freezeHead(head) {
	const realPush = head.push;
	head.push = () => ({
		dispose: () => {},
		patch: () => {},
		_i: 0
	});
	return () => {
		head.push = realPush;
	};
}
// node_modules/nuxt/dist/head/runtime/plugins/unhead.server.js
var plugin$3 = defineNuxtPlugin({
	name: "nuxt:head",
	enforce: "pre",
	setup(nuxtApp) {
		const head = nuxtApp.ssrContext.head;
		if (nuxtApp.ssrContext.islandContext) {
			const unfreeze = freezeHead(head);
			nuxtApp.hooks.hookOnce("app:created", unfreeze);
		}
		nuxtApp.vueApp.use(head);
	}
});
// node_modules/nuxt/dist/pages/runtime/utils.js
var ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
var ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
var ROUTE_KEY_NORMAL_RE = /:\w+/g;
var interpolatePath = (route, match) => {
	return match.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r) => route.params[r.slice(1)]?.toString() || "");
};
var generateRouteKey = (routeProps, override) => {
	const matchedRoute = routeProps.route.matched.find((m) => m.components?.default === routeProps.Component.type);
	const source = override ?? matchedRoute?.meta.key ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
	return typeof source === "function" ? source(routeProps.route) : source;
};
/** @since 3.9.0 */
function toArray(value) {
	return Array.isArray(value) ? value : [value];
}
// virtual:nuxt:.nuxt%2Froute-rules.mjs
var foldedMatcher = /* @__PURE__ */ (() => {
	const data = { prerender: true };
	return ((_m, p) => [{
		data,
		params: { "_": p.slice(1) }
	}]);
})();
var decodeRoutePath = function decodeRoutePath(path) {
	if (!path.includes("%")) return path;
	const queryIndex = path.indexOf("?");
	const pathname = queryIndex === -1 ? path : path.slice(0, queryIndex);
	try {
		return queryIndex === -1 ? decodeURI(pathname) : decodeURI(pathname) + path.slice(queryIndex);
	} catch {
		return path;
	}
};
var normalizePath = (path, fold) => {
	if (typeof path !== "string") return path;
	const decoded = decodeRoutePath(path);
	return fold ? decoded.toLowerCase() : decoded;
};
var virtual_nuxt__nuxt_2Froute_rules_default = (path) => defu$1({}, ...foldedMatcher("", normalizePath(path, true)).map((r) => r.data).reverse());
// node_modules/nuxt/dist/pages/runtime/router.options.js
var router_options_default = { scrollBehavior(to, from, savedPosition) {
	const nuxtApp = useNuxtApp();
	const router = useRouter();
	const hashScrollBehaviour = router.options?.scrollBehaviorType ?? "auto";
	if (to.path.replace(/\/$/, "") === from.path.replace(/\/$/, "")) {
		if (from.hash && !to.hash) return savedPosition ?? {
			left: 0,
			top: 0
		};
		if (to.hash) return {
			el: to.hash,
			top: _getHashElementScrollMarginTop(to.hash),
			behavior: hashScrollBehaviour
		};
		return false;
	}
	if ((typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop) === false) return false;
	if (from === START_LOCATION) return _calculatePosition(to, from, savedPosition, hashScrollBehaviour);
	return new Promise((resolve) => {
		const doScroll = () => {
			requestAnimationFrame(() => {
				if (router.currentRoute.value.fullPath !== to.fullPath) {
					resolve(false);
					return;
				}
				resolve(_calculatePosition(to, from, savedPosition, hashScrollBehaviour));
			});
		};
		nuxtApp.hooks.hookOnce("page:loading:end", () => {
			const transitionPromise = nuxtApp["~transitionPromise"];
			if (transitionPromise) transitionPromise.then(doScroll);
			else doScroll();
		});
	});
} };
function _getHashElementScrollMarginTop(hash) {
	const elem = (void 0).getElementById(hash.slice(1));
	if (!elem) return 0;
	return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
}
function _calculatePosition(to, from, savedPosition, defaultHashScrollBehaviour) {
	if (savedPosition) return savedPosition;
	if (to.hash) return {
		el: to.hash,
		top: _getHashElementScrollMarginTop(to.hash),
		behavior: isChangingPage(to, from) ? defaultHashScrollBehaviour : "instant"
	};
	return {
		left: 0,
		top: 0
	};
}
var virtual_nuxt__nuxt_2Frouter_options_default = {
	hashMode: false,
	scrollBehaviorType: "auto",
	sensitive: false,
	...router_options_default
};
Object.assign(Object.create(null), {});
var pageIslandRoutes = Object.assign(Object.create(null), {});
// node_modules/nuxt/dist/pages/runtime/validate.js
var middleware$1 = defineNuxtRouteMiddleware(async (to) => {
	let __temp, __restore;
	if (!to.meta?.validate) return;
	const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
	if (result === true) return;
	return createError$2({
		fatal: false,
		status: result && (result.status || result.statusCode) || 404,
		statusText: result && (result.statusText || result.statusMessage) || `Page Not Found: ${to.fullPath}`,
		data: { path: to.fullPath }
	});
}, 1);
// node_modules/nuxt/dist/app/diagnostics/manifest.js
/**
* E5xxx
* App manifest / route-rules runtime diagnostics.
*/
var manifestDiagnostics = /* #__PURE__ */ defineProdDiagnostics({
	docsBase,
	reporters: prodReporters
});
// node_modules/nuxt/dist/app/composables/manifest.js
function routeRulesMatcher$2(path) {
	return virtual_nuxt__nuxt_2Froute_rules_default(path);
}
function getRouteRules(arg) {
	const path = typeof arg === "string" ? arg : arg.path;
	try {
		return routeRulesMatcher$2(path);
	} catch (e) {
		manifestDiagnostics.NUXT_E5003({
			path,
			cause: e
		});
		return {};
	}
}
// virtual:nuxt:.nuxt%2Fmiddleware.mjs
var globalMiddleware = [middleware$1, /* @__PURE__ */ defineNuxtRouteMiddleware((to) => {})];
var namedMiddleware = {};
// virtual:nuxt:.nuxt%2Froutes.mjs
var virtual_nuxt__nuxt_2Froutes_default = [
	{
		name: "beliefs",
		path: "/beliefs",
		component: () => import("./_nuxt/beliefs-CCAXOmAO.js")
	},
	{
		name: "leadership",
		path: "/leadership",
		component: () => import("./_nuxt/leadership-F-Isr-eo.js")
	},
	{
		name: "locations",
		path: "/locations",
		component: () => import("./_nuxt/locations-ia2cxjgU.js")
	},
	{
		name: "visit-church",
		path: "/visit-church",
		component: () => import("./_nuxt/visit-church-Cgecir6j.js")
	},
	{
		name: "index",
		path: "/",
		component: () => import("./_nuxt/pages-CyiqXVc9.js")
	}
];
// node_modules/nuxt/dist/pages/runtime/plugins/router.js
var plugin$2 = defineNuxtPlugin({
	name: "nuxt:router",
	enforce: "pre",
	async setup(nuxtApp) {
		let __temp, __restore;
		let routerBase = useRuntimeConfig().app.baseURL;
		const history = virtual_nuxt__nuxt_2Frouter_options_default.history?.(routerBase) ?? createMemoryHistory(routerBase);
		const routes = virtual_nuxt__nuxt_2Frouter_options_default.routes ? ([__temp, __restore] = executeAsync(() => virtual_nuxt__nuxt_2Frouter_options_default.routes(virtual_nuxt__nuxt_2Froutes_default)), __temp = await __temp, __restore(), __temp) ?? virtual_nuxt__nuxt_2Froutes_default : virtual_nuxt__nuxt_2Froutes_default;
		let startPosition;
		const router = createRouter({
			...virtual_nuxt__nuxt_2Frouter_options_default,
			scrollBehavior: (to, from, savedPosition) => {
				if (from === START_LOCATION) {
					startPosition = savedPosition;
					return;
				}
				if (virtual_nuxt__nuxt_2Frouter_options_default.scrollBehavior) {
					router.options.scrollBehavior = virtual_nuxt__nuxt_2Frouter_options_default.scrollBehavior;
					if ("scrollRestoration" in (void 0).history) {
						const unsub = router.beforeEach(() => {
							unsub();
							(void 0).history.scrollRestoration = "manual";
						});
					}
					return virtual_nuxt__nuxt_2Frouter_options_default.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
				}
			},
			history,
			routes
		});
		nuxtApp.vueApp.use(router);
		const previousRoute = shallowRef(router.currentRoute.value);
		router.afterEach((_to, from) => {
			previousRoute.value = from;
		});
		Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", { get: () => previousRoute.value });
		const initialURL = nuxtApp.ssrContext.url;
		const _route = shallowRef(router.currentRoute.value);
		const syncCurrentRoute = () => {
			_route.value = router.currentRoute.value;
		};
		router.afterEach((to, from) => {
			const lastTo = to.matched.at(-1)?.components?.default;
			const lastFrom = from.matched.at(-1)?.components?.default;
			if (lastTo === lastFrom) {
				if (generateRouteKey({
					route: to,
					Component: { type: lastTo }
				}) === generateRouteKey({
					route: from,
					Component: { type: lastFrom }
				})) syncCurrentRoute();
				return;
			}
			if (to.matched.length < from.matched.length && to.matched.every((m, i) => m.components?.default === from.matched[i]?.components?.default)) syncCurrentRoute();
		});
		const route = { sync: syncCurrentRoute };
		for (const key in _route.value) Object.defineProperty(route, key, {
			get: () => _route.value[key],
			enumerable: true
		});
		nuxtApp._route = shallowReactive(route);
		nuxtApp._middleware ||= {
			global: [],
			named: {}
		};
		const error = useError();
		const isServerPage = nuxtApp.ssrContext?.islandContext?.name?.startsWith("page_");
		if (!nuxtApp.ssrContext?.islandContext || isServerPage) router.afterEach(async (to, _from, failure) => {
			delete nuxtApp._processingMiddleware;
			delete nuxtApp._middlewareTo;
			if (failure) await nuxtApp.callHook("page:loading:end");
			if (failure?.type === 4) return;
			if (to.redirectedFrom && to.fullPath !== initialURL) await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
		});
		router.onError(async () => {
			delete nuxtApp._processingMiddleware;
			delete nuxtApp._middlewareTo;
			await nuxtApp.callHook("page:loading:end");
		});
		try {
			[__temp, __restore] = executeAsync(() => router.push(initialURL)), __temp = await __temp, __restore();
			[__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
		} catch (error) {
			[__temp, __restore] = executeAsync(() => _showErrorUnlessCrawler(nuxtApp, error)), await __temp, __restore();
		}
		const resolvedInitialRoute = router.currentRoute.value;
		syncCurrentRoute();
		if (nuxtApp.ssrContext?.islandContext && !isServerPage) return { provide: { router } };
		const initialLayout = nuxtApp.payload.state._layout;
		router.beforeEach(async (to, from) => {
			await nuxtApp.callHook("page:loading:start");
			to.meta = reactive(to.meta);
			if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) to.meta.layout = initialLayout;
			nuxtApp._processingMiddleware = true;
			nuxtApp._middlewareTo = to;
			if (!nuxtApp.ssrContext?.islandContext || isServerPage) {
				const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
				for (const component of to.matched) {
					const componentMiddleware = component.meta.middleware;
					if (!componentMiddleware) continue;
					for (const entry of toArray(componentMiddleware)) middlewareEntries.add(entry);
				}
				const routeRules = getRouteRules({ path: to.path });
				if (routeRules.appMiddleware) for (const key in routeRules.appMiddleware) if (routeRules.appMiddleware[key]) middlewareEntries.add(key);
				else middlewareEntries.delete(key);
				for (const entry of middlewareEntries) {
					const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await namedMiddleware[entry]?.().then((r) => r.default || r) : entry;
					if (!middleware) throw navigationDiagnostics.NUXT_E2004({
						entry: String(entry),
						validMiddleware: void 0
					});
					try {
						const run = () => nuxtApp.runWithContext(() => middleware(to, from));
						const result = await run();
						if (result === false || result instanceof Error) {
							const error = result || createError$2({
								status: 404,
								statusText: `Page Not Found: ${initialURL}`
							});
							await nuxtApp.runWithContext(() => showError(error));
							return false;
						}
						if (result === true) continue;
						if (result === false) return result;
						if (result) {
							if (isNuxtError(result) && result.fatal) await nuxtApp.runWithContext(() => showError(result));
							return result;
						}
					} catch (err) {
						const error = createError$2(err);
						if (error.fatal) await nuxtApp.runWithContext(() => showError(error));
						return error;
					}
				}
			}
		});
		if (isServerPage) router.beforeResolve((to) => {
			const expected = pageIslandRoutes[nuxtApp.ssrContext.islandContext.name];
			const actual = to.matched.find((m) => (m.components?.default)?.__nuxt_island)?.components?.default;
			if (!expected || expected !== actual?.__nuxt_island) {
				nuxtApp.ssrContext["~renderResponse"] = {
					statusCode: 400,
					statusMessage: "Invalid island request path"
				};
				return false;
			}
		});
		router.afterEach((to, _from, failure) => {
			if (to.matched.length === 0 && !error.value && !isNavigationFailure(failure, NavigationFailureType.aborted | NavigationFailureType.cancelled)) return nuxtApp.runWithContext(() => showError(createError$2({
				status: 404,
				fatal: false,
				statusText: `Page not found: ${to.fullPath}`,
				data: { path: to.fullPath }
			})));
		});
		nuxtApp.hooks.hookOnce("app:created", async () => {
			try {
				if ("name" in resolvedInitialRoute) resolvedInitialRoute.name = void 0;
				await router.replace({
					...resolvedInitialRoute,
					force: true
				});
				router.options.scrollBehavior = virtual_nuxt__nuxt_2Frouter_options_default.scrollBehavior;
			} catch (error) {
				await _showErrorUnlessCrawler(nuxtApp, error);
			}
		});
		return { provide: { router } };
	}
}, 1);
// node_modules/nuxt/dist/app/diagnostics/state.js
/**
* E7xxx
* Payload / state / cookie runtime diagnostics.
*/
var stateDiagnostics = /* #__PURE__ */ defineProdDiagnostics({
	docsBase,
	reporters: prodReporters
});
// node_modules/nuxt/dist/app/composables/payload.js
/**
* This is an experimental function for configuring passing rich data from server -> client.
* @since 3.4.0
*/
function definePayloadReducer(name, reduce) {
	useNuxtApp().ssrContext["~payloadReducers"][name] = reduce;
}
// node_modules/nuxt/dist/app/plugins/revive-payload.server.js
var reducers = [
	["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
	["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
	["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
	["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
	["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
	["Ref", (data) => isRef(data) && data.value],
	["Reactive", (data) => isReactive(data) && toRaw(data)]
];
var plugin$1 = /* @__PURE__ */ defineNuxtPlugin({
	name: "nuxt:revive-payload:server",
	setup() {
		for (const [reducer, fn] of reducers) definePayloadReducer(reducer, fn);
	}
});
// node_modules/nuxt/dist/app/composables/state.js
var useStateKeyPrefix = "$s";
function useState(...args) {
	const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
	if (typeof args[0] !== "string") args.unshift(autoKey);
	const [_key, init] = args;
	if (!_key || typeof _key !== "string") throw stateDiagnostics.NUXT_E7009({ key: _key });
	if (init !== void 0 && typeof init !== "function") throw stateDiagnostics.NUXT_E7007({ type: typeof init });
	const key = useStateKeyPrefix + _key;
	const nuxtApp = useNuxtApp();
	const state = toRef(nuxtApp.payload.state, key);
	if (init) nuxtApp._state[key] ??= { _default: init };
	if (state.value === void 0 && init) {
		const initialValue = init();
		if (isRef(initialValue)) {
			nuxtApp.payload.state[key] = initialValue;
			return state;
		}
		state.value = initialValue;
	}
	return state;
}
// node_modules/nuxt/dist/app/composables/ssr.js
var $fetch$1 = $fetch$2;
/** @since 3.0.0 */
function useRequestEvent(nuxtApp) {
	nuxtApp ||= useNuxtApp();
	return nuxtApp.ssrContext?.event;
}
/** @since 3.2.0 */
function useRequestFetch() {
	return useRequestEvent()?.$fetch || $fetch$1;
}
/** @since 3.8.0 */
function prerenderRoutes(path) {
	if (!import.meta.prerender) return;
	const context = useRequestEvent()?.context;
	if (!context) return;
	const nuxt = context.nuxt ||= {};
	nuxt.prerenderRoutes ||= [];
	nuxt.prerenderRoutes.push(...toArray$1(path));
}
// virtual:nuxt:.nuxt%2Fcolor-mode-options.mjs
var preference = "system";
// node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server.js
var plugin_server_default = defineNuxtPlugin((nuxtApp) => {
	const colorMode = nuxtApp.ssrContext?.islandContext ? ref({}).value : useState("color-mode", () => reactive({
		preference,
		value: preference,
		unknown: true,
		forced: false
	})).value;
	const htmlAttrs = {};
	useHead({ htmlAttrs });
	useRouter().afterEach((to) => {
		const forcedColorMode = to.meta.colorMode;
		if (forcedColorMode && forcedColorMode !== "system") {
			htmlAttrs["data-color-mode-forced"] = forcedColorMode;
			colorMode.value = forcedColorMode;
			colorMode.forced = true;
		} else if (forcedColorMode === "system") console.warn("You cannot force the colorMode to system at the page level.");
	});
	nuxtApp.provide("colorMode", colorMode);
});
// node_modules/@nuxt/icon/dist/runtime/provider.js
function getSideProvider(provider, side) {
	return typeof provider === "object" ? provider?.[side] : provider;
}
// node_modules/@nuxt/icon/dist/runtime/plugin.js
var plugin_default = defineNuxtPlugin({
	name: "@nuxt/icon",
	setup() {
		const configs = useRuntimeConfig();
		const options = useAppConfig().icon;
		const requestFetch = useRequestFetch();
		const nativeFetch = requestFetch.native;
		_api.setFetch((input, init) => {
			const nitroFetch = globalThis.$fetch?.native;
			return (nativeFetch || nitroFetch || globalThis.fetch)(input, init);
		});
		const provider = getSideProvider(options.provider, "server");
		const resources = [];
		if (provider === "server") {
			const baseURL = configs.app?.baseURL?.replace(/\/$/, "") ?? "";
			resources.push(baseURL + (options.localApiEndpoint || "/api/_nuxt_icon"));
			if (options.fallbackToApi === true || options.fallbackToApi === "client-only") resources.push(options.iconifyApiEndpoint);
		} else if (provider === "none") _api.setFetch(() => Promise.resolve(new Response()));
		else resources.push(options.iconifyApiEndpoint);
		async function loadCustomIconsChunk(icons, prefix) {
			try {
				const data = await requestFetch(resources[0] + "/" + prefix + ".json", { query: { icons: icons.join(",") } });
				if (!data || data.prefix !== prefix || !data.icons) throw new Error("Invalid data" + JSON.stringify(data));
				return data;
			} catch (e) {
				console.error("Failed to load custom icons", e);
				return null;
			}
		}
		async function customIconLoader(icons, prefix) {
			const chunks = [[]];
			let length = 0;
			for (const name of icons) {
				const nameLength = encodeURIComponent(name).length;
				if (length + nameLength > 2e3 && chunks.at(-1).length) {
					chunks.push([]);
					length = 0;
				}
				chunks.at(-1).push(name);
				length += nameLength + 1;
			}
			const results = (await Promise.all(chunks.map((chunk) => loadCustomIconsChunk(chunk, prefix)))).filter((data) => !!data);
			if (!results.length) return null;
			return results.reduce((acc, data) => ({
				...acc,
				...data,
				icons: {
					...acc.icons,
					...data.icons
				},
				aliases: {
					...acc.aliases,
					...data.aliases
				}
			}));
		}
		addAPIProvider("", { resources });
		for (const prefix of options.customCollections || []) if (prefix) setCustomIconsLoader(customIconLoader, prefix);
	}
});
// virtual:nuxt:.nuxt%2Fcomponents.plugin.mjs
var lazyGlobalComponents = [["Icon", defineAsyncComponent(() => import("./_nuxt/components-DxzSx7d2.js").then((n) => n.n).then((r) => r["default"] || r.default || r))]];
var virtual_nuxt__nuxt_2Fcomponents_plugin_default = defineNuxtPlugin({
	name: "nuxt:global-components",
	setup(nuxtApp) {
		for (const [name, component] of lazyGlobalComponents) {
			nuxtApp.vueApp.component(name, component);
			nuxtApp.vueApp.component("Lazy" + name, component);
		}
	}
});
// node_modules/@nuxt/ui/dist/runtime/plugins/colors.js
var shades = [
	50,
	100,
	200,
	300,
	400,
	500,
	600,
	700,
	800,
	900,
	950
];
function getColor(color, shade) {
	if (color in colors && typeof colors[color] === "object" && shade in colors[color]) return colors[color][shade];
	return "";
}
function generateShades(key, value, prefix) {
	const prefixStr = prefix ? `${prefix}-` : "";
	return `${shades.map((shade) => `--ui-color-${key}-${shade}: var(--${prefixStr}color-${value === "neutral" ? "old-neutral" : value}-${shade}, ${getColor(value, shade)});`).join("\n  ")}`;
}
function generateColor(key, shade) {
	return `--ui-${key}: var(--ui-color-${key}-${shade});`;
}
var colors_default = defineNuxtPlugin(() => {
	const appConfig = useAppConfig();
	useNuxtApp();
	const root = computed(() => {
		const { neutral, ...colors2 } = appConfig.ui.colors;
		const prefix = appConfig.ui.prefix;
		return `@layer theme {
  :root, :host {
  ${Object.entries(appConfig.ui.colors).map(([key, value]) => generateShades(key, value, prefix)).join("\n  ")}
  }
  :root, :host, .light {
  ${Object.keys(colors2).map((key) => generateColor(key, 500)).join("\n  ")}
  }
  .dark {
  ${Object.keys(colors2).map((key) => generateColor(key, 400)).join("\n  ")}
  }
}`;
	});
	useHead({ style: [{
		innerHTML: root,
		tagPriority: "critical",
		id: "nuxt-ui-colors"
	}] });
});
var routes;
var plugin = defineNuxtPlugin(async () => {
	let __temp, __restore;
	if (!import.meta.prerender || false) return;
	if (routes && !routes.length) return;
	routes ||= Array.from(processRoutes(([__temp, __restore] = executeAsync(() => virtual_nuxt__nuxt_2Frouter_options_default.routes?.(virtual_nuxt__nuxt_2Froutes_default)), __temp = await __temp, __restore(), __temp) ?? virtual_nuxt__nuxt_2Froutes_default));
	prerenderRoutes(routes.splice(0, 10));
}, 1);
var OPTIONAL_PARAM_RE = /^\/?:.*(?:\?|\(\.\*\)\*)$/;
function shouldPrerender(path) {
	return true;
}
function processRoutes(routes, currentPath = "/", routesToPrerender = /* @__PURE__ */ new Set()) {
	for (const route of routes) {
		if (OPTIONAL_PARAM_RE.test(route.path) && !route.children?.length && shouldPrerender(currentPath)) routesToPrerender.add(currentPath);
		if (route.path.includes(":")) continue;
		const fullPath = joinURL(currentPath, route.path);
		if (shouldPrerender(fullPath)) routesToPrerender.add(fullPath);
		if (route.children) processRoutes(route.children, fullPath, routesToPrerender);
	}
	return routesToPrerender;
}
// virtual:nuxt:.nuxt%2Fplugins.server.mjs
var virtual_nuxt__nuxt_2Fplugins_server_default = [
	plugin$3,
	plugin$2,
	plugin$1,
	plugin_server_default,
	plugin_default,
	virtual_nuxt__nuxt_2Fcomponents_plugin_default,
	colors_default,
	plugin
];
// node_modules/reka-ui/dist/shared/isHTMLElement.js
function isHTMLElement(node) {
	return false;
}
// node_modules/reka-ui/dist/Primitive/usePrimitiveElement.js
function usePrimitiveElement() {
	const primitiveElement = ref();
	return {
		primitiveElement,
		currentElement: computed(() => ["#text", "#comment"].includes(primitiveElement.value?.$el.nodeName) ? primitiveElement.value?.$el.nextElementSibling : unrefElement(primitiveElement))
	};
}
// node_modules/reka-ui/dist/DismissableLayer/DismissableLayerBranch.js
var DismissableLayerBranch_default = /* @__PURE__ */ defineComponent({
	__name: "DismissableLayerBranch",
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
		const { forwardRef, currentElement } = useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps({ ref: unref(forwardRef) }, props), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
// node_modules/reka-ui/dist/FocusScope/utils.js
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = {
	bubbles: false,
	cancelable: true
};
/** Like `Node.contains`, but crosses shadow boundaries by walking up through host elements. */
function containsComposed(container, node) {
	let current = node;
	while (current) {
		if (container.contains(current)) return true;
		current = current.getRootNode().host ?? null;
	}
	return false;
}
/**
* Attempts focusing the first element in a list of candidates.
* Stops when focus has actually moved.
*/
function focusFirst(candidates, { select = false } = {}) {
	const previouslyFocusedElement = getActiveElement();
	for (const candidate of candidates) {
		focus(candidate, { select });
		if (getActiveElement() !== previouslyFocusedElement) return true;
	}
}
/**
* Returns the first and last tabbable elements inside a container.
*/
function getTabbableEdges(container) {
	const candidates = getTabbableCandidates(container);
	return [findVisible(candidates, container), findVisible(candidates.reverse(), container)];
}
/**
* Returns a list of potential tabbable candidates.
*
* NOTE: This is only a close approximation. For example it doesn't take into account cases like when
* elements are not visible. This cannot be worked out easily by just reading a property, but rather
* necessitate runtime knowledge (computed styles, etc). We deal with these cases separately.
*
* See: https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker
* Credit: https://github.com/discord/focus-layers/blob/master/src/util/wrapFocus.tsx#L1
*/
function getTabbableCandidates(container) {
	const nodes = [];
	const walker = (void 0).createTreeWalker(container, NodeFilter.SHOW_ELEMENT, { acceptNode: (node) => {
		const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
		if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
		return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	while (walker.nextNode()) nodes.push(walker.currentNode);
	return nodes.sort((a, b) => {
		if (a.tabIndex === b.tabIndex) return 0;
		if (a.tabIndex === 0) return 1;
		if (b.tabIndex === 0) return -1;
		return a.tabIndex - b.tabIndex;
	});
}
/**
* Returns the first visible element in a list.
* NOTE: Only checks visibility up to the `container`.
*/
function findVisible(elements, container) {
	for (const element of elements) if (!isHidden(element, { upTo: container })) return element;
}
function isHidden(node, { upTo }) {
	if (getComputedStyle(node).visibility === "hidden") return true;
	while (node) {
		if (upTo !== void 0 && node === upTo) return false;
		if (getComputedStyle(node).display === "none") return true;
		node = node.parentElement;
	}
	return false;
}
function isSelectableInput(element) {
	return element instanceof HTMLInputElement && "select" in element;
}
function focus(element, { select = false } = {}) {
	if (element && element.focus) {
		const previouslyFocusedElement = getActiveElement();
		element.focus({ preventScroll: true });
		if (element !== previouslyFocusedElement && isSelectableInput(element) && select) element.select();
	}
}
// node_modules/reka-ui/dist/Teleport/Teleport.js
var Teleport_default = /* @__PURE__ */ defineComponent({
	__name: "Teleport",
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
		const configContext = injectConfigProviderContext({});
		const target = computed(() => props.to ?? configContext.teleportTo?.value ?? "body");
		const isMounted = useMounted();
		return (_ctx, _cache) => {
			return unref(isMounted) || __props.forceMount ? (openBlock(), createBlock(Teleport, {
				key: 0,
				to: target.value,
				disabled: __props.disabled,
				defer: __props.defer
			}, [renderSlot(_ctx.$slots, "default")], 8, [
				"to",
				"disabled",
				"defer"
			])) : createCommentVNode("v-if", true);
		};
	}
});
// node_modules/reka-ui/dist/Collection/Collection.js
var ITEM_DATA_ATTR = "data-reka-collection-item";
function useCollection(options = {}) {
	const { key = "", isProvider = false } = options;
	const injectionKey = `${key}CollectionProvider`;
	let context;
	if (isProvider) {
		const itemMap = ref(/* @__PURE__ */ new Map());
		context = {
			collectionRef: ref(),
			itemMap
		};
		provide(injectionKey, context);
	} else context = inject(injectionKey);
	const getItem = (element, includeDisabledItem = false) => {
		if (!context.collectionRef.value) return void 0;
		const item = context.itemMap.value.get(element);
		return item && (includeDisabledItem || item.ref.dataset.disabled !== "") ? item : void 0;
	};
	const getItems = (includeDisabledItem = false) => {
		const collectionNode = context.collectionRef.value;
		if (!collectionNode) return [];
		const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
		const orderMap = new Map(orderedNodes.map((node, index) => [node, index]));
		const orderedItems = Array.from(context.itemMap.value.values()).sort((a, b) => (orderMap.get(a.ref) ?? -1) - (orderMap.get(b.ref) ?? -1));
		if (includeDisabledItem) return orderedItems;
		else return orderedItems.filter((i) => i.ref.dataset.disabled !== "");
	};
	const CollectionSlot = /*#__PURE__*/ defineComponent({
		name: "CollectionSlot",
		inheritAttrs: false,
		setup(_, { slots, attrs }) {
			const { primitiveElement, currentElement } = usePrimitiveElement();
			watch(currentElement, () => {
				context.collectionRef.value = currentElement.value;
			});
			return () => h(Slot, {
				ref: primitiveElement,
				...attrs
			}, slots);
		}
	});
	const CollectionItem = /*#__PURE__*/ defineComponent({
		name: "CollectionItem",
		inheritAttrs: false,
		props: { value: { validator: () => true } },
		setup(props, { slots, attrs }) {
			const { primitiveElement, currentElement } = usePrimitiveElement();
			watchEffect((cleanupFn) => {
				if (currentElement.value) {
					const key$1 = markRaw(currentElement.value);
					context.itemMap.value.set(key$1, {
						ref: currentElement.value,
						value: props.value
					});
					cleanupFn(() => context.itemMap.value.delete(key$1));
				}
			});
			return () => h(Slot, {
				...attrs,
				[ITEM_DATA_ATTR]: "",
				ref: primitiveElement
			}, slots);
		}
	});
	return {
		getItems,
		getItem,
		reactiveItems: computed(() => Array.from(context.itemMap.value.values())),
		itemMapSize: computed(() => context.itemMap.value.size),
		CollectionSlot,
		CollectionItem
	};
}
// node_modules/reka-ui/dist/VisuallyHidden/VisuallyHidden.js
var VisuallyHidden_default = /* @__PURE__ */ defineComponent({
	__name: "VisuallyHidden",
	props: {
		feature: {
			type: String,
			required: false,
			default: "focusable"
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "span"
		}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), {
				as: __props.as,
				"as-child": __props.asChild,
				"aria-hidden": __props.feature === "fully-hidden" ? "true" : void 0,
				"data-hidden": __props.feature === "fully-hidden" ? "" : void 0,
				tabindex: __props.feature === "fully-hidden" ? "-1" : void 0,
				style: {
					position: "absolute",
					border: 0,
					width: "1px",
					height: "1px",
					padding: 0,
					margin: "-1px",
					overflow: "hidden",
					clip: "rect(0, 0, 0, 0)",
					clipPath: "inset(50%)",
					whiteSpace: "nowrap",
					wordWrap: "normal",
					top: "-1px",
					left: "-1px"
				}
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, [
				"as",
				"as-child",
				"aria-hidden",
				"data-hidden",
				"tabindex"
			]);
		};
	}
});
// node_modules/reka-ui/dist/Toast/createToastManager.js
var count = 0;
function generateToastId() {
	count = (count + 1) % Number.MAX_SAFE_INTEGER;
	return `reka-toast-${count}`;
}
function resolvePromiseState(state, value) {
	const resolved = typeof state === "function" ? state(value) : state;
	return typeof resolved === "string" ? { description: resolved } : resolved;
}
function runToastPromise(promise, options, add, update) {
	const id = add({
		...typeof options.loading === "string" ? { description: options.loading } : options.loading,
		status: "loading"
	});
	return promise.then((value) => {
		update(id, {
			...resolvePromiseState(options.success, value),
			status: "success"
		});
		return value;
	}, (error) => {
		update(id, {
			...resolvePromiseState(options.error, error),
			status: "error"
		});
		throw error;
	});
}
// node_modules/reka-ui/dist/Toast/useToastStore.js
function useToastStore() {
	const toasts = shallowRef([]);
	const restartKeys = /*#__PURE__*/ reactive(/* @__PURE__ */ new Map());
	function find(id) {
		return toasts.value.find((toast) => toast.id === id);
	}
	function replace(id, next) {
		toasts.value = toasts.value.map((toast) => toast.id === id ? next : toast);
	}
	function remove(id) {
		const toast = find(id);
		if (!toast || toast.open) return;
		toasts.value = toasts.value.filter((item) => item.id !== id);
		restartKeys.delete(id);
		toast.onRemove?.();
	}
	function add(options) {
		const id = options.id ?? generateToastId();
		const existing = find(id);
		if (existing?.open) {
			const { id: _id, ...updates } = options;
			replace(id, {
				...existing,
				...updates,
				updateKey: existing.updateKey + 1
			});
			restartKeys.set(id, (restartKeys.get(id) ?? 0) + 1);
			return id;
		}
		const rest = existing ? toasts.value.filter((toast) => toast.id !== id) : toasts.value;
		toasts.value = [{
			...options,
			id,
			open: true,
			updateKey: 0
		}, ...rest];
		return id;
	}
	function close(id) {
		const closing = toasts.value.filter((toast) => toast.open && (id === void 0 || toast.id === id));
		if (!closing.length) return;
		toasts.value = toasts.value.map((toast) => closing.includes(toast) ? {
			...toast,
			open: false
		} : toast);
		closing.forEach((toast) => toast.onClose?.());
	}
	function update(id, updates) {
		const prevToast = find(id);
		if (!prevToast?.open) return;
		const patch = typeof updates === "function" ? updates(prevToast) : updates;
		const current = find(id);
		if (!current?.open) return;
		replace(id, {
			...current,
			...patch,
			id,
			open: true,
			updateKey: current.updateKey + 1
		});
	}
	return {
		toasts,
		add,
		close,
		update,
		promise: (promise, options) => runToastPromise(promise, options, add, update),
		remove,
		getRestartKey: (id) => restartKeys.get(id) ?? 0
	};
}
// node_modules/reka-ui/dist/Toast/ToastProvider.js
var [injectToastProviderContext, provideToastProviderContext] = /*#__PURE__*/ createContext("ToastProvider");
var ToastProvider_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "ToastProvider",
	props: {
		label: {
			type: String,
			required: false,
			default: "Notification"
		},
		duration: {
			type: Number,
			required: false,
			default: 5e3
		},
		disableSwipe: {
			type: Boolean,
			required: false
		},
		swipeDirection: {
			type: String,
			required: false,
			default: "right"
		},
		swipeThreshold: {
			type: Number,
			required: false,
			default: 50
		},
		limit: {
			type: Number,
			required: false
		},
		toastManager: {
			type: Object,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		const { label, duration, disableSwipe, swipeDirection, swipeThreshold } = toRefs(props);
		useCollection({ isProvider: true });
		const viewport = ref();
		const toastCount = ref(0);
		const isFocusedToastEscapeKeyDownRef = ref(false);
		const isClosePausedRef = ref(false);
		const toastStore = useToastStore();
		const entries = shallowReactive([]);
		let seq = 0;
		const stack = computed(() => {
			const ordered = [...entries].sort((a, b) => b.seq - a.seq);
			const states = /* @__PURE__ */ new Map();
			let visibleIndex = 0;
			let offsetY = 0;
			ordered.forEach((entry, index) => {
				const closing = !entry.open;
				states.set(entry, {
					index: closing ? index : visibleIndex,
					offsetY,
					limited: !closing && props.limit !== void 0 && visibleIndex >= props.limit
				});
				if (!closing) {
					offsetY += entry.height;
					visibleIndex++;
				}
			});
			return {
				ordered,
				states
			};
		});
		const hovering = ref(false);
		const focused = ref(false);
		if (props.label && typeof props.label === "string" && !props.label.trim()) throw new Error("Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.");
		provideToastProviderContext({
			label,
			duration,
			disableSwipe,
			swipeDirection,
			swipeThreshold,
			toastCount,
			viewport,
			onViewportChange(el) {
				viewport.value = el;
			},
			onToastAdd() {
				toastCount.value++;
			},
			onToastRemove() {
				toastCount.value--;
			},
			isFocusedToastEscapeKeyDownRef,
			isClosePausedRef,
			toastStore,
			hovering,
			focused,
			expanded: computed(() => hovering.value || focused.value),
			frontmostHeight: computed(() => stack.value.ordered.find((entry) => entry.open)?.height || void 0),
			closingCount: computed(() => entries.filter((entry) => !entry.open).length),
			registerToast(entry) {
				entry.seq = ++seq;
				entries.push(entry);
				return () => {
					const index = entries.indexOf(entry);
					if (index !== -1) entries.splice(index, 1);
				};
			},
			reopenToast(entry) {
				entry.seq = ++seq;
			},
			getToastStack(entry) {
				return stack.value.states.get(entry) ?? {
					index: 0,
					offsetY: 0,
					limited: false
				};
			}
		});
		return (_ctx, _cache) => {
			return renderSlot(_ctx.$slots, "default");
		};
	}
});
// node_modules/reka-ui/dist/Toast/utils.js
var TOAST_SWIPE_START = "toast.swipeStart";
var TOAST_SWIPE_MOVE = "toast.swipeMove";
var TOAST_SWIPE_CANCEL = "toast.swipeCancel";
var TOAST_SWIPE_END = "toast.swipeEnd";
var VIEWPORT_PAUSE = "toast.viewportPause";
var VIEWPORT_RESUME = "toast.viewportResume";
function handleAndDispatchCustomEvent(name, handler, detail) {
	const currentTarget = detail.originalEvent.currentTarget;
	const event = new CustomEvent(name, {
		bubbles: false,
		cancelable: true,
		detail
	});
	if (handler) currentTarget.addEventListener(name, handler, { once: true });
	currentTarget.dispatchEvent(event);
}
function isDeltaInDirection(delta, direction, threshold = 0) {
	const deltaX = Math.abs(delta.x);
	const deltaY = Math.abs(delta.y);
	const isDeltaX = deltaX > deltaY;
	if (direction === "left" || direction === "right") return isDeltaX && deltaX > threshold;
	else return !isDeltaX && deltaY > threshold;
}
function getAnnounceTextContent(container) {
	const textContent = [];
	Array.from(container.childNodes).forEach((node) => {
		if (node.nodeType === node.TEXT_NODE && node.textContent) textContent.push(node.textContent);
		if (isHTMLElement(node)) {
			const isHidden = node.ariaHidden || node.hidden || node.style.display === "none";
			const isExcluded = node.dataset.rekaToastAnnounceExclude === "";
			if (!isHidden) if (isExcluded) {
				const altText = node.dataset.rekaToastAnnounceAlt;
				if (altText) textContent.push(altText);
			} else textContent.push(...getAnnounceTextContent(node));
		}
	});
	return textContent;
}
// node_modules/reka-ui/dist/Toast/ToastPortal.js
var ToastPortal_default = /* @__PURE__ */ defineComponent({
	__name: "ToastPortal",
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
// node_modules/reka-ui/dist/Toast/FocusProxy.js
var FocusProxy_default = /* @__PURE__ */ defineComponent({
	__name: "FocusProxy",
	emits: ["focusFromOutsideViewport"],
	setup(__props, { emit: __emit }) {
		const emits = __emit;
		const providerContext = injectToastProviderContext();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(VisuallyHidden_default), {
				tabindex: "0",
				style: { "position": "fixed" },
				onFocus: _cache[0] || (_cache[0] = (event) => {
					const prevFocusedElement = event.relatedTarget;
					if (!unref(providerContext).viewport.value?.contains(prevFocusedElement)) emits("focusFromOutsideViewport");
				})
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			});
		};
	}
});
// node_modules/reka-ui/dist/Toast/ToastViewport.js
var ToastViewport_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "ToastViewport",
	props: {
		hotkey: {
			type: Array,
			required: false,
			default: () => ["F8"]
		},
		label: {
			type: [String, Function],
			required: false,
			default: "Notifications ({hotkey})"
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "ol"
		}
	},
	setup(__props) {
		const { hotkey, label } = toRefs(__props);
		const { forwardRef, currentElement } = useForwardExpose();
		const { CollectionSlot, getItems } = useCollection();
		const providerContext = injectToastProviderContext();
		const hasToasts = computed(() => providerContext.toastCount.value > 0);
		const headFocusProxyRef = ref();
		const tailFocusProxyRef = ref();
		const KEY_RE = /Key/g;
		const DIGIT_RE = /Digit/g;
		const hotkeyMessage = computed(() => hotkey.value.join("+").replace(KEY_RE, "").replace(DIGIT_RE, ""));
		onKeyStroke(hotkey.value, () => {
			currentElement.value.focus();
		});
		const pendingPointerLeave = ref(false);
		watch([pendingPointerLeave, providerContext.closingCount], ([pending, closingCount]) => {
			if (pending && closingCount === 0) {
				providerContext.hovering.value = false;
				pendingPointerLeave.value = false;
			}
		});
		watch(hasToasts, (value) => {
			if (!value) {
				providerContext.hovering.value = false;
				providerContext.focused.value = false;
				pendingPointerLeave.value = false;
			}
		});
		watchEffect((cleanupFn) => {
			const viewport = currentElement.value;
			if (hasToasts.value && viewport) {
				const handlePause = () => {
					if (!providerContext.isClosePausedRef.value) {
						const pauseEvent = new CustomEvent(VIEWPORT_PAUSE);
						viewport.dispatchEvent(pauseEvent);
						providerContext.isClosePausedRef.value = true;
					}
				};
				const handleResume = () => {
					if (providerContext.isClosePausedRef.value) {
						const resumeEvent = new CustomEvent(VIEWPORT_RESUME);
						viewport.dispatchEvent(resumeEvent);
						providerContext.isClosePausedRef.value = false;
					}
				};
				const handleFocusOutResume = (event) => {
					if (!viewport.contains(event.relatedTarget)) {
						providerContext.focused.value = false;
						handleResume();
					}
				};
				const handlePointerLeaveResume = () => {
					pendingPointerLeave.value = true;
					if (!viewport.contains(getActiveElement())) handleResume();
				};
				const handlePointerMoveExpand = () => {
					pendingPointerLeave.value = false;
					providerContext.hovering.value = true;
				};
				const handleFocusInExpand = () => {
					providerContext.focused.value = true;
				};
				const handleKeyDown = (event) => {
					const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
					if (event.key === "Tab" && !isMetaKey) {
						const focusedElement = getActiveElement();
						const isTabbingBackwards = event.shiftKey;
						if (event.target === viewport && isTabbingBackwards) {
							headFocusProxyRef.value?.focus();
							return;
						}
						const sortedCandidates = getSortedTabbableCandidates({ tabbingDirection: isTabbingBackwards ? "backwards" : "forwards" });
						const index = sortedCandidates.findIndex((candidate) => candidate === focusedElement);
						if (focusFirst(sortedCandidates.slice(index + 1))) event.preventDefault();
						else isTabbingBackwards ? headFocusProxyRef.value?.focus() : tailFocusProxyRef.value?.focus();
					}
				};
				viewport.addEventListener("focusin", handlePause);
				viewport.addEventListener("focusin", handleFocusInExpand);
				viewport.addEventListener("focusout", handleFocusOutResume);
				viewport.addEventListener("pointermove", handlePause);
				viewport.addEventListener("pointermove", handlePointerMoveExpand);
				viewport.addEventListener("pointerleave", handlePointerLeaveResume);
				viewport.addEventListener("keydown", handleKeyDown);
				(void 0).addEventListener("blur", handlePause);
				(void 0).addEventListener("focus", handleResume);
				cleanupFn(() => {
					viewport.removeEventListener("focusin", handlePause);
					viewport.removeEventListener("focusin", handleFocusInExpand);
					viewport.removeEventListener("focusout", handleFocusOutResume);
					viewport.removeEventListener("pointermove", handlePause);
					viewport.removeEventListener("pointermove", handlePointerMoveExpand);
					viewport.removeEventListener("pointerleave", handlePointerLeaveResume);
					viewport.removeEventListener("keydown", handleKeyDown);
					(void 0).removeEventListener("blur", handlePause);
					(void 0).removeEventListener("focus", handleResume);
				});
			}
		});
		function getSortedTabbableCandidates({ tabbingDirection }) {
			const tabbableCandidates = getItems().map((i) => i.ref).map((toastNode) => {
				const toastTabbableCandidates = [toastNode, ...getTabbableCandidates(toastNode)];
				return tabbingDirection === "forwards" ? toastTabbableCandidates : toastTabbableCandidates.reverse();
			});
			return (tabbingDirection === "forwards" ? tabbableCandidates.reverse() : tabbableCandidates).flat();
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DismissableLayerBranch_default), {
				role: "region",
				"aria-label": typeof unref(label) === "string" ? unref(label).replace("{hotkey}", hotkeyMessage.value) : unref(label)(hotkeyMessage.value),
				tabindex: "-1",
				style: normalizeStyle({ pointerEvents: hasToasts.value ? void 0 : "none" })
			}, {
				default: withCtx(() => [
					hasToasts.value ? (openBlock(), createBlock(FocusProxy_default, {
						key: 0,
						ref: (node) => {
							if (!node) return void 0;
							headFocusProxyRef.value = unref(unrefElement)(node);
						},
						onFocusFromOutsideViewport: _cache[0] || (_cache[0] = () => {
							const tabbableCandidates = getSortedTabbableCandidates({ tabbingDirection: "forwards" });
							unref(focusFirst)(tabbableCandidates);
						})
					}, null, 512)) : createCommentVNode("v-if", true),
					createVNode(unref(CollectionSlot), null, {
						default: withCtx(() => [createVNode(unref(Primitive), mergeProps({
							ref: unref(forwardRef),
							tabindex: "-1",
							as: __props.as,
							"as-child": __props.asChild,
							"data-expanded": unref(providerContext).expanded.value ? "" : void 0,
							style: { "--reka-toast-frontmost-height": unref(providerContext).frontmostHeight.value ? `${unref(providerContext).frontmostHeight.value}px` : void 0 }
						}, _ctx.$attrs), {
							default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
							_: 3
						}, 16, [
							"as",
							"as-child",
							"data-expanded",
							"style"
						])]),
						_: 3
					}),
					hasToasts.value ? (openBlock(), createBlock(FocusProxy_default, {
						key: 1,
						ref: (node) => {
							if (!node) return void 0;
							tailFocusProxyRef.value = unref(unrefElement)(node);
						},
						onFocusFromOutsideViewport: _cache[1] || (_cache[1] = () => {
							const tabbableCandidates = getSortedTabbableCandidates({ tabbingDirection: "backwards" });
							unref(focusFirst)(tabbableCandidates);
						})
					}, null, 512)) : createCommentVNode("v-if", true)
				]),
				_: 3
			}, 8, ["aria-label", "style"]);
		};
	}
});
// node_modules/reka-ui/dist/Tooltip/TooltipProvider.js
var [injectTooltipProviderContext, provideTooltipProviderContext] = /*#__PURE__*/ createContext("TooltipProvider");
var TooltipProvider_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "TooltipProvider",
	props: {
		delayDuration: {
			type: Number,
			required: false,
			default: 700
		},
		skipDelayDuration: {
			type: Number,
			required: false,
			default: 300
		},
		disableHoverableContent: {
			type: Boolean,
			required: false,
			default: false
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
			required: false,
			default: false
		},
		content: {
			type: Object,
			required: false
		}
	},
	setup(__props) {
		const { delayDuration, skipDelayDuration, disableHoverableContent, disableClosingTrigger, ignoreNonKeyboardFocus, disabled, content } = toRefs(__props);
		useForwardExpose();
		const isOpenDelayed = ref(true);
		const isPointerInTransitRef = ref(false);
		const { start: startTimer, stop: clearTimer } = useTimeoutFn$1(() => {
			isOpenDelayed.value = true;
		}, skipDelayDuration, { immediate: false });
		provideTooltipProviderContext({
			isOpenDelayed,
			delayDuration,
			onOpen() {
				clearTimer();
				isOpenDelayed.value = false;
			},
			onClose() {
				startTimer();
			},
			isPointerInTransitRef,
			disableHoverableContent,
			disableClosingTrigger,
			disabled,
			ignoreNonKeyboardFocus,
			content
		});
		return (_ctx, _cache) => {
			return renderSlot(_ctx.$slots, "default");
		};
	}
});
// node_modules/@nuxt/ui/dist/runtime/utils/locale.js
function buildTranslator(locale) {
	return (path, option) => translate(path, option, unref(locale));
}
function translate(path, option, locale) {
	return get(locale, `messages.${path}`, path).replace(/\{(\w+)\}/g, (_, key) => `${option?.[key] ?? `{${key}}`}`);
}
function buildLocaleContext(locale) {
	return {
		lang: computed(() => unref(locale).name),
		code: computed(() => unref(locale).code),
		dir: computed(() => unref(locale).dir),
		locale: isRef(locale) ? locale : ref(locale),
		t: buildTranslator(locale)
	};
}
// node_modules/@nuxt/ui/dist/runtime/composables/defineLocale.js
// @__NO_SIDE_EFFECTS__
function defineLocale(options) {
	return defu$1(options, { dir: "ltr" });
}
// node_modules/@nuxt/ui/dist/runtime/locale/en.js
var en_default = /* @__PURE__ */ defineLocale({
	name: "English",
	code: "en",
	messages: {
		alert: { close: "Close" },
		authForm: {
			hidePassword: "Hide password",
			showPassword: "Show password",
			submit: "Continue"
		},
		banner: { close: "Close" },
		breadcrumb: { label: "breadcrumb" },
		calendar: {
			label: "Event date",
			monthPicker: "Month picker",
			nextMonth: "Next month",
			nextYear: "Next year",
			prevMonth: "Previous month",
			prevYear: "Previous year",
			yearPicker: "Year picker"
		},
		carousel: {
			dots: "Choose slide to display",
			goto: "Go to slide {slide}",
			next: "Next",
			prev: "Prev",
			roledescription: "carousel",
			slide: "slide"
		},
		chatMessages: { autoScroll: "Scroll to bottom" },
		chatPrompt: { placeholder: "Type your message here…" },
		chatPromptSubmit: {
			label: "Send prompt",
			reload: "Retry",
			stop: "Stop generating"
		},
		colorMode: {
			dark: "Dark",
			light: "Light",
			switchToDark: "Switch to dark mode",
			switchToLight: "Switch to light mode",
			system: "System"
		},
		commandPalette: {
			back: "Back",
			close: "Close",
			noData: "No data",
			noMatch: "No matching data",
			placeholder: "Type a command or search…",
			results: "Results"
		},
		contentSearch: {
			links: "Links",
			search: "Results",
			theme: "Theme"
		},
		contentSearchButton: { label: "Search…" },
		contentToc: { title: "On this page" },
		dropdownMenu: {
			noMatch: "No matching data",
			search: "Search…"
		},
		dashboardSearch: { theme: "Theme" },
		dashboardSearchButton: { label: "Search…" },
		dashboardSidebarCollapse: {
			collapse: "Collapse sidebar",
			expand: "Expand sidebar"
		},
		dashboardSidebarToggle: {
			close: "Close sidebar",
			open: "Open sidebar"
		},
		drawer: { close: "Close" },
		error: { clear: "Back to home" },
		fileUpload: { removeFile: "Remove {filename}" },
		header: {
			close: "Close menu",
			open: "Open menu"
		},
		inputDate: {
			day: "day",
			dayPeriod: "AM/PM",
			era: "era",
			hour: "hour",
			minute: "minute",
			month: "month",
			second: "second",
			timeZoneName: "timezone",
			year: "year"
		},
		inputMenu: {
			create: "Create \"{label}\"",
			noData: "No data",
			noMatch: "No matching data",
			trigger: "Show options"
		},
		inputNumber: {
			decrement: "Decrement",
			increment: "Increment",
			roledescription: "number field"
		},
		inputRating: { rate: "Rate {value} out of {length}" },
		inputTime: {
			dayPeriod: "AM/PM",
			hour: "hour",
			minute: "minute",
			second: "second",
			timeZoneName: "timezone"
		},
		listbox: {
			noData: "No data",
			noMatch: "No matching data",
			search: "Search…"
		},
		modal: { close: "Close" },
		pagination: {
			first: "First page",
			last: "Last page",
			next: "Next page",
			page: "Page {page}",
			prev: "Previous page"
		},
		pinInput: { input: "pin input {index} of {length}" },
		pricingTable: { caption: "Pricing plan comparison" },
		prose: {
			codeCollapse: {
				closeText: "Collapse",
				name: "code",
				openText: "Expand"
			},
			collapsible: {
				closeText: "Hide",
				name: "properties",
				openText: "Show"
			},
			pre: { copy: "Copy code to clipboard" },
			prompt: {
				copy: "Copy prompt",
				openIn: "Open in {name}"
			}
		},
		chatReasoning: {
			thinking: "Thinking…",
			thought: "Thought",
			thoughtFor: "Thought for {duration}"
		},
		sidebar: {
			close: "Close",
			toggle: "Toggle"
		},
		selectMenu: {
			create: "Create \"{label}\"",
			noData: "No data",
			noMatch: "No matching data",
			search: "Search…"
		},
		skeleton: { label: "loading" },
		slideover: { close: "Close" },
		slider: {
			max: "Maximum",
			min: "Minimum",
			thumb: "Thumb",
			value: "Value {index} of {total}"
		},
		stepper: { label: "progress" },
		table: { noData: "No data" },
		toast: { close: "Close" },
		toaster: {
			label: "Notification",
			viewport: "Notifications ({hotkey})"
		}
	}
});
// node_modules/@nuxt/ui/dist/runtime/composables/useLocale.js
var localeContextInjectionKey = Symbol.for("nuxt-ui.locale-context");
var _useLocale = (localeOverrides) => {
	const locale = localeOverrides || toRef(inject(localeContextInjectionKey, en_default));
	return buildLocaleContext(computed(() => locale.value || en_default));
};
var useLocale = _useLocale;
// node_modules/@nuxt/ui/dist/runtime/composables/usePortal.js
var portalTargetInjectionKey = Symbol("nuxt-ui.portal-target");
function usePortal(portal) {
	const globalPortal = inject(portalTargetInjectionKey, void 0);
	const value = computed(() => portal.value === true ? globalPortal?.value : portal.value);
	const disabled = computed(() => typeof value.value === "boolean" ? !value.value : false);
	const to = computed(() => typeof value.value === "boolean" ? "body" : value.value);
	return computed(() => ({
		to: to.value,
		disabled: disabled.value
	}));
}
// node_modules/@nuxt/ui/dist/runtime/composables/useToast.js
var toastMaxInjectionKey = Symbol("nuxt-ui.toast-max");
var ANIMATION_DURATION = 200;
function useToast() {
	const toasts = useState("toasts", () => []);
	const max = inject(toastMaxInjectionKey, void 0);
	const running = ref(false);
	const queue = [];
	const generateId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
	function mergeDuplicate(index, toast) {
		const existing = toasts.value[index];
		const now = Date.now();
		const animating = now - (existing._animatedAt || 0) < ANIMATION_DURATION;
		toasts.value[index] = {
			...existing,
			...toast,
			_duplicate: animating ? existing._duplicate : (existing._duplicate || 0) + 1,
			_animatedAt: animating ? existing._animatedAt : now
		};
	}
	async function processQueue() {
		if (running.value || queue.length === 0) return;
		running.value = true;
		while (queue.length > 0) {
			await nextTick();
			const toast = queue.shift();
			const maxValue = max?.value ?? 5;
			if (maxValue <= 0) {
				if (toasts.value.length) toasts.value = [];
				continue;
			}
			const existingIndex = toasts.value.findIndex((t) => t.id === toast.id);
			if (existingIndex !== -1) {
				mergeDuplicate(existingIndex, toast);
				continue;
			}
			toasts.value = [...toasts.value, {
				...toast,
				_animatedAt: Date.now()
			}].slice(-maxValue);
		}
		running.value = false;
	}
	function add(toast) {
		const body = {
			id: generateId(),
			open: true,
			...toast
		};
		const existingIndex = toasts.value.findIndex((t) => t.id === body.id);
		if (existingIndex !== -1) {
			mergeDuplicate(existingIndex, body);
			return body;
		}
		queue.push(body);
		processQueue();
		return body;
	}
	function update(id, toast) {
		const index = toasts.value.findIndex((t) => t.id === id);
		if (index !== -1) {
			toasts.value[index] = {
				...toasts.value[index],
				...toast,
				duration: toast.duration,
				open: true,
				_updated: true
			};
			nextTick(() => {
				const i = toasts.value.findIndex((t) => t.id === id);
				if (i !== -1 && toasts.value[i]._updated) toasts.value[i] = {
					...toasts.value[i],
					_updated: void 0
				};
			});
		}
	}
	function remove(id) {
		const index = toasts.value.findIndex((t) => t.id === id);
		if (index !== -1 && toasts.value[index]._updated) return;
		if (index !== -1) toasts.value[index] = {
			...toasts.value[index],
			open: false
		};
		setTimeout(() => {
			toasts.value = toasts.value.filter((t) => t.id !== id);
		}, 200);
	}
	function clear() {
		toasts.value = [];
	}
	return {
		toasts,
		add,
		update,
		remove,
		clear
	};
}
// virtual:nuxt:.nuxt%2Fui%2Ftoaster.ts
var virtual_nuxt__nuxt_2Fui_2Ftoaster_default = {
	"slots": {
		"viewport": "fixed flex flex-col w-[calc(100%-2rem)] sm:w-96 z-[100] data-[expanded=true]:h-(--height) focus:outline-none",
		"base": "pointer-events-auto absolute inset-x-0 z-(--index) transform-(--transform) data-[collapsed=true]:data-[front=false]:h-(--front-height) data-[collapsed=true]:data-[front=false]:*:opacity-0 data-[front=false]:*:transition-opacity data-[front=false]:*:duration-100 data-[state=closed]:animate-[toast-closed_200ms_var(--ease-out)] data-[state=closed]:data-[collapsed=true]:data-[front=false]:animate-[toast-collapsed-closed_200ms_var(--ease-out)] motion-safe:data-[state=open]:data-[pulsing=odd]:animate-[toast-pulse-a_200ms_var(--ease-out)] motion-safe:data-[state=open]:data-[pulsing=even]:animate-[toast-pulse-b_200ms_var(--ease-out)] data-[swipe=move]:transition-none transition-[transform,translate,height] duration-200 ease-out motion-reduce:transition-none"
	},
	"variants": {
		"position": {
			"top-left": { "viewport": "left-4" },
			"top-center": { "viewport": "left-1/2 transform -translate-x-1/2" },
			"top-right": { "viewport": "right-4" },
			"bottom-left": { "viewport": "left-4" },
			"bottom-center": { "viewport": "left-1/2 transform -translate-x-1/2" },
			"bottom-right": { "viewport": "right-4" }
		},
		"swipeDirection": {
			"up": "data-[swipe=end]:animate-[toast-slide-up_200ms_var(--ease-out)]",
			"right": "data-[swipe=end]:animate-[toast-slide-right_200ms_var(--ease-out)]",
			"down": "data-[swipe=end]:animate-[toast-slide-down_200ms_var(--ease-out)]",
			"left": "data-[swipe=end]:animate-[toast-slide-left_200ms_var(--ease-out)]"
		}
	},
	"compoundVariants": [
		{
			"position": [
				"top-left",
				"top-center",
				"top-right"
			],
			"class": {
				"viewport": "top-4",
				"base": "top-0 data-[state=open]:animate-[toast-slide-in-from-top_200ms_var(--ease-out)]"
			}
		},
		{
			"position": [
				"bottom-left",
				"bottom-center",
				"bottom-right"
			],
			"class": {
				"viewport": "bottom-4",
				"base": "bottom-0 data-[state=open]:animate-[toast-slide-in-from-bottom_200ms_var(--ease-out)]"
			}
		},
		{
			"swipeDirection": ["left", "right"],
			"class": "data-[swipe=move]:translate-x-(--reka-toast-swipe-move-x) data-[swipe=end]:translate-x-(--reka-toast-swipe-end-x) data-[swipe=cancel]:translate-x-0"
		},
		{
			"swipeDirection": ["up", "down"],
			"class": "data-[swipe=move]:translate-y-(--reka-toast-swipe-move-y) data-[swipe=end]:translate-y-(--reka-toast-swipe-end-y) data-[swipe=cancel]:translate-y-0"
		}
	],
	"defaultVariants": { "position": "bottom-right" }
};
// node_modules/@nuxt/ui/dist/runtime/components/Toaster.vue
var _sfc_main$5 = /*@__PURE__*/ Object.assign({ name: "Toaster" }, { inheritAttrs: false }, {
	__ssrInlineRender: true,
	props: {
		position: {
			type: null,
			required: false
		},
		expand: {
			type: Boolean,
			required: false,
			default: true
		},
		progress: {
			type: Boolean,
			required: false,
			default: true
		},
		portal: {
			type: [Boolean, String],
			required: false,
			skipCheck: true,
			default: true
		},
		max: {
			type: Number,
			required: false,
			default: 5
		},
		class: {
			type: null,
			required: false
		},
		ui: {
			type: Object,
			required: false
		},
		label: {
			type: String,
			required: false
		},
		duration: {
			type: Number,
			required: false,
			default: 5e3
		},
		disableSwipe: {
			type: Boolean,
			required: false
		},
		swipeThreshold: {
			type: Number,
			required: false
		}
	},
	setup(__props) {
		const props = useComponentProps("toaster", __props);
		const loadToast = () => import("./_nuxt/Toast-DsZz5VYP.js");
		const UToast = defineAsyncComponent(loadToast);
		const { toasts, remove } = useToast();
		const { t } = useLocale();
		const appConfig = useAppConfig();
		provide(toastMaxInjectionKey, toRef(() => props.max));
		const providerProps = useForwardProps(reactivePick(props, "duration", "swipeThreshold", "disableSwipe"));
		const portalProps = usePortal(toRef(() => props.portal));
		const swipeDirection = computed(() => {
			switch (props.position) {
				case "top-center": return "up";
				case "top-right":
				case "bottom-right": return "right";
				case "bottom-center": return "down";
				case "top-left":
				case "bottom-left": return "left";
			}
			return "right";
		});
		const ui = computed(() => tv({
			extend: virtual_nuxt__nuxt_2Fui_2Ftoaster_default,
			...appConfig.ui?.toaster || {}
		})({
			position: props.position,
			swipeDirection: swipeDirection.value
		}));
		function onUpdateOpen(value, id) {
			if (value) return;
			remove(id);
		}
		const hovered = ref(false);
		const expanded = computed(() => props.expand || hovered.value);
		const refs = ref([]);
		const height = computed(() => refs.value.reduce((acc, { height: height2 }) => acc + height2 + 16, 0));
		const frontHeight = computed(() => refs.value[refs.value.length - 1]?.height || 0);
		function getOffset(index) {
			return refs.value.slice(index + 1).reduce((acc, { height: height2 }) => acc + height2 + 16, 0);
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(ToastProvider_default), mergeProps({
				"swipe-direction": swipeDirection.value,
				label: unref(props).label ?? unref(t)("toaster.label")
			}, unref(providerProps), _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
						_push(`<!--[-->`);
						ssrRenderList(unref(toasts), (toast, index) => {
							_push(ssrRenderComponent(unref(UToast), mergeProps({
								key: toast.id,
								ref_for: true,
								ref_key: "refs",
								ref: refs,
								progress: unref(props).progress
							}, { ref_for: true }, unref(omit)(toast, [
								"id",
								"close",
								"_duplicate",
								"_updated",
								"_animatedAt",
								"onClick"
							]), {
								close: toast.close,
								"data-collapsed": !expanded.value,
								"data-front": !expanded.value && index === unref(toasts).length - 1,
								"data-pulsing": toast._duplicate ? toast._duplicate % 2 === 0 ? "even" : "odd" : void 0,
								style: {
									"--index": index - unref(toasts).length + unref(toasts).length,
									"--before": unref(toasts).length - 1 - index,
									"--offset": getOffset(index),
									"--scale": expanded.value ? "1" : "calc(1 - var(--before) * var(--scale-factor))",
									"--translate": expanded.value ? "calc(var(--offset) * var(--translate-factor))" : "calc(var(--before) * var(--gap))",
									"--transform": "translateY(var(--translate)) scale(var(--scale))"
								},
								"data-slot": "base",
								class: ui.value.base({ class: [unref(props).ui?.base, toast.onClick ? "cursor-pointer" : void 0] }),
								"onUpdate:open": ($event) => onUpdateOpen($event, toast.id),
								onClick: ($event) => toast.onClick && toast.onClick(toast)
							}), null, _parent, _scopeId));
						});
						_push(`<!--]-->`);
						_push(ssrRenderComponent(unref(ToastPortal_default), unref(portalProps), {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(unref(ToastViewport_default), {
									label: unref(t)("toaster.viewport"),
									"data-expanded": expanded.value,
									"data-slot": "viewport",
									class: ui.value.viewport({ class: [unref(props).ui?.viewport, unref(props).class] }),
									style: {
										"--scale-factor": "0.05",
										"--translate-factor": unref(props).position?.startsWith("top") ? "1px" : "-1px",
										"--gap": unref(props).position?.startsWith("top") ? "16px" : "-16px",
										"--front-height": `${frontHeight.value}px`,
										"--height": `${height.value}px`
									},
									onMouseenter: ($event) => hovered.value = true,
									onMouseleave: ($event) => hovered.value = false
								}, null, _parent, _scopeId));
								else return [createVNode(unref(ToastViewport_default), {
									label: unref(t)("toaster.viewport"),
									"data-expanded": expanded.value,
									"data-slot": "viewport",
									class: ui.value.viewport({ class: [unref(props).ui?.viewport, unref(props).class] }),
									style: {
										"--scale-factor": "0.05",
										"--translate-factor": unref(props).position?.startsWith("top") ? "1px" : "-1px",
										"--gap": unref(props).position?.startsWith("top") ? "16px" : "-16px",
										"--front-height": `${frontHeight.value}px`,
										"--height": `${height.value}px`
									},
									onMouseenter: ($event) => hovered.value = true,
									onMouseleave: ($event) => hovered.value = false
								}, null, 8, [
									"label",
									"data-expanded",
									"class",
									"style",
									"onMouseenter",
									"onMouseleave"
								])];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [
						renderSlot(_ctx.$slots, "default"),
						(openBlock(true), createBlock(Fragment, null, renderList(unref(toasts), (toast, index) => {
							return openBlock(), createBlock(unref(UToast), mergeProps({
								key: toast.id,
								ref_for: true,
								ref_key: "refs",
								ref: refs,
								progress: unref(props).progress
							}, { ref_for: true }, unref(omit)(toast, [
								"id",
								"close",
								"_duplicate",
								"_updated",
								"_animatedAt",
								"onClick"
							]), {
								close: toast.close,
								"data-collapsed": !expanded.value,
								"data-front": !expanded.value && index === unref(toasts).length - 1,
								"data-pulsing": toast._duplicate ? toast._duplicate % 2 === 0 ? "even" : "odd" : void 0,
								style: {
									"--index": index - unref(toasts).length + unref(toasts).length,
									"--before": unref(toasts).length - 1 - index,
									"--offset": getOffset(index),
									"--scale": expanded.value ? "1" : "calc(1 - var(--before) * var(--scale-factor))",
									"--translate": expanded.value ? "calc(var(--offset) * var(--translate-factor))" : "calc(var(--before) * var(--gap))",
									"--transform": "translateY(var(--translate)) scale(var(--scale))"
								},
								"data-slot": "base",
								class: ui.value.base({ class: [unref(props).ui?.base, toast.onClick ? "cursor-pointer" : void 0] }),
								"onUpdate:open": ($event) => onUpdateOpen($event, toast.id),
								onClick: ($event) => toast.onClick && toast.onClick(toast)
							}), null, 16, [
								"progress",
								"close",
								"data-collapsed",
								"data-front",
								"data-pulsing",
								"style",
								"class",
								"onUpdate:open",
								"onClick"
							]);
						}), 128)),
						createVNode(unref(ToastPortal_default), unref(portalProps), {
							default: withCtx(() => [createVNode(unref(ToastViewport_default), {
								label: unref(t)("toaster.viewport"),
								"data-expanded": expanded.value,
								"data-slot": "viewport",
								class: ui.value.viewport({ class: [unref(props).ui?.viewport, unref(props).class] }),
								style: {
									"--scale-factor": "0.05",
									"--translate-factor": unref(props).position?.startsWith("top") ? "1px" : "-1px",
									"--gap": unref(props).position?.startsWith("top") ? "16px" : "-16px",
									"--front-height": `${frontHeight.value}px`,
									"--height": `${height.value}px`
								},
								onMouseenter: ($event) => hovered.value = true,
								onMouseleave: ($event) => hovered.value = false
							}, null, 8, [
								"label",
								"data-expanded",
								"class",
								"style",
								"onMouseenter",
								"onMouseleave"
							])]),
							_: 1
						}, 16)
					];
				}),
				_: 3
			}, _parent));
		};
	}
});
var _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Toaster.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var Toaster_default = Object.assign(_sfc_main$5, { __name: "UToaster" });
// node_modules/@nuxt/ui/dist/runtime/composables/useOverlay.js
function _useOverlay() {
	const overlays = shallowReactive([]);
	const create = (component, _options) => {
		const { props, defaultOpen, destroyOnClose } = _options || {};
		const options = reactive({
			id: Symbol(""),
			isOpen: !!defaultOpen,
			component: markRaw(component),
			isMounted: !!defaultOpen,
			destroyOnClose: !!destroyOnClose,
			originalProps: props || {},
			props: { ...props },
			resolvers: []
		});
		overlays.push(options);
		return {
			...options,
			open: (props2) => open(options.id, props2),
			close: (value) => close(options.id, value),
			patch: (props2) => patch(options.id, props2)
		};
	};
	const open = (id, props) => {
		const overlay = getOverlay(id);
		if (props) overlay.props = {
			...overlay.originalProps,
			...props
		};
		else overlay.props = { ...overlay.originalProps };
		overlay.isOpen = true;
		overlay.isMounted = true;
		const result = new Promise((resolve) => overlay.resolvers.push(resolve));
		return Object.assign(result, {
			id,
			isMounted: overlay.isMounted,
			isOpen: overlay.isOpen,
			result
		});
	};
	const close = (id, value) => {
		const overlay = getOverlay(id);
		overlay.isOpen = false;
		for (const resolve of overlay.resolvers.splice(0)) resolve(value);
	};
	const closeAll = () => {
		overlays.forEach((overlay) => close(overlay.id));
	};
	const unmount = (id) => {
		const overlay = getOverlay(id);
		overlay.isMounted = false;
		if (overlay.destroyOnClose) {
			const index = overlays.findIndex((overlay2) => overlay2.id === id);
			overlays.splice(index, 1);
		}
	};
	const patch = (id, props) => {
		const overlay = getOverlay(id);
		overlay.props = {
			...overlay.props,
			...props
		};
	};
	const getOverlay = (id) => {
		const overlay = overlays.find((overlay2) => overlay2.id === id);
		if (!overlay) throw new Error("Overlay not found");
		return overlay;
	};
	const isOpen = (id) => {
		return getOverlay(id).isOpen;
	};
	return {
		overlays,
		open,
		close,
		closeAll,
		create,
		patch,
		unmount,
		isOpen
	};
}
var useOverlay = /* @__PURE__ */ createSharedComposable(_useOverlay);
// node_modules/@nuxt/ui/dist/runtime/components/OverlayProvider.vue
var _sfc_main$4 = {
	__name: "UOverlayProvider",
	__ssrInlineRender: true,
	setup(__props) {
		const { overlays, unmount, close } = useOverlay();
		const mountedOverlays = computed(() => overlays.filter((overlay) => overlay.isMounted));
		const onAfterLeave = (id) => {
			close(id);
			unmount(id);
		};
		const onClose = (id, value) => {
			close(id, value);
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			ssrRenderList(mountedOverlays.value, (overlay) => {
				ssrRenderVNode(_push, createVNode(resolveDynamicComponent(overlay.component), mergeProps({ key: overlay.id }, { ref_for: true }, overlay.props, {
					open: overlay.isOpen,
					"onUpdate:open": ($event) => overlay.isOpen = $event,
					onClose: (value) => onClose(overlay.id, value),
					"onAfter:leave": ($event) => onAfterLeave(overlay.id)
				}), null), _parent);
			});
			_push(`<!--]-->`);
		};
	}
};
var _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/OverlayProvider.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
// node_modules/@nuxt/ui/dist/runtime/components/App.vue
var _sfc_main$3 = /*@__PURE__*/ Object.assign({ name: "App" }, {
	__ssrInlineRender: true,
	props: {
		tooltip: {
			type: Object,
			required: false
		},
		toaster: {
			type: [Object, null],
			required: false
		},
		locale: {
			type: Object,
			required: false
		},
		portal: {
			type: [Boolean, String],
			required: false,
			skipCheck: true,
			default: "body"
		},
		dir: {
			type: String,
			required: false
		},
		scrollBody: {
			type: [Boolean, Object],
			required: false
		},
		nonce: {
			type: String,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		const configProviderProps = useForwardProps$1(reactivePick(props, "scrollBody", "nonce"));
		const tooltipProps = toRef(() => props.tooltip);
		const toasterProps = toRef(() => props.toaster);
		const parentLocale = inject(localeContextInjectionKey, void 0);
		const locale = toRef(() => {
			const value = props.locale || parentLocale?.value;
			return props.dir ? {
				...value || en_default,
				dir: props.dir
			} : value;
		});
		provide(localeContextInjectionKey, locale);
		const portal = toRef(() => props.portal);
		provide(portalTargetInjectionKey, portal);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(ConfigProvider_default), mergeProps({
				"use-id": () => useId(),
				dir: props.dir || locale.value?.dir,
				locale: locale.value?.code
			}, unref(configProviderProps), _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(unref(TooltipProvider_default), tooltipProps.value, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								if (__props.toaster !== null) _push(ssrRenderComponent(Toaster_default, toasterProps.value, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
										else return [renderSlot(_ctx.$slots, "default")];
									}),
									_: 3
								}, _parent, _scopeId));
								else ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
								_push(ssrRenderComponent(_sfc_main$4, null, null, _parent, _scopeId));
							} else return [__props.toaster !== null ? (openBlock(), createBlock(Toaster_default, mergeProps({ key: 0 }, toasterProps.value), {
								default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
								_: 3
							}, 16)) : renderSlot(_ctx.$slots, "default", {}, void 0, void 0, 1), createVNode(_sfc_main$4)];
						}),
						_: 3
					}, _parent, _scopeId));
					else return [createVNode(unref(TooltipProvider_default), tooltipProps.value, {
						default: withCtx(() => [__props.toaster !== null ? (openBlock(), createBlock(Toaster_default, mergeProps({ key: 0 }, toasterProps.value), {
							default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
							_: 3
						}, 16)) : renderSlot(_ctx.$slots, "default", {}, void 0, void 0, 1), createVNode(_sfc_main$4)]),
						_: 3
					}, 16)];
				}),
				_: 3
			}, _parent));
		};
	}
});
var _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/App.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var App_default = Object.assign(_sfc_main$3, { __name: "UApp" });
// node_modules/nuxt/dist/app/composables/layout.js
function routeRulesMatcher(path) {
	return virtual_nuxt__nuxt_2Froute_rules_default(path);
}
function resolveLayoutName(route, name) {
	return unref(name) ?? route?.meta.layout ?? routeRulesMatcher(route?.path ?? "/").appLayout ?? "default";
}
// virtual:nuxt:.nuxt%2Flayouts.mjs
var virtual_nuxt__nuxt_2Flayouts_default = { default: defineAsyncComponent(() => import("./_nuxt/default-Clj2r-2v.js").then((m) => m.default || m)) };
// node_modules/nuxt/dist/app/components/nuxt-layout.js
var LayoutLoader = defineComponent({
	name: "LayoutLoader",
	inheritAttrs: false,
	props: {
		name: String,
		layoutProps: Object
	},
	setup(props, context) {
		return () => h(virtual_nuxt__nuxt_2Flayouts_default[props.name], props.layoutProps, context.slots);
	}
});
var nuxt_layout_default = defineComponent({
	name: "NuxtLayout",
	inheritAttrs: false,
	props: {
		name: {
			type: [
				String,
				Boolean,
				Object
			],
			default: null
		},
		fallback: {
			type: [String, Object],
			default: null
		}
	},
	setup(props, context) {
		const nuxtApp = useNuxtApp();
		const injectedRoute = inject(PageRouteSymbol);
		const route = !injectedRoute || injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
		const layout = computed(() => {
			let layout = resolveLayoutName(route, props.name);
			if (layout && !(layout in virtual_nuxt__nuxt_2Flayouts_default)) {
				if (props.fallback) layout = unref(props.fallback);
			}
			return layout;
		});
		provide(LayoutSymbol, layout);
		const resolveRouteLayout = (routeToCheck) => resolveLayoutName(routeToCheck, props.name);
		const layoutRef = shallowRef();
		context.expose({ layoutRef });
		const done = nuxtApp.deferHydration();
		let lastLayout;
		return () => {
			const hasTransition = !!layout.value && layout.value in virtual_nuxt__nuxt_2Flayouts_default && !!(route?.meta.layoutTransition ?? false);
			const transitionProps = hasTransition && _mergeTransitionProps([
				route?.meta.layoutTransition,
				false,
				{
					onBeforeLeave() {
						_startTransition(nuxtApp);
					},
					onAfterLeave() {
						_finishTransition(nuxtApp);
					}
				}
			]);
			const previouslyRenderedLayout = lastLayout;
			lastLayout = layout.value;
			return _wrapInTransition(transitionProps, { default: () => h(Suspense, {
				suspensible: true,
				onResolve: async () => {
					await nextTick(done);
				}
			}, { default: () => h(LayoutProvider, {
				layoutProps: mergeProps(context.attrs, route.meta.layoutProps ?? {}, { ref: layoutRef }),
				key: layout.value || void 0,
				name: layout.value,
				shouldProvide: !props.name,
				resolveRouteLayout,
				isRenderingNewLayout: (name) => {
					return name !== previouslyRenderedLayout && name === layout.value;
				},
				hasTransition
			}, context.slots) }) }).default();
		};
	}
});
var LayoutProvider = defineComponent({
	name: "NuxtLayoutProvider",
	inheritAttrs: false,
	props: {
		name: { type: [String, Boolean] },
		layoutProps: { type: Object },
		hasTransition: { type: Boolean },
		shouldProvide: { type: Boolean },
		isRenderingNewLayout: {
			type: Function,
			required: true
		},
		resolveRouteLayout: {
			type: Function,
			required: true
		}
	},
	setup(props, context) {
		const name = props.name;
		if (props.shouldProvide) provide(LayoutMetaSymbol, { isCurrent: (route) => name === false || name === props.resolveRouteLayout(route) });
		const injectedRoute = inject(PageRouteSymbol);
		const isNotWithinNuxtPage = injectedRoute && injectedRoute === useRoute();
		const enclosingLayout = inject(LayoutMetaSymbol, null);
		if (isNotWithinNuxtPage) {
			const vueRouterRoute = useRoute$1();
			const reactiveChildRoute = {};
			for (const _key in vueRouterRoute) {
				const key = _key;
				Object.defineProperty(reactiveChildRoute, key, {
					enumerable: true,
					get: () => {
						return props.isRenderingNewLayout(props.name) && (!enclosingLayout || enclosingLayout.isCurrent(vueRouterRoute)) ? vueRouterRoute[key] : injectedRoute[key];
					}
				});
			}
			provide(PageRouteSymbol, shallowReactive(reactiveChildRoute));
		}
		return () => {
			if (!name || typeof name === "string" && !(name in virtual_nuxt__nuxt_2Flayouts_default)) return context.slots.default?.();
			return h(LayoutLoader, {
				key: name,
				layoutProps: props.layoutProps,
				name
			}, context.slots);
		};
	}
});
// node_modules/nuxt/dist/app/components/route-provider.js
var defineRouteProvider = (name = "RouteProvider") => defineComponent({
	name,
	props: {
		route: {
			type: Object,
			required: true
		},
		vnode: Object,
		vnodeRef: Object,
		renderKey: String,
		trackRootNodes: Boolean,
		routeRecord: Object
	},
	setup(props) {
		const previousKey = props.renderKey;
		const previousRoute = props.route;
		const route = {};
		for (const key in props.route) Object.defineProperty(route, key, {
			get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
			enumerable: true
		});
		provide(PageRouteSymbol, shallowReactive(route));
		return () => {
			if (!props.vnode) return props.vnode;
			return h(props.vnode, { ref: props.vnodeRef });
		};
	}
});
var RouteProvider = defineRouteProvider();
// node_modules/nuxt/dist/pages/runtime/page.js
var page_default = defineComponent({
	name: "NuxtPage",
	inheritAttrs: false,
	props: {
		name: { type: String },
		transition: {
			type: [Boolean, Object],
			default: void 0
		},
		keepalive: {
			type: [Boolean, Object],
			default: void 0
		},
		route: { type: Object },
		pageKey: {
			type: [Function, String],
			default: null
		}
	},
	setup(props, { attrs, slots, expose }) {
		const nuxtApp = useNuxtApp();
		const pageRef = ref();
		inject(PageRouteSymbol, null);
		expose({ pageRef });
		inject(LayoutMetaSymbol, null);
		nuxtApp.deferHydration();
		return () => {
			return h(RouterView, {
				name: props.name,
				route: props.route,
				...attrs
			}, { default: markStableSlot((routeProps) => {
				return h(Suspense, { suspensible: true }, { default() {
					return h(RouteProvider, {
						vnode: slots.default ? normalizeSlot(slots.default, routeProps) : routeProps.Component,
						route: routeProps.route,
						vnodeRef: pageRef
					});
				} });
			}) });
		};
	}
});
function markStableSlot(fn) {
	const wrapped = ((routeProps) => {
		const result = fn(routeProps);
		if (Array.isArray(result)) return result;
		if (result == null || !isVNode(result)) return [createCommentVNode()];
		return [result];
	});
	wrapped._n = true;
	return wrapped;
}
function normalizeSlot(slot, data) {
	const slotContent = slot(data);
	return slotContent.length === 1 ? h(slotContent[0]) : h(Fragment, void 0, slotContent);
}
// \0plugin-vue:export-helper
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
// app/app.vue
var _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	const _component_UApp = App_default;
	const _component_NuxtLayout = nuxt_layout_default;
	const _component_NuxtPage = page_default;
	_push(ssrRenderComponent(_component_UApp, _attrs, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(ssrRenderComponent(_component_NuxtLayout, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent, _scopeId));
					else return [createVNode(_component_NuxtPage)];
				}),
				_: 1
			}, _parent, _scopeId));
			else return [createVNode(_component_NuxtLayout, null, {
				default: withCtx(() => [createVNode(_component_NuxtPage)]),
				_: 1
			})];
		}),
		_: 1
	}, _parent));
}
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var app_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
// node_modules/nuxt/dist/app/components/nuxt-error-page.vue
var _sfc_main$1 = {
	__name: "nuxt-error-page",
	__ssrInlineRender: true,
	props: { error: Object },
	setup(__props) {
		const _error = __props.error;
		const status = Number(_error.statusCode || 500);
		const is404 = status === 404;
		const statusText = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
		const description = _error.message || _error.toString();
		const stack = void 0;
		const _Error404 = defineAsyncComponent(() => import("./_nuxt/error-404-BcOIgqlD.js"));
		const _Error = defineAsyncComponent(() => import("./_nuxt/error-500-BOkAB1Ex.js"));
		const ErrorTemplate = is404 ? _Error404 : _Error;
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({
				status: unref(status),
				statusText: unref(statusText),
				statusCode: unref(status),
				statusMessage: unref(statusText),
				description: unref(description),
				stack: unref(stack)
			}, _attrs), null, _parent));
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
// virtual:nuxt:.nuxt%2Fisland-renderer.mjs
var IslandRenderer = () => null;
// node_modules/nuxt/dist/app/components/nuxt-root.vue
var _sfc_main = {
	__name: "nuxt-root",
	__ssrInlineRender: true,
	setup(__props) {
		const nuxtApp = useNuxtApp();
		nuxtApp.deferHydration();
		nuxtApp.ssrContext.url;
		const SingleRenderer = false;
		provide(PageRouteSymbol, useRoute());
		nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup", []);
		const error = useError();
		const abortRender = error.value && !nuxtApp.ssrContext.error;
		function invokeAppErrorHandler(err, target, info) {
			const errorHandler = nuxtApp.vueApp.config.errorHandler;
			if (errorHandler && !errorHandler.__nuxt_default) try {
				errorHandler(err, target, info);
			} catch (handlerError) {
				console.error("[nuxt] Error in `app.config.errorHandler`", handlerError);
			}
		}
		onErrorCaptured((err, target, info) => {
			nuxtApp.hooks.callHook("vue:error", err, target, info)?.catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
			{
				const p = nuxtApp.runWithContext(() => showError(err));
				onServerPrefetch(() => p);
				invokeAppErrorHandler(err, target, info);
				return false;
			}
		});
		const islandContext = nuxtApp.ssrContext.islandContext;
		return (_ctx, _push, _parent, _attrs) => {
			ssrRenderSuspense(_push, {
				default: () => {
					if (unref(abortRender)) _push(`<div></div>`);
					else if (unref(error)) _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
					else if (unref(islandContext)) _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
					else if (unref(SingleRenderer)) ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
					else _push(ssrRenderComponent(unref(app_default), null, null, _parent));
				},
				_: 1
			});
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/nuxt/dist/app/components/nuxt-root.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
// node_modules/nuxt/dist/app/entry.js
var entry = async function createNuxtAppServer(ssrContext) {
	const vueApp = createApp(_sfc_main);
	const nuxt = createNuxtApp({
		vueApp,
		ssrContext
	});
	try {
		await applyPlugins(nuxt, virtual_nuxt__nuxt_2Fplugins_server_default);
		await nuxt.hooks.callHook("app:created", vueApp);
	} catch (error) {
		await nuxt.hooks.callHook("app:error", error);
		nuxt.payload.error ||= createError$2(error);
	}
	if (ssrContext && (ssrContext["~renderResponse"] || ssrContext._renderResponse)) throw new Error("skipping render");
	return vueApp;
};
var entry_default = ((ssrContext) => entry(ssrContext));
export { focusFirst as C, focus as S, getTabbableEdges as T, Teleport_default as _, TOAST_SWIPE_CANCEL as a, EVENT_OPTIONS as b, TOAST_SWIPE_START as c, getAnnounceTextContent as d, entry_default as default, handleAndDispatchCustomEvent as f, useCollection as g, VisuallyHidden_default as h, injectTooltipProviderContext as i, VIEWPORT_PAUSE as l, injectToastProviderContext as m, usePortal as n, TOAST_SWIPE_END as o, isDeltaInDirection as p, useLocale as r, TOAST_SWIPE_MOVE as s, _plugin_vue_export_helper_default as t, VIEWPORT_RESUME as u, AUTOFOCUS_ON_MOUNT as v, getTabbableCandidates as w, containsComposed as x, AUTOFOCUS_ON_UNMOUNT as y };

//# sourceMappingURL=server.mjs.map