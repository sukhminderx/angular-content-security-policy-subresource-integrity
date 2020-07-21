import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../common/interfaces/Product';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit {

  featuredProducts: Array<IProduct> = [];
  constructor() { }

  ngOnInit(): void {
    this.featuredProducts = [{
      id: '111',
      name: 'abcde',
      description: 'dkfhd ddg fgf',
      denomination: 'Rs',
      listPrice: 20,
      setPrice: 30,
      featured: true,
      images: ['https://www.amazon.com/images/I/71WPXY5GhgL._AC_SL1500__AA210_.jpg']
    },{
      id: '22',
      name: 'abcde',
      description: 'dkfhd ddg fgf',
      denomination: 'Rs',
      listPrice: 20,
      setPrice: 30,
      featured: true,
      images: ['https://www.amazon.com/images/I/71WPXY5GhgL._AC_SL1500__AA210_.jpg']
    },{
      id: '3',
      name: 'abcde',
      description: 'dkfhd ddg fgf',
      denomination: 'Rs',
      listPrice: 20,
      setPrice: 30,
      featured: true,
      images: ['https://www.amazon.com/images/I/71WPXY5GhgL._AC_SL1500__AA210_.jpg']
    },{
      id: '4',
      name: 'abcde',
      description: 'dkfhd ddg fgf',
      denomination: 'Rs',
      listPrice: 20,
      setPrice: 30,
      featured: true,
      images: ['https://www.amazon.com/images/I/71WPXY5GhgL._AC_SL1500__AA210_.jpg']
    },{
      id: '5',
      name: 'abcde',
      description: 'dkfhd ddg fgf',
      denomination: 'Rs',
      listPrice: 20,
      setPrice: 30,
      featured: true,
      images: ['https://www.amazon.com/images/I/71WPXY5GhgL._AC_SL1500__AA210_.jpg']
    },{
      id: '6',
      name: 'abcde',
      description: 'dkfhd ddg fgf',
      denomination: 'Rs',
      listPrice: 20,
      setPrice: 30,
      featured: true,
      images: ['https://www.amazon.com/images/I/71WPXY5GhgL._AC_SL1500__AA210_.jpg']
    },
    {
      id: '12',
      name: 'abcde',
      description: 'dkfhd ddg fgf',
      denomination: 'Rs',
      listPrice: 20,
      setPrice: 30,
      featured: true,
      images: ['https://www.amazon.com/images/I/71WPXY5GhgL._AC_SL1500__AA210_.jpg']
    },{
      id: '21',
      name: 'abcde',
      description: 'dkfhd ddg fgf',
      denomination: 'Rs',
      listPrice: 20,
      setPrice: 30,
      featured: true,
      images: ['https://www.amazon.com/images/I/71WPXY5GhgL._AC_SL1500__AA210_.jpg']
    },{
      id: '31',
      name: 'abcde',
      description: 'dkfhd ddg fgf',
      denomination: 'Rs',
      listPrice: 20,
      setPrice: 30,
      featured: true,
      images: ['https://www.amazon.com/images/I/71WPXY5GhgL._AC_SL1500__AA210_.jpg']
    },{
      id: '41',
      name: 'abcde',
      description: 'dkfhd ddg fgf',
      denomination: 'Rs',
      listPrice: 20,
      setPrice: 30,
      featured: true,
      images: ['https://www.amazon.com/images/I/71WPXY5GhgL._AC_SL1500__AA210_.jpg']
    },{
      id: '51',
      name: 'abcde',
      description: 'dkfhd ddg fgf',
      denomination: 'Rs',
      listPrice: 20,
      setPrice: 30,
      featured: true,
      images: ['https://www.amazon.com/images/I/71WPXY5GhgL._AC_SL1500__AA210_.jpg']
    },{
      id: '61',
      name: 'abcde',
      description: 'dkfhd ddg fgf',
      denomination: 'Rs',
      listPrice: 20,
      setPrice: 30,
      featured: true,
      images: ['https://www.amazon.com/images/I/71WPXY5GhgL._AC_SL1500__AA210_.jpg']
    }];
  }

  trackById(index: number, product: IProduct) {
    return product.id;
  }

}
