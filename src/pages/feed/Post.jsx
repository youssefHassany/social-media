import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Post = ({ myData, clickProfile }) => {
  return (
    <>
        {myData.map((post, index) => (
            <motion.div 
                key={post.id * 100} 
                className='w-7/8 bg-gray-200 shadow my-4 p-2 rounded' 
                transition={{delay: 0.2 * index}}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: 20}}
            >
                    <div className="flex items-center">
                        <Link to={"/profile"} onClick={() => clickProfile(post)}>
                            <img src={post.avatar} className='inline-block mr-3 w-14' />
                        </Link>
                        <Link to={"/profile"} onClick={() => clickProfile(post)}>
                            <p className='inline-block font-bold'>
                                <span>{post["first_name"]} </span>
                                <span>{post["last_name"]}</span>
                                <br />
                                <span>{(index % 3 === 0 && post["first_name"] !== "Your") ? '(friend)' : ''}</span>
                            </p>
                        </Link>
                    </div>
                    <p className='my-5 text-2xl p-4 bg-white shadow-lg rounded-xl'>{post.post}</p>
            </motion.div>
        ))}
    </>
  )
}

export default Post