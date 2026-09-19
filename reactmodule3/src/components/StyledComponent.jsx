import styled from "styled-components";

const Card = styled.div`
  background-color: #e8f5e9;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  color: #2e7d32;
`;

const Button = styled.button`
  background-color: green;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkgreen;
  }
`;

function StyledComponent() {
  return (
    <Card>
      <Title>Styled Components</Title>

      <p>
        This component uses Styled Components.
      </p>

      <Button>Click Me</Button>
    </Card>
  );
}

export default StyledComponent;