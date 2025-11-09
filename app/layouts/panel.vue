<template>
    <div class="font-dana dark:bg-darkMode">
        <Navbar @open-login="showLogin = true" />

        <div class="px-2 md:px-0 mx-0 md:mx-10 flex gap-6 py-10">
            <PanelDashboard />

            <div class="pt-6 pr-8 w-full">
                <slot />
            </div>
        </div>
    </div>

    <Login v-if="showLogin" @close-login="showLogin = false" />
</template>

<script setup>
const showLogin = ref(false)
</script>