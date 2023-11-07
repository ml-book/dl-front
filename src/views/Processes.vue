<!-- src/views/Processes.vue -->

<template>
    <div class="content">
        <h1>流程内容</h1>
        <!-- 添加流程内容 -->
        <h1>count:{{ countStore.count }}</h1>
        <h1>doublecount:{{ countStore.doubleCount }}</h1>
        <button @click="countStore.increment()">+1</button>
    </div>
</template>
<script setup lang="ts">
import { useCounterStore } from '@/stores/counter.ts'
const countStore: ReturnType<typeof useCounterStore> = useCounterStore();

</script>
  
<style scoped>
.content {
    padding: 20px;
}
</style>
  