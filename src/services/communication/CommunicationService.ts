import { RunButton} from './Register'
import { OpenEvent, DataMessageEvent, CloseEvent, ErrorEvent, ParamMessageEvent, ConnectMessageRecvEvent, ConnectMessageSendEvent} from './KeyEvent'

import { useCardStore } from "@/stores/elementcard/elementcard";
import type { IReceivedData } from '@/stores/elementcard/types'
import type { ISendData } from '@/stores/elementcard/types'
import { ref, watch } from 'vue';
// namespace
export namespace CommunicationService {
  export let connectUrl: string
  export let connectPort: number
  export let showConnectInfoWindow: boolean
  export function Connect(): void{
    connect()
  }
  export function Button(): void{
    clickButton()
  }
}

let openEvent = OpenEvent.get_instance()
let dataMessageEvent = DataMessageEvent.get_instance()
let closeEvent = CloseEvent.get_instance()
let errorEvent = ErrorEvent.get_instance()
let paramMessageEvent = ParamMessageEvent.get_instance()
let connectMessageRecvEvent = ConnectMessageRecvEvent.get_instance()
let connectMessageSendEvent = ConnectMessageSendEvent.get_instance()

let button = new RunButton()

// let execute_config: string | null
let execute_config: IReceivedData[] | null 
let send_config : string | null
let connectUrl = '127.0.0.1'
let connectPort = '9876'
let ws: WebSocket

const connect = () => {
  ws = new WebSocket('ws://' + connectUrl + ':' + connectPort)
  
  ws.onopen = () => {
    openEvent.event(ws)
    connectMessageSendEvent.event(ws)// packet.type === 'connection'
  } 

  ws.onmessage = (evt) => {
    connectMessageRecvEvent.event(ws, evt)// received_msg.type === 'connection'
    execute_config = paramMessageEvent.event(ws, evt)// received_msg.type === 'param'
    
    // 更新前端页面数据
    useCardStore().updateData(execute_config)

    // 将用户选择的参数传回后端 如何等待客户选择完后再传
    // 获取 sd 数据
    const sd = useCardStore().getSendData();

    // 监听 sd 的变化
    watch(sd, (newData, oldData) => {
        // 当 sd 数据发生变化时执行以下代码
        if (newData !== oldData) {
            // 更新 send_config
            send_config = JSON.stringify(newData);
        }
    });
    // send_config=JSON.stringify(useCardStore().getSendData())
    dataMessageEvent.event(ws, evt)// received_msg.type === 'string'
  }

  ws.onclose = () => {
    closeEvent.event()
  }

  ws.onerror = () => {
    errorEvent.event()
  }
}

const clickButton = () => {
  if (send_config === null){
    console.error('"send_config" is null')
  }
  else{
    button.run(send_config, "server0/executer")
  }
}

connect() // 确保无论在何时重新加载网页都可以主动尝试连接