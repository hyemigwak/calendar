import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import { render } from "react-dom";
import { makeStyles } from '@material-ui/core/styles';
import {connect} from "react-redux";
import {loadCalcal, createCalcal} from "./redux/modules/calendar"
import AddPlan from "./AddPlan"
import Main from "./Main"
import Modal from "./Modal"
import { firestore } from "./firebase";


function App() {
  return (
    <Switch>
    <div className="App">
      <Route exact path="/" component={Main} />
      <Route path="/addplan" component={AddPlan} />
      <Route path="/modal" component={Modal}/>
    </div>
    </Switch>
  );
}

export default (withRouter(App));