const URL_BACKEND_TOP = window.location.hostname.includes('localhost')
? 'http://localhost:3000'
: 'https://coderflix.herokuapp.com'

export default {
    URL_BACKEND_TOP
}