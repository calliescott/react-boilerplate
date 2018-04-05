import React from 'react';
import ReactDOM from 'react-dom';

import Button from './Button.js';

const GoalItem = (props) => {
    return (
        <li className="goal-item">
            <div className="goal-img">
                <img src="{props.data.image" alt=" " />
            </div>
            <div className="goal-text">
                <h3>{props.data.goalName}</h3>
                <p>Only {props.data.months} months and {props.data.days} days until your {props.data.goalName}!</p>
                <div className="goal-text-lower">
                    <div className="goal-bar-info">
                        <p>${props.data.currentValue} of ${props.data.totalValue}</p>
                        <div className="goal-bar">
                            <span className="quarter1"></span>
                            <span className="quarter2 hidden"></span>
                            <span className="quarter3 hidden"></span>
                            <span className="quarter3 hidden"></span>
                        </div>
                    </div>
                    <Button className="button-white" content="Edit Goal" />
                </div>
            </div>
        </li>
    )
}

export default GoalItem;