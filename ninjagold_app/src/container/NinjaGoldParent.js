import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import GoldCount from '../component/GoldCount';
import GoldAction from '../component/GoldAction';
import GoldHistory from '../component/GoldHistory';
import { updateStateAction } from '../redux';
import '../styles/ninjagoldparent.css';

class NinjaGoldParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  };

  //load the redux store when the app loads
  componentDidMount = () => {
    //axios fetch call
    axios.get('/fetchgoldcoinsstatus')
      .then((response) => {
        //push all the data fetched back from MockAPI into store
        // dispatch an action
        console.log(response.data);
        this.props.updateState(response.data);

      })
      .catch((error) => {
        console.log(error);
      });
  }

  randomlyGenerateCoins = (min, max, action) => {
    const coinsGenerated = Math.floor(Math.random() * (max - min + 1)) + min;
    var Message;
    console.log("random coins", coinsGenerated);
    if (Math.sign(coinsGenerated) === -1) {
      Message = `You've lost ${coinsGenerated} gold coins at the Casino`;
    }
    else {
      Message = `You've earned ${coinsGenerated} gold coins at the ${action}`;
    }
    //console.log(message);
    //post call to store history data
    axios.post('/postHistory', {
      Message,
      coinsEarned: coinsGenerated,
    })
      .then((response) => {
        if (response.status === 200) {
          //push all the data fetched back from MockAPI into store
          // dispatch an action
          this.props.updateState(response.data);

        }
      })
      .catch((error) => {
        console.log(error);
      });

  }

  render() {
    return (
      <div id="goldparentcontainer">
        {/* all my components will go here */}
        <GoldCount />
        <GoldAction generateCoins={this.randomlyGenerateCoins} />
        <GoldHistory />
      </div>
    )
  }

}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  updateState: (data) => {
    dispatch(updateStateAction(data))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NinjaGoldParent);