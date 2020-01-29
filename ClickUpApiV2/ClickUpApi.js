const spaces = require('./Endpoints/Spaces');
const folders = require('./Endpoints/Folders');
const request = require('../Requesters/SuperAgent');
const apiKey = 'pk_3023811_ND9FAB6MPKZRPJXSC81IUEVCQNN3O1Q3';

class ClickUpApi {
  get version() {
    return 2;
  }

  get baseURL() {
    return `https://api.clickup.com/api/v${this.version}`;
  }

  get spaces() {
    return new spaces(this.baseURL, request, apiKey);
  }

  get folders() {
    return new folders(this.baseURL, request, apiKey);
  }

}

module.exports = new ClickUpApi();
