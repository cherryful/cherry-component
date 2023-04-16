// vite.config.ts
import { resolve } from "path";
import { defineConfig, loadEnv } from "file:///home/han/workspace/vue3-unocss-component-starter/node_modules/vite/dist/node/index.js";
import Vue from "file:///home/han/workspace/vue3-unocss-component-starter/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Unocss from "file:///home/han/workspace/vue3-unocss-component-starter/node_modules/unocss/dist/vite.mjs";
import { visualizer } from "file:///home/han/workspace/vue3-unocss-component-starter/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
var __vite_injected_original_dirname = "/home/han/workspace/vue3-unocss-component-starter";
var vite_config_default = defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return {
    base: process.env.VITE_BASE_PUBLIC_PATH,
    resolve: {
      alias: {
        "@": resolve(__vite_injected_original_dirname, "src")
      }
    },
    plugins: [
      Vue(),
      // https://github.com/unocss/unocss
      Unocss(),
      // uno.config.ts
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true
      })
    ]
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9oYW4vd29ya3NwYWNlL3Z1ZTMtdW5vY3NzLWNvbXBvbmVudC1zdGFydGVyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9oYW4vd29ya3NwYWNlL3Z1ZTMtdW5vY3NzLWNvbXBvbmVudC1zdGFydGVyL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2hhbi93b3Jrc3BhY2UvdnVlMy11bm9jc3MtY29tcG9uZW50LXN0YXJ0ZXIvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgVnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBVbm9jc3MgZnJvbSAndW5vY3NzL3ZpdGUnXG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSAncm9sbHVwLXBsdWdpbi12aXN1YWxpemVyJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4ge1xuICBwcm9jZXNzLmVudiA9IHsgLi4ucHJvY2Vzcy5lbnYsIC4uLmxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSkgfVxuXG4gIHJldHVybiB7XG4gICAgYmFzZTogcHJvY2Vzcy5lbnYuVklURV9CQVNFX1BVQkxJQ19QQVRILFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgICdAJzogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICBWdWUoKSxcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS91bm9jc3MvdW5vY3NzXG4gICAgICBVbm9jc3MoKSwgLy8gdW5vLmNvbmZpZy50c1xuICAgICAgdmlzdWFsaXplcih7XG4gICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgIGd6aXBTaXplOiB0cnVlLFxuICAgICAgICBicm90bGlTaXplOiB0cnVlLFxuICAgICAgfSksXG4gICAgXSxcblxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxVSxTQUFTLGVBQWU7QUFDN1YsU0FBUyxjQUFjLGVBQWU7QUFDdEMsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixTQUFTLGtCQUFrQjtBQUozQixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUN4QyxVQUFRLE1BQU0sRUFBRSxHQUFHLFFBQVEsS0FBSyxHQUFHLFFBQVEsTUFBTSxRQUFRLElBQUksQ0FBQyxFQUFFO0FBRWhFLFNBQU87QUFBQSxJQUNMLE1BQU0sUUFBUSxJQUFJO0FBQUEsSUFDbEIsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxNQUMvQjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLElBQUk7QUFBQTtBQUFBLE1BRUosT0FBTztBQUFBO0FBQUEsTUFDUCxXQUFXO0FBQUEsUUFDVCxNQUFNO0FBQUEsUUFDTixVQUFVO0FBQUEsUUFDVixZQUFZO0FBQUEsTUFDZCxDQUFDO0FBQUEsSUFDSDtBQUFBLEVBRUY7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
