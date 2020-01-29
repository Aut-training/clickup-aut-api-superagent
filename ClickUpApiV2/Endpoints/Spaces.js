const pathUrl = '/space';

class Spaces {
  constructor(baseUrl, request, apiKey) {
    this.baseUrl = baseUrl;
    this.request = request;
    this.apiKey = apiKey;
  }

  async createSpace(teamId, spaceName) {
    const response = await this.request.post(`${this.baseUrl}/team/${teamId}${pathUrl}`, {
      'name': spaceName,
      'multiple_assignees': true,
      'features': {
        'due_dates': {
          'enabled': true,
          'start_date': false,
          'remap_due_dates': true,
          'remap_closed_due_date': false
        },
        'time_tracking': {
          'enabled': false
        },
        'tags': {
          'enabled': true
        },
        'time_estimates': {
          'enabled': true
        },
        'checklists': {
          'enabled': true
        },
        'custom_fields': {
          'enabled': true
        },
        'remap_dependencies': {
          'enabled': true
        },
        'dependency_warning': {
          'enabled': true
        },
        'portfolios': {
          'enabled': true
        }
      }
    }, { 'Authorization': this.apiKey });
    return response;
  }

  async updateSpace(spaceId, name) {
    const response = await this.request.put(`${this.baseUrl}${pathUrl}/${spaceId}`, { name: name }, { 'Authorization': this.apiKey });
    return response;
  }

  async deleteSpace(spaceId) {
    const response = await this.request.delete(`${this.baseUrl}${pathUrl}/${spaceId}`, { archived: false }, { 'Authorization': this.apiKey });
    return response;
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
