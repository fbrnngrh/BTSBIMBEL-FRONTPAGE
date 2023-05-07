import Link from 'next/link'
import React from 'react'
import RenderItem from './RenderItem'

export default function ListCourses({data}) {
  return (
    <>
     <div className="flex justify-between item-center">
        <div className="w-auto">
            <h2 className="text-lg text-gray-600">New Classes</h2>
            <h3 className='text-xl text-accent-2'>
                Summer <span className='text-secondary'>Productive</span>
            </h3>
        </div>
        <div className="w-auto">
            <Link href="/courses" className='text-gray-600 hover:underline text-md' >
                View All Courses
            </Link>
        </div>
     </div>
     <div className="flex justify-start items-center -mx-4 mt-6">
            {
                data?.length > 0 ? data.map((item, index) => {
                    return <RenderItem item={item} key={index}></RenderItem>
                }) : <div className='w-full text-center py-12 '>
                    No Item Found
                </div>
            }
     </div>
    </>
  )
}
