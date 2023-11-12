import { Request, Response } from 'express';
import httpStatus from 'http-status';
import asyncHandler from '../../../shared/asyncHandler';
import sendResponse from '../../../shared/sendResponse';
import { ICareer } from './career.interface';
import { CareerService } from './career.service';

const createCareer = asyncHandler(async (req: Request, res: Response) => {
  const { ...careerData } = req.body;
  const result = await CareerService.createCareer(careerData);

  sendResponse<ICareer>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Career created successfully!',
    data: result,
  });
});

export const careerController = {
  createCareer,
};
