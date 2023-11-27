import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { STATUS_CODES } from 'http';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findUser(username, password);

    if (user && user.password === password) {
      const { password, username, ...rest } = user;
      // this.login(admin)
      return rest;
    } else {
      throw new HttpException(
        'error, check email or password used',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async login(user: any) {
    const payload = { name: user.username, sub: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
