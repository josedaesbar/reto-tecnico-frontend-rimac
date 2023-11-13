export const getCarName = () => {
  const brands = [
    'Volkswagen',
    'Toyota',
    'Ford',
    'Chevrolet',
    'Honda',
    'Nissan',
    'BMW',
    'Mercedes-Benz',
    'Audi',
    'Hyundai',
  ]
  const year = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]
  const model = [
    'Golf',
    'Camry',
    'Focus',
    'Cruze',
    'Civic',
    'Altima',
    '3 Series',
    'E-Class',
    'A4',
    'Elantra',
  ]

  const brandRandom = brands[Math.floor(Math.random() * brands.length)]
  const yearRandom = year[Math.floor(Math.random() * year.length)]
  const modelRandom = model[Math.floor(Math.random() * model.length)]

  return brandRandom + ' ' + yearRandom + ' ' + modelRandom
}
