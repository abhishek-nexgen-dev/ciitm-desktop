import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";

function GreetForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("Enter a name to verify the Rust bridge.");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      if (typeof window !== "undefined" && "__TAURI_INTERNALS__" in window) {
        const response = await invoke<string>("greet", { name });
        setMessage(response);
      } else {
        setMessage(`Hello, ${name || "world"}! (Web runtime)`);
      }
    } catch {
      setMessage(`Hello, ${name || "world"}!`);
    }
  }

  return (
    <form className="greet-form" onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(event) => setName(event.currentTarget.value)}
        placeholder="Enter a name"
        aria-label="Name"
      />
      <button type="submit">Run command</button>
      <p className="greet-message">{message}</p>
    </form>
  );
}

export { GreetForm };
