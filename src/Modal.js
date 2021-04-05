import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {updateCalendar, updateCalendarFB, deleteCalendar, deleteCalendarFB} from "./redux/modules/calendar";
import {useState, useRef, useEffect} from 'react';
import {connect} from 'react-redux';

function Modal({status, todo, date, close, id}) {
    const dispatch = useDispatch();
    const schedule = useSelector((state) => state.calendar.schedule);

    return(
        <>
            {status ? (
                <div>
                    <Wrap onClick = {close}>
                        <Box>
                            <div>
                                <h1>나의 일정!</h1>
                                <p>{todo}</p>
                                <p>{date}</p>
                            </div>
                            <div>
                            <button onClick={()=>{
                                dispatch(updateCalendarFB(id));
                                close()
                            }}>일정 완료</button>
                            <button onClick={()=>{
                                dispatch(deleteCalendarFB(id))
                                close()
                            }}>일정 삭제</button>
                            <button onClick = {close}>뒤로가기</button>
                            </div>
                        </Box>
                    </Wrap>
                </div>
            ) : null}
        </>
    )
}


const Wrap = styled.div`
    position: absolute;
    top: 35%;
    left: 40%;
    z-index: 10;   
`;

const Box = styled.div`
    width: 400px;
    height: 300px;
    border: 1px solid #eee;
    border-radius: 20px;
    display: grid;
    place-items: center;
    background-color:#eee;
    opacity:1;
    z-index:10;

`;


export default Modal;