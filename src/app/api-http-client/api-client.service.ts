import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Credentials } from "../dto/credentials";
import { HttpClientExtensions } from "./http-client-extensions";

@Injectable()
export class ApiClient {
	private readonly client: HttpClient;
	constructor(
		client: HttpClient,) {
		this.client = client;
	}

	public async get<T>(path: string, credentials: Credentials): Promise<T> {
		const requestOptions = HttpClientExtensions.createRequestOptions(credentials, "json");
		try {
			const promise = await this.client.get<T>(path, requestOptions).toPromise();
			return promise;
		} catch (error) {
			throw error;
		}
	}

	public async post<T>(path: string, body: any, credentials: Credentials): Promise<T> {
		const requestOptions = HttpClientExtensions.createRequestOptions(credentials, "json");
		const jsonBody = JSON.stringify(body);
		try {
			const promise = await this.client.post<T>(path, jsonBody, requestOptions).toPromise();
			return promise;
		} catch (error) {
			throw error;
		}
	}

	public async put<T>(path: string, body: any, credentials: Credentials): Promise<T> {
		const requestOptions = HttpClientExtensions.createRequestOptions(credentials, "json");
		const jsonBody = JSON.stringify(body);
		try {
			const promise = await this.client.put<T>(path, jsonBody, requestOptions).toPromise();
			return promise;
		} catch (error) {
			throw error;
		}
	}

	public async delete<T>(path: string, credentials: Credentials): Promise<T> {
		const requestOptions = HttpClientExtensions.createRequestOptions(credentials, "json");
		try {
			const promise = await this.client.delete<T>(path, requestOptions).toPromise();
			return promise;
		} catch (error) {
			throw error;
		}
	}

}