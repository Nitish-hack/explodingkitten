import { useState } from "react";
import { useDispatch } from "react-redux";
import hero from "../images/explodingkittenhero.jpeg"
import { getCurrentGame } from "../features/game/gameSlice";

function Auth() {
	const [email, setEmail] = useState("");

	const dispatch = useDispatch();

	function handleAuth(e) {
		e.preventDefault();

		dispatch(getCurrentGame(email));

		setEmail("");
	}

	return (
		<div className="auth h-full w-full flex max-[1000px]:flex-col ">

			<div className="w-1/2 max-[1000px]:w-full">
				<img src={hero} className="w-full" alt="exploding kitten" />
			</div>
			<div className="w-1/2 flex flex-col justify-center max-[1000px]:w-full max-[1000px]:mt-5">
				<form onSubmit={handleAuth}	 className="min-[1000px]:w-[80%]">
					<input
						type="email"
						placeholder="Enter your email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="block w-full px-4 py-4 border rounded-md mb-4 focus:outline-none bg-inherit text-white font-semibold"
					/>
					<button
					className="border-solid border-2 border-sky-500 p-2 rounded-lg tracking-wide font-bold "
						type="submit"
						
					>
						Start Game
					</button>
				</form>
			</div>

		</div>
	);
}

export default Auth;
