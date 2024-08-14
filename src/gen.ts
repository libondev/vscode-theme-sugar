import fs from 'node:fs'
import { getTemplate } from './template'
import { themeColors } from './variable'

async function rewriteColorTheme() {

  const files = [
    [
      'themes/dark.json',
      getTemplate({
        name: 'Sugar Dark',
        mode: 'dark',
        ...themeColors
      }),
      'utf8'
    ],
  ]

  files.forEach((file) => {
    fs.writeFileSync(...file as Parameters<typeof fs.writeFileSync>)
  })

}

rewriteColorTheme()
