import React from 'react'
import Link from 'next/link';

const DreamCard = ( {dream} ) => {
  return (
    <section className=''>
      <div className=''>
        <h1 className='text-3xl text-gray-800 text-wrap'>{dream.date}</h1>
        <p className='text-xl text-gray-900'>{dream.dream}</p>

        <div className='bg-inherit text-xl text-grey-500 w-10 border rounded my-5'>
        <Link href={'/' + dream.id}>Edit</Link>
      </div>
      </div>
      
    </section>
  )
}

export default DreamCard