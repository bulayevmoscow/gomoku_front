import React, { Reducer, useEffect, useReducer } from 'react'

type TUseGameField = {
  x: number
  y: number
}
export const useGameField = ({ x, y }: TUseGameField) => {
  const [field, fieldAction] = useReducer<Reducer<number[], any>>(
    (prevState: number[]) => {
      return prevState.map(value => value + 1)
    },
    [...Array(x * y)].map((value, index) => index)
  )
  const battlefieldStyle: React.CSSProperties = {
    gridTemplate: `repeat(${x}, 1fr) / repeat(${y}, 1fr)`,
  }

  useEffect(() => {
    const interval = setInterval(() => {
      // @ts-ignore
      fieldAction()
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return {
    field,
    fieldAction,
    battlefieldStyle,
  }
}
