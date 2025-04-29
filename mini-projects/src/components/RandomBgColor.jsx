import React, { useEffect, useState } from "react";

function RandomBgColor() {
  const [color, setColor] = useState("#000000");
  const [typeOfColor, setTypeOfColor] = useState("hex");

  function randomColor(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColor(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColor(256);
    const g = randomColor(256);
    const b = randomColor(256);

    setColor(`rgb(${r},${g}, ${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: color,
        }}
      >
        <button onClick={() => setTypeOfColor("hex")}>HEX Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>RGB Color</button>
        <button
          onClick={
            typeOfColor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
        >
          Generate Random Color
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontSize: "60px",
            marginTop: "50px",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
          <h1>{color}</h1>
        </div>
      </div>
    </>
  );
}

export default RandomBgColor;
