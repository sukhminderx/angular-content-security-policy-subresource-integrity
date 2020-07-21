import { Component, OnInit } from '@angular/core';
import { ILandingPage } from '../common/interfaces/LandingPage';

@Component({
  selector: 'app-landing',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  landingPageData: ILandingPage = {
    title: 'ranchkumar',
    image: 'https://cdn.pixabay.com/photo/2020/05/16/10/18/landscape-5176890_960_720.jpg',
    tagline: 'This is some good tagline for the shop',
    description: 'Let me explain what we do in this shop. Ummm we do this we do that we even do something like that',
    featuredProducts: []
  };
  constructor() { }

  ngOnInit(): void {
  }

}
