const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

readline.question('How\'s the weather today? ', weather => {
	if (weather === 'sunny') {
		return readline.question(`what is the level of Humidity? `, humidity => {
			if (humidity <= 75) {
				console.log(`today's ${weather} with ${humidity}% humidity`);
				readline.close();
			} else if (humidity > 75) {
				console.log(`today's ${weather} with  ${humidity} humidity`);
				readline.close();
			} else {
				console.log('Sorry, Wrong Input')
				readline.close();
			} 
		});
	} 
	else if (weather === 'cloudy') {
		return readline.close(console.log(`today's weather cloudy`));
	}

	else if (weather === 'rainy') {
		return readline.question(`What is the wind speed? `, wind => {
			if (wind <= 20) {
				return readline.close(console.log(`Today is rainy with mild wind of ${wind}`))
			} else if (wind > 20) {
				return readline.close(console.log(`Today is rainy with strong wind of ${wind}`))
			} else {
				return readline.close(console.log('Sorry, Wrong Input'))
			}
		});
	}

	console.log('Sorry, Wrong input')
	readline.close();
})