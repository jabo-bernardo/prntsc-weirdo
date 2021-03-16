import { IWeirdoOptions } from "./types";
import Logger from "./utils/Logger";
import StringGenerator from "./utils/StringGenerator";
import axios from 'axios';
import DiscordHook from "./services/DiscordHook";

class Weirdo {

	interval: number;
	isReady: boolean;
	dcHook: DiscordHook;

	constructor(opt?: IWeirdoOptions) {
		this.interval = opt?.interval || 5000; // Default: 10 Seconds
		this.isReady = true;
		this.dcHook = new DiscordHook({ webhookUrl: process.env.DISCORD_HOOK });
	}

	start() {
		Logger.log('Booting up Weirdo!');
		setInterval(this.generate, this.interval);
	}

	generate = async () => {
		Logger.info('Generating...');
		if(!this.isReady) return;
		this.isReady = false;
		const token: string = StringGenerator.generate(6);
		Logger.info(`Looking up an image with token ${token}`);
		const prntPage = await axios.get(`https://prnt.sc/${token}`);
		let imageUrl = /https:\/\/image.prntscr.com\/image\/[^\s]*"/.exec(prntPage.data);
		if(imageUrl) {
			imageUrl = imageUrl[0].replace('"', "");
			this.dcHook.send(`\`\`\`css\nhttps://prnt.sc/${token}\n\`\`\`${imageUrl}
			`);
			Logger.log(imageUrl);
		} else {
			Logger.error(`No images found for token ${token}`);
		}
		this.isReady = true;
	}
}

export default Weirdo;