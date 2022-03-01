/**
 * LDAP Configuration
 */
export default {
	/** 
	* The root node of the LDAP tree. 
	*
	* ex. dc=example,dc=org
	*/
	root: process.env.LDAP_ROOT ? process.env.LDAP_ROOT : "dc=example,dc=org",

	/** 
	* Domain component for the users' organizational unit.
	*
	* Default: ou=people
	*/
	user_dc: process.env.LDAP_USER_DC ? process.env.LDAP_USER_DC: "ou=people",

	/** 
	* URL of the LDAP server
	*
	* Default: ldap://localhost
	*/
	url: process.env.LDAP_URL ? process.env.LDAP_URL : "ldap://localhost",
}