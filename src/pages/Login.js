import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ isLogin, setLogin }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Halaman Login</h2>
      <p>
        <button
          onClick={() => {
            setLogin(true);
            navigate('/');
          }}
        >
          Login
        </button>

        {/* {isLogin ? (
          <button
            onClick={() => {
              setLogin(false);
              navigate('/login');
            }}
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => {
              setLogin(true);
              navigate('/');
            }}
          >
            Login
          </button>
        )} */}
      </p>
    </div>
  );
};

export default Login;
