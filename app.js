document.addEventListener("DOMContentLoaded", () => {
	//card options
	const cardArray = [
		{
			name: "smile",
			img: "images/smile.png",
		},
		{
			name: "smile",
			img: "images/smile.png",
		},
		{
			name: "sad",
			img: "images/sad.png",
		},
		{
			name: "sad",
			img: "images/sad.png",
		},
		{
			name: "happy",
			img: "images/happy.png",
		},
		{
			name: "happy",
			img: "images/happy.png",
		},
		{
			name: "normal",
			img: "images/normal.png",
		},
		{
			name: "normal",
			img: "images/normal.png",
		},
		{
			name: "wink",
			img: "images/wink.png",
		},
		{
			name: "wink",
			img: "images/wink.png",
		},
		{
			name: "love",
			img: "images/love.png",
		},
		{
			name: "love",
			img: "images/love.png",
		},
	];

	const grid = document.querySelector(".grid");

	//create board
	function createBoard() {
		for (let i = 0; i < cardArray.length; i++) {
			var card = document.createElement("img");
			card.setAttribute("src", "images/black.png");
			card.setAttribute("data-id", i);
			// card.setAttribute('click', flipcard)
			grid.appendChild(card);
		}
	}
	createBoard();
});
