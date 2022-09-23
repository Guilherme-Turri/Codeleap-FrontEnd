import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { USER_LOGIN, USER_TOKEN } from '../../api';
import useFetch from '../../Hooks/useFetch';
import { setLogged } from '../../store/loginUser';
import Head from '../../Helper/Head';
import styles from './Login.module.css';
import Loading from '../../Helper/Loading';
import Message from '../../Helper/Message';
import NavigateButton from '../../Helper/Form/NavigateButton';
import SubmitButton from '../../Helper/Form/SubmitButton';
import Input from '../../Helper/Form/Input';
import useForm from '../../Hooks/useForm';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usermail = useForm();
  const userpass = useForm();

  const [message, setMessage] = React.useState('');
  const { loading, request } = useFetch();

  const { logged } = useSelector((state) => state.loginUser);

  React.useEffect(() => {
    if (logged) {
      navigate('/home');
    }
  }, [logged, navigate]);

  async function loginUser(e) {
    e.preventDefault();
    if (userpass.value && usermail.value) {
      setMessage('');
      const { url, options } = USER_LOGIN(usermail.value, userpass.value);
      const { response, json } = await request(url, options);

      if (response.ok && json.user === false) {
        setMessage(json.status);
      }
      if (response.ok && json.status === 'ok' && json.token) {
        localStorage.setItem('token', json.token);
        validateTheToken(json.token, usermail.value, userpass.value);
      }
    }
  }

  async function validateTheToken(token, email, password) {
    const { url, options } = USER_TOKEN(token, email, password);
    const { response, json } = await request(url, options);

    if (response.status === 401) {
      setMessage(response.statusText);
    }
    if (response.status === 200 && json.user) {
      dispatch(setLogged(json));
      navigate('/home');
    }
  }

  return (
    <div className={styles.container}>
      <Head title="Enter" />
      <h1 className={styles.title}>Codeleap - Login</h1>
      <form className={styles.form} onSubmit={loginUser} id="sendForm">
        <Input type="email" placeholder="email" {...usermail} />
        <Input type="password" placeholder="password" {...userpass} />

        <SubmitButton
          email={usermail.value}
          password={userpass.value}
          loading={loading}
        />
      </form>
      <NavigateButton text={'Create Account'} target={'/register'} />
      {loading && <Loading />}
      {message && <Message msg={message} />}{' '}
    </div>
  );
};

export default Login;
