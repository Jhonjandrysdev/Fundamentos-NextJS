import TitlePage from '@/components/TitlePage'
import React from 'react'
import { POST } from '../page'
import Link from 'next/link';

const Info = ({params}) => {
  
  const post = POST.find((post)=> post.info === params.info)

  return (
    <>
    <div className='container mx-auto flex flex-col'>
    <TitlePage text={post.title}/>
    <p className='text-center text-black'>{post.content}</p>
    <Link href="/blog" className='mx-auto bg-black text-white p-5 rounded my-3'>Volver al Blog</Link>
    </div>
    </>
  )
}

export default Info