import styled from 'styled-components';
import TheBaseButton from "../components/Elements/Buttons/TheBaseButton";
import { useState } from "react";
import {useDispatch } from "react-redux";
import { useHistory } from "react-router"
import {useLogin} from "../hooks/useLogin";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const LoginPage = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loginUser, isLoading] = useLogin()
    const history = useHistory()

    const login = async (e) => {
        e.preventDefault()
        await loginUser(userName, password)
    }

    const proceedToRegistration = () => {
        history.push('/register')
    }

    return(
        <div className={'login-page'}>
            <Container>
                <Wrapper>
                    <Title>SIGN IN</Title>
                    <Form>
                        <Input type="text" placeholder='userName' onChange={(e) => setUserName(e.target.value)}/>
                        <Input type="password" placeholder='password'  onChange={(e) => setPassword(e.target.value)}/>
                        <TheBaseButton disabled={isLoading} buttonText={'Login'} onClick={login}/>
                        {/*{errorMessage && <Error>Something went wrong...</Error>}*/}
                        <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                        <Link onClick={proceedToRegistration}>CREATE A NEW ACCOUNT</Link>
                    </Form>
                </Wrapper>
            </Container>
        </div>
    )
}

export default LoginPage;