import React from "react";
import image1 from "../data/image2.jpg";

export default function CircularImage({ imageUrl, altText, size = 70 }) {
	return (
		<div
			style={{
				width: `${size}px`,
				height: `${size}px`,
				borderRadius: "50%",
				overflow: "hidden", // Ensures image stays within circular boundary
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				border: "2px solid #ddd", // Optional border
			}}
		>
			<img
				src={imageUrl}
				alt={altText}
				style={{
					width: "100%",
					height: "100%",
					objectFit: "cover", // Ensures image covers the entire circular area
				}}
			/>
		</div>
	);
}
