import { FC, memo, Reducer, useReducer } from 'react'
import s from './GameField.module.scss'
import cn from 'classnames'
const View: FC<TGameField> = ({
  fieldParams = {
    x: 3,
    y: 3,
  },
}) => {
  const [field, fieldAction] = useReducer<Reducer<number[], any>>(
    (prevState: number[]) => {
      return prevState
    },
    [...Array(fieldParams.x * fieldParams.y)].map((value, index) => index)
  )

  console.log(field)
  return (
    <div className={cn(s.container)}>
      <div className={cn(s.battle_field)}>
        {field.map((value, index) => (
          <ul className={cn(s.cell)} key={index}>
            {value}
          </ul>
        ))}
      </div>
      <button>123</button>
    </div>
  )
}

type TGameField = {
  fieldParams?: { x: number; y: number }
}

export const GameField = memo(View)
