import { useState } from "react";

const PizzaOption = () => {
  return (
    <div>
      <label htmlFor="no_of_slices"># of slices</label>
      <input type="number" name="no_of_slices" />
      <label htmlFor="diameter">diameter</label>
      <input type="number" step="0.01" name="diameter" />
    </div>
  );
};

const SoupOption = () => {
  return (
    <div>
      <label htmlFor="spiciness_scale">spiciness scale</label>
      <input type="number" name="spiciness_scale" />
      {/* spiciness_scale - spiciness scale (1-10) */}
    </div>
  );
};

const SandwichOption = () => {
  return (
    <div>
      <label htmlFor="slices_of_bread">slices of bread</label>
      <input type="number" name="slices_of_bread" />
    </div>
  );
};

const Form = () => {
  const [dishType, setDishType] = useState("");
  const [data, setData] = useState("");

  const change = (e) => {
    console.log(e.target.value);
    setDishType(e.target.value);
  };

  return (
    <form>
      <input placeholder="dish name" type="text" id="" />
      <input placeholder="Time" type="text" id="" />
      {/* <div>
        custom select
        <button onClick={() => setDishType("Pizza")}>Pizza</button>
        <button onClick={() => setDishType("Soup")}>Soup</button>
        <button onClick={() => setDishType("Sandwich")}>Sandwich</button>
      </div> */}

      <select onChange={change} value={dishType}>
        <option>Pizza</option>
        <option>Soup</option>
        <option>Sandwich</option>
      </select>

      <div>
        {dishType}
        {
          {
            Pizza: <PizzaOption />,
            Soup: <SoupOption />,
            Sandwich: <SandwichOption />,
          }[dishType]
        }
      </div>
    </form>
  );
};

export default Form;
