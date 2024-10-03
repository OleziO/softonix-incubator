interface IJobOpening {
  title: string
  id: string
  departments: string[]
  isClosed: boolean
  url: string
}
interface IDepartment {
  name: string
  value: string
}

interface IGroupedJobs {
  name: string
  items: IJobOpening[]
}
