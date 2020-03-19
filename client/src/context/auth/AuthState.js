import React, { useReducer } from 'react'
import axios from 'axios'
import AuthContext from './AuthContext'
import AuthReducer from './AuthReducer'
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_ERRORS } from '../types'


const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null 
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState)   

    // Load User
    const loadUser = () => console.log('loadUser')

    // Register User 
    const register = async formData => {
        
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
      
        try {
            const res = axios.post('/api/post', formData, config)
          
            console.log(res)
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
    const login = () => console.log('login')

    // Logout
    const logout = () => console.log('logout') 

    // Clear Errors
    const clearErrors = () => console.log('clearErrors') 

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading, 
                user: state.user,
                error: state.error,
                register,
                loadUser,
                login,
                logout,
                clearErrors
            }}
        >
            { props.children }
        </AuthContext.Provider>
    )
}

export default AuthState