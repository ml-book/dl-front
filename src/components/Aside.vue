<template>
    <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style="width: 280px;">
        <!-- <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <svg class="bi pe-none me-2" width="40" height="32">
                <use xlink:href="#bootstrap" />
            </svg>
            <span class="fs-4"></span>
        </a> -->
        <hr>
        <ul class="nav nav-pills flex-column mb-auto">
            <router-link to="/modules">

                
                <!-- class="nav_item" -->
                <li @click="selectTab('modules')" :class="{ active: activeTab === '/modules' }">
                    <a href="#" class="nav-link active" aria-current="page">
                        <svg class="bi pe-none me-2" width="16" height="16">
                            <use xlink:href="#home" />
                        </svg>
                        模块
                    </a>
                </li>
            </router-link>
            <router-link to="/processes">
                <li @click="selectTab('processes')" :class="{ active: activeTab === '/processes' }">
                    <a href="#" class="nav-link link-dark" >
                        <svg class="bi pe-none me-2" width="16" height="16">
                            <use xlink:href="#speedometer2" />
                        </svg>
                        流程
                    </a>

                </li>
            </router-link>

        </ul>
        <hr>

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, } from 'vue'
const activeTab = ref('modules');

const selectTab = (tab: string) => {
  activeTab.value = tab;
};
</script>


<style>
.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

@media (min-width: 300px) {
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
    /* overflow-y: hidden; */
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

a {
    text-decoration: none;
}
</style>