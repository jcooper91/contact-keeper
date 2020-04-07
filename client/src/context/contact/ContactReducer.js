import { GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, CLEAR_CONTACTS, UPDATE_CONTACT, CONTACT_ERROR, FILTER_CONTACTS, CLEAR_FILTER } from '../types'

 export default (state, action) => {
     switch(action.type) {
         case GET_CONTACTS:
             return {
                 ...state,
                 contacts: action.payload,
                 loading: false 
             }
         case ADD_CONTACT:
             return {
                 ...state,
                 contacts: [ action.payload, ...state.contacts ], // state is immutable - @para1 get the current state, @param2 take the new contact and add it on to contacts
                loading: false
                }
         case UPDATE_CONTACT:
             return {
                 ...state,
                 contacts: state.contacts.map(contact => contact._id === action.payload._id ? action.payload : contact),
                 loading: false
             }    
         case DELETE_CONTACT:
             return {
                 ...state,
                 contacts: state.contacts.filter(contact => contact._id !== action.payload),
                 loading: false
             }    
         case SET_CURRENT:
             return {
                 ...state,
                 current: action.payload
             }
         case CLEAR_CURRENT:
             return {
                 ...state,
                 current: null
             }
         case CLEAR_CONTACTS:
             return {
                 ...state,
                 contacts: null,
                 filtered: null,
                 error: null,
                 current: null
             }    
         case FILTER_CONTACTS:
             return {
                 ...state,
                 filtered: state.contacts.filter(contact => {
                     const regex = new RegExp(`${action.payload}`, 'gi')
                     return contact.name.match(regex) || contact.email.match(regex)
                 })
             }
        case CONTACT_ERROR:
            return {
                ...state,
                filtered: null
            }     
         case CLEAR_FILTER:
             return {
                 ...state,
                 filtered: null
             }            
         default:
             return state
     }
 }