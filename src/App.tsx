import HomePage from 'pages/Home'
import { PropsWithChildren, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { classNames } from 'utils'
import LoadingOrError from './components/LoadingOrError'

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingOrError />}>
        <AppWrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </AppWrapper>
      </Suspense>
    </BrowserRouter>
  )
}

function AppWrapper(props: PropsWithChildren) {
  return <div className={classNames('')}>{props.children}</div>
}
