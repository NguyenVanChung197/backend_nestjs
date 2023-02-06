import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import Document from 'mongoose';

export type PostDocument = Post & Document;

@Schema()
export class Post {
  // @Transform(({ value }) => value.toString())
  // _id: ObjectId;

  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  deletedAt: Date;
}

export const PostSchema = SchemaFactory.createForClass(Post);
