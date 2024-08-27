import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
export declare class GetNewTokenController {
    private jwtService;
    private configService;
    constructor(jwtService: JwtService, configService: ConfigService);
    getNewToken(request: CustomRequest): Promise<{
        access_token: string;
    }>;
}
interface CustomRequest extends Request {
    user: {
        sub: number;
        username: string;
    };
}
export {};
