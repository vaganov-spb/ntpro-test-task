import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Route, Routes, Navigate, useLocation } from 'react-router'
import { Tabs } from 'antd'
import ArchivePage from './pages/ArchivePage'
import TradingPage from './pages/TradingPage'
import './App.css'

interface IRoutes {
  trading: string
  archive: string
}

const routes: IRoutes = {
  trading: 'trading',
  archive: 'archive',
}

function App() {
  const navigate = useNavigate()
  const location = useLocation()

  const onChange = (key: string) => {
    navigate(`../${key}`)
  }

  return (
    <>
      <Tabs defaultActiveKey={location.pathname.slice(1)} onChange={onChange}>
        <Tabs.TabPane tab='Trading' key={routes.trading} />
        <Tabs.TabPane tab='Archive' key={routes.archive} />
      </Tabs>
      <Routes>
        <Route path={routes.trading} element={<TradingPage />}></Route>
        <Route path={routes.archive} element={<ArchivePage />}></Route>
        <Route path='*' element={<Navigate to={routes.trading} replace />} />
      </Routes>
    </>
  )
}

export default App
