class HttpUtils {
  #prefix = '';

  constructor(prefix) {
    this.#prefix = prefix;
  }

  async post(url, body) {
    return axios.post(`${this.#prefix}${url}`, body);
  }
}

export default HttpUtils;
