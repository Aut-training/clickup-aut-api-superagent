const pathUrl = '/space';

class Spaces {
  constructor(baseUrl, request, apiKey) {
    this.baseUrl = baseUrl;
    this.request = request;
    this.apiKey = apiKey;
  }

  async getSpaces(teamId) {
    const response = await this.request.get(`${this.baseUrl}/team/${teamId}${pathUrl}`, { archived: false }, { 'Authorization': this.apiKey });
    return response.spaces;
  }

  async getSpace(spaceId) {
    const response = await this.request.get(`${this.baseUrl}${pathUrl}/${spaceId}`, { archived: false }, { 'Authorization': this.apiKey });
    return response;
  }
}

module.exports = Spaces;
