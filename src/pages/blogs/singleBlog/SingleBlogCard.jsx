import React from 'react'
import { formatDate } from '../../../utils/formateDate';
import edjsHTML from 'editorjs-html';


const edjsParser = edjsHTML();
const SingleBlogCard = ({ blog }) => {
    const { title, content, coverImg, rating, author, createdAt } = blog || {};
    const htmlContent = edjsParser.parse(content).join('');
    return (
        <div className='bg-white p-8'>
            <div>
                <h1 className='md:text-4xl text-3xl font-medium mb-4'>{title}</h1>
                <p className='mb-6'>{formatDate(createdAt)} by <span className='text-blue-400 cursor-pointer'>{author?.role}</span></p>
            </div>
            <div>
                <img src={coverImg} alt="Cover Image" className='w-full md:h-[520px] bg-cover' />
            </div>
            {/* blog details */}
            <div className='mt-8 space-y-4'>
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} className='space-y-3 editorjsdiv' />
                <div>
                    <span className='text-lg font-medium'>Rating: </span>
                    <span>{rating} (based on 2,370 reviews) </span>
                </div>
            </div>
        </div>
    )
}

export default SingleBlogCard