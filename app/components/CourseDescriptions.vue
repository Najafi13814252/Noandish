<template>
    <div class="flex justify-beetween gap-20">
        <div class="flex flex-col gap-8">
            <h2 class="text-4xl font-bold">{{ title }}</h2>

            <p class="line-clamp-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع
                با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
                و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
                فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها،
                و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
                دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            
            <div class="flex items-center gap-6">
                <div class="flex gap-2">
                    <Icon class="text-2xl text-yellow-500" name="solar:star-bold"/>
                    <span class="text-2xl"><span class="text-lg text-gray-500">5 /</span> 4.8</span>
                </div>
                <span class="text-main-100">|</span>
                <div class="flex gap-2">
                    <Icon class="text-2xl" name="solar:users-group-two-rounded-outline"/>
                    <span class="text-xl">169 <span class="text-sm text-gray-500">دانشجو</span></span>
                </div>
                <span class="text-main-100">|</span>
                <div class="flex gap-2">
                    <Icon class="text-xl" name="solar:chart-2-outline"/>
                    <span class="text-sm">مقدماتی تا پیشرفته</span>
                </div>
            </div>

            <div class="flex items-center gap-4">
                <div class="flex items-center gap-2">
                    <img class="w-9 h-9 object-cover rounded-full" src="/images/person.webp" alt="teacher">
                    <span>رضا مردانی</span>
                </div>
                <span class="text-main-100">|</span>
                <div class="flex items-center gap-2">
                    <Icon class="text-xl" name="solar:danger-outline"/>
                    <span>آخرین بروزرسانی: 1403/02/10</span>
                </div>
            </div>
        </div>

        <video class="w-[480px] h-full rounded-md" poster="/images/img-1.webp" controls>
            <source src="/videoTest.mp4">
        </video>
    </div>
</template>

<script setup>

const title = useRoute().params.title

</script>