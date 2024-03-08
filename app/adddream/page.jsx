'use client'

import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import supabase from "../config/supabaseClient"
import {useRouter} from 'next/navigation'

const page = () => {

    const navigate = useRouter()

    const [dream, setDream] = useState("");
    const [created_at, setCreated_at] = useState("");
    const [formError, setFormError] = useState(null);
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!dream) {
            setFormError('please fill in the dream')
            return
        }

        console.log(dream)
    

        const {data, error} = await supabase
        .from('dreams')
        .insert([{dream}])
        .select()

        if (error) {
            console.log(error)
            setFormError('please fill the dream')
        }

        if (data) {
            console.log(data)
            navigate.push('/dreams')
        }
    }

  return (
    <div className='bg-gradient-to-r from-violet-200 to-pink-200 justify-center'>
        <h2>add reams</h2>

        <form onSubmit={handleSubmit}>
        

        <label htmlFor="dream">Dream:</label>
        <textarea 
          id="dream"
          value={dream}
          onChange={(e) => setDream(e.target.value)}
        />

        <button>Dreamly</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  )
}

export default page