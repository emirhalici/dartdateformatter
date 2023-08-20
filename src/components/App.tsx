import HomePage from 'pages/Home'
import { PropsWithChildren, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoadingOrError from './Avatar/LoadingOrError'

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
  return (
    <div className="relative overflow-hidden bg-white dark:bg-neutral-950">
      <div className="h-screen sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        {props.children}
      </div>
    </div>
  )
}
