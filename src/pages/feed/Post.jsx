import React from 'react'

const Post = ({ myData }) => {
  return (
    <>
        {myData.map((post, index) => (
            <div key={post.id * 100} className='w-7/8 bg-gray-200 shadow my-4 p-2 rounded animate-pulse' style={{animationDelay: `${300 * index}ms`}}>
                <div className="flex items-center">
                    <img src={post.avatar} className='inline-block mr-3 w-14' />
                    <p className='inline-block font-bold'>
                        <span>{post["first_name"]} </span>
                        <span>{post["last_name"]}</span>
                        <br />
                        <span>{(index % 3 === 0 && post["first_name"] !== "Your") ? '(friend)' : ''}</span>
                    </p>
                </div>
                <p className='my-5 text-2xl'>{post.post}</p>
            </div>
        ))}
    </>
  )
}

export default Post