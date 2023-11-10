export const useGetClassnames = (classnames: any[]) => {
  const cleanClassnames = classnames.filter(Boolean)

  const classnamesString = cleanClassnames.toString().replace(/,/g, ' ')

  return classnamesString
}
