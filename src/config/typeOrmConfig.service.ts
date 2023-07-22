import { Injectable } from '@nestjs/common/decorators';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { User } from 'src/users/user.model';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    console.log(this.configService.get('root'));

    const {
      database: {
        type,
        logging,
        host,
        port,
        username,
        password,
        database,
        autoLoadEntities,
        synchronize,
      },
    } = this.configService.get('database');

    return {
      type,
      logging,
      host,
      port,
      username,
      password,
      database,
      entities: [User],
      autoLoadEntities,
      synchronize,
    };
  }
}
