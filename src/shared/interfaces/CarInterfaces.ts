export interface CarData {
  cars: Car[];
}

export interface Car {
  id: number;
  brand: string;
  model: string;
  price: number;
  color: CarColor[];
  brandImage: string;
  homeImage: string;
  city: string;
  rentAt: string;
  availableAt: string;
}

export interface CarColor {
  id: number;
  name: string;
  image: string;
}
