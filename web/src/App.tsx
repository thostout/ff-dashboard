import { useEffect, useState } from "react";

type Health = { status: string; time: string };

function App() {
  const [health, setHealth] = useState<Health | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/health")
      .then((res) => res.json())
      .then(setHealth)
      .catch((err) => setError(err.message));

  }, []);

return (
    <div>
      <h1>Fantasy Copilot</h1>
      {error && <p>Error: {error}</p>}
      {health ? <p>Server says: {health.status} at {health.time}</p> : <p>Loading...</p>}
    </div>
  );
}

export default App;