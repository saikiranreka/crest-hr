import "whatwg-fetch";

class ApiClient {

  setAccessToken(accessToken) {
    this.accessToken = accessToken;
  }

  async get(url) {
    const fullUrl = ApiClient.createUrl(url);
    return fetch(fullUrl)
        .then(ApiClient.checkStatus)
        .then((response) => response.json());
  }

  async post(url, data) {
    const fullUrl = ApiClient.createUrl(url);
    return fetch(fullUrl, {
          method : "POST",
          body : JSON.stringify(data),
          headers : { 'Content-Type': 'application/json' },
        })
        .then(ApiClient.checkStatus)
        .then((response) => response.json());
  }

  async put(url, data) {
    const fullUrl = ApiClient.createUrl(url);
    return fetch(fullUrl, {
          method : "PUT",
          body : JSON.stringify(data),
          headers : { 'Content-Type': 'application/json' },
        })
        .then(ApiClient.checkStatus)
        .then((response) => response.json());
  }

  static createUrl(url) {
    return `/api${url}`;
  }

  static checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      const error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }
}

export const Api = window.apiClient = new ApiClient();