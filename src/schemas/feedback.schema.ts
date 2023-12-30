import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FeedbackDocument = Feedback & Document;

@Schema({
  timestamps: true,
  versionKey: false,
})
export class Feedback extends Document {
  @Prop({
    type: String,
    // ref: 'Hospital',
    required: true,
    select: false,
  })
  _hospitalId: string;

  @Prop({ required: true })
  id: number;

  @Prop()
  subject: string;

  @Prop({ required: true })
  message: string;

  @Prop({ default: false })
  isDeleted: boolean;
}

export const FeedbackSchema = SchemaFactory.createForClass(Feedback);
