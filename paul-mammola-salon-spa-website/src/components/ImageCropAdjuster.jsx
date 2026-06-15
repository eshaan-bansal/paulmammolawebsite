import React, { useState } from "react";

export default function ImageCropAdjuster() {
  const [settings, setSettings] = useState({
    width: 140,
    height: 80,
    top: 45,
    objectPosition: "center 20%",
  });

  const updateSetting = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const copyToClipboard = () => {
    const style = `width: ${settings.width}%, height: ${settings.height}%, top: ${settings.top}%, left: 50%, translate: "-50% -50%", objectFit: "cover", objectPosition: "${settings.objectPosition}", transform: "rotate(-90deg)"`;
    navigator.clipboard.writeText(style);
    alert("Copied to clipboard!");
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#1A120A", color: "#F2EDE6", borderRadius: "8px", maxWidth: "400px" }}>
      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", marginBottom: "16px" }}>Image Crop Adjuster</h3>

      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", marginBottom: "8px", fontSize: "12px" }}>
          Width: {settings.width}%
        </label>
        <input
          type="range"
          min="100"
          max="200"
          value={settings.width}
          onChange={(e) => updateSetting("width", parseInt(e.target.value))}
          style={{ width: "100%" }}
        />
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", marginBottom: "8px", fontSize: "12px" }}>
          Height: {settings.height}%
        </label>
        <input
          type="range"
          min="50"
          max="120"
          value={settings.height}
          onChange={(e) => updateSetting("height", parseInt(e.target.value))}
          style={{ width: "100%" }}
        />
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", marginBottom: "8px", fontSize: "12px" }}>
          Vertical Position (top): {settings.top}%
        </label>
        <input
          type="range"
          min="20"
          max="70"
          value={settings.top}
          onChange={(e) => updateSetting("top", parseInt(e.target.value))}
          style={{ width: "100%" }}
        />
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", marginBottom: "8px", fontSize: "12px" }}>
          Object Position (Y): {settings.objectPosition}
        </label>
        <input
          type="text"
          value={settings.objectPosition}
          onChange={(e) => updateSetting("objectPosition", e.target.value)}
          placeholder="e.g. center 20%"
          style={{
            width: "100%",
            padding: "8px",
            backgroundColor: "#0A0A0A",
            border: "1px solid #7A9B6E",
            color: "#F2EDE6",
            borderRadius: "4px",
          }}
        />
      </div>

      <div
        style={{
          marginBottom: "16px",
          aspectRatio: "3/4",
          overflow: "hidden",
          border: "1px solid #7A9B6E",
        }}
      >
        <img
          src="https://media.base44.com/images/public/6a2b4b5f81a4eff0fcc04901/bee640958_image1.png"
          alt="preview"
          style={{
            position: "absolute",
            transform: "rotate(-90deg)",
            width: `${settings.width}%`,
            height: `${settings.height}%`,
            top: `${settings.top}%`,
            left: "50%",
            translate: "-50% -50%",
            objectFit: "cover",
            objectPosition: settings.objectPosition,
          }}
        />
      </div>

      <button
        onClick={copyToClipboard}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#7A9B6E",
          color: "#0A0A0A",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "500",
        }}
      >
        Copy Style to Clipboard
      </button>
    </div>
  );
}