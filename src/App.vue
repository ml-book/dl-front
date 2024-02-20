<!-- src/App.vue -->

<template>
  <div id="app">
    <!-- 头部 -->
    <Header></Header>

    <div class="main">
      <!-- 左边导航栏 -->
      <Aside></Aside>

      <!-- 右边内容 -->
      <main>
        <router-view />
      </main>
    </div>
    <!--底部-->
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Aside from '@/components/Aside.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>


<style>
#app {

  margin: 0;
  padding: 0;
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}



.main {
  display: flex;
  justify-content: space-between;
  height: 100%;
}

aside {
  flex: 1;
  background-color: #eee;
  padding: 10px;
  min-width: 10px;
  height: 620px;
}

main {
  flex: 9;
  padding: 20px;
}

/* 样式化按钮 */
.run-button {
  right: 10px;
  background-color: green;
  /* 按钮背景颜色 */
  color: #fff;
  /* 文字颜色 */
  border: none;
  /* 移除边框 */
  padding: 5px 10px;
  /* 按钮内边距 */
  border-radius: 4px;
  /* 圆角 */
  cursor: pointer;
  /* 鼠标样式为手型 */
}

/* 当鼠标悬停时改变按钮颜色 */
.run-button:hover {
  background-color: #0056b3;
}
</style>
