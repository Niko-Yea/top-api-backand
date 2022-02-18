import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTopPgeDto } from './dto/create-top-page.dto';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { TopPage, TopPageDocument } from './schemas/top-page.schema';

@Injectable()
export class TopPageService {
  constructor(
    @InjectModel(TopPage.name)
    private readonly topPageModel: Model<TopPageDocument>,
  ) {}
  async createPage(dto: CreateTopPgeDto) {
    return this.topPageModel.create(dto);
  }

  async getById(id: string) {
    return this.topPageModel.findById(id);
  }

  async findByAlias(alias: string) {
    return this.topPageModel.findOne({ alias });
  }

  async deleteById(id: string) {
    return this.topPageModel.findByIdAndDelete(id);
  }

  async updatePage(id: string, dto: CreateTopPgeDto) {
    return this.topPageModel.findByIdAndUpdate(id, dto, { new: true });
  }

  async findByCategory(dto: FindTopPageDto) {
    return this.topPageModel.find(
      { dto },
      { alias: 1, secondCategory: 1, title: 1 },
    );
  }
}
