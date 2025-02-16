import { zodResolver } from '@primevue/forms/resolvers/zod'
import { z } from 'zod'

export const LoginResolver = zodResolver(
  z.object({
    email: z.string().email(),
    password: z.string().min(8),
  })
)
