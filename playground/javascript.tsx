/* eslint-disable */
// @ts-nocheck
import { ExportClass, exportConst } from './javascript.js'

export { exportConst }
export default ExportClass

const number = 1 + 2 * 3 / 4 % 5
const string = 'hello' + ", world" + `${number}`
const boolean = true || false && true ?? false
const array: number[] = [1, 2, 3]
const object: Record<string, any> = {
  aaa: 1,
  bbb: 2,
  arr: Array,
  num: Number,
  str: String,
  fn: () => { },
  [`${string}`]: `string`,
  'string': 'only a string',
}
const symbol = Symbol('symbol')
const nullable = undefined || null
const regexp = /^(?:13\d|14[5|7]|15[0-3|5-9]|17[0|135-8]|18\d|166|198|199)\d{8}$/gim

const bit = 0 | 1 & 2 ^ 3 << 4 >> 5 >>> 6
const logic = 1 === 2 !== 3 ? 111 : 222

(() => {
  while (Math.random() > 0.5) { }

  for (let i = 0; i < 10; i++) { }

  array.forEach(console.log)

  try {
    const instance = new ExportClass()
    delete instance.testMethod
    console.log(typeof instance.testMethod)

  } catch (error) {
    console.log(error)
  }

})();

function Button({ onClick }: { onClick: () => void }): JSX.Element {
  return <button onClick={ onClick }>Click me!</button>
}

export function Component<Generics>(): Generics {
  const handleClick = (ev: MouseEvent) => {
    console.log(ev, exportConst.aaa)
  }

  return (
    <div>
      <h1 title="title" className={ 'text-lg' }>
        <span> Click the button to see some confetti! </span>
      </h1>

      <Button onClick={ handleClick } />
    </div>
  )
}

export class Demo extends React.Component {
  constructor() {
    super()
  }

  render() {
    return <div>Hello World</div>;
  }
}

namespace Namespace {
  export const a = 1

  export function NamespaceFunction() {
    return a
  }
}

Namespace.NamespaceFunction()

type TType = keyof typeof exportClass

interface IInterface {
  aaa: string,
  bbb: boolean,
  ccc: () => void
  ddd: Promise<void>
  eee: Record<string, unknown>
}

enum Enum {
  aaa = 1,
  bbb = 2,
  ccc = 3
}

const EnumValue: keyof Enum = Enum.aaa
