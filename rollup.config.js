import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "dist/esm/index.js",
  output: {
    dir: "dist/esm/",
    format: "esm",
  },
  plugins: [
    json({ compact: true }),
    nodeResolve({ resolveOnly: [/^@jbx-protocol\/.*$/] }),
  ],
};
