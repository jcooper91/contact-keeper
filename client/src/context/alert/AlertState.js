import React, { useReducer } from 'react'
import AlertContext from './AlertContext'
import AlertReducer from './AlertReducer'
import uuidv4 from 'uuid/v4'
import { SET_ALERT, REMOVE_ALERT } from '../types'


const AlertState = props => {
    const initialState = []

    const [state, dispatch] = useReducer(AlertReducer, initialState)   

    // Set Alert 
    const setAlert = (msg, type, timeout = 5000) => {
      const id = uuidv4()
      console.log(id)
      dispatch({
        type: SET_ALERT,
        payload: { msg, type, id }
      })
      setTimeout(() => dispatch({ type:REMOVE_ALERT, payload: id }), timeout)
    } 


    return (
        <AlertContext.Provider
            value={{
                alerts: state,
                setAlert
            }}
        >
            { props.children }
        </AlertContext.Provider>
    )
}

export default AlertState