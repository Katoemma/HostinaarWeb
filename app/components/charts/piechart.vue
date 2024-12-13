<template>
    <div ref="chartContainer" class="w-full h-96 bg-white dark:bg-gray-800 shadow rounded-md"></div>
</template>

<script setup>
import * as echarts from 'echarts';

const props = defineProps({
  title: {
    type: String,
    default: 'Pie Chart',
  },
  pieData: {
    type: Array,
    default: () => [
      { value: 1048, name: 'Search Engine' },
      { value: 735, name: 'Direct' },
      { value: 580, name: 'Email' },
      { value: 484, name: 'Union Ads' },
      { value: 300, name: 'Video Ads' },
    ],
  },
});

const chartContainer = ref(null);
let chartInstance = null;

// Reactive chart options
const chartOptions = ref({
  title: { text: props.title, left: 'center' },
  tooltip: { trigger: 'item' },
  legend: { bottom: '5%' },
  series: [
    {
      name: 'Access Source',
      type: 'pie',
      radius: '50%',
      data: props.pieData,
    },
  ],
});

onMounted(() => {
  if (chartContainer.value) {
    chartInstance = echarts.init(chartContainer.value);
    chartInstance.setOption(chartOptions.value);

    // Resize handling
    window.addEventListener('resize', resizeChart);
  }
});

onBeforeUnmount(() => {
  if (chartInstance) {
    window.removeEventListener('resize', resizeChart);
    chartInstance.dispose();
    chartInstance = null;
  }
});

const resizeChart = () => {
  if (chartInstance) chartInstance.resize();
};

watch(chartOptions, (newOptions) => {
  if (chartInstance) chartInstance.setOption(newOptions);
}, { deep: true });
</script>