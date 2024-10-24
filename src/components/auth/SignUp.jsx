import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/authService'; // Import your auth service

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // Send form data to create the user
      await AuthService.createUser(
        data.name,
        data.username,
        data.email,
        data.password,
        data.role
      );
      navigate('/'); 
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input 
          id="name" 
          {...register('name', { required: 'Name is required' })} 
          placeholder="Enter your name" 
        />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

      <div>
        <label htmlFor="username">Username</label>
        <input 
          id="username" 
          {...register('username', { required: 'Username is required' })} 
          placeholder="Enter your username" 
        />
        {errors.username && <span>{errors.username.message}</span>}
      </div>

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

      <div>
        <label htmlFor="role">Role</label>
        <select 
          id="role" 
          {...register('role', { required: 'Role is required' })}>
          <option value="">Select a role</option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
        {errors.role && <span>{errors.role.message}</span>}
      </div>

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
