import { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function useParamsState(initialValue: string, paramName: string) {
  const location = useLocation()
  const navigate = useNavigate()

  const urlParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  )

  const initialParamValue = urlParams.get(paramName)

  const [stateValue, setStateValue] = useState(
    initialParamValue || initialValue
  )

  useEffect(() => {
    setStateValue(initialParamValue || initialValue)
  }, [initialParamValue, initialValue])

  useEffect(() => {
    urlParams.set(paramName, stateValue)
    navigate(`?${urlParams.toString()}`)
  }, [stateValue, paramName, urlParams, navigate])

  return [stateValue, setStateValue] as const
}

export default useParamsState
