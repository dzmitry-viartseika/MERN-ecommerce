import styled from 'styled-components';

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: $colorBtn;
  color: $color-primary;
  cursor: pointer;
  margin-bottom: 10px;
  
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const TheBaseButton = ({ type = 'button', buttonText = 'Button', onClick, disabled }) => {
    return (
        <Wrapper>
            <Button onClick={onClick} type={type} disabled={disabled}> { buttonText } </Button>
        </Wrapper>
    )
}

export default TheBaseButton;