// اجرا: npx tsx script.ts 

import { prisma } from "./lib/prisma";


async function main() {
    await prisma.course.createMany({
        data: [
            {
                imageUrl: 'https://8ptr3refiw.ufs.sh/f/CwSSKycSnmL68iADqM7MTFDzS0Aq9C2BQRnWdXVrtukjwU7Z',
                title: 'توسعه فردی',
                price: 6350000,
                rate: 4.5,
                lesson: 0,
                members: 0,
                duration: 0,
                discount: 0,
                description: '',
                teacherId: '2359e22a-4084-4008-8c6a-e25bc8ce899e'
            },
            {
                imageUrl: 'https://8ptr3refiw.ufs.sh/f/CwSSKycSnmL6QLJVOshQ0eY3LsIlRxKd9VOJ58qmyD7W2Fgw',
                title: 'آموزش ICDL پیشرفته',
                price: 550000,
                rate: 5,
                lesson: 0,
                members: 0,
                duration: 0,
                discount: 0,
                description: '',
                teacherId: '2359e22a-4084-4008-8c6a-e25bc8ce899e'
            },
            {
                imageUrl: 'https://8ptr3refiw.ufs.sh/f/CwSSKycSnmL6CJPqKiHcSnmL6GPZV8DpHzwi0uEydxW9JIFe',
                title: 'مدیریت حرفه‌ای',
                price: 780000,
                rate: 3.6,
                lesson: 12,
                members: 126,
                duration: 12,
                discount: 5,
                description: '',
                teacherId: '2359e22a-4084-4008-8c6a-e25bc8ce899e'
            },
            {
                imageUrl: 'https://8ptr3refiw.ufs.sh/f/CwSSKycSnmL6TjdBFGLeXf0vYD63JEIjn2ZPNKg7qz8mob5W',
                title: 'برنامه‌ ریزی',
                price: 860000,
                rate: 0,
                lesson: 0,
                members: 0,
                duration: 0,
                discount: 0,
                description: '',
                teacherId: '2359e22a-4084-4008-8c6a-e25bc8ce899e'
            },
            {
                imageUrl: 'https://8ptr3refiw.ufs.sh/f/CwSSKycSnmL6IZhz4VNPKiDUQqjaIb9RXdJ1oEVCk2Fc7NZA',
                title: 'تفکر استراتژیک',
                price: 630000,
                rate: 0,
                lesson: 0,
                members: 0,
                duration: 0,
                discount: 0,
                description: '',
                teacherId: '2359e22a-4084-4008-8c6a-e25bc8ce899e'
            },
            {
                imageUrl: 'https://8ptr3refiw.ufs.sh/f/CwSSKycSnmL66SuJFVpraV3bIAFdZn29jyWmRNfcBD4siMuq',
                title: 'هنر مذاکره',
                price: 995000,
                rate: 0,
                lesson: 0,
                members: 0,
                duration: 0,
                discount: 0,
                description: '',
                teacherId: '2359e22a-4084-4008-8c6a-e25bc8ce899e'
            }
        ]
    });
    console.log("Created courses");
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });