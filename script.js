// List of anime quotes (this would ideally come from animequote.json, but for demonstration, I'll hardcode a small subset)
const quotes = [
    "Someone who works hard... Can never beat someone who enjoys himself. - Baki Hanma, Baki the Grappler",
    "The world isn't perfect. But it's there for us, doing the best it can... that's what makes it so damn beautiful. - Roy Mustang, Full Metal Alchemist",
    "The future belongs to those who believe in the beauty of their dreams. - Shoyo Hinata, Haikyuu!",
    "When you lose sight of your path, listen for the destination in your heart. - Allen Walker, D.Gray Man",
    "Enjoy your life today. Yesterday is gone, and tomorrow might never come. - Takeshi Yamamoto, Katekyo Hitman Reborn!",
    "How can you keep moving forward if you keep regretting the past? - Edward Elric, Fullmetal Alchemist: Brotherhood",
    "You focus on the trivial and lose sight of what is most important; change is impossible in this fog of ignorance. - Itachi Uchiha, Naruto",
    "Sometimes, we have to look beyond what we want and do what's best. - Piccolo, Dragon Ball Z",
    "If your life can change once, your life can change again. - Sanae Furukawa, Clannad",
    "If you can't do something, then don't. Focus on what you can do. - Shiroe, Log Horizon",
    "If you don't take risks, you can't create a future! - Monkey D. Luffy, One Piece",
    "Don't give up, there's no shame in falling down! True shame is to not stand up again! - Shintaro Midorima, Kuroko No Basket",
    "I'll leave tomorrow's problems to tomorrow's me. - Saitama, One Punch Man",
    "It's more important to master the cards you're holding than to complain about the ones your opponents were dealt. - Grimsley, Pokemon",
    "Whatever you lose, you'll find it again. But what you throw away you'll never get back. - Himura Kenshin, Rurouni Kenshin",
    "We can't waste time worrying about the what if's. - Ichigo Kurosaki, Bleach",
    "The moment you think of giving up, think of the reason why you held on so long. - Natsu Dragneel, Fairy Tail",
    "Life is not a game of luck. If you wanna win, work hard. - Sora, No Game No Life",
    "Do exactly as you like. That is the true meaning of pleasure. Pleasure leads to joy and joy leads to happiness. - Gilgamesh, Fate Zero",
    "No one is born into this world to be alone. - Jaguar D. Saul, One Piece",
    "You've got it from here. - Nanami Kento, Jujutsu Kaisen",
    "Glory lies beyond the horizon. Challenge it because it is unreachable. - Rider, Fate/Zero",
    "Believe in your own power. - Mikasa Ackerman, Attack on Titan",
    "It's all right to cry. It's all right to run away. Just don't ever give up. - Jigoro Kuwajima, Demon Slayer",
    "There's nothing crueler than letting a dream end midway. - Shota Aizawa, My Hero Academia",
    "The world isn't something that is all planned out. It's something you make yourself. - Yuuko Ichihara, xxxHolic",
    "Dream your dream! Then, pursue the ideals to make that dream a reality, and someday you will achieve all that you dreamed of! - N, Pokemon",
    "Sadness is just another wall that blocks you from moving on. I know it's hard to get past it, but you got to break through. - Gray Fullbuster, Fairy Tail",
    "I would think that embracing the things you truly like and being able to enjoy them is worth more than anything. - Tamaki Suou, Ouran High School Host Club",
    "The ticket to the future is always open. - Vash the Stampede, Trigun",
    "You should enjoy the little detours to the fullest. Because that's where you'll find the things more important than what you want. - Ging Freecss, Hunter x Hunter",
    "The difference between the novice and the master is that the master has failed more times than the novice has tried. - Koro Sensei, Assassination Classroom",
    "Don't worry about what other people think. Hold your head up high and plunge forward. - Izuku Midoriya, My Hero Academia",
    "Believe in the you who believes in yourself! - Kamina, Tengen Toppa Gurren Lagann",
    "The only way to truly escape the mundane is for you to constantly be evolving. - Izaya Orihara, Durarara!!",
    "Don't live your life making up excuses. The one making your choices is yourself! - Mugen, Samurai Champloo",
    "It's impossible to work hard for something you don't enjoy. - Silica, Sword Art Online",
    "If you really want to be strong, stop caring about what your surrounding thinks of you! - Saitama, One Punch Man",
    "Always believe in yourself. Do this and no matter where you are, you will have nothing to fear. - Baron, The Cat Returns",
    "If you wanna make people dream, you've gotta start by believing in that dream yourself! - Seiya Kanie, Amagi Brilliant Park"
    // ... other quotes from the list
];

document.addEventListener('DOMContentLoaded', (event) => {
    refreshQuoteAndImage();
});

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function getRandomBackground() {
    const randomIndex = Math.floor(Math.random() * 10) + 1; // since we have 10 images
    return `backgrounds/bg${randomIndex}.png`;
}

function refreshQuoteAndImage() {
    document.getElementById('animeQuote').textContent = getRandomQuote();
    document.getElementById('backgroundImage').src = getRandomBackground();
}
