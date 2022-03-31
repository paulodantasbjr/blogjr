import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getCategories } from '../services/getCategories'
import { CategoriesType } from '../types/Categories'

export const Header = () => {
  const [categories, setCategories] = useState([] as CategoriesType[])

  useEffect(() => {
    getCategories().then((category) => setCategories(category))
  }, [])

  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b border-blue-400 py-8 ">
        <div className="block md:float-left">
          <Link href="/" passHref>
            <span className="cursor-pointer text-4xl font-bold text-white">
              BlogJr
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              passHref
            >
              <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold text-white md:float-right">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
