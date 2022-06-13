import { Link } from 'react-router-dom'
const NotFoundPage = () => {
  return (
    <div>
      <p> This page doesn't exist. Go <Link to="/">Home</Link></p>
    </div>
  )
}

export { NotFoundPage }
