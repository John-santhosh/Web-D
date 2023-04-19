import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>short circuit - examples</h2>
      <h3>
        {name && (
          <div>
            <h1>john</h1>
          </div>
        )}
      </h3>
    </div>
  );
};

export default ShortCircuitExamples;
