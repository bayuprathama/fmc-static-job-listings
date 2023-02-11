'use client'

import Card from '@/components/Card'
import Header from '@/components/Header'
import FilterBar from '@/components/FilterBar'
import React, { useEffect, useState } from 'react'
import { filterData } from '../utils/filterItems'

export type JobList = {
  id: number
  company: string
  logo: string
  new: boolean
  featured: boolean
  position: string
  role: string
  level: string
  postedAt: string
  contract: string
  location: string
  languages: string[]
  tools: string[]
}

export default function Home() {
  const [data, setData] = useState<JobList[]>([])
  const [filterTerms, setFilterTerms] = useState<string[]>([])
  const [filteredItems, setFilteredItems] = useState<JobList[]>([])

  function handleClickTags(e: React.MouseEvent<HTMLButtonElement>): void {
    const target = e.target as HTMLButtonElement
    setFilterTerms((prev) => [...prev, target.innerText])
  }

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  useEffect(() => {
    if (data.length !== 0 && filterTerms.length !== 0) {
      setFilteredItems(filterData(data, filterTerms))
    } else {
      setFilteredItems(data)
    }
  }, [data, filterTerms])

  return (
    <main className={`pb-20`}>
      <Header />
      <FilterBar
        className=""
        filterTerms={filterTerms}
        setFilterTerms={setFilterTerms}
      />
      <div className="flex flex-col max-w-5xl gap-12 px-6 mx-auto lg:gap-8 pt-14 lg:px-0">
        {filteredItems.map((item: JobList) => (
          <Card
            jobList={item}
            key={item.id}
            handleClickTags={handleClickTags}
          />
        ))}
      </div>
    </main>
  )
}
