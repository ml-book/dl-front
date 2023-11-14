import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { dataType } from 'element-plus/es/components/table-v2/src/common'
import type { IReceivedData } from '@/stores/elementcard/types'
import type { ISendData } from '@/stores/elementcard/types'

// definestore()第二个参数可接受Setup函数或Option对象
//收到的数据是没有useroption 其他都一样
export const useCardStore = defineStore('elementCard', {
    state: () => (
        {
            receiveData: [
                {
                    title: "算法",
                    useroption: 0,
                    options: [
                        {
                            name: "SVM",opt:{kernal:0,depth:0}, args: { kernal: ["default","linear","ploy"],depth:[1,2,3] }
                        },
                        {
                            name: "d_tree", opt:{depth:0},args: { depth: [5,10,20,30] }
                        },
                        {
                            name: "KNN", opt:{cluster:0},args: { cluster: [3,5,7,9] }
                    }]
                },
                {  
                    title: "数据集",
                    useroption: 1,
                    options: [
                        { name: "红酒", opt:{},args: {} },
                        { name: "鸢尾花", opt:{},args: {} },
                        { name: "波士顿", opt:{},args: {} }
                    ]
                },
                {  
                    title: "分割器",
                    useroption: 1,
                    options: [
                        { name: "红酒",opt:{}, args: {} },
                        { name: "鸢尾花", opt:{},args: {} },
                        { name: "波士顿", opt:{},args: {} }
                    ]
                }
            ],
            sendData: {
                "算法": { option: "SVM", args: { kernal: "default" } },
                "数据集": { option: "红酒", args: {} }
            },
            

        }),
    actions: {
        // 更新 
        updateData(data: Array<IReceivedData>) {
            // 遍历传入的数据数组
            data.forEach((item) => {
                // 查找匹配标题的 receiveData 条目
                const receiveDataItem = this.receiveData.find((rd: { title: string }) => rd.title === item.title);
            
                if (receiveDataItem) {
                    // 更新 useroption
                    // receiveDataItem.useroption = 0;
                
                    // 遍历传入的选项数据
                    item.options.forEach((optionData) => {
                        // 查找匹配名称的选项
                        const optionItem = receiveDataItem.options.find((od: { name: string }) => od.name === optionData.name);
                    
                        if (optionItem) {
                            // 更新选项的参数
                            optionItem.args = optionData.args;
                        }
                    });
                }
            });
        },
       //更新要发送的数据 并将数据发送给后端
        updateSendData(cardType: string, option: string, args: Record<string, any>) {
            this.sendData = {
                ...this.sendData,
                [cardType]: { option, args }
            };
        },
        
    }
})  
export const currentOption = ref('');
export const currentArgs = ref({});
export const selectedopt = ref({});
export const selectedArgs = ref({});