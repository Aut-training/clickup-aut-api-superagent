const pathUrl = '/cardsets.php';

class CardSet {
  constructor(baseUrl, request) {
    this.baseUrl = baseUrl + pathUrl;
    this.request = request;
  }

  async getCardSets() {
    const response = await this.request.get(this.baseUrl);
    return response;
  }
}

module.exports = CardSet;
