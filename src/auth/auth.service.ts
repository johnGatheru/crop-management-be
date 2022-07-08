import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
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
    }
    return null;
  }

  async login(user: any) {
    const payload = { name: user.username, sub: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
