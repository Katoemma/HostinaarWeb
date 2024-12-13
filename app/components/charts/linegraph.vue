<template>
    <div ref="chartContainer" class="w-full h-96 bg-white dark:bg-gray-800 shadow rounded-md"></div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
  import * as echarts from 'echarts';
  
  const chartContainer = ref(null);
  let chartInstance = null;
  
  const lineData = ref([120, 200, 150, 80, 70, 110, 130]);
  const labels = ref(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
  
  // Reactive chart options
  const chartOptions = ref({
    title: { text: 'Line Chart', left: 'center' },
    tooltip: { trigger: 'axis' },
    xAxis: { type: 'category', data: labels.value },
    yAxis: { type: 'value' },
    series: [
      {
        name: 'Sales',
        type: 'line',
        data: lineData.value,
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
  