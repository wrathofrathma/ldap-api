import BaseException from "./BaseException";

/**
 * Exception class tailored to 422 Unprocessable Entity exceptions
 * 
 * Contains a default error message and sets the HTTP response status.
 */
export default class UnprocessableEntityException extends BaseException {
	constructor(message: string = "Unprocessable Entity") {
		super(message, 422);
	}
}