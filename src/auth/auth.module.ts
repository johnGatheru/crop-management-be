import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { UserService } from 'src/user/user.service';


import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  providers: [AuthService,LocalStrategy],
  imports: [ UserService,PassportModule, JwtModule.register({secret:'SECRET', signOptions: {expiresIn: '60s'},})],
  exports: [AuthService]
})
export class AuthModule {}
