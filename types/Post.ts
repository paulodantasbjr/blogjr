export type PostType = {
  author: {
    bio: string
    id: string
    name: string
    photo: {
      url: string
    }
  }
  categories: [
    {
      name: string
      slug: string
    }
  ]
  createdAt: string
  excerpt: string
  featuredImage: {
    url: string
  }
  slug: string
  title: string
}
