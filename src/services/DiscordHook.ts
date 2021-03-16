import axios from "axios";
import { IDiscordHookOptions } from "../types";

class DiscordHook {

	webhookUrl: string;

	constructor({ webhookUrl }: IDiscordHookOptions) {
		this.webhookUrl = webhookUrl;
	}

	send(content: any) {
		axios.post(this.webhookUrl, JSON.stringify({ content }), { headers: { 'Content-Type': 'application/json' } })
	}

}

export default DiscordHook;
