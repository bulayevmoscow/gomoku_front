import cn from 'classnames'
import s from './Header.module.scss'
import { FC } from 'react'
import logoutIcon from '@library/icons/logout.svg'

export const Header: FC = () => {
  return (
    <div className={cn(s.Header)}>
      <div className={cn(s.Logo)}>Gomoku</div>
      <div className={cn(s.UserBlock)}>
        <span>User123123123</span>
        <img className={cn(s.LogoutIcon)} src={logoutIcon} alt="" />
      </div>
    </div>
  )
}
