<template>
    <ul class="bg-gray-100 p-4 rounded-lg flex items-center gap-4">
        <li>
            <NuxtLink to="/">
                <Icon class="text-2xl" name="solar:home-smile-outline" />
            </NuxtLink>
        </li>
        <span v-if="breadcrumb.length">/</span>
        <Li v-for="(part, index) in breadcrumb" :key="index">
            <span>{{ nameMap[part] || part }}</span>
            <span class="pr-4" v-if="index < breadcrumb.length - 1">/</span>
        </Li>

    </ul>
</template>

<script setup>

const nameMap = {
    courses: "دوره‌ها"
}

const route = useRoute()

const breadcrumb = computed(() => {
    return route.path.split("/").filter(p => p)
})
</script>