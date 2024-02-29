import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from 'config';

import { ApplicantsModule } from './applicants/applicants.module';
import { StoresModule } from './stores/stores.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { FormsModule } from './forms/forms.module';
import { StockModule } from './stock/stock.module';
import { ProductsModule } from './products/products.module';
import { PhotostoresModule } from './photostores/photostores.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ApplicantsModule,
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        //spread operator to add the database object from the config file 'config.ts'
        // ...config.get('database'),
        type: 'postgres',
        database: 'railway',
        username: 'postgres',
        port: 27746,
        password: 'D3df4-DFgFfdcb-4CfBa4b43CgfaD43b',
        host: 'viaduct.proxy.rlwy.net',
        // entities: ['src/**/*.entity{.ts,.js}'],
        dropSchema: true,
        synchronize: true,
        autoLoadEntities: true,
      }),
    }),
    StoresModule,
    OrderModule,
    FormsModule,
    StockModule,
    ProductsModule,
    PhotostoresModule,
  ],
})
export class AppModule {}
