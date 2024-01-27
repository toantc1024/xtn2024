/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'
// import Carousel from './Carousel'   
import { Carousel } from 'primereact/carousel';
import Image from 'next/image';
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

const responsiveOptions = [
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
];

const Gallery = () => {
    const images = [
        {
            src: "https://i.pinimg.com/564x/b0/60/79/b0607960c2924096eb9e5afe1e19e397.jpg",
            alt: "Random image from Picsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            title: "Random image from Picsum"
        }
        ,
        {
            src: "https://i.pinimg.com/564x/60/b2/6c/60b26c0c8052939d516530a706ff7b48.jpg",
            alt: "Random image from Picsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            title: "Random image from Picsum"
        }
        ,
        {
            src: "https://i.pinimg.com/564x/0b/c4/02/0bc4020e721914b9bda4c28061f336d0.jpg",
            alt: "Random image from Picsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            title: "Random image from Picsum"
        },
        {
            src: "https://i.pinimg.com/564x/8e/49/5c/8e495c1e47002a41298ac06188ae2e3a.jpg",
            alt: "Random image from Picsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            title: "Random image from Picsum"
        },
        {
            src: "https://i.pinimg.com/564x/0b/c4/02/0bc4020e721914b9bda4c28061f336d0.jpg",
            alt: "Random image from Picsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            title: "Random image from Picsum"
        },
        {
            src: "https://i.pinimg.com/564x/8f/c1/26/8fc126349aa900c99f3ac8539b19466d.jpg",
            alt: "Random image from Picsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            title: "Random image from Picsum"
        },
        {
            src: "https://i.pinimg.com/564x/da/04/8f/da048fe855c2f894194a3744b607705c.jpg",
            alt: "Random image from Picsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            title: "Random image from Picsum"
        },
        {
            src: "https://i.pinimg.com/564x/9a/58/32/9a58321df62dd9257743dba598133766.jpg",
            alt: "Random image from Picsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            title: "Random image from Picsum"
        },
        {
            src: "https://i.pinimg.com/564x/e9/2f/2f/e92f2f592f843fca041cc6e362091492.jpg",
            alt: "Random image from Picsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            title: "Random image from Picsum"
        },
    ]

    const album = [
        {
            original: "https://picsum.photos/id/1018/1000/600/",
            thumbnail: "https://picsum.photos/id/1018/250/150/",
            description: "Random image from Picsum",
        },
        {
            original: "https://picsum.photos/id/1015/1000/600/",
            thumbnail: "https://picsum.photos/id/1015/250/150/",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
            description: "Lorem ipsum dolor sit amet, random image from Picsum"
        },
    ];

    const template = (image) => {
        return (
            <div className="flex border-1 surface-border border-round m-2 text-center">
                <div className="flex justify-center">
                    <img src={image.src} alt={image.alt}
                        style={{ height: '300px !important', width: 'auto !important' }}
                    />
                </div>
                <div className='flex items-center p-6 w-full'>
                    <div>
                        <h4 className="mb-1">{image.title}</h4>
                        <div className="mt-0 mb-3 font-light text-sm">{image.alt}</div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            <div className='p-6'>
                <h1 className='text-3xl font-bold text-center my-3'>Carousel</h1>
                <Carousel value={images}
                    // responsiveOptions={responsiveOptions}
                    itemTemplate={template}
                    autoplayInterval={3000}
                    circular={true}
                />
            </div>

            <div className='p-8'>
                <h1 className='text-3xl font-bold text-center my-3'>Image Gallery</h1>
                <ImageGallery items={album} />
            </div>
        </div>
    )
}

export default Gallery