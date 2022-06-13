function getPosts() {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error(`No results posts`));
     })
}

function getPostId(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error(`No post ${id}`))
    })
}


const api = { getPosts, getPostId };
export default api;
