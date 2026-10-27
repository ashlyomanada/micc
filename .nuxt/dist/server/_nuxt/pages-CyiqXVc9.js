import { n as useSeoMeta } from "./head-rFsGK3Ox.js";
import { t as useAppConfig } from "./config-CAn_Nf-x.js";
import { a as getSlotChildrenText, l as resolveAs, n as useForwardProps, r as useComponentProps, t as tv, u as Primitive } from "./tv-CMuosA3a.js";
import { n as _sfc_main$3 } from "./Modal-B3gTgqQa.js";
import { r as useLocale } from "../server.mjs";
import { n as _sfc_main$6, o as _sfc_main$5, t as _sfc_main$4 } from "./Button-Cwxo7d33.js";
import { n as usePrefix, r as _sfc_main$7, t as site } from "./site-BjEVYaKT.js";
import { t as SectionHeading_default } from "./SectionHeading-DyMHv_DD.js";
import { t as _sfc_main$8 } from "./Card-_AY5nbBS.js";
import { t as _sfc_main$9 } from "./PageCard-bdsePQLp.js";
import { Fragment, computed, createBlock, createCommentVNode, createTextVNode, createVNode, defineComponent, isRef, mergeProps, openBlock, ref, renderList, renderSlot, toDisplayString, unref, useSSRContext, useSlots, watch, withCtx } from "vue";
import { ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderSlot } from "vue/server-renderer";
import { reactivePick } from "/Users/ccci/Project/node_modules/@vueuse/core/dist/index.js";
import useEmblaCarousel from "/Users/ccci/Project/node_modules/embla-carousel-vue/esm/embla-carousel-vue.esm.js";
// app/components/HeroSection.vue?vue&type=script&setup=true&lang.ts
var HeroSection_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "HeroSection",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			const _component_UContainer = _sfc_main$7;
			const _component_UButton = _sfc_main$4;
			_push(`<section${ssrRenderAttrs(mergeProps({
				id: "top",
				class: "relative flex min-h-[94svh] items-center overflow-hidden bg-slate-900 text-white"
			}, _attrs))}><img${ssrRenderAttr("src", unref(site).hero.image)}${ssrRenderAttr("alt", `Placeholder landscape representing ${unref(site).name}`)} width="1200" height="800" fetchpriority="high" class="absolute inset-0 h-full w-full object-cover"><div class="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/20"></div>`);
			_push(ssrRenderComponent(_component_UContainer, { class: "relative z-10 py-32" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="max-w-4xl"${_scopeId}><p class="mb-5 text-sm font-bold uppercase tracking-[.25em] text-brand-200"${_scopeId}>${ssrInterpolate(unref(site).tagline)}</p><h1 class="font-display text-5xl font-extrabold leading-[1.03] tracking-tight sm:text-7xl lg:text-8xl"${_scopeId}>${ssrInterpolate(unref(site).name)}</h1><p class="mt-7 font-display text-xl font-medium sm:text-2xl"${_scopeId}>${ssrInterpolate(unref(site).hero.subtitle)}</p>`);
						_push(ssrRenderComponent(_component_UButton, {
							to: "/leadership",
							label: unref(site).hero.cta,
							"trailing-icon": "i-lucide-arrow-right",
							size: "lg",
							class: "mt-9"
						}, null, _parent, _scopeId));
						_push(`</div>`);
					} else return [createVNode("div", { class: "max-w-4xl" }, [
						createVNode("p", { class: "mb-5 text-sm font-bold uppercase tracking-[.25em] text-brand-200" }, toDisplayString(unref(site).tagline), 1),
						createVNode("h1", { class: "font-display text-5xl font-extrabold leading-[1.03] tracking-tight sm:text-7xl lg:text-8xl" }, toDisplayString(unref(site).name), 1),
						createVNode("p", { class: "mt-7 font-display text-xl font-medium sm:text-2xl" }, toDisplayString(unref(site).hero.subtitle), 1),
						createVNode(_component_UButton, {
							to: "/leadership",
							label: unref(site).hero.cta,
							"trailing-icon": "i-lucide-arrow-right",
							size: "lg",
							class: "mt-9"
						}, null, 8, ["label"])
					])];
				}),
				_: 1
			}, _parent));
			_push(`<div class="absolute bottom-8 right-8 hidden text-xs font-semibold uppercase tracking-[.25em] text-white/70 md:block">Gather · Grow · Go</div></section>`);
		};
	}
});
// app/components/HeroSection.vue
var _sfc_setup$11 = HeroSection_vue_vue_type_script_setup_true_lang_default.setup;
HeroSection_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
	return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
var HeroSection_default = Object.assign(HeroSection_vue_vue_type_script_setup_true_lang_default, { __name: "HeroSection" });
// app/components/LiteYouTube.vue?vue&type=script&setup=true&lang.ts
var LiteYouTube_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "LiteYouTube",
	__ssrInlineRender: true,
	props: {
		videoId: {},
		title: {}
	},
	setup(__props) {
		const props = __props;
		const loaded = ref(false);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_UIcon = _sfc_main$5;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "relative aspect-video overflow-hidden rounded-2xl bg-slate-900" }, _attrs))}>`);
			if (unref(loaded)) _push(`<iframe class="absolute inset-0 h-full w-full"${ssrRenderAttr("src", `https://www.youtube-nocookie.com/embed/${props.videoId}?autoplay=1`)}${ssrRenderAttr("title", props.title)} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>`);
			else {
				_push(`<button class="group absolute inset-0 grid w-full place-items-center text-white"${ssrRenderAttr("aria-label", `Play ${__props.title}`)}><div class="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950"></div><div class="relative text-center"><span class="mx-auto grid size-16 place-items-center rounded-full bg-white text-primary shadow-xl transition group-hover:scale-110">`);
				_push(ssrRenderComponent(_component_UIcon, {
					name: "i-lucide-play",
					class: "size-7"
				}, null, _parent));
				_push(`</span><span class="mt-4 block text-sm font-medium">${ssrInterpolate(__props.title)}</span></div></button>`);
			}
			_push(`</div>`);
		};
	}
});
// app/components/LiteYouTube.vue
var _sfc_setup$10 = LiteYouTube_vue_vue_type_script_setup_true_lang_default.setup;
LiteYouTube_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LiteYouTube.vue");
	return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
var LiteYouTube_default = Object.assign(LiteYouTube_vue_vue_type_script_setup_true_lang_default, { __name: "LiteYouTube" });
// app/components/SermonsSection.vue?vue&type=script&setup=true&lang.ts
var SermonsSection_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "SermonsSection",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			const _component_UContainer = _sfc_main$7;
			const _component_SectionHeading = SectionHeading_default;
			const _component_UButton = _sfc_main$4;
			const _component_UCard = _sfc_main$8;
			const _component_LiteYouTube = LiteYouTube_default;
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 sm:py-24" }, _attrs))}>`);
			_push(ssrRenderComponent(_component_UContainer, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="grid items-center gap-10 lg:grid-cols-[.85fr_1.15fr]"${_scopeId}><div${_scopeId}>`);
						_push(ssrRenderComponent(_component_SectionHeading, {
							eyebrow: "Watch and listen",
							title: unref(site).sermons.title,
							description: unref(site).sermons.description
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_component_UButton, {
							to: unref(site).sermons.url,
							target: "_blank",
							label: "More Sermons",
							"trailing-icon": "i-lucide-arrow-up-right",
							size: "lg"
						}, null, _parent, _scopeId));
						_push(`</div>`);
						_push(ssrRenderComponent(_component_UCard, { class: "overflow-hidden rounded-3xl border-0 bg-white shadow-xl" }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(_component_LiteYouTube, {
									"video-id": unref(site).sermons.videoId,
									title: unref(site).sermons.title
								}, null, _parent, _scopeId));
								else return [createVNode(_component_LiteYouTube, {
									"video-id": unref(site).sermons.videoId,
									title: unref(site).sermons.title
								}, null, 8, ["video-id", "title"])];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div>`);
					} else return [createVNode("div", { class: "grid items-center gap-10 lg:grid-cols-[.85fr_1.15fr]" }, [createVNode("div", null, [createVNode(_component_SectionHeading, {
						eyebrow: "Watch and listen",
						title: unref(site).sermons.title,
						description: unref(site).sermons.description
					}, null, 8, ["title", "description"]), createVNode(_component_UButton, {
						to: unref(site).sermons.url,
						target: "_blank",
						label: "More Sermons",
						"trailing-icon": "i-lucide-arrow-up-right",
						size: "lg"
					}, null, 8, ["to"])]), createVNode(_component_UCard, { class: "overflow-hidden rounded-3xl border-0 bg-white shadow-xl" }, {
						default: withCtx(() => [createVNode(_component_LiteYouTube, {
							"video-id": unref(site).sermons.videoId,
							title: unref(site).sermons.title
						}, null, 8, ["video-id", "title"])]),
						_: 1
					})])];
				}),
				_: 1
			}, _parent));
			_push(`</section>`);
		};
	}
});
// app/components/SermonsSection.vue
var _sfc_setup$9 = SermonsSection_vue_vue_type_script_setup_true_lang_default.setup;
SermonsSection_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SermonsSection.vue");
	return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var SermonsSection_default = Object.assign(SermonsSection_vue_vue_type_script_setup_true_lang_default, { __name: "SermonsSection" });
