import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Cart from './Cart';
import SignIn from './SignIn';
import ProductPage from './ProductPage';

const PRODUCTS = [
  {
    id: 1,
    name: 'Product 1',
    price: 19.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
    description: 'High-quality electronic gadget with advanced features and sleek design. Perfect for tech enthusiasts.',
    photos: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80'
    ]
  },
  {
    id: 2,
    name: 'Product 2',
    price: 19.99,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80',
    description: 'A captivating book that takes you on a journey through time and imagination. Great for all ages.',
    photos: [
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80'
    ]
  },
  {
    id: 3,
    name: 'Product 3',
    price: 19.99,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80',
    description: 'Stylish and comfortable clothing item, perfect for everyday wear or special occasions.',
    photos: [
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80'
    ]
  },
  {
    id: 4,
    name: 'Product 4',
    price: 19.99,
    category: 'Home & Kitchen',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    description: 'Essential home and kitchen item to make your life easier and more enjoyable.',
    photos: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80'
    ]
  },
  {
    id: 5,
    name: 'Product 5',
    price: 19.99,
    category: 'Toys',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    description: 'Fun and engaging toy for kids of all ages. Safe, durable, and designed for hours of play.',
    photos: [
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1511453672302-8b7b0b7c7c5c?auto=format&fit=crop&w=400&q=80'
    ]
  },
  {
    id: 6,
    name: 'Product 6',
    price: 19.99,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80',
    description: 'High-performance sports equipment for athletes and fitness enthusiasts.',
    photos: [
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1505843277352-5b7d7b7c7c5c?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80'
    ]
  },
],