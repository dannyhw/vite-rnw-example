import react from '@vitejs/plugin-react';
import { Plugin, defineConfig } from 'vite';

export function reactNativeWeb(options: { babelPlugins: any[]; babelPresets: any[] }): Plugin {
  const plugin: Plugin = {
    name: 'vite:react-native-web',
    enforce: 'pre',
    config(_userConfig, env) {
      return {
        plugins: [
          react({
            jsxRuntime: 'automatic',
            jsxImportSource: 'nativewind',
            babel: {
              plugins: options.babelPlugins,
              presets: options.babelPresets,
            },
          }),
        ],
        define: {
          // reanimated support
          'global.__x': {},
          _frameTimestamp: undefined,
          _WORKLET: false,
          __DEV__: `${env.mode === 'development'}`,
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || env.mode),
        },
        optimizeDeps: {
          include: [/* 'react-native-reanimated',  */ 'nativewind', 'react-native-css-interop'],
          esbuildOptions: {
            jsx: 'transform',
            resolveExtensions: [
              '.web.js',
              '.web.ts',
              '.web.tsx',
              '.js',
              '.jsx',
              '.json',
              '.ts',
              '.tsx',
              '.mjs',
            ],
            loader: {
              '.js': 'jsx',
            },
          },
        },
        resolve: {
          extensions: [
            '.web.js',
            '.web.ts',
            '.web.tsx',
            '.js',
            '.jsx',
            '.json',
            '.ts',
            '.tsx',
            '.mjs',
          ],
          alias: {
            'react-native': 'react-native-web',
          },
        },
      };
    },
  };

  return plugin;
}

export default defineConfig({
  plugins: [
    reactNativeWeb({
      babelPlugins: [],
      babelPresets: [],
    }),
  ],
});
