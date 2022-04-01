import Axios from '../common/axios';

export default class TagService {
  
  static async gerTags() {
    const response: ItagData[] = await Axios.get('/tags');

    return response;
  }
}
