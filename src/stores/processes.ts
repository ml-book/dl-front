import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { dataType } from 'element-plus/es/components/table-v2/src/common'
import type { ReceivedNodes } from '@/stores/elementcard/types'

export const useGraphStore = defineStore('graph',{
    state: () => ({
        nodes: [
            {
                id: 'node1', // 节点的唯一标识
                label: '算法', // 节点文本
            },
            {
                id: 'node2',
                label: '数据集',
            },
            {
                id: 'node3',
                label: '分割器',
            },
        ],
        // 边集
        edges: [
            // 表示一条从 node1 节点连接到 node2 节点的边
            {
                source: 'node1', // 起始点 id
                target: 'node2', // 目标点 id
                label: '', // 边的文本
            },
            {
                source: 'node2', // 起始点 id
                target: 'node3', // 目标点 id
                label: 'aa', // 边的文本
            },

        ],
        receiveNodes:{
            nodes:[
                {
                    id:0,
                    label:"model",
                }
                ,
                {
                    id:1,
                    label:"data"
                }
            ],
            edges:[
                {
                    source:0,
                    target:1,
                    label:""
                }
            ],

        }

    }),
    actions:{
        updateGraph(data:ReceivedNodes){
            if (data && data.nodes && data.edges) {
                this.nodes = data.nodes ;
                this.edges = data.edges;
              }
        }

    }
        
}) 