<template>
    <div class="px-2 md:px-0 mx-0 md:mx-32 flex flex-col gap-6 my-10 w-full md:w-fit">
        <Breadcrumb />
        <CourseDescriptions />
        
        <div class="flex flex-col md:flex-row justify-between gap-6">
            <div class="flex flex-col gap-4 w-full">
                <CourseContent />
            </div>

            <div>
                <CourseShopping />
            </div>
        </div>
    </div>
</template>