import { gql, request } from 'graphql-request'

const graphqlAPI =
  'https://api-sa-east-1.graphcms.com/v2/cl10yafju1alq01z0dzltdtxa/master'

export const getComments = async (slug) => {
  const query = gql`
    query getComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        createdAt
        comment
      }
    }
  `
  const result = await request(graphqlAPI, query, { slug })
  return result.comments
}
