
export const exportConst = 'exportConst';

// single line comment
/*
  multi line comment
*/

export class ExportClass {
  constructor() {
    console.log('ExportClass constructor', this, this.name.xxx.xxx);
  }

  testMethod() {

  }
}

export function exportFunction(...restParams) {
  console.log('exportFunction', ...restParams, restParams.length);
}

function blockFunction(...restParams) {
  console.log('localFunction', ...restParams);
}


if (true) {
  blockFunction('blockFunction')
} else {

}

console.log(1 + 2 - 3 * 4 / 5)

if (1 || 2 && 3) {

}

for (let i = 0; i < 10; i++) {
  console.log(i)
}

const number = 123
const string = 'string'
const string2 = `${string}`
const boolean = true | false
const array = [1, 2, 3]
const object = {
  key: 1,
  key2: true,
  key3: undefined,
  key4: null,
  key5: [1, 2, 3],
  'single-quote': 'single quote string',
  "double-quote": "double quote string",
}
const regexp = /regexp/g

const symbol = Symbol('symbol')
const nullValue = null
const undefinedValue = undefined
const bigInt = 123n

const reg = /[123|23123]/

if (/\b_blank\b/i.test('to')) return

console.log({
  number,
  string,
  string2,
  boolean,
  array,
  object,
  symbol,
  nullValue,
  undefinedValue,
  bigInt,
  regexp
})

array.forEach((item, index, list) => {
  console.log(item, index, list)
})
