import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/authService'; // Import your auth service

const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await AuthService.loginUser(
        data.email,
        data.password
      );
      navigate('/'); 
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">Email</label>
        <input 
          id="email" 
          type="email" 
          {...register('email', { required: 'Email is required' })} 
          placeholder="Enter your email" 
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input 
          id="password" 
          type="password" 
          {...register('password', { required: 'Password is required' })} 
          placeholder="Enter your password" 
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;
