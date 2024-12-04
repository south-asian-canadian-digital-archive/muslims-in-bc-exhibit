// import { FORM_ACCESS_KEY } from "$env/static/private";
import type { Actions } from "./$types";

export const prerender = true;

// export const actions = {
// 	default: async ({ cookies, request }) => {

// 		const formData = await request.formData();

// 		const data = {
// 			subject: formData.get("subject"),
// 			honeypot: "",
// 			message: formData.get("message"),
// 			replyTo: "@",
// 			accessKey: FORM_ACCESS_KEY,
// 		};

// 		fetch("https://api.staticforms.xyz/submit", {
// 			method: "POST",
// 			body: JSON.stringify(data),
// 			headers: { "Content-Type": "application/json" },
// 		})
// 			.then((res) => res.json())
// 			.then((res) => {
// 				if (res.success) {
// 					alert("Message sent successfully!");
// 				} else {
// 					alert("Message failed to send.");
// 				}
// 			})
// 			.catch((error) => {
// 				alert(error);
// 			});

// 	}
// } satisfies Actions;
