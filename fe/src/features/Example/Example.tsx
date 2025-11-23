import { useEffect, useState } from "react";

const getName = () => {
  const name = localStorage.getItem("username");
  return name ?? "";
};

export const Example = () => {
  const [name, setName] = useState(getName);

  useEffect(() => {
    localStorage.setItem("username", name);
  }, [name]);

  return (
    <div>
      <h2>example</h2>
      <div>{name ? name : "Player Unknown"}</div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
    </div>
  );
};
