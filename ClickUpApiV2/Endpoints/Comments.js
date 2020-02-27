/**
 * Comments module for ClickUp API endpoint methods.
 * @module Comments
 */

/** @constant {string} - Path URL for the endpoint */
const pathUrl = '/Comment';

/**
 * Class implementation for Comments ClickUp Endpoint methods.
 * @class
 */
class Comments {
  /**
   * Create a Comment Endpoint with its API methods.
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
   * Creates a new Comment in a task.
   *
   * @async
   * @method
   * @param {string|number} taskId - The Task ID to create the Comment.
   * @param {string} comment - The Comment to set in the Task.
   * @return {Promise<Object>} The Comment object created by ClickUp.
   * @example
   * // returns {"checklist": { "id": 15826580, "hist_id": 1764883347554751118: "date": 1580991384622 }}
   * comments.createTaskComment("TaskId", "New Comment");
   */
  async createTaskComment(taskId, comment) {
    const taskComment = await this.request.post(`${this.baseUrl}/task/${taskId}${pathUrl}`, {
      comment_text: comment,
      assignee: null, 
      notify_all: true
    }, { 'Authorization': this.apiKey });
    return taskComment;
  }

  /**
   * Creates a new Comment in a list.
   *
   * @async
   * @method
   * @param {string|number} listId - The List ID to create the Comment.
   * @param {string} comment - The Comment to set in the List.
   * @return {Promise<Object>} The Comment object created by ClickUp.
   * @example
   * // returns {"checklist": { "id": 15826580, "hist_id": 1764883347554751118, "date": 1580991384622 } }
   * comments.createListComment("ListId", "New Comment");
   */
  async createListComment(listId, comment) {
    const listComment = await this.request.post(`${this.baseUrl}/list/${listId}${pathUrl}`, {
      comment_text: comment,
      assignee: null, 
      notify_all: true
    }, { 'Authorization': this.apiKey });
    return listComment;
  }

  /**
   * Creates a new Comment in a view.
   *
   * @async
   * @method
   * @param {string|number} viewId - The View ID to create the Comment.
   * @param {string} comment - The Comment to set in the View.
   * @return {Promise<Object>} The Comment object created by ClickUp.
   * @example
   * // returns {"checklist": { "id": 15826580, "hist_id": 1764883347554751118, "date": 1580991384622 } }
   * comments.createViewComment("ViewId", "New Comment");
   */
  async createViewComment(viewId, comment) {
    const viewComment = await this.request.post(`${this.baseUrl}/view/${viewId}${pathUrl}`, {
      comment_text: comment,
      notify_all: true
    }, { 'Authorization': this.apiKey });
    return viewComment;
  }

  /**
   * Gets an array of Comments in a Task.
   *
   * @async
   * @method
   * @param {string|number} taskId - The Task ID.
   * @return {Promise<Array.<Object>>} An Array of Comments in a Task.
   * @example
   * // returns [{id: 123, comment: [], comment_text...}, {id: 456, comment: [], comment_text...}]
   * comments.getTaskComments("taskId");
   */
  async getTaskComments(taskId) {
    const taskComments = await this.request.get(`${this.baseUrl}/task/${taskId}${pathUrl}`, {
      archived: false
    }, { 'Authorization': this.apiKey });
    return taskComments.comments;
  }

  /**
   * Gets an array of Comments in a List.
   *
   * @async
   * @method
   * @param {number} listId - The List ID.
   * @return {Promise<Array.<Object>>} An Array of Comments in a List.
   * @example
   * // returns [{id: 123, comment: [], comment_text...}, {id: 456, comment: [], comment_text...}]
   * comments.getListComments("listId");
   */
  async getListComments(listId) {
    const listComments = await this.request.get(`${this.baseUrl}/list/${listId}${pathUrl}`, {
      archived: false
    }, { 'Authorization': this.apiKey });
    return listComments.comments;
  }

  /**
   * Gets an array of Comments from a View.
   *
   * @async
   * @method
   * @param {number} ViewId - The View ID.
   * @return {Promise<Array.<Object>>} An Array of Comments in a View.
   * @example
   * // returns [{id: 123, comment: [], comment_text...}, {id: 456, comment: [], comment_text...}]
   * comments.getViewComments("viewId");
   */
  async getViewComments(viewId) {
    const viewComments = await this.request.get(`${this.baseUrl}/view/${viewId}${pathUrl}`, {
      archived: false
    }, { 'Authorization': this.apiKey });
    return viewComments.comments;
  }

  /**
   * Updates a Comment.
   *
   * @async
   * @method
   * @param {number} commentId - The ID of the comment to be updated.
   * @param {string} comment - The new comment value.
   * @return {Promise<Object>} Returns an empty object when the update was successfully performed by ClickUp.
   * @example
   * // returns {}
   * comments.updateComment("CommentId", "New Comment");
   */
  async updateComment(commentId, comment) {
    const updatedComment = await this.request.put(`${this.baseUrl}${pathUrl}/${commentId}`, {
      comment_text: comment,
      assignee: null, 
      resolved: true
    }, { 'Authorization': this.apiKey });
    return updatedComment;
  }

  /**
   * Deletes a given Comment.
   *
   * @async
   * @method
   * @param {number} commentId - The Comment ID.
   * @return {Promise<Array.<Object>>} Returns an empty object when the deletion was successfully performed by ClickUp.
   * @example
   * // returns {}
   * comments.deleteComment("CommentId");
   */
  async deleteComment(commentId) {
    const comment = await this.request.delete(`${this.baseUrl}${pathUrl}/${commentId}`, {
      archived: false
    }, { 'Authorization': this.apiKey });
    return comment;
  }

}

module.exports = Comments;
