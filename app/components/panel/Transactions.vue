<template>
    <div class="flex flex-col gap-10">
        <h2 class="text-2xl dark:text-white">گزارش تراکنش‌ها</h2>

        <div class="overflow-x-auto lg:overflow-x-visible">
            <table class="w-full text-center rounded-md">
                <thead class="text-gray-700 bg-gray-100 dark:bg-gray-800 dark:text-gray-200">
                    <tr>
                        <td class="px-6 py-3 text-right">#</td>
                        <td class="px-6 py-3">عنوان دوره</td>
                        <td class="px-6 py-3">تاریخ تراکنش</td>
                        <td class="px-6 py-3">مبلغ تراکنش (تومان)</td>
                        <td class="px-6 py-3">شماره تراکنش</td>
                        <td class="px-6 py-3">وضعیت</td>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b border-b-gray-200 dark:bg-darkMode dark:text-white dark:border-b-gray-800" v-for="transaction in transactions" :key="transaction.id">
                        <td class="px-2 py-3">
                            <span class="bg-gray-200 px-2 py-1 rounded-md flex items-center w-10 justify-center dark:bg-gray-800">{{ transaction.id.toLocaleString('fa-IR') }}</span>
                        </td>
                        <td class="px-6 py-3">{{ transaction.title }}</td>
                        <td class="px-6 py-3">{{ transaction.date }}</td>
                        <td class="px-6 py-3">{{ transaction.amount.toLocaleString('fa-IR') }}</td>
                        <td class="px-6 py-3">{{ transaction.transitionNumber }}</td>
                        <td class="px-6 py-3">
                            <div class="flex items-center gap-1 py-1 justify-center bg-green-100 text-green-500 rounded-md dark:bg-green-500/10" v-if="transaction.status">
                                <Icon class="text-xl" name="solar:bill-check-outline" />
                                <span>موفق</span>
                            </div>
                            <div class="flex items-center gap-1 py-1 justify-center bg-red-100 text-red-500 rounded-md dark:bg-red-500/10" v-else>
                                <Icon class="text-lg" name="solar:bill-cross-outline" />
                                <span>ناموفق</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
type Transaction = {
    id: number
    title: string
    date: string
    amount: number
    transitionNumber: string
    status: boolean
}

const transactions = ref<Transaction[]>([
    { id: 1, title: 'مدیریت حرفه‌ای', date: '2025-03-18', amount: 1659000, transitionNumber: '11858', status: true },
    { id: 2, title: 'توسعه فردی', date: '2024-08-29', amount: 2300000, transitionNumber: '92303', status: false },
    { id: 3, title: 'هنر مذاکره', date: '2024-03-10', amount: 1266000, transitionNumber: '50069', status: true }
])
</script>