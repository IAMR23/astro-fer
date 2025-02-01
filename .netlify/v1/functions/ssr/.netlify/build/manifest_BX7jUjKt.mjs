import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import 'html-escaper';
import 'clsx';
import { n as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_D6qeKUdT.mjs';

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

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/ismae/Downloads/pro/invitation-astro-master/","cacheDir":"file:///C:/Users/ismae/Downloads/pro/invitation-astro-master/node_modules/.astro/","outDir":"file:///C:/Users/ismae/Downloads/pro/invitation-astro-master/dist/","srcDir":"file:///C:/Users/ismae/Downloads/pro/invitation-astro-master/src/","publicDir":"file:///C:/Users/ismae/Downloads/pro/invitation-astro-master/public/","buildClientDir":"file:///C:/Users/ismae/Downloads/pro/invitation-astro-master/dist/","buildServerDir":"file:///C:/Users/ismae/Downloads/pro/invitation-astro-master/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DEO-WhfD.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/ismae/Downloads/pro/invitation-astro-master/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BX7jUjKt.mjs","C:/Users/ismae/Downloads/pro/invitation-astro-master/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_xXcEKaB5.mjs","C:/Users/ismae/Downloads/pro/invitation-astro-master/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.HeLMvrym.js","C:/Users/ismae/Downloads/pro/invitation-astro-master/src/components/Temporizer.astro?astro&type=script&index=0&lang.ts":"_astro/Temporizer.astro_astro_type_script_index_0_lang.ymbVKsxv.js","C:/Users/ismae/Downloads/pro/invitation-astro-master/src/components/Card.astro?astro&type=script&index=0&lang.ts":"_astro/Card.astro_astro_type_script_index_0_lang.DRIkbtH4.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/ismae/Downloads/pro/invitation-astro-master/src/pages/index.astro?astro&type=script&index=0&lang.ts","window.sr=ScrollReveal();sr.reveal(\".temporizer\",{duration:3e3,origin:\"left\",distance:\"-100px\"});sr.reveal(\".timer\",{duration:3e3,origin:\"bottom\",distance:\"-100px\"});sr.reveal(\".gallery\",{duration:3e3,origin:\"left\",distance:\"50px\"});sr.reveal(\".dressCode\",{duration:3e3,origin:\"top\",distance:\"50px\"});sr.reveal(\".form\",{duration:3e3,origin:\"top\",distance:\"150px\"});sr.reveal(\".footer\",{duration:3e3,origin:\"bottom\",distance:\"150px\"});"],["C:/Users/ismae/Downloads/pro/invitation-astro-master/src/components/Temporizer.astro?astro&type=script&index=0&lang.ts","const l=document.getElementById(\"days\"),c=document.getElementById(\"hours\"),m=document.getElementById(\"minutes\"),r=document.getElementById(\"seconds\");document.querySelector(\".final-sms\");const u=new Date(\"03 22, 2025 16:30:00\").getTime();setInterval(function(){const t=new Date().getTime();let e=u-t,n=Math.floor(e/(1e3*60*60*24)),o=Math.floor(e%(1e3*60*60*24)/(1e3*60*60)),s=Math.floor(e%(1e3*60*60)/(1e3*60)),d=Math.floor(e%(1e3*60)/1e3);l.innerHTML=n,c.innerHTML=o,m.innerHTML=s,r.innerHTML=(\"0\"+d).slice(-2)},1e3);"],["C:/Users/ismae/Downloads/pro/invitation-astro-master/src/components/Card.astro?astro&type=script&index=0&lang.ts","const a=document.getElementById(\"playButton\"),e=document.getElementById(\"miCancion\"),n=a?.querySelector(\"i\");a?.addEventListener(\"click\",()=>{e.paused?(e.play(),n?.classList.replace(\"fa-play\",\"fa-pause\"),a.innerHTML='<i class=\"fas fa-pause\"></i> Pausar canción'):(e.pause(),n?.classList.replace(\"fa-pause\",\"fa-play\"),a.innerHTML='<i class=\"fas fa-play\"></i> Reproducir canción')});"]],"assets":["/_astro/index.DEO-WhfD.css","/anillo.png","/anillo2.png","/asistencia.png","/A_Thousand_Years.mp3","/carta.jpg","/copas.png","/DevOps (1).png","/DevOps.png","/flecha.webp","/iglesia.png","/main_photo.webp","/photo1.webp","/photo2.webp","/photo3.webp","/photo4.webp","/photo5.webp","/photo6.webp","/photo7.webp","/photo8.webp","/play.png","/sobre.png","/terno.png","/test.webp","/ubicacion.png","/vestido.png","/fonts/Oneday.woff2"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"vZomX0G8mhz0aK3xI1gYQkhfiJEGE3CuzWBFAs1LlmQ="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
