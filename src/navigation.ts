import { getPermalink } from "./utils/permalinks";
import { getRelativeLocaleUrl } from "astro:i18n";
import { useTranslations } from "./i18n/utils"; // Importar la función de traducción
import { languageList } from "./i18n/ui"; // Importar lista de idiomas

// Obtener el idioma actual (esto depende de cómo lo manejes en Astro)
const currentLang = "es"; // Este valor debería ser dinámico
const translateLabels = useTranslations(currentLang as keyof typeof languageList);

export function getLocalizedPermalink(path, lang = "en") {
  return getRelativeLocaleUrl(lang, getPermalink(path));
}

export const headerData = {
  links: [
    {
      text: translateLabels("expeditions"),
      href: getLocalizedPermalink("/homes/expediciones"),
      links: [
        { text: translateLabels("expeditions"), href: getLocalizedPermalink("/homes/expediciones") },
        { text: translateLabels("aconcagua_normal_route"), href: getLocalizedPermalink("/homes/saas") },
        { text: translateLabels("aconcagua_360"), href: getLocalizedPermalink("/homes/saas") },
        { text: translateLabels("aconcagua_polish_glacier"), href: getLocalizedPermalink("/homes/saas") },
      ],
    },
    {
      text: translateLabels("trekkings"),
      href: getLocalizedPermalink("/homes/trekkings"),
      links: [
        { text: translateLabels("aconcagua_trek_francia"), href: getLocalizedPermalink("/homes/saas") },
        { text: translateLabels("aconcagua_trek_mulas"), href: getLocalizedPermalink("/homes/saas") },
        { text: translateLabels("aconcagua_trek_lagrimas"), href: getLocalizedPermalink("/homes/saas") },
        { text: translateLabels("aconcagua_trek_others"), href: getLocalizedPermalink("/homes/saas") },

      ],
    },
    {
      text: translateLabels("services"),
      href: getLocalizedPermalink("/homes/servicios"),
      links: [
        { text: translateLabels("full_assistance_service"), href: getLocalizedPermalink("/homes/saas") },
        { text: translateLabels("aconcagua_logistic_packages"), href: getLocalizedPermalink("/homes/saas") },
        { text: translateLabels("base_camp_service"), href: getLocalizedPermalink("/homes/saas") },
        { text: translateLabels("porters"), href: getLocalizedPermalink("/homes/saas") },
        { text: translateLabels("mules_for_cargo_transport"), href: getLocalizedPermalink("/homes/saas") },
      ],
    },
    {
      text: translateLabels("about_us"),
      href: getLocalizedPermalink("/homes/nosotros"),
      links: [
        { text: translateLabels("local_company"), href: getLocalizedPermalink("/homes/saas") },
        { text: translateLabels("our_staff"), href: getLocalizedPermalink("/homes/saas") },
        { text: translateLabels("history"), href: getLocalizedPermalink("/homes/saas") },
        { text: translateLabels("reasons_to_choose_us"), href: getLocalizedPermalink("/homes/saas") },
      ],
    },
    {
      text: translateLabels("aconcagua"),
      href: getLocalizedPermalink("/homes/aconcagua"),
      links: [
        { text: translateLabels("about_aconcagua"), href: getLocalizedPermalink("/homes/saas") },
        { text: translateLabels("seven_summits"), href: getLocalizedPermalink("/homes/saas") },
        { text: translateLabels("location"), href: getLocalizedPermalink("/homes/saas") },
        { text: translateLabels("weather"), href: getLocalizedPermalink("/homes/saas") },
        { text: translateLabels("wildlife"), href: getLocalizedPermalink("/homes/saas") },
      ],
    },

  ],
};

export const footerData = {
  links: [
    {
      title: translateLabels("help"),
      links: [
        { text: translateLabels("contact_us"), href: getLocalizedPermalink("/contact") },
        { text: translateLabels("aconcagua"), href: getLocalizedPermalink("/homes/aconcagua") },
        { text: translateLabels("privacy_policy") },
        { text: translateLabels("terms_conditions") },
      ],
    },
    {
      title: translateLabels("social_media"),
      links: [
        { text: "Instagram", href: "https://www.instagram.com/aconcaguaparedsur" },
        { text: "Facebook", href: "https://www.facebook.com/aconcaguaparedsur" },
        { text: "Whatsapp", href: "https://api.whatsapp.com/send?phone=%2B542612506186" },
      ],
    },
    {
      title: translateLabels("about"),
      links: [{ text: "paredsur.aconcagua@gmail.com" }],
    },
  ],
};