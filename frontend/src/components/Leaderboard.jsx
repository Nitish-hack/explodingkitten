import { useDispatch, useSelector } from "react-redux";
import { closeLeaderBoard } from "../features/leaderboard/leaderboardSlice";

function Leaderboard() {
	const leaderboard = useSelector((state) => state.leaderboard);

	const dispatch = useDispatch();

	return (
		<div className="flex flex-col w-full items-center gap-4">
			<h2 className="text-6xl font-extrabold tracking-wider mb-3">Leaderboard</h2>
			<div className=" flex flex-col max-h-[600px]  w-[90%]  max-w-[600px] overflow-y-scroll ">
				{leaderboard.leaderBoard.map((entry, index) => (
					<div key={index} className="flex justify-between ring-2 ring-blue-500 p-2 font-semibold font-mono" >
						<span>{entry.Member}</span>
						<span>{entry.Score}</span>
					</div>
				))}
			</div>
			<button
					className="outlined-btn gradient hover:text-white "
				onClick={() => {
					dispatch(closeLeaderBoard());
				}}
			>
				Close
			</button>
		</div>
	);
}

export default Leaderboard;
