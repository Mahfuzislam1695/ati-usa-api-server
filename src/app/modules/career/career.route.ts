import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { careerController } from './career.controller';
import { CareerValidation } from './career.validation';

const router = express.Router();

router.post(
  '/create',
  validateRequest(CareerValidation.createCareerZodSchema),
  careerController.createCareer
);

export const careerRoutes = router;
