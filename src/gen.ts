import fs from 'node:fs'
import { getTemplate } from './template'
import { darkThemeColors, lightThemeColors } from './variable'

async function rewriteColorTheme() {

  const files = [
    [
      'themes/dark.json',
      getTemplate({
        mode: 'dark',
        ...darkThemeColors
      }),
      'utf8'
    ],
    [
      'themes/light.json',
      getTemplate({
        mode: 'light',
        ...lightThemeColors
      }),
      'utf8'
    ],
  ]

  files.forEach((file) => {
    fs.writeFileSync(...file as Parameters<typeof fs.writeFileSync>)
  })

}

rewriteColorTheme()
