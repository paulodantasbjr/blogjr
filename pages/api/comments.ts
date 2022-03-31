import { GraphQLClient, gql } from 'graphql-request'

const GraphCMSToken =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDg2NjE4OTUsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NsMTB5YWZqdTFhbHEwMXowZHpsdGR0eGEvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMDg5OGU0ZTQtM2ZiYy00YWViLTkxOWQtYmRlY2I1MmFiZWEwIiwianRpIjoiY2wxZHVxNGU3MWV3dTAxejZibThuZXl1dCJ9.YZ25XY40eJDtBaD_cIFkg7PonHqU1R3hhoUFWR1PKomuD_ZV6xmoNCC6CRg6b5YRGAWolpMP_WIBM8YXxHVkvFt3VlfykkZ0D9cTbrCUdl1O2w-SIc0tP5eakky8wmMsnzanK0WObZhD51BKyzsLvJmBlXNoOJNdgHxnzB4_3XJ02-HgI6Ufvee_9SJqzOSlEDUtt9qajUncrdmxwU56CdqBVIfAyfp3J4FIuny4-3p7ImZA01_Ohad2kR8J-_szEYdGCpV7ih1taBYjbzH8TLc34aHLcSWJhn8jIspv_WIJ9UFMBshr6d9hXo3WOQB-cstahzaJDnfWZjF1dFw4p78mOFEJqPdG7q8h3j5CEE664TO3ulRe1DpnbDVX0ggLeCcBulOcoDowNunuGRbuH5A8VOmN18E8ae38_5JwwG-LMxxJEQ_btpgNx-IeIuulIcpBrTbFvwKJrLT9VAhaLzdKZd7fixOYaTaNSA1IomjXj9u3CxHi92iPanyORf3dbez6rWCWePZlXKqXtL3IrSD8U8sXzmg9J7iqyv80cXCxdQwlgAdvjKOKLJGQWAzglZAPDkZuV3ci2LCCpC43sYstIJlk4x93aF5nQbwBWcY0Q2s9nRxcAgFfArvGR6LNXxMsoNU6jZ_3O8MOYuZc5wDvrDvkEixKWiqDdVah9uw'
const graphqlAPI =
  'https://api-sa-east-1.graphcms.com/v2/cl10yafju1alq01z0dzltdtxa/master'

export default async function handlePostComment(req, res) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${GraphCMSToken}`,
    },
  })

  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `
  const postOBJ = {
    name: req.body.name,
    email: req.body.email,
    comment: req.body.comment,
    slug: req.body.slug,
  }

  const result = await graphQLClient.request(query, postOBJ)

  return res.status(200).json(result)
}
