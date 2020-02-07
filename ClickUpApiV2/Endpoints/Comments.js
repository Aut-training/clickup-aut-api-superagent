const pathUrl = '/Comment';

/**
 * Class for using Comment ClickUp Endpoint.
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
   * @function createTaskComment
   * @param {string|number} taskId - The Task ID to create the Comment.
   * @param {string} comment - The Comment to set in the Task.
   * @return {Promise<Object>} The Comment object created by ClickUp.
   * @example
   * // returns {"checklist": { "id": 15826580, "hist_id": 1764883347554751118: "date": 1580991384622 }}
   * Comments.createTaskComment("TaskId", "New Comment");
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
   * @function createListComment
   * @param {string|number} listId - The List ID to create the Comment.
   * @param {string} comment - The Comment to set in the List.
   * @return {Promise<Object>} The Comment object created by ClickUp.
   * @example
   * // returns {"checklist": { "id": 15826580, "hist_id": 1764883347554751118, "date": 1580991384622 } }
   * Comments.createListComment("ListId", "New Comment");
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
   * @function createViewComment
   * @param {string|number} viewId - The View ID to create the Comment.
   * @param {string} comment - The Comment to set in the View.
   * @return {Promise<Object>} The Comment object created by ClickUp.
   * @example
   * // returns {"checklist": { "id": 15826580, "hist_id": 1764883347554751118, "date": 1580991384622 } }
   * Comments.createViewComment("ViewId", "New Comment");
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
   * @function getTaskComments
   * @param {string|number} taskId - The Task ID.
   * @return {Promise<Array.<Object>>} An Array of Comments in a Task.
   * @example
   * // returns [{id: 123, comment: [], comment_text...}, {id: 456, comment: [], comment_text...}]
   * Comments.getTaskComments("taskId");
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
   * @function getListComments
   * @param {number} listId - The List ID.
   * @return {Promise<Array.<Object>>} An Array of Comments in a List.
   * @example
   * // returns [{id: 123, comment: [], comment_text...}, {id: 456, comment: [], comment_text...}]
   * Comments.getListComments("listId");
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
   * @function getViewComments
   * @param {number} ViewId - The View ID.
   * @return {Promise<Array.<Object>>} An Array of Comments in a View.
   * @example
   * // returns [{id: 123, comment: [], comment_text...}, {id: 456, comment: [], comment_text...}]
   * Comments.getViewComments("viewId");
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
   * @function UpdateComment
   * @param {number} commentId - The ID of the comment to be updated.
   * @param {string} comment - The new comment value.
   * @return {Promise<Object>} Returns an empty object when the update was successfully performed by ClickUp.
   * @example
   * // returns {}
   * Comments.updateComment("CommentId", "New Comment");
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
   * @function deleteComment
   * @param {number} commentId - The Comment ID.
   * @return {Promise<Array.<Object>>} Returns an empty object when the deletion was successfully performed by ClickUp.
   * @example
   * // returns {}
   * Comments.deleteComment("CommentId");
   */
  async deleteComment(commentId) {
    const comment = await this.request.delete(`${this.baseUrl}${pathUrl}/${commentId}`, {
      archived: false
    }, { 'Authorization': this.apiKey });
    return comment;
  }

}

module.exports = Comments;
