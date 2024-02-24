import { useDispatch, useSelector } from "react-redux";
import { analyzeGame, drawCard, startGame } from "../features/game/gameSlice";
import Loader from "./Loader";
import { useEffect, useState } from "react";
import startcard from "../images/startCard.gif"

function Game() {
	const game = useSelector((store) => store.game);
	const dispatch = useDispatch();
	const card = game.topCard;
	const [show, setShow] = useState(true);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setShow(true);
			dispatch(analyzeGame());
		}, 300);

		setShow(false);

		return () => clearTimeout(timeoutId);
	}, [card, dispatch, game.pointer]);

	function handleDraw() {
		dispatch(drawCard(game.email));
	}

	function handleRestart() {
		dispatch(startGame(game.email));
	}

	return (
		<div className="w-full flex flex-col ">
			<div className=" font-mono text-right m-0 text-xl font-bold self-end mb-5">
				Deffuse Cards-{game.deffuseCards > 0 ? game.deffuseCards : "0"}
			</div>
			<div className=" w-full flex justify-center">
				<div className="w-[90%]  max-w-[400px] flex flex-col items-center ">
					{game.cardState === "loading" ? (
						<Loader />
					) : card === "start" ? (
					<img src={startcard} alt="start" className="w-[65%] rounded-lg " />	
					) : (
						<>
							<img src={`svgs/${card}Card.png`} className="w-[65%] rounded-lg " alt={card} />
							<h1 className="text-2xl mt-2 font-extrabold tracking-wide text-center">{card}</h1>
						</>
					)}
				</div>
				
			</div>

			<div className="flex gap-4 justify-center mt-5">
					<button
						className="outlined-btn hover:bg-sky-300 hover:text-white"
						onClick={handleDraw}
						disabled={
							!show ||
							game.topCard === "shuffle" ||
							game.cardState === "loading"
						}
					>
						{game.pointer < 4 ? "Draw" : "Finish"}
					</button>
					<button
						className="outlined-btn hover:bg-sky-300 hover:text-white"
						onClick={handleRestart}
						disabled={game.topCard !== "shuffle"}
					>
						Reshuffle
					</button>
					<button
						className="outlined-btn hover:bg-sky-300 hover:text-white"
						onClick={handleRestart}
					>
						Restart
					</button>
				</div>
		</div>
	);
}

export default Game;

