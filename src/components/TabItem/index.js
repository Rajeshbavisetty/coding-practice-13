import './index.css'

const TabItem = props => {
  const {eachDetails, getDetails, click} = props
  const {displayText, tabId} = eachDetails

  const getdetails = () => {
    getDetails(tabId)
  }
  
  const attribute = click ? 'borderstyle' : ''
  return (
    <li className="container">
      <button
        className={`paragraph ${attribute}`}
        onClick={getdetails}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
