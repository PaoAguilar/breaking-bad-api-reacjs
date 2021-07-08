import React, { Component } from "react";
import { getBreakingBadEpisodes } from "../../api/breakingBadApi";
import EpisodeItem from "../../components/episodeItem/EpisodeItem";
import "./episodeList.scss";
class EpisodeList extends Component {
  state = {
    episodes: [],
  };

  componentDidMount() {
    getBreakingBadEpisodes()
      .then((res) => {
        this.setState({ episodes: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
    for (const elem of document.getElementsByClassName("btn-character")) {
      elem.addEventListener("mouseover", this.changeColor);
    }
  }

  componentWillUnmount() {
    for (const elem of document.getElementsByClassName("btn-character")) {
      elem.removeEventListener("mouseover", this.changeColor);
    }
  }
  changeColor = (event) => {
    event.target.style.backgroundColor = "red";
    setTimeout(function () {
      event.target.style.backgroundColor = "";
    }, 500);
  };

  render() {
    return (
      <div>
        <div className="episode-container">
          <div className="episode-cards">
            <h1 className="title">BREAKING BAD EPISODES</h1>
            <div className="episodes">
              {this.state.episodes.map((episode) => {
                return (
                  <div key={episode.episode_id}>
                    <EpisodeItem episode={episode} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EpisodeList;
