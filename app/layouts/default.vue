<template>
    <Nav class="flex justify-between items-center mx-10 my-5">
        <div class="flex items-center gap-10">
            <NuxtImg src="/logo.avif" width="70" height="70" format="avif" alt="Logo" preload/>

            <button class="flex items-center gap-1">
                <Icon name="solar:widget-2-outline"/>
                دسته‌بندی‌ها
            </button>

            <!-- <input type="text"> -->
        </div>
        <div>
            <button>ورود | ثبت‌نام</button>
        </div>
    </Nav>

    <slot />
</template>