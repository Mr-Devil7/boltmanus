export interface Product {
  id: string;
  name: string;
  code: string;
  price: number;
  description: string;
  image: string;
  category: string;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}