import React from 'react'

function Profile({  profileData }) {
    console.log(profileData);

  return (
    <main className='w-full flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-medium my-8 w-fit border-b-4 border-cyan-500'>{profileData["first_name"]}'s Profile</h1>

        <div className='w-11/12 sm:w-3/4 p-5 bg-gray-200 shadow-lg'>
            <div className='flex items-center gap-8'>
                <img src={profileData.avatar} className="w-14 h-14 flex-shrink-0" />

                <div className='text-2xl'>
                    <p>First name: {profileData["first_name"]}</p>
                    <p>Last name: {profileData["last_name"]}</p>
                    <p>Email: {profileData["email"]}</p>
                </div>
            </div>
            
            <div className='bg-white rounded-lg shadow-lg text-2xl p-6 my-8'>
                <p>{profileData["post"]}</p>
            </div>
        </div>
    </main>
  )
}

export default Profile