import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from '../entity/post.entity';
import { Comment } from '../entity/comment.entity';

@Provide()
export class PostService {
  @InjectEntityModel(PostEntity)
  postModel: Repository<PostEntity>;

  @InjectEntityModel(Comment)
  commentModel: Repository<Comment>;

  async createPost(post: PostEntity) {
    return await this.postModel.save(post);
  }

  async getAllPostByXqq_id(value: any): Promise<PostEntity[]> {
    return await this.postModel.find({
      where: { xqq_id: value },
    });
  }

  async getPostById(id: number): Promise<PostEntity | undefined> {
    return await this.postModel.findOne({ where: { id } });
  }

  async createComment(comment: Comment) {
    return await this.commentModel.save(comment);
  }

  async getAllCommentByPost_id(value: any): Promise<Comment[]> {
    return await this.commentModel.find({
      where: { post_id: value },
    });
  }
}
