import { request, gql } from 'graphql-request'

const graphqlAPI =
  'https://api-sa-east-1.graphcms.com/v2/cl10yafju1alq01z0dzltdtxa/master'

export const setPostComment = async (obj) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  })

  return await result.json()
}
