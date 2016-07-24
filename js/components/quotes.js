var quotes = new Vue({
    el: '#vue-quote-card',
    data: {
        current: 0,
        testQuote: {
            text: 'Our hearts yearn for each other, we just want someone to finally see us.',
            author: 'C.A. Cardinal',
            avatar: 'images/sneakers.png',
            background: ''
        },
        quotes: [{
            text: 'Our hearts year for each other, we just want someone to finally see us. - C.A. Cardinal',
            author: 'C.A. Cardinal',
            avatar: 'images/sneakers.png',
            background: ''
        }, {
            text: 'The most intense fight a human will ever have is between the person they are and the person they are capable of becoming.',
            author: 'Unknown',
            avatar: 'images/sneakers.png',
            background: ''
        }, {
            text: 'When you look back on life you\'re going to regret the things you didn\'t do, you\'ll hardly ever regret the things that you did do.',
            author: 'Collins',
            avatar: 'images/sneakers.png',
            background: ''
        }, {
            text: 'Time is hawaiian tiki bars',
            author: 'Houda Jarid',
            avatar: 'images/sneakers.png',
            background: ''
        }, {
            text: 'Wake up early.  Stay up late.  When you finish you can take a nap',
            author: 'Unknown',
            avatar: 'images/sneakers.png',
            background: ''
        }, {
            text: 'Never push something.  Find what pulls.',
            author: 'Collins',
            avatar: 'images/sneakers.png',
            background: ''
        }, {
            text: 'The same fire that melts wax, sharpens steel.',
            author: 'Unknown',
            avatar: 'images/sneakers.png',
            background: ''
        }, {
            text: 'The best way to destroy an enemy is to make him a friend.',
            author: 'Abraham Lincoln',
            avatar: 'images/sneakers.png',
            background: ''
        }, {
            text: 'Never ruin a memory with the graspings of the morning.',
            author: 'Collins',
            avatar: 'images/sneakers.png',
            background: ''
        }, {
            text: 'Businessmen who do not know how to fight worry die young.',
            author: 'Carnegie',
            avatar: 'images/sneakers.png',
            background: ''
        }, {
            text: 'There are three things all wise men fear: the sea in storm, a night with no moon, and the anger of a gentle man.',
            author: 'Patrick Rothfuss',
            avatar: 'images/sneakers.png',
            background: ''
        }, {
            text: 'When you choose an action that is aligned with your personality, you strengthen it.  When you choose to do something that is out of character, you weaken your personality.',
            author: 'Unknown',
            avatar: 'images/sneakers.png',
            background: ''
        }, {
            text: 'Reflect.',
            author: 'Unknown',
            avatar: 'images/sneakers.png',
            background: ''
        }, {
            text: 'If you are wrong admit it quickly and emphatically.',
            author: 'Carnegie',
            avatar: 'images/sneakers.png',
            background: ''
        }, {
            text: '"All this time i was finding myself, but I, I didn\'t know that I was lost.',
            author: 'Avicii',
            avatar: 'images/sneakers.png',
            background: ''
        }, {
            text: 'Choose to see reality as reality is, not as you would like to see it.',
            author: 'Collins',
            avatar: 'images/sneakers.png',
            background: ''
        }, {
            text: 'What the eye doesn\'t see the heart doesnt grieve over.',
            author: 'Unknown',
            avatar: 'images/sneakers.png',
            background: ''
        }, {
            text: 'Details matter.  It\'s worth waiting to get it right',
            author: 'Steve Jobs',
            avatar: 'images/sneakers.png',
            background: ''
        }]
    },
    methods: {
        displayQuote: function() {
            return this.i;
        }
    }
});