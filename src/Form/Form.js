import { useState } from "react";

const Form = () => {
  const [dishType, setDishType] = useState(null);

  return (
    <div>
      <input placeholder="dish name" type="text" id="" />
      <input placeholder="Time" type="text" id="" />
      <div>
        custom select
        <button onClick={() => setDishType("Pizza")}>Pizza</button>
        <button onClick={() => setDishType("Soup")}>Soup</button>
        <button onClick={() => setDishType("Sandwich")}>Sandwich</button>
      </div>
    </div>
  );
};

export default Form;
