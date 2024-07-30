import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 p-4 flex justify-center items-center space-x-4">
      <Link href="/profile/1">
        <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-black-700 transition duration-300">Profile</button>
      </Link>
      <Link href="/settings/1">
        <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-black-700 transition duration-300">Settings</button>
      </Link>
      <p>Jeethan Roche 2024</p>
    </footer>
  );
}