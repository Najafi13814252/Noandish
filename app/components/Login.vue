<template>
    <Teleport to="body">
        <section class="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-xs font-dana">
            <div class="relative border-2 border-teal-100 bg-white md:rounded-2xl shadow-lg flex justify-center w-full md:w-[30rem] h-full md:h-[35rem] dark:bg-gray-800">
                <Icon class="text-3xl absolute right-2 top-2 text-gray-800 cursor-pointer dark:text-white" name="solar:close-circle-outline" @click="$emit('closeLogin')"/>
                <!-- forms -->
                <div class="rounded-2xl text-center">
                    <div class="flex flex-col items-center gap-4 my-2">
                        <NuxtImg src="/logo.avif" width="75" height="75" format="avif" alt="Logo" preload />
                        <div class="flex flex-col gap-2 mb-4">
                            <span class="text-main-100 text-4xl font-lalezar dark:text-main-200">{{ titleForm }}</span>
                            <p class="text-gray-500 text-lg dark:text-gray-300">{{ descriptionForm }}</p>
                        </div>
                    </div>
                    <form class="flex flex-col items-center mx-auto gap-6 w-fit" @submit.prevent="register">
                        <input class="w-96 p-2 bg-white rounded border border-teal-500 dark:bg-gray-600 dark:placeholder:text-gray-200 dark:border-teal-700" type="text"
                            placeholder="نام کاربری را وارد کنید" v-model="username">
                        <input class="w-96 p-2 bg-white rounded border border-teal-500 dark:bg-gray-600 dark:placeholder:text-gray-200 dark:border-teal-700" type="password"
                            placeholder="رمز عبور را وارد کنید" v-show="showConfrimInput" v-model="password">
                        <input class="w-96 p-2 bg-white rounded border border-teal-500 dark:bg-gray-600 dark:placeholder:text-gray-200 dark:border-teal-700" type="password"
                            placeholder="رمز عبور را دوباره وارد کنید">
                        <button
                            class="bg-teal-500 text-white text-xl w-full rounded py-3 cursor-pointer hover:bg-teal-600 duration-200"
                            type="submit">{{ btnTitleForm }}</button>
                    </form>
                    <div class="mt-4">
                        <span class="mt-4 text-sm text-gray-800 hover:text-sky-600 duration-200 cursor-pointer dark:text-white"
                            v-show="showSignupLink" @click="signup">حساب کاربری ندارید؟ ثبت ‌نام</span>
                        <span class="mt-4 text-sm text-gray-800 hover:text-sky-600 duration-200 cursor-pointer dark:text-white"
                            v-show="showLoginLink" @click="login">حساب کاربری دارید؟ ورود</span>
                    </div>
                </div>
            </div>
        </section>
    </Teleport>
</template>

<script setup>
import { useUserStore } from '~/../stores/user'

const titleForm = ref('ورود')
const descriptionForm = ref('به صفحه ورود نواندیش خوش‌ برگشتید')
const btnTitleForm = ref('ورود')
const showLoginLink = ref(false)
const showSignupLink = ref(true)
const showConfrimInput = ref(false)
const username = ref('')
const password = ref('')

const userStore = useUserStore()

const signup = () => {
    titleForm.value = 'ثبت‌نام'
    descriptionForm.value = 'به صفحه ثبت‌نام نواندیش خوش‌آمدید'
    btnTitleForm.value = 'ثبت‌نام'
    showLoginLink.value = true
    showSignupLink.value = false
    showConfrimInput.value = true
}

const login = () => {
    titleForm.value = 'ورود'
    descriptionForm.value = 'به صفحه ورود نواندیش خوش‌ برگشتید'
    btnTitleForm.value = 'ورود'
    showLoginLink.value = false
    showSignupLink.value = true
    showConfrimInput.value = false
}

const register = async () => {
    userStore.login(username.value, password.value)
    navigateTo('/')
}
</script>