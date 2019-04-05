import React from 'react';
import '../styles/goldaction.css';

class GoldAction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goldAction: [
        {
          action: "Farm",
          detail: "Earns 2-5 Gold",
          min: 2,
          max: 5,
        },
        {
          action: "Cave",
          detail: "Earns 5-10 Gold",
          min: 5,
          max: 10,
        },
        {
          action: "Casino",
          detail: "Earn up to or Lose up to 100 Gold",
          min: -100,
          max: 100,
        },
        {
          action: "House",
          detail: "Earns 7-15 Gold",
          min: 7,
          max: 15,
        },
      ],

    };

  };



  render() {
    return (
      <div id="goldactionbody">
        {this.state.goldAction.map((item) => {
          return (
            <div className="goldaction">
              <h1>{item.action}</h1>
              <h3>{item.detail}</h3>
              <button className="btn" onClick={() => { this.props.generateCoins(item.min, item.max, item.action) }}>{item.action}</button>
            </div>
          )
        })}

      </div>

    );
  }

}
export default GoldAction;