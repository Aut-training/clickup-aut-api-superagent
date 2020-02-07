const pathUrl = '/tag';

/**
 * Class for using Tags ClickUp Endpoint.
 * @class
 */
class Tags {
  /**
   * Create a Tag Endpoint with its API methods.
   * @param {string} baseUrl - The Base URL of ClickUp API.
   * @param {number} request - The type of HTTP Requester to use.
   * @param {number} apiKey - The ClickUp API Key.
   */
  constructor(baseUrl, request, apiKey) {
    this.baseUrl = baseUrl;
    this.request = request;
    this.apiKey = apiKey;
  }

  /**
   * Creates a new Tag for a Space in ClickUp.
   *
   * @async
   * @function createSpaceTag
   * @param {string|number} spaceId - The Space ID to create the Tag.
   * @param {string} name - The name to set to the Tag. (It will be converted to lowercase)
   * @param {string} color - The color to set to the Tag in hex.
   * @param {string} backGroundColor - The background color to set to the Tag in hex.
   * @return {Promise<Object>} An empty object if the creation was successful by ClickUp.
   * @example
   * // returns {}
   * tags.createSpaceTag("My Tag", "#000000", "#000000");
   */
  async createSpaceTag(spaceId, name, color, backGroundColor) {
    const tag = await this.request.post(`${this.baseUrl}/space/${spaceId}${pathUrl}`, {tag: { name: name, tag_fg: color, tag_bg: backGroundColor }}, { 'Authorization': this.apiKey });
    return tag;
  }

  /**
   * Creates a new Tag for a Task in ClickUp.
   *
   * @async
   * @function createTaskTag
   * @param {string|number} taskId - The Task ID to create the Tag.
   * @param {string} name - The name to set to the Tag. (It will be converted to lowercase)
   * @return {Promise<Object>} An empty object if the creation was successful by ClickUp.
   * @example
   * // returns {}
   * tags.createTaskTag("taskId, "My tag");
   */
  async createTaskTag(taskId, name) {
    const tag = await this.request.post(`${this.baseUrl}/task/${taskId}${pathUrl}/${name}`, null, { 'Authorization': this.apiKey });
    return tag;
  }

  /**
   * Updates a Tag in ClickUp.
   *
   * @async
   * @function updateTag
   * @param {string|number} spaceId - The Space ID to create the Tag.
   * @param {string} name - The new name to set to the Tag. (It will be converted to lowercase)
   * @return {Promise<Object>} The Tag object updated by ClickUp.
   * @example
   * // returns {name: "Updated Tag", fg_color: "#ffffff", bg_color: "#ffffff"}
   * tags.updateTag(123, "Update Tag");
   */
  async updateTag(spaceId, name) {
    const tagUpdated = await this.request.put(`${this.baseUrl}/space/${spaceId}${pathUrl}/${name}`, null, { 'Authorization': this.apiKey });
    return tagUpdated;
  }

  /**
   * Deletes a Tag in a Space in ClickUp.
   *
   * @async
   * @function deleteSpaceTag
   * @param {string|number} spaceId - The Space ID.
   * @param {string} name - The name of the Tag to delete.
   * @return {Promise<Object>} An empty object if the deletion was successful by ClickUp.
   * @example
   * // returns {}
   * tags.deleteSpaceTag("spaceId", "My tag");
   */
  async deleteSpaceTag(spaceId, name) {
    const tagDeleted = await this.request.delete(`${this.baseUrl}/space/${spaceId}${pathUrl}/${name}`, null, { 'Authorization': this.apiKey });
    return tagDeleted;
  }

  /**
   * Removes a Tag from a task in ClickUp.
   *
   * @async
   * @function removeTagTask
   * @param {string|number} taskId - The Task ID.
   * @param {string} name - The name of the Tag to remove.
   * @return {Promise<Object>} An empty object if the deletion was successful by ClickUp.
   * @example
   * // returns {}
   * tags.removeTagTask("taskId", "My tag");
   */
  async removeTagTask(taskId, name) {
    const tagDeleted = await this.request.delete(`${this.baseUrl}/task/${taskId}${pathUrl}/${name}`, null, { 'Authorization': this.apiKey });
    return tagDeleted;
  }

  /**
   * Gets an array of Tags in a Space in ClickUp.
   *
   * @async
   * @function getTagsFromSpace
   * @param {string|number} spaceId - The Space ID.
   * @return {Promise<Array.<Object>>} An Array of Tags in a Space.
   * @example
   * // returns [{name: "Tag name",tag_fg: "#000000", tag_bg: "#000000"}, {name: "Tag name 2",tag_fg: "#000000", tag_bg: "#000000"}]
   * tags.getTagsFromSpace("spaceId");
   */
  async getTagsFromSpace(spaceId) {
    const tags = await this.request.get(`${this.baseUrl}/space/${spaceId}${pathUrl}`, null, { 'Authorization': this.apiKey });
    return tags.tags;
  }
}

module.exports = Tags;
