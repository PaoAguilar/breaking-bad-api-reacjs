import React, { Component } from "react";
import "./episodeItem.scss";

class EpisodeItem extends Component {
  render() {
    const { episode } = this.props;
    return (
      <div className="card-episode">
        <div className="card-inner">
          <div className="card-front">
            <h2>Series: {episode.series}</h2>
            <h2>Episode {episode.episode}</h2>
            <h3>Title: {episode.title}</h3>
            <h4>Season: {episode.season}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default EpisodeItem;
