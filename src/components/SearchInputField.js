import React from "react";

export default function SearchInputField() {
	const handleChange = (event) => {
		console.log(event.target.value);
	};
	return (
		<input
			onChange={handleChange}
			className="nav_input"
			type="text"
			placeholder="Search..."
		/>
	);
}
