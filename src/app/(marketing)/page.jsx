import TitlePage from '@/components/TitlePage'
import React from 'react'
import Link from 'next/link';

const Home = () => {
  return (
    <>
    <TitlePage text="Home"/>
    <Link href="/blog">Blog</Link>
    </>
  )
}

export default Home