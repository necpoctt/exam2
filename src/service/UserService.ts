import Axios from '../common/axios';



export default class UserService {
  static async gerUserAllList({ keyword, page, pageSize } : IuserAllListRequest) {
    let param = `page=${page}&pageSize=${pageSize}`;
    if (keyword) {
      param += `&keyword=${keyword}`;
    }

    const response:IuserList = await Axios.get(`/users/all?${param}`);

    return response;
  }

  static async gerUserFriendList({ page, pageSize } : IuserAllListRequest) {
    const param = `page=${page}&pageSize=${pageSize}`;

    const response:IuserList = await Axios.get(`/users/friends?${param}`);

    return response;
  }
}
