# Shifumi ✊✋✌️
This repository contains the implementation of the "**Rock paper scissors game**".

The web application can be accessed [here](https://slavafive.github.io/shifumi/).

## Rules 📗
As a player, your ultimate goal is to beat the computer in a match consisting of multiple mini shifumi games.
* The winner of each game gains 1 point.
* If a game ends in a draw, then both players receive 0.5 points (only if the corresponding game mode was chosen).
* The first player to reach the specified number of games wins the match.

## Application features 🎲
- [x] Choice of different match modes.
- [x] Visualisation of the match history.
- [x] User name and avatar customisation.
- [x] Possibility to change user and computer theme colors (including avatar badges).

## Game modes 👨‍💻
The application allows you to choose:
* The number of games to win a match.
* Whether to divide a point between players in case of a draw.
* Whether to play with *shifumi bonus* which gives an additional point to a player who won 3 consecutive games.

## Running application locally 🚀
To run the app locally you need to:
1. Clone the repository and go the repository directory
```
git clone https://github.com/slavafive/shifumi.git
cd shifumi
```
2. Install required dependencies
 ```
 npm install
 ```
3. Start the application
```
npm start
```
4. Navigate to `localhost:3000` in your browser.
5. Congratulations! Now the game is being launched on your computer and you can start a new match.

## Technologies ⚙️
This application was build by using:
* HTML, CSS, JS
* ReactJS
* Chakra UI