import React from 'react';
import ReactDOM from 'react-dom';

import Button from './components/Button.js';
import GoalItem from './components/GoalItem.js';

// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
// } from 'react-router-dom';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCsgoRx0tafyIFo6GVijjXNYvavh3tNbCU",
  authDomain: "todoapp-90d28.firebaseapp.com",
  databaseURL: "https://todoapp-90d28.firebaseio.com",
  projectId: "todoapp-90d28",
  storageBucket: "todoapp-90d28.appspot.com",
  messagingSenderId: "956277170381"
};
firebase.initializeApp(config);


class App extends React.Component {
    constructor(){
      super();
      this.state = {
        overlay: false,
        travelType: 'choose',
        flightNumber: 1,
        flightCost: 0,
        accommodationNumber: 10,
        accommodationCost: 0,
        estimate: 0.00,
        goals: [],
        goalName: '',
        goalDestination: '',
        additionalGoalDestination: '',
        goalPicture: '',
        months: '',
        days: '',
        currentValue: '',
        totalValue: '',
        travelType: ''
      };
    
      this.addGoal = this.addGoal.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {

      const dbRef = firebase.database().ref();

      dbRef.on("value", (firebaseData) => {
        // console.log(firebaseData.val());
        const goalsArray = [];
        const goalsData = firebaseData.val();

        for(let goalKey in goalsData) {
          // console.log(goalsData[goalKey]);
          goalsArray.push( goalsData[goalKey] );
        }

        // console.log(goalsArray);

        this.setState({
          goals: goalsArray
        });

      });

    }

    addGoal(e) {
      e.preventDefault();

      const userGoal = {
        goalName: this.state.goalName,
        goalDestination: this.state.goalDestination,
        additionalGoalDestination: this.state.additionalGoalDestination,
        travelType: this.state.travelType
      };

      this.setState({
        goalName: '',
        goalDestination: '',
        additionalGoalDestination: '',
        travelType: ''
      });

      const dbRef = firebase.database().ref();
      dbRef.push(userGoal);
    };

    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
        });
    }

    
    render() {
      return (
        <div>
          <div className="goals-section-header">
            <h2>Your Goals</h2>
            <Button className="button-white" content="+ Add a Goal"/>
          </div>
          <div className="add-goal">
            <p>Create a goal to get started.</p>
            <Button className="button-teal" content="+ Add a Goal"/>
          </div>
          <ul className="goals">
            {this.state.goals.map((goal, i) => {
              return <GoalItem data={goal} key={i}/>
            })}
          </ul>

          <div className="add-goal-container">
            <div className="add-goal-details">
              <div className="add-goal-header">
                <p>Where do you want to go?</p>
                <i className="fas fa-times"></i>
              </div>
              <form className="form" onSubmit={this.addGoal}>
                <div className="form-container">
                  <label htmlFor="goalName">Goal Name</label>
                  <input type="text" name="goalName" placeholder="Goal name" onChange={this.handleChange} value={this.state.goalName} />
                </div>
                <div className="form-container">
                  <label htmlFor="goalDestination">Destination</label>
                  <input type="text" name="goalDestination" placeholder="Text" onChange={this.handleChange} value={this.state.goalDestination}/>
                  <input type="text" name="additionalGoalDestination" placeholder="+ Add destination" onChange={this.handleChange}  value={this.state.additionalGoalDestination}/>
                </div>
                <div className="form-container">
                  <label htmlFor="travelType">Type of Travel</label>
                  <select name="travelType" value={this.state.travelType} onChange={this.handleChange} >
                    <option value="choose">Please choose...</option>
                    <option value="adventure">Adventure</option>
                    <option value="all-inclusive">All Inclusive Resort</option>
                    <option value="cruise">Cruise</option>
                  </select>
                </div>
                <div className="form-container">
                  <label htmlFor="goalTripLength">Length of Trip</label>
                  <input type="text" name="goalTripLength" placeholder="Text" onChange={this.handleChange} value={this.state.goalTripLength} />
                  <label htmlFor="days">Days</label>
                </div>
                <Button content="Next Step" className="button-teal-light"/>
              </form>
            </div>

















            {/* <div className="add-goal-expenses">
              <div className="add-goal-header">
                <i className="fas fa-angle-left"></i>
                <p>How much do you need?</p>
                <i className="fas fa-times"></i>
              </div>
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="flights">Flights</label>
                <div className="user-input-container">
                  <input type="text" name="flights-cost"/>
                  <p>x</p>
                  <select value={this.state.flightNumber} onChange={this.handleChange1}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <p>people =</p>
                  <p>${this.state.flightCost}</p>
                </div>
                <label htmlFor="accomodation">Accommodation</label>
                <div className="user-input-container">
                  <input type="text" name="flights-cost" />
                  <p>x</p>
                  <select value={this.state.accommodationNumber} onChange={this.handleChange2}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                  </select>
                  <p>days =</p>
                  <p>${this.state.accommodationCost}</p>
                </div>
                <Button content="Next Step" className="button-teal-light" />
              </form>
              <p>You will need an approximate total of ${this.state.totalExpenses} to hit your goal and travel to COUNTRY.</p>
              <div className="expenses-estimate">
                <input type="checkbox" name="choose-estimate"/>
                <label htmlFor="choose-estimate">I'd rather just make a general estimate for now</label>
                <label htmlFor="goal-estimate">Estimate</label>
                <input type="text" name="goal-estimate" value={this.state.estimate}/>
              </div>
            </div>

            <div className="add-goal-extras">
              <div className="add-goal-header">
                <i className="fas fa-angle-left"></i>
                <p>Let's make it happen</p>
                <i className="fas fa-times"></i>
              </div>
            </div>

            <div className="add-goal-success">
              <div className="add-goal-header">
                <i className="fas fa-angle-left"></i>
                <p>Congrats, your goal has beens saved!</p>
                <i className="fas fa-times"></i>
              </div>
              <div className="goal-success-details">
                <img src="../luggage.png" alt="Outline of a carry on piece of luggage with wheels."/>
                <p>You're one step closer to your Journey to COUNTRY.</p>
                <Button className="button-teal" content="Go to My Goals" />
              </div> */}
            {/* </div> */}
            
          </div>
          
          
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
