import { Injectable } from '@angular/core';

export interface Space {
  id: number;
  name: string;
  price: string;
  size: string;
  image: string;
  rating: number;
}

@Injectable({
  providedIn: 'root'
})
export class SpaceService {
  // Datos de prueba basados en tu prototipo JSX
  private spaces: Space[] = [
    {
      id: 1,
      name: 'Bodega en Manga',
      price: '$35.000/día',
      size: '5 m²',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Garaje en Bocagrande',
      price: '$28.000/día',
      size: '8 m²',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop',
      rating: 4.9
    },
    {
      id: 3,
      name: 'Mini Bodega Centro',
      price: '$40.000/día',
      size: '10 m²',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Cuarto útil en Crespo',
      price: '$20.000/día',
      size: '4 m²',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop',
      rating: 4.5
    },
    {
      id: 5,
      name: 'Garaje cubierto en El Laguito',
      price: '$30.000/día',
      size: '12 m²',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1200&auto=format&fit=crop',
      rating: 4.8
    },
    {
      id: 6,
      name: 'Bodega amplia en Pie de la Popa',
      price: '$55.000/día',
      size: '20 m²',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200&auto=format&fit=crop',
      rating: 4.6
    },
    {
      id: 7,
      name: 'Habitación vacía en Getsemaní',
      price: '$25.000/día',
      size: '9 m²',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
      rating: 4.9
    },
    {
      id: 8,
      name: 'Sótano seguro en Castillogrande',
      price: '$45.000/día',
      size: '15 m²',
      image: 'https://images.unsplash.com/photo-1558227691-41ea78d1f631?q=80&w=1200&auto=format&fit=crop',
      rating: 5.0
    },
    {
      id: 9,
      name: 'Local cerrado en San Diego',
      price: '$60.000/día',
      size: '25 m²',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop',
      rating: 4.7
    },
    {
      id: 10,
      name: 'Mini bodega en Turbaco',
      price: '$15.000/día',
      size: '6 m²',
      image: 'https://images.unsplash.com/photo-1622473590773-f588134b6ce7?q=80&w=1200&auto=format&fit=crop',
      rating: 4.3
    },
    {
      id: 11,
      name: 'Garaje compartido en Manga',
      price: '$18.000/día',
      size: '5 m²',
      image: 'https://images.unsplash.com/photo-1530569673472-307dc017a82d?q=80&w=1200&auto=format&fit=crop',
      rating: 4.4
    },
    {
      id: 12,
      name: 'Bodega industrial en Mamonal',
      price: '$90.000/día',
      size: '50 m²',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
      rating: 4.8
    },
    {
      id: 13,
      name: 'Cuarto de herramientas en Los Alpes',
      price: '$12.000/día',
      size: '3 m²',
      image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=1200&auto=format&fit=crop',
      rating: 4.2
    },
    {
      id: 14,
      name: 'Habitación primer piso en Marbella',
      price: '$22.000/día',
      size: '8 m²',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
      rating: 4.6
    },
    {
      id: 15,
      name: 'Sótano residencial en Cabrero',
      price: '$35.000/día',
      size: '14 m²',
      image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop',
      rating: 4.7
    },
    {
      id: 16,
      name: 'Cuarto útil premium Bocagrande',
      price: '$40.000/día',
      size: '10 m²',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
      rating: 4.9
    },
    {
      id: 17,
      name: 'Espacio para cajas La Providencia',
      price: '$10.000/día',
      size: '2 m²',
      image: 'https://images.unsplash.com/photo-1578592391643-585808bfdff2?q=80&w=1200&auto=format&fit=crop',
      rating: 4.1
    },
    {
      id: 18,
      name: 'Garaje abierto seguro El Recreo',
      price: '$25.000/día',
      size: '15 m²',
      image: 'https://images.unsplash.com/photo-1495433324511-bf8e92934d90?q=80&w=1200&auto=format&fit=crop',
      rating: 4.5
    },
    {
      id: 19,
      name: 'Local almacenamiento Zaragocilla',
      price: '$30.000/día',
      size: '12 m²',
      image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1200&auto=format&fit=crop',
      rating: 4.4
    },
    {
      id: 20,
      name: 'Gran bodega en Ternera',
      price: '$70.000/día',
      size: '40 m²',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
      rating: 4.8
    },
    {
      id: 21,
      name: 'Cuarto extra apartamento Crespo',
      price: '$20.000/día',
      size: '7 m²',
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop',
      rating: 4.6
    },
    {
      id: 22,
      name: 'Garaje doble en Manga',
      price: '$50.000/día',
      size: '24 m²',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1200&auto=format&fit=crop',
      rating: 4.9
    },
    {
      id: 23,
      name: 'Mini bodega climatizada Centro',
      price: '$65.000/día',
      size: '8 m²',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop',
      rating: 5.0
    }
  ];

  constructor() { }

  getFeaturedSpaces(): Space[] {
    return this.spaces;
  }

  // Añade este método en space.service.ts
  getSpaceById(id: number): Space | undefined {
    return this.spaces.find(space => space.id === id);
  }
}