import { loginBodyDto } from './loginBodyDto';
import { LoginService } from './login.service';
export declare class LoginController {
    private loginService;
    constructor(loginService: LoginService);
    create(userBody: loginBodyDto): Promise<string>;
}
