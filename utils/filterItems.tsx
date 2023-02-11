import { JobList } from '@/app/page'
export function filterData(data: any[], query: string[]) {
  const filtered = data.filter((item: JobList) => {
    const tags = [item.role, item.level, ...item.languages]
    return query.every((term) => {
      return tags.includes(term)
    })
  })
  return filtered
}
