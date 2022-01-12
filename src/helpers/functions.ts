export const getCalcRating = (rating: number): number => {
  if (typeof rating !== 'number') {
    return 0;
  }

  return rating > 5 ? Math.round((rating / 2) * 10) / 10 : rating
}