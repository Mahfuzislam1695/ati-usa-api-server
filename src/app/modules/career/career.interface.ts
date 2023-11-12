import { Model } from 'mongoose';

export type ICareer = {
  fullName: string;
  email: string;
  phone: string;
  linkedinProfile: string;
  cv: string;
};

export type careerModel = Model<ICareer, Record<string, unknown>>;
