function getQuote() {
  console.log("getting a quote?");

  var quotes = [
    {
      "quote": "Reminds me of my safari in Africa. Somebody forgot the corkscrew and for several days we had to live on nothing but food and water.",
      "author": "W.C.Fields"
    }, {
      "quote": "If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.",
      "author": "J.R.R. Tolkien"
    }, {
      "quote": "The trouble with eating Italian food is that five or six days later you're hungry again.",
      "author": "George Miller"
    }, {
      "quote": "Perfection, it turns out, is tricky.",
      "author": "Hannah DeVore"
    }, {
      "quote": "Let us remember: One book, one pen, one child, and one teacher can change the world.",
      "author": "Malala Yousafzai"
    }, {
      "quote": "You\'re never too old, too wacky, too wild, to pick up a book and read to a child.",
      "author": "Dr. Seuss"
    }, {
      "quote": "There is no friend as loyal as a book.",
      "author": "Ernest Hemingway"
    }, {
      "quote": "The things I want to know are in books; my best friend is the man who'll get me a book I ain't read.",
      "author": "Abraham Lincoln"
    }, {
      "quote": "Outside of a dog, a book is a man's best friend. Inside of a dog it's too dark to read.",
      "author": "Groucho Marx"
    }, {
      "quote": "If one cannot enjoy reading a book over and over again, there is no use in reading it at all.",
      "author": "Oscar Wilde"
    }, {
      "quote": "Bliss is the ocean, a towel on the sand, the sun out, the chance to swim in waves or walk dragging a stick behind you, a good book, a cold drink.",
      "author": "Deb Caletti"
    }, {
      "quote": "The first sentence of a book is a handshake, perhaps an embrace.",
      "author": "Jhumpa Lahiri"
    }, {
      "quote": "Beauty surrounds us, but usually we need to be walking in a garden to know it.",
      "author": "Rumi"
    }, {
      "quote": "If you have a garden and a library, you have everything you need.",
      "author": "Marcus Tullius Cicero"
    }, {
      "quote": "The garden is growth and change and that means loss as well as constant new treasures to make up for a few disasters.",
      "author": "May Sarton"
    }, {
      "quote": "The garden suggests there might be a place where we can meet nature halfway.",
      "author": "Michael Pollan"
    }, {
      "quote": "Isn't it enough to see that a garden is beautiful without having to believe that there are fairies at the bottom of it too?",
      "author": "Douglas Adams"
    }, {
      "quote": "The world is a book, and those who do not travel read only a page.",
      "author": "Saint Augustine"
    }, {
      "quote": "A good traveler has no fixed plans, and is not intent on arriving.",
      "author": "Lao Tzu"
    }, {
      "quote": "People who don't travel can't have a global view, all they see is what's in front of them. Those people can’t accept new things because all they know is where they live.",
      "author": "Martin Yan"
    }, {
      "quote": "I am not a great cook, I am not a great artist, but I love art, and I love food, so I am the perfect traveller.",
      "author": "Michael Palin"
    }, {
      "quote": "If you want to go fast, go alone. If you want to go far, go together.",
      "author": "African Proverb"
    }, {
      "quote": "You develop a sympathy for all human beings when you travel a lot.",
      "author": "Shakuntala Devi"
    }, {
      "quote": "Airplane travel is nature's way of making you look like your passport photo.",
      "author": "Al Gore"
    }, {
      "quote": "The purpose of art is washing the dust of daily life off our souls.",
      "author": "Pablo Picasso"
    }, {
      "quote": "Art is the only way to run away without leaving home.",
      "author": "Twyla Tharp"
    }, {
      "quote": "Art enables us to find ourselves and lose ourselves at the same time.",
      "author": "Thomas Merton"
    }
  ];

  var quoteNum = Math.floor(Math.random() * quotes.length);
  var quoteObj = quotes[quoteNum];
  var quote = quoteObj.quote;
  var author = "-- " + quoteObj.author;
  console.log(quote);
  console.log(author);
  document.getElementById("hobbyQuote").innerHTML = quote;
  document.getElementById("hobbyAuthor").innerHTML = author;

  var urlBase = "https://twitter.com/intent/tweet?";
  document.getElementById("tweetLink").href = urlBase + "text=" + quote + "%20" + author + "&via=hengistSeattle";
}

document.addEventListener("load", getQuote());
