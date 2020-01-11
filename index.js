var dilemmas = [
    "You have two kids. You get to pick one to kill. If you don't pick one, both are killed. You have to tell the one that is getting killed that you picked them and not their sibling. You have to watch. What do you do?",
    "10 hostages can be saved if you personally kill the 11th hostage. What do you do?",
    "Is a hot dog a sandwich?",
    "Would you rather live to 100 eating bland food, or live to 33 eating the best food in the world?",
    "If you could create permanent global peace and cooperation by torturing a baby to death, making the torture last as long as possible and be as excruciating as possible, would you do it?",
    "Your dog and a stranger are drowning in a pond. You can only save one. Which one do you choose?",
    "Do you fight one horse sized duck or 100 duck sized horses?",
    "A button push gives you $1,000, but a random person dies. How many times would you press it?",
    "You are granted rule over the whole world. You are a monarch (king, queen, etc.). You have ended war, famine, and most diseases. It becomes apparent to you that the population is increasing far too fast, and if nothing is done, you will run out of resources. What do you do?",
    "If either Netflix or YouTube had to be removed from society, which would you remove and why?",
    "Ninjas or Pirates?",
    "Does pineapple belong on pizza?",
    "Is it pronounced GIF or JIF?",
    "Do you button a shirt top to bottom or bottom to top?",
    "If you do not directly oppose something, does that mean that you are in support of it or are supporting it?",
    "Milk before cereal or cereal before milk?",
    "Do you wet the toothbrush before or after the toothpaste?",
    "Do you crumple toilet paper or fold it before wiping?",
    "Can water get wet?"
];
var currentIndex = 0;

var presentDilemma = function() {
    if (currentIndex >= dilemmas.length) {
        dilemmas = shuffle(dilemmas);
        currentIndex = 0;
    }

    $("#dilemma").fadeOut(function() {
        $("#dilemma").text(dilemmas[currentIndex]);
    });
    $("#dilemma").fadeIn();
    currentIndex += 1;
}

var shuffle = function (array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

    //Fisher Yates shuffle
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

};

document.addEventListener("DOMContentLoaded", function() {
    $("#main").fadeIn();
    dilemmas = shuffle(dilemmas);
});

document.addEventListener('click', function (event) {
    presentDilemma();
})

document.addEventListener('keyup', function (event) {
    presentDilemma();
})