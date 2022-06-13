import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../services/api';



const SinglePage = () => {
  // console.log(useParams());
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    api.getPostId(id).then(data => setPost(data));
  }, [id]);

  const goBack = () => navigate(-1);


  return (
    <>
      <h1>Single Page</h1>
      <button
        type="button"
        onClick={goBack}
      >
        Go Back
      </button>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}

    </>

  )
}

export { SinglePage };
