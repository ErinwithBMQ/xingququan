import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Photo } from '../entity/photo.entity';
import { Repository } from 'typeorm';

@Provide()
export class PhotoService {
  @InjectEntityModel(Photo)
  photoModel: Repository<Photo>;
  async addPhoto(photo: Photo) {
    return this.photoModel.save(photo);
  }
}
