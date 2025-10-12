<template>
    <div class="mx-32 flex flex-col gap-6 my-10">
        <Breadcrumb />
        <CourseDescriptions />
        
        <div class="w-full flex gap-6">
            <div class="w-3/4 flex flex-col gap-4">
                <CourseOverview />
                <CourseContent />
            </div>

            <div class="w-1/4">
                <CourseShopping />
            </div>
        </div>
    </div>
</template>