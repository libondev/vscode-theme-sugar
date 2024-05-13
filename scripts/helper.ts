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

    Object.entries(colors).forEach(([colorName, colorValues]) => {
      if (colorName === 'black')
        darkColors.white = colorValues

      else if (colorName === 'white')
        darkColors.black = colorValues

      else
        darkColors[colorName] = [...toArray(colorValues)].reverse()
    })
    return darkColors
  }

  return colors
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
