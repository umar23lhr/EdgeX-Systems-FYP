import React from "react";

export default function ScrollDown({ className = "" }) {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={scrollToNext}
      className={`flex flex-col items-center cursor-pointer ${className}`}
    >
      {/* Mouse Outline */}
      <div
        style={{
          width: "24px",
          height: "40px",
          border: "2px grey solid",
          borderRadius: "12px",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "4px",
        }}
      >
        {/* Dot */}
        <div
          style={{
            width: "6px",
            height: "6px",
            backgroundColor: "grey",
            borderRadius: "50%",
            animation: "scrollDot 1.5s infinite",
          }}
        />
      </div>
      <p style={{ fontSize: "8px", color: "grey", marginTop: "4px",marginbottom: "4px", letterSpacing: "2px" }}>
        SCROLL
      </p>

      {/* Inline keyframes */}
      <style>
        {`
          @keyframes scrollDot {
            0% { transform: translateY(0); opacity: 1; }
            50% { transform: translateY(8px); opacity: 0.3; }
            100% { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}