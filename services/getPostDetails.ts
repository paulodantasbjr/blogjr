import { request, gql } from 'graphql-request'

import { GRAPHQLAPI } from '../utils/constants'

const graphqlAPI = GRAPHQLAPI

export const getPostDetails = async (slug: string) => {
  const query = gql`
    query getPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        title
        excerpt
        featuredImage {
          url
        }
        author {
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          raw
        }
        categories {
          name
          slug
        }
      }
    }
  `
  const result = await request(graphqlAPI, query, { slug })

  return result.post
}
