import { request, gql } from 'graphql-request'

import { GRAPHQLAPI } from '../utils/constants'

const graphqlAPI = GRAPHQLAPI

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
