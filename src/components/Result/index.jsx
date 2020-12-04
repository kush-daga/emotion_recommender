import React, { useEffect, useState } from "react";
import recsArray from "../../assets/data";

export default function Result({
	open = false,
	loading,
	predictions,
	setOpen,
}) {
	const [noOfFaces, setNoOfFaces] = useState(0);
	const [moods, setMoods] = useState([]);
	const [reccomendations, setReccomendations] = useState([]);
	useEffect(() => {
		setMoods([]);
		setNoOfFaces(0);
		setReccomendations([]);
		if (predictions !== null) {
			setNoOfFaces(predictions.length);
			predictions.forEach((prediction) => {
				let maxMood = "";
				let maxPercent = 0;
				Object.keys(prediction.expressions).forEach((mood) => {
					if (prediction.expressions[mood] > maxPercent) {
						maxMood = mood;
						maxPercent = prediction.expressions[mood];
					}
				});
				let r;
				recsArray.forEach((rec) => {
					if (rec.mood === maxMood) {
						r = rec;
					}
				});
				setReccomendations((reccomendations) => {
					let _r = reccomendations;
					_r.push(r);
					return _r;
				});
				setMoods((moods) => {
					return [...moods, maxMood];
				});
			});
		}
	}, [predictions]);

	return (
		<div
			className={`fixed flex flex-col justify-start pt-20 align-center shadow-xl overflow-y-scroll h-3/4 w-3/4 rounded-xl bg-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all ${
				!open ? "hidden" : "block"
			}`}
		>
			<button
				className="absolute top-10 right-10 font-bold text-2xl text-red-400 hover:text-red-600"
				onClick={() => {
					setMoods([]);
					setNoOfFaces(0);
					setOpen(false);
				}}
			>
				X
			</button>
			<div>
				{loading ? (
					<h2 className="text-3xl bold text-center text-white">
						Loading Data!
					</h2>
				) : noOfFaces === 0 ? (
					<h2 className="text-3xl bold text-center text-white">
						No Faces found! Try Again!
					</h2>
				) : (
					<div className="flex flex-col justify-start w-3/4 m-auto">
						<div>
							{moods?.map((mood, index) => (
								<div>
									<h2 key={index} className="text-3xl bold text-white">
										Hey you look{" "}
										<span className="text-3xl text-red-500 border-red-500  pb-1 uppercase">
											{mood} !
										</span>
									</h2>
									<hr className="mt-5 border-gray-400" />
									<h2 className="text-white text-2xl mt-10 ">
										Here are some{" "}
										<span className="text-red-200">music playlist</span>{" "}
										recommendations for you:
									</h2>
									<div className="grid justify-between mt-5 grid-cols-4 gap-4 gap-y-5">
										{reccomendations[index].playlists.map((playlist) => {
											return (
												<a
													href={playlist.link}
													target="_blank"
													rel="noreferrer"
													className="text-red-900 bg-red-200 p-5 rounded-md visited:text-red-900 text-center self-center flex justify-center"
												>
													{playlist.name}
												</a>
											);
										})}
									</div>
									<h2 className="text-white text-2xl mt-10 ">
										Here are some <span className="text-red-200">Movie</span>{" "}
										recommendations for you:
									</h2>
									<div className="grid justify-between mt-5 grid-cols-4 gap-4 gap-y-5 mb-10">
										{/* {console.log(reccomendations[index].movies.splice(0, 3))} */}
										{reccomendations[index].movies.map((movie) => {
											return (
												<a
													href={movie.link}
													target="_blank"
													rel="noreferrer"
													className="text-red-900 bg-red-200 p-5 rounded-md flex flex-col align-center justify-center"
												>
													<img
														src={movie.image}
														alt="Cover"
														width="300px"
														height="300px"
														className="rounded-md cover"
													></img>
													<h2 className="text-center mt-3 font-bold">
														{movie.name}
													</h2>
												</a>
											);
										})}
									</div>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
