import ErrorResponse from './errorResponse'
const messages = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    406: "Not Acceptable",
    422: "Unprocessable Entity",
    451: "Unavailable For Legal Reasons",
    500: "Internal Server Error",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout",
    505: "HTTP Version Not Supported"
}

export default function handleError(error) {
    console.log(error)
    if (error.response) {
        const { data } = error.response
        return data;
    } else if (error.request) {
        return 'Network error'
    } else {
        return 'Client side error'
    }
}
