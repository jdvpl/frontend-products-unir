import { IsArray, IsBoolean, IsNumber, IsString } from "class-validator"


export class ProductData {
    @IsString()
    name: string;
    @IsNumber()
    price: number;
    @IsString()
    description: string;
  }
  
  export class CategoryData {
    @IsString()
    name: string;
    @IsString()
    description: string;
    @IsBoolean()
    status: boolean;
    @IsBoolean()
    createProduct: boolean;
    @IsArray()
    products: ProductData[];
    @IsString()
    newProductName: string;
    @IsNumber()
    newProductPrice: number;
    @IsString()
    newProductDescription: string;
  }