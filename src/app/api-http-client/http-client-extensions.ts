
import { HttpHeaders } from "@angular/common/http";
import { Credentials } from "../dto/credentials";

export class HttpClientExtensions {
	public static createRequestOptions(
		credentials: Credentials,
		responseType: "json" | "blob",
		params: any = null
	): {} {

		let httpHeaders = new HttpHeaders({
			"Content-Type": "application/json"
		});

		if (credentials != null) {
			const auth = this.createBasicAuthString(credentials.userName, credentials.password);
			httpHeaders = httpHeaders.set("Authorization", auth);
		}

		const requestOptions = {headers: httpHeaders, responseType: responseType, params: params};
		return requestOptions;
	}

	public static createBasicAuthString(login: string, password: string): string {
		const base64LoginAndPassword = btoa(`${login}:${password}`);
		const basicAuthString = `Basic ${base64LoginAndPassword}`;
		return basicAuthString;
	}
}
