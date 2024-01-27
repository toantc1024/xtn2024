"use client"
import React from 'react'
// import Carousel from './Carousel'   
import { Carousel } from 'primereact/carousel';
// import { Galleria } from 'primereact/galleria';

import Image from 'next/image';

const responsiveOptions = [
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
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
            src: "https://i.pinimg.com/564x/c2/d3/ea/c2d3ea4e7db59e78d0af0125bcd570aa.jpg",
            alt: "Random image from Picsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            title: "Random image from Picsum"
        },
    ]

    const template = (image) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3 w-fit ">
                <div className="mb-3 flex justify-center">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={220}
                        height={220}
                        style={{ height: '400px !important', width: 'auto !important' }}
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                    />
                </div>
                <div>
                    <h4 className="mb-1">{image.title}</h4>
                    <div className="mt-0 mb-3 font-light text-sm">{image.alt}</div>
                    {/* <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag> */}
                    {/* <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        <Button icon="pi pi-search" className="p-button p-button-rounded" />
                        <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded" />
                    </div> */}
                </div>
            </div>
        );
    };

    return (
        <div className=' '>
            <Carousel value={images} numScroll={1} numVisible={3}
                responsiveOptions={responsiveOptions}
                itemTemplate={template}
                autoplayInterval={3000}
                circular={true}
            />
            {/* <div className="">
                <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5}
                    item={itemTemplate} 
                    caption={caption} 
                    showThumbnails={true} showItemNavigators
                    thumbnail={thumbnailTemplate} 
                    style={{ maxHeight: '500px' }} 
                />
            </div> */}
        </div>
    )
}

export default Gallery