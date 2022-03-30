import moment from 'moment'
import { useState, useEffect } from 'react'
import { getComments } from '../services/getComments'

export const Comments = ({ slug }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    getComments(slug).then((res) => {
      setComments(res)
    })
  }, [slug])

  console.log(comments)

  return (
    <>
      {comments.length > 0 && (
        <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
          <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
            {comments.length} {comments.length > 1 ? 'comments' : 'comment'}
          </h3>
          {comments.map((comment, index) => (
            <div key={index} className="mb-4 border-b border-gray-100 pb-4">
              <div className="mb-4 flex justify-between">
                <span className="mb-4 text-indigo-600">{comment.name}</span>
                <p className="text-xs text-gray-500">
                  {moment(comment.createdAt).startOf('day').fromNow()}
                </p>
              </div>
              <p className="w-full whitespace-pre-line text-gray-600">
                {comment.comment}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
