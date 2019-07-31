import React from 'react'

function PlayerCard(props) {
    return (
        <div className="card">
            <h4>{props.data.player.name}</h4>
            <h5>{props.data.team.name}</h5>
            <h2>{props.data.numberOfGoals}</h2>
        </div>
    )
}

export default PlayerCard
