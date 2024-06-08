'use client'

import React from 'react'
import supabase from '../config/supabaseClient'
import { useState, useEffect } from 'react'
import DreamCard from '../components/DreamCard'
import DreamsNavabar from '../components/DreamsNavabar'

const Page = () => {
  const [fetchError, setFetchError] = useState(null);
  const [dreams, setDreams] = useState(null);

  useEffect(() => {
    const fetchDreams = async () => {
      const { data, error} = await supabase
      .from('dreams')
      .select()

        if (error) {
          setFetchError('Could not fetch the dreams')
          setDreams(null)
          console.log
        }

        if (data) {
          setDreams(data)
          setFetchError(null)
        }
    }

    fetchDreams()
  }, [])


  return (
    <div className='bg-gradient-to-r from-violet-200 to-pink-200'>
      <div className='border m-15 p-10 border-teal-400 justify-center rounded'>
        <DreamsNavabar />
        <h1 className="text-center text-3xl font-bold mt-8">My Dreams</h1>
        {fetchError && (<p>{fetchError}</p>)}
        {dreams && (
          <div className='grid lg:grid-cols-2 xl:grid-cols-4 gap-10'>
            {dreams.map(dream => (
              <DreamCard key={dream.id} dream={dream}/>
            ))}
          </div> 
        )}
      </div>
    </div>
  )
}

export default Page