import { version, unref, inject, hasInjectionContext, getCurrentInstance, useSSRContext, createApp, effectScope, reactive, defineAsyncComponent, provide, onErrorCaptured, onServerPrefetch, createVNode, resolveDynamicComponent, toRef, h, isReadonly, mergeProps, isRef, isShallow, isReactive, toRaw, withCtx, openBlock, createBlock, Fragment, renderList } from 'file:///Users/mac/anna-hair-expert/node_modules/vue/index.mjs';
import { $fetch } from 'file:///Users/mac/anna-hair-expert/node_modules/ofetch/dist/node.mjs';
import { createHooks } from 'file:///Users/mac/anna-hair-expert/node_modules/hookable/dist/index.mjs';
import { getContext } from 'file:///Users/mac/anna-hair-expert/node_modules/unctx/dist/index.mjs';
import { getActiveHead } from 'file:///Users/mac/anna-hair-expert/node_modules/unhead/dist/index.mjs';
import { defineHeadPlugin } from 'file:///Users/mac/anna-hair-expert/node_modules/@unhead/shared/dist/index.mjs';
import { withQuery, hasProtocol, parseURL, isScriptProtocol, joinURL, isEqual, stringifyParsedURL, stringifyQuery, parseQuery } from 'file:///Users/mac/anna-hair-expert/node_modules/ufo/dist/index.mjs';
import { createError as createError$1, sanitizeStatusCode } from 'file:///Users/mac/anna-hair-expert/node_modules/h3/dist/index.mjs';
import { ssrRenderSuspense, ssrRenderComponent, ssrRenderVNode, ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrRenderList } from 'file:///Users/mac/anna-hair-expert/node_modules/vue/server-renderer/index.mjs';
import { Swiper, SwiperSlide } from 'file:///Users/mac/anna-hair-expert/node_modules/swiper/swiper-vue.mjs';
import { Autoplay, Pagination } from 'file:///Users/mac/anna-hair-expert/node_modules/swiper/modules/index.mjs';
import { a as useRuntimeConfig$1 } from '../nitro/nitro-prerenderer.mjs';
import 'file:///Users/mac/anna-hair-expert/node_modules/destr/dist/index.mjs';
import 'file:///Users/mac/anna-hair-expert/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/mac/anna-hair-expert/node_modules/scule/dist/index.mjs';
import 'file:///Users/mac/anna-hair-expert/node_modules/klona/dist/index.mjs';
import 'file:///Users/mac/anna-hair-expert/node_modules/defu/dist/defu.mjs';
import 'file:///Users/mac/anna-hair-expert/node_modules/ohash/dist/index.mjs';
import 'file:///Users/mac/anna-hair-expert/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/mac/anna-hair-expert/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/mac/anna-hair-expert/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/mac/anna-hair-expert/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/mac/anna-hair-expert/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/mac/anna-hair-expert/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/mac/anna-hair-expert/node_modules/pathe/dist/index.mjs';

