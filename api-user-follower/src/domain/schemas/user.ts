import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema()
export class User extends Document {

  @Prop()
  email: string;

  @Prop()
  name: string;

  @Prop()
  user: string;

  @Prop()
  description: string;

  @Prop()
  create: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);

export const UserModel = mongoose.model('User', UserSchema);