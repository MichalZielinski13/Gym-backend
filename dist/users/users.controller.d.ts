import { UsersService } from "./users.service";
import { CreateUserDto } from "./users.dto";
import { User } from "./users.schema";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    update(id: string, updateUserDto: CreateUserDto): Promise<User>;
    delete(id: string): Promise<User>;
}
