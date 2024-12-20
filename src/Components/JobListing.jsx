import React from 'react'
import Jobs from '../jobs.json'
import JobListing1 from './JobListing1'

const Joblisting = ({isHome = false}) => {
  const JobListings = isHome ? Jobs.slice(0, 3) : Jobs;
  return (
    <div>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {
              isHome ? 'Recent Jobs' : 'Browse Jobs'
            }
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
              JobListings.map((job) => (
                <JobListing1 key={job.id} job={job}/>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Joblisting
