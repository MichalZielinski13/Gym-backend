import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./users.schema";
import { CreateUserDto } from "./users.dto";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private catModel: Model<User>) {}
  getById() {
    return { title: "Hello World!" };
  }
  async create(createCatDto: CreateUserDto): Promise<User> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }
}