// virtual:nuxt:.nuxt%2Fui%2Fpage-feature.ts
var virtual_nuxt__nuxt_2Fui_2Fpage_feature_default = {
	"slots": {
		"root": "relative rounded-sm",
		"wrapper": "",
		"leading": "inline-flex items-center justify-center",
		"leadingIcon": "size-5 shrink-0 text-primary",
		"title": "text-base text-pretty font-semibold text-highlighted",
		"description": "text-[15px] text-pretty text-muted"
	},
	"variants": {
		"orientation": {
			"horizontal": {
				"root": "flex items-start gap-2.5",
				"leading": "p-0.5"
			},
			"vertical": { "leading": "mb-2.5" }
		},
		"to": { "true": { "root": ["outline-primary/25 has-focus-visible:outline-3", "transition"] } },
		"title": { "true": { "description": "mt-1" } }
	}
};
// node_modules/@nuxt/ui/dist/runtime/components/PageFeature.vue
var _sfc_main$2 = /*@__PURE__*/ Object.assign({ inheritAttrs: false }, {
	__name: "UPageFeature",
	__ssrInlineRender: true,
	props: {
		as: {
			type: null,
			required: false
		},
		icon: {
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
		orientation: {
			type: null,
			required: false,
			default: "horizontal"
		},
		to: {
			type: null,
			required: false
		},
		target: {
			type: [
				String,
				Object,
				null
			],
			required: false
		},
		onClick: {
			type: Function,
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
		const props = useComponentProps("pageFeature", _props);
		const appConfig = useAppConfig();
		const prefix = usePrefix();
		const ui = computed(() => tv({
			extend: virtual_nuxt__nuxt_2Fui_2Fpage_feature_default,
			...appConfig.ui?.pageFeature || {}
		})({
			orientation: props.orientation,
			title: !!props.title || !!slots.title,
			to: !!props.to || !!props.onClick
		}));
		const ariaLabel = computed(() => {
			return (slots.title && getSlotChildrenText(slots.title()) || props.title || "Feature link").trim();
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Primitive), mergeProps({ as: unref(props).as }, !unref(props).to ? _ctx.$attrs : {}, {
				"data-orientation": unref(props).orientation,
				"data-slot": _ctx.$attrs["data-slot"] ?? "root",
				class: ui.value.root({ class: [unref(props).ui?.root, unref(props).class] }),
				onClick: unref(props).onClick
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (unref(props).icon || !!slots.leading) {
							_push(`<div data-slot="leading" class="${ssrRenderClass(ui.value.leading({ class: unref(props).ui?.leading }))}"${_scopeId}>`);
							ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
								if (unref(props).icon) _push(ssrRenderComponent(_sfc_main$5, {
									name: unref(props).icon,
									"data-slot": "leadingIcon",
									class: ui.value.leadingIcon({ class: unref(props).ui?.leadingIcon })
								}, null, _parent, _scopeId));
								else _push(`<!---->`);
							}, _push, _parent, _scopeId);
							_push(`</div>`);
						} else _push(`<!---->`);
						_push(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: unref(props).ui?.wrapper }))}"${_scopeId}>`);
						if (unref(props).to) _push(ssrRenderComponent(_sfc_main$6, mergeProps({ "aria-label": ariaLabel.value }, {
							"to": unref(props).to,
							"target": unref(props).target,
							..._ctx.$attrs,
							"data-slot": void 0
						}, {
							class: unref(prefix)("focus:outline-none peer"),
							raw: ""
						}), {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`<span class="${ssrRenderClass(unref(prefix)("absolute inset-0"))}" aria-hidden="true"${_scopeId}></span>`);
								else return [createVNode("span", {
									class: unref(prefix)("absolute inset-0"),
									"aria-hidden": "true"
								}, null, 2)];
							}),
							_: 1
						}, _parent, _scopeId));
						else _push(`<!---->`);
						ssrRenderSlot(_ctx.$slots, "default", {}, () => {
							if (unref(props).title || !!slots.title) {
								_push(`<div data-slot="title" class="${ssrRenderClass(ui.value.title({ class: unref(props).ui?.title }))}"${_scopeId}>`);
								ssrRenderSlot(_ctx.$slots, "title", {}, () => {
									_push(`${ssrInterpolate(unref(props).title)}`);
								}, _push, _parent, _scopeId);
								_push(`</div>`);
							} else _push(`<!---->`);
							if (unref(props).description || !!slots.description) {
								_push(`<div data-slot="description" class="${ssrRenderClass(ui.value.description({ class: unref(props).ui?.description }))}"${_scopeId}>`);
								ssrRenderSlot(_ctx.$slots, "description", {}, () => {
									_push(`${ssrInterpolate(unref(props).description)}`);
								}, _push, _parent, _scopeId);
								_push(`</div>`);
							} else _push(`<!---->`);
						}, _push, _parent, _scopeId);
						_push(`</div>`);
					} else return [unref(props).icon || !!slots.leading ? (openBlock(), createBlock("div", {
						key: 0,
						"data-slot": "leading",
						class: ui.value.leading({ class: unref(props).ui?.leading })
					}, [renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [unref(props).icon ? (openBlock(), createBlock(_sfc_main$5, {
						key: 0,
						name: unref(props).icon,
						"data-slot": "leadingIcon",
						class: ui.value.leadingIcon({ class: unref(props).ui?.leadingIcon })
					}, null, 8, ["name", "class"])) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true), createVNode("div", {
						"data-slot": "wrapper",
						class: ui.value.wrapper({ class: unref(props).ui?.wrapper })
					}, [unref(props).to ? (openBlock(), createBlock(_sfc_main$6, mergeProps({
						key: 0,
						"aria-label": ariaLabel.value
					}, {
						"to": unref(props).to,
						"target": unref(props).target,
						..._ctx.$attrs,
						"data-slot": void 0
					}, {
						class: unref(prefix)("focus:outline-none peer"),
						raw: ""
					}), {
						default: withCtx(() => [createVNode("span", {
							class: unref(prefix)("absolute inset-0"),
							"aria-hidden": "true"
						}, null, 2)]),
						_: 1
					}, 16, ["aria-label", "class"])) : createCommentVNode("", true), renderSlot(_ctx.$slots, "default", {}, () => [unref(props).title || !!slots.title ? (openBlock(), createBlock("div", {
						key: 0,
						"data-slot": "title",
						class: ui.value.title({ class: unref(props).ui?.title })
					}, [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])], 2)) : createCommentVNode("", true), unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
						key: 1,
						"data-slot": "description",
						class: ui.value.description({ class: unref(props).ui?.description })
					}, [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])], 2)) : createCommentVNode("", true)])], 2)];
				}),
				_: 3
			}, _parent));
		};
	}
});
var _sfc_setup$8 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/PageFeature.vue");
	return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
