import { IsString } from "class-validator"


export class LoginInterface{
    @IsString()
    username: string
    @IsString()
    password: string
}