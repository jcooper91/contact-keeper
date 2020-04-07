import axios from 'axios'

// set token globally
const setAuthToken = token => {
    if(token) {
        axios.defaults.headers.common['x-auth-token'] = token
    } else {
        delete axios.defaults.headers.common['x-auth-token']
    }
}

export default setAuthToken