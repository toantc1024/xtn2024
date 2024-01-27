import React from 'react'
import Image from 'next/image';
import SectionWrapper from '../SectionWrapper';
import Image2 from '../assets/static/images/z5070957363291_7ebe881967e5d7ed33bb19bbe5878322.jpg';

const InfoItem = ({content, isReversed}) => {
    return <div className={` ${isReversed ? "flex-row-reverse" : ""} rounded-lg px-24 py-2 bg-emerald-400 m-4 rounded-lg flex items-center justify-between gap-4`}>
        <div className="bg-red-400">
            <Image alt="Ảnh giới thiệu" src={Image2} width={800} height={400}/>
        </div>
        <div>
            <h2 className='text-8xl'>
            {content}. Lorem ipsum!
            </h2>
            <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi exercitationem enim cum nisi voluptatum recusandae quibusdam sunt, ipsum labore magni provident dicta autem vitae in voluptates. Autem distinctio ad facilis!</p>
        </div>
    </div>
}

const Info = () => {
  return (
    <SectionWrapper background={"bg-yellow-400"}>
        <div className='text-6xl'>
            <h2 className='text-slate-800 bg-emerald-500  rotate-[-10deg] rounded-lg p-4'>
            Xã Kiểng Phước có gì?
            </h2>
        </div>
        <div className='h-full w-full px-24 flex items-center justify-center gap-8 flex-col'>
            {[...new Array(5)].map((_, i) => <InfoItem key={i} content={i} isReversed={i%2==0}/>)

            }
        </div>
    </SectionWrapper>
    )
}

export default Info