import 'regenerator-runtime/runtime'
import axios from 'axios';

export class SportService {

  constructor(baseUrl, path) {
    this.baseUrl = baseUrl;
    this.path = path;
  }

  async getSports() {
    return await axios.get('http://localhost:5500/sports');
  }

  async createSport(name) {
    await axios.post('http://localhost:5500/sports', { name });
  }

}