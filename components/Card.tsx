'use client'

import Image from 'next/image'
import clsx from 'clsx'
import { JobList } from '@/app/page'

type CompanyNameProps = {
  isNew: boolean
  isFeatured: boolean
  company: string
}

function CompanyName({ isFeatured, company, isNew }: CompanyNameProps) {
  return (
    <div className="flex items-center font-bold text-primary-dark-cyan">
      <h2 className="inline-block mr-6 lg:text-lg">{company} </h2>
      <div className="flex gap-2">
        {isNew && (
          <span className="inline-block px-2 py-1 text-sm rounded-2xl bg-primary-dark-cyan text-light-cyan-filter">
            NEW!
          </span>
        )}
        {isFeatured && (
          <span className="inline-block px-2 py-1 text-sm bg-very-dark-gray-cyan rounded-2xl text-light-cyan-filter">
            FEATURED
          </span>
        )}
      </div>
    </div>
  )
}

function Card({
  jobList,
  handleClickTags,
}: {
  jobList: JobList
  handleClickTags: Function
}) {
  const tags = [jobList.role, jobList.level, ...jobList.languages]
  return (
    <div
      className={clsx(
        jobList.featured ? 'border-primary-dark-cyan' : 'border-transparent',
        'bg-white relative flex flex-col lg:flex-row lg:justify-between lg:items-center px-6 py-6 space-y-4 border-l-[6px] rounded shadow-cyan'
      )}
    >
      <div className="border-b-2 lg:border-none lg:gap-6 lg:flex lg:items-center">
        <div className="absolute -top-[25px] w-[50px] aspect-square lg:w-[90px] lg:static">
          <Image src={jobList.logo} alt="company logo" width={90} height={90} />
        </div>
        <div className="pt-2 space-y-2 ">
          <CompanyName
            company={jobList.company}
            isFeatured={jobList.featured}
            isNew={jobList.new}
          />
          <a className="inline-block font-bold text-gray-700 cursor-pointer hover:text-primary-dark-cyan">
            {jobList.position}
          </a>
          <p className="flex items-center gap-4 pb-4 font-medium text-dark-gray-cyan">
            <span>{jobList.postedAt}</span> • <span>{jobList.contract}</span> •{' '}
            <span>{jobList.location}</span>
          </p>
        </div>
      </div>
      <div>
        <ul className="flex flex-wrap gap-6">
          {tags.map((item) => (
            <li key={item}>
              <button
                value={item}
                onClick={(e) => handleClickTags(e)}
                className="inline-block px-2 py-1 font-semibold rounded text-primary-dark-cyan bg-light-cyan-filter hover:text-light-cyan-filter hover:bg-primary-dark-cyan"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Card
