import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import Document from 'mongoose';

export type UserDocument = User & Document;

@Schema({
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: false })
  refresh_token: string;

  @Prop()
  email: string;

  @Prop({ default: false })
  banned: boolean;

  @Prop({ default: null, nullable: true })
  ban_reason: string;

  @Prop({ default: true })
  actived: boolean;

  @Prop({ default: 3 })
  role: number;

  @Prop()
  created_at?: Date;

  @Prop()
  updated_at?: Date;

  // profile: Profile;
}

export const UserSchema = SchemaFactory.createForClass(User);