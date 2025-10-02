import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Cards from "./components/Cards";
import ModalSearch from "./components/ModalSearch";
import StaysContext from "./context/StaysContext";
import LocationSelectedContext from "./context/LocationSelectedContext";

export default function App() {
  const [toggleSearch, setToggleSearch] = useState(false);

  const [stays, setStays] = useState([]);

  const [locationSelected, setLocationSelected] = useState("Add location");

  useEffect(() => {
    axios
      .get("/stays.json")
      .then((res) => setStays(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <StaysContext.Provider value={stays}>
        <LocationSelectedContext.Provider value={locationSelected}>
          <div className="min-h-screen flex flex-col items-center">
            <header className="h-35 sm:h-25 w-80 sm:w-152 lg:w-250 flex flex-col sm:flex-row items-center justify-between px-2 py-3 sm:px-0 lg:px-4 transition-all duration-300">
              <Header />
              <Search
                toggleSearch={toggleSearch}
                setToggleSearch={setToggleSearch}
              />
            </header>
            <main className="w-80 sm:w-160 lg:w-250 transition-all duration-300 grow">
              <ModalSearch
                toggleSearch={toggleSearch}
                setToggleSearch={setToggleSearch}
                locationSelected={locationSelected}
                setLocationSelected={setLocationSelected}
              />
              <section className="h-12 flex items-center justify-start p-4">
                <h2 className="font-bold text-xl text-gray-700 px-1">
                  Stays in Finland
                </h2>
              </section>
              <Cards setLocationSelected={setLocationSelected} />
            </main>
            <footer className="text-xs text-gray-500 h-10 w-full flex items-center justify-center">
              <p>© 2025 - Os Godoy</p>
            </footer>
          </div>
        </LocationSelectedContext.Provider>
      </StaysContext.Provider>
    </>
  );
}
