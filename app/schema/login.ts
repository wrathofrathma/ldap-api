import { z } from "zod";

export default z.object({
	body: z.object({
		uid: z.string({
			required_error: "UID is required."
		}).min(1),
		password: z.string({
			required_error: "Password is required"
		}).min(1)
	})
});