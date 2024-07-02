import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema()
export class Follow extends Document {

  @Prop()
  user: string;

  @Prop()
  follow: string;

  @Prop()
  date: Date;

  @Prop()
  isActive: boolean;
}

export const FollowSchema = SchemaFactory.createForClass(Follow);

export const FollowModel = mongoose.model('Follow', FollowSchema);