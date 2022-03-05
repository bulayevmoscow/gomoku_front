import { MainTemplate } from '../../layout/MainTemplate'
import s from './Login.module.scss'
export const Login = () => {
  return (
    <MainTemplate>
      <div className={s.container}>
        <div className={s.wrapper}>
          <h1>Gomoku</h1>
          <input type="text" placeholder="Enter your nick" />
          <button>Play</button>
        </div>
      </div>
    </MainTemplate>
  )
}
