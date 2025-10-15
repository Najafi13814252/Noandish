<template>
    <div class="mx-32 flex flex-col gap-6 my-10">
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