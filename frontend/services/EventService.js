import 'regenerator-runtime/runtime'
import axios from 'axios';

export class EventService {

  constructor(baseUrl, path) {
    this.baseUrl = baseUrl;
    this.path = path;
  }

  async getEvents() {
    return await axios.get('http://localhost:5500/events');
  }

  async getEventsBySport(id) {
    return await axios.get(`http://localhost:5500/events/${id}`);
  }

  async createEvent(event) {
    await axios.post('http://localhost:5500/events', event);
  }
}