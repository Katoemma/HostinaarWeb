<script setup>

const props = defineProps({
    isOpen: Boolean,
});

const emit = defineEmits(["toggle"]);

// Sample notifications data
const notifications = ref([
    {
        id: 1,
        user: "Gladys Dare",
        message: "commented on Ecosystems and conservation",
        time: "1m ago",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
        id: 2,
        user: "Rosina Wisoky",
        message: "followed you",
        time: "20m ago",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    // Add more notifications as needed
]);
</script>

<template>
    <div class="relative">
        <!-- Notification Bell -->
        <button @click="$emit('toggle')" class="hover:text-gray-600 dark:hover:text-gray-400">
            <Icon name="hugeicons:notification-02" style="color: gray; font-size: 1.5rem;" />
            <span class="absolute top-0 right-0 inline-flex items-center justify-center w-2 h-2 text-xs font-bold text-white bg-red-500 rounded-full"></span>
        </button>

        <!-- Notifications Dropdown -->
        <div v-if="isOpen" class="absolute right-0 mt-2 w-96 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 z-50">
            <!-- Header -->
            <div class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <h2 class="text-lg font-semibold text-gray-900 dark:text-white">Notifications</h2>
                <button class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
                    <i class="fas fa-cog"></i>
                </button>
            </div>

            <!-- Notification Items -->
            <ul class="divide-y divide-gray-200 dark:divide-gray-700">
                <li v-for="notification in notifications" :key="notification.id" class="flex items-start p-4 space-x-4">
                    <div class="flex-shrink-0">
                        <img :src="notification.avatar" :alt="notification.user" class="w-10 h-10 rounded-full">
                    </div>
                    <div class="flex-1">
                        <p class="text-sm text-gray-900 dark:text-white">
                            <strong>{{ notification.user }}</strong> {{ notification.message }}
                        </p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">{{ notification.time }}</p>
                    </div>
                </li>
            </ul>
            <!-- View All Notifications Link -->
            <div class="p-4 text-center">
                <a href="#" class="text-sm text-blue-500 hover:underline">View all notifications</a>
            </div>
        </div>
    </div>
</template>
