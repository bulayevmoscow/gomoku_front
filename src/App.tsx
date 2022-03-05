import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GameField } from './modules/gameField/GameField'
import { Login } from './modules/pages/login/Login'
import { MainTemplate, MainTemplateBody, MainTemplateHeader } from './modules/layout/MainTemplate'
import { Header } from './modules/header/Header'

export const App = () => {
  return (
    <BrowserRouter>
      <MainTemplate>
        <MainTemplateHeader>
          <Routes>
            <Route path={'/'} element={null} />
            <Route path={'/game'} element={<Header />} />
          </Routes>
        </MainTemplateHeader>
        <MainTemplateBody>
          <Routes>
            <Route path={'/'} element={<Login />} />
            <Route path={'/game'} element={<GameField />} />
          </Routes>
        </MainTemplateBody>
      </MainTemplate>
    </BrowserRouter>
  )
}
