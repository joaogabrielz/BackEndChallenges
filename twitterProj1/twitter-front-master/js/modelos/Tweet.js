class Tweet {
  constructor(id, content, user) {
    this._id = id;
    this._content = content;
    this._user = user;
  }

  get id() {
    return this._id;
  }

  get content() {
    return this._content;
  }

  get user() {
    return this._user;
  }
}