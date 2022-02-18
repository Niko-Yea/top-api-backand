import { IsEnum } from 'class-validator';
import { TopLevelCategory } from '../schemas/top-page.schema';

export class FindTopPageDto {
  @IsEnum(TopLevelCategory)
  firstCategory: TopLevelCategory;
}
