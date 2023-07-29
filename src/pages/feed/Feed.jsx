import React from 'react'
import Post from './Post'
import AddPost from './AddPost'

const Feed = ({ myData, setMyData, clickProfile }) => {
  return (
    <main className='p-4'>
      <AddPost myData={myData} setMyData={setMyData} />
      {/* <h1 className='mx-auto my-5 w-fit py-5 px-20 bg-gray-200 border-b-4 border-cyan-500 text-3xl'>Feed</h1> */}
      <>
        {myData.map((item) => <section key={item.id}><Post myData={myData} clickProfile={clickProfile} /></section>)}
      </>
    </main>
  )
}

export default Feed