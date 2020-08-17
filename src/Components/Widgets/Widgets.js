import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
import Hidden from "@material-ui/core/Hidden";

function Widgets() {
  return (
    <Hidden smDown>
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <div className="widgets__intsa">
        <TwitterTweetEmbed tweetId={"1052234356310315008"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="incredible015"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
        </div>
      </div>
    </div>
    </Hidden>
  );
}

export default Widgets;