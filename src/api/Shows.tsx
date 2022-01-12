import Api from './Api';
import Show from '../models/Show';
import Schedule from '../models/Schedule';
import Actor from '../models/Actor';

interface ShowsInterface {}

class ShowsApi implements ShowsInterface {
  fetch(id: number): Promise<Show> {
    return Api.http({
      method: 'get',
      url: `/shows/${id}`,
    });
  }

  fetchAll(): Promise<Schedule[]> {
    return Api.http({
      method: 'get',
      url: '/schedule',
    });
  }

  getCast(id: number): Promise<Actor[]> {
    return Api.http({
      method: 'get',
      url: `/shows/${id}/cast`,
    });
  }
}

export default new ShowsApi();
