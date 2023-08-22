import { TabType, classNames, tabs } from 'utils'

type TabHeaderProps = {
  activeTab: TabType
  setActiveTab: (tab: TabType) => void
}

const activeTabStyles = 'bg-white shadow-sm'
const inactiveTabStyles = 'bg-slate-100 hover:bg-white hover:opacity-75'
const buttonCommonStyles =
  'w-full px-6 py-2 rounded-md transition-all  duration-300'
const buttonTextStyles =
  'block text-lg font-semibold tracking-wide text-slate-700'

export default function TabHeader({ activeTab, setActiveTab }: TabHeaderProps) {
  return (
    <div className="mt-4 flex w-full flex-row justify-start space-x-4 rounded-md bg-slate-100 p-1 shadow-md">
      {Object.entries(tabs).map(([tab, tabName], index) => {
        const tabId = `tab-${tab}`
        return (
          <button
            key={index}
            id={tabId}
            className={classNames(
              buttonCommonStyles,
              buttonTextStyles,
              activeTab === tab ? activeTabStyles : inactiveTabStyles
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
