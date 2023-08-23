import type { StorybookConfig } from '@storybook/svelte-vite';
import { join, dirname, resolve } from 'path';
import { mergeConfig } from 'vite';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}

export default {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
    '@storybook/addon-svelte-csf',
    '@storybook/addon-styling',
  ],
  framework: {
    name: getAbsolutePath('@storybook/svelte-vite'),
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: (config) => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          kit: resolve(__dirname, '../src'),
        },
      },
    });
  },
} as StorybookConfig;
