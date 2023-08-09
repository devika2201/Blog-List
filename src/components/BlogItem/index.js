// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="list">
      <div className="container1">
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <div className="container2">
        <p>{description}</p>
      </div>
    </li>
  )
}

export default BlogItem
