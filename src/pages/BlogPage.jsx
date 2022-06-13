import api from '../services/api';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';



const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [params, setParams] = useState(null);

  let location = useLocation();
  useEffect(() => {
    api.getPosts().then(data => setPosts(data))
  }, [])

  useEffect(() => {
    setParams(location.search)
  }, [location.search])

  console.log(params);



  return (
    <div>
      <h1>Our news</h1>
      {
        posts.map(post => (
          <Link
            key={post.id}
            to={`/posts/${post.id}`}
          >
            <li>{post.title}</li>
          </Link>
        ))
      }
    </div>
  )
}

export { BlogPage };
