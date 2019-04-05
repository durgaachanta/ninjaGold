import React from 'react';
import { connect } from 'react-redux';
import '../styles/goldcount.css';

const GoldCount = (props) => {
  return (
    <div id="goldcount">
      <h1>Gold Count: {props.count}</h1>
    </div>
  );

}

const mapStateToProps = (state) => ({
  count: state.winnings.totalCoins,
});

export default connect(mapStateToProps, null)(GoldCount);