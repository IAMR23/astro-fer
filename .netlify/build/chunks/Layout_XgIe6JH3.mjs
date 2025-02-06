import { e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as createAstro, k as renderSlot, l as renderHead } from './astro/server_Dy72Gv6t.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                        */
/* empty css                         */

const $$Astro$1 = createAstro();
const $$CustomButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CustomButton;
  const { name1, name2, imagen, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button class="button flex items-center" data-astro-cid-55xpxy2s> <img${addAttribute(imagen, "src")}${addAttribute(imagen, "alt")} width="32" height="32" class="icono-blanco" data-astro-cid-55xpxy2s> <a${addAttribute(link, "href")} target="_blank" data-astro-cid-55xpxy2s> <div class="flex flex-col items-center justify-center font-bold" data-astro-cid-55xpxy2s> <h3 data-astro-cid-55xpxy2s>${name1}</h3> <h3 data-astro-cid-55xpxy2s>${name2}</h3> </div> </a> </button> `;
}, "C:/Users/ismae/Downloads/pro/invitation-astro-master/src/components/CustomButton.astro", undefined);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/anillo.png"><meta name="generator"', '><script src="https://unpkg.com/scrollreveal"><\/script><title>', "</title>", "</head> <body> ", " </body></html>"])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/ismae/Downloads/pro/invitation-astro-master/src/layouts/Layout.astro", undefined);

export { $$CustomButton as $, $$Layout as a };
