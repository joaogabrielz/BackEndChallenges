class TweetController {
  constructor() {
    this._content = document.querySelector('#timeline-content');
    this.carregaTweets();
  }

  adicionaTweet(evento) {
    let tweetContent = document.querySelector("#message-text").value;
    let tweetNovo = {
      id: 10,
      content: tweetContent,
      user: {
        id: 10,
        username: "usernameFixo",
        name: "Name Fixo"
      }
    }

    this._content.innerHTML += templateTweet(tweetNovo);
  }

  carregaTweets() {
    //This
    //this é a instancia do TweetController
    console.log("dentro do carregaTweets ",this)

    var callback = function() {
      console.log("Mudou o estado " + myRequest.readyState);
      if(myRequest.readyState == 4) {
        let resposta = JSON.parse(myRequest.response);
        for(let item of resposta) {
          let tweet = new Tweet(item.id, item.content, item.user);
          this._content.innerHTML += new TweetView(tweet).template();
        }
      }
    };

    

    let myRequest = new XMLHttpRequest();
    myRequest.open('GET', "https://621554e4c9c6ebd3ce2560b2.mockapi.io/api/v1/tweets");
    myRequest.onreadystatechange = callback.bind(this); 


    

    // () => {
    //   console.log("Mudou o estado " + myRequest.readyState);
    //   if(myRequest.readyState == 4) {
    //     let resposta = JSON.parse(myRequest.response);
    //     for(let item of resposta) {
    //       let tweet = new Tweet(item.id, item.content, item.user);
    //       this._content.innerHTML += new TweetView(tweet).template();
    //     }
    //   }
    // }
    myRequest.send();
  }
}