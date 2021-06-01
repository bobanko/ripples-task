class SessionService {
  constructor(config) {
    this.config = config;
  }

  _getLocalSessionId() {
    return sessionStorage.getItem("sessionId");
  }

  _saveLocalSessionId(sessionId) {
    sessionStorage.setItem("sessionId", sessionId);
  }

  async _createSessionId() {
    const createSessionUrl = `${this.apiUrl}/sessions/create`;

    const sessionId = await fetch(createSessionUrl, { method: "post" }).then(
      data => data.text()
    );

    return sessionId;
  }
  // ##################
  async getSessionId() {
    const sessionId =
      this._getLocalSessionId() || (await this._createSessionId());

    this._saveLocalSessionId(sessionId);

    return sessionId;
  }
}

export default new SessionService({
  apiUrl: "http://localhost:3030/",
});
