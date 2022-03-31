import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getCategories } from '../services/getCategories'
import { CategoriesType } from '../types/Categories'

export const Categories = () => {
  const [categories, setCategories] = useState([] as CategoriesType[])

  useEffect(() => {
    getCategories().then((categories) => setCategories(categories))
  }, [])

  return (
    <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`} passHref>
          <span
            className={`block cursor-pointer ${
              index === categories.length - 1 ? 'border-b-0' : 'border-b'
            } mb-3 pb-3 `}
          >
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}
