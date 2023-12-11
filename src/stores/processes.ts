import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { dataType } from 'element-plus/es/components/table-v2/src/common'

export const useGraphStore = defineStore('graph',{
    state: () => ({
        nodes: [
            {
                id: 'node1', // 节点的唯一标识
                x: 100, // 节点横坐标
                y: 200, // 节点纵坐标
                label: '算法', // 节点文本
                size: 100, // 节点大小
                type: 'circle', //指定节点类型，内置节点类型名称或自定义节点的名称。默认为 'circle'
                // 指定边连入节点的连接点的位置（相对于该节点而言），可以为空。
                // 例如: [0, 0]，代表节点左上角的锚点，[1, 1],代表节点右下角的锚点
                anchorPoints: [],	
                //节点的样式属性
                // style: {    
                //     fill: '#00FFFF', // 节点填充色
                //     stroke: '#FFFF00',  // 节点的描边颜色
                //     lineWidth: 5,       // 描边宽度 
                //     // ... 其他属性
                // }, 
                //	文本配置项
                labelCfg: {
                    position: 'bottom', // 文本相对于节点的位置
                    offset: 10, // 文本的偏移
                    style: {    // 标签的样式属性。
                      fill: 'red', // 文本颜色
                    },
                  },
            },
            {
                id: 'node2',
                x: 300,
                y: 200,
                label: '数据集',
                size:100,
                labelCfg: {
                    position: 'bottom', // 文本相对于节点的位置
                    offset: 10, // 文本的偏移
                    style: {    // 标签的样式属性。
                      fill: 'red', // 文本颜色
                    },
                  },
            },
            {
                id: 'node3',
                x: 500,
                y: 200,
                label: '分割器',
                size:100,
                labelCfg: {
                    position: 'bottom', // 文本相对于节点的位置
                    offset: 10, // 文本的偏移
                    style: {    // 标签的样式属性。
                      fill: 'red', // 文本颜色
                    },
                  },
            },
        ],
        // 边集
        edges: [
            // 表示一条从 node1 节点连接到 node2 节点的边
            {
                source: 'node1', // 起始点 id
                target: 'node2', // 目标点 id
                label: '', // 边的文本
                style: {
                    stroke: '#000000',
                    lineWidth: 2,
                    // ... 其他样式属性
                  },
            },
            {
                source: 'node2', // 起始点 id
                target: 'node3', // 目标点 id
                label: '', // 边的文本
                style: {
                    stroke: '#000000',
                    lineWidth: 2,
                    // ... 其他样式属性
                  },
            },

        ],
        receiveNodes:{
            nodes:[
                {
                    id:0,
                    name:"data",
                }
            ],
            edges:[
                {
                    from:0,
                    to:0,
                    text:""
                }
            ],

        }

    }),
    actions:{
        updateGraph(){
            
        }

    }
        
}) 