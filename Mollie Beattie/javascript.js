var quotes = [
    'The Nation owes Mollie a deep debt of gratitude. In a time of unprecedented challenge to some of this Nation\'s most important environmental laws, Mollie stepped forward to remind us that threatened and endangered species, and the national wildlife refuges on which many of those species depend, must be protected for future generations of Americans to treasure and enjoy.', 
    'It is the real human sacrifice of people like Mollie, working day in and day out with honesty, integrity, intelligence, and sensitivity, that spares us the crisis of mismanagement and neglect that all too often has avoidable, irreversible consequences. Much of the peace and abundant life we enjoy as Americans is founded on such devotion.', 
    'She has been a good friend, a devoted citizen and public servant, and a champion for God\'s creatures when others did not always have the courage and grace to step forward. It is my sincere hope that her vision of a brighter and more abundant future for our Nation\'s wildlife heritage will become a reality for us, and for the many generations of Americans that follow.',
    'She was able to bring all sides of an issue to the table in order to reach common sense agreements. Because of this she was respected by all of those who knew and worked with her.'
]

function newQuote() {
    var randomNumber = Math.floor(Math.random()* (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

setInterval(newQuote, 2000);