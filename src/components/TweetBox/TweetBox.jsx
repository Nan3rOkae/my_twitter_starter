import * as React from "react";
import TweetInput from "./TweetInput";
import "./TweetBox.css";

export default function TweetBox(props) {
  //console.log(props.tweets);
  //console.log(props.userProfile);
  //console.log(props.setTweets);

  function handleOnTweetTextChange(event) {
    props.setTweetText(event.target.value);
  }
  console.log(typeof props.tweetText);

  let counter = props.tweetText.length;

  //console.log(counter);
  function handleOnSubmit() {
    var newTweet = {
      name: props.userProfile.name,
      handle: props.userProfile.handle,
      text: "",
      comments: 0,
      retweets: 0,
      likes: 0,
      id: props.tweets.length,
    };
    //console.log(props.tweets);
    // deconstruct old array which in turn updates the list of tweets
    props.setTweets([...props.tweets, newTweet]);
    props.setTweetText("");
  }

  return (
    <div className="tweet-box">
      <TweetInput
        value={props.tweetText}
        setTweetText={props.setTweetText}
        tweetText={props.tweetText}
        handleOnChange={handleOnTweetTextChange}
      />

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount />
        <TweetSubmitButton
          handleOnSubmit={handleOnSubmit}
          tweetLength={props.tweetText.length}
        />
      </div>
    </div>
  );
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  );
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  return <span></span>;
}

export function TweetSubmitButton({ handleOnSubmit, tweetLength }) {
  var isDisabled = false;
  if (tweetLength == 0 || tweetLength > 140) {
    isDisabled = true;
  }

  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button
        className="tweet-submit-button"
        onClick={handleOnSubmit}
        disabled={isDisabled}
      >
        Tweet
      </button>
    </div>
  );
}
