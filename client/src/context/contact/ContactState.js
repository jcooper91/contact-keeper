import React, { useReducer } from 'react'
import uuid from 'uuid'
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
                id: 1,
                name: 'Jenny Harrison',
                email: 'jharrison@gmail.com',
                phone: '777-333-444',
                type: 'personal'
            },
            {
                id: 1,
                name: 'David Harper',
                email: 'dharper@gmail.com',
                phone: '000-333-666',
                type: 'professional'
            }
        ]
    }

    const [state, dispatch] = useReducer(contactReducer, initialState)   

    // Add Contact 

    // Delete Contact 

    // Set Current Contact 

    // Clear current contact 

    // Update Contact 

    // Filter contacts

    // Clear Filter

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts
            }}
        >
            { props.children }
        </ContactContext.Provider>
    )
}

export default ContactState