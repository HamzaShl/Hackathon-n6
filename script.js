let score = 0;
const listWords = ["un", "deux", "trois"];
let index = 0;

const word = document.getElementById("word");
const text = document.getElementById("text");
const result = document.getElementById("result");
const submitBtn = document.getElementById("submitBtn");

word.textContent = listWords[index];

submitBtn.addEventListener("click", function () {
	if (text.value.trim().toLowerCase() === listWords[index]) {
		score++;
	}

	result.textContent = `${score}/${listWords.length}`;

	index++;
	if (index < listWords.length) {
		word.textContent = listWords[index];
		text.value = "";
		text.focus(); // 🎯 Replace le curseur dans l'input
	} else if (score === listWords.length) {
		word.textContent = "🥇 BRAVO ! Tu as gagné une médaille ! 🥇";
		text.disabled = true; // 🚫 Désactive l'input
		submitBtn.disabled = true; // 🚫 Désactive le bouton
	} else if (score === listWords.length - 1) {
		word.textContent = "Tu y es presque ! 🎉";
		text.disabled = true;
		submitBtn.disabled = true;
	} else if (score < listWords.length) {
		word.textContent = "Tu feras mieux la prochaine fois ! 🦾";
		text.disabled = true;
		submitBtn.disabled = true;
	}
});
