export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black-100">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/800px-Tux.svg.png"
        height="150px"
        width="150px"
        alt="Tux image"
        className="mb-4"
      />
      <h1 className="text-6xl font-bold text-white-800 mb-2">404</h1>
      <p className="text-xl text-white-600">
        What you are trying to look for is not available. Please check properly and continue.
      </p>
    </div>
  );
}