<template>
    <section class="border border-gray-200 bg-white rounded-lg text-gray-800">
        <div>
            <!-- points -->
            <div class="p-4 rounded-md">
                <div class="flex items-center justify-around">
                    <div class="flex flex-col text-center">
                        <span class="text-5xl font-bold">4.3</span>
                        <span>از 5 امتیاز</span>
                        <div class="flex items-center gap-1 mt-2">
                            <Icon class="text-yellow-500" v-for="i in 5" name="solar:star-outline" />
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4 border-r pr-10 border-r-gray-300">
                        <div v-for="score in points" :key="score.id" class="flex items-center gap-2">
                            <div class="flex flex-col">
                                <span class="mb-1 font-mediums">{{ score.rate }} ستاره</span>
                                <div class="w-72 bg-gray-200 rounded-full h-1.5 mb-4">
                                    <div :class="['h-1.5 rounded-full',
                                    score.id == 1 ? 'bg-green-700': '',
                                    score.id == 2 ? 'bg-green-500': '',
                                    score.id == 3 ? 'bg-orange-400': '',
                                    score.id == 4 ? 'bg-red-500': ''
                                    ]" :style="{ width: score.percent + '%' }">
                                    </div>
                                </div>
                            </div>
                            <span class="relative top-2 text-sm font-medium">{{ score.percent }}%</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- comments -->
            <div></div>
        </div>
    </section>
</template>

<script setup>
const points = ref([
    { id: 1, rate: '5', percent: 85 },
    { id: 2, rate: '4', percent: 75 },
    { id: 3, rate: '3', percent: 53 },
    { id: 4, rate: '2 و 1', percent: 20 }
])
</script>