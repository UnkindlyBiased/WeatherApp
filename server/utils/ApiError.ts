export default class ApiError extends Error {
    private readonly status: number
    private readonly errors: string[]

    constructor(status: number, message: string, errors: string[]) {
        super(message)
        this.status = status
        this.errors = errors
    }

    static BadRequestError(message: string, errors: string[] = []) {
        return new ApiError(400, message, errors)
    }

    static Forbidden(message: string, errors: string[] = []) {
        return new ApiError(403, message, errors)
    }

    static NotFoundError(message: string, errors: string[] = []) {
        return new ApiError(404, message, errors)
    }
}