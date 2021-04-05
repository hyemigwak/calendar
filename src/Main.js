import React, { useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import {useState, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addCalendarFB, getCalendarFB, addCalendar, getCalendar} from "./redux/modules/calendar";
import Modal from "./Modal";
import main from "./Main.css";
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import styled from "styled-components";

const Main = (props) => {
  
  const dispatch = useDispatch()
  const schedule = useSelector((state) => state.calendar.schedule);
  const [todo, SetTodo] = useState()
  const [date, SetDate] = useState()
  const [status, isModalOpen] = useState(false)
  const [id_info,setId] = useState()
  const [visible, isBtnOpen] = useState(true)
  let calendar_list = []
  let complete_list = []

   const openModal = (id) => {
     let daily_schedule = schedule.filter((schedule) => {
       if(schedule.id == id){
         return schedule
       }
     })
     
     SetTodo(daily_schedule[0].title)
     SetDate(daily_schedule[0].date)
     setId(id)
     isModalOpen(true)
   }

   const closeModal = () => {
     isModalOpen(false)
   }

  useEffect(() => {
    dispatch(getCalendarFB());
  },[]);

  
  calendar_list = schedule.map((r, idx) => {
    return {title: r.title, start: r.date, id:r.id, color: r.completed ? 'red':'blue'}
  })
  
  complete_list = calendar_list.filter((r,idx) => {
    if(r.color === 'red'){
      return {...complete_list, r}
    }
  })
  if (!complete_list[0]){
    complete_list = null
  }


    return (
      <div>
        <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events = {visible ? calendar_list : complete_list}
        eventClick={(info)=>{
          openModal(info.event.id)
        }}
        height = '100vh'
        />
        <div className="icon">
          <Fab color="secondary" aria-label="edit" onClick={() => {
          props.history.push('/addplan')
          }}>
          <EditIcon />
          </Fab>
        </div>
      <div className="icons">
        {visible ? (
            <Fab color="primary" aria-label="add" variant="extended" >
              <DoneOutlineIcon  onClick = {() => {
                isBtnOpen(false)
              }} />완료일정
            </Fab>):null}
            <Fab color="primary" aria-label="add" variant="extended" >
              <DoneOutlineIcon  onClick = {() => {
                isBtnOpen(true)
            }} />전체일정
            </Fab>
      </div>
        <Modal date={date} todo={todo} status={status} close={closeModal} id={id_info}/>
      </div>
     
    );
};

export default Main;