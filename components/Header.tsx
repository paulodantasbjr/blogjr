import Link from 'next/link'

const categories = [
  { name: 'React', slug: 'react' },
  { name: 'Vue', slug: 'vue' },
  { name: 'Angular', slug: 'angular' },
]

export const Header = () => {
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
