import React, { useRef, useState } from 'react'
import Cards from './Cards'

function Foreground() {
    const ref = useRef(null)
    const data = [
        {
            desc: "Lorem ipsum dolor sit amet consectetur",
            filesize: '0.9 MB',
            close: true,
            tag: {
                isOpen: false,
                tagTitle: "Download",
                tagColor: "green"
            }
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur",
            filesize: '0.9 MB',
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "Download",
                tagColor: "green"
            }
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur",
            filesize: '0.9 MB',
            close: true,
            tag: {
                isOpen: false,
                tagTitle: "Download",
                tagColor: "green"
            }
        }
    ]
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-screen flex gap-10 flex-wrap p-6'>
        {data.map((items, index) => (
            <Cards data={items} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground
