import ShortenUrlForm from '@/components/ShortenUrlForm'
import React from 'react'

const page = () => {
  return (
    <section className='container'>
      <div className="mt-4">
        <h2 className='font-bold md:text-4xl text-center'>Shorten Your URL</h2>
       <ShortenUrlForm />
      </div>
    </section>
  )
}

export default page