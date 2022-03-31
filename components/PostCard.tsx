import Image from 'next/image'
import Link from 'next/link'

import moment from 'moment'

import { AiOutlineCalendar } from 'react-icons/ai'

import { PostType } from '../types/Post'
import { PostsType } from '../types/Posts'

export const PostCard = ({ posts }: PostsType) => {
  return (
    <div className="mb-8 rounded-lg bg-white p-0 pb-12 shadow-lg lg:p-8">
      <div className="relative mb-6 overflow-hidden pb-80 shadow-md">
        <Image
          src={posts.featuredImage.url}
          alt={posts.title}
          className="absolute h-80 w-full rounded-t-lg object-cover  object-top shadow-lg lg:rounded-lg"
          layout="fill"
          priority
        />
      </div>

      <h1 className="transation mb-8 cursor-pointer text-center text-3xl font-semibold duration-700 hover:text-pink-600">
        <Link href={`/post/${posts.slug}`}>{posts.title}</Link>
      </h1>

      <div className="mb-8 block w-full items-center justify-center text-center lg:flex">
        <div className="mb-4 mr-8 flex w-full items-center justify-center lg:mb-0 lg:w-auto ">
          <Image
            src={posts.author.photo.url}
            alt={posts.author.name}
            className="rounded-full align-middle"
            height={30}
            width={30}
          />
          <p className="ml-2 inline align-middle text-lg font-medium text-gray-700">
            {posts.author.name}
          </p>
        </div>

        <div className="font-medium text-gray-700">
          <AiOutlineCalendar className="mr-1 inline h-6 w-6 text-pink-500" />
          <span className="align-middle">
            {moment(posts.createdAt).format('MM DD, YYYY')}
          </span>
        </div>
      </div>

      <p className="mb-8 px-4 text-center text-lg font-normal text-gray-700 lg:px-20">
        {posts.excerpt}
      </p>

      <div className="text-center">
        <Link href={`/post/${posts.slug}`} passHref>
          <span className="ease inline-block transform cursor-pointer rounded-full bg-pink-600 px-8 py-3 text-lg font-medium text-white transition duration-500 hover:-translate-y-1">
            ver mais
          </span>
        </Link>
      </div>
    </div>
  )
}
