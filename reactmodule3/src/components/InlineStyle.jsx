function InlineStyle() {
  return (
    <div
      style={{
        backgroundColor: "#e3f2fd",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "20px",
      }}
    >
      <h2 style={{ color: "#1976d2" }}>Inline CSS</h2>

      <p style={{ fontSize: "18px" }}>
        This component uses inline CSS.
      </p>

      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default InlineStyle;