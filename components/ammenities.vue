<script setup></script>
<template>
  <div class="max-w-md mx-auto">
    <form class="px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/2">
            <label class="inline-flex items-center">
              <input
                type="checkbox"
                class="form-checkbox text-indigo-600"
                checked
              />
              <span class="ml-2">Wi-Fi</span>
            </label>
          </div>
          <div class="w-full md:w-1/2">
            <label class="inline-flex items-center">
              <input
                type="checkbox"
                class="form-checkbox text-indigo-600"
                checked
              />
              <span class="ml-2">Breakfast</span>
            </label>
          </div>
          <div class="w-full md:w-1/2">
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox text-indigo-600" />
              <span class="ml-2">Laundry</span>
            </label>
          </div>
          <div class="w-full md:w-1/2">
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox text-indigo-600" />
              <span class="ml-2">Parking</span>
            </label>
          </div>
          <div class="w-full md:w-1/2">
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox text-indigo-600" />
              <span class="ml-2">Parking</span>
            </label>
          </div>
          <div class="w-full md:w-1/2">
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox text-indigo-600" />
              <span class="ml-2">Parking</span>
            </label>
          </div>
          <!-- Add more existing amenities checkboxes as needed -->
        </div>
      </div>

      <!-- Add more checkboxes to add more amenities as needed -->
      <div class="flex items-center justify-between">
        <button
          class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</template>
