import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://parispianist196.github.io/eeg-stuff/",
    title: "EEG with Abi",
    description: "A dev log for Abi to discuss her EEG project.",
    author: "Abigail Lovelace",
    profile: "https://abigaillovelace.com",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "America/New_York",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/ParisPianist196/eeg-stuff",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/ParisPianist196" },
    { name: "linkedin", url: "https://www.linkedin.com/in/abigail-lovelace/" },
    { name: "mail",     url: "mailto:abi@abigaillovelace.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});