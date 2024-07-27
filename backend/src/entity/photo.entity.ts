// entity/photo.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_photo')
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
    name: 'custom_name',
  })
  name: string;

  @Column('text')
  description: string;

  @Column()
  filename: string;

  @Column('int')
  views: number;

  @Column()
  isPublished: boolean;
}
