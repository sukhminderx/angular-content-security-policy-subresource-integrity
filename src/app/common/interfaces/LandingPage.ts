import { IProduct } from './Product';

export interface ILandingPage {
    image: string;
    title: string;
    tagline: string;
    description: string;
    featuredProducts: Array<IProduct>;
}