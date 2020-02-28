/**
 * Superagent module API for HTTP requests.
 * @module SuperAgent
 */

/** @constant {module} - SuperAgent npm module */
const request = require('superagent');

/**
 * Class implementation for SuperAgent.
 * @class
 */
class SuperAgent {
  /**
   * Executes a GET method HTTP request.
   *
   * @async
   * @method
   * @param {string} url - The URL to make the request.
   * @param {Object} [params=null] - The parameters to send in the URL.
   * @param {Object} [headers=null] - The headers to go in the request.
   * @return {Promise<Object>} The Server response.
   * @example
   * // this will work as making a request with parameters in the URL
   * // https://jsonplaceholder.typicode.com/comments?postId=1
   * request.get("https://jsonplaceholder.typicode.com/comments", { postId:1 }, { apiKey: 123 } );
   */
  async get(url, params = null, headers = null) {
    try {
      const response = await request.get(url)
          .query((params == null) ? {} : params)
          .set((headers == null) ? {} : headers);
      return response.body;
    } catch (error) {
      console.log(
          {
            message: error.message,
            details: error.response.body,
          },
      );
    }
  }

  /**
   * Executes a POST method HTTP request.
   *
   * @async
   * @method
   * @param {string} url - The URL to make the request.
   * @param {Object} [data=null] - The data to send in the request body.
   * @param {Object} [headers=null] - The headers to go in the request.
   * @return {Promise<Object>} The Server response.
   * @example
   * request.post("URL", { id: 1, name: "my name to create" }, { apiKey: 123 });
   */
  async post(url, data = null, headers = null) {
    try {
      const response = await request.post(url)
          .send((data == null) ? {} : data)
          .set((headers == null) ? {} : headers);
      return response.body;
    } catch (error) {
      console.log(
          {
            message: error.message,
            details: error.response.body,
          },
      );
    }
  }

  /**
   * Executes a PUT method HTTP request.
   *
   * @async
   * @method
   * @param {string} url - The URL to make the request.
   * @param {Object} [data=null] - The data to send in the request body.
   * @param {Object} [headers=null] - The headers to go in the request.
   * @return {Promise<Object>} The Server response.
   * @example
   * request.put("URL", { id: 1, name: "my name to update" }, { apiKey: 123 });
   */
  async put(url, data = null, headers = null) {
    try {
      const response = await request.put(url)
          .send((data == null) ? {} : data)
          .set(headers);
      return response.body;
    } catch (error) {
      console.log(
          {
            message: error.message,
            details: error.response.body,
          },
      );
    }
  }

  /**
   * Executes a DELETE method HTTP request.
   *
   * @async
   * @method
   * @param {string} url - The URL to make the request.
   * @param {Object} [data=null] - The data to send in the request body.
   * @param {Object} [headers=null] - The headers to go in the request.
   * @return {Promise<Object>} The Server response.
   * @example
   * request.delete("URL", { id: 1, name: "my name to delete" },
   *  { apiKey: 123 });
   */
  async delete(url, data = null, headers = null) {
    try {
      const response = await request.delete(url)
          .send((data == null) ? {} : data)
          .set(headers);
      return response.body;
    } catch (error) {
      console.log(
          {
            message: error.message,
            details: error.response.body,
          },
      );
    }
  }
}

module.exports = new SuperAgent();
