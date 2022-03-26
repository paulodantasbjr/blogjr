import { request, gql } from 'graphql-request'

const graphqlAPI =
  'https://api-sa-east-1.graphcms.com/v2/cl10yafju1alq01z0dzltdtxa/master'

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
