import loadercat from "../images/loadercat.png"
export default function Loader() {
	//This is the loader component that is rendered when the status is loading
	return (
		<div className="loader-container flex justify-center items-center">
			<div className="loader"></div>
			<p>
				<span>
					<img className="loaderimg" src={loadercat} alt="Loader" />
				</span>
		
			</p>
		</div>
	);
}
