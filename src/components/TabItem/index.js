import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const activeClassName = isActive ? 'active-tab-btn' : ''

  const OnClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeClassName}`}
        onClick={OnClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
