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
    const createSessionUrl = `${this.config.apiUrl}/sessions/create`;

    const sessionId = await fetch(createSessionUrl, { method: "post" }).then(
      data => data.text()
    );

    if (!sessionId) return null;

    return sessionId;
  }

  async updateSession({ sessionId, counter }) {
    const createSessionUrl = `${this.config.apiUrl}/sessions/update`;

    const body = { sessionId, counter };

    const session = await fetch(createSessionUrl, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then(data => data.json());

    return session;
  }
  // ##################
  async getSessionId() {
    const sessionId =
      this._getLocalSessionId() || (await this._createSessionId());

    this._saveLocalSessionId(sessionId);

    return sessionId;
  }

  async getSession(sessionId) {
    const getSessionUrl = `${this.config.apiUrl}/sessions/get?sessionId=${sessionId}`;

    const session = await fetch(getSessionUrl, { method: "get" }).then(data =>
      data.json()
    );

    if (!session) return null;

    return session;
  }
}

export default new SessionService({
  apiUrl: "http://localhost:3030",
});
