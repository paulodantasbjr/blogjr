import { NextPage } from 'next'

import { Author } from '../../components/Author'
import { Categories } from '../../components/Categories'
import { CommentForm } from '../../components/CommentForm'
import { Comments } from '../../components/Comments'
import { PostDetail } from '../../components/PostDetail'
import { PostWidget } from '../../components/PostWidget'
import { getPostDetails } from '../../services/getPostDetails'
import { getPosts } from '../../services/getPosts'

const PostDetails: NextPage = ({ post }) => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget categories={undefined} slug={} />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetails

export const getStaticPaths = async () => {
  const posts = await getPosts()
  const paths = posts.map(({ slug }) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const data = await getPostDetails(params.slug)
  return {
    props: {
      post: data,
    },
  }
}
