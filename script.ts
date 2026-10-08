// اجرا: npx tsx script.ts 

import { prisma } from "./lib/prisma";


async function main() {
    // await prisma.user.create({
    //     data: {
    //         name: 'علی رضایی',
    //         email: 'alir1234@gmail.com',
    //         password: 'alir1234',
    //         role: "TEACHER"
    //     }
    // });
    // console.log("Created User");

    await prisma.teacher.create({
        data: {
            userId: '5429c1c3-784e-4d37-8f9a-9de69ac2ec2f'
        }
    });
    console.log("Created Teacher");
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