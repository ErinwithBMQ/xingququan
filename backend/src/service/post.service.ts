import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from '../entity/post.entity';
import { Comment } from '../entity/comment.entity';
import { Like } from '../entity/like.entity';

@Provide()
export class PostService {
  @InjectEntityModel(PostEntity)
  postModel: Repository<PostEntity>;

  @InjectEntityModel(Comment)
  commentModel: Repository<Comment>;

  @InjectEntityModel(Like)
  likeModel: Repository<Like>;

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

  async updatePostById(
    id: number,
    updatedCommentNumber: number
  ): Promise<number> {
    const result = await this.postModel.update(id, {
      comment_number: updatedCommentNumber,
    });
    return result.affected; // 返回受影响的行数
  }

  async findLikeByPostIdAndCreator(
    creator: string,
    post_id: number
  ): Promise<Like | undefined> {
    return await this.likeModel.findOne({
      where: {
        creator: creator,
        post_id: post_id,
      },
    });
  }

  async createLike(like: Like) {
    return await this.likeModel.save(like);
  }

  async updatePostLikeById(
    id: number,
    updatedLikeNumber: number
  ): Promise<number> {
    const post = await this.postModel.findOne({ where: { id } });
    const result = await this.postModel.update(id, {
      like_number: post.like_number + updatedLikeNumber,
    });
    return result.affected; // 返回受影响的行数
  }

  async getAllPostByPoster(name: any): Promise<PostEntity[]> {
    return await this.postModel.find({
      where: { poster_name: name },
    });
  }
}
