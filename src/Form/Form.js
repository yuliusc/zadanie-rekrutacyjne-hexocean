import useForm from "./useForm";
import {
  Container,
  Input,
  Row,
  InputNumber,
  Column,
  SubmitButton,
  Select,
  InputRange,
  Label,
  ValidationInfo,
} from "./Form.styles";

const PizzaOption = () => {
  return (
    <Row>
      <Column>
        <Label htmlFor="no_of_slices">No of slices</Label>
        <InputNumber
          type="number"
          name="no_of_slices"
          min="1"
          pattern="[0-9]*"
          required
        />
      </Column>
      <Column>
        <Label htmlFor="diameter">Diameter</Label>
        <InputNumber type="number" step="0.1" name="diameter" required />
      </Column>
    </Row>
  );
};

const SandwichOption = () => {
  return (
    <Row>
      <Column>
        <Label htmlFor="slices_of_bread">Slices of bread</Label>
        <InputNumber type="number" name="slices_of_bread" min="1" required />
      </Column>{" "}
    </Row>
  );
};

const SoupOption = ({ spiciness }) => {
  return (
    <Row>
      <Label htmlFor="spiciness_scale">Spiciness</Label>
      <InputRange
        type="range"
        min="1"
        max="10"
        step="1"
        name="spiciness_scale"
        spiciness={spiciness}
        required
      />
    </Row>
  );
};
const Form = () => {
  const {
    data,
    changeHandler,
    submitForm,
    changeDishType,
    type,
    validationInfo,
  } = useForm();

  return (
    <Container onSubmit={submitForm} onChange={changeHandler}>
      <Row>
        <Column>
          <Label htmlFor="name">Dish name</Label>
          <Input type="text" name="name" required />
        </Column>
        <Column>
          <Label htmlFor="preparation_time">Preparation time</Label>
          <Input type="time" name="preparation_time" step="1" required />
        </Column>
      </Row>
      <Row>
        <Column>
          <Label htmlFor="type">Choose dish type</Label>
          <Select onChange={changeDishType} value={type} name="type">
            <option name="default" disabled={type}>
              Choose dish type
            </option>
            <option name="pizza">Pizza</option>
            <option name="poup">Soup</option>
            <option name="sandwich">Sandwich</option>
          </Select>
        </Column>
      </Row>
      {
        {
          Pizza: <PizzaOption />,
          Soup: (
            <SoupOption
              spiciness={data.spiciness_scale && data.spiciness_scale}
            />
          ),
          Sandwich: <SandwichOption />,
        }[type]
      }
      {type !== "" && <SubmitButton>Add data</SubmitButton>}
      <ValidationInfo>{validationInfo}</ValidationInfo>
    </Container>
  );
};

export default Form;
