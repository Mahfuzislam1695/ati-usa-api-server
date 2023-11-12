import { z } from 'zod';

const createCareerZodSchema = z.object({
  body: z.object({
    fullName: z
      .string({
        required_error: 'Full name is required',
      })
      .min(3),
    email: z.string().optional(),
    phone: z.string().optional(),
    linkedinProfile: z.string().optional(),
    cv: z.string({
      required_error: 'CV is required',
    }),
  }),
});

// const updateCareerZodSchema = z.object({
//   body: z.object({
//     title: z.string().min(5).optional(),
//     description: z.string().optional(),
//     image: z.string().optional(),
//     activeStatus: z.boolean().optional(),
//   }),
// });

export const CareerValidation = {
  createCareerZodSchema,
  //   updateCareerZodSchema,
};
