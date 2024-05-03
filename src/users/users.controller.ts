import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./users.dto";

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getById() {
    return this.usersService.getById();
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}
