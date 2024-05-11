// @ts-nocheck
import React, { type MouseEvent } from 'https://esm.sh/react@18.2.0'
import { exportConst } from './javascript.js'

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

namespace Namespace {
  export const a = 1

  export function NamespaceFunction() {
    return a
  }
}

Namespace.NamespaceFunction()

type TType = 1

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
