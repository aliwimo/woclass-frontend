import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';

export const RegisterResolver = zodResolver(
  z
    .object({
      name: z.string().min(3, { message: 'Name must be at least 3 characters long' }),
      email: z.string().email({ message: 'Invalid email address' }),
      password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
      password_confirmation: z
        .string()
        .min(8, { message: 'Password confirmation must be at least 8 characters long' }),
    })
    .refine((data) => data.password === data.password_confirmation, {
      message: 'Passwords do not match',
      path: ['password_confirmation'],
    }),
);
