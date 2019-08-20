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
		return "You are a teenager!";
	} else if(age <= 13) {
		return "You are a kid";
	} else {
		return "You are a grownup";
}
}

ageChecker();


function ternaryTeenager(age) {
	return (age >= 13 && age <= 19)?"You are a teenager":"You are not a teenager!";
}
ternaryTeenager();
