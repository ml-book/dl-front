export interface DlFrameConfigInterface {
    [key: string]: string;
  }
export interface DlFrameInspectionInterface {
    [key: string]: Array<string>;
  }
export interface RunningOutputInterface {
    [key: string]: string;
  }
export interface RecvRemotePacket{
    from_addr: string
    to_addr: string
    type: string
    data: string
  }