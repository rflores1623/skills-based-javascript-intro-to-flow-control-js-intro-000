function basicTeenager(age) {
	if ( age >= 13 && age <= 19) {
		return "You are a teenager!"
	}

	if ( age >= 13) {
		return undefined;
	}
}

basicTeenager();


function teenager(age) {
	if ( age >= 13 && age <= 19) {
		return "You are a teenager!";
	} else {
		return "You are not a teenager";
	}
}

teenager();


function ageChecker(age) {
	if (age >= 13 && age <= 19 ) {
		"You are a teenager!";
	} else if(age <= 13) {
		"You are a kid";
	} else {
		"You are a grownup";
}
return ageChecker();
