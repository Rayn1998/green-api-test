class Api {
	constructor() {
		// this.usl = url;
	}

	_getResponse(res) {
		if (!res.ok) {
			const msg = res.json().then(res);
			return msg;
		} else {
			return res.json();
		}
	}

	async getAccountCondition(data) {
		const { idInstance, apiTokenInstance } = data;
		return await fetch(
			`https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		)
			.then(this._getResponse)
			.catch(() => Promise.reject(new Error(`Backend isn't replying`)));
	}

	async getChatWithNumber(number) {
		const data = JSON.parse(localStorage.getItem('userData'));
		const { idInstance, apiTokenInstance } = data;
		return await fetch(
			`https://api.green-api.com/waInstance${idInstance}/getChatHistory/${apiTokenInstance}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					chatId: `${number}@c.us`,
					count: 100,
				}),
			},
		)
			.then(this._getResponse)
			.catch(() => Promise.reject(new Error(`Backend isn't replying`)));
	}

	async sendMessage(number, message) {
		const data = JSON.parse(localStorage.getItem('userData'));
		const { idInstance, apiTokenInstance } = data;
		return await fetch(
			`https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					chatId: `${number}@c.us`,
					message: `${message}`,
				}),
			},
		)
	}
}

const api = new Api();

export default api;
