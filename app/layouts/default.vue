<template>
    <div class="font-dana">
        <Navbar @open-login="showLogin = true"/>

        <main>
            <slot />
        </main>

        <footer>
            <div class="bg-main-100 py-10 my-10 md:my-0">
                <Newsletter />
                <Footer />
            </div>
        </footer>
    </div>

    <Login v-if="showLogin" @close-login="showLogin = false"/>
</template>

<script setup>
const showLogin = ref(false)
</script>