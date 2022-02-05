import 'regenerator-runtime/runtime'
import axios from 'axios';

export class TeamService {

  constructor(baseUrl, path) {
    this.baseUrl = baseUrl;
    this.path = path;
  }

  async getTeams() {
    return await axios.get('http://localhost:5500/teams');
  }

  async createTeam(team) {
    await axios.post('http://localhost:5500/teams', team);
  }

}