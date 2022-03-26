type Posts = {
  node: {
    title: string
    featuredImage: {
      url: string
    }
    slug: string
    author: {
      photo: {
        url: string
      }
      name: string
    }
    createdAt: string
    excerpt: string
  }
}

export type Post = {
  posts: Posts[]
}
