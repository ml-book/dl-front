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
