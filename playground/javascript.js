
export const exportConst = 'exportConst';

function decorators() { }

// single line comment
/*
  multi line comment
*/

if (1 || 2 && 3) {

}

export class ExportClass {
  constructor() {
    console.log('ExportClass constructor');
  }

  @decorators()
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

var varVariable = 'varVariable'
let letVariable = 'letVariable'
const number = 123
const string = 'string'
const string2 = `${string}`
const string3 = "123123"
const boolean = false
const array = [1, 2, 3]
const object = {
  key: 'value',
  'single-quote': 'single quote string',
  "double-quote": "double quote string",
}

const symbol = Symbol('symbol')
const nullValue = null
const undefinedValue = undefined
const bigInt = 123n

array.forEach((item, index, list) => {
  console.log(item, index, list)
})
