import React from "react";

export default function CircularImage({ imageUrl, altText, size = 70 }) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid #ddd",
      }}
      data-testid="ImageId"
    >
      <img
        src={imageUrl}
        alt={altText}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}
