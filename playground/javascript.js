
export const exportConst = 'exportConst';

// single line comment
/*
  multi line comment
*/

console.log(1 + 2 - 3 * 4 / 5)

if (1 || 2 && 3) {

}

for (let i = 0; i < 10; i++) {
  console.log(i)
}

export class ExportClass {
  constructor() {
    console.log('ExportClass constructor', this);
  }

  testMethod() {

  }
}

export function exportFunction(...restParams) {
  console.log('exportFunction', ...restParams);
}

function blockFunction(...restParams) {
  console.log('localFunction', ...restParams);
}


if (true) {
  blockFunction('blockFunction')
} else {

}

const number = 123
const string = 'string'
const string2 = `${string}`
const boolean = false
const array = [1, 2, 3]
const object = {
  key: 'value',
  'single-quote': 'single quote string',
  "double-quote": "double quote string",
}
const regexp = /regexp/g

const symbol = Symbol('symbol')
const nullValue = null
const undefinedValue = undefined
const bigInt = 123n

const reg = /[123|23123]/

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
