import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersModule } from "./users/users.module";

@Module({
  //import bazy danych
  imports: [MongooseModule.forRoot("mongodb://localhost/gym"), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
