import React, { useState } from 'react'

const Friends = ({ myData }) => {
  const [userFriends, setUserFriends] = useState( myData.filter((friend, index) => index % 3 === 0));

  return (
    <main className='w-full p-4'>
        <h1 className='bg-gray-200 border-b-8 border-b-cyan-600 p-3 my-4 text-2xl sm:text-4xl font-medium w-fit text-center rounded'>You have {userFriends.length} Friends</h1>
        <div>
            {userFriends.map((friend, idx) => (
                <div key={friend.id * 100} className='w-7/8 bg-gray-200 shadow-lg my-4 p-2 rounded'>
                    <div className="flex items-center">
                        <img src={friend.avatar} className='inline-block mr-3 w-14' />
                        <p className='inline-block font-bold'>
                            <span>{friend["first_name"]} </span>
                            <span>{friend["last_name"]}</span>
                            <br />
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </main>
  )
}

export default Friends