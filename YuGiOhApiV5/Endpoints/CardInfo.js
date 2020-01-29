const pathUrl = '/cardinfo.php';

class CardInfo {
  constructor(baseUrl, request) {
    this.baseUrl = baseUrl + pathUrl;
    this.request = request;
  }

  async getCardByName(name) {
    const response = await this.request.get(this.baseUrl, { name: name });
    return response[0];
  }

  async getCardsByNameLike(fname) {
    const response = await this.request.get(this.baseUrl, { fname: fname });
    return response;
  }

  async getCardsWithAttackMoreOrEqualThan(atk) {
    const response = await this.request.get(this.baseUrl, { atk: `gte${atk}` });
    return response;
  }

  async getCardsByRace(race) {
    const response = await this.request.get(this.baseUrl, { race: race });
    return response;
  }
}

module.exports = CardInfo;
