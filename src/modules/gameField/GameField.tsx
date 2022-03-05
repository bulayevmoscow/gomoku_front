import React, { FC, memo } from 'react'
import s from './GameField.module.scss'
import cn from 'classnames'
import { useGameField } from './useGameField'

const getStyles = (data: number) => {
  switch (data % 4) {
    case 0: {
      return cn(s.cell, s.empty, s.player, s.twoEmpty)
    }

    case 1: {
      return cn(s.cell, s.empty, s.player, s.oneEmpty)
    }

    case 2: {
      return cn(s.cell, s.player, s.twoMark)
    }

    case 3: {
      return cn(s.cell, s.player, s.oneMark)
    }

    default:
      return cn(s.cell, s.empty)
  }
}

const View: FC<TGameField> = ({
  fieldParams = {
    x: 15,
    y: 15,
  },
}) => {
  const { field, fieldAction, battlefieldStyle } = useGameField({ x: fieldParams.x, y: fieldParams.y })
  return (
    <div className={cn(s.container)}>
      <div className={cn(s.battle_field)} style={battlefieldStyle}>
        {field.map((value, index) => (
          <ul className={getStyles(value)} key={index}>
            {value}
          </ul>
        ))}
      </div>
      <button>123</button>
    </div>
  )
}

export type TGameField = {
  fieldParams?: { x: number; y: number }
}

export const GameField = memo(View)
