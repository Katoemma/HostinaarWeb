<script setup>
//import { ref, watch,defineEmits } from 'vue';
const emit = defineEmits(['country-selected'])

const countries = ref([]);
const selectedCountry = ref('');
const flag = ref('');



const fetchCountry = async () => {
    const apiKey = 'QTdWampncFlDOFFWbG9ycml6a0VkMFZEeDQ5dFBrSlN1WkVyQm92aw==';

    try {
        const response = await fetch('https://api.countrystatecity.in/v1/countries', {
            headers: {
                'X-CSCAPI-KEY': apiKey
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        countries.value = data;

    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

fetchCountry();


const handleSelect = () => {
  flag.value = `https://flagsapi.com/${selectedCountry.value}/flat/64.png`;
  emit('select', selectedCountry.value);
};
</script>

<template>
    <div>
        <div class="flex items-center border rounded-lg p-2 justify-between mb-6">
            <img v-if="selectedCountry" :src="flag" alt="Country Flag" class="w-6 h-6 mr-2">
            <select class="w-full px-2 py-1" v-model="selectedCountry" @change="handleSelect">
                <option value="" disabled selected>Select Country</option>
                <option v-for="country in countries" :key="country.iso2" :value="country.iso2">{{ country.name }}</option>
            </select>
        </div>
    </div>
</template>
