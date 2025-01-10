import { z } from "zod";

export const UserSchema = z.object({
    service: z.string().optional(),
    name: z.string().optional(),
    tel: z
        .string()
        .transform((val) => val.replace(/\D/g, '').trim())
        .refine((val) => val.startsWith('38') ? val.length === 12 : val.length === 10, {
            message: "Вкажіть правильний номер", 
        }),
    message: z.string().optional(),
});

export type UserSchemaType = z.infer<typeof UserSchema>;
