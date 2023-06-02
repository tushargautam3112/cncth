import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Tushar',
      email: 'tushar@cnc.com',
      password: bcrypt.hashSync('1234567890'),
      isAdmin: true,
    },
    {
      name: 'Vaibhav',
      email: 'vaibhav@cnc.com',
      password: bcrypt.hashSync('1234567890'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Vanilla Cup',
      slug: 'vanilla-cup',
      category: 'cupcake',
      image: '/images/p1.jpg', // 679px × 829px
      price: 40,
      countInStock: 50,
      brand: 'cncoriginal',
      rating: 4.5,
      numReviews: 10,
      description: 'No non-sense vanilla cupcake made to complement good times.',
    },
    {
      // _id: '2',
      name: 'Vanilla Cake',
      slug: 'vanilla-cake',
      category: 'cake',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 5,
      brand: 'cncoriginal',
      rating: 4.0,
      numReviews: 10,
      description: 'No non-sense vanilla cake made to complement good times.',
    },
    {
      // _id: '3',
      name: 'Strawberry Cup',
      slug: 'strawberry-cup',
      category: 'cupcake',
      image: '/images/p2.jpg',
      price: 50,
      countInStock: 5,
      brand: 'cncoriginal',
      rating: 4.0,
      numReviews: 10,
      description: 'No non-sense strawberry cupcake made to complement good times.',
    },
    {
      // _id: '4',
      name: 'Strawberry Cake',
      slug: 'strawberry-cake',
      category: 'cake',
      image: '/images/p2.jpg',
      price: 300,
      countInStock: 5,
      brand: 'cncoriginal',
      rating: 4.0,
      numReviews: 10,
      description: 'No non-sense strawberry cake made to complement good times.',
    },
  ],
};
export default data;
