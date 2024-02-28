import {
  Body,
  Controller,
  Param,
  Post,
  UseGuards,
  Request,
  Req,
} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { User } from './user.entity';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Users operations')
@Controller('user')
export class UserController {
  // constructor(public authService: AuthService) {}
  // async findUsername(@Body() admin: User) {
  //   return await this.authService.validateUser(admin.username, admin.password);
  // }
}
