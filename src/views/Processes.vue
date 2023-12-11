<template>
  <!-- 图的画布容器 -->
  <div ref="mountNode"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { createPinia } from 'pinia';
import G6 from '@antv/g6';
import {useGraphStore} from '@/stores/processes';

const graphStore = useGraphStore(); // 使用 Pinia 的 store

const mountNode = ref();

onMounted(() => {
  const graph = new G6.Graph({
    container: mountNode.value,
    width: 800,
    height: 500,
  });

  graph.data({
    nodes: graphStore.nodes,
    edges: graphStore.edges,
  });

  graph.render();
});
</script>
