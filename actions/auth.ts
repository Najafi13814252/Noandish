"use server"

import { prisma } from "@/lib/prisma";
import { createSession, deleteSession } from "@/lib/session";
import { SignupFormState, LoginFormState, LoginFormSchema, SignupFormSchema } from "@/schemas/definitions";
import bcrypt from "bcrypt"
import { redirect } from 'next/navigation'


export async function signupAction(state: SignupFormState, formData: FormData) {
    // 1. Validation
    const validatedFields = SignupFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors
        }
    }

    const { name, email, password } = validatedFields.data

    // 2. Check exist user
    const existingUser = await prisma.user.findUnique({
        where: {
            email
        }
    })
    if (existingUser) {
        return { message: "Exist User" }
    }

    // 3. Hash password
    const hashedPasword = await bcrypt.hash(password, 10)

    // 4. Create User
    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPasword
        }
    })
    if (!user) {
        return { message: 'Server Error' }
    }

    // 5. Create user session
    await createSession(user.id)

    redirect('/')
}

export async function loginAction(state: LoginFormState, formData: FormData) {
    const validatedFields = LoginFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { email, password } = validatedFields.data

    const user = await prisma.user.findUnique({ where: { email } })

    const unCorrectPassword = await bcrypt.compare(password, user?.password || '')
    if (!user || !unCorrectPassword) {
        return {
            message: 'ایمیل یا پسورد اشتباه است.',
        }
    }


    await createSession(user.id)

    redirect('/')
}

export async function logoutAction() {
    await deleteSession()
    redirect('/')
}