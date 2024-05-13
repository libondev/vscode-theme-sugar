// @ts-nocheck
import React, { type MouseEvent } from 'https://esm.sh/react@18.2.0'
import { exportConst, ExportClass } from './javascript.js'

const exportClass = new ExportClass()
console.log(typeof exportClass)

delete exportClass.testMethod

export function Component() {
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

export class Demo extends React.Component {
  componentDidMount() {
  }

  render() {
    return <div>Hello World</div>;
  }
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
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

const Type: TType = 1
const Interface: IInterface = {}
const Enum: EEnum = EEnum.A
