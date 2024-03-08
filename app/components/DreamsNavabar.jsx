import React from 'react'
import { useRouter } from 'next/navigation'

const DreamsNavabar = () => {

    const redirect = useRouter()
    const handleClick = () => {
        redirect.push('/adddream')
    }

  return (
    <div className='border rounded m-2 border-emerald-300'>
        <nav className='flex justify-between m-5'>
            <h1 className='text-2xl'>Dreamly</h1>
            <ul>
                <button className='ml-10 text-2xl' onClick={handleClick}> Add Dream</button>
            </ul>
        </nav>
    </div>
  )
}

export default DreamsNavabar