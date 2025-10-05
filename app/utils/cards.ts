export interface Card {
    id: number
    src: string
    title: string
    price: number
    rate: number
    teacher: string
    lesson: number
    members: number
    level: string
    discount: number
}

const cards: Card[] = [
    { id: 1, src: '/images/img-1.webp', title: 'توسعه فردی', price: 550000, rate: 4.8, teacher: 'علی احمدی', lesson: 8, members: 115, level: 'مقدماتی', discount: 20 },
    { id: 2, src: '/images/img-2.webp', title: 'آموزش ICDL پیشرفته', price: 6350000, rate: 5, teacher: 'محمد حسینی', lesson: 20, members: 72, level: 'مقدماتی تا پیشرفته', discount: 100 },
    { id: 3, src: '/images/img-3.webp', title: 'مدیریت حرفه‌ای', price: 780000, rate: 5, teacher: 'رضا عباسی', lesson: 10, members: 148, level: 'متوسط', discount: 100 },
    { id: 4, src: '/images/img-4.webp', title: 'برنامه‌ ریزی', price: 860000, rate: 4.9, teacher: 'حسن نیکو', lesson: 18, members: 50, level: 'پیشرفته', discount: 0 },
    { id: 5, src: '/images/img-5.webp', title: 'تفکر استراتژیک', price: 630000, rate: 5, teacher: 'سارا رضایی', lesson: 15, members: 39, level: 'مقدماتی', discount: 30 },
    { id: 6, src: '/images/img-6.webp', title: 'هنر مذاکره', price: 995000, rate: 4.7, teacher: 'سهیل امیری', lesson: 9, members: 84, level: 'مقدماتی تا پیشرفته', discount: 0 },
    { id: 1, src: '/images/img-1.webp', title: 'توسعه فردی', price: 550000, rate: 4.8, teacher: 'علی احمدی', lesson: 8, members: 115, level: 'مقدماتی', discount: 20 },
    { id: 2, src: '/images/img-2.webp', title: 'آموزش ICDL پیشرفته', price: 6350000, rate: 5, teacher: 'محمد حسینی', lesson: 20, members: 72, level: 'مقدماتی تا پیشرفته', discount: 100 },
    { id: 3, src: '/images/img-3.webp', title: 'مدیریت حرفه‌ای', price: 780000, rate: 5, teacher: 'رضا عباسی', lesson: 10, members: 148, level: 'متوسط', discount: 100 },
    { id: 4, src: '/images/img-4.webp', title: 'برنامه‌ ریزی', price: 860000, rate: 4.9, teacher: 'حسن نیکو', lesson: 18, members: 50, level: 'پیشرفته', discount: 0 },
    { id: 5, src: '/images/img-5.webp', title: 'تفکر استراتژیک', price: 630000, rate: 5, teacher: 'سارا رضایی', lesson: 15, members: 39, level: 'مقدماتی', discount: 30 },
    { id: 6, src: '/images/img-6.webp', title: 'هنر مذاکره', price: 995000, rate: 4.7, teacher: 'سهیل امیری', lesson: 9, members: 84, level: 'مقدماتی تا پیشرفته', discount: 0 },
    { id: 1, src: '/images/img-1.webp', title: 'توسعه فردی', price: 550000, rate: 4.8, teacher: 'علی احمدی', lesson: 8, members: 115, level: 'مقدماتی', discount: 20 },
    { id: 2, src: '/images/img-2.webp', title: 'آموزش ICDL پیشرفته', price: 6350000, rate: 5, teacher: 'محمد حسینی', lesson: 20, members: 72, level: 'مقدماتی تا پیشرفته', discount: 100 },
    { id: 3, src: '/images/img-3.webp', title: 'مدیریت حرفه‌ای', price: 780000, rate: 5, teacher: 'رضا عباسی', lesson: 10, members: 148, level: 'متوسط', discount: 100 },
    { id: 4, src: '/images/img-4.webp', title: 'برنامه‌ ریزی', price: 860000, rate: 4.9, teacher: 'حسن نیکو', lesson: 18, members: 50, level: 'پیشرفته', discount: 0 },
    { id: 5, src: '/images/img-5.webp', title: 'تفکر استراتژیک', price: 630000, rate: 5, teacher: 'سارا رضایی', lesson: 15, members: 39, level: 'مقدماتی', discount: 30 },
    { id: 6, src: '/images/img-6.webp', title: 'هنر مذاکره', price: 995000, rate: 4.7, teacher: 'سهیل امیری', lesson: 9, members: 84, level: 'مقدماتی تا پیشرفته', discount: 0 }
]

export default cards