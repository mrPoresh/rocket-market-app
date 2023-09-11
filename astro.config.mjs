import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import analogjsangular from "@analogjs/astro-angular";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), analogjsangular()],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});