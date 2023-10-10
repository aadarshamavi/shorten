import db from '@/lib/db';
import { notFound, redirect } from 'next/navigation';
import React from 'react'

const page = async ({ params }: {
    params: {
        urlcode:string
    }
}) => {
    const urlcode = params.urlcode;
    const dbLink = await db.link.findFirst({
        where: {
            shortenLink: process.env.NEXT_URL as string + urlcode
        }
    });
    
    if(dbLink)
    {
        return redirect(dbLink.originalLink)
    }
  return (
    notFound()
  )
}

export default page