<template>
  <div id="mountNode"></div>
</template>

<script setup lang="ts">
import { defineComponent, onMounted } from 'vue'
import G6, { type GraphData, type TreeGraphData } from "@antv/g6";

import data from '@/stores/processes'


onMounted(() => {
  g6(data)
})

const g6 = (data: GraphData | TreeGraphData | undefined) => {
  // 图实例化，至少需要为图设置挂载容器、宽、高
  const graph = new G6.Graph({
    container: 'mountNode', // 指定挂载容器
    width: 800, // 图的宽度
    height: 500, // 图的高度
    // 默认节点集
    defaultNode: {
      shape: "circle",
      size: [100],
      color: "#5B8FF9",
      style: {
        fill: "#9EC9FF",
        lineWidth: 3
      },
      labelCfg: {
        style: {
          fill: "#fff",
          fontSize: 20
        }
      }
    },
    // 默认边集
    defaultEdge: {
      style: {
        stroke: "#e2e2e2"
      }
    }
  });
  // 数据加载和图的渲染
  graph.data(data);
  graph.render();
}


</script>

<style lang="scss" scoped>
</style>
