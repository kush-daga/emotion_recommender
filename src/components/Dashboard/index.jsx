import React from "react";
import Webcam from "react-webcam";
export default function Dashboard() {
	const webcamRef = React.useRef(null);
	return (
		<div className="w-full h-screen flex flex-col justify-center align-center bg-gray-100">
			<nav className="fixed h-20 top-0 w-full bg-black flex align-center justify-between">
				<p className="text-white text-lg ml-10 self-center">Welcome Kush</p>
				<button className="text-black bg-gray-200 mr-10 self-center py-2 px-4 rounded-lg">
					Logout
				</button>
			</nav>
			<div className="flex-grow-0 w-auto max-w-screen-xl object-cover flex align-center justify-center w-100 bg-red-200 mx-auto">
				<Webcam
					audio={false}
					height={1080}
					ref={webcamRef}
					screenshotFormat="image/jpeg"
					width={1920}
				/>
				<div className="flex flex-col align-center justify-center p-4 ">
					<h1 className="text-xl font-bold mb-3 ">Get started</h1>
					<p className="text-md mb-5">
						Welcome to your dashboard, please allow the permission for camera,
						and let us take an image of your face after you are ready, click on
						<span className="font-bold"> Get Recommendations</span> and after
						that our software will return a list of Recommendations for you
						based on your face emotion and mood.
					</p>
					<button className="px-4 py-2 bg-black rounded-lg text-white">
						Get Recommendations
					</button>
				</div>
			</div>
		</div>
	);
}
