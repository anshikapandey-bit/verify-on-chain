import React, { useState } from "react";

function App() {
  const [certId, setCertId] = useState("");
  const [result, setResult] = useState(null);

  const verifyCertificate = async () => {
    try {
      const res = await fetch(`http://localhost:8000/verify/${certId}`);
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setResult({ error: "Error verifying certificate" });
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Verify-On-Chain</h1>

      <input
        type="text"
        placeholder="Enter Certificate ID"
        value={certId}
        onChange={(e) => setCertId(e.target.value)}
      />

      <br /><br />

      <button onClick={verifyCertificate}>VERIFY</button>

      <div style={{ marginTop: "20px" }}>
        {result && (
          <pre>{JSON.stringify(result, null, 2)}</pre>
        )}
      </div>
    </div>
  );
}

export default App;