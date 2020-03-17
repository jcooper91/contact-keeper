import React, { useReducer } from 'react'
import axios from 'axios'
import AuthContext from './AuthContext'
import authReducer from './AuthReducer'
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_ERRORS } from '../types'


const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null 
    }

    const [state, dispatch] = useReducer(authReducer, initialState)   

    // Load User

    // Register User 
    const registerUser = async formData => {
        const config = {
            headers: {
                'Content=type': 'application/json'
            }
        }

        try {
            const res = axios.post('/api/post', formData, config)

            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: REGISTER_FAIL,
                paylad: err.response.data.msg
            })
        }
    } 
    // Login User 

    // Logout 

    // Clear Errors 

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading, 
                user: state.user,
                error: state.error
            }}
        >
            { props.children }
        </AuthContext.Provider>
    )
}

export default AuthState