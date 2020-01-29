const pathUrl = '/folder';

class Folders {
  constructor(baseUrl, request, apiKey) {
    this.baseUrl = baseUrl;
    this.request = request;
    this.apiKey = apiKey;
  }

  async getFolders(spaceId) {
    const response = await this.request.get(`${this.baseUrl}/space/${spaceId}${pathUrl}`, { archived: false }, { 'Authorization': this.apiKey });
    return response.folders;
  }

  async getFolder(folderId) {
    const response = await this.request.get(`${this.baseUrl}${pathUrl}/${folderId}`, { archived: false }, { 'Authorization': this.apiKey });
    return response;
  }

  async createFolder(spaceId, folderName) {
    const response = await this.request.post(`${this.baseUrl}/space/${spaceId}${pathUrl}`, { name: folderName }, { 'Authorization': this.apiKey });
    return response;
  }

  async deleteFolder(folderId) {
    const response = await this.request.delete(`${this.baseUrl}${pathUrl}/${folderId}`, null, { 'Authorization': this.apiKey });
    return response;
  }

}

module.exports = Folders;
