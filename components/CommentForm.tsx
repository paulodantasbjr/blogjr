import { useState, useEffect } from 'react'
import { setPostComment } from '../services/setPostComment'

export const CommentForm = ({ slug }) => {
  const initialState = { name: '', email: '', comment: '' }
  const [commentData, setCommentData] = useState(initialState)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChangeInput = ({ target }) => {
    if (target.type === 'checkbox') {
      setCommentData((prev) => ({
        ...prev,
        [target.name]: target.checked,
      }))
    } else {
      setCommentData((prev) => ({
        ...prev,
        [target.name]: target.value,
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { name, email, comment } = commentData
    if (!name || !email || !comment) {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 2000)
      return
    }

    const commentDataOBJ = {
      name,
      email,
      comment,
      slug,
    }

    setPostComment(commentDataOBJ).then((res) => {
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
      }, 2000)
    })
  }

  return (
    <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
        Leave a Reply
      </h3>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <textarea
          onChange={handleChangeInput}
          placeholder="Comment"
          name="comment"
          className="h-40 w-full rounded-lg bg-gray-100 p-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <input
          onChange={handleChangeInput}
          type="text"
          placeholder="Name"
          name="name"
          className="w-full rounded-lg bg-gray-100 py-2 px-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
        />
        <input
          onChange={handleChangeInput}
          type="email"
          placeholder="Email"
          name="email"
          className="w-full rounded-lg bg-gray-100 py-2 px-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
        />
      </div>
      <div className="mb-4 flex items-center gap-2">
        <input onChange={handleChangeInput} type="checkbox" name="storeData" />
        <label
          htmlFor="storeData"
          className="cursor-pointer text-xs text-gray-500"
        >
          Save my name and email for the next comment
        </label>
      </div>
      {error && <p className="text-xl text-red-500">All fields are required</p>}
      <div className="mt-4">
        <button
          type="button"
          onClick={handleSubmit}
          className="inline-block cursor-pointer rounded-full bg-pink-600 px-8 py-3 text-lg font-medium text-white transition duration-500 ease-in-out hover:bg-indigo-900 "
        >
          Post Comment
        </button>
        {success && (
          <span className="ml-5 text-xl font-semibold text-green-500">
            Comment submitted for review
          </span>
        )}
      </div>
    </div>
  )
}
