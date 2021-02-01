async function deleteBlogPost(id) {
  const url = `http://localhost:3000/blogposts/${id}`;
  const response = await fetch(url, { 
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  })

  location.reload();
}