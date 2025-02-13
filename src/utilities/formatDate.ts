export const formatDate = (date: Date) => {
  const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
  return localDate.toISOString().split('T')[0]
}
