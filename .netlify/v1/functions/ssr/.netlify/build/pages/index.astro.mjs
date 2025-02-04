/* empty css                                 */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, j as renderScript, g as addAttribute, h as createAstro, i as renderComponent } from '../chunks/astro/server_Dy72Gv6t.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_Q9zhXNUd.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Temporizer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="cont-temporizador" data-astro-cid-xcbaaecl> <div class="bloque" data-astro-cid-xcbaaecl> <p id="days" data-astro-cid-xcbaaecl>-</p> <h3 class="font-bold" data-astro-cid-xcbaaecl>Dias</h3> </div> <div class="bloque" data-astro-cid-xcbaaecl> <p id="hours" data-astro-cid-xcbaaecl>-</p> <h3 class="font-bold" data-astro-cid-xcbaaecl>Horas</h3> </div> <div class="bloque" data-astro-cid-xcbaaecl> <p id="minutes" data-astro-cid-xcbaaecl>-</p> <h3 class="font-bold" data-astro-cid-xcbaaecl>Minutos</h3> </div> <div class="bloque" data-astro-cid-xcbaaecl> <p id="seconds" data-astro-cid-xcbaaecl>-</p> <h3 class="font-bold" data-astro-cid-xcbaaecl>Segundos</h3> </div> </section> ${renderScript($$result, "C:/Users/ismae/Downloads/pro/invitation-astro-master/src/components/Temporizer.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/ismae/Downloads/pro/invitation-astro-master/src/components/Temporizer.astro", undefined);

const $$Card = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="container p-4 relative z-10 flex justify-center items-center flex-col" data-astro-cid-dohjnao5> <h3 class="inv-regular dressCode text-center font-bold text-6xl" data-astro-cid-dohjnao5>
Hola Vanessa
</h3> <h2 class="text-sm" data-astro-cid-dohjnao5>Presiona aquí y sube el volumen...</h2> </div> `;
}, "C:/Users/ismae/Downloads/pro/invitation-astro-master/src/components/Card.astro", undefined);

const $$Astro$1 = createAstro();
const $$CustomButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CustomButton;
  const { name1, name2, imagen, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button class="button flex items-center" data-astro-cid-55xpxy2s> <img${addAttribute(imagen, "src")}${addAttribute(imagen, "alt")} width="32" height="32" class="icono-blanco" data-astro-cid-55xpxy2s> <a${addAttribute(link, "href")} target="_blank" data-astro-cid-55xpxy2s> <div class="flex flex-col items-center justify-center font-bold" data-astro-cid-55xpxy2s> <h3 data-astro-cid-55xpxy2s>${name1}</h3> <h3 data-astro-cid-55xpxy2s>${name2}</h3> </div> </a> </button> `;
}, "C:/Users/ismae/Downloads/pro/invitation-astro-master/src/components/CustomButton.astro", undefined);

