import React, { useRef } from 'react'
import IdleTimer from 'react-idle-timer'
import {useHistory} from "react-router";

function IdleTimerContainer () {
    const idleTimerRef = useRef(null)
    const sessionTimeoutRef = useRef(null)
    let history =  useHistory();

    const onIdle = () => {
        console.log('User is idle')
        sessionTimeoutRef.current = setTimeout(120 * 60 * 1000)
        history.push("/login")
    }

    // const logOut = () => {
    //     clearTimeout(sessionTimeoutRef.current)
    //     console.log('User has been logged out')
    // }
    // const stayActive = () => {
    //     clearTimeout(sessionTimeoutRef.current)
    //     console.log('User is active')
    // }

    return (
        <div>
            <IdleTimer
                ref={idleTimerRef}
                timeout={1000 * 5}
                data-toggle="modal"
                data-target={`#staticBackdrop`}
                onIdle={onIdle}
            />
        </div>
    )
}

export default IdleTimerContainer