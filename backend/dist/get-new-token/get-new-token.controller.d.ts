import { JwtService } from '@nestjs/jwt';
export declare class GetNewTokenController {
    private jwtService;
    constructor(jwtService: JwtService);
    getNewToken(request: Request): Promise<{
        access_token: string;
    }>;
}
