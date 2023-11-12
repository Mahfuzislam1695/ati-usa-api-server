import { ICareer } from './career.interface';
import { Career } from './career.model';

// ? Create Service

const createCareer = async (payload: ICareer): Promise<ICareer | null> => {
  const result = await Career.create(payload);
  return result;
};

// ? Get all Career

const getAllCareer = async (): Promise<ICareer[] | null> => {
  const result = await Career.find();
  return result;
};

// ? Get active Career

const getActiveCareer = async (): Promise<ICareer[] | null> => {
  const result = await Career.find({ activeStatus: true });
  return result;
};

// ? Update Career

const updateCareer = async (
  id: string,
  payload: Partial<ICareer>
): Promise<ICareer | null> => {
  const result = await Career.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const CareerService = {
  createCareer,
  getAllCareer,
  getActiveCareer,
  updateCareer,
};
