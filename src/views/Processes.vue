<template>
    <div ref="chart" style="width: 600px; height: 400px;"></div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, nextTick } from 'vue';
  import * as echarts from 'echarts';
  const chartData = ref([
    { value: 335, name: 'Category 1' },
    { value: 310, name: 'Category 2' },
    { value: 234, name: 'Category 3' },
    { value: 135, name: 'Category 4' },
    { value: 1548, name: 'Category 5' }
  ]);
  
  const chartRef = ref(null);
  
  onMounted(async () => {
    await nextTick(); // 等待组件渲染完成
  
    let myChart = echarts.init(chartRef.value);
  
    let option = {
      title: {
        text: 'ECharts Demo'
      },
      tooltip: {},
      legend: {
        data: ['Category']
      },
      xAxis: {
        data: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5']
      },
      yAxis: {},
      series: [{
        name: 'Category',
        type: 'bar',
        data: chartData.value.map(item => item.value)
      }]
    };
  
    myChart.setOption(option);
  });
  </script>
  
  <style>
  /* 可以添加一些样式 */
  </style>
  