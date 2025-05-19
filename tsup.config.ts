import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/rounded/index.ts",
    "src/rounded/solid/index.ts",
    "src/rounded/stroke/index.ts",
    // "src/sharp/solid/index.ts",
    // "src/sharp/stroke/index.ts",
    // "src/standard/solid/index.ts",
    // "src/standard/stroke/index.ts",
  ],
  format: ["esm", "cjs"],
  dts: {
    entry: [
      "src/index.ts",
      "src/rounded/index.ts",
      "src/rounded/solid/index.ts",
      "src/rounded/stroke/index.ts",
      // "src/sharp/solid/index.ts",
      // "src/sharp/stroke/index.ts",
      // "src/standard/solid/index.ts",
      // "src/standard/stroke/index.ts",
    ],
    resolve: true,
  },
  treeshake: true,
  clean: true,
  bundle: true,
  esbuildOptions(options) {
    options.packages = "external";
  },
});
