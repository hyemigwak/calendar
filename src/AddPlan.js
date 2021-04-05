import React from 'react';
import styled from 'styled-components';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useState, useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import {useDispatch} from "react-redux";
import { addCalendarFB } from "./redux/modules/calendar"


const AddPlan = (props) => {
    const iuput_text = useRef('');
    const time_text = useRef('');
    const dispatch = useDispatch();

    const addPlan = () => {
        let schedule = {
            date_time: time_text.current.value,
            todo: iuput_text.current.value
        }
        if (!iuput_text.current.value){
            window.alert("일정을 입력해주세요!")
        }
        else{
            dispatch(addCalendarFB(schedule))
            window.alert("추가완료")
            props.history.push('/')
            console.log(iuput_text.current.value,time_text.current.value);
        }
       
    };
    
    
    return(
        <div className="addplan">
            <Box>
                <h1>일정추가</h1>
                <textarea cols="21" rows="4" ref={iuput_text}/>
                <h1>일시</h1>
                <TextField inputRef={time_text}
                className="mini"
                id="datetime-local"
                label="일정선택"
                type="datetime-local"
                defaultValue="2021-03-24T10:30"
                InputLabelProps={{
                shrink: true,
                }}
                />

                <button onClick={() => {
                    props.history.goBack()
                }}>취소하기</button>
                <button onClick={addPlan}>추가하기</button>
            </Box>
        </div>
    );
}


const Box = styled.div`
    margin: 30px auto;
    width: 600px;
    height: 600px;
    border: 1px solid #eee;
    border-radius: 20px;

    & h1 {
        margin: 20px;
    }
    & input {
        margin: 20px;
    }
    & textarea {
        margin: 20px;
        width: 500px;
    }
    & .mini {
        margin: 20px;
    }
`;


export default AddPlan;