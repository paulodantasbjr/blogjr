import { request, gql } from 'graphql-request'

import { GRAPHQLAPI } from '../utils/constants'

const graphqlAPI = GRAPHQLAPI

export const getCategories = async () => {
  const query = gql`
    query getCategories {
      categories {
        name
        slug
      }
    }
  `

  const results = await request(graphqlAPI, query)

  return results.categories
}
