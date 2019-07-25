import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';
import PlayerCard from './PlayerCard'
import ClipLoader from 'react-loader-spinner';
import {fetchScorers} from '../actions'

function Scorers(props) {
    const [currentLeague, setCurrentLeague] = useState('PL')

    const handleChange = e => {
      setCurrentLeague(e.target.value)
    }

    useEffect( () =>{
        props.fetchScorers(currentLeague);
    }, [currentLeague])

    return (
        <div>
            <h2 className="title">2018 Top Scorers List</h2>
      <div className="form">
            <p className="select-text">Select a League: </p>
          <select onChange={handleChange} value={currentLeague}>
  <option name="PL" value="PL">English Premiere League</option>
  <option name="BL1" value="BL1">German BundesLiga</option>
  <option value="FL1">French Ligue 1</option>
  <option value="SA">Italian Serie A</option>
  <option value="PD">Spanish Primera Division</option>
</select>
      </div>
           {props.isFetching && <ClipLoader
          className="loader"
          sizeUnit={"px"}
          size={150}
          color={'white'}
          loading={props.isFetching}
        /> }
        <div className="list">
        {props.data && props.data.data.scorers.map( item => <PlayerCard data={item} />)}
        </div>
        </div>
    )
}


const mapStateToProps = state => {
    console.log(state);
    return {
      error: state.error,
      isFetching: state.isFetching,
      data: state.data
    };
  };
  export default connect(
    mapStateToProps,
    { fetchScorers }
  )(Scorers);

