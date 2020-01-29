const cardInfo = require('./Endpoints/CardInfo');
const cardSet = require('./Endpoints/CardSet');
const request = require('../Requesters/Request');

class YuGiOhApi {
  get version() {
    return 5;
  }

  get baseURL() {
    return `https://db.ygoprodeck.com/api/v${this.version}`;
  }

  get cardInfo() {
    return new cardInfo(this.baseURL, request);
  }

  get cardSet() {
    return new cardSet(this.baseURL, request);
  }
}

module.exports = new YuGiOhApi();
