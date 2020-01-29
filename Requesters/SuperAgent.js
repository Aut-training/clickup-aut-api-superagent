const request = require('superagent');

class Request {
  async get(url, params = null, headers = null) {
    try {
      const response = await request.get(url).query((params == null) ? {} : params).set((headers == null) ? {} : headers);
      return response.body;
    } catch (error) {
      console.log(
        {
          message: error.message,
          details: error.options
        }
      );
    }
  }

  async post(url, data = null, headers = null) {
    try {
      const response = await request.post(url).send((data == null) ? {} : data).set((headers == null) ? {} : headers);
      return response.body;
    } catch (error) {
      console.log(
        {
          message: error.message,
          details: error.options
        }
      );
    }
  }

  async delete(url, data = null, headers = null) {
    try {
      const response = await request.delete(url).send((data == null) ? {} : data).set(headers);
      return response.body;
    } catch (error) {
      console.log(
        {
          message: error.message,
          details: error.options
        }
      );
    }
  }
}

module.exports = new Request();
