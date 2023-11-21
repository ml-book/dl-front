import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { dataType } from 'element-plus/es/components/table-v2/src/common'
import type { IReceivedData } from '@/stores/elementcard/types'
import type { ISendData } from '@/stores/elementcard/types'
 const data = {
    // 节点集
    nodes: [
        {
            id: 'node1', // 节点的唯一标识
            x: 100, // 节点横坐标
            y: 200, // 节点纵坐标
            label: '起始点', // 节点文本
            size: 50, // 节点大小
            type: 'circle', //指定节点类型，内置节点类型名称或自定义节点的名称。默认为 'circle'
            // 指定边连入节点的连接点的位置（相对于该节点而言），可以为空。
            // 例如: [0, 0]，代表节点左上角的锚点，[1, 1],代表节点右下角的锚点
            anchorPoints: [],	
            //节点的样式属性
            style: {    
                fill: '#00FFFF', // 节点填充色
                stroke: '#FFFF00',  // 节点的描边颜色
                lineWidth: 5,       // 描边宽度 
                // ... 其他属性
            }, 
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
            label: '目标点',
        },
    ],
    // 边集
    edges: [
        // 表示一条从 node1 节点连接到 node2 节点的边
        {
            source: 'node1', // 起始点 id
            target: 'node2', // 目标点 id
            label: '我是连线', // 边的文本
            style: {
                stroke: '#000000',
                lineWidth: 5,
                // ... 其他样式属性
              },
        },
    ],
};

const data1={
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

export default data
