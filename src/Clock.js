import { Col } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';
import React, { useState } from 'react'

const Clock = () => {

    const d = new Date();
    const n = d.toLocaleTimeString().slice(2);
    const currentTime = n.slice(0, 5)
    console.log(currentTime)
    const [breakLength, setBreakLength] = useState(5)
    const [sessionLength, setSessionLength] = useState(25)
    const [timeLeft, setTimeLeft] = useState(currentTime)

    // const reduce = () => {
    //     console.log("clicked")
    // }
    // const reduceTime = () => {
    //     console.log("clicked another")
    // }
    const reset = () => {
        setBreakLength(5)
        setSessionLength(25)
        setTimeLeft(timeLeft)
    }
    return (
        <div>
            <Col id='break-label'>Break Length</Col>
            <Col id='session-label'>Session Length</Col>
            <ArrowDownOutlined id='break-decrement' />
            <ArrowDownOutlined id='session-decrement' />
            <ArrowDownOutlined id='break-increment' />
            <ArrowDownOutlined id='session-increment' />
            <Col id="break-length">{breakLength}</Col>
            <Col id="session-length">{sessionLength}</Col>
            <Col id='timer-label'>session</Col>
            <Col id='time-left'>{timeLeft}</Col>
            <Col id='start_stop'></Col>
            <Col onClick={reset} id='reset'></Col>
        </div>
    )
}

export default Clock