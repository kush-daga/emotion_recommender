import React, { useState } from "react";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();

		// console.log(e, values);
	};

	return (
		<div className="w-full h-screen flex flex-col justify-center align-center bg-gray-100">
			<div className="flex mx-auto max-w-6xl h-1/2 shadow-2xl justify-center align-center rounded-lg overflow-hidden">
				<div className="flex flex-col w-1/2 p-5 align-center justify-center bg-white">
					<h1 className="text-3xl ml-5 font-bold mb-5 underline">
						Start your journey now
					</h1>
					<p className="ml-5 text-lg">
						Get started by logging in and exploring yourself better than you
						know! Enjoy our curated playlists and movie shows based on your
						current mood
					</p>
				</div>
				<form
					onSubmit={onSubmit}
					className="flex flex-col justify-center align-center p-10 m-0 bg-gray-200 flex-1"
				>
					<input
						name="email"
						className="mb-5 border-2 border-gray-300 focus:border-gray-600 outline-none p-3 rounded-xl shadow-sm"
						type="text"
						placeholder="Email address"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					></input>
					<input
						name="password"
						type="password"
						placeholder="Enter your Password"
						className="mb-5  border-2 border-gray-300 focus:border-gray-600 outline-none p-3 rounded-xl shadow-sm"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					></input>
					<button
						type="submit"
						className="py-4 px-2 active:bg-gray-800 bg-black text-white w-1/3 self-center mt-2 hover:shadow-2xl "
					>
						Login
					</button>
				</form>
			</div>
		</div>
	);
}
