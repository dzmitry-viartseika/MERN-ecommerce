import styled from 'styled-components';
import TheBaseButton from "../components/Elements/Buttons/TheBaseButton";
import { useState } from "react";
import {login} from "../services/User/UserService";
import {useDispatch ,useSelector} from "react-redux";
import { useHistory } from "react-router"

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

// const Input = styled.input`
//   flex: 1;
//   min-width: 40%;
//   margin: 10px 0;
//   padding: 10px;
// `;
//

//
const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const LoginPage = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const { isFetching, error } = useSelector((state) => state.user);
    const dispatch = useDispatch()
    const history = useHistory()

    const loginUser = async (e) => {
        e.preventDefault();
        await login(dispatch, { username: userName, password });
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
                        <input type="text" onChange={(e) => setUserName(e.target.value)}/>
                        <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                        <TheBaseButton disabled={isFetching} buttonText={'Login'} onClick={loginUser}/>
                        {error && <Error>Something went wrong...</Error>}
                        <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                        <Link onClick={proceedToRegistration}>CREATE A NEW ACCOUNT</Link>
                    </Form>
                </Wrapper>
            </Container>
        </div>
    )
}

export default LoginPage;