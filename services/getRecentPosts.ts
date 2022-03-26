import { request, gql } from 'graphql-request'

const graphqlAPI =
  'https://api-sa-east-1.graphcms.com/v2/cl10yafju1alq01z0dzltdtxa/master'

export const getRecentPosts = async () => {
  const query = gql`
    query getRecentPosts() {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `
  const result = await request(graphqlAPI, query)

  return result.posts
}
