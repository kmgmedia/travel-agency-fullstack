import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  ssr: {
    noExternal: [
      "@syncfusion/ej2-react",
      "@syncfusion/ej2-base",
      "@syncfusion/ej2-react-navigations",
    ],
  },
  build: {
    commonjsOptions: {
      include: [/@syncfusion/, /node_modules/],
    },
  },
  optimizeDeps: {
    include: ["@syncfusion/ej2-base", "@syncfusion/ej2-react-navigations"],
  },
});
