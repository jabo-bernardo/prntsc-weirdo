import Weirdo from './Weirdo';
import dotenv from 'dotenv';
import Logger from './utils/Logger';

const IS_DEVELOPMENT: boolean = process.env.NODE_ENV !== 'production';
if(IS_DEVELOPMENT) {
	Logger.info(`Running on DEVELOPMENT mode!`);
	dotenv.config();
}

const weirdo = new Weirdo();
weirdo.start();