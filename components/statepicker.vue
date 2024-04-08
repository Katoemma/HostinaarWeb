<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue';

const emit = defineEmits(['state-selected']);

const props = defineProps({
    country: String
});

const states = ref([]);
const selectedState = ref('');

const fetchCity = async () => {
    const apiKey = 'QTdWampncFlDOFFWbG9ycml6a0VkMFZEeDQ5dFBrSlN1WkVyQm92aw==';

    try {
        const response = await fetch(`https://api.countrystatecity.in/v1/countries/${props.country}/states`, {
            headers: {
                'X-CSCAPI-KEY': apiKey
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        states.value = data;
        console.log(data);

    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

// Watch for changes in the country prop and fetch cities accordingly
watch(() => props.country, async (newCountry) => {
    if (newCountry) {
        await fetchCity();
    }
});

const handleSelect = () => {
    emit('state-selected', selectedState.value);
};
</script>


<template>
    <div>
        <div class="flex items-center border rounded-lg p-2 justify-between mb-6">
            <select class="w-full px-2 py-1" v-model="selectedState" @change="handleSelect">
                <option value="" disabled selected>Select state/district</option>
                <option v-for="state in states" :key="state.iso2" :value="state.name">{{ state.name }}</option>
            </select>
        </div>
    </div>
</template>
