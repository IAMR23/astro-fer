/* empty css                                 */
import { e as createComponent, r as renderTemplate, i as renderSlot, j as renderHead, g as addAttribute, h as createAstro, m as maybeRenderHead, k as renderScript, l as renderComponent } from '../chunks/astro/server_D6qeKUdT.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/anillo.png"><meta name="generator"', '><script src="https://unpkg.com/scrollreveal"><\/script><title>', "</title>", "</head> <body> ", " </body></html>"])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/ismae/Downloads/pro/invitation-astro-master/src/layouts/Layout.astro", undefined);

const $$Temporizer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="cont-temporizador" data-astro-cid-xcbaaecl> <div class="bloque" data-astro-cid-xcbaaecl> <p id="days" data-astro-cid-xcbaaecl>-</p> <h3 class="font-bold" data-astro-cid-xcbaaecl>Dias</h3> </div> <div class="bloque" data-astro-cid-xcbaaecl> <p id="hours" data-astro-cid-xcbaaecl>-</p> <h3 class="font-bold" data-astro-cid-xcbaaecl>Horas</h3> </div> <div class="bloque" data-astro-cid-xcbaaecl> <p id="minutes" data-astro-cid-xcbaaecl>-</p> <h3 class="font-bold" data-astro-cid-xcbaaecl>Minutos</h3> </div> <div class="bloque" data-astro-cid-xcbaaecl> <p id="seconds" data-astro-cid-xcbaaecl>-</p> <h3 class="font-bold" data-astro-cid-xcbaaecl>Segundos</h3> </div> </section> ${renderScript($$result, "C:/Users/ismae/Downloads/pro/invitation-astro-master/src/components/Temporizer.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/ismae/Downloads/pro/invitation-astro-master/src/components/Temporizer.astro", undefined);

const $$Card = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="container p-4 relative z-10" data-astro-cid-dohjnao5> <h3 class="dressCode text-center text-lg font-bold mb-4" data-astro-cid-dohjnao5>
SUBE EL VOLUMEN Y DALE CLICK PARA ESCUCHAR LA CANCIÓN
</h3> <div class="image-container flex justify-center" data-astro-cid-dohjnao5> <!-- Imagen para reproducir/pausar --> <img src="/flecha.webp" alt="Play Button" class="temporizer cursor-pointer w-16 h-16 icono-blanco" data-astro-cid-dohjnao5> <img id="playButton" src="../play.png" alt="Play Button" class="cursor-pointer w-16 h-16" data-astro-cid-dohjnao5> <!-- Elemento de audio (oculto) --> <audio id="miCancion" data-astro-cid-dohjnao5> <source src="/A_Thousand_Years.mp3" type="audio/mp4" data-astro-cid-dohjnao5>
Tu navegador no soporta el elemento de audio.
</audio> </div> </div>  ${renderScript($$result, "C:/Users/ismae/Downloads/pro/invitation-astro-master/src/components/Card.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/ismae/Downloads/pro/invitation-astro-master/src/components/Card.astro", undefined);

const $$Astro = createAstro();
const $$CustomButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CustomButton;
  const { name1, name2, imagen, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button class="button flex items-center" data-astro-cid-55xpxy2s> <img${addAttribute(imagen, "src")}${addAttribute(imagen, "alt")} width="32" height="32" class="icono-blanco" data-astro-cid-55xpxy2s> <a${addAttribute(link, "href")} target="_blank" data-astro-cid-55xpxy2s> <div class="flex flex-col items-center justify-center font-bold" data-astro-cid-55xpxy2s> <h3 data-astro-cid-55xpxy2s>${name1}</h3> <h3 data-astro-cid-55xpxy2s>${name2}</h3> </div> </a> </button> `;
}, "C:/Users/ismae/Downloads/pro/invitation-astro-master/src/components/CustomButton.astro", undefined);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Boda" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Card", $$Card, {})} ${maybeRenderHead()}<img src="../carta.jpg" alt="Fondo" class="absolute inset-x-0 w-full h-full object-cover z-0"> <div class="relative flex-col justify-center text-center"> <div class="py-10 items-center"> <h3 class="uppercase py-2 font-bold">Te invitamos</h3> <h3 class="uppercase pe-2 font-bold">cordialmente a</h3> </div> <div class="gallery flex-col py-8"> <h1 class="py-2 uppercase text-5xl flex-initial">Nuestra</h1> <h1 class="py-2 uppercase text-5xl flex-col-reverse">Boda</h1> </div> <div class="gallery form relative text-center"> <!-- Texto 1 --> <h2 class="py-4 text-5xl text-gray-600 relative z-10">Lizbeth Zapata</h2> <!-- Símbolo & (atrás) --> <h2 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl text-mi-coffe z-0">
&
</h2> <!-- Texto 2 --> <h2 class="py-4 text-5xl text-gray-600 relative z-10">
Fernando Villareal
</h2> </div> </div>  <div class="footer relative flex justify-between items-center w-full px-4 py-10"> <!-- Día (Sabado) --> <h3 class="flex-1 text-center">Sábado</h3> <!-- Línea vertical --> <div class="w-[2px] bg-black h-[60px] mx-4"></div> <!-- Fecha (FEB 5 2025) --> <div class="flex-1 flex flex-col justify-center items-center text-center"> <h3>MARZO</h3> <h3 class="text-mi-coffe text-5xl">22</h3> <h3>2025</h3> </div> <!-- Línea vertical --> <div class="w-[2px] bg-black h-[60px] mx-4"></div> <!-- Hora (6:00 pm) --> <h3 class="flex-1 text-center">04:30pm</h3> </div> <div class="dressCode relative flex flex-col justify-center items-center text-center pt-12"> <img src="./copas.png" alt="copas" width="32px" height="32px" class="pt-4"> <h2 class="text-4xl">Recepción</h2> </div> <div class="dressCode flex flex-col items-center justify-center py-4 gap-4"> ${renderComponent($$result2, "CustomButton", $$CustomButton, { "name1": "Ubicaci\xF3n ", "name2": "Recepcion ", "imagen": "/ubicacion.png", "link": "https://www.google.com/maps/place/Quinta+El+Guabo/@-0.1814147,-78.3959473,17z/data=!3m1!4b1!4m6!3m5!1s0x91d5919cc2f08ac5:0xd042fa4002fa8bc3!8m2!3d-0.1814147!4d-78.3959473!16s%2Fg%2F11b724qsp7?entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoASAFQAw%3D%3D" })} ${renderComponent($$result2, "CustomButton", $$CustomButton, { "name1": "Confirmar", "name2": "Asistencia", "imagen": "/asistencia.png", "link": "https://moonlit-begonia-f9fbcd.netlify.app/" })} </div> <div class="dressCode py-10"> <div class="flex justify-center items-center"> <img src="/vestido.png" alt="" srcset="" width="32" height="32"> <img src="/terno.png" alt="" srcset="" width="32" height="32"> </div> <div class="flex flex-col justify-center items-center text-center"> <h2 class="text-4xl">Código de Vestimenta</h2> <h3 class="flex flex-col"> <span class="font-bold">Mujeres</span> Vestido (no blanco, no crema, no beige)
<span class="font-bold">Hombres</span> Traje Formal (no gris, no plomo)
</h3> </div> </div> <div class="gallery py-10"> <div class="flex flex-col justify-center items-center text-center"> <img src="/sobre.png" alt="" srcset="" width="32" height="32"> <h3>
Nuestro mejor regalo es que estes con nosotros en nuestro día, pero si
        quieres hacernos un obsequio ¡Lo puedes hacer!
</h3> </div> </div> <div class="flex flex-col items-center justify-center gap-3 text-center"> <h2 class="text-4xl">Faltan</h2> <div class="timer"> ${renderComponent($$result2, "Temporizer", $$Temporizer, {})} </div> <div class="cards"> <div class="flex justify-center items-center"> <img src="/anillo2.png" alt="anillo" width="32px" height="32px"> </div> </div> </div> ${renderScript($$result2, "C:/Users/ismae/Downloads/pro/invitation-astro-master/src/pages/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/ismae/Downloads/pro/invitation-astro-master/src/pages/index.astro", undefined);

const $$file = "C:/Users/ismae/Downloads/pro/invitation-astro-master/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
