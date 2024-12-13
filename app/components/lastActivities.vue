<template>
    <div class="bg-white shadow rounded-md p-6">
      <h2 class="text-lg font-semibold text-gray-800 mb-4">Last Activities</h2>
      <ul class="divide-y divide-gray-200">
        <!-- Loop through filtered activities -->
        <li
          v-for="(activity, index) in filteredActivities"
          :key="index"
          class="py-4 flex items-center space-x-4"
        >
          <!-- Activity Icon -->
          <Icon :name="activity.icon" class="w-10 h-10 text-gray-600" />
          <!-- Activity Details -->
          <div class="flex-1">
            <p class="text-sm text-gray-600">
              <span class="font-medium text-gray-800">{{ activity.name }}</span>
              {{ activity.description }}
            </p>
            <p class="text-xs text-gray-400">{{ activity.time }}</p>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { computed } from "vue";
  
  // Mock current user role (for demo purposes, replace with real role data in production)
  const userRole = "student"; // Change to "hostelAdmin" or "systemAdmin" to see other roles
  
  // Activity data for different roles
  const roleActivitiesMap = {
    student: [
      {
        name: "John Doe",
        icon: "mdi:calendar-check",
        description: "booked Room 205 in Sunshine Hostel.",
        time: "2 hours ago",
      },
      {
        name: "John Doe",
        icon: "mdi:cash-check",
        description: "paid $500 for Room 305 in Skyline Hostel.",
        time: "5 hours ago",
      },
      {
        name: "John Doe",
        icon: "hugeicons:image-upload-01",
        description: "uploaded ID verification document.",
        time: "1 day ago",
      },
      {
        name: "John Doe",
        icon: "hugeicons:calendar-01",
        description: "received a reminder for an upcoming check-in.",
        time: "3 days ago",
      },
      {
        name: "John Doe",
        icon: "hugeicons:star",
        description: "left a review for Green Hostel.",
        time: "1 week ago",
      },
    ],
    hostelAdmin: [
      {
        name: "Admin - Michael Brown",
        icon: "mdi:account-check",
        description: "approved a booking request for Room 205.",
        time: "1 hour ago",
      },
      {
        name: "Admin - Michael Brown",
        icon: "mdi:cancel",
        description: "rejected a booking request for Room 102.",
        time: "3 hours ago",
      },
      {
        name: "Admin - Michael Brown",
        icon: "hugeicons:calendar-01",
        description: "updated room availability for Skyline Hostel.",
        time: "6 hours ago",
      },
      {
        name: "Admin - Michael Brown",
        icon: "mdi:message-reply-text",
        description: "replied to a student inquiry about Room 305.",
        time: "1 day ago",
      },
      {
        name: "Admin - Michael Brown",
        icon: "mdi:currency-usd",
        description: "refunded $100 to John Doe for Room 301.",
        time: "2 days ago",
      },
    ],
    systemAdmin: [
      {
        name: "System Admin - Emily White",
        icon: "mdi:server",
        description: "performed a system backup.",
        time: "30 minutes ago",
      },
      {
        name: "System Admin - Emily White",
        icon: "mdi:alert-circle-check",
        description: "resolved a system error affecting bookings.",
        time: "2 hours ago",
      },
      {
        name: "System Admin - Emily White",
        icon: "mdi:shield-key",
        description: "updated security policies for user authentication.",
        time: "5 hours ago",
      },
      {
        name: "System Admin - Emily White",
        icon: "mdi:email-check",
        description: "verified email configurations for notifications.",
        time: "1 day ago",
      },
      {
        name: "System Admin - Emily White",
        icon: "mdi:account-plus",
        description: "added a new hostel admin for Green Hostel.",
        time: "2 days ago",
      },
    ],
  };
  
  // Filter activities based on user role
  const filteredActivities = computed(() => roleActivitiesMap[userRole] || []);
  </script>
  
  <style scoped>
  /* Optional: Add some hover effects */
  li:hover {
    background-color: #f9fafb; /* Light gray background */
  }
  </style>
  