<!-- src/components/Header.vue-->
<template>
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <svg class="bi me-2" width="40" height="32">
                <use xlink:href="#bootstrap" />
            </svg>
            <span class="fs-4">机器学习实战系统</span>
        </a>

        <ul class="nav nav-pills">
            <li class="nav-item" @click="clickButton"><a href="#" class="nav-link active" aria-current="page">run</a></li>
        </ul>
    </header>
</template>

<script setup lang="ts">
import {ref,computed,toRaw} from 'vue';
import { useCardStore} from "@/stores/elementcard/elementcard";

const cardStore = useCardStore();
const cardSendData = computed(() => cardStore.sendData);
const open =() => {

    // console.log(Reflect.get(cardSendData.value,'__v_raw'))
    // console.log(typeof cardStore.getSendData()["数据集"])
    console.log("要传过去的参数")
    console.log(toRaw(cardStore.getSendData()))

}

import {RunButton, CSManager} from '@/services/communication/Register'

const clickButton = () => {
  let button = new RunButton()
  // 实际上应该传递前端选择的param_config。这里为了方便直接用后端传过来的param_config。
  if (toRaw(cardStore.getSendData()) === null){
    console.error('"execute_config" is null')
  }
  else{
    const obj = cardStore.getSendData();
    console.log("传递的参数")
    console.log(obj)
    
    button.run(JSON.stringify(obj), "server0/executer")
    // button.run(obj, "server0/executer")
  }
}
</script>
<style>
.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

@media (min-width: 768px) {
    .bd-placeholder-img-lg {
        font-size: 3.5rem;
    }
}

.b-example-divider {
    height: 3rem;
    background-color: rgba(0, 0, 0, .1);
    border: solid rgba(0, 0, 0, .15);
    border-width: 1px 0;
    box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.b-example-vr {
    flex-shrink: 0;
    width: 1.5rem;
    height: 100vh;
}

.bi {
    vertical-align: -.125em;
    fill: currentColor;
}

.nav-scroller {
    position: relative;
    z-index: 2;
    height: 2.75rem;
    overflow-y: hidden;
}

.nav-scroller .nav {
    display: flex;
    flex-wrap: nowrap;
    padding-bottom: 1rem;
    margin-top: -1px;
    overflow-x: auto;
    text-align: center;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
}
</style>