import React, { useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";


const JobListing1 = ({job}) => {
  const [showMore, setShowMore] = useState(0);

  const toogleShowMore = () =>{
    setShowMore((prev)=> !prev)
  }
  return (
    <div>
      <div className="bg-white rounded-xl shadow-md relative">
                  <div className="p-4">
                    <div className="mb-6">
                      <div className="text-gray-600 my-2">{job.type}</div>
                      <h3 className="text-xl font-bold">{job.title}</h3>
                    </div>
                    <div className="mb-5">
                      {/* condition to show only first 90 words of the description  */}
                      {
                        !showMore ? job.description.substring(0, 90) + '...' : job.description
                      }
                    </div>
                    <button onClick={toogleShowMore}  className='text-indigo-500 mb-5 hover:text-indigo-600'>
                      {
                        showMore ? 'Show Less' : 'Show More'
                      }
                    </button>
                    <h3 className="text-indigo-500 mb-2">{job.salary} /Year</h3>
                    <div className="border border-gray-100 mb-5" />
                    <div className="flex flex-col lg:flex-row justify-between mb-4">
                      <div className="text-orange-700 mb-3">
                        <FaLocationDot  className="inline text-lg mb-1 mr-1" />
                        {job.location}
                      </div>
                      <a
                        href={`/jobs/${job.id}`}
                        className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
    </div>
  )
}

export default JobListing1
