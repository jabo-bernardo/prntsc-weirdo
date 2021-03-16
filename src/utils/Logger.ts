import chalk from 'chalk';
import moment from 'moment';

class Logger {

	static log(message: any): void {
		const timestamp: number = Date.now();
		const timestampString: string = moment(timestamp).format("YYYY/MM/DD - HH:mmA");
		console.log(chalk.blue(`[LOG][${timestampString}] :: ${message}`));
	}

	static info(message: any): void {
		const timestamp: number = Date.now();
		const timestampString: string = moment(timestamp).format("YYYY/MM/DD - HH:mmA");
		console.log(chalk.yellow(`[INF][${timestampString}] :: ${message}`));
	}

	static error(message: any): void {
		const timestamp: number = Date.now();
		const timestampString: string = moment(timestamp).format("YYYY/MM/DD - HH:mmA");
		console.log(chalk.red(`[ERR][${timestampString}] :: ${message}`));
	}

}

export default Logger;