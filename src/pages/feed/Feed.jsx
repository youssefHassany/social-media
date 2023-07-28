import React from 'react'
import Post from './Post'
import AddPost from './AddPost'

const Feed = ({ myData, setMyData }) => {
  return (
    <main className='p-4'>
      <AddPost myData={myData} setMyData={setMyData} />
      <>
        {myData.map((item) => <section key={item.id}><Post myData={myData} /></section>)}
      </>
    </main>
  )
}

export default Feed