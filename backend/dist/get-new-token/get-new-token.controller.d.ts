import { JwtService } from '@nestjs/jwt';
import { refreshBodyDto } from './refreshBodyDto';
export declare class GetNewTokenController {
    private jwtService;
    constructor(jwtService: JwtService);
    getNewToken(refreshBody: refreshBodyDto): Promise<{
        access_token: string;
    }>;
}
