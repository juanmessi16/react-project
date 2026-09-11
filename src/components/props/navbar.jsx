import { useState } from "react";

function Navbar() {
  const [openLoginPage, setOpenLoginPage] = useState(false);
  const [title, setTitle] = useState("Ini State");

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
           <h1 className="text-2xl font-bold text-blue-600 w-56 truncate">{title}</h1>
        <div className="flex gap-6">
          <a
            onClick={() => {
               if (title === "Bukan Home") {
                 setTitle("Home");
               } else {
                 setTitle("Ini Home");
               }
                
            }}
            href="#"
            className="text-gray-600 hover:text-blue-600"
          >
            Home
          </a>

          <a
            onClick={() => {
              setTitle("Tentang Kami");
            }}
            href="#"
            className="text-gray-600 hover:text-blue-600"
          >
            Tentang
          </a>

          <a
            onClick={() => {
              setTitle("Layanan Kami");
            }}
            href="#"
            className="text-gray-600 hover:text-blue-600"
          >
            Layanan
          </a>

          <a
            onClick={() => {
              setTitle("Hubungi Kami");
            }}
            href="#"
            className="text-gray-600 hover:text-blue-600"
          >
            Kontak
          </a>
        </div>

        <button
          onClick={() => {
            setOpenLoginPage(!openLoginPage);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {openLoginPage ? "Tutup Login" : "Login"}
        </button>
      </div>

      {openLoginPage && (
        <div className="max-w-6xl mx-auto px-6 py-4 border-t border-gray-200">
          <form className="flex flex-col gap-3 max-w-sm">
            <input
              type="text"
              placeholder="Username"
              className="border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 rounded px-3 py-2"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Masuk
            </button>
          </form>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
