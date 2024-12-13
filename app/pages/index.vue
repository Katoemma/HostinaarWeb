<script setup>

definePageMeta({
  layout: 'authenticated'
})
const route = useRoute()

// Card data
const cardData = [
  {
    headerText: "Total Rooms",
    totalValue: "40",
    growthRate: 8.5,
    growthText: "Up from yesterday",
    iconGrowth: "M3 10a1 1 0 011-1h8a1 1 0 110 2H4a1 1 0 01-1-1z",
    mainIcon: "hugeicons:bed-bunk",
    growthIconColor: "text-green-500",
    growthTextColor: "text-green-500",
    iconBackgroundColor: "bg-orange-100 text-orange-600"
  },
  {
    headerText: "Booked Rooms",
    totalValue: "25",
    growthRate: 8.5,
    growthText: "Up from yesterday",
    iconGrowth: "M3 10a1 1 0 011-1h8a1 1 0 110 2H4a1 1 0 01-1-1z",
    mainIcon: "hugeicons:bookmark-check-01",
    growthIconColor: "text-green-500",
    growthTextColor: "text-green-500",
    iconBackgroundColor: "bg-green-100 text-green-600"
  },
  {
    headerText: "Total Revenue",
    totalValue: "UGX 4,000,689",
    growthRate: 8.5,
    growthText: "Up from yesterday",
    iconGrowth: "M3 10a1 1 0 011-1h8a1 1 0 110 2H4a1 1 0 01-1-1z",
    mainIcon: "hugeicons:chart-increase",
    growthIconColor: "text-green-500",
    growthTextColor: "text-green-500",
    iconBackgroundColor: "bg-purple-100 text-purple-600"
  },
  {
    headerText: "Fee Defaulters",
    totalValue: "5",
    growthRate: 8.5,
    growthText: "Up from yesterday",
    iconGrowth: "M3 10a1 1 0 011-1h8a1 1 0 110 2H4a1 1 0 01-1-1z",
    mainIcon: "hugeicons:star-face",
    growthIconColor: "text-green-500",
    growthTextColor: "text-green-500",
    iconBackgroundColor: "bg-red-100 text-red-600"
  }
];
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <!-- Occupancy Overview -->
      <CardsDashboardCard
        v-for="(card, index) in cardData"
        :key="index"
        :headerText="card.headerText"
        :totalValue="card.totalValue"
        :growthRate="card.growthRate"
        :growthText="card.growthText"
        :iconGrowth="card.iconGrowth"
        :mainIcon="card.mainIcon"
        :growthIconColor="card.growthIconColor"
        :growthTextColor="card.growthTextColor"
        :iconBackgroundColor="card.iconBackgroundColor"
      />
      <!-- Announcements -->
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ChartsPiechart />
      <ChartsBargraph />
      <ChartsLinegraph />
    </div>
    <LastActivities />
  </div>
</template>