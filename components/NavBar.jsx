import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-gray-800 p-4 flex space-x-4">
      <Link href="/">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">Home</button>
      </Link>
      <Link href="/profiles">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">Profile</button>
      </Link>
      <Link href="/login">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">Login</button>
      </Link>
    </nav>
  );
}