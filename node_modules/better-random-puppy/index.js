"use strict";
//-----------------------------------------------------------------------------------------------\\

const Axios = require("axios").default;
const formatResult = (image) => {return `https://i.imgur.com/${image.hash}${image.ext}`};
const randomImage = (data) => {return Math.floor(Math.random() * data.length)};

//-----------------------------------------------------------------------------------------------\\

function fetchRandomImage(subreddit) {
    return new Promise((resolve, reject) => {
        if (!subreddit) return reject("Invalid subreddit.");

        Axios.get(`https://imgur.com/r/${subreddit}/hot.json`).then(response => response.data.data).then(data => {
            const RandomImage = data[randomImage(data)];
            const Data = {};

            if (!RandomImage) return reject("Invalid subreddit.");

            Data.title = RandomImage.title;
            Data.author = RandomImage.author;
            Data.score = RandomImage.score;
            Data.nsfw = RandomImage.nsfw;
            Data.url = formatResult(RandomImage);
            Data.animated = RandomImage.animated;
            Data.subreddit = RandomImage.subreddit;
            Data.timestamp = RandomImage.timestamp;

            resolve(Data);
        }).catch(error => {
            reject(error);
        });
    });
};

//-----------------------------------------------------------------------------------------------\\
module.exports = fetchRandomImage;
//-----------------------------------------------------------------------------------------------\\