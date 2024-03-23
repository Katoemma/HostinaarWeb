<script setup>
definePageMeta({
  layout: "dashboard",
  middleware: ["auth"],
});

// Items data
const items = [
  {
    label: "Details",
    content: "This is the content shown for Details",
  },
  {
    label: "Amenities",
    content: "And, this is the content for Amenities",
  },
  {
    label: "Pricing",
    content: "Finally, this is the content for Pricing",
  },
  {
    label: "Rules",
    content: "Finally, this is the content for Rules",
  },
  {
    label: "Photos",
    content: "Finally, this is the content for Photos",
  },
  {
    label: "Location",
    content: "Finally, this is the content for Location",
  },
];

const hostelName = ref("");
const hostelDescription = ref("");
const amenities = ref([]);
const singleRoomPrice = ref(0);
const doubleRoomPrice = ref(0);
const rules = ref([]);
const hostelPhotos = ref([]);
const hostelLocation = ref("");

const selectedIndex = ref(0); // Default to first item
const onChange = (index) => (selectedIndex.value = index);
</script>
<template>
  <div class="bg-white p-8 rounded-lg shadow-lg mb-10">
    <h1 class="text-2xl font-bold mb-4">Settings</h1>

    <UTabs :items="items" @change="onChange" class="w-full">
      <template #default="{ item, index, selected }">
        <div
          class="flex items-center gap-2 relative truncate cursor-pointer text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
        >
          <!-- Label -->
          <span>{{ item.label }}</span>

          <!-- Indicator when tab is selected -->
          <span
            v-if="selected"
            class="absolute -right-4 w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400"
          />
        </div>
      </template>
    </UTabs>

    <Details v-if="selectedIndex === 0" />
    <Ammenities v-if="selectedIndex === 1" />
  </div>
</template>
