<script setup>
  const props = defineProps({
    // Header text
    headerText: {
      type: String,
      required: true,
    },
    // Total value to display
    totalValue: {
      type: [Number, String],
      required: true,
    },
    // Growth rate value
    growthRate: {
      type: Number,
      required: true,
    },
    // Text for growth status (e.g., "Up from yesterday")
    growthText: {
      type: String,
      default: "Up from yesterday",
    },
    // SVG path for the growth icon
    iconGrowth: {
      type: String,
      default: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
    },
    // SVG path for the main icon
    mainIcon: {
      type: String,
      required: true,
    },
    // Colors for the growth icon
    growthIconColor: {
      type: String,
      default: "text-green-500",
    },
    // Colors for the growth text
    growthTextColor: {
      type: String,
      default: "text-green-500",
    },
    // Background color for the main icon container
    iconBackgroundColor: {
      type: String,
      default: "bg-purple-100 text-purple-600",
    },
  });
</script>
<template>
    <div
      class="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 flex items-center justify-between"
    >
      <div>
        <h3 class="text-sm font-medium text-gray-500 dark:text-gray-300">{{ headerText }}</h3>
        <p class="text-3xl font-semibold text-gray-900 dark:text-white">{{ totalValue }}</p>
        <div class="flex items-center mt-2">
          <svg
            v-if="iconGrowth"
            :class="`h-5 w-5 ${growthIconColor}`"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path :d="iconGrowth" />
          </svg>
          <span
            :class="`${growthTextColor} text-sm font-medium ml-1`"
          >
            {{ growthRate }}% {{ growthText }}
          </span>
        </div>
      </div>
      <div
        :class="`${iconBackgroundColor} p-3 rounded-full flex items-center justify-center`"
      >
      <Icon :name="mainIcon"  style=" font-size: 1.8rem;" />
      </div>
    </div>
  </template>
  
  <style scoped>
  /* Add custom styles if necessary */
  </style>