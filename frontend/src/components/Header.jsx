import { useDispatch } from "react-redux";
import { getLeaderBoard } from "../features/leaderboard/leaderboardSlice";
import logo from "../images/Exploding.png"

function Header() {
	const dispatch = useDispatch();
	return (
		<header className="app-header">
			<div
				className="flex justify-center items-center cursor-pointer"
				onClick={() => {
					window.location.reload();
				}}
			>
				<img
					src={logo}
					className="h-[8rem] w-[15rem] max-[500px]:h-[5rem] max-[500px]:w-[10rem]"
					alt="Cat card"
				/>
			
			</div>
			<div
				className="border-solid border-2 border-sky-500 p-2 rounded-lg tracking-wide font-bold cursor-pointer"
				onClick={() => dispatch(getLeaderBoard())}
			>
				Leaderboard
			</div>
		</header>
	);
}

export default Header;
