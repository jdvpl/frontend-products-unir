import { IsString } from "class-validator"


export class LoginInterface{
    @IsString()
    username: string
    @IsString()
    password: string
}

export class RegisterInterface{
    @IsString()
    name: string
    @IsString()
    username: string
    @IsString()
    lastName: string
    @IsString()
    password: string

}