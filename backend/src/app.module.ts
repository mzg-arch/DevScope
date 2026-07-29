import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RepositoriesModule } from './repositories/repositories.module';
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
  ConfigModule.forRoot({
    isGlobal: true,
  }),
  RepositoriesModule,
],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
