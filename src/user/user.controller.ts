import { Body, Controller, Param, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { User } from './user.entity';


@Controller('user')
export class UserController {
    constructor(public authService: AuthService){}
  
    @UseGuards(LocalAuthGuard)
    @Post()
   
    // login(@Request() req):any{
    //     return req.user
    //   }
    async findUsername(@Body() admin:User){
        return await this.authService.validateUser(admin)
    }
    
}


