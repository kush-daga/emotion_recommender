import React, { useEffect, useState } from "react";

export default function Result({
	open = false,
	loading,
	predictions,
	setOpen,
}) {
	const [noOfFaces, setNoOfFaces] = useState(0);
	const [moods, setMoods] = useState([]);
	useEffect(() => {
		setMoods([]);
		setNoOfFaces(0);
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
				setMoods((moods) => {
					return [...moods, maxMood];
				});
			});
		}
	}, [predictions]);

	return (
		<div
			className={`fixed flex flex-col justify-start pt-20 align-center shadow-xl overflow-y-auto max-h-100 w-3/4 rounded-xl bg-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all ${
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
					"Loading Data"
				) : (
					<div className="flex flex-col justify-start w-3/4 m-auto">
						<div className="text-3xl bold text-white">
							{moods?.map((mood, i) => (
								<h2 key={i}>
									Hey you look{" "}
									<span className="text-3xl text-red-500 border-red-500  pb-1 uppercase">
										{mood} !
									</span>
								</h2>
							))}
						</div>
						<hr className="mt-5 border-gray-400" />
						<h2 className="text-white text-2xl mt-10 ">
							Here are some <span className="text-red-200">music playlist</span>{" "}
							recommendations for you:
						</h2>
						<div className="grid justify-between mt-5 grid-cols-4 gap-4 gap-y-5">
							{[1, 2, 3, 4, 5, 6, 7].map((playlist) => {
								return (
									<div className="text-red-900 bg-red-200 p-5 rounded-md">
										Ultimate Mood Booster Songs
									</div>
								);
							})}
						</div>
						<h2 className="text-white text-2xl mt-10 ">
							Here are some <span className="text-red-200">Movie</span>{" "}
							recommendations for you:
						</h2>
						<div className="grid justify-between mt-5 grid-cols-4 gap-4 gap-y-5 mb-10">
							{[1, 2, 3, 4].map((playlist) => {
								return (
									<div className="text-red-900 bg-red-200 p-5 rounded-md flex flex-col align-center justify-center ">
										<img
											src="https://source.unsplash.com/random/300x300/?movie"
											alt="Cover"
											className="rounded-md"
										></img>
										<h2 className="text-center mt-3 font-bold">
											Catch Me if you can!
										</h2>
									</div>
								);
							})}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
