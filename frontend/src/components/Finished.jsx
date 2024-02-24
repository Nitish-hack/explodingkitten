import { useDispatch, useSelector } from "react-redux";
import { startGame } from "../features/game/gameSlice";

function Finished() {
	const game = useSelector((state) => state.game);

	const dispatch = useDispatch();

	function handleReset() {
		dispatch(startGame(game.email));
	}

	return (
		<div className="flex flex-col gap-4 w-full h-full">
			<div className=" font-mono text-right text-xl">
				<h2 >High Score: {game.currentHighScore}</h2>
				<h2 >Email: {game.email}</h2>
			</div>
			<div className="flex flex-col  self-center mt-5">
				<h1 className="text-6xl font-extrabold tracking-wider">
					{game.bombCards <= game.deffuseCards
						? " You won!"
						: "You lost, try again !"}
				</h1>
				<button
					className="outlined-btn hover:bg-sky-300 hover:text-white mt-5"
					onClick={handleReset}
				>
					New Game
				</button>
			</div>

		</div>
	);
}

export default Finished;
