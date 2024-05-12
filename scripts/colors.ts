export const colors = {
  black: '#121212',
  white: '#f5f5f5',
  red: ['#FFECE8', '#F8C5BD', '#F19E94', '#EA766D', '#E34E49', '#DC2626', '#B8181D', '#940D16', '#700510', '#4D000A'],
  orange: ['#FFF4E8', '#FBD9B9', '#F7BC8C', '#F29D60', '#EE7C35', '#EA580C', '#C34307', '#9B2F04', '#741E01', '#4D1100'],
  yellow: ['#FFFCE8', '#F4E8B3', '#EAD382', '#DFBC54', '#D5A42A', '#CA8A04', '#AB7003', '#8B5601', '#6C3F01', '#4D2A00'],
  green: ['#E8FFF4', '#ACEACE', '#77D5AE', '#4AC093', '#24AB7C', '#059669', '#03845F', '#027155', '#015F4A', '#004D3E'],
  cyan: ['#E8FEFF', '#B1EBF0', '#7ED6E0', '#52C0D1', '#2AA8C1', '#0891B2', '#057699', '#035E7F', '#014866', '#00334D'],
  blue: ['#E8F3FF', '#BFDAFB', '#96BFF7', '#6FA2F3', '#4A83EF', '#2563EB', '#1748C3', '#0C309C', '#051D74', '#000E4D'],
  purple: ['#F8E8FF', '#E7C2FB', '#D49CF7', '#BF78F2', '#A955EE', '#9333EA', '#6F20C3', '#4F119B', '#340674', '#1D004D'],
  pink: ['#FFE8F0', '#FBC6DA', '#F7A5C6', '#F485B5', '#F066A6', '#EC4899', '#C42D7E', '#9C1863', '#740949', '#4D0030'],
  gray: ['#f7f8fa', '#f2f3f5', '#e5e6eb', '#c9cdd4', '#a9aeb8', '#86909c', '#6b7785', '#4e5969', '#272e3b', '#1d2129'],
  magenta: ['#FFE8E9', '#F9BCC1', '#F3919D', '#ED697C', '#E74260', '#E11D48', '#BC123D', '#970A32', '#720426', '#4D001B'],
}

// [dark, light]
export const themeTokens = {
  primary: [colors.green[5], colors.green[6]],

  foreground: ['#dbd7caee', '#393a34'],
  activeForeground: ['#bfbaaa', '#4e4f47'],
  secondaryForeground: ['#dedcd590', '#393a3490'],

  ignored: ['#dedcd550', '#393a3450'],
  faded: ['#dedcd510', '#393a3410'],
  border: ['#242424', '#e8e8e8'],

  background: ['#151515', '#f5f5f5'],
  activeBackground: ['#181818', '#f7f7f7'],
  selectionBackground: ['#eeeeee18', '#22222218'],
  selectionBackgroundActive: ['#eeeeee18', '#22222218'],
  selectionBackgroundInActive: ['#eeeeee10', '#22222210'],

  comment: ['#777', '#aaa'],
  punctuation: ['#444', '#ccc'],
  string: [colors.red[2], colors.red[2]],
  type: [colors.cyan[3], colors.cyan[3]],
  interface: [colors.cyan[3], colors.cyan[3]],
  namespace: [colors.cyan[3], colors.cyan[3]],
  variable: [colors.yellow[3], colors.yellow[4]],
  keyword: [colors.magenta[3], colors.magenta[4]],
  number: [colors.cyan[3], colors.cyan[4]],
  boolean: [colors.cyan[4], colors.cyan[5]],
  operator: [colors.magenta[3], colors.magenta[4]],
  function: [colors.green[3], colors.green[4]],
  constant: [colors.orange[3], colors.orange[3]],
  class: [colors.blue[3], colors.blue[3]],
  builtin: [colors.magenta[3], colors.magenta[4]],
  property: [colors.yellow[3], colors.yellow[4]],
  regex: [colors.pink[4], colors.pink[4]],
  primitive: [colors.magenta[3], colors.magenta[4]],
  // decorator: [colors.magenta[2], colors.magenta[2]],

  // colors
  green: [colors.green[3], colors.green[6]],
  cyan: [colors.cyan[3], colors.cyan[6]],
  blue: [colors.blue[3], colors.blue[6]],
  red: [colors.cyan[3], colors.cyan[6]],
  orange: [colors.cyan[3], colors.cyan[6]],
  yellow: [colors.cyan[3], colors.cyan[6]],
  magenta: [colors.magenta[3], colors.magenta[6]],
} satisfies Record<string, [string, string] | string>
