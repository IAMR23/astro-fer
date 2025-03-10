import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import 'html-escaper';
import 'clsx';
import { n as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_Dy72Gv6t.mjs';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || undefined,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : undefined,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/ismae/Downloads/pro/invitation-astro-master/","cacheDir":"file:///C:/Users/ismae/Downloads/pro/invitation-astro-master/node_modules/.astro/","outDir":"file:///C:/Users/ismae/Downloads/pro/invitation-astro-master/dist/","srcDir":"file:///C:/Users/ismae/Downloads/pro/invitation-astro-master/src/","publicDir":"file:///C:/Users/ismae/Downloads/pro/invitation-astro-master/public/","buildClientDir":"file:///C:/Users/ismae/Downloads/pro/invitation-astro-master/dist/","buildServerDir":"file:///C:/Users/ismae/Downloads/pro/invitation-astro-master/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.B1becP91.css"},{"type":"inline","content":".button[data-astro-cid-55xpxy2s]{width:-moz-fit-content;width:fit-content;display:flex;padding:1.2em 1rem;cursor:pointer;gap:.4rem;font-weight:700;border-radius:30px;background-color:#b5985c;background-size:300%;color:#fff;border:none;background-position:left center;box-shadow:0 30px 10px -20px #0003}.button[data-astro-cid-55xpxy2s]:hover{background-size:320%;background-position:right center}.button[data-astro-cid-55xpxy2s]:hover svg[data-astro-cid-55xpxy2s]{fill:#fff}.button[data-astro-cid-55xpxy2s] svg[data-astro-cid-55xpxy2s]{width:23px;fill:#f09f33;transition:.3s ease}.icono-blanco[data-astro-cid-55xpxy2s]{filter:brightness(0) invert(1)}\n.container[data-astro-cid-j7pv25f6]{background-image:url(/carta.jpg);background-size:cover;background-position:center;background-repeat:no-repeat;width:100%;height:70vh}.text-xs[data-astro-cid-j7pv25f6]{font-size:.75rem}.container-2[data-astro-cid-j7pv25f6]{background-color:#b5985c;text-align:center;color:#fff}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/ismae/Downloads/pro/invitation-astro-master/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/ismae/Downloads/pro/invitation-astro-master/src/pages/inv/[id].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/inv/[id]@_@astro":"pages/inv/_id_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_O9hovD_r.mjs","C:/Users/ismae/Downloads/pro/invitation-astro-master/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_ChQwEDrQ.mjs","C:/Users/ismae/Downloads/pro/invitation-astro-master/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.DYY3P5UR.js","C:/Users/ismae/Downloads/pro/invitation-astro-master/src/components/CardFinal.astro?astro&type=script&index=0&lang.ts":"_astro/CardFinal.astro_astro_type_script_index_0_lang.DYY3P5UR.js","C:/Users/ismae/Downloads/pro/invitation-astro-master/src/pages/index.astro?astro&type=script&index=1&lang.ts":"_astro/index.astro_astro_type_script_index_1_lang.HeLMvrym.js","C:/Users/ismae/Downloads/pro/invitation-astro-master/src/components/CardFinal.astro?astro&type=script&index=1&lang.ts":"_astro/CardFinal.astro_astro_type_script_index_1_lang.DCZhQTn3.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/ismae/Downloads/pro/invitation-astro-master/src/pages/index.astro?astro&type=script&index=0&lang.ts","const n=document.getElementById(\"miCancion\");document.addEventListener(\"click\",()=>{n.play()});"],["C:/Users/ismae/Downloads/pro/invitation-astro-master/src/components/CardFinal.astro?astro&type=script&index=0&lang.ts","const n=document.getElementById(\"miCancion\");document.addEventListener(\"click\",()=>{n.play()});"]],"assets":["/_astro/index.B1becP91.css","/anillo.png","/anillo2.png","/asistencia.png","/A_Thousand_Years.mp3","/carta.jpg","/copas.png","/DevOps (1).png","/DevOps.png","/iglesia.png","/sobre.png","/sobre2.png","/terno.png","/test.webp","/ubicacion.png","/vestido.png","/fonts/Oneday.woff2","/_astro/CardFinal.astro_astro_type_script_index_1_lang.DCZhQTn3.js","/_astro/index.astro_astro_type_script_index_1_lang.HeLMvrym.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"A1qu3KUwcDXE7n2T0rRgebrFfsxRTQAUk9kLavXwqHY="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
