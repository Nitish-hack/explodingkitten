# Exploding Kitten Game 

![image](https://github.com/Nitish-hack/explodingkitten/assets/106099275/3c25ee87-5556-40a0-a145-2b7ae153adc2)
![image](https://github.com/Nitish-hack/explodingkitten/assets/106099275/40baedf4-4a53-471e-b8ce-331dd3fa450c)
![image](https://github.com/Nitish-hack/explodingkitten/assets/106099275/6e935479-3ee9-4380-aec0-4986d1e71e21)


Welcome to the world of the Exploding Kitten Game! This engaging online card game is designed for single-player enjoyment. In this game, players draw cards from a deck that features a variety of card types, such as cats, defuse cards, shuffle cards, and exploding kittens. The ultimate goal is to successfully draw all the cards from the deck, carefully avoiding the peril of drawing an exploding kitten.
### Features:
1. Commence the game by drawing cards from the deck.
2. Encounter a diverse array of cards, each boasting unique effects.
3. Monitor user points and the leaderboard seamlessly with the assistance of Redis.
4. Enjoy additional perks such as automatic game saving and real-time updates to the leaderboard.
5. Fully responsive and aesthetic UI
   
### Setup Instructions:
1. **Clone the Repository:**
     ```bash
    git clone https://github.com/Nitish-hack/explodingkitten.git
    ```

3. **Backend Setup:**
    - Ensure you have GoLang and Redis installed.
    - Navigate to the `backend` directory.
    - Initialize Go module:
        ```bash
        go mod init exploding-kitten-game
        ```
    - Install dependencies:
        ```bash
        go mod tidy
        ```
    - Start the backend server:
        ```bash
        go run main.go
        ```
   **Backend .env Setup:**
   (You can use Redis cloud for address and password)
   REDIS_ADDRESS="write your redis address"
   REDIS_PASSWORD="write your password"
 

4. **Frontend Setup:**
    - Ensure you have Node.js and npm installed.
    - Navigate to the `frontend` directory.
    - Install dependencies:
        ```bash
        npm install
        ```
    - Start the React app:
        ```bash
        npm run dev
        ```
   **Frontend .env Setup:**
   VITE_API="write the base url of backend(eg: http://localhost:6379)"

   
6. **Access the Application:**
    - Open your web browser and go to `http://localhost:5173`.

### Rules of Game:
- If the card drawn from the deck is a cat card, then the card is removed from the deck.
- If the card is exploding kitten (bomb) then the player loses the game.
- If the card is a defusing card, then the card is removed from the deck. This card can be used to defuse one bomb that may come in subsequent cards drawn from the deck.
- If the card is a shuffle card, then the game is restarted and the deck is filled with 5 cards again.

### Bonus Features:
1. **Automatic Game Saving:**
    - Games are automatically saved at each stage.
    - Users can continue from where they left off last time.

2. **Real-Time Leaderboard Updates:**
    - Points on the leaderboard are updated in real-time for all users.

