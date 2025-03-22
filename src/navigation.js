import { getPermalink } from "./utils/permalinks";
import { getRelativeLocaleUrl } from "astro:i18n";

// Función para obtener enlaces traducidos correctamente
export function getLocalizedPermalink(path, lang = "es") {
  return getRelativeLocaleUrl(lang, getPermalink(path));
}

export const headerData = {
  links: [
    {
      text: "Expediciones",
      href: getLocalizedPermalink("/homes/expediciones"),
      links: [
        { text: "Expediciones", href: getLocalizedPermalink("/homes/expediciones") },
        { text: "Aconcagua Ruta Normal", href: getLocalizedPermalink("/homes/saas") },
        { text: "Aconcagua Ruta Normal Extendida", href: getLocalizedPermalink("/homes/saas") },
        { text: "Aconcagua Travesía 360", href: getLocalizedPermalink("/homes/saas") },
        { text: "Aconcagua Glaciar de los Polacos", href: getLocalizedPermalink("/homes/saas") },
      ],
    },
    {
      text: "Trekkings",
      href: getLocalizedPermalink("/homes/trekkings"),
      links: [
        { text: "Aconcagua Trekking Plaza Francia", href: getLocalizedPermalink("/homes/saas") },
        { text: "Aconcagua Trekking Largo - Plaza de Mulas", href: getLocalizedPermalink("/homes/saas") },
        { text: "Aconcagua Trekking Valle de Lágrimas - Avión de los Uruguayos", href: getLocalizedPermalink("/homes/saas") },
      ],
    },
    {
      text: "Servicios",
      href: getLocalizedPermalink("/homes/servicios"),
      links: [
        { text: "Servicio Completo de Asistencia", href: getLocalizedPermalink("/homes/saas") },
        { text: "Paquetes Logísticos en Aconcagua", href: getLocalizedPermalink("/homes/saas") },
        { text: "Servicio en Campamento Base", href: getLocalizedPermalink("/homes/saas") },
        { text: "Porteadores", href: getLocalizedPermalink("/homes/saas") },
        { text: "Mulas para Transporte de Carga", href: getLocalizedPermalink("/homes/saas") },
      ],
    },
    {
      text: "Nosotros",
      href: getLocalizedPermalink("/homes/nosotros"),
      links: [
        { text: "Empresa Local", href: getLocalizedPermalink("/homes/saas") },
        { text: "Nuestro Staff", href: getLocalizedPermalink("/homes/saas") },
        { text: "Guías Profesionales", href: getLocalizedPermalink("/homes/saas") },
        { text: "Razones para Elegir Aconcagua Pared Sur", href: getLocalizedPermalink("/homes/saas") },
      ],
    },
    {
      text: "Aconcagua",
      href: getLocalizedPermalink("/homes/aconcagua"),
      links: [
        { text: "Sobre el Aconcagua", href: getLocalizedPermalink("/homes/saas") },
        { text: "Las 7 Cumbres", href: getLocalizedPermalink("/homes/saas") },
        { text: "Ubicación", href: getLocalizedPermalink("/homes/saas") },
        { text: "Clima", href: getLocalizedPermalink("/homes/saas") },
        { text: "Vida Silvestre", href: getLocalizedPermalink("/homes/saas") },
      ],
    },
  ],
  socialLinks: [{ ariaLabel: "Translate", icon: "tabler:world" }],
};

export const footerData = {
  links: [
    {
      title: "Ayuda",
      links: [
        { text: "Contáctenos", href: getLocalizedPermalink("/contact") },
        { text: "Aconcagua", href: getLocalizedPermalink("/homes/aconcagua") },
        { text: "Política de privacidad" },
        { text: "Términos y condiciones" },
      ],
    },
    {
      title: "Redes Sociales",
      links: [
        { text: "Instagram", href: "https://www.instagram.com/aconcaguaparedsur" },
        { text: "Facebook", href: "https://www.facebook.com/aconcaguaparedsur" },
        { text: "Whatsapp", href: "https://api.whatsapp.com/send?phone=%2B542612506186" },
      ],
    },
    {
      title: "Acerca de",
      links: [{ text: "paredsur.aconcagua@gmail.com" }],
    },
  ],
};
