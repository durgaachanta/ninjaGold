import React from 'react';
import { connect } from 'react-redux';
import '../styles/goldhistory.css';

const GoldHistory = (props) => {
  console.log(props.winnings);

  return (
    <div id="goldHistorybody">
      <h2>History:</h2>
      <ul>
        {props.winnings !== undefined ? props.winnings.map((item) => {
          console.log(item)
          return <li>{item.Message}</li>
        }) : ''}
      </ul>
    </div>
  );
}
const mapStateToProps = (state) => ({
  winnings: state.winnings.data,
});

export default connect(mapStateToProps, null)(GoldHistory);