const axios = require('axios');

class Request {
  async get(url, params = null, headers = null) {
    try {
      const response = await axios.get(url, {
        params: params,
        headers: headers
      });
      return response.data;
    } catch (error) {
      console.log(
        {
          message: error.message,
          details: error.config
        }
      );
    }
  }

  async post(url, data = null, headers = null) {
    try {
      const response = await axios.post(url, data, { headers: headers });
      return response.data;
    } catch (error) {
      console.log(
        {
          message: error.message,
          details: error.config
        }
      );
    }
  }

  async delete(url, data = null, headers = null) {
    try {
      const response = await axios.delete(url, { data: data, headers: headers });
      return response.data;
    } catch (error) {
      console.log(
        {
          message: error.message,
          details: error.config
        }
      );
    }
  }
}

module.exports = new Request();