// virtual:nuxt:.nuxt%2Fui%2Fpage-section.ts
var virtual_nuxt__nuxt_2Fui_2Fpage_section_default = {
	"slots": {
		"root": "relative isolate",
		"container": "flex flex-col lg:grid py-16 sm:py-24 lg:py-32 gap-8 sm:gap-16",
		"wrapper": "",
		"header": "",
		"leading": "flex items-center mb-6",
		"leadingIcon": "size-10 shrink-0 text-primary",
		"headline": "mb-3",
		"title": "text-3xl sm:text-4xl lg:text-5xl text-pretty tracking-tight font-bold text-highlighted",
		"description": "text-base sm:text-lg text-muted",
		"body": "mt-8",
		"features": "grid",
		"footer": "mt-8",
		"links": "flex flex-wrap gap-x-6 gap-y-3"
	},
	"variants": {
		"orientation": {
			"horizontal": {
				"container": "lg:grid-cols-2 lg:items-center",
				"description": "text-pretty",
				"features": "gap-4"
			},
			"vertical": {
				"container": "",
				"headline": "justify-center",
				"leading": "justify-center",
				"title": "text-center",
				"description": "text-center text-balance",
				"links": "justify-center",
				"features": "sm:grid-cols-2 lg:grid-cols-3 gap-8"
			}
		},
		"reverse": { "true": { "wrapper": "order-last" } },
		"headline": { "true": { "headline": "font-semibold text-primary flex items-center gap-1.5" } },
		"title": { "true": { "description": "mt-6" } },
		"description": { "true": "" },
		"body": { "true": "" }
	},
	"compoundVariants": [
		{
			"orientation": "vertical",
			"title": true,
			"class": { "body": "mt-16" }
		},
		{
			"orientation": "vertical",
			"description": true,
			"class": { "body": "mt-16" }
		},
		{
			"orientation": "vertical",
			"body": true,
			"class": { "footer": "mt-16" }
		}
	]
};
// node_modules/@nuxt/ui/dist/runtime/components/PageSection.vue
var _sfc_main$1 = {
	__name: "UPageSection",
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
		icon: {
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
		links: {
			type: Array,
			required: false
		},
		features: {
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
		const props = useComponentProps("pageSection", _props);
		const appConfig = useAppConfig();
		const prefix = usePrefix();
		const as = computed(() => resolveAs(props.as, {
			root: "section",
			title: "h2"
		}));
		const ui = computed(() => tv({
			extend: virtual_nuxt__nuxt_2Fui_2Fpage_section_default,
			...appConfig.ui?.pageSection || {}
		})({
			orientation: props.orientation,
			reverse: props.reverse,
			title: !!props.title || !!slots.title,
			description: !!props.description || !!slots.description,
			body: !!slots.body || !!props.features?.length || !!slots.features
		}));
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Primitive), mergeProps({
				as: as.value.root,
				"data-orientation": unref(props).orientation,
				"data-slot": "root",
				class: ui.value.root({ class: [unref(props).ui?.root, unref(props).class] })
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent, _scopeId);
						_push(ssrRenderComponent(_sfc_main$7, {
							"data-slot": "container",
							class: ui.value.container({ class: unref(props).ui?.container })
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									if (!!slots.header || unref(props).icon || !!slots.leading || unref(props).headline || !!slots.headline || unref(props).title || !!slots.title || unref(props).description || !!slots.description || !!slots.body || unref(props).features?.length || !!slots.features || !!slots.footer || unref(props).links?.length || !!slots.links) {
										_push(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: unref(props).ui?.wrapper }))}"${_scopeId}>`);
										if (!!slots.header || unref(props).icon || !!slots.leading || unref(props).headline || !!slots.headline || unref(props).title || !!slots.title || unref(props).description || !!slots.description) {
											_push(`<div data-slot="header" class="${ssrRenderClass(ui.value.header({ class: unref(props).ui?.header }))}"${_scopeId}>`);
											ssrRenderSlot(_ctx.$slots, "header", {}, () => {
												if (unref(props).icon || !!slots.leading) {
													_push(`<div data-slot="leading" class="${ssrRenderClass(ui.value.leading({ class: unref(props).ui?.leading }))}"${_scopeId}>`);
													ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
														if (unref(props).icon) _push(ssrRenderComponent(_sfc_main$5, {
															name: unref(props).icon,
															"data-slot": "leadingIcon",
															class: ui.value.leadingIcon({ class: unref(props).ui?.leadingIcon })
														}, null, _parent, _scopeId));
														else _push(`<!---->`);
													}, _push, _parent, _scopeId);
													_push(`</div>`);
												} else _push(`<!---->`);
												if (unref(props).headline || !!slots.headline) {
													_push(`<div data-slot="headline" class="${ssrRenderClass(ui.value.headline({
														class: unref(props).ui?.headline,
														headline: !slots.headline
													}))}"${_scopeId}>`);
													ssrRenderSlot(_ctx.$slots, "headline", {}, () => {
														_push(`${ssrInterpolate(unref(props).headline)}`);
													}, _push, _parent, _scopeId);
													_push(`</div>`);
												} else _push(`<!---->`);
												if (unref(props).title || !!slots.title) _push(ssrRenderComponent(unref(Primitive), {
													as: as.value.title,
													"data-slot": "title",
													class: ui.value.title({ class: unref(props).ui?.title })
												}, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) ssrRenderSlot(_ctx.$slots, "title", {}, () => {
															_push(`${ssrInterpolate(unref(props).title)}`);
														}, _push, _parent, _scopeId);
														else return [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])];
													}),
													_: 3
												}, _parent, _scopeId));
												else _push(`<!---->`);
												if (unref(props).description || !!slots.description) {
													_push(`<div data-slot="description" class="${ssrRenderClass(ui.value.description({ class: unref(props).ui?.description }))}"${_scopeId}>`);
													ssrRenderSlot(_ctx.$slots, "description", {}, () => {
														_push(`${ssrInterpolate(unref(props).description)}`);
													}, _push, _parent, _scopeId);
													_push(`</div>`);
												} else _push(`<!---->`);
											}, _push, _parent, _scopeId);
											_push(`</div>`);
										} else _push(`<!---->`);
										if (!!slots.body || unref(props).features?.length || !!slots.features) {
											_push(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: unref(props).ui?.body }))}"${_scopeId}>`);
											ssrRenderSlot(_ctx.$slots, "body", {}, () => {
												if (unref(props).features?.length || !!slots.features) {
													_push(`<ul data-slot="features" class="${ssrRenderClass(ui.value.features({ class: unref(props).ui?.features }))}"${_scopeId}>`);
													ssrRenderSlot(_ctx.$slots, "features", {}, () => {
														_push(`<!--[-->`);
														ssrRenderList(unref(props).features, (feature, index) => {
															_push(ssrRenderComponent(_sfc_main$2, mergeProps({
																key: index,
																as: "li"
															}, { ref_for: true }, feature), null, _parent, _scopeId));
														});
														_push(`<!--]-->`);
													}, _push, _parent, _scopeId);
													_push(`</ul>`);
												} else _push(`<!---->`);
											}, _push, _parent, _scopeId);
											_push(`</div>`);
										} else _push(`<!---->`);
										if (!!slots.footer || unref(props).links?.length || !!slots.links) {
											_push(`<div data-slot="footer" class="${ssrRenderClass(ui.value.footer({ class: unref(props).ui?.footer }))}"${_scopeId}>`);
											ssrRenderSlot(_ctx.$slots, "footer", {}, () => {
												if (unref(props).links?.length || !!slots.links) {
													_push(`<div data-slot="links" class="${ssrRenderClass(ui.value.links({ class: unref(props).ui?.links }))}"${_scopeId}>`);
													ssrRenderSlot(_ctx.$slots, "links", {}, () => {
														_push(`<!--[-->`);
														ssrRenderList(unref(props).links, (link, index) => {
															_push(ssrRenderComponent(_sfc_main$4, mergeProps({
																key: index,
																size: "lg"
															}, { ref_for: true }, link), null, _parent, _scopeId));
														});
														_push(`<!--]-->`);
													}, _push, _parent, _scopeId);
													_push(`</div>`);
												} else _push(`<!---->`);
											}, _push, _parent, _scopeId);
											_push(`</div>`);
										} else _push(`<!---->`);
										_push(`</div>`);
									} else _push(`<!---->`);
									if (!!slots.default) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
									else if (unref(props).orientation === "horizontal") _push(`<div class="${ssrRenderClass(unref(prefix)("hidden lg:block"))}"${_scopeId}></div>`);
									else _push(`<!---->`);
								} else return [!!slots.header || unref(props).icon || !!slots.leading || unref(props).headline || !!slots.headline || unref(props).title || !!slots.title || unref(props).description || !!slots.description || !!slots.body || unref(props).features?.length || !!slots.features || !!slots.footer || unref(props).links?.length || !!slots.links ? (openBlock(), createBlock("div", {
									key: 0,
									"data-slot": "wrapper",
									class: ui.value.wrapper({ class: unref(props).ui?.wrapper })
								}, [
									!!slots.header || unref(props).icon || !!slots.leading || unref(props).headline || !!slots.headline || unref(props).title || !!slots.title || unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
										key: 0,
										"data-slot": "header",
										class: ui.value.header({ class: unref(props).ui?.header })
									}, [renderSlot(_ctx.$slots, "header", {}, () => [
										unref(props).icon || !!slots.leading ? (openBlock(), createBlock("div", {
											key: 0,
											"data-slot": "leading",
											class: ui.value.leading({ class: unref(props).ui?.leading })
										}, [renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [unref(props).icon ? (openBlock(), createBlock(_sfc_main$5, {
											key: 0,
											name: unref(props).icon,
											"data-slot": "leadingIcon",
											class: ui.value.leadingIcon({ class: unref(props).ui?.leadingIcon })
										}, null, 8, ["name", "class"])) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true),
										unref(props).headline || !!slots.headline ? (openBlock(), createBlock("div", {
											key: 1,
											"data-slot": "headline",
											class: ui.value.headline({
												class: unref(props).ui?.headline,
												headline: !slots.headline
											})
										}, [renderSlot(_ctx.$slots, "headline", {}, () => [createTextVNode(toDisplayString(unref(props).headline), 1)])], 2)) : createCommentVNode("", true),
										unref(props).title || !!slots.title ? (openBlock(), createBlock(unref(Primitive), {
											key: 2,
											as: as.value.title,
											"data-slot": "title",
											class: ui.value.title({ class: unref(props).ui?.title })
										}, {
											default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
											_: 3
										}, 8, ["as", "class"])) : createCommentVNode("", true),
										unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
											key: 3,
											"data-slot": "description",
											class: ui.value.description({ class: unref(props).ui?.description })
										}, [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])], 2)) : createCommentVNode("", true)
									])], 2)) : createCommentVNode("", true),
									!!slots.body || unref(props).features?.length || !!slots.features ? (openBlock(), createBlock("div", {
										key: 1,
										"data-slot": "body",
										class: ui.value.body({ class: unref(props).ui?.body })
									}, [renderSlot(_ctx.$slots, "body", {}, () => [unref(props).features?.length || !!slots.features ? (openBlock(), createBlock("ul", {
										key: 0,
										"data-slot": "features",
										class: ui.value.features({ class: unref(props).ui?.features })
									}, [renderSlot(_ctx.$slots, "features", {}, () => [(openBlock(true), createBlock(Fragment, null, renderList(unref(props).features, (feature, index) => {
										return openBlock(), createBlock(_sfc_main$2, mergeProps({
											key: index,
											as: "li"
										}, { ref_for: true }, feature), null, 16);
									}), 128))])], 2)) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true),
									!!slots.footer || unref(props).links?.length || !!slots.links ? (openBlock(), createBlock("div", {
										key: 2,
										"data-slot": "footer",
										class: ui.value.footer({ class: unref(props).ui?.footer })
									}, [renderSlot(_ctx.$slots, "footer", {}, () => [unref(props).links?.length || !!slots.links ? (openBlock(), createBlock("div", {
										key: 0,
										"data-slot": "links",
										class: ui.value.links({ class: unref(props).ui?.links })
									}, [renderSlot(_ctx.$slots, "links", {}, () => [(openBlock(true), createBlock(Fragment, null, renderList(unref(props).links, (link, index) => {
										return openBlock(), createBlock(_sfc_main$4, mergeProps({
											key: index,
											size: "lg"
										}, { ref_for: true }, link), null, 16);
									}), 128))])], 2)) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true)
								], 2)) : createCommentVNode("", true), !!slots.default ? renderSlot(_ctx.$slots, "default", {}, void 0, void 0, 1) : unref(props).orientation === "horizontal" ? (openBlock(), createBlock("div", {
									key: 2,
									class: unref(prefix)("hidden lg:block")
								}, null, 2)) : createCommentVNode("", true)];
							}),
							_: 3
						}, _parent, _scopeId));
						ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent, _scopeId);
					} else return [
						renderSlot(_ctx.$slots, "top"),
						createVNode(_sfc_main$7, {
							"data-slot": "container",
							class: ui.value.container({ class: unref(props).ui?.container })
						}, {
							default: withCtx(() => [!!slots.header || unref(props).icon || !!slots.leading || unref(props).headline || !!slots.headline || unref(props).title || !!slots.title || unref(props).description || !!slots.description || !!slots.body || unref(props).features?.length || !!slots.features || !!slots.footer || unref(props).links?.length || !!slots.links ? (openBlock(), createBlock("div", {
								key: 0,
								"data-slot": "wrapper",
								class: ui.value.wrapper({ class: unref(props).ui?.wrapper })
							}, [
								!!slots.header || unref(props).icon || !!slots.leading || unref(props).headline || !!slots.headline || unref(props).title || !!slots.title || unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
									key: 0,
									"data-slot": "header",
									class: ui.value.header({ class: unref(props).ui?.header })
								}, [renderSlot(_ctx.$slots, "header", {}, () => [
									unref(props).icon || !!slots.leading ? (openBlock(), createBlock("div", {
										key: 0,
										"data-slot": "leading",
										class: ui.value.leading({ class: unref(props).ui?.leading })
									}, [renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [unref(props).icon ? (openBlock(), createBlock(_sfc_main$5, {
										key: 0,
										name: unref(props).icon,
										"data-slot": "leadingIcon",
										class: ui.value.leadingIcon({ class: unref(props).ui?.leadingIcon })
									}, null, 8, ["name", "class"])) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true),
									unref(props).headline || !!slots.headline ? (openBlock(), createBlock("div", {
										key: 1,
										"data-slot": "headline",
										class: ui.value.headline({
											class: unref(props).ui?.headline,
											headline: !slots.headline
										})
									}, [renderSlot(_ctx.$slots, "headline", {}, () => [createTextVNode(toDisplayString(unref(props).headline), 1)])], 2)) : createCommentVNode("", true),
									unref(props).title || !!slots.title ? (openBlock(), createBlock(unref(Primitive), {
										key: 2,
										as: as.value.title,
										"data-slot": "title",
										class: ui.value.title({ class: unref(props).ui?.title })
									}, {
										default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
										_: 3
									}, 8, ["as", "class"])) : createCommentVNode("", true),
									unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
										key: 3,
										"data-slot": "description",
										class: ui.value.description({ class: unref(props).ui?.description })
									}, [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])], 2)) : createCommentVNode("", true)
								])], 2)) : createCommentVNode("", true),
								!!slots.body || unref(props).features?.length || !!slots.features ? (openBlock(), createBlock("div", {
									key: 1,
									"data-slot": "body",
									class: ui.value.body({ class: unref(props).ui?.body })
								}, [renderSlot(_ctx.$slots, "body", {}, () => [unref(props).features?.length || !!slots.features ? (openBlock(), createBlock("ul", {
									key: 0,
									"data-slot": "features",
									class: ui.value.features({ class: unref(props).ui?.features })
								}, [renderSlot(_ctx.$slots, "features", {}, () => [(openBlock(true), createBlock(Fragment, null, renderList(unref(props).features, (feature, index) => {
									return openBlock(), createBlock(_sfc_main$2, mergeProps({
										key: index,
										as: "li"
									}, { ref_for: true }, feature), null, 16);
								}), 128))])], 2)) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true),
								!!slots.footer || unref(props).links?.length || !!slots.links ? (openBlock(), createBlock("div", {
									key: 2,
									"data-slot": "footer",
									class: ui.value.footer({ class: unref(props).ui?.footer })
								}, [renderSlot(_ctx.$slots, "footer", {}, () => [unref(props).links?.length || !!slots.links ? (openBlock(), createBlock("div", {
									key: 0,
									"data-slot": "links",
									class: ui.value.links({ class: unref(props).ui?.links })
								}, [renderSlot(_ctx.$slots, "links", {}, () => [(openBlock(true), createBlock(Fragment, null, renderList(unref(props).links, (link, index) => {
									return openBlock(), createBlock(_sfc_main$4, mergeProps({
										key: index,
										size: "lg"
									}, { ref_for: true }, link), null, 16);
								}), 128))])], 2)) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true)
							], 2)) : createCommentVNode("", true), !!slots.default ? renderSlot(_ctx.$slots, "default", {}, void 0, void 0, 1) : unref(props).orientation === "horizontal" ? (openBlock(), createBlock("div", {
								key: 2,
								class: unref(prefix)("hidden lg:block")
							}, null, 2)) : createCommentVNode("", true)]),
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
var _sfc_setup$7 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/PageSection.vue");
	return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
// app/components/FeatureCards.vue?vue&type=script&setup=true&lang.ts
var FeatureCards_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "FeatureCards",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			const _component_UContainer = _sfc_main$7;
			const _component_SectionHeading = SectionHeading_default;
			const _component_UPageCard = _sfc_main$9;
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-slate-50 py-16 sm:py-24" }, _attrs))}>`);
			_push(ssrRenderComponent(_component_UContainer, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_component_SectionHeading, {
							eyebrow: unref(site).home.featuresEyebrow,
							title: unref(site).home.featuresTitle,
							description: unref(site).home.featuresDescription,
							centered: ""
						}, null, _parent, _scopeId));
						_push(`<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"${_scopeId}><!--[-->`);
						ssrRenderList(unref(site).home.features, (card) => {
							_push(ssrRenderComponent(_component_UPageCard, {
								key: card.title,
								to: card.to,
								class: "group overflow-hidden rounded-2xl border-0 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`<div class="relative -m-5 mb-4 h-48 overflow-hidden"${_scopeId}><img${ssrRenderAttr("src", card.image)}${ssrRenderAttr("alt", `Placeholder image for ${card.title}`)} width="600" height="400" loading="lazy" class="h-full w-full object-cover transition duration-500 group-hover:scale-105"${_scopeId}><div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent"${_scopeId}></div><h3 class="absolute bottom-4 left-4 font-display text-xl font-bold text-white"${_scopeId}>${ssrInterpolate(card.title)}</h3></div><p class="text-sm leading-6 text-slate-600"${_scopeId}>${ssrInterpolate(card.text)}</p>`);
									else return [createVNode("div", { class: "relative -m-5 mb-4 h-48 overflow-hidden" }, [
										createVNode("img", {
											src: card.image,
											alt: `Placeholder image for ${card.title}`,
											width: "600",
											height: "400",
											loading: "lazy",
											class: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
										}, null, 8, ["src", "alt"]),
										createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" }),
										createVNode("h3", { class: "absolute bottom-4 left-4 font-display text-xl font-bold text-white" }, toDisplayString(card.title), 1)
									]), createVNode("p", { class: "text-sm leading-6 text-slate-600" }, toDisplayString(card.text), 1)];
								}),
								_: 2
							}, _parent, _scopeId));
						});
						_push(`<!--]--></div>`);
					} else return [createVNode(_component_SectionHeading, {
						eyebrow: unref(site).home.featuresEyebrow,
						title: unref(site).home.featuresTitle,
						description: unref(site).home.featuresDescription,
						centered: ""
					}, null, 8, [
						"eyebrow",
						"title",
						"description"
					]), createVNode("div", { class: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4" }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(site).home.features, (card) => {
						return openBlock(), createBlock(_component_UPageCard, {
							key: card.title,
							to: card.to,
							class: "group overflow-hidden rounded-2xl border-0 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
						}, {
							default: withCtx(() => [createVNode("div", { class: "relative -m-5 mb-4 h-48 overflow-hidden" }, [
								createVNode("img", {
									src: card.image,
									alt: `Placeholder image for ${card.title}`,
									width: "600",
									height: "400",
									loading: "lazy",
									class: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
								}, null, 8, ["src", "alt"]),
								createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" }),
								createVNode("h3", { class: "absolute bottom-4 left-4 font-display text-xl font-bold text-white" }, toDisplayString(card.title), 1)
							]), createVNode("p", { class: "text-sm leading-6 text-slate-600" }, toDisplayString(card.text), 1)]),
							_: 2
						}, 1032, ["to"]);
					}), 128))])];
				}),
				_: 1
			}, _parent));
			_push(`</section>`);
		};
	}
});
// app/components/FeatureCards.vue
var _sfc_setup$6 = FeatureCards_vue_vue_type_script_setup_true_lang_default.setup;
FeatureCards_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeatureCards.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var FeatureCards_default = Object.assign(FeatureCards_vue_vue_type_script_setup_true_lang_default, { __name: "FeatureCards" });
// virtual:nuxt:.nuxt%2Fui%2Fcarousel.ts
var virtual_nuxt__nuxt_2Fui_2Fcarousel_default = {
	"slots": {
		"root": "relative focus:outline-none",
		"viewport": "overflow-hidden",
		"container": "flex items-start",
		"item": "min-w-0 shrink-0 basis-full",
		"controls": "",
		"arrows": "",
		"prev": "absolute rounded-full",
		"next": "absolute rounded-full",
		"dots": "absolute inset-x-0 -bottom-7 flex flex-wrap items-center justify-center gap-3",
		"dot": ["cursor-pointer size-3 bg-accented rounded-full outline-inverted/25 focus-visible:outline-3", "transition"]
	},
	"variants": {
		"orientation": {
			"vertical": {
				"container": "flex-col -mt-4",
				"item": "pt-4",
				"prev": "top-4 sm:-top-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90",
				"next": "bottom-4 sm:-bottom-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90"
			},
			"horizontal": {
				"container": "flex-row -ms-4",
				"item": "ps-4",
				"prev": "start-4 sm:-start-12 top-1/2 -translate-y-1/2",
				"next": "end-4 sm:-end-12 top-1/2 -translate-y-1/2"
			}
		},
		"active": { "true": { "dot": "data-[state=active]:bg-inverted" } }
	}
};
// node_modules/@nuxt/ui/dist/runtime/components/Carousel.vue
var _sfc_main = {
	__name: "UCarousel",
	__ssrInlineRender: true,
	props: {
		as: {
			type: null,
			required: false
		},
		prev: {
			type: Object,
			required: false
		},
		prevIcon: {
			type: null,
			required: false
		},
		next: {
			type: Object,
			required: false
		},
		nextIcon: {
			type: null,
			required: false
		},
		arrows: {
			type: Boolean,
			required: false,
			default: false
		},
		dots: {
			type: Boolean,
			required: false,
			default: false
		},
		orientation: {
			type: null,
			required: false,
			default: "horizontal"
		},
		items: {
			type: Array,
			required: false
		},
		autoplay: {
			type: [Boolean, Object],
			required: false,
			default: false
		},
		autoScroll: {
			type: [Boolean, Object],
			required: false,
			default: false
		},
		autoHeight: {
			type: [Boolean, Object],
			required: false,
			default: false
		},
		classNames: {
			type: [Boolean, Object],
			required: false,
			default: false
		},
		fade: {
			type: [Boolean, Object],
			required: false,
			default: false
		},
		wheelGestures: {
			type: [Boolean, Object],
			required: false,
			default: false
		},
		class: {
			type: null,
			required: false
		},
		ui: {
			type: Object,
			required: false
		},
		align: {
			type: [String, Function],
			required: false,
			default: "center"
		},
		containScroll: {
			type: [Boolean, String],
			required: false,
			default: "trimSnaps"
		},
		slidesToScroll: {
			type: [String, Number],
			required: false,
			default: 1
		},
		dragFree: {
			type: Boolean,
			required: false,
			default: false
		},
		dragThreshold: {
			type: Number,
			required: false,
			default: 10
		},
		inViewThreshold: {
			type: null,
			required: false,
			default: 0
		},
		loop: {
			type: Boolean,
			required: false,
			default: false
		},
		skipSnaps: {
			type: Boolean,
			required: false,
			default: false
		},
		duration: {
			type: Number,
			required: false,
			default: 25
		},
		startIndex: {
			type: Number,
			required: false,
			default: 0
		},
		watchDrag: {
			type: [Boolean, Function],
			required: false,
			default: true
		},
		watchResize: {
			type: [Boolean, Function],
			required: false,
			default: true
		},
		watchSlides: {
			type: [Boolean, Function],
			required: false,
			default: true
		},
		watchFocus: {
			type: [Boolean, Function],
			required: false,
			default: true
		},
		active: {
			type: Boolean,
			required: false,
			default: true
		},
		breakpoints: {
			type: Object,
			required: false,
			default: () => ({})
		}
	},
	emits: ["select"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = useComponentProps("carousel", __props);
		const { dir, t } = useLocale();
		const appConfig = useAppConfig();
		const rootProps = useForwardProps(reactivePick(props, "active", "align", "breakpoints", "containScroll", "dragFree", "dragThreshold", "duration", "inViewThreshold", "loop", "skipSnaps", "slidesToScroll", "startIndex", "watchDrag", "watchResize", "watchSlides", "watchFocus"));
		const prevIcon = computed(() => props.prevIcon || (dir.value === "rtl" ? appConfig.ui.icons.arrowRight : appConfig.ui.icons.arrowLeft));
		const nextIcon = computed(() => props.nextIcon || (dir.value === "rtl" ? appConfig.ui.icons.arrowLeft : appConfig.ui.icons.arrowRight));
		const stopAutoplayOnInteraction = computed(() => {
			if (typeof props.autoplay === "boolean") return true;
			return props.autoplay?.stopOnInteraction ?? true;
		});
		const stopAutoScrollOnInteraction = computed(() => {
			if (typeof props.autoScroll === "boolean") return true;
			return props.autoScroll?.stopOnInteraction ?? true;
		});
		const ui = computed(() => tv({
			extend: virtual_nuxt__nuxt_2Fui_2Fcarousel_default,
			...appConfig.ui?.carousel || {}
		})({ orientation: props.orientation }));
		const options = computed(() => ({
			...props.fade ? {
				align: "center",
				containScroll: false
			} : {},
			...rootProps.value,
			axis: props.orientation === "horizontal" ? "x" : "y",
			direction: dir.value === "rtl" ? "rtl" : "ltr"
		}));
		const plugins = ref([]);
		async function loadPlugins() {
			const emblaPlugins = [];
			if (props.autoplay) {
				const AutoplayPlugin = await import("/Users/ccci/Project/node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js").then((r) => r.default);
				emblaPlugins.push(AutoplayPlugin(typeof props.autoplay === "boolean" ? {} : props.autoplay));
			}
			if (props.autoScroll) {
				const AutoScrollPlugin = await import("/Users/ccci/Project/node_modules/embla-carousel-auto-scroll/esm/embla-carousel-auto-scroll.esm.js").then((r) => r.default);
				emblaPlugins.push(AutoScrollPlugin(typeof props.autoScroll === "boolean" ? {} : props.autoScroll));
			}
			if (props.autoHeight) {
				const AutoHeightPlugin = await import("/Users/ccci/Project/node_modules/embla-carousel-auto-height/esm/embla-carousel-auto-height.esm.js").then((r) => r.default);
				emblaPlugins.push(AutoHeightPlugin(typeof props.autoHeight === "boolean" ? {} : props.autoHeight));
			}
			if (props.classNames) {
				const ClassNamesPlugin = await import("/Users/ccci/Project/node_modules/embla-carousel-class-names/esm/embla-carousel-class-names.esm.js").then((r) => r.default);
				emblaPlugins.push(ClassNamesPlugin(typeof props.classNames === "boolean" ? {} : props.classNames));
			}
			if (props.fade) {
				const FadePlugin = await import("/Users/ccci/Project/node_modules/embla-carousel-fade/esm/embla-carousel-fade.esm.js").then((r) => r.default);
				emblaPlugins.push(FadePlugin(typeof props.fade === "boolean" ? {} : props.fade));
			}
			if (props.wheelGestures) {
				const { WheelGesturesPlugin } = await import("/Users/ccci/Project/node_modules/embla-carousel-wheel-gestures/dist/embla-carousel-wheel-gestures.esm.js");
				emblaPlugins.push(WheelGesturesPlugin(typeof props.wheelGestures === "boolean" ? {} : props.wheelGestures));
			}
			plugins.value = emblaPlugins;
		}
		watch(() => [
			props.autoplay,
			props.autoScroll,
			props.autoHeight,
			props.classNames,
			props.fade,
			props.wheelGestures
		], loadPlugins, { immediate: true });
		const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
		watch(options, () => {
			emblaApi.value?.reInit(options.value, plugins.value);
		}, { flush: "post" });
		function stopOnInteraction() {
			if (stopAutoplayOnInteraction.value) emblaApi.value?.plugins().autoplay?.stop();
			if (stopAutoScrollOnInteraction.value) emblaApi.value?.plugins().autoScroll?.stop();
		}
		function scrollPrev() {
			emblaApi.value?.scrollPrev();
			stopOnInteraction();
		}
		function scrollNext() {
			emblaApi.value?.scrollNext();
			stopOnInteraction();
		}
		function scrollTo(index) {
			emblaApi.value?.scrollTo(index);
		}
		function onKeyDown(event) {
			let prevKey;
			let nextKey;
			if (props.orientation === "horizontal") {
				prevKey = dir.value === "ltr" ? "ArrowLeft" : "ArrowRight";
				nextKey = dir.value === "ltr" ? "ArrowRight" : "ArrowLeft";
			} else {
				prevKey = "ArrowUp";
				nextKey = "ArrowDown";
			}
			if (event.key === prevKey) {
				event.preventDefault();
				scrollPrev();
				return;
			}
			if (event.key === nextKey) {
				event.preventDefault();
				scrollNext();
			}
		}
		const canScrollNext = ref(false);
		const canScrollPrev = ref(false);
		const selectedIndex = ref(0);
		const scrollSnaps = ref([]);
		function isCarouselItem(item) {
			return typeof item === "object" && item !== null;
		}
		__expose({
			emblaRef,
			emblaApi
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Primitive), mergeProps({
				as: unref(props).as,
				role: "region",
				"aria-roledescription": unref(t)("carousel.roledescription"),
				"data-orientation": unref(props).orientation,
				tabindex: "0",
				"data-slot": "root",
				class: ui.value.root({ class: [unref(props).ui?.root, unref(props).class] }),
				onKeydown: onKeyDown
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div data-slot="viewport" class="${ssrRenderClass(ui.value.viewport({ class: unref(props).ui?.viewport }))}"${_scopeId}><div data-slot="container" class="${ssrRenderClass(ui.value.container({ class: unref(props).ui?.container }))}"${_scopeId}><!--[-->`);
						ssrRenderList(unref(props).items, (item, index) => {
							_push(`<div${ssrRenderAttrs(mergeProps({ key: index }, { ref_for: true }, unref(props).dots ? { role: "tabpanel" } : {
								"role": "group",
								"aria-roledescription": unref(t)("carousel.slide")
							}, {
								"data-slot": "item",
								class: ui.value.item({ class: [
									unref(props).ui?.item,
									isCarouselItem(item) && item.ui?.item,
									isCarouselItem(item) && item.class
								] })
							}))}${_scopeId}>`);
							ssrRenderSlot(_ctx.$slots, "default", {
								item,
								index
							}, null, _push, _parent, _scopeId);
							_push(`</div>`);
						});
						_push(`<!--]--></div></div>`);
						if (unref(props).arrows || unref(props).dots) {
							_push(`<div data-slot="controls" class="${ssrRenderClass(ui.value.controls({ class: unref(props).ui?.controls }))}"${_scopeId}>`);
							if (unref(props).arrows) {
								_push(`<div data-slot="arrows" class="${ssrRenderClass(ui.value.arrows({ class: unref(props).ui?.arrows }))}"${_scopeId}>`);
								_push(ssrRenderComponent(_sfc_main$4, mergeProps({
									disabled: !canScrollPrev.value,
									icon: prevIcon.value,
									color: "neutral",
									variant: "outline",
									"aria-label": unref(t)("carousel.prev")
								}, typeof unref(props).prev === "object" ? unref(props).prev : void 0, {
									"data-slot": "prev",
									class: ui.value.prev({ class: unref(props).ui?.prev }),
									onClick: scrollPrev
								}), null, _parent, _scopeId));
								_push(ssrRenderComponent(_sfc_main$4, mergeProps({
									disabled: !canScrollNext.value,
									icon: nextIcon.value,
									color: "neutral",
									variant: "outline",
									"aria-label": unref(t)("carousel.next")
								}, typeof unref(props).next === "object" ? unref(props).next : void 0, {
									"data-slot": "next",
									class: ui.value.next({ class: unref(props).ui?.next }),
									onClick: scrollNext
								}), null, _parent, _scopeId));
								_push(`</div>`);
							} else _push(`<!---->`);
							if (unref(props).dots) {
								_push(`<div role="tablist"${ssrRenderAttr("aria-label", unref(t)("carousel.dots"))} data-slot="dots" class="${ssrRenderClass(ui.value.dots({ class: unref(props).ui?.dots }))}"${_scopeId}><!--[-->`);
								ssrRenderList(scrollSnaps.value, (_, index) => {
									_push(`<button type="button" role="tab"${ssrRenderAttr("aria-label", unref(t)("carousel.goto", { slide: index + 1 }))}${ssrRenderAttr("aria-selected", selectedIndex.value === index)} data-slot="dot" class="${ssrRenderClass(ui.value.dot({
										class: unref(props).ui?.dot,
										active: selectedIndex.value === index
									}))}"${ssrRenderAttr("data-state", selectedIndex.value === index ? "active" : void 0)}${_scopeId}></button>`);
								});
								_push(`<!--]--></div>`);
							} else _push(`<!---->`);
							_push(`</div>`);
						} else _push(`<!---->`);
					} else return [createVNode("div", {
						ref_key: "emblaRef",
						ref: emblaRef,
						"data-slot": "viewport",
						class: ui.value.viewport({ class: unref(props).ui?.viewport })
					}, [createVNode("div", {
						"data-slot": "container",
						class: ui.value.container({ class: unref(props).ui?.container })
					}, [(openBlock(true), createBlock(Fragment, null, renderList(unref(props).items, (item, index) => {
						return openBlock(), createBlock("div", mergeProps({ key: index }, { ref_for: true }, unref(props).dots ? { role: "tabpanel" } : {
							"role": "group",
							"aria-roledescription": unref(t)("carousel.slide")
						}, {
							"data-slot": "item",
							class: ui.value.item({ class: [
								unref(props).ui?.item,
								isCarouselItem(item) && item.ui?.item,
								isCarouselItem(item) && item.class
							] })
						}), [renderSlot(_ctx.$slots, "default", {
							item,
							index
						})], 16);
					}), 128))], 2)], 2), unref(props).arrows || unref(props).dots ? (openBlock(), createBlock("div", {
						key: 0,
						"data-slot": "controls",
						class: ui.value.controls({ class: unref(props).ui?.controls })
					}, [unref(props).arrows ? (openBlock(), createBlock("div", {
						key: 0,
						"data-slot": "arrows",
						class: ui.value.arrows({ class: unref(props).ui?.arrows })
					}, [createVNode(_sfc_main$4, mergeProps({
						disabled: !canScrollPrev.value,
						icon: prevIcon.value,
						color: "neutral",
						variant: "outline",
						"aria-label": unref(t)("carousel.prev")
					}, typeof unref(props).prev === "object" ? unref(props).prev : void 0, {
						"data-slot": "prev",
						class: ui.value.prev({ class: unref(props).ui?.prev }),
						onClick: scrollPrev
					}), null, 16, [
						"disabled",
						"icon",
						"aria-label",
						"class"
					]), createVNode(_sfc_main$4, mergeProps({
						disabled: !canScrollNext.value,
						icon: nextIcon.value,
						color: "neutral",
						variant: "outline",
						"aria-label": unref(t)("carousel.next")
					}, typeof unref(props).next === "object" ? unref(props).next : void 0, {
						"data-slot": "next",
						class: ui.value.next({ class: unref(props).ui?.next }),
						onClick: scrollNext
					}), null, 16, [
						"disabled",
						"icon",
						"aria-label",
						"class"
					])], 2)) : createCommentVNode("", true), unref(props).dots ? (openBlock(), createBlock("div", {
						key: 1,
						role: "tablist",
						"aria-label": unref(t)("carousel.dots"),
						"data-slot": "dots",
						class: ui.value.dots({ class: unref(props).ui?.dots })
					}, [(openBlock(true), createBlock(Fragment, null, renderList(scrollSnaps.value, (_, index) => {
						return openBlock(), createBlock("button", {
							key: index,
							type: "button",
							role: "tab",
							"aria-label": unref(t)("carousel.goto", { slide: index + 1 }),
							"aria-selected": selectedIndex.value === index,
							"data-slot": "dot",
							class: ui.value.dot({
								class: unref(props).ui?.dot,
								active: selectedIndex.value === index
							}),
							"data-state": selectedIndex.value === index ? "active" : void 0,
							onClick: ($event) => scrollTo(index)
						}, null, 10, [
							"aria-label",
							"aria-selected",
							"data-state",
							"onClick"
						]);
					}), 128))], 10, ["aria-label"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$5 = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Carousel.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
// app/components/BaptismGallery.vue?vue&type=script&setup=true&lang.ts
var BaptismGallery_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "BaptismGallery",
	__ssrInlineRender: true,
	setup(__props) {
		const selected = ref(null);
		const open = computed({
			get: () => selected.value !== null,
			set: (value) => {
				if (!value) selected.value = null;
			}
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_UContainer = _sfc_main$7;
			const _component_SectionHeading = SectionHeading_default;
			const _component_UCarousel = _sfc_main;
			const _component_UModal = _sfc_main$3;
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 sm:py-24" }, _attrs))}>`);
			_push(ssrRenderComponent(_component_UContainer, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_component_SectionHeading, {
							eyebrow: "Life together",
							title: "Our Baptisms",
							description: "We celebrate each person taking a step of faith and beginning a new chapter.",
							centered: ""
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_component_UCarousel, {
							items: [...unref(site).baptismPhotos],
							arrows: "",
							class: "md:hidden",
							ui: { item: "basis-[82%] ps-0" }
						}, {
							default: withCtx(({ item }, _push, _parent, _scopeId) => {
								if (_push) _push(`<button class="w-full overflow-hidden rounded-2xl"${ssrRenderAttr("aria-label", `View ${item.alt}`)}${_scopeId}><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.alt)} width="640" height="460" loading="lazy" class="aspect-[4/3] w-full object-cover"${_scopeId}></button>`);
								else return [createVNode("button", {
									class: "w-full overflow-hidden rounded-2xl",
									"aria-label": `View ${item.alt}`,
									onClick: ($event) => selected.value = item
								}, [createVNode("img", {
									src: item.image,
									alt: item.alt,
									width: "640",
									height: "460",
									loading: "lazy",
									class: "aspect-[4/3] w-full object-cover"
								}, null, 8, ["src", "alt"])], 8, ["aria-label", "onClick"])];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`<div class="hidden grid-cols-2 gap-4 md:grid lg:grid-cols-4"${_scopeId}><!--[-->`);
						ssrRenderList(unref(site).baptismPhotos, (photo) => {
							_push(`<button class="group overflow-hidden rounded-2xl"${ssrRenderAttr("aria-label", `View ${photo.alt}`)}${_scopeId}><img${ssrRenderAttr("src", photo.image)}${ssrRenderAttr("alt", photo.alt)} width="640" height="460" loading="lazy" class="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"${_scopeId}></button>`);
						});
						_push(`<!--]--></div>`);
					} else return [
						createVNode(_component_SectionHeading, {
							eyebrow: "Life together",
							title: "Our Baptisms",
							description: "We celebrate each person taking a step of faith and beginning a new chapter.",
							centered: ""
						}),
						createVNode(_component_UCarousel, {
							items: [...unref(site).baptismPhotos],
							arrows: "",
							class: "md:hidden",
							ui: { item: "basis-[82%] ps-0" }
						}, {
							default: withCtx(({ item }) => [createVNode("button", {
								class: "w-full overflow-hidden rounded-2xl",
								"aria-label": `View ${item.alt}`,
								onClick: ($event) => selected.value = item
							}, [createVNode("img", {
								src: item.image,
								alt: item.alt,
								width: "640",
								height: "460",
								loading: "lazy",
								class: "aspect-[4/3] w-full object-cover"
							}, null, 8, ["src", "alt"])], 8, ["aria-label", "onClick"])]),
							_: 1
						}, 8, ["items"]),
						createVNode("div", { class: "hidden grid-cols-2 gap-4 md:grid lg:grid-cols-4" }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(site).baptismPhotos, (photo) => {
							return openBlock(), createBlock("button", {
								key: photo.image,
								class: "group overflow-hidden rounded-2xl",
								"aria-label": `View ${photo.alt}`,
								onClick: ($event) => selected.value = photo
							}, [createVNode("img", {
								src: photo.image,
								alt: photo.alt,
								width: "640",
								height: "460",
								loading: "lazy",
								class: "aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
							}, null, 8, ["src", "alt"])], 8, ["aria-label", "onClick"]);
						}), 128))])
					];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_UModal, {
				open: unref(open),
				"onUpdate:open": ($event) => isRef(open) ? open.value = $event : null,
				title: unref(selected)?.alt
			}, {
				body: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						if (unref(selected)) _push(`<img${ssrRenderAttr("src", unref(selected).image)}${ssrRenderAttr("alt", unref(selected).alt)} width="1200" height="800" class="max-h-[70vh] w-full rounded-xl object-contain"${_scopeId}>`);
						else _push(`<!---->`);
					} else return [unref(selected) ? (openBlock(), createBlock("img", {
						key: 0,
						src: unref(selected).image,
						alt: unref(selected).alt,
						width: "1200",
						height: "800",
						class: "max-h-[70vh] w-full rounded-xl object-contain"
					}, null, 8, ["src", "alt"])) : createCommentVNode("", true)];
				}),
				_: 1
			}, _parent));
			_push(`</section>`);
		};
	}
});
// app/components/BaptismGallery.vue
var _sfc_setup$4 = BaptismGallery_vue_vue_type_script_setup_true_lang_default.setup;
BaptismGallery_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BaptismGallery.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var BaptismGallery_default = Object.assign(BaptismGallery_vue_vue_type_script_setup_true_lang_default, { __name: "BaptismGallery" });
// app/components/BooksSection.vue?vue&type=script&setup=true&lang.ts
var BooksSection_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "BooksSection",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			const _component_UContainer = _sfc_main$7;
			const _component_SectionHeading = SectionHeading_default;
			const _component_UCard = _sfc_main$8;
			const _component_UButton = _sfc_main$4;
			const _component_UIcon = _sfc_main$5;
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-brand-50 py-16 sm:py-24" }, _attrs))}>`);
			_push(ssrRenderComponent(_component_UContainer, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_component_SectionHeading, {
							eyebrow: "Reading material",
							title: "Keep learning, one page at a time",
							description: "Explore a resource designed to help you grow in understanding and faith.",
							centered: ""
						}, null, _parent, _scopeId));
						_push(`<div class="grid items-center gap-8 lg:grid-cols-2"${_scopeId}>`);
						_push(ssrRenderComponent(_component_UCard, { class: "overflow-hidden rounded-3xl border-0 shadow-lg" }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<div class="grid items-center gap-6 sm:grid-cols-[.75fr_1fr]"${_scopeId}><img${ssrRenderAttr("src", unref(site).book.image)}${ssrRenderAttr("alt", `Placeholder cover for ${unref(site).book.title}`)} width="480" height="640" loading="lazy" class="mx-auto aspect-[3/4] w-44 rounded-xl object-cover shadow-lg sm:w-full"${_scopeId}><div${_scopeId}><p class="mb-2 text-xs font-bold uppercase tracking-widest text-primary"${_scopeId}>Featured book</p><h3 class="font-display text-2xl font-bold"${_scopeId}>${ssrInterpolate(unref(site).book.title)}</h3><p class="mt-4 leading-7 text-slate-600"${_scopeId}>${ssrInterpolate(unref(site).book.description)}</p>`);
									_push(ssrRenderComponent(_component_UButton, {
										to: unref(site).book.url,
										target: "_blank",
										label: "Purchase",
										"trailing-icon": "i-lucide-arrow-up-right",
										class: "mt-6"
									}, null, _parent, _scopeId));
									_push(`</div></div>`);
								} else return [createVNode("div", { class: "grid items-center gap-6 sm:grid-cols-[.75fr_1fr]" }, [createVNode("img", {
									src: unref(site).book.image,
									alt: `Placeholder cover for ${unref(site).book.title}`,
									width: "480",
									height: "640",
									loading: "lazy",
									class: "mx-auto aspect-[3/4] w-44 rounded-xl object-cover shadow-lg sm:w-full"
								}, null, 8, ["src", "alt"]), createVNode("div", null, [
									createVNode("p", { class: "mb-2 text-xs font-bold uppercase tracking-widest text-primary" }, "Featured book"),
									createVNode("h3", { class: "font-display text-2xl font-bold" }, toDisplayString(unref(site).book.title), 1),
									createVNode("p", { class: "mt-4 leading-7 text-slate-600" }, toDisplayString(unref(site).book.description), 1),
									createVNode(_component_UButton, {
										to: unref(site).book.url,
										target: "_blank",
										label: "Purchase",
										"trailing-icon": "i-lucide-arrow-up-right",
										class: "mt-6"
									}, null, 8, ["to"])
								])])];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_component_UCard, { class: "rounded-3xl border-0 bg-white p-4 shadow-lg" }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(_component_UIcon, {
										name: "i-lucide-quote",
										class: "size-9 text-primary"
									}, null, _parent, _scopeId));
									_push(`<blockquote class="mt-4 font-display text-xl font-semibold leading-8 text-slate-800"${_scopeId}>${ssrInterpolate(unref(site).book.quote)}</blockquote><p class="mt-5 text-sm font-bold text-slate-500"${_scopeId}>— ${ssrInterpolate(unref(site).book.attribution)}</p>`);
								} else return [
									createVNode(_component_UIcon, {
										name: "i-lucide-quote",
										class: "size-9 text-primary"
									}),
									createVNode("blockquote", { class: "mt-4 font-display text-xl font-semibold leading-8 text-slate-800" }, toDisplayString(unref(site).book.quote), 1),
									createVNode("p", { class: "mt-5 text-sm font-bold text-slate-500" }, "— " + toDisplayString(unref(site).book.attribution), 1)
								];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</div>`);
					} else return [createVNode(_component_SectionHeading, {
						eyebrow: "Reading material",
						title: "Keep learning, one page at a time",
						description: "Explore a resource designed to help you grow in understanding and faith.",
						centered: ""
					}), createVNode("div", { class: "grid items-center gap-8 lg:grid-cols-2" }, [createVNode(_component_UCard, { class: "overflow-hidden rounded-3xl border-0 shadow-lg" }, {
						default: withCtx(() => [createVNode("div", { class: "grid items-center gap-6 sm:grid-cols-[.75fr_1fr]" }, [createVNode("img", {
							src: unref(site).book.image,
							alt: `Placeholder cover for ${unref(site).book.title}`,
							width: "480",
							height: "640",
							loading: "lazy",
							class: "mx-auto aspect-[3/4] w-44 rounded-xl object-cover shadow-lg sm:w-full"
						}, null, 8, ["src", "alt"]), createVNode("div", null, [
							createVNode("p", { class: "mb-2 text-xs font-bold uppercase tracking-widest text-primary" }, "Featured book"),
							createVNode("h3", { class: "font-display text-2xl font-bold" }, toDisplayString(unref(site).book.title), 1),
							createVNode("p", { class: "mt-4 leading-7 text-slate-600" }, toDisplayString(unref(site).book.description), 1),
							createVNode(_component_UButton, {
								to: unref(site).book.url,
								target: "_blank",
								label: "Purchase",
								"trailing-icon": "i-lucide-arrow-up-right",
								class: "mt-6"
							}, null, 8, ["to"])
						])])]),
						_: 1
					}), createVNode(_component_UCard, { class: "rounded-3xl border-0 bg-white p-4 shadow-lg" }, {
						default: withCtx(() => [
							createVNode(_component_UIcon, {
								name: "i-lucide-quote",
								class: "size-9 text-primary"
							}),
							createVNode("blockquote", { class: "mt-4 font-display text-xl font-semibold leading-8 text-slate-800" }, toDisplayString(unref(site).book.quote), 1),
							createVNode("p", { class: "mt-5 text-sm font-bold text-slate-500" }, "— " + toDisplayString(unref(site).book.attribution), 1)
						]),
						_: 1
					})])];
				}),
				_: 1
			}, _parent));
			_push(`</section>`);
		};
	}
});
// app/components/BooksSection.vue
var _sfc_setup$3 = BooksSection_vue_vue_type_script_setup_true_lang_default.setup;
BooksSection_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BooksSection.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var BooksSection_default = Object.assign(BooksSection_vue_vue_type_script_setup_true_lang_default, { __name: "BooksSection" });
// app/components/LeadershipSection.vue?vue&type=script&setup=true&lang.ts
var LeadershipSection_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "LeadershipSection",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			const _component_UContainer = _sfc_main$7;
			const _component_SectionHeading = SectionHeading_default;
			const _component_UButton = _sfc_main$4;
			const _component_UCard = _sfc_main$8;
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 sm:py-24" }, _attrs))}>`);
			_push(ssrRenderComponent(_component_UContainer, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="grid gap-12 lg:grid-cols-[.85fr_1.15fr]"${_scopeId}><div${_scopeId}>`);
						_push(ssrRenderComponent(_component_SectionHeading, {
							eyebrow: "Church leadership",
							title: "People who serve with care",
							description: "Meet a few of the people helping our community grow in faith."
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_component_UButton, {
							to: "/leadership",
							label: "Meet our leadership",
							"trailing-icon": "i-lucide-arrow-right",
							variant: "outline"
						}, null, _parent, _scopeId));
						_push(`</div><div class="grid gap-5 sm:grid-cols-2"${_scopeId}><!--[-->`);
						ssrRenderList(unref(site).leaders, (leader) => {
							_push(ssrRenderComponent(_component_UCard, {
								key: leader.name,
								class: "overflow-hidden rounded-3xl border-0 shadow-md"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) {
										_push(`<img${ssrRenderAttr("src", leader.image)}${ssrRenderAttr("alt", `Placeholder portrait of ${leader.name}`)} width="600" height="500" loading="lazy" class="mb-5 aspect-[4/3] w-full rounded-2xl object-cover"${_scopeId}><p class="text-xs font-bold uppercase tracking-widest text-primary"${_scopeId}>${ssrInterpolate(leader.role)}</p><h3 class="mt-2 font-display text-2xl font-bold"${_scopeId}>${ssrInterpolate(leader.name)}</h3><p class="mt-3 text-sm leading-6 text-slate-600"${_scopeId}>${ssrInterpolate(leader.bio)}</p>`);
										_push(ssrRenderComponent(_component_UButton, {
											to: leader.email,
											label: "Get in touch",
											icon: "i-lucide-mail",
											variant: "link",
											class: "mt-2 px-0"
										}, null, _parent, _scopeId));
									} else return [
										createVNode("img", {
											src: leader.image,
											alt: `Placeholder portrait of ${leader.name}`,
											width: "600",
											height: "500",
											loading: "lazy",
											class: "mb-5 aspect-[4/3] w-full rounded-2xl object-cover"
										}, null, 8, ["src", "alt"]),
										createVNode("p", { class: "text-xs font-bold uppercase tracking-widest text-primary" }, toDisplayString(leader.role), 1),
										createVNode("h3", { class: "mt-2 font-display text-2xl font-bold" }, toDisplayString(leader.name), 1),
										createVNode("p", { class: "mt-3 text-sm leading-6 text-slate-600" }, toDisplayString(leader.bio), 1),
										createVNode(_component_UButton, {
											to: leader.email,
											label: "Get in touch",
											icon: "i-lucide-mail",
											variant: "link",
											class: "mt-2 px-0"
										}, null, 8, ["to"])
									];
								}),
								_: 2
							}, _parent, _scopeId));
						});
						_push(`<!--]--></div></div><div class="mt-14 rounded-3xl bg-slate-950 p-8 text-white sm:p-12"${_scopeId}><p class="max-w-4xl font-display text-2xl font-semibold leading-relaxed sm:text-3xl"${_scopeId}>${ssrInterpolate(unref(site).contact.mission)} <span class="text-brand-300"${_scopeId}>(Matthew 28:19–20 · Colossians 3:16)</span></p></div>`);
					} else return [createVNode("div", { class: "grid gap-12 lg:grid-cols-[.85fr_1.15fr]" }, [createVNode("div", null, [createVNode(_component_SectionHeading, {
						eyebrow: "Church leadership",
						title: "People who serve with care",
						description: "Meet a few of the people helping our community grow in faith."
					}), createVNode(_component_UButton, {
						to: "/leadership",
						label: "Meet our leadership",
						"trailing-icon": "i-lucide-arrow-right",
						variant: "outline"
					})]), createVNode("div", { class: "grid gap-5 sm:grid-cols-2" }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(site).leaders, (leader) => {
						return openBlock(), createBlock(_component_UCard, {
							key: leader.name,
							class: "overflow-hidden rounded-3xl border-0 shadow-md"
						}, {
							default: withCtx(() => [
								createVNode("img", {
									src: leader.image,
									alt: `Placeholder portrait of ${leader.name}`,
									width: "600",
									height: "500",
									loading: "lazy",
									class: "mb-5 aspect-[4/3] w-full rounded-2xl object-cover"
								}, null, 8, ["src", "alt"]),
								createVNode("p", { class: "text-xs font-bold uppercase tracking-widest text-primary" }, toDisplayString(leader.role), 1),
								createVNode("h3", { class: "mt-2 font-display text-2xl font-bold" }, toDisplayString(leader.name), 1),
								createVNode("p", { class: "mt-3 text-sm leading-6 text-slate-600" }, toDisplayString(leader.bio), 1),
								createVNode(_component_UButton, {
									to: leader.email,
									label: "Get in touch",
									icon: "i-lucide-mail",
									variant: "link",
									class: "mt-2 px-0"
								}, null, 8, ["to"])
							]),
							_: 2
						}, 1024);
					}), 128))])]), createVNode("div", { class: "mt-14 rounded-3xl bg-slate-950 p-8 text-white sm:p-12" }, [createVNode("p", { class: "max-w-4xl font-display text-2xl font-semibold leading-relaxed sm:text-3xl" }, [createTextVNode(toDisplayString(unref(site).contact.mission) + " ", 1), createVNode("span", { class: "text-brand-300" }, "(Matthew 28:19–20 · Colossians 3:16)")])])];
				}),
				_: 1
			}, _parent));
			_push(`</section>`);
		};
	}
});
// app/components/LeadershipSection.vue
var _sfc_setup$2 = LeadershipSection_vue_vue_type_script_setup_true_lang_default.setup;
LeadershipSection_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LeadershipSection.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var LeadershipSection_default = Object.assign(LeadershipSection_vue_vue_type_script_setup_true_lang_default, { __name: "LeadershipSection" });
// app/components/ContactBlock.vue?vue&type=script&setup=true&lang.ts
var ContactBlock_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "ContactBlock",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			const _component_UContainer = _sfc_main$7;
			const _component_SectionHeading = SectionHeading_default;
			const _component_UButton = _sfc_main$4;
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-slate-50 py-16 sm:py-24" }, _attrs))}>`);
			_push(ssrRenderComponent(_component_UContainer, null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="grid gap-10 rounded-3xl bg-white p-7 shadow-sm sm:p-10 lg:grid-cols-[.8fr_1.2fr]"${_scopeId}><div${_scopeId}>`);
						_push(ssrRenderComponent(_component_SectionHeading, {
							eyebrow: "Come say hello",
							title: "We would love to meet you"
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_component_UButton, {
							to: unref(site).contact.mapUrl,
							target: "_blank",
							label: "Get directions",
							"trailing-icon": "i-lucide-map-pin"
						}, null, _parent, _scopeId));
						_push(`</div><div class="grid gap-6 sm:grid-cols-2"${_scopeId}><div${_scopeId}><h3 class="font-bold"${_scopeId}>Visit us</h3><p class="mt-2 text-slate-600"${_scopeId}>${ssrInterpolate(unref(site).contact.venue)}<br${_scopeId}>${ssrInterpolate(unref(site).contact.address)}</p><p class="mt-3 font-medium text-primary"${_scopeId}>${ssrInterpolate(unref(site).contact.serviceTime)}</p></div><div${_scopeId}><h3 class="font-bold"${_scopeId}>Get in touch</h3><a${ssrRenderAttr("href", `tel:${unref(site).contact.phone}`)} class="mt-2 block text-slate-600 hover:text-primary"${_scopeId}>${ssrInterpolate(unref(site).contact.phone)}</a><a${ssrRenderAttr("href", `mailto:${unref(site).contact.email}`)} class="mt-1 block break-all text-slate-600 hover:text-primary"${_scopeId}>${ssrInterpolate(unref(site).contact.email)}</a></div></div></div>`);
					} else return [createVNode("div", { class: "grid gap-10 rounded-3xl bg-white p-7 shadow-sm sm:p-10 lg:grid-cols-[.8fr_1.2fr]" }, [createVNode("div", null, [createVNode(_component_SectionHeading, {
						eyebrow: "Come say hello",
						title: "We would love to meet you"
					}), createVNode(_component_UButton, {
						to: unref(site).contact.mapUrl,
						target: "_blank",
						label: "Get directions",
						"trailing-icon": "i-lucide-map-pin"
					}, null, 8, ["to"])]), createVNode("div", { class: "grid gap-6 sm:grid-cols-2" }, [createVNode("div", null, [
						createVNode("h3", { class: "font-bold" }, "Visit us"),
						createVNode("p", { class: "mt-2 text-slate-600" }, [
							createTextVNode(toDisplayString(unref(site).contact.venue), 1),
							createVNode("br"),
							createTextVNode(toDisplayString(unref(site).contact.address), 1)
						]),
						createVNode("p", { class: "mt-3 font-medium text-primary" }, toDisplayString(unref(site).contact.serviceTime), 1)
					]), createVNode("div", null, [
						createVNode("h3", { class: "font-bold" }, "Get in touch"),
						createVNode("a", {
							href: `tel:${unref(site).contact.phone}`,
							class: "mt-2 block text-slate-600 hover:text-primary"
						}, toDisplayString(unref(site).contact.phone), 9, ["href"]),
						createVNode("a", {
							href: `mailto:${unref(site).contact.email}`,
							class: "mt-1 block break-all text-slate-600 hover:text-primary"
						}, toDisplayString(unref(site).contact.email), 9, ["href"])
					])])])];
				}),
				_: 1
			}, _parent));
			_push(`</section>`);
		};
	}
});
// app/components/ContactBlock.vue
var _sfc_setup$1 = ContactBlock_vue_vue_type_script_setup_true_lang_default.setup;
ContactBlock_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactBlock.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var ContactBlock_default = Object.assign(ContactBlock_vue_vue_type_script_setup_true_lang_default, { __name: "ContactBlock" });
// app/pages/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		useSeoMeta({
			title: `${site.name} | ${site.tagline}`,
			description: site.contact.mission,
			ogTitle: `${site.name} | ${site.tagline}`,
			ogDescription: site.contact.mission,
			ogImage: site.hero.image,
			twitterCard: "summary_large_image"
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_HeroSection = HeroSection_default;
			const _component_SermonsSection = SermonsSection_default;
			const _component_UContainer = _sfc_main$7;
			const _component_UButton = _sfc_main$4;
			const _component_UPageSection = _sfc_main$1;
			const _component_SectionHeading = SectionHeading_default;
			const _component_FeatureCards = FeatureCards_default;
			const _component_BaptismGallery = BaptismGallery_default;
			const _component_BooksSection = BooksSection_default;
			const _component_LeadershipSection = LeadershipSection_default;
			const _component_ContactBlock = ContactBlock_default;
			_push(`<!--[-->`);
			_push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
			_push(ssrRenderComponent(_component_SermonsSection, null, null, _parent));
			_push(`<section class="bg-brand-700 py-16 text-white sm:py-20">`);
			_push(ssrRenderComponent(_component_UContainer, { class: "grid items-center gap-8 lg:grid-cols-[1fr_auto]" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="max-w-3xl"${_scopeId}><p class="mb-3 text-xs font-bold uppercase tracking-[.2em] text-brand-100"${_scopeId}>${ssrInterpolate(unref(site).home.bible.eyebrow)}</p><h2 class="font-display text-3xl font-bold sm:text-4xl"${_scopeId}>${ssrInterpolate(unref(site).home.bible.title)}</h2><p class="mt-4 text-lg leading-8 text-white/80"${_scopeId}>${ssrInterpolate(unref(site).home.bible.description)}</p></div>`);
						_push(ssrRenderComponent(_component_UButton, {
							to: "/leadership",
							label: unref(site).home.bible.cta,
							"trailing-icon": "i-lucide-arrow-right",
							color: "neutral",
							variant: "outline",
							size: "lg",
							class: "border-white text-white hover:bg-white hover:text-brand-800"
						}, null, _parent, _scopeId));
					} else return [createVNode("div", { class: "max-w-3xl" }, [
						createVNode("p", { class: "mb-3 text-xs font-bold uppercase tracking-[.2em] text-brand-100" }, toDisplayString(unref(site).home.bible.eyebrow), 1),
						createVNode("h2", { class: "font-display text-3xl font-bold sm:text-4xl" }, toDisplayString(unref(site).home.bible.title), 1),
						createVNode("p", { class: "mt-4 text-lg leading-8 text-white/80" }, toDisplayString(unref(site).home.bible.description), 1)
					]), createVNode(_component_UButton, {
						to: "/leadership",
						label: unref(site).home.bible.cta,
						"trailing-icon": "i-lucide-arrow-right",
						color: "neutral",
						variant: "outline",
						size: "lg",
						class: "border-white text-white hover:bg-white hover:text-brand-800"
					}, null, 8, ["label"])];
				}),
				_: 1
			}, _parent));
			_push(`</section>`);
			_push(ssrRenderComponent(_component_UPageSection, { class: "py-16 sm:py-24" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(ssrRenderComponent(_component_UContainer, null, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(`<div class="grid items-center gap-10 lg:grid-cols-2"${_scopeId}><img${ssrRenderAttr("src", unref(site).series.image)}${ssrRenderAttr("alt", `Placeholder artwork for ${unref(site).series.title}`)} width="1200" height="800" loading="lazy" class="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"${_scopeId}><div${_scopeId}>`);
								_push(ssrRenderComponent(_component_SectionHeading, {
									eyebrow: unref(site).home.seriesEyebrow,
									title: unref(site).series.title,
									description: unref(site).series.description
								}, null, _parent, _scopeId));
								_push(ssrRenderComponent(_component_UButton, {
									to: unref(site).sermons.url,
									target: "_blank",
									label: unref(site).home.seriesCta,
									"trailing-icon": "i-lucide-arrow-up-right"
								}, null, _parent, _scopeId));
								_push(`</div></div>`);
							} else return [createVNode("div", { class: "grid items-center gap-10 lg:grid-cols-2" }, [createVNode("img", {
								src: unref(site).series.image,
								alt: `Placeholder artwork for ${unref(site).series.title}`,
								width: "1200",
								height: "800",
								loading: "lazy",
								class: "aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
							}, null, 8, ["src", "alt"]), createVNode("div", null, [createVNode(_component_SectionHeading, {
								eyebrow: unref(site).home.seriesEyebrow,
								title: unref(site).series.title,
								description: unref(site).series.description
							}, null, 8, [
								"eyebrow",
								"title",
								"description"
							]), createVNode(_component_UButton, {
								to: unref(site).sermons.url,
								target: "_blank",
								label: unref(site).home.seriesCta,
								"trailing-icon": "i-lucide-arrow-up-right"
							}, null, 8, ["to", "label"])])])];
						}),
						_: 1
					}, _parent, _scopeId));
					else return [createVNode(_component_UContainer, null, {
						default: withCtx(() => [createVNode("div", { class: "grid items-center gap-10 lg:grid-cols-2" }, [createVNode("img", {
							src: unref(site).series.image,
							alt: `Placeholder artwork for ${unref(site).series.title}`,
							width: "1200",
							height: "800",
							loading: "lazy",
							class: "aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
						}, null, 8, ["src", "alt"]), createVNode("div", null, [createVNode(_component_SectionHeading, {
							eyebrow: unref(site).home.seriesEyebrow,
							title: unref(site).series.title,
							description: unref(site).series.description
						}, null, 8, [
							"eyebrow",
							"title",
							"description"
						]), createVNode(_component_UButton, {
							to: unref(site).sermons.url,
							target: "_blank",
							label: unref(site).home.seriesCta,
							"trailing-icon": "i-lucide-arrow-up-right"
						}, null, 8, ["to", "label"])])])]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_FeatureCards, null, null, _parent));
			_push(ssrRenderComponent(_component_BaptismGallery, null, null, _parent));
			_push(ssrRenderComponent(_component_BooksSection, null, null, _parent));
			_push(ssrRenderComponent(_component_LeadershipSection, null, null, _parent));
			_push(ssrRenderComponent(_component_ContactBlock, null, null, _parent));
			_push(`<!--]-->`);
		};
	}
});
// app/pages/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var pages_default = index_vue_vue_type_script_setup_true_lang_default;
export { pages_default as default };

//# sourceMappingURL=pages-CyiqXVc9.js.map