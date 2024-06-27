// @ts-nocheck
import React, { type MouseEvent } from 'https://esm.sh/react@18.2.0'
import { exportConst, ExportClass } from './javascript.js'

const exportClass = new ExportClass()
console.log(typeof exportClass)

delete exportClass.testMethod

1 in 1
[1, 2, 3] instanceof Array
'toString' in {}

const bool = true || false

const language = undefined && !null

const a = bool | 123 & 456 ^ 789 << 101112 >> 131415 >>> 161718

while (1) { }

for (let i = 0; i < 10; i++) { }

try { } catch (e) { }

function capitalize(str: string) {
  return str.charAt(0)['toUpperCase']() + str.slice(1)
}

export function Component<Generics>(): Generics {
  const handleClick = (ev: MouseEvent) => {
    console.log(ev, exportConst)
  }

  return (
    <div>
      <h1 className={ 'text-lg' }>
        <span> Click the button to see some confetti! </span>
      </h1>

      <button onClick={ handleClick }>Click me!</button>
    </div>
  )
}

class Test { }

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
  a: boolean,
  b: string,
  c: () => void
  d: Record<string, unknown>
}

enum EEnum {
  A = 1,
  B = 2,
  C = 3
}

const _symbol: symbol = Symbol('symbol')

const Type: TType = 1
const Interface: IInterface = {}
const Enum: keyof EEnum = EEnum.A

console.log({
  Type,
  Interface,
  Enum
})
