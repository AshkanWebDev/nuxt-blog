// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "نمونه وبسایت بلاگ",
      htmlAttrs: {
        dir: "rtl",
        lang: "fa-IR",
      },
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, user-scalable=no",
        },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
        { name: "theme-color", content: "#0d244c" },
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        // { src: "https://awesome-lib.js" },
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        { rel: "icon", type: "image/webp", href: "/favicon.webp" },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://cdn.jsdelivr.net/gh/moalgholi/fonts@main/dist/reset.min.css",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://cdn.jsdelivr.net/gh/moalgholi/fonts@main/dist/FontAwesome/FontAwesome.min.css",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://cdn.jsdelivr.net/gh/moalgholi/fonts@main/dist/IRANYekan/IRANYekan.min.css",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://cdn.jsdelivr.net/gh/moalgholi/fonts@main/dist/Vazir/Vazir.min.css",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://cdn.jsdelivr.net/gh/moalgholi/fonts@main/dist/Shabnam/Shabnam.min.css",
        },
        // { rel: "manifest", href: "/manifest.json" },
      ],
      // please note that this is an area that is likely to change
      style: [
        // <style type="text/css">:root { color: red }</style>
        // { children: ":root { color: red }", type: "text/css" },
      ],
    },
  },
  css: ["@/assets/css/style.css"],
});
