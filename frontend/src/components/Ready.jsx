import { useDispatch, useSelector } from "react-redux";
import { resumeGame, startGame } from "../features/game/gameSlice";

function Ready() {
	const game = useSelector((state) => state.game);

	const dispatch = useDispatch();

	function handleRestart() {
		dispatch(startGame(game.email));
	}

	function handleResume() {
		dispatch(resumeGame());
	}

	return (
		<div className="w-full ">
            <div className=" font-mono text-right text-xl">
			<h2 >High Score: {game.currentHighScore}</h2>
				<h2 >Email: {game.email}</h2>
				</div>
			<div className="flex flex-col w-[90%] max-w-screen-sm mx-auto mt-10">
				<div className="flex flex-col gap-3">
					{game.pointer !== -1 && (
						<button
							className=" gradient text-black font-bold p-3 tracking-wider text-2xl myshadow rounded-lg "
							onClick={handleResume}
						>
							Resume
						</button>
					)}
					<button
						className="border-solid border-2 border-sky-500 p-3  rounded-lg text-2xl tracking-wider myshadow cursor-pointer"
						onClick={handleRestart}
					>
						New Game
					</button>
				</div>
			</div>
		</div>
	);
}

export default Ready;
