<script setup>
import { ref, computed } from "vue";

// Sidebar state
const isCollapsed = ref(false);
const isDarkMode = ref(false); // New state for dark mode

// User role (simulated; you can dynamically fetch this from your authentication system)
const userRole = ref("hostelAdmin"); // Possible values: 'student', 'hostelAdmin', 'systemAdmin'

// All navigation items categorized by roles
const allNavItems = {
  student: [
    { label: "Dashboard", icon: "hugeicons:home-03" },
    { label: "Hostels", icon: "hugeicons:hotel-01" },
    { label: "My Bookings", icon: "hugeicons:package-sent" },
    { label: "Payments", icon: "hugeicons:credit-card-validation" },
    { label: "Notices", icon: "hugeicons:notification-square" },
    { label: "Help & Support", icon: "hugeicons:customer-service-01" },
    { label: "Profile Settings", icon: "hugeicons:setting-07" },
  ],
  hostelAdmin: [
    { label: "Dashboard", icon: "hugeicons:home-03" },
    { label: "Rooms Management", icon: "hugeicons:bed-bunk" },
    { label: "Bookings", icon: "hugeicons:calendar-01" },
    { label: "Payments", icon: "hugeicons:credit-card-validation" },
    { label: "Notices", icon: "hugeicons:notification-square" },
    { label: "Maintenance Requests", icon: "hugeicons:license-maintenance" },
    { label: "Profile Settings", icon: "hugeicons:setting-07" },
  ],
  systemAdmin: [
    { label: "Dashboard", icon: "hugeicons:home-03" },
    { label: "Hostel Management", icon: "hugeicons:building-01" },
    { label: "Users", icon: "hugeicons:user-group" },
    { label: "System Logs", icon: "hugeicons:solar-system-01" },
    { label: "Payments", icon: "hugeicons:credit-card-validation" },
    { label: "Announcements", icon: "hugeicons:brochure" },
    { label: "Settings", icon: "hugeicons:setting-07" },
  ],
};

// Computed navigation items based on user role
const mainNav = computed(() => allNavItems[userRole.value]);

// Settings navigation (common for all roles)
const settingsNav = ref([
  { label: "Notification", icon: "hugeicons:notification-01" },
  { label: "Settings", icon: "hugeicons:setting-07" },
]);

// Toggle collapse
const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value;
};

// Toggle dark mode
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.body.classList.toggle("dark", isDarkMode.value); // Apply dark mode class to body
};
</script>

<template>
  <div
    :class="{
      'w-64': !isCollapsed,
      'w-28': isCollapsed,
    }"
    class=" transition-all duration-300 flex flex-col h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white border-r border-gray-200 dark:border-gray-800"
  >
    <!-- Top Section -->
    <div class="flex items-center justify-between px-4 py-3">
      <!-- Logo -->
      <div class="text-2xl font-bold truncate caveat-regular">
        <span v-if="!isCollapsed"><img src="/logo.png" alt="Logo" class="h-8 inline" /> Hostinaar</span>
        <span v-else><img src="/logo.png" alt="Logo" class="h-8 inline" /></span>
      </div>
      <!-- Collapse Button -->
      <button
        @click="toggleCollapse"
        class="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md"
      >
        <i :class="[isCollapsed ? 'fas fa-bars' : 'fas fa-arrow-left']"></i>
        <Icon
          :name="isCollapsed ? 'hugeicons:menu-01' : 'hugeicons:circle-arrow-left-02'"
          style=" font-size: 1.5rem;"
        />
      </button>
    </div>

    <!-- Main Navigation -->
    <nav class="flex-1 px-4 space-y-3">
      <div>
        <p
          v-if="!isCollapsed"
          class="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400"
        >
          Main
        </p>
        <ul>
          <li
            v-for="item in mainNav"
            :key="item.label"
            class="flex items-center space-x-2 p-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 mb-2"
          >
            <Icon :name="item.icon" style=" font-size: 1.5rem;" />
            <span v-if="!isCollapsed" class="text-sm">{{ item.label }}</span>
          </li>
        </ul>
      </div>

      <div>
        <p
          v-if="!isCollapsed"
          class="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400"
        >
          Settings
        </p>
        <ul>
          <li
            v-for="item in settingsNav"
            :key="item.label"
            class="flex items-center space-x-2 p-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <Icon :name="item.icon" style=" font-size: 1.5rem;" />
            <span v-if="!isCollapsed" class="text-sm">{{ item.label }}</span>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Bottom Section -->
    <div class="px-4 py-3 bg-gray-100 dark:bg-gray-800">
      <div
        class="flex items-center justify-between rounded-md bg-gray-200 dark:bg-gray-900 cursor-pointer border border-gray-300 dark:border-gray-700 p-[2px]"
        @click="toggleDarkMode"
      >
        <span
          v-if="!isCollapsed"
          class="flex gap-2 items-center text-sm w-full p-1 px-6 rounded-lg text-center"
          :class="{ 'border-2 border-gray-200 dark:border-gray-500 bg-white dark:bg-gray-700': !isDarkMode }"
        >
          <Icon name="hugeicons:sun-01" />
          Light
        </span>
        <span
          v-if="!isCollapsed"
          class="flex gap-2 items-center text-sm w-full p-1 px-6 rounded-lg text-center"
          :class="{ 'border-2 border-gray-200 dark:border-gray-500 bg-white dark:bg-gray-700': isDarkMode }"
        >
          <Icon name="hugeicons:moon-02" />
          Dark
        </span>
        <div v-if="isCollapsed" class="text-center">
          <Icon :name="isDarkMode ? 'hugeicons:sun-01' : 'hugeicons:moon-02'" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.caveat-regular {
  font-family: "Caveat", cursive;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>
