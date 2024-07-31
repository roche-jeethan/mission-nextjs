import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const LoginPage = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold mb-4">Login to Rochlike</h1>
        <form className="flex flex-col space-y-4">
          <input type="email" placeholder="Email" className="px-4 py-2 border rounded" />
          <input type="password" placeholder="Password" className="px-4 py-2 border rounded" />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">Login</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;