const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
const nuxtAppCtx = /* @__PURE__ */ getContext("nuxt-app", {
  asyncContext: false
});
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.8.2";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    runWithContext: (fn) => nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn)),
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
      nuxtApp.ssrContext._payloadReducers = {};
      nuxtApp.payload.path = nuxtApp.ssrContext.url;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin) {
  if (plugin.hooks) {
    nuxtApp.hooks.addHooks(plugin.hooks);
  }
  if (typeof plugin === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a, _b;
  const parallels = [];
  const errors = [];
  for (const plugin of plugins2) {
    if (((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) && ((_b = plugin.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    const promise = applyPlugin(nuxtApp, plugin);
    if (plugin.parallel) {
      parallels.push(promise.catch((e) => errors.push(e)));
    } else {
      await promise;
    }
  }
  await Promise.all(parallels);
  if (errors.length) {
    throw errors[0];
  }
}
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin) {
  if (typeof plugin === "function") {
    return plugin;
  }
  delete plugin.name;
  return Object.assign(plugin.setup || (() => {
  }), plugin, { [NuxtPluginIndicator]: true });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function useNuxtApp() {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig() {
  return (/* @__PURE__ */ useNuxtApp()).$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
version.startsWith("3");
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref, lastKey = "") {
  if (ref instanceof Promise)
    return ref;
  const root = resolveUnref(ref);
  if (!ref || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}
defineHeadPlugin({
  hooks: {
    "entries:resolve": function(ctx) {
      for (const entry2 of ctx.entries)
        entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
    }
  }
});
const headSymbol = "usehead";
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey$1 = "__unhead_injection_handler__";
function setHeadInjectionHandler(handler) {
  _global[globalKey$1] = handler;
}
function injectHead() {
  if (globalKey$1 in _global) {
    return _global[globalKey$1]();
  }
  const head = inject(headSymbol);
  if (!head && "prerender" !== "production")
    console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results.");
  return head || getActiveHead();
}
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    setHeadInjectionHandler(
      // need a fresh instance of the nuxt app to avoid parallel requests interfering with each other
      () => (/* @__PURE__ */ useNuxtApp()).vueApp._context.provides.usehead
    );
    nuxtApp.vueApp.use(head);
  }
});
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a;
  return (_a = /* @__PURE__ */ useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, (/* @__PURE__ */ useNuxtApp())._route);
  }
  return (/* @__PURE__ */ useNuxtApp())._route;
};
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if ((/* @__PURE__ */ useNuxtApp())._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : withQuery(to.path || "/", to.query || {}) + (to.hash || "");
  if (options == null ? void 0 : options.open) {
    return Promise.resolve();
  }
  const isExternal = (options == null ? void 0 : options.external) || hasProtocol(toPath, { acceptRelative: true });
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const protocol = parseURL(toPath).protocol;
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: location2 }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const useError = () => toRef((/* @__PURE__ */ useNuxtApp()).payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const error = useError();
    if (false)
      ;
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const isNuxtError = (err) => !!(err && typeof err === "object" && "__nuxt_error" in err);
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};
function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
_globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  manifest_45route_45rule
];
function getRouteFromPath(fullPath) {
  if (typeof fullPath === "object") {
    fullPath = stringifyParsedURL({
      pathname: fullPath.path || "",
      search: stringifyQuery(fullPath.query || {}),
      hash: fullPath.hash || ""
    });
  }
  const url = parseURL(fullPath.toString());
  return {
    path: url.pathname,
    fullPath,
    query: parseQuery(url.search),
    hash: url.hash,
    // stub properties for compat with vue-router
    params: {},
    name: void 0,
    matched: [],
    redirectedFrom: void 0,
    meta: {},
    href: fullPath
  };
}
const router_CaKIoANnI2 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  setup(nuxtApp) {
    const initialURL = nuxtApp.ssrContext.url;
    const routes = [];
    const hooks = {
      "navigate:before": [],
      "resolve:before": [],
      "navigate:after": [],
      error: []
    };
    const registerHook = (hook, guard) => {
      hooks[hook].push(guard);
      return () => hooks[hook].splice(hooks[hook].indexOf(guard), 1);
    };
    (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    const route = reactive(getRouteFromPath(initialURL));
    async function handleNavigation(url, replace) {
      try {
        const to = getRouteFromPath(url);
        for (const middleware of hooks["navigate:before"]) {
          const result = await middleware(to, route);
          if (result === false || result instanceof Error) {
            return;
          }
          if (typeof result === "string" && result.length) {
            return handleNavigation(result, true);
          }
        }
        for (const handler of hooks["resolve:before"]) {
          await handler(to, route);
        }
        Object.assign(route, to);
        if (false)
          ;
        for (const middleware of hooks["navigate:after"]) {
          await middleware(to, route);
        }
      } catch (err) {
        for (const handler of hooks.error) {
          await handler(err);
        }
      }
    }
    const router = {
      currentRoute: route,
      isReady: () => Promise.resolve(),
      // These options provide a similar API to vue-router but have no effect
      options: {},
      install: () => Promise.resolve(),
      // Navigation
      push: (url) => handleNavigation(url),
      replace: (url) => handleNavigation(url),
      back: () => window.history.go(-1),
      go: (delta) => window.history.go(delta),
      forward: () => window.history.go(1),
      // Guards
      beforeResolve: (guard) => registerHook("resolve:before", guard),
      beforeEach: (guard) => registerHook("navigate:before", guard),
      afterEach: (guard) => registerHook("navigate:after", guard),
      onError: (handler) => registerHook("error", handler),
      // Routes
      resolve: getRouteFromPath,
      addRoute: (parentName, route2) => {
        routes.push(route2);
      },
      getRoutes: () => routes,
      hasRoute: (name) => routes.some((route2) => route2.name === name),
      removeRoute: (name) => {
        const index = routes.findIndex((route2) => route2.name === name);
        if (index !== -1) {
          routes.splice(index, 1);
        }
      }
    };
    nuxtApp.vueApp.component("RouterLink", {
      functional: true,
      props: {
        to: String,
        custom: Boolean,
        replace: Boolean,
        // Not implemented
        activeClass: String,
        exactActiveClass: String,
        ariaCurrentValue: String
      },
      setup: (props, { slots }) => {
        const navigate = () => handleNavigation(props.to, props.replace);
        return () => {
          var _a;
          const route2 = router.resolve(props.to);
          return props.custom ? (_a = slots.default) == null ? void 0 : _a.call(slots, { href: props.to, navigate, route: route2 }) : h("a", { href: props.to, onClick: (e) => {
            e.preventDefault();
            return navigate();
          } }, slots);
        };
      }
    });
    nuxtApp._route = route;
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    const initialLayout = nuxtApp.payload.state._layout;
    nuxtApp.hooks.hookOnce("app:created", async () => {
      router.beforeEach(async (to, from) => {
        var _a;
        to.meta = reactive(to.meta || {});
        if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
          to.meta.layout = initialLayout;
        }
        nuxtApp._processingMiddleware = true;
        if (!((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext)) {
          const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
          for (const middleware of middlewareEntries) {
            const result = await nuxtApp.runWithContext(() => middleware(to, from));
            {
              if (result === false || result instanceof Error) {
                const error = result || createError$1({
                  statusCode: 404,
                  statusMessage: `Page Not Found: ${initialURL}`
                });
                delete nuxtApp._processingMiddleware;
                return nuxtApp.runWithContext(() => showError(error));
              }
            }
            if (result === true) {
              continue;
            }
            if (result || result === false) {
              return result;
            }
          }
        }
      });
      router.afterEach(() => {
        delete nuxtApp._processingMiddleware;
      });
      await router.replace(initialURL);
      if (!isEqual(route.fullPath, initialURL)) {
        await nuxtApp.runWithContext(() => navigateTo(route.fullPath));
      }
    });
    return {
      provide: {
        route,
        router
      }
    };
  }
});
function definePayloadReducer(name, reduce) {
  {
    (/* @__PURE__ */ useNuxtApp()).ssrContext._payloadReducers[name] = reduce;
  }
}
const reducers = {
  NuxtError: (data) => isNuxtError(data) && data.toJSON(),
  EmptyShallowRef: (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  EmptyRef: (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  ShallowRef: (data) => isRef(data) && isShallow(data) && data.value,
  ShallowReactive: (data) => isReactive(data) && isShallow(data) && toRaw(data),
  Ref: (data) => isRef(data) && data.value,
  Reactive: (data) => isReactive(data) && toRaw(data)
};
const revive_payload_server_eJ33V7gbc6 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const reducer in reducers) {
      definePayloadReducer(reducer, reducers[reducer]);
    }
  }
});
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
const plugins = [
  unhead_KgADcZ0jPj,
  router_CaKIoANnI2,
  revive_payload_server_eJ33V7gbc6,
  components_plugin_KR1HBZs4kY
];
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$7 = {
  name: "LiquidButton",
  props: {
    greetingMessage: String
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<a${ssrRenderAttrs(mergeProps({ href: "https://t.me/annaivanskay" }, _attrs))}><span>${ssrInterpolate($props.greetingMessage)}</span><div class="liquid"></div></a>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LiquidButton.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$6 = {
  name: "Slider",
  data() {
    return {
      images: ["master.png", "gallery.jpg", "master.png"]
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Swiper = Swiper;
  const _component_SwiperSlide = SwiperSlide;
  _push(ssrRenderComponent(_component_Swiper, mergeProps({
    modules: ["SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay), "SwiperPagination" in _ctx ? _ctx.SwiperPagination : unref(Pagination)],
    "slides-per-view": 1,
    loop: true,
    autoplay: {
      delay: 4e3,
      disableOnInteraction: true
    }
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.images, (image) => {
          _push2(ssrRenderComponent(_component_SwiperSlide, { key: image }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<img${ssrRenderAttr("src", image)}${ssrRenderAttr("alt", image)}${_scopeId2}>`);
              } else {
                return [
                  createVNode("img", {
                    src: image,
                    alt: image
                  }, null, 8, ["src", "alt"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.images, (image) => {
            return openBlock(), createBlock(_component_SwiperSlide, { key: image }, {
              default: withCtx(() => [
                createVNode("img", {
                  src: image,
                  alt: image
                }, null, 8, ["src", "alt"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Slider.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$5 = {
  components: { LiquidButton: __nuxt_component_0$1 }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_LiquidButton = __nuxt_component_0$1;
  const _component_Slider = __nuxt_component_1$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "advantage" }, _attrs))}><div class="flex flex-col-reverse gap-4 lg:gap-[7rem] lg:max-w-12col lg:py-[5rem] max-w-5col md:flex-row md:gap-12 md:max-w-8col md:py-10 mt-20 mx-auto px-8 py-2 w-full"><div class="lg:py-8 py-2 space-y-4 w-full"><h1 class="hero-title bg-text font-serif gradient hidden leading-normal lg:leading-normal lg:text-5xl md:block text-4xl text-koromiko uppercase"><span>Anna Kuchma</span><span>Anna Kuchma</span></h1><ul class="advantage-list space-y-4"><li class="dot"> На своём примере показываю, как быстро можно достичь цели 🎯</li><li class="dot"> Независимый технолог модификации и реконструкции волос</li><li class="dot">С нуля до студии 100м²</li><li class="dot">Обучение с нуля</li><li class="dot"> Онлайн/офлайн повышение квалификации для действующих мастеров</li><li class="dot"> Мои ученицы работают по всему миру и успешно применяют мою уникальную методику</li><li class="dot"> Автор онлайн курса «Идеальное полотно. Работа с ёлкой»</li></ul><div class="flex flex-col items-center lg:flex-row lg:space-x-2.5 lg:space-y-0 py-2.5 space-x-0 space-y-2.5 w-full">`);
  _push(ssrRenderComponent(_component_LiquidButton, { greetingMessage: "Онлайн обучение" }, null, _parent));
  _push(`</div></div><div class="gallery h-fit lg:max-w-4col max-w-full md:max-h-none md:max-w-3col overflow-hidden rounded-3xl shrink-0 w-full xl:max-w-5col">`);
  _push(ssrRenderComponent(_component_Slider, null, null, _parent));
  _push(`</div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Advantages.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$4 = {
  name: "Course"
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(_attrs)}><div class="lg:max-w-12col max-w-5col md:max-w-8col mx-auto p-8 space-y-4 w-full"><div class="space-y-4" id="courseProgram"><h2 class="course-title leading-tight lg:text-5xl text-4xl uppercase"> Онлайн курс<br>«Идеальное полотно. Работа с ёлкой» </h2><p class="!mt-10 text-justify text-lg"> Все твои вопросы и трудности в работе можно закрыть с помощью одного обучения – мечта, правда? Для меня – это реальность. Весь мой опыт, наработки и авторские фишки будут доступны для тебя. Мой курс посвящён идеальному полотну и ты сможешь научиться его создавать. Научишься продвигать свои работы, чтобы стать топ экспертом в своей сфере. </p><dl class="flex flex-row flex-wrap gap-x-4 gap-y-2 py-8"><div class="basis-full golden-border grow overflow-hidden p-[2px] rounded-xl shrink-0 sm:basis-0"><div class="font-semibold golden h-full p-3 rounded-[0.8725rem] space-y-4 text-black"><dt>Для кого подойдёт обучение?</dt><dd class="font-medium"> Для действующих мастеров модификации волос.</dd></div></div><div class="basis-full h-0 hidden lg:hidden sm:block w-0"></div><div class="basis-full golden-border grow overflow-hidden p-[2px] rounded-xl shrink-0 sm:basis-0"><div class="font-semibold golden h-full p-3 rounded-[0.8725rem] space-y-4 text-black"><dt>Какой формат?</dt><dd class="font-medium">Уроки в записи.</dd></div></div><div class="basis-full golden-border grow overflow-hidden p-[2px] rounded-xl shrink-0 sm:basis-0"><div class="font-semibold golden h-full p-3 rounded-[0.8725rem] space-y-4 text-black"><dt>Доступ к курсу</dt><dd class="font-medium"> Тариф Classic - 1 месяц<br> Тариф Vip - 2 месяца</dd></div></div></dl><div class="space-y-8"><h3 class="font-serif text-3xl">Программа курса:</h3><div class="border-black border-l-2 dark:border-white space-y-8"><div class="space-y-4"><h4 id="firstModule" class="font-medium step"> Первый теоретический модуль включает в себя шесть уроков. </h4><div class="dark:text-neutral-300 pl-4 sm:pl-8 text-neutral-800"><ol role="list" aria-labelledby="firstModule" class="space-y-2.5"><li class="num">Что такое ёлка?</li><li class="num"> Составы, которые помогут достичь идеального полотна. Подбор под структуры волос.</li><li class="num"> Температурный режим во время выпаривания.</li><li class="num">Мои лайфхаки и фишки в работе.</li><li class="num">Завершение процедур.</li><li class="num"> Домашний уход, рекомендации для клиента.</li><li class="num">Дополнительное освещение, съёмка.</li></ol></div></div><div class="space-y-4"><h4 id="secondModule" class="font-medium step"> Второй практический модуль включает в себя: </h4><div class="dark:text-neutral-300 pl-4 sm:pl-8 text-neutral-800"><ol role="list" aria-labelledby="secondModule" class="space-y-2.5"><li class="num"> Разбор структуры модели, подготовка волос к процедуре.</li><li class="num">Работа с подложкой.</li><li class="num"> Нанесение состава, быстрая сушка волос.</li><li class="num"> Та самая авторская техника выпаривания.</li><li class="num"> Завершение процедуры, сушка, результат.</li></ol></div></div><div class="space-y-4"><h4 id="thirdModule" class="font-medium step"> Третий модуль от приглашённого спикера 🚀 </h4><div class="dark:text-neutral-300 pl-4 sm:pl-8 space-y-4 text-neutral-800"><div class="rounded-2xl select-none swiper swiper-initialized swiper-horizontal swiper-backface-hidden" id="sliderA" data-swiper-slides-per-view="1" data-swiper-breakpoints="768.slidesPerView:2"><div class="swiper-wrapper"><div class="!flex justify-center md:!block md:!w-fit swiper-slide swiper-slide-active" style="${ssrRenderStyle({ "width": "509px", "margin-right": "20px" })}"><div class="overflow-hidden rounded-2xl w-fit"><img${ssrRenderAttr("src", "")} alt=""></div></div><div class="!flex justify-center md:!block md:!w-fit swiper-slide swiper-slide-next" style="${ssrRenderStyle({ "width": "509px", "margin-right": "20px" })}"><div class="overflow-hidden rounded-2xl w-fit"><img${ssrRenderAttr("src", "")} alt=""></div></div></div><div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-lock"><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span></div></div><blockquote class="quote text-justify"> Меня зовут Алексеева Елизавета и я выступаю в роли приглашенного спикера. Я являюсь ведущим специалистом в области smm, контент-менеджмента и продюсирования. Я поделюсь с вами двухлетним опытом работы в Инстаграм. Моя миссия - обьяснить, как эффективно работать с инструментами Инстаграма, чтобы быть с ним на ТЫ. </blockquote><ol role="list" aria-labelledby="thirdModule" class="space-y-2.5"><li class="num"> Что такое упаковка профиля и зачем она нужна?</li><li class="num">Ошибки при ведение профиля.</li><li class="num">Что транслировать? Виды контента.</li></ol></div></div></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Course.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {
  name: "Tariffs",
  components: { LiquidButton: __nuxt_component_0$1 }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_LiquidButton = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(_attrs)}><div class="lg:max-w-12col max-w-5col md:max-w-8col mt-20 mx-auto px-8 space-y-8 w-full"><h2 class="font-serif leading-tight text-[2rem] uppercase">Тарифы</h2><div class="flex flex-col gap-6 lg:gap-8 md:flex-row"><div class="bg-[radial-gradient(circle_at_18.7%_37.8%,#f0f0f0_0,#cdd6da_90%)] flex flex-col gap-9 pb-5 pt-10 px-3 rounded-2xl sm:px-8 sm:py-10 text-black w-full"><h4 class="font-medium text-3xl text-center">Classic</h4><div class="flex flex-col items-center"><div class="w-fit font-serif"><p class="font-bold text-5xl"><span>₴</span>3600</p></div></div><p class="font-semibold text-center text-sm uppercase"> 2 модуля 12 уроков </p><div class="px-3 space-y-4"><ul class="font-medium"><li class="check">доступ к общему чату</li><li class="check">доступ к материалу 1 месяц</li><li class="check">конспекты и доп материал к урокам</li><li class="check">сертификат о прохождение курса</li></ul></div><div class="flex flex-col justify-center mt-auto pt-6">`);
  _push(ssrRenderComponent(_component_LiquidButton, {
    class: "tariff-button",
    greetingMessage: "Купить"
  }, null, _parent));
  _push(`</div></div><div class="bg-[radial-gradient(circle_at_18.7%_37.8%,#fbe972_0,#d99428_90%)] flex flex-col gap-9 pb-5 pt-10 px-3 rounded-2xl sm:px-8 sm:py-10 text-black w-full"><h4 class="font-medium text-3xl text-center">VIP</h4><div class="flex flex-col items-center"><div class="w-fit font-serif"><p class="font-bold text-5xl"><span>₴</span>4800</p></div></div><p class="font-semibold text-center text-sm uppercase"> 3 модуля 15 уроков </p><div class="px-3 space-y-4"><p class="text-justify">Для тех кто хочет делать не только идеальное полотно, но и подвигать себя в инстаграмм.</p><ul class="font-medium"><li class="check">доступ к общему чату</li><li class="check"> обратная связь с Валерией Куржос в личных сообщениях</li><li class="check">доступ к материалу 2 месяц</li><li class="check">конспекты и доп материал к урокам</li><li class="check">сертификат о прохождение курса</li></ul></div><div class="flex flex-col justify-center mt-auto pt-6">`);
  _push(ssrRenderComponent(_component_LiquidButton, {
    class: "tariff-button",
    greetingMessage: "Купить"
  }, null, _parent));
  _push(`</div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tariffs.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "" + __buildAssetsURL("master.fe81ad6a.png");
const _sfc_main$2 = {
  components: { Course: __nuxt_component_1, Advantages: __nuxt_component_0, Tariffs: __nuxt_component_2 }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Advantages = __nuxt_component_0;
  const _component_Course = __nuxt_component_1;
  const _component_Tariffs = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative section"><div class="section-inner flex flex-row gap-4 justify-center lg:gap-8 max-w-[1280px] md:gap-6 sm:gap-4 mx-auto px-12 w-full"><div class="description-wrapper flex flex-col justify-center lg:py-2 lg:text-left lg:w-full py-52 text-center"><h1 class="hero-title heading bg-text font-serif gradient leading-tight text-5xl text-koromiko uppercase xl:leading-tight xl:text-6xl"><span>Anna Kuchma</span><span>Anna Kuchma</span></h1><p class="sm:text-2xl text-white text-xl"> Топ - майстер з реконструкції та естетики волосся </p></div><div class="picture-wrapper h-fit hidden lg:block relative shrink-0 w-fit"><img class="master-picture"${ssrRenderAttr("src", _imports_0)} alt=""></div></div></section>`);
  _push(ssrRenderComponent(_component_Advantages, null, null, _parent));
  _push(ssrRenderComponent(_component_Course, null, null, _parent));
  _push(ssrRenderComponent(_component_Tariffs, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    (_error.stack || "").split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n");
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import('./_nuxt/error-404-aebb40a7.mjs').then((r) => r.default || r));
    const _Error = defineAsyncComponent(() => import('./_nuxt/error-500-bfa0cd63.mjs').then((r) => r.default || r));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ErrorComponent = _sfc_main$1;
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = defineAsyncComponent(() => import('./_nuxt/island-renderer-7a678a3c.mjs').then((r) => r.default || r));
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RootComponent = _sfc_main;
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(RootComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.hooks.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);

export { _export_sfc as _, useRuntimeConfig as a, createError as c, entry$1 as default, injectHead as i, navigateTo as n, resolveUnrefHeadInput as r, useRouter as u };
//# sourceMappingURL=server.mjs.map
