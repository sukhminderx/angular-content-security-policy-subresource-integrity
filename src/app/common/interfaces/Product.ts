export interface IProduct {
    id: string;
    name: string;
    description: string;
    denomination: string;
    listPrice: number;
    setPrice: number;
    featured: boolean;
    images: Array<string>;
}