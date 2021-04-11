export interface Todo {
  _id?: string,
  title: string,
  description: string
  beginDate: Date,
  endDate: Date,
  status: number,
  priority: number
}
