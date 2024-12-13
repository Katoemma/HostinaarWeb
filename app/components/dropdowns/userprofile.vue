<script setup>

const props = defineProps({
    isOpen: Boolean,
});

const emit = defineEmits(["toggle"]);

const isIncognito = ref(false);
const isDarkMode = ref(false);
</script>

<template>
    <div class="relative">
        <!-- User Avatar Button -->
        <button @click="$emit('toggle')" class="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 overflow-hidden">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Elon_Musk_Royal_Society_crop.jpg/1200px-Elon_Musk_Royal_Society_crop.jpg" alt="User Avatar" class="w-full h-full object-cover" />
        </button>

        <!-- Dropdown -->
        <div v-if="isOpen" class="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700">
            <!-- Header -->
            <div class="p-4 flex items-center space-x-3">
                <div class="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Elon_Musk_Royal_Society_crop.jpg/1200px-Elon_Musk_Royal_Society_crop.jpg" alt="User Avatar" class="w-full h-full object-cover" />
                </div>
                <div>
                    <p class="text-sm font-semibold text-gray-900 dark:text-white">Sam</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">sam@info.com</p>
                </div>
            </div>
            <hr class="border-gray-200 dark:border-gray-700" />

            <!-- Menu Items -->
            <ul class="p-2 space-y-1">
                <li class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    <Icon name="hugeicons:user-circle-02" style="color: gray; font-size: 1.2rem;" />
                    <span class="text-sm text-gray-700 dark:text-gray-200">Account</span>
                </li>
                <li class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    <Icon name="hugeicons:settings-02" style="color: gray; font-size: 1.2rem;" />
                    <span class="text-sm text-gray-700 dark:text-gray-200">Settings</span>
                </li>
                <li class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    <Icon name="hugeicons:customer-service-01" style="color: gray; font-size: 1.2rem;" />
                    <span class="text-sm text-gray-700 dark:text-gray-200">Help Center</span>
                </li>
            </ul>
            <hr class="border-gray-200 dark:border-gray-700" />

            <!-- Toggles -->
            <div class="p-2 space-y-2">
                <div class="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    <span class="text-sm text-gray-700 dark:text-gray-200 flex items-center space-x-2">
                        <i class="fas fa-moon text-gray-500 dark:text-gray-400"></i>
                        <span>Dark Mode</span>
                    </span>
                    <input
                        type="checkbox"
                        class="toggle-checkbox"
                        v-model="isDarkMode"
                    />
                </div>
            </div>
            <hr class="border-gray-200 dark:border-gray-700" />

            <!-- Footer -->
           

            <!-- Logout -->
            <div class="p-2">
                <button class="w-full text-left text-sm text-red-700 dark:text-red-200 flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Icon name="hugeicons:logout-04" style=" font-size: 1.2rem;" />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.toggle-checkbox {
    appearance: none;
    width: 2rem;
    height: 1rem;
    background: gray;
    border-radius: 9999px;
    position: relative;
    outline: none;
    transition: background 0.3s ease;
}

.toggle-checkbox:checked {
    background: #6366f1; /* Purple for toggle on */
}

.toggle-checkbox:before {
    content: "";
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    background: white;
    border-radius: 50%;
    top: -0.125rem;
    left: 0;
    transition: left 0.3s ease;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.toggle-checkbox:checked:before {
    left: 1rem;
}
</style>
