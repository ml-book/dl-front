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
                        title: "model",
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
                        title: "dataset",
                        useroption: 1,
                        options: [
                            { name: "红酒", opt:{num:10},args: {num:[10,20,30]} },
                            { name: "鸢尾花", opt:{num:10},args: {num:[10,20,30]} },
                            { name: "波士顿", opt:{num:10},args: {num:[10,20,30]} }
                        ]
                    },
                    {  
                        title: "data_split",
                        useroption: 2,
                        options: [
                            { name: 'TestSplitter',opt:{ratio:0.8}, args: {ratio: [0.8, 0.5]} },
                        ]
                    },
                    {  
                        title: "judger",
                        useroption: 3,
                        options: [
                            
                            {name: 'Judger_Clf', opt:{},args: {} },
                
                        ]
                    }
                    
                    
                ],
                sendData: {
                    "model": { name: "SVM", params: { kernal: "default" } },
                    "dataset": '',
                    "data_split":'',
                    "judger":''
                },
   
            }),
        actions: {
            // 更新 
            updateData(data: Array<IReceivedData> | null) {
                if (data != null) {
                    data.forEach((item) => {
                        // 查找匹配标题的 receiveData 条目
                        const receiveDataItem = toRaw(this.receiveData.find((rd) => rd.title === item.title));
                        console.log("收到的数据样子")
                        console.log(item)
                        if (receiveDataItem) {
                            // 清空选项数组
                            receiveDataItem.options = [];
            
                            // 遍历传入的选项数据
                            item.options.forEach((optionData) => {
                                // 创建新的选项对象并添加到 receiveDataItem.options 数组中
                                const newOptionItem = {
                                    name: optionData.name,
                                    args: optionData.args,
                                    opt:{},// 初始化opt对象
                                };
            
                                // 设置opt对象的参数名与参数值的对应关系
                                for (const argName in optionData.args) {
                                    if (optionData.args.hasOwnProperty(argName)) {
                                        const argValue = optionData.args[argName];
                                        newOptionItem.opt[argName] = Array.isArray(argValue) ? argValue[0] : argValue;
                                    }
                                }
            
                                receiveDataItem.options.push(newOptionItem);
                            });
            
                            // console.log("更新后的数据样子")
                            // console.log(receiveDataItem)
                            // console.log("更新后的数据样子")
                        } else {
                            // 如果不存在匹配标题的 receiveData 条目，则创建新的条目并添加到 receiveData 数组中
                            const newReceiveDataItem = {
                                title: item.title,
                                useroption: 0,
                                options: []
                            };
            
                            // 遍历传入的选项数据并添加到 options 数组中
                            item.options.forEach((optionData) => {
                                // 创建新的选项对象并添加到 receiveDataItem.options 数组中
                                const newOptionItem = {
                                    name: optionData.name,
                                    args: optionData.args,
                                    opt: {} // 初始化opt对象
                                };
            
                                // 设置opt对象的参数名与参数值的对应关系
                                for (const argName in optionData.args) {
                                    if (optionData.args.hasOwnProperty(argName)) {
                                        const argValue = optionData.args[argName];
                                        newOptionItem.opt[argName] = Array.isArray(argValue) ? argValue[0] : argValue;
                                    }
                                }
            
                                newReceiveDataItem.options.push(newOptionItem);
                            });
            
                            this.receiveData.push(newReceiveDataItem);
                        }
                    });
                }
            },
            
                    
            updateArgs(cardType: string, option: string, args: Record<string, any>) {
                // 使用类型断言确保 this.sendData 是 SendData 类型
                const typedSendData = this.sendData as ISendData;

                if (typedSendData.hasOwnProperty(cardType)) {
                    // 更新 sendData[cardType] 对象的值
                    typedSendData[cardType] = { option, ...args };
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

