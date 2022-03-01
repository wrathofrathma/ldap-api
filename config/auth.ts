/**
 * Authentication related configuration
 */
export default {
	/** 
	* The signature used in JWT signing
	*/
	signature: process.env.JWT_SIGNATURE ? process.env.JWT_SIGNATURE : "A very valid signature",
}