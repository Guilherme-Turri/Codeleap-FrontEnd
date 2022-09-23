import React from 'react';
import { USER_REGISTER } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Head from '../../Helper/Head';
import styles from './Register.module.css';
import Loading from '../../Helper/Loading';
import NavigateButton from '../../Helper/Form/NavigateButton';
import Message from '../../Helper/Message';
import SubmitButton from '../../Helper/Form/SubmitButton';
import Input from '../../Helper/Form/Input';
import useForm from '../../Hooks/useForm';

const Register = () => {
  const [message, setMessage] = React.useState('');
  const { loading, request } = useFetch();

  const username = useForm();
  const usermail = useForm();
  const userpass = useForm();

  async function registerUser(e) {
    e.preventDefault();
    setMessage('');
    if (username.value && usermail.value && userpass.value) {
      const { url, options } = USER_REGISTER(
        username.value,
        usermail.value,
        userpass.value,
      );

      const { response, json } = await request(url, options);
      if (response.ok && json.status === 'ok') {
        setMessage(json.msg);
      } else {
        setMessage(json.msg);
      }
    }
  }
  return (
    <div className={styles.container}>
      <Head title="Create Account" />
      <h1 className={styles.title}>Codeleap - Register</h1>
      <form className={styles.form} onSubmit={registerUser} id="sendForm">
        <Input type="text" placeholder="name" {...username} />
        <Input type="email" placeholder="email" {...usermail} />
        <Input type="password" placeholder="password" {...userpass} />

        <SubmitButton
          email={usermail.value}
          loading={loading}
          password={userpass.value}
          name={username.value}
        />
      </form>
      <NavigateButton text="Back" target="/" />
      {loading && <Loading />}
      {message && <Message msg={message} />}
    </div>
  );
};

export default Register;
