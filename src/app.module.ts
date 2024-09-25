import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Cambia esto al tipo de base de datos que estés utilizando (mysql, postgres, etc.)
      host: 'localhost', // Cambia esto si tu base de datos está en otro lugar
      port: 3306, // Cambia esto si usas un puerto diferente
      username: 'root', // Tu usuario de base de datos
      password: '', // Tu contraseña de base de datos
      database: 'nest_auth', // El nombre de tu base de datos
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Ajusta esto según la estructura de tus entidades
      synchronize: true, // Solo para desarrollo, evita usarlo en producción
    }),
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
