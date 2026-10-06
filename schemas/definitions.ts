import * as z from 'zod'

export const SignupFormSchema = z.object({
    name: z
        .string('نام و نام‌خانوادگی نباید خالی باشد')
        .min(2, { error: 'نام حداقل باید شامل 2 حرف باشد' })
        .trim(),
    email: z.email({ error: 'لطفا یک ایمیل معتبر وارد کنید' }).trim(),
    password: z
        .string('رمز عبور نباید خالی باشد')
        .min(8, { error: 'رمز عبور حداقل باید شامل 8 کاراکتر باشد' })
        .regex(/[a-zA-Z0-9]/, { error: 'رمز عبور فقط میتواند شامل حروف و اعداد باشد' })
        .trim()
})

export const LoginFormSchema = z.object({
    email: z.email({ error: 'لطفا یک ایمیل معتبر وارد کنید' }).trim(),
    password: z
        .string('رمز عبور نباید خالی باشد')
        .min(8, { error: 'رمز عبور حداقل باید شامل 8 کاراکتر باشد' })
        .regex(/[a-zA-Z0-9]/, { error: 'رمز عبور فقط میتواند شامل حروف و اعداد باشد' })
        .trim()
})

export type SignupFormState =
    | {
        errors?: {
            name?: string[]
            email?: string[]
            password?: string[]
        }
        message?: string
    }
    | undefined

export type LoginFormState =
    | {
        errors?: {
            email?: string[]
            password?: string[]
        }
        message?: string
    }
    | undefined