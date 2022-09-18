export default class ErrorResponse {
    errors = []
    message = ''
    status = null
    constructor({message, errors}, status) {
        this.errors = errors
        this.message = message  
        this.status = status
    }
}