import type { NextPage } from 'next'
import Head from 'next/head'

import { Categories } from '../components/Categories'
import { PostCard } from '../components/PostCard'
import { PostWidget } from '../components/PostWidget'

const Home: NextPage = () => {
  const posts = [
    {
      title: 'React',
      exerpt: 'React is a library for building user interfaces',
    },
    {
      title: 'Next.js',
      exerpt: 'Next.js is a framework for server-rendered React',
    },
  ]

  return (
    <div className="-px10 container mx-auto mb-8">
      <Head>
        <title>Blog Jr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((posts) => (
            <PostCard posts={posts} key={posts.title} />
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
