import { z } from "zod";

export const UserSchema = z.object({
    service: z.string().optional(),
    name: z.string().optional(),
    tel: z
        .string()
        .trim()
        .transform((val) => val.replace(/\D/g, ''))
        .refine((val) => val.length>=9 && val.length <= 12, {
            message: "Вкажіть правильний номер", 
        }),
    message: z.string().optional(),
});

export type UserType = z.infer<typeof UserSchema>;
