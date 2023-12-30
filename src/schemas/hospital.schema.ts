import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HospitalDocument = Hospital & Document;

@Schema({
  timestamps: true,
  versionKey: false,
})
export class Hospital extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description?: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;
}

export const HospitalSchema = SchemaFactory.createForClass(Hospital);
