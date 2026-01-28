import { useEffect, useState } from "react";
import "./styles.css";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController(); // 🔥 Ustvarimo kontroler

    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal } // povežemo signal
        );

        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted 🚫");
        } else {
          console.log("Napaka:", error);
        }
      }
    }

    fetchUsers();

    return () => {
      controller.abort(); // 🧹 PREKINEMO fetch če komponenta izgine
    };
  }, []);

  return (
    <div className="box">
      <h2>Uporabniki</h2>
      {loading ? (
        <p>Nalaganje...</p>
      ) : (
        users.map((user) => <p key={user.id}>{user.name}</p>)
      )}
    </div>
  );
}

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="app">
      <h1>React 72 – AbortController</h1>

      <button onClick={() => setShow(!show)}>
        {show ? "Skrij uporabnike" : "Pokaži uporabnike"}
      </button>

      {show && <Users />}
    </div>
  );
}
