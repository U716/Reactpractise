import React from 'react'

const Heading = (props) => {
  return (
    <h1 className='text-uppercase my-4 mb-4 font-bold' dangerouslySetInnerHTML={{__html: props.title}} />
//   <h1 className='text-uppercase my-4 mb-4 font-bold'>{props.title}</h1>
  )
}

export default Heading
