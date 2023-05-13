class TweetView {
  constructor(tweet) {
    this._tweet = tweet;
  }

  template() {
    return `
          <div class="tweet">
            <div class="content">
              <div class="tweet-header">
                <a class="screen-name-link" href="/${this._tweet.user.username}">
                  <strong>${this._tweet.user.name}</strong>
                  <span class="username">@${this._tweet.user.username}</span>
                </a>
                <small class="time username">
                  <span>9 hours ago</span>
                </small>
              </div>
              <div class="tweet-body">
                <p class="tweet-text">
                  ${this._tweet.content}
                </p>
              </div>
              
              <div class="footer-actions" aria-label="Tweet actions">
                <div class="footer-action comment">
                  <button class="action-button action-comment" type="button">
                    <div class="icon-container" title="Comment">
                      <span class="icon far fa-comment"></span>
                    </div>
                    <span class="action-count">
                      <span class="action-value">${parseInt(Math.random() * 1000)}</span>
                    </span>
                  </button>
                </div>

                <div class="footer-action reply">
                  <button class="action-button action-retweet" type="button">
                    <div class="icon-container" title="Retweet">
                      <span class="icon fas fa-retweet"></span>
                    </div>
                    <span class="action-count">
                      <span class="action-value">${parseInt(Math.random() * 1000)}</span>
                    </span>
                  </button>
                </div>
                <div class="footer-action like">
                  <button class="action-button action-like" type="button">
                    <div class="icon-container" title="Like">
                      <span class="icon far fa-heart"></span>
                    </div>
                    <span class="action-count">
                      <span class="action-value">${parseInt(Math.random() * 1000)}</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div> 
        `;
    }
}
