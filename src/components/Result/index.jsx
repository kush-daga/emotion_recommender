import React from "react";

export default function Result({ open = false }) {
	return (
		<div
			className={`fixed shadow-xl h-3/4 w-3/4 bg-gray-300 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all ${
				!open ? "hidden" : "block"
			}`}
		>
			<div></div>
		</div>
	);
}
