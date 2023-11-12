import { Schema, model } from 'mongoose';
import { ICareer, careerModel } from './career.interface';

const careerSchema = new Schema<ICareer>(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    linkedinProfile: {
      type: String,
    },
    cv: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Career = model<ICareer, careerModel>('Career', careerSchema);
