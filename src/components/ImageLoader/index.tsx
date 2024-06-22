import Image from 'next/image'
import React from 'react'

const ImageLoader = ({src, ...props}) => {
  return (
    <Image src={src} alt={src}   layout='' width={800} height={400} unoptimized  {...props} />
    )
  }

export default ImageLoader
