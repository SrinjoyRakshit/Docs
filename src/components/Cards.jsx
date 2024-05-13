import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { motion } from 'framer-motion'

function Cards({data, reference}) {
  return (
      <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} dragElastic={0.2} className='relative w-60 h-72 rounded-[2rem] bg-zinc-900/90 text-white py-10 px-5 overflow-hidden flex-shrink-0'>
        <FaRegFileAlt />
        <p className='text-md mt-5 font-medium leading-tight'>
            {data.desc}
        </p>
        <div className='absolute w-full bottom-0 left-0'>
            <div className='flex justify-between items-center mb-5 px-8 py-3'>
                <h5>{data.filesize}</h5>
                <span className='w-6 h-6 bg-zinc-200 rounded-full flex items-center justify-center'>
                    {data.close ? <IoMdCloseCircleOutline size="1em" color='#000' /> : <MdDownload size="0.7em" color='#000'/>}
                </span>
            </div>
            {
                data.tag.isOpen && (
                    <div className={`w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"}`}>
                        <h3 className='text-xl text-center'>
                            {data.tag.tagTitle}
                        </h3>
                    </div>
                )
            }
        </div>
      </motion.div>
  )
}

export default Cards
