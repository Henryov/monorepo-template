import { IsString, Max, Min } from 'class-validator'
export class LoginDto {

    @IsString()
    @Min(4)
    username: string

    @IsString()
    @Min(6)
    @Max(16)
    password: string
}