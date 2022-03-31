type commentOBJ = {
  name: string
  email: string
  comment: string
  slug: string
}

export const setPostComment = async (obj: commentOBJ) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  })

  return await result.json()
}
