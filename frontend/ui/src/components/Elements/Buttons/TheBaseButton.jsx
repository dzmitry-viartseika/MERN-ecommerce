import styled from 'styled-components';

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;
const TheBaseButton = ({ type = 'button', buttonText = 'Button', onClick, disabled }) => {
    return (
        <Button onClick={onClick} type={type} disabled={disabled}> { buttonText } </Button>
    )
}

export default TheBaseButton;