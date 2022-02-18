import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TopPageDocument = TopPage & Document;

export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export class HhData {
  @Prop()
  count: number;

  @Prop()
  juniorSalary: number;

  @Prop()
  middleSalary: number;

  @Prop()
  seniorSalary: number;
}

export class TopPageAdventage {
  @Prop()
  title: string;

  @Prop()
  description: string;
}

@Schema()
export class TopPage {
  @Prop({ enum: TopLevelCategory })
  firstCategory: TopLevelCategory;

  @Prop()
  secondCategory: string;

  @Prop({ unique: true })
  alias: string;

  @Prop()
  title: string;

  @Prop()
  category: string;

  @Prop()
  hh?: HhData;

  @Prop([TopPageAdventage])
  advantages: TopPageAdventage[];

  @Prop()
  seoText: string;

  @Prop([String])
  tags: string[];

  @Prop()
  tagsTitle: string;
}

export const TopPageSchema = SchemaFactory.createForClass(TopPage);
