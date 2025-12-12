export const CATEGORIES = [
  { id: 1, name: 'Flores', icon: 'rose-outline' },
  { id: 2, name: 'Chocolates', icon: 'nutrition-outline' }, // nutrition is okay, or gift
  { id: 3, name: 'Bebidas', icon: 'wine-outline' },
  { id: 4, name: 'Kids', icon: 'rocket-outline' },
  { id: 5, name: 'Beleza', icon: 'color-wand-outline' },
  { id: 6, name: 'Eletrônicos', icon: 'headset-outline' },
  { id: 7, name: 'Livros', icon: 'book-outline' },
];

export const SHOPS = [
  {
    id: 1,
    name: 'Giuliana Flores',
    category: 'Flores e Bouquets',
    rating: 4.8,
    deliveryTime: '60 min',
    image: 'https://images.unsplash.com/photo-1563241527-30058e5a7e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    badges: ['Entrega Grátis'],
    deliveryFee: 'Grátis',
  },
  {
    id: 2,
    name: 'Cacau Show',
    category: 'Chocolates e Doces',
    rating: 4.9,
    deliveryTime: '45 min',
    image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    badges: ['Cupom Disponível'],
    deliveryFee: 'R$ 5,90',
  },
  {
    id: 3,
    name: 'ToyMania',
    category: 'Brinquedos',
    rating: 4.7,
    deliveryTime: '90 min',
    image: 'https://images.unsplash.com/photo-1558877385-81a1c7e67d72?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    badges: [],
    deliveryFee: 'R$ 12,00',
  },
  {
    id: 4,
    name: 'Adega Express',
    category: 'Bebidas e Vinhos',
    rating: 4.6,
    deliveryTime: '30 min',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    badges: ['Entrega Grátis', '+18'],
    deliveryFee: 'Grátis',
  },
  {
    id: 5,
    name: 'Beauty Box',
    category: 'Perfumaria e Beleza',
    rating: 4.9,
    deliveryTime: 'Same Day',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdd403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    badges: [],
    deliveryFee: 'R$ 7,50',
  },
];

export const USER = {
  name: 'Jules',
  email: 'jules@email.com',
  avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  addresses: [
    { label: 'Casa', address: 'Rua das Flores, 123' },
    { label: 'Trabalho', address: 'Av. Paulista, 1000' }
  ]
};

export const PAYMENT_METHODS = [
  {
    id: '1',
    type: 'CREDIT_CARD',
    brand: 'Mastercard',
    last4: '4589',
    name: null, // Let the UI handle the name from context
    icon: 'card-outline',
  },
  {
    id: '2',
    type: 'CREDIT_CARD',
    brand: 'Visa',
    last4: '1234',
    name: null,
    icon: 'card-outline',
  },
  {
    id: 'pix',
    type: 'PIX',
    name: 'Pix',
    icon: 'qr-code-outline',
  }
];

export const ORDER_SUMMARY = {
  subtotal: 'R$ 149,90',
  delivery: 'R$ 12,00',
  discount: '- R$ 10,00',
  total: 'R$ 151,90',
};