const $$Astro = createAstro();
const $$Pase = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pase;
  const { nombre, numPase } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col justify-center items-center text-center"> <h3 class="p-4 uppercase font-bold">Pase para ${numPase} personas</h3> <div class="bg-mi-coffe w-full p-3 text-white"> <h3>Este pase NO es transferible</h3> </div> </div>`;
}, "C:/Users/ismae/Downloads/pro/invitation-astro-master/src/components/Pase.astro", undefined);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Boda", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Card", $$Card, { "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<div class="container flex flex-col justify-center items-center text-center" data-astro-cid-j7pv25f6> <div class="items-center py-5 romanesco-regular" data-astro-cid-j7pv25f6> <h3 class="uppercase text-xs" data-astro-cid-j7pv25f6>
Los momentos más felices de la vida son aquellos que compartimos con las
        personas que amamos.
</h3> <h3 class="uppercase text-xs" data-astro-cid-j7pv25f6>
Nos encantaría que nos acompañes en el inicio de esta nueva aventura
        juntos.
</h3> </div> <div class="gallery py-2" data-astro-cid-j7pv25f6> <h1 class="boda uppercase text-5xl" data-astro-cid-j7pv25f6>Nuestra</h1> <h1 class="boda uppercase text-5xl" data-astro-cid-j7pv25f6>Boda</h1> <h1 class="boda uppercase text-5xl" data-astro-cid-j7pv25f6>Civil</h1> </div> <div class="gallery form text-center py-5 relative" data-astro-cid-j7pv25f6> <!-- Texto 1 --> <h2 class="py-4 text-5xl text-gray-600 z-10" data-astro-cid-j7pv25f6>Lizbeth</h2> <!-- Símbolo & (atrás) --> <h2 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl text-mi-coffe z-0" data-astro-cid-j7pv25f6>
&
</h2> <!-- Texto 2 --> <h2 class="py-4 text-5xl text-gray-600 z-10" data-astro-cid-j7pv25f6>Fernando</h2> </div> </div>  <div class="footer relative flex justify-between items-center w-full px-4 py-10" data-astro-cid-j7pv25f6> <!-- Día (Sabado) --> <h3 class="flex-1 text-center" data-astro-cid-j7pv25f6>Sábado</h3> <!-- Línea vertical --> <div class="w-[2px] bg-black h-[60px] mx-4" data-astro-cid-j7pv25f6></div> <!-- Fecha (FEB 5 2025) --> <div class="flex-1 flex flex-col justify-center items-center text-center" data-astro-cid-j7pv25f6> <h3 class="text-xl font-bold" data-astro-cid-j7pv25f6>MARZO</h3> <h3 class="text-mi-coffe text-5xl font-bold" data-astro-cid-j7pv25f6>22</h3> <h3 class="text-xl font-bold" data-astro-cid-j7pv25f6>2025</h3> </div> <!-- Línea vertical --> <div class="w-[2px] bg-black h-[60px] mx-4" data-astro-cid-j7pv25f6></div> <!-- Hora (6:00 pm) --> <h3 class="flex-1 text-center" data-astro-cid-j7pv25f6>16:30</h3> </div> <div class="dressCode relative flex flex-col justify-center items-center text-center pt-12" data-astro-cid-j7pv25f6> <img src="./copas.png" alt="copas" width="32px" height="32px" data-astro-cid-j7pv25f6> <h2 class="text-4xl" data-astro-cid-j7pv25f6>Recepción</h2> </div> <div class="dressCode flex flex-col items-center justify-center py-4 gap-4" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "CustomButton", $$CustomButton, { "name1": "Ubicaci\xF3n ", "name2": "Recepcion ", "imagen": "/ubicacion.png", "link": "https://www.google.com/maps/place/Quinta+El+Guabo/@-0.1814147,-78.3959473,17z/data=!3m1!4b1!4m6!3m5!1s0x91d5919cc2f08ac5:0xd042fa4002fa8bc3!8m2!3d-0.1814147!4d-78.3959473!16s%2Fg%2F11b724qsp7?entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoASAFQAw%3D%3D", "data-astro-cid-j7pv25f6": true })} <div class="flex flex-col text-center justify-center items-center" data-astro-cid-j7pv25f6> <h3 class="text-center" data-astro-cid-j7pv25f6>
Para nosotros es muy importante contar con tu presencia.
</h3> <h3 data-astro-cid-j7pv25f6>Por favor confírmanos hasta el  28 de Febréro</h3> </div> ${renderComponent($$result2, "CustomButton", $$CustomButton, { "name1": "Confirmar", "name2": "Asistencia", "imagen": "/asistencia.png", "link": "https://moonlit-begonia-f9fbcd.netlify.app/", "data-astro-cid-j7pv25f6": true })} </div> <div class="dressCode py-10" data-astro-cid-j7pv25f6> <div class="flex justify-center items-center" data-astro-cid-j7pv25f6> <img src="/vestido.png" alt="" srcset="" width="32" height="32" data-astro-cid-j7pv25f6> <img src="/terno.png" alt="" srcset="" width="32" height="32" data-astro-cid-j7pv25f6> </div> <div class="flex flex-col justify-center items-center text-center" data-astro-cid-j7pv25f6> <h2 class="text-4xl" data-astro-cid-j7pv25f6>Código de Vestimenta</h2> <h3 class="flex flex-col" data-astro-cid-j7pv25f6> <span class="font-bold text-mi-coffe" data-astro-cid-j7pv25f6>Mujeres</span> Vestido (no blanco,
        no crema, no beige, no rojo)
<span class="font-bold text-mi-coffe" data-astro-cid-j7pv25f6>Hombres</span> Traje Formal (no gris,
        no plomo)
</h3> </div> </div> <div class="gallery py-10" data-astro-cid-j7pv25f6> <div class="flex flex-col justify-center items-center text-center" data-astro-cid-j7pv25f6> <img src="/sobre2.png" alt="" srcset="" width="32" height="32" data-astro-cid-j7pv25f6> <h3 class="p-2" data-astro-cid-j7pv25f6>
Nuestro mejor regalo es que estes con nosotros en nuestro día, pero si
        quieres hacernos un obsequio ¡Lo puedes hacer en un sobre cerrado!
</h3> </div> </div> <div class="flex flex-col items-center justify-center text-center" data-astro-cid-j7pv25f6> <h2 class="text-4xl" data-astro-cid-j7pv25f6>Faltan</h2> <div class="timer py-5" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Temporizer", $$Temporizer, { "data-astro-cid-j7pv25f6": true })} </div> </div> ${renderComponent($$result2, "Pase", $$Pase, { "numPase": "3", "data-astro-cid-j7pv25f6": true })} <div class="image-container flex justify-center" style="display: none" data-astro-cid-j7pv25f6> <!-- Elemento de audio (oculto) --> <audio id="miCancion" data-astro-cid-j7pv25f6> <source src="/A_Thousand_Years.mp3" type="audio/mp3" data-astro-cid-j7pv25f6>
Tu navegador no soporta el elemento de audio.
</audio> </div> ${renderScript($$result2, "C:/Users/ismae/Downloads/pro/invitation-astro-master/src/pages/index.astro?astro&type=script&index=0&lang.ts")}${renderScript($$result2, "C:/Users/ismae/Downloads/pro/invitation-astro-master/src/pages/index.astro?astro&type=script&index=1&lang.ts")}  ` })}`;
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
