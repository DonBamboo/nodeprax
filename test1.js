const weatherPrompt = prompt('How\'s the weather today? ', weather => {
	if (weather === 'sunny') {
		return prompt(`what is the level of Humidity? `, humidity => {
			if (humidty <= 75) {
				prompt(`today's ${weather} with ${humidity}% humidity`);
				
			} else if (humidity > 75) {
				prompt(`today's ${weather} with  ${humidity} humidity`);
			
			} else {
				prompt('Sorry, Wrong Input')
				
			} 
		});
	} 
	else if (weather === 'cloudy') {
		return prompt(`today's weather cloudy`);
	}

	else if (weather === 'rainy') {
		return prompt(`What is the wind speed? `, wind => {
			if (wind <= 20) {
				return prompt(`Today is rainy with mild wind of ${wind}`)
			} else if (wind > 20) {
				return prompt(`Today is rainy with strong wind of ${wind}`)
			} else {
				return prompt('Sorry, Wrong Input')
			}
		});
	}

	prompt('Sorry, Wrong input')
})