import { GetCategoryService } from './getcategory.service';
export declare class GetCategoryController {
    private getCategoryService;
    constructor(getCategoryService: GetCategoryService);
    findAll(): Promise<{
        id: number;
        name: string | null;
    }[] | null[]>;
}
