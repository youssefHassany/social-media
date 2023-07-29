import React, { useState } from 'react'

const AddPost = ({ myData, setMyData }) => {
  const [thought, setThought] = useState("");
  
  const userData = {
    "id": (myData.length + 1),
    "avatar": "https://cdn-icons-png.flaticon.com/128/552/552721.png",
    "first_name": "Your",
    "last_name": "Account",
    "email": "name@Example.com",
    "post": thought
  };

  const postNewPost = (e) => {
    e.preventDefault()
    setMyData([userData, ...myData]);
    setThought("");
    console.log(myData)
  }
  return (
    <form onSubmit={postNewPost} className='w-7-8 bg-gray-200 p-4 flex flex-col justify-center items-center'>
      <input
        required
        className='border w-11/12 sm:w-3/5 h-20 p-3 shadow-lg rounded'
        type="text"
        placeholder='Tell us your thoughts'
        value={thought}
        onChange={(e) => setThought(e.target.value)}
      />
      <button role='submit' className='mt-5 py-2 px-7 border-2 border-cyan-800 text-cyan-900 rounded text-xl hover:text-white relative z-10 before:absolute before:bg-cyan-800 before:w-0 before:h-full before:transition-all hover:before:w-full before:top-0 before:left-0 before:z-[-1]'>Post</button>
    </form>
  )
}

export default AddPost