export function Navbar() {
  return (
    <div className="bg-black flex flex-col items-center sm:flex-row justify-between">
      <div className="text-white size-24 flex justify-center items-center ">
        <a href="https://britwayairporttransfer.co.uk/">
          <img src="./img/Britway-Logo-200px.png" />
        </a>
      </div>
      <div className="flex justify-center items-center mb-4">
        <div className="flex ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 text-red-700"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
              clipRule="evenodd"
            />
          </svg>
          <h3 className="text-white">+44-203 627 2111 |</h3>
        </div>
        <div>
          <a href="https://britwayairporttransfer.co.uk/">
            <button
              className="bg-red-700 p-4 rounded-sm text-white font-semibold mx-auto ml-4 mr-4 w-32"
              style={{ cursor: "pointer" }}
            >
              Home
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
