// اجرا: npx tsx script.ts 

import { prisma } from "./lib/prisma";


async function main() {
    await prisma.level.createMany({
        data: [
            {
                name: 'مقدماتی',
                slug: 'Introductory'
            },
            {
                name: 'متوسط',
                slug: 'Itermediate'
            },
            {
                name: 'پیشرفته',
                slug: 'Advanced'
            },
            {
                name: 'مقدماتی تا پیشرفته',
                slug: 'IntroductoryToAdvanced'
            }
        ]
    })
    console.log('Levels created');
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