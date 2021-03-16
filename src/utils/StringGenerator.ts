const validCharacters: string = "abcdefghijklmnopqrstuvwxyz";

class StringGenerator {
	static generate(len: number): string {
		let data = "";
		for(let x = 0; x < len; x++) {
			data += validCharacters[Math.floor(Math.random() * validCharacters.length)];
		}
		return data;
	}
}

export default StringGenerator;