import { UsersService } from "./users.service";
import { CreateUserDto } from "./users.dto";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getById(): {
        title: string;
    };
    create(createUserDto: CreateUserDto): Promise<import("./users.schema").User>;
}
