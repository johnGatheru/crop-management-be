import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoresController } from './stores.controller';
import { StoresService } from './stores.service';
import { Stores } from './stores.entity';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([Stores])],
  controllers: [StoresController],
  providers: [StoresService],
})
export class StoresModule {}
