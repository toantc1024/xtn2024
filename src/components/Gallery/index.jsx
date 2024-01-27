"use client"
import React from 'react'
import Carousel from './Carousel'   
const Gallery = () => {
    const images = [
        {
            src: "https://picsum.photos/seed/picsum/200/300",
            alt: "Random image from Picsum"
        },
            {
            src: "https://picsum.photos/seed/picsum/200/300",
            alt: "Random image from Picsum"
        }
    ,
        {
            src: "https://picsum.photos/seed/picsum/200/300",
            alt: "Random image from Picsum"
        }
    ,
        {
            src: "https://picsum.photos/seed/picsum/200/300",
            alt: "Random image from Picsum"
        }   
    ]


  return (
    <Carousel images={images}/>
  )
}

export default Gallery