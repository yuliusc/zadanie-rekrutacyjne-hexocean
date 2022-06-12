import styled from "styled-components";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  padding: 10px 0;
  box-shadow: 0 0 10px #dddddd;

  @media (min-width: 575px) {
    width: 550px;
  }
`;

const Input = styled.input`
  background: #edf2f5;
  border: none;
  min-height: 40px;
  border-radius: 3px;
  outline: none;
  width: 200px;
  padding: 0 5px;
  box-sizing: border-box;
`;

const Select = styled.select`
  background: #edf2f5;
  border: none;
  min-height: 40px;
  border-radius: 3px;
  outline: none;
  width: 200px;
`;

const InputNumber = styled.input`
  background: #edf2f5;
  border: none;
  min-height: 40px;
  border-radius: 3px;
  outline: none;
  width: 100px;
  padding: 0 5px;
`;

const InputRange = styled.input`
  -webkit-appearance: none !important;
  width: 200px;
  height: 25px;
  border: none;
  background: #e59e6e52 !important;
  border-radius: 20px;
  padding: 0 3px;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: "#8d0404";
    background-color: ${(spiciness) => {
      if (spiciness.spiciness > 8 || spiciness.spiciness === null)
        return "#8d0404";
      else if (spiciness.spiciness > 6) return "#c32222";
      else if (spiciness.spiciness > 3) return "#db4b4b";
      else return "#e17f7f";
    }};
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 10px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  height: auto;

  @media (min-width: 575px) {
    height: 60px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SubmitButton = styled.button`
  background: rgb(229 158 110);
  outline: none;
  color: white;
  width: 80%;
  border: none;
  height: 40px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
`;

const Label = styled.label`
  font-size: 12px;
  margin-bottom: 2px;
`;

const ValidationInfo = styled.p`
  margin: 0;
  font-size: 14px;
`;

export {
  Container,
  Input,
  InputNumber,
  Column,
  Row,
  SubmitButton,
  Select,
  InputRange,
  Label,
  ValidationInfo,
};
