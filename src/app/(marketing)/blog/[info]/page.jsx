import TitlePage from '@/components/TitlePage'
import React from 'react'

const Info = ({params}) => {
  
  return (
    <>
    <TitlePage text="Info"/>
    <p className='text-center text-black'>{params.info}</p>
    </>
  )
}

export default Info