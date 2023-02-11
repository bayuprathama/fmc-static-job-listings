import clsx from 'clsx'
import Image from 'next/image'

function FilterBar({
  className,
  filterTerms,
  setFilterTerms,
}: {
  className?: string
  filterTerms: string[]
  setFilterTerms: React.Dispatch<React.SetStateAction<string[]>>
}) {
  function removeItem(item: string) {
    setFilterTerms((prev: string[]) => prev.filter((el) => el !== item))
  }
  const filterQuerySet: string[] = Array.from(new Set(filterTerms))
  if (filterTerms.length !== 0) {
    return (
      <div
        className={clsx(
          className,
          'max-w-5xl px-4  py-4 bg-white shadow-filter rounded mx-6 lg:mx-auto  flex justify-between items-center -mt-[32px]'
        )}
      >
        <div className="flex flex-wrap gap-4">
          {filterQuerySet?.map((item) => (
            <div key={item} className="flex items-center">
              <p className="px-2 py-1 font-semibold rounded-l text-primary-dark-cyan bg-light-cyan-filter">
                {item}
              </p>
              <button
                onClick={() => removeItem(item)}
                className="px-2 py-2 rounded-r bg-primary-dark-cyan hover:text-light-cyan-filter hover:bg-very-dark-gray-cyan"
              >
                <Image
                  src="/images/icon-remove.svg"
                  alt="remove icon"
                  width={14}
                  height={14}
                />
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={() => setFilterTerms([])}
          className="font-semibold hover:underline max-w-max text-primary-dark-cyan"
        >
          Clear
        </button>
      </div>
    )
  } else {
    return <div className="bg-transparent h-[64px] -mt-[32px]"></div>
  }
}
export default FilterBar
