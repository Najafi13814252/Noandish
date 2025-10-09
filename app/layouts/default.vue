<template>
    <div class="font-dana">
        <TemplatesNavbar @open-login="showLogin = true"/>

        <main>
            <slot />
        </main>

        <footer>
            <div class="bg-main-100 py-10">
                <TemplatesNewsletter />
                <TemplatesFooter />
            </div>
        </footer>
    </div>

    <TemplatesLogin v-if="showLogin" @close-login="showLogin = false"/>
</template>

<script setup>
const showLogin = ref(false)
</script>