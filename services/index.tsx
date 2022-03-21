import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.APP_GRAPHQL_API

export const getPosts = async () => {
  const query = gql`
    query getPosts {
      postsConnection {
        edges {
          node {
            author {
              photo {
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
      }
    }
  `

  const results = await request(graphqlAPI, query)

  return results.postsConnection.edges
}
