import React from 'react';

function NavBar() {
  return (
    <div className="bg-gray-800 p-4">
      <button className="m-2 p-2 bg-blue-500 text-white rounded">Home</button>
      <button className="m-2 p-2 bg-blue-500 text-white rounded">About</button>
      <button className="m-2 p-2 bg-blue-500 text-white rounded">Contact</button>
    </div>
  );
}

export default NavBar;