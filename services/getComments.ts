import { request, gql } from 'graphql-request'

import { GRAPHQLAPI } from '../utils/constants'

const graphqlAPI = GRAPHQLAPI

export const getComments = async (slug: string) => {
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
