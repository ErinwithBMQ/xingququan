import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from '../entity/post.entity';

@Provide()
export class PostService {
  @InjectEntityModel(PostEntity)
  postModel: Repository<PostEntity>;

  async createPost(post: PostEntity) {
    return await this.postModel.save(post);
  }

  async getAllPostByXqq_id(value: any): Promise<PostEntity[]> {
    return await this.postModel.find({
      where: { xqq_id: value },
    });
  }
}
