interface IOptionData {
    name: string
    args: {[key:string]:any}
    opt:{[key:string]:any}
}

export interface IReceivedData {
    title: string
    options: Array<IOptionData>
}
export interface ISendData{
    title: any
}


interface Node {
    id: string;
    label: string;
  
  }
  
interface Edge {
    source: string;
    target: string;
    label: string;
    // ... 其他属性
  }
  
export interface ReceivedNodes {
    nodes: Node[];
    edges: Edge[];
  }
