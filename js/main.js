var quotes = [
    { //0
        quote: "“Be yourself; everyone else is already taken.”",
        author: "― Oscar Wilde",
    },
    { //1
        quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        author: "― Marilyn Monroe",
    },
    {// 2
        quote: "“So many books, so little time.”",
        author: "― Frank Zappa",
    },
    {// 3
        quote: "“A room without books is like a body without a soul.”",
        author: "― Marcus Tullius Cicero"
    },
    {// 4
        quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        author: "― Bernard M. Baruch"
    },
];

var previousIndex;
var generateQuote = function () {
    console.log(previousIndex, "Before new number");
    // randomIndex === previousIndex ===> Generate a new number.
    var randomIndex = Math.floor(Math.random() * 5);
    while (randomIndex === previousIndex) {
        randomIndex = Math.floor(Math.random() * 5);
        console.log("Hello from while loop");
    }
    previousIndex = randomIndex;
    console.log(previousIndex, "after new number");

    document.getElementById("author").innerHTML = quotes[randomIndex].author;
    document.getElementById("quote").innerHTML = quotes[randomIndex].quote;
}