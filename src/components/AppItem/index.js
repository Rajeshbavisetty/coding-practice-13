import './index.css'

const AppItem = props => {
  const {each} = props
  const {imageUrl, appName, category} = each
  return (
    <li className="appcontainer">
      <img src={imageUrl} className="imgsize1" alt={appName} />
      <p className="header1">{appName}</p>
    </li>
  )
}
export default AppItem
