import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService){}

    async validateUser(admin): Promise<any>{
        const user = await this.userService.findUser(admin.username, admin.password);

        if(user && user.password ===admin.password){
            const{password, username, ...rest}=user;
            this.login(admin)
            return rest;
        }
        return null;
    }
    async login(user:any){
        const payload = {name: user.name, sub:user.id};
        return{
            access_token: this.jwtService.sign(payload),
        };
    }
}
