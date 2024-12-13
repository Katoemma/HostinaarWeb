<script setup>
const userName = ref("John");
const greeting = ref("");
const openDropdown = ref(""); // Track which dropdown is open

const toggleDropdown = (dropdown) => {
    openDropdown.value = openDropdown.value === dropdown ? "" : dropdown; // Toggle current dropdown
};

const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) {
        greeting.value = `Good Morning, ${userName.value}!`;
    } else if (hours < 18) {
        greeting.value = `Good Afternoon, ${userName.value}!`;
    } else {
        greeting.value = `Good Evening, ${userName.value}!`;
    }
};

getGreeting();
</script>

<template>
    <header class="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md border-b border-gray-200 dark:border-gray-800">
        <div class="flex items-center justify-between px-6 py-3">
            <div>
                <h1 class="text-lg font-semibold">{{ greeting }}</h1>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ new Date().toLocaleDateString() }}</p>
            </div>
            <!-- Dropdown Components -->
            <div class="flex items-center space-x-6">
                <DropdownsMessage :isOpen="openDropdown === 'message'" @toggle="toggleDropdown('message')" />
                <DropdownsNotification :isOpen="openDropdown === 'notification'" @toggle="toggleDropdown('notification')" />
                <DropdownsUserprofile :isOpen="openDropdown === 'user'" @toggle="toggleDropdown('user')" />
            </div>
        </div>
    </header>
</template>
