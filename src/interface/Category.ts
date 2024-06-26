import {  IsBoolean, IsNumber, IsString } from "class-validator"


export class ProductData {
    @IsString()
    name: string;
    @IsNumber()
    price: number;
    @IsString()
    description: string;
    @IsString()
    picture: string;
  }
  
  export class CategoryData {
    @IsString()
    id: string;
    @IsString()
    name: string;
    @IsString()
    description: string;
    @IsBoolean()
    status: boolean;
  }