export function formatCookTime(minutes: number | undefined): string {
  if (!minutes) {
    return 'Onbekend'
  }

  if (minutes < 60) {
    return `${minutes} minuten`
  }

  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60

  if (remainingMinutes === 0) {
    return `${hours} ${hours === 1 ? 'uur' : 'uur'}`
  }

  return `${hours} ${hours === 1 ? 'uur' : 'uur'} en ${remainingMinutes} ${remainingMinutes === 1 ? 'minuut' : 'minuten'}`
}
