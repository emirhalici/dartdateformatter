import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { TabType, tabs } from 'utils'

const defaultTab: TabType = 'presets'

export default function useTabState(): [
  TabType,
  Dispatch<SetStateAction<TabType>>
] {
  const [activeTab, setActiveTab] = useState<TabType>(defaultTab as TabType)

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    const isHashValidTab = hash && Object.keys(tabs).includes(hash)

    setActiveTab(isHashValidTab ? (hash as TabType) : (defaultTab as TabType))
  }, [])

  useEffect(() => {
    // Update URL hash when activeTab changes
    window.location.hash = activeTab as string
  }, [activeTab])

  return [activeTab, setActiveTab]
}
