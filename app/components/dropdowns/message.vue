<script setup>

const props = defineProps({
    isOpen: Boolean,
});

const emit = defineEmits(["toggle"]);
</script>

<template>
    <div class="relative">
        <!-- Messages Icon -->
        <button @click="$emit('toggle')" class="hover:text-gray-600 dark:hover:text-gray-400">
            <Icon name="hugeicons:mail-02" style="color: gray; font-size: 1.5rem;" />
            <span
                class="absolute top-0 right-0 inline-flex items-center justify-center w-2 h-2 text-xs font-bold text-white bg-red-500 rounded-full"></span>
        </button>

        <!-- Messages Dropdown -->
        <div v-if="isOpen"
            class="absolute right-0 mt-2 w-96 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 z-50">
            <!-- Header -->
            <div class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <h2 class="text-lg font-semibold text-gray-900 dark:text-white">Messages</h2>
                <button class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
                    <i class="fas fa-cog"></i>
                </button>
            </div>

            <!-- Message Items -->
            <ul class="divide-y divide-gray-200 dark:divide-gray-700">
                <!-- Message Item -->
                <li class="flex items-start p-4 space-x-4">
                    <div class="flex-shrink-0">
                        <img src="https://randomuser.me/api/portraits/women/5.jpg" alt="Jane Cooper"
                            class="w-10 h-10 rounded-full">
                    </div>
                    <div class="flex-1">
                        <p class="text-sm text-gray-900 dark:text-white font-semibold">
                            Jane Cooper sent you a message
                            <span class="text-xs text-gray-500 dark:text-gray-400 float-right">1m ago</span>
                        </p>
                    </div>
                </li>

                <li class="flex items-start p-4 space-x-4">
                    <div class="flex-shrink-0">
                        <img src="https://randomuser.me/api/portraits/men/6.jpg" alt="John Doe"
                            class="w-10 h-10 rounded-full">
                    </div>
                    <div class="flex-1">
                        <p class="text-sm text-gray-900 dark:text-white font-semibold">
                            John Doe sent you a message
                            <span class="text-xs text-gray-500 dark:text-gray-400 float-right">15m ago</span>
                        </p>
                    </div>
                </li>

                <li class="flex items-start p-4 space-x-4">
                    <div class="flex-shrink-0">
                        <img src="https://randomuser.me/api/portraits/women/7.jpg" alt="Emily Stone"
                            class="w-10 h-10 rounded-full">
                    </div>
                    <div class="flex-1">
                        <p class="text-sm text-gray-900 dark:text-white font-semibold">
                            Emily Stone sent you a message
                            <span class="text-xs text-gray-500 dark:text-gray-400 float-right">2h ago</span>
                        </p>
                    </div>
                </li>
            </ul>

            <!-- Footer -->
            <div class="p-4 text-center">
                <a href="#" class="text-sm text-blue-600 hover:underline dark:text-blue-400">
                    View All Messages
                </a>
            </div>
        </div>
    </div>
</template>
