import image1 from "../data/image2.jpg";
import CircularImage from "./CircularImage";

export const renderCustomNode = ({ nodeDatum, toggleNode }) => (
	<g>
		{/* foreignObject allows embedding HTML within SVG */}
		<foreignObject x="-150" y="-25" width="300" height="100">
			{/* Custom div box with flexible styling */}
			<div
				style={{
					border: "1px solid #ddd",
					borderRadius: "5px",
					padding: "5px 10px",
					backgroundColor: "#00aaff",
					color: "white",
					display: "flex",
					alignItems: "center",
					whiteSpace: "nowrap", // Prevent text wrapping
					minWidth: "100px", // Minimum width of the box
					minHeight: "40px", // Minimum height of the box
				}}
				className="flex gap-4"
			>
				<CircularImage imageUrl={nodeDatum.image} />
				<div className="flex flex-col w-[70%] items-start justify-start gap-2">
					<h1 className="font-bold text-h1">{nodeDatum.name}</h1>
					<hr className="flex border border-white w-full" />
					<h1>{nodeDatum.designation}</h1>
				</div>
			</div>
		</foreignObject>
	</g>
);
