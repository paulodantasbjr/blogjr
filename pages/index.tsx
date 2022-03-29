import type { NextPage } from 'next'
import { GetStaticProps } from 'next'

import Head from 'next/head'

import { Categories } from '../components/Categories'
import { PostCard } from '../components/PostCard'
import { PostWidget } from '../components/PostWidget'
import { getPosts } from '../services/getPosts'

const Home: NextPage = ({ posts }) => {
  return (
    <div className="-px10 container mx-auto mb-8">
      <Head>
        <title>Blog Jr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((posts, index) => (
            <PostCard posts={posts} key={index} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts()

  return {
    props: { posts },
  }
}
