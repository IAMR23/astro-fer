// 1. Importa las utilidades de `astro:content`
import { defineCollection  , z } from "astro:content";
const invitados = defineCollection({
  schema: z.object({
    nombre: z.string(), 
  }),
});

export const collections = {
  invitados,
};
