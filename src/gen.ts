import fs from 'node:fs'
import { getTemplate } from './template'
import { darkThemeColors } from './variable'

async function rewriteColorTheme() {

  const files = [
    [
      'themes/dark.json',
      getTemplate({
        name: 'Sugar Dark',
        mode: 'dark',
        ...darkThemeColors
      }),
      'utf8'
    ],
  ]

  files.forEach((file) => {
    fs.writeFileSync(...file as Parameters<typeof fs.writeFileSync>)
  })

}

rewriteColorTheme()
