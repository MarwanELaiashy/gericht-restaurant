import images from './images';

const foods = [
  {
    title: 'Koshary',
    price: '$8',
    tags: 'EG | Plate',
  },
  {
    title: 'Molokhia',
    price: '$10',
    tags: 'EG | Bowl',
  },
  {
    title: 'Fattah',
    price: '$12',
    tags: 'EG | Plate',
  },
  {
    title: 'Stuffed Pigeons',
    price: '$15',
    tags: 'EG | Plate',
  },
  {
    title: 'Taameya (Falafel)',
    price: '$5',
    tags: 'EG | 6 pieces',
  },
];

const freshJuices = [
  {
    title: 'Mango Juice',
    price: '$4',
    tags: 'Fresh | 300 ml',
  },
  {
    title: 'Pomegranate Juice',
    price: '$5',
    tags: 'Fresh | 300 ml',
  },
  {
    title: 'Guava Juice',
    price: '$3',
    tags: 'Fresh | 300 ml',
  },
  {
    title: 'Orange Juice',
    price: '$4',
    tags: 'Fresh | 300 ml',
  },
  {
    title: 'Lemon Mint Juice',
    price: '$4',
    tags: 'Fresh | 300 ml',
  },
];

const hotDrinks = [
  {
    title: 'Egyptian Tea',
    price: '$2',
    tags: 'EG | Cup',
  },
  {
    title: 'Mint Tea',
    price: '$2.5',
    tags: 'EG | Cup',
  },
  {
    title: 'Sahlab',
    price: '$3',
    tags: 'EG | Cup',
  },
  {
    title: 'Karkadeh (Hibiscus Tea)',
    price: '$2',
    tags: 'EG | Cup',
  },
  {
    title: 'Arabic Coffee',
    price: '$2.5',
    tags: 'EG | Cup',
  },
];


const deserts = [
  {
    title: 'Basbousa',
    price: '$4',
    tags: 'EG | Piece',
  },
  {
    title: 'Baklava',
    price: '$5',
    tags: 'EG | Piece',
  },
  {
    title: 'Konafa',
    price: '$6',
    tags: 'EG | Piece',
  },
  {
    title: 'Om Ali',
    price: '$5',
    tags: 'EG | Bowl',
  },
  {
    title: 'Rice Pudding (Roz Bel Laban)',
    price: '$4',
    tags: 'EG | Bowl',
  },
];


const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { foods, freshJuices, hotDrinks, deserts, awards };
