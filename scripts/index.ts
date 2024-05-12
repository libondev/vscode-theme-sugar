import fs from 'fs-extra'
import getTheme from './theme'

console.log('starting')

fs.mkdir('./themes', { recursive: true })
  .then(() => Promise.all([
    fs.writeJSON(
      './themes/sugar-light.json',
      getTheme({
        color: 'light',
        name: 'Sugar Light',
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './themes/sugar-dark.json',
      getTheme({
        color: 'dark',
        name: 'Sugar Dark',
      }),
      { spaces: 2 },
    ),
    // fs.writeJSON(
    //   './themes/sugar-dimmed.json',
    //   getTheme({
    //     color: 'dark',
    //     name: 'Sugar Dimmed',
    //     dimmed: true,
    //   }),
    //   { spaces: 2 },
    // ),
  ]))

console.log('finished')
