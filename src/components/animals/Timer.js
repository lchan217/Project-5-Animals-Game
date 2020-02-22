import React from "react";
import { Button, Icon } from "semantic-ui-react";
import "../../css/Timer.css";

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 0,
      showAlert: false
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.startClock, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  showGameOver = () => {
    if (this.state.showAlert) {
      return (
        <div className='game-over-alert'>
          <div className='game-over-alert-text'>
            <Icon name='exclamation triangle icon'></Icon>
            Remember to record your score! No cheating!
          </div>
          <br />
          <Button
            onClick={() => {
              window.location.reload();
            }}
            color='red'
            size='mini'
            className='alert-new-game'
          >
            New Game
          </Button>
        </div>
      );
    }
  };

  render() {
    return (
      <div className='timer'>
        <b>Timer: {this.state.time} </b>
        <Button
          color='red'
          size='mini'
          onClick={() => {
            this.stopClock();
          }}
        >
          Stop
        </Button>
        {this.showGameOver()}
      </div>
    );
  }

  startClock = () => {
    this.setState(prevState => ({
      time: prevState.time + 1
    }));
  };

  stopClock = () => {
    clearInterval(this.interval);
    this.setState({
      showAlert: true
    });
  };
}

export default Timer;
