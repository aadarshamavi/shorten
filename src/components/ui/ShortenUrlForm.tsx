"use client"
import React from 'react'
import { Button } from './button'
import { Input } from './input'
import Toast from 'awesome-toast-component'
import axios from 'axios'
import { LinkBreak2Icon,ReloadIcon,CopyIcon } from '@radix-ui/react-icons'
const ShortenUrlForm = () => {
    const [originalUrl, setOriginalUrl] = React.useState("");
    const [shortenedUrl, setShortenedUrl] = React.useState("");
    const [loading, setLoading] = React.useState(false)
    const copyLink = () => {
        navigator.clipboard.writeText(shortenedUrl)
        new Toast("Copied to clipboard")
    }
    const shortUrl = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            setLoading(true)
            const { data } = await axios.post("/api/shorten", { url: originalUrl })
            if(data.success)
            {
                setShortenedUrl(data.url)
                setOriginalUrl("")
                new Toast(`Successfully shortened`)

            } else {
                new Toast(`Error, please try again later.`, {
                    style: {
                        container: [
                            ['background-color', 'red']
                        ],
                        message: [
                            ['color', '#eee'],
                        ],
                        bold: [
                            ['font-weight', 'bold'],
                        ]
                    }
                });
            }
        } catch (error) {
            new Toast(`Error, please try again later.`, {
                style: {
                    container: [
                        ['background-color', 'red']
                    ],
                    message: [
                        ['color', '#eee'],
                    ],
                    bold: [
                        ['font-weight', 'bold'],
                    ]
                }
            });
        }
        finally {
            setLoading(false)
        }
    }
  return (
    <form className="mt-2" onSubmit={shortUrl}>
    <div className='flex w-full justify-center space-x-2'>
    <Input placeholder='Enter your URL here' type='url' className='max-w-lg' required value={originalUrl} onChange={(e)=>setOriginalUrl(e.target.value)}/>
              <Button disabled={loading}>
                  {
                      loading?<ReloadIcon className='w-4 h-4 mr-2 animate-spin'/>: <LinkBreak2Icon className='w-4 h-4 mr-2' />
                  }
                 
                  Shorten</Button>
    </div> 
          <p className="text-center mt-2 flex items-center justify-center">Shortened URL: <a href={shortenedUrl} className='underline underline-offset-1 text-blue-500'>
              {shortenedUrl}
              </a>
              {
                  shortenedUrl && <Button variant={"outline"} className='ml-2' type='button' onClick={copyLink}>
                      <CopyIcon className='w-4 h-4'/>
                  </Button>
              }
              
          </p>
  </form>
  )
}

export default ShortenUrlForm