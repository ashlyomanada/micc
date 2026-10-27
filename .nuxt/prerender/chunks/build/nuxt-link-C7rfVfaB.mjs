import { X as useRouter, Y as isAbsoluteHref, Z as encodeRoutePath, $ as sanitizeAnchorHref, a0 as navigateTo, a1 as resolveRouteObject, a2 as isRootedPath, N as useRuntimeConfig, M as useNuxtApp, a3 as nuxtLinkDefaults } from '../virtual/entry.mjs';
import { defineComponent, resolveComponent, shallowRef, h, unref, computed } from 'file:///Users/ccci/Project/node_modules/vue/index.mjs';
import { joinURL, parseQuery, hasProtocol, withTrailingSlash, withoutTrailingSlash } from 'file:///Users/ccci/Project/node_modules/ufo/dist/index.mjs';

var firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  function isHashLinkWithoutHashMode(link) {
    return typeof link === "string" && link.startsWith("#");
  }
  function resolveTrailingSlashBehavior(to, resolve, trailingSlash) {
    const effectiveTrailingSlash = trailingSlash != null ? trailingSlash : options.trailingSlash;
    if (!to || effectiveTrailingSlash !== "append" && effectiveTrailingSlash !== "remove") return to;
    if (typeof to === "string") return applyTrailingSlashBehavior(to, effectiveTrailingSlash);
    const path = "path" in to && to.path !== void 0 ? to.path : resolve(to).path;
    return {
      ...to,
      name: void 0,
      path: applyTrailingSlashBehavior(path, effectiveTrailingSlash)
    };
  }
  function useLinkTarget(props) {
    var _a, _b, _c;
    const router = useRouter();
    const config = /* @__PURE__ */ useRuntimeConfig();
    const rootedHref = (_c = (_b = (_a = router.options) == null ? void 0 : _a.history) == null ? void 0 : _b.createHref) != null ? _c : ((path) => joinURL(config.app.baseURL, path));
    const hasTarget = computed(() => !!unref(props.target) && unref(props.target) !== "_self");
    const isAbsoluteUrl = computed(() => {
      const path = unref(props.to) || unref(props.href) || "";
      return typeof path === "string" && isAbsoluteHref(path);
    });
    const isExternal = computed(() => {
      if (unref(props.external)) return true;
      const path = unref(props.to) || unref(props.href) || "";
      if (typeof path === "object") return false;
      return path === "" || isAbsoluteUrl.value;
    });
    const to = computed(() => {
      const path = unref(props.to) || unref(props.href) || "";
      if (isExternal.value) return path;
      return resolveTrailingSlashBehavior(path, router.resolve, unref(props.trailingSlash));
    });
    const href = computed(() => {
      var _a2, _b2, _c2;
      const effectiveTrailingSlash = (_a2 = unref(props.trailingSlash)) != null ? _a2 : options.trailingSlash;
      if (!to.value || isAbsoluteUrl.value || isHashLinkWithoutHashMode(to.value)) {
        const raw = to.value;
        return typeof raw === "string" ? sanitizeAnchorHref(raw) : raw;
      }
      if (isExternal.value) {
        const path = typeof to.value === "object" && "path" in to.value ? resolveRouteObject(to.value) : to.value;
        const href2 = typeof path === "object" ? router.resolve(path).href : path;
        const safe = typeof href2 === "string" ? sanitizeAnchorHref(href2) : href2;
        return safe === null ? null : applyTrailingSlashBehavior(safe, effectiveTrailingSlash);
      }
      if (typeof to.value === "object") return (_c2 = (_b2 = router.resolve(to.value)) == null ? void 0 : _b2.href) != null ? _c2 : null;
      return applyTrailingSlashBehavior(isRootedPath(to.value) ? rootedHref(to.value) : router.resolve(to.value).href, effectiveTrailingSlash);
    });
    return {
      to,
      hasTarget,
      isAbsoluteUrl,
      isExternal,
      href,
      async navigate(_e) {
        if (href.value === null) return;
        await navigateTo(href.value, {
          replace: unref(props.replace),
          external: isExternal.value || hasTarget.value
        });
      }
    };
  }
  function useNuxtLink(props) {
    var _a, _b, _c;
    const router = useRouter();
    const target = useLinkTarget(props);
    const builtinRouterLink = resolveComponent("RouterLink");
    const useBuiltinLink = builtinRouterLink && typeof builtinRouterLink !== "string" ? builtinRouterLink.useLink : void 0;
    const link = target.isExternal.value ? void 0 : useBuiltinLink == null ? void 0 : useBuiltinLink({
      ...props,
      to: target.to,
      viewTransition: unref(props.viewTransition)
    });
    return {
      ...target,
      isActive: (_a = link == null ? void 0 : link.isActive) != null ? _a : computed(() => target.to.value === router.currentRoute.value.path),
      isExactActive: (_b = link == null ? void 0 : link.isExactActive) != null ? _b : computed(() => target.to.value === router.currentRoute.value.path),
      route: (_c = link == null ? void 0 : link.route) != null ? _c : computed(() => router.resolve(target.to.value))
    };
  }
  function renderStaticInternalLink(props, slots, router, rawTo) {
    var _a, _b;
    const route = router.resolve(resolveTrailingSlashBehavior(rawTo, router.resolve, props.trailingSlash));
    const currentRoute = router.currentRoute.value;
    const index = activeRecordIndex(route, currentRoute);
    const isActive = index > -1 && includesParams(currentRoute.params, route.params);
    const isExactActive = index > -1 && index === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.params);
    let dataInternal;
    const routerOptions = router.options;
    const href = sanitizeAnchorHref(route.href);
    return h("a", {
      "aria-current": isExactActive ? (_a = props.ariaCurrentValue) != null ? _a : "page" : null,
      href,
      "class": {
        [getLinkClass(props.activeClass || options.activeClass, routerOptions.linkActiveClass, "router-link-active")]: isActive,
        [getLinkClass(props.exactActiveClass || options.exactActiveClass, routerOptions.linkExactActiveClass, "router-link-exact-active")]: isExactActive
      },
      "rel": props.rel || void 0,
      "data-internal": dataInternal
    }, (_b = slots.default) == null ? void 0 : _b.call(slots, {
      route,
      href,
      isActive,
      isExactActive,
      navigate: () => navigateTo(route.href, { replace: props.replace })
    }));
  }
  return defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        required: false
      },
      href: {
        type: [String, Object],
        required: false
      },
      target: {
        type: String,
        required: false
      },
      rel: {
        type: String,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetchOn: {
        type: [String, Object],
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        required: false
      },
      exactActiveClass: {
        type: String,
        required: false
      },
      prefetchedClass: {
        type: String,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      },
      trailingSlash: {
        type: String,
        required: false
      }
    },
    useLink: useNuxtLink,
    setup(props, { slots }) {
      const router = useRouter();
      if (!props.custom) {
        const rawTo = props.to || props.href || "";
        if (!(props.external || typeof rawTo === "string" && (rawTo === "" || isAbsoluteHref(rawTo))) && !isHashLinkWithoutHashMode(rawTo) && (!props.target || props.target === "_self")) return () => renderStaticInternalLink(props, slots, router, rawTo);
      }
      const routerLinkComponent = resolveComponent("RouterLink");
      const { to, href, navigate, isExternal, hasTarget, isAbsoluteUrl } = useLinkTarget(props);
      const prefetched = shallowRef(false);
      const el = void 0;
      const elRef = void 0;
      function shouldPrefetch(mode) {
        return false;
      }
      async function prefetch(nuxtApp = useNuxtApp()) {
      }
      return () => {
        var _a;
        const target = props.target || null;
        const rel = firstNonUndefined(props.noRel ? "" : props.rel, options.externalRelAttribute, isAbsoluteUrl.value || hasTarget.value ? "noopener noreferrer" : "") || null;
        const getCustomSlotProps = (routerLinkSlotProps) => ({
          navigate,
          get route() {
            if (!href.value) return;
            const url = new URL(href.value, "http://localhost");
            return {
              path: url.pathname,
              fullPath: url.pathname,
              get query() {
                return parseQuery(url.search);
              },
              hash: url.hash,
              params: {},
              name: void 0,
              matched: [],
              redirectedFrom: void 0,
              meta: {},
              href: href.value
            };
          },
          rel,
          target,
          isExternal: isExternal.value || hasTarget.value,
          isActive: false,
          isExactActive: false,
          ...routerLinkSlotProps,
          href: typeof (routerLinkSlotProps == null ? void 0 : routerLinkSlotProps.href) === "string" ? sanitizeAnchorHref(routerLinkSlotProps.href) : href.value,
          prefetch,
          prefetched: prefetched.value,
          shouldPrefetch
        });
        if (!isExternal.value && !hasTarget.value && !isHashLinkWithoutHashMode(to.value)) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) routerLinkProps.rel = props.rel || void 0;
          return h(routerLinkComponent, routerLinkProps, props.custom && slots.default ? { default: (slotProps) => slots.default(getCustomSlotProps(slotProps)) } : slots.default);
        }
        if (props.custom) {
          if (!slots.default) return null;
          return slots.default(getCustomSlotProps());
        }
        return h("a", {
          ref: el,
          href: href.value || null,
          rel,
          target,
          onClick: async (event) => {
            var _a2;
            if (isExternal.value || hasTarget.value) return;
            event.preventDefault();
            try {
              const encodedHref = encodeRoutePath((_a2 = href.value) != null ? _a2 : "");
              return await (props.replace ? router.replace(encodedHref) : router.push(encodedHref));
            } finally {
            }
          }
        }, (_a = slots.default) == null ? void 0 : _a.call(slots));
      };
    }
  });
}
var NuxtLink = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function isSameRouteRecord(a, b) {
  return (a.aliasOf || a) === (b.aliasOf || b);
}
function getOriginalPath(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
function isEquivalentArray(a, b) {
  return Array.isArray(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
}
function isSameParamValue(a, b) {
  return Array.isArray(a) ? isEquivalentArray(a, b) : Array.isArray(b) ? isEquivalentArray(b, a) : (a && a.valueOf()) === (b && b.valueOf());
}
function isSameRouteLocationParams(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) return false;
  for (const key in a) if (!isSameParamValue(a[key], b[key])) return false;
  return true;
}
function includesParams(outer, inner) {
  for (const key in inner) {
    const innerValue = inner[key];
    const outerValue = outer[key];
    if (typeof innerValue === "string") {
      if (innerValue !== outerValue) return false;
    } else if (!Array.isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value.valueOf() !== outerValue[i].valueOf())) return false;
  }
  return true;
}
function activeRecordIndex(route, currentRoute) {
  const { matched } = route;
  const { length } = matched;
  const routeMatched = matched[length - 1];
  const currentMatched = currentRoute.matched;
  if (!routeMatched || !currentMatched.length) return -1;
  const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
  if (index > -1) return index;
  const parentRecordPath = getOriginalPath(matched[length - 2]);
  return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index;
}
function getLinkClass(propClass, globalClass, defaultClass) {
  var _a;
  return (_a = propClass != null ? propClass : globalClass) != null ? _a : defaultClass;
}
function applyTrailingSlashBehavior(to, trailingSlash) {
  if (trailingSlash !== "append" && trailingSlash !== "remove") return to;
  const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
  if (hasProtocol(to) && !to.startsWith("http")) return to;
  return normalizeFn(to, true);
}

export { NuxtLink as N };
//# sourceMappingURL=nuxt-link-C7rfVfaB.mjs.map
