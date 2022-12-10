/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$( document ).ready(function() {
    console.log( "ready!" );

// const data = [
//     {
//       "user": {
//         "name": "Newton",
//         "avatars": "https://i.imgur.com/73hZDYK.png"
//         ,
//         "handle": "@SirIsaac"
//       },
//       "content": {
//         "text": "If I have seen further it is by standing on the shoulders of giants"
//       },
//       "created_at": 1461116232227
//     },
//     {
//       "user": {
//         "name": "Descartes",
//         "avatars": "https://i.imgur.com/nlhLi3I.png",
//         "handle": "@rd" },
//       "content": {
//         "text": "Je pense , donc je suis"
//       },
//       "created_at": 1461113959088
//     }
//   ];

$('#new-tweet').on('submit',function(event) {
    event.preventDefault();

    const newTweetText = $('#tweet-text').val();
    const tweetText = $(newTweetText).serialize();

    $.post("/tweets", tweetText)
        .done()
})

const loadTweets = () => {

    $.get("/tweets")
      .then(data => {
        renderTweets(data)
      })

    // $.ajax('/tweets', { method: 'GET' })
    // .then(function (moreTweets) {
    //   renderTweets(moreTweets);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  }

  loadTweets();

const renderTweets = function(tweets) {
    const $container = $('#tweets-container')

    tweets.forEach(tweet => {
        const $tweet = createTweetElement(tweet);
        $container.prepend($tweet);
    });
};


const createTweetElement = function (data) {
    console.log(data)
    const $tweet = `
    <article>
        <div>
          <img src="${data.user.avatars}">
          <h3>${data.user.name}</h3>
        </div>
        <h4>${data.user.handle}</h4>
          <div>
            <p class="tweets">${data.content.text}</p>
          </div>
          <div>
          <p class="time">${timeago.format(data.created_at)}</p>
            <div class="icons">
            <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fa-retweet"></i> 
            <i class="fa-solid fa-heart"></i>
            </div>
          </div>  
      </article> `

      return $tweet;
}
renderTweets(data)



// const $tweet = createTweetElement(data[0]);
// Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
});