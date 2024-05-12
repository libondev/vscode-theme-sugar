import { colors, themeTokens } from './colors'

// type ThemeStyle = 'light' | 'dark' | 'dimmed'
type ThemeStyle = 'light' | 'dark'

export interface GetThemeOptions {
  color: 'light' | 'dark'
  name: string
  soft?: boolean
  dimmed?: boolean
}

function toArray<T>(arr: T | T[]): T[] {
  if (Array.isArray(arr))
    return arr
  return [arr]
}

function getColors(style: ThemeStyle): typeof colors {
  if (style === 'dark') {
    /* The array of light to dark colors are reversed to auto-generate dark theme */
    const darkColors: any = {}

    Object.entries(colors).forEach(([name, val]) => {
      if (name === 'black')
        darkColors.white = val

      else if (name === 'white')
        darkColors.black = val

      else
        darkColors[name] = [...toArray(val)].reverse()
    })
    return darkColors
  }
  else {
    return colors
  }
}

export function createThemeHelpers({ color }: GetThemeOptions) {
  const pick = (options: Partial<Record<ThemeStyle, string>>) => options[color]

  const v = (key: keyof typeof themeTokens, op = '') => {
    let obj = themeTokens[key]

    if (typeof obj === 'string')
      obj = [obj, obj]

    // return pick({ light: obj[1] + op, dark: obj[0] + op, dimmed: obj[2] || obj[0] + op })
    return pick({ light: obj[1] + op, dark: obj[0] + op })
  }

  const colors = getColors(color)

  return {
    pick,
    colors,
    v,
  }
}
