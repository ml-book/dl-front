interface IOptionData {
    name: string
    args: object
}

export interface IReceivedData {
    title: string
    options: Array<IOptionData>
}
export interface ISendData{
    [title: string]: {
        option: string;
        args: Record<string, any>;
      };
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
