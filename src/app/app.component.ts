import { Component } from '@angular/core';
import { Product } from './models/product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  products: Product[] = [
    {
      id: '01',
      name: 'El mejor juguete',
      price: 565,
      image: '../assets/images/toy.jpg',
    },
    {
      id: '02',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: '../assets/images/bike.jpg',
    },
    {
      id: '03',
      name: 'Colección de albums',
      price: 34,
      image: '../assets/images/album.jpg',
    },
    {
      id: '04',
      name: 'Mis libros',
      price: 23,
      image: '../assets/images/books.jpg',
    },
    {
      id: '05',
      name: 'Casa para perro',
      price: 34,
      image: '../assets/images/house.jpg',
    },
    {
      id: '06',
      name: 'Gafas',
      price: 3434,
      image: '../assets/images/glasses.jpg',
    },
  ];

  imgParent = '';
  showImg = true;
  onLoaded(img: string) {
    console.log('log padre', img);
  }
  toggleImg() {
    this.showImg = !this.showImg;
  }
}
