import { RegBodyDto } from './regBodyDto';
import { UsersService } from 'src/users/users.service';
export declare class RegController {
    private usersService;
    constructor(usersService: UsersService);
    create(regBody: RegBodyDto): Promise<{
        message: string;
    }>;
}
