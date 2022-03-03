import ldap from 'ldapjs';
import UnauthorizedException from "../exceptions/UnauthorizedException";
import jwt from 'jsonwebtoken';
import { config } from '../../config';

/**
 * An example of an authorization service to validate authorization tokens, or attempt sign ins.
 */
export const AuthService = {
	/**
	 * Validates an authorization token for authentication.
	 *  
	 * @param token Authorization token attached to the HTTP header.
	 * @return {boolean} True if their token is valid, false if it isn't.
	 */
	validate(token: String): boolean {
		if (token.length != 0) {
			return true;
		}
		return false;
	},

	/**
	 * Attempts to authenticate a user against the LDAP server by binding against the server.
	 *  
	 * @param {string} uid User ID
	 * @param {string} password User's unauth
	 * @return {boolean} True if their token is valid, false if it isn't.
	 */
	login(uid: string, password: string): Promise<string> {
		return new Promise<string>((resolve, reject) => {
			// Connect to the server
			const client = ldap.createClient({
				url: config.ldap.url
			});

			const bind_string = `uid=${uid},${config.ldap.user_dc},${config.ldap.root}`

			// Attempt to authenticate
			client.bind(bind_string, password, (err) => {
				// If the authentication fails, reject the promise.
				if (err) {
					reject(new UnauthorizedException("LDAP Authentication Failed"));
				}

				const token = jwt.sign({uid}, config.auth.signature);

				// Resolve with the new auth token.
				resolve(token);
			});

			// Always unbind client to free up the resources.
			client.unbind();
		});
	},

}