import HomePage from 'pages/Home'
import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoadingOrError from './components/LoadingOrError'

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingOrError />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
