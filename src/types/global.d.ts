declare global {
   interface ItagData {
    id: string;
    name: string;
    count: number;
  }

  interface ItagItem {
    data?: Itag;
    isLoading?: boolean;
  }

  interface IuserAllListRequest {
    page: string | number;
    pageSize: string | number;
    keyword?: string;
  }

  interface IuserData {
    avater: string;
    id:string;
    keyword: string ;
    isFollowing:boolean;
    name:string;
    username:string 
  }

  interface IuserList {
    data:IuserData[];
    page: Number;
    pageSize: Number;
    total: Number;
    totalPages: Number;
  }

  interface IAutoSizer {
    height:number;
    width:number;
  }
}

export {};
