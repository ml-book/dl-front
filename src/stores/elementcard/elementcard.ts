import { ref, computed,toRaw } from 'vue'
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
                                name: "SVM",opt:{kernal:"default",depth:1}, args: { kernal: ["default","linear","ploy"],depth:[1,2,3] }
                            },
                            {
                                name: "d_tree", opt:{depth:5},args: { depth: [5,10,20,30] }
                            },
                            {
                                name: "KNN", opt:{cluster:3},args: { cluster: [3,5,7,9] }
                        }]
                    },
                    {  
                        title: "数据集",
                        useroption: 1,
                        options: [
                            { name: "红酒", opt:{num:10},args: {num:[10,20,30]} },
                            { name: "鸢尾花", opt:{num:10},args: {num:[10,20,30]} },
                            { name: "波士顿", opt:{num:10},args: {num:[10,20,30]} }
                        ]
                    },
                    
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
                                // optionItem.args = optionData.args;
                                optionItem.args = optionData.args as typeof optionItem.args;

                                const optInitialValues: Record<string, any> = {};
                                Object.entries(optionData.args).forEach(([argKey, argValue]) => {
                                    if (Array.isArray(argValue) && argValue.length > 0) {
                                        optInitialValues[argKey] = argValue[0];
                                    } else if (typeof argValue === 'number') {
                                        optInitialValues[argKey] = argValue;
                                    }
                                });
            
                                optionItem.opt = optInitialValues as typeof optionItem.opt;
                            }
                        }); 
                    }
                });
            },
        
            updateArgs(cardType: string, option: string, args: Record<string, any>) {
                // 使用类型断言确保 this.sendData 是 SendData 类型
                const typedSendData = this.sendData as ISendData;

                if (typedSendData.hasOwnProperty(cardType)) {
                    // 更新 sendData[cardType] 对象的值
                    typedSendData[cardType] = { option, args };
                } else {
                    // 如果不存在该键，则给出警告或者进行适当处理
                    console.warn(`Key '${cardType}' does not exist in 'sendData'.`);
                    // 可以选择创建一个新的键值对
                    // typedSendData[cardType] = { option, args };
                }
            },
            //更新要发送的数据 并将数据发送给后端
            getSendData(){
                // 先做同步 opt和senddata是同步的
                return toRaw(this.sendData);
            },
        }
    })  
export const currentOption = ref('');
export const currentTitle = ref('');
export const currentArgs = ref({});
export const selectedopt = ref({});
export const selectedArgs = ref({});

