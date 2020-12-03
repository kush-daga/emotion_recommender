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
			className={`fixed shadow-xl h-3/4 w-3/4 bg-gray-300 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all ${
				!open ? "hidden" : "block"
			}`}
		>
			<button
				onClick={() => {
					setMoods([]);
					setNoOfFaces(0);
					setOpen(false);
				}}
			>
				Close
			</button>
			<div>
				{loading ? (
					"Loading Data"
				) : (
					<div>
						<div>
							{moods?.map((mood, i) => (
								<h2 key={i}>You seem {mood}</h2>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
