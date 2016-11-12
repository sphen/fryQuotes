var express = require("express");
var app = express();

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

var quotes = [
    {
  "id": 1,
  "author": "Philip J. Fry",
  "quote": "So I really am important? How I feel when I'm drunk is correct?",
  "episode": 5.8
}, {
  "id": 2,
  "author": "Philip J. Fry",
  "quote": "But... I know you in the future! I clean your poop!",
  "episode": 5.8
}, {
  "id": 3,
  "author": "Philip J. Fry",
  "quote": "I did do the nasty in the past-y.",
  "episode": 5.8
}, {
  "id": 4,
  "author": "Philip J. Fry",
  "quote": "There are guys in the background of Mary Worth comics who are more important than me.",
  "episode": 5.8
}, {
  "id": 5,
  "author": "Philip J. Fry",
  "quote": "Huh. Did everything just taste purple for a second?",
  "episode": 5.8
}, {
  "id": 6,
  "author": "Philip J. Fry",
  "quote": "Why am I sticky and naked...? Did I miss something fun?",
  "episode": 5.9
}, {
  "id": 7,
  "author": "Philip J. Fry",
  "quote": "Well you two may be losers, but I just made out with that Radiator girl from the Radiator planet.",
  "episode": 2.11
}, {
  "id": 8,
  "author": "Philip J. Fry",
  "quote": "They're like sex, but I'm having them!",
  "episode": 2.18
}, {
  "id": 9,
  "author": "Philip J. Fry",
  "quote": "Indeed so... Most indeededly.",
  "episode": 6.5
}, {
  "id": 10,
  "author": "Philip J. Fry",
  "quote": "The Breakfast Club soundtrack? Oh, I can't wait until I'm old enough to feel ways about stuff.",
  "episode": 3.1
}, {
  "id": 11,
  "author": "Philip J. Fry",
  "quote": "I may not know much about horses, but I know a lot about doing anything for one dollar.",
  "episode": 3.1
}, {
  "id": 12,
  "author": "Philip J. Fry",
  "quote": "[gasp] But existing is basically all I do!",
  "episode": 4.1
}, {
  "id": 13,
  "author": "Philip J. Fry",
  "quote": "Don't you worry about Planet Express. Let me worry about blank.",
  "episode": 4.9
}, {
  "id": 14,
  "author": "Philip J. Fry",
  "quote": "Wait, I'm having one of those things... like a headache, with pictures.",
  "episode": 5.4
}, {
  "id": 15,
  "author": "Philip J. Fry",
  "quote": "There's so many killbots behind us, I can't count them all! Three, I think.",
  "episode": "Bender's Game"
}, {
  "id": 16,
  "author": "Philip J. Fry",
  "quote": "I prefer programs of the genre \"World's Blankiest Blank\".",
  "episode": 2.3
}, {
  "id": 17,
  "author": "Philip J. Fry",
  "quote": "There. Now he's trapped in a book I wrote. A crummy world of plot holes and spelling errors.",
  "episode": 3.7
}, {
  "id": 18,
  "author": "Philip J. Fry",
  "quote": "Leela, there's nothing wrong with anything.",
  "episode": 3.11
}, {
  "id": 19,
  "author": "Philip J. Fry",
  "quote": "My God, it's the future. My parents. My co-workers. My girlfriend. I'll never see any of them again. [pause] Yahoo!",
  "episode": 1.1
}, {
  "id": 20,
  "author": "Philip J. Fry",
  "quote": "Hey, thinking hurts them! Maybe I can think of a way to use that.",
  "episode": 3.7
}, {
  "id": 21,
  "author": "Philip J. Fry",
  "quote": "My hands! My horrible human hands! Whoa! And what'd you do to my nails?",
  "episode": 5.16
}, {
  "id": 22,
  "author": "Philip J. Fry",
  "quote": "Fix it, fix it, fix it, fix it, fix it, fix it... fix it, fix it, fix it!",
  "episode": 2.15
}, {
  "id": 23,
  "author": "Philip J. Fry",
  "quote": "Take that, and that! This sentence I don't understand... but take this one!",
  "episode": 3.7
}, {
  "id": 24,
  "author": "Philip J. Fry",
  "quote": "Hey, what smells like blue?",
  "episode": 4.1
}, {
  "id": 25,
  "author": "Philip J. Fry",
  "quote": "You can't lose hope when it's hopeless. You gotta hope more, then put your fingers in your ears and go, 'Blah! Blah! Blah! Blah!'",
  "episode": 4.8
}, {
  "id": 26,
  "author": "Philip J. Fry",
  "quote": "Oh, my God! His boneitis!",
  "episode": 4.9
}, {
  "id": 27,
  "author": "Philip J. Fry",
  "quote": "Wow. In my day, the internet was only used to download porn",
  "episode": 1.8
}, {
  "id": 28,
  "author": "Philip J. Fry",
  "quote": "I. C. Weiner. Aww... I always thought by this stage in my life I'd be the one making the crank calls",
  "episode": 1.1
}, {
  "id": 29,
  "author": "Philip J. Fry",
  "quote": "Just like my dad used to make, until McDonald's fired him.",
  "episode": 2.3
}, {
  "id": 30,
  "author": "Philip J. Fry",
  "quote": "Attention New New Yorkers: stop acting so stupid!",
  "episode": 3.7
}, {
  "id": 31,
  "author": "Philip J. Fry",
  "quote": "Mathematics of wonton burrito meals. I'll be there!",
  "episode": 2.2
}, {
  "id": 32,
  "author": "Philip J. Fry",
  "quote": "Ehh, it's like a party in my mouth, and everyone's throwing up.",
  "episode": 3.4
}, {
  "id": 33,
  "author": "Philip J. Fry",
  "quote": "Now, if you'll excuse me, it's eight o'clock. Time to get biz-zay.",
  "episode": 1.6
}, {
  "id": 34,
  "author": "Philip J. Fry",
  "quote": "Uh, video game, you say? Well, golly gee. You mighty spacemen of the future will have to show me how it works.",
  "episode": 2.13
}, {
  "id": 35,
  "author": "Philip J. Fry",
  "quote": "Wow! Letters like 'U' and 'R' can stand for words, like 'you' and 'are.'",
  "episode": 4.4
}, {
  "id": 36,
  "author": "Philip J. Fry",
  "quote": "I'm gonna deliver a gift of my boot up Santa's chimney.",
  "episode": 4.2
}, {
  "id": 37,
  "author": "Philip J. Fry",
  "quote": "That sounded horrible, Professor. Especially the you making out with Mom part.",
  "episode": 5.1
}, {
  "id": 38,
  "author": "Philip J. Fry",
  "quote": "My God! He's like some kind of credible Hulk.",
  "episode": 6.23
}
    ];

app.get('/', function(req, res){
    res.json(quotes);
});

app.get('/quote/random', function(req, res) {
    var id = Math.floor(Math.random() * quotes.length);
    var randQuote = quotes[id];
    res.json(randQuote);
});


app.get('/quote/:id', function(req, res){
    if(quotes.length <= req.params.id || req.params.id < 0){
        res.statusCode = 404;
        return res.send('Error 404 - Fry Quote Not Found');
    }
    var quote = quotes[req.params.id];
    res.json(quote);
});



app.listen(process.env.PORT || 5000);
