import { TabType, classNames, tabs } from 'utils'

type TabHeaderProps = {
  activeTab: TabType
  setActiveTab: (tab: TabType) => void
}

const activeTabStyles = 'bg-white text-theme-primary-600 font-extrabold'

export default function TabHeader({ activeTab, setActiveTab }: TabHeaderProps) {
  return (
    <div className="mt-4 flex w-full flex-row justify-start space-x-4">
      {Object.entries(tabs).map(([tab, tabName], index) => {
        const tabId = `tab-${tab}`
        return (
          <button
            key={index}
            id={tabId}
            className={classNames(
              'w-full px-6 py-2 rounded-md transition-all duration-300 block text-lg tracking-wide text-theme-primary-800 bg-theme-primary-50 shadow-sm hover:shadow-lg',
              activeTab === tab && activeTabStyles
            )}
            onClick={() => setActiveTab(tab as TabType)}
          >
            {tabName}
          </button>
        )
      })}
    </div>
  )
}
