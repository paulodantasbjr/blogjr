import { request, gql } from 'graphql-request'

const graphqlAPI =
  'https://api-sa-east-1.graphcms.com/v2/cl10yafju1alq01z0dzltdtxa/master'

export const getPosts = async () => {
  const query = gql`
    query getPosts {
      posts(){
        author{
          photo{
            url
          }
          bio
          name
          id
        }
        slug
        title
        excerpt
        featuredImage {
          url
        }
        createdAt
        categories {
          name
          slug
        }
      }
    }
  `

  const results = await request(graphqlAPI, query)

  return results.posts
}
