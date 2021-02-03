async function deleteBlogPost(id) {
  await fetch(`http://localhost:3000/blogposts/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  })

  location.reload();
}