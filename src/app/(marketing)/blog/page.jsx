import TitlePage from '@/components/TitlePage'
import React from 'react'
import Link from 'next/link';




export const POST = [
  {
    id: 1,
    title: "Post 1",
    info: "post-1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 2,
    title: "Post 2",
    info: "post-2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 3,
    title: "Post 3",
    info: "post-3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
];


const Info = ({params}) => {

  return (
    <>
    <TitlePage text="Info"/>
    <main className="container mx-auto">
      <div className="grid gap-5">
        {
          POST.map((post) => (
            <div key={post.id} className='shadow rounded-md p-5'>
              <h2 className='text-2xl font-bold'>{post.title}</h2>
              <Link href={`/blog/${post.info}`}>Más info...</Link>
            </div>
          ))
        }
      </div>
    </main>
    </>
  )
}

export default Info