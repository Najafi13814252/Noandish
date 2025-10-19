<template>
    <div class="bg-gray-100 p-4 rounded-md sticky top-21 z-30 dark:bg-gray-800">
        <ul class="flex items-center justify-between md:justify-evenly dark:text-white">
            <li>
                <button @click="scrollTo('description')"
                    :class="['cursor-pointer transition-all duration-300' ,active === 'description' ? 'bg-sky-200 text-sky-600 font-medium px-4 py-1 rounded-md dark:bg-sky-700 dark:text-white' : '']">
                    توضیحات
                </button>
            </li>
            <li>
                <button @click="scrollTo('headings')" :class="['cursor-pointer transition-all duration-300' ,active === 'headings' ? 'bg-sky-200 text-sky-600 font-medium px-4 py-1 rounded-md dark:bg-sky-700 dark:text-white' : '']">
                    سرفصل‌ها
                </button>
            </li>
            <li>
                <button @click="scrollTo('comments')" :class="['cursor-pointer transition-all duration-300' ,active === 'comments' ? 'bg-sky-200 text-sky-600 font-medium px-4 py-1 rounded-md dark:bg-sky-700 dark:text-white' : '']">
                    نظرات
                </button>
            </li>
            <li>
                <button @click="scrollTo('aboutTeacher')"
                    :class="['cursor-pointer transition-all duration-300' ,active === 'aboutTeacher' ? 'bg-sky-200 text-sky-600 font-medium px-4 py-1 rounded-md dark:bg-sky-700 dark:text-white' : '']">
                    درباره مدرس
                </button>
            </li>
        </ul>
    </div>

    <div class="flex flex-col gap-6 scroll-smooth">
        <section ref="description" class="scroll-mt-40">
            <Description />
        </section>
        <section ref="headings" class="scroll-mt-40">
            <Headings />
        </section>
        <section ref="comments" class="scroll-mt-40">
            <Comments />
        </section>
        <section ref="aboutTeacher" class="scroll-mt-40">
            <AboutTeacher />
        </section>
    </div>
</template>
  
<script setup>
const description = ref(null)
const headings = ref(null)
const comments = ref(null)
const aboutTeacher = ref(null)

const active = ref('description')

// تابع اسکرول
const scrollTo = (section) => {
    active.value = section

    const el = {
        description,
        headings,
        comments,
        aboutTeacher
    }[section]?.value

    if (el.scrollIntoView) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}
</script>