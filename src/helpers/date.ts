function parseDate (date: Date | string) {
  const isToday = new Date().getDay() === new Date(date).getDay()
  const time = new Date(date).getHours()
  if (isToday) return `Today, ${time}hs.`

  return new Date(date).toLocaleDateString('es')
}

export { parseDate }