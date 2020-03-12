import React, { useReducer } from 'react'
import uuidv4 from 'uuid/v4'
import ContactContext from './ContactContext'
import contactReducer from './ContactReducer'
import { ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, FILTER_CONTACTS, CLEAR_FILTER } from '../types'
import contactContext from './ContactContext'

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Harry Davis',
                email: 'hdavid@gmail.com',
                phone: '111-333-666',
                type: 'personal'
            },
            {
                id: 2,
                name: 'Jenny Harrison',
                email: 'jharrison@gmail.com',
                phone: '777-333-444',
                type: 'personal'
            },
            {
                id: 3,
                name: 'David Harper',
                email: 'dharper@gmail.com',
                phone: '000-333-666',
                type: 'professional'
            }
        ],
        current: null
    }

    const [state, dispatch] = useReducer(contactReducer, initialState)   

    // Add Contact 
    const addContact = contact => {
        contact.id = uuidv4()
        dispatch({ type: ADD_CONTACT, payload: contact })
    }
    // Delete Contact 
    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id })
    }
    // Set Current Contact 
    const setCurrent = contact => {
        dispatch({ type: SET_CURRENT, payload: contact })
    }
    // Clear current contact 
    const clearCurrent = () => {
        dispatch({ type:  CLEAR_CURRENT })
    }
    // Update Contact 
    const updateContact = contact => {
        dispatch({ type: UPDATE_CONTACT, payload: contact })
    }
    // Filter contacts

    // Clear Filter

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                addContact,
                updateContact,
                deleteContact,
                setCurrent,
                clearCurrent
            }}
        >
            { props.children }
        </ContactContext.Provider>
    )
}

export default ContactState