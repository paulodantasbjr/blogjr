import moment from 'moment'
import Image from 'next/image'

import { AiOutlineCalendar } from 'react-icons/ai'
import { PostType } from '../types/Post'
import { PostsType } from '../types/Posts'
import { getContentFragment } from '../utils/getContentFragment'

export const PostDetail = ({ post }: PostType[]) => {
  return (
    <div className="mb-8 rounded-lg bg-white pb-12 shadow-lg lg:p-8">
      <div className="relative mb-6 h-full w-full overflow-hidden shadow-md">
        <Image
          src={post.featuredImage.url}
          alt={post.title}
          className="h-full w-full rounded-t-lg object-cover object-top shadow-lg lg:rounded-lg"
          layout="fill"
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="mb-8 flex w-full items-center">
          <div className="items-centerjustify-center mr-8 hidden md:flex lg:mb-0 lg:w-auto">
            <Image
              alt={post.author.name}
              height="30px"
              width="30px"
              className="rounded-full align-middle"
              src={post.author.photo.url}
            />
            <p className="ml-2 inline align-middle text-lg font-medium text-gray-700">
              {post.author.name}
            </p>
          </div>
          <div className="font-medium text-gray-700">
            <AiOutlineCalendar className="mr-2 inline h-6 w-6 text-pink-500" />
            <span className="align-middle">
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </span>
          </div>
        </div>
        <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>

        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemindex) =>
            getContentFragment(itemindex, item.text, item)
          )

          return getContentFragment(index, children, typeObj, typeObj.type)
        })}
      </div>
    </div>
  )
}
