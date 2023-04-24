import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import { presetForms } from '@julr/unocss-preset-forms'
import { colors } from 'unocss/preset-mini'

export default defineConfig({
  theme: {
    colors: {
      primary: colors.indigo,
      secondary: colors.teal,
      accent: colors.pink,
      success: colors.green,
      info: colors.blue,
      warning: colors.yellow,
      error: colors.red,
    },
  },
  shortcuts: [
    ['f-c-c', 'flex items-center justify-center'],
    ['wh-full', 'w-full h-full'],
    ['btn', `px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer 
    hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50`],
  ],
  presets: [
    presetUno(),
    presetForms(),
    presetIcons({
      warn: true,
      extraProperties: {
        // cursor: 'pointer',
        // display: 'inline-block',
      },
    }),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: 'Inter',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